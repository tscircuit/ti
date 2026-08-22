import { existsSync } from "node:fs";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

import ts from "typescript";

import {
  fetchTiDocumentViewerPinout,
  type TiDocumentPin,
  type TiPinoutFetchResult,
} from "./ti-document-viewer-pinout.ts";

const CACHE_VERSION = 2;
const DEFAULT_CONCURRENCY = 4;
const DEFAULT_RETRIES = 2;
const PHYSICAL_COORDINATE_THRESHOLD = 0.8;

export interface TiSysblocksCatalogEntry {
  family: string;
  source: "existing" | "jlcpcb" | "ti-datasheet";
  manufacturerPartNumber?: string;
  componentExportName?: string;
  package?: string;
  packageCode?: string;
  pinCount?: number;
}

export interface PinLabelCoordinateStats {
  pinLabelCount: number;
  coordinateLabelCount: number;
  coordinateLabelRatio: number;
  physicalOnlyPinCount: number;
  physicalOnly: boolean;
  numericPhysicalOnly: boolean;
}

export interface PinoutCandidate {
  family: string;
  catalogSource: TiSysblocksCatalogEntry["source"];
  manufacturerPartNumber: string;
  packageDescription?: string;
  packageCode: string;
  expectedPinCount: number;
  selectionReason:
    | "ti-datasheet"
    | "jlcpcb-physical-coordinate-labels"
    | "jlcpcb-numeric-physical-labels";
  pinLabelSourcePath?: string;
  coordinateLabelRatio?: number;
  pinLabelCount?: number;
  coordinateLabelCount?: number;
  physicalOnlyPinCount?: number;
  physicalOnly?: boolean;
  numericPhysicalOnly?: boolean;
  inputFingerprint: string;
}

export interface CandidateSelectionDiagnostics {
  catalogEntries: number;
  tiDatasheetCandidates: number;
  jlcpcbEntriesInspected: number;
  jlcpcbCoordinateCandidates: number;
  jlcpcbNumericPhysicalCandidates: number;
  jlcpcbNonArrayPackage: number;
  jlcpcbMissingComponentFile: number;
  jlcpcbMissingPinLabels: number;
  invalidCatalogEntries: number;
}

interface PinoutCacheCommon extends PinoutCandidate {
  cacheVersion: typeof CACHE_VERSION;
  fetchedAt: string;
  attempts: number;
  rootUrl: string;
  warnings: string[];
}

export type PinoutCacheEntry =
  | (PinoutCacheCommon & {
      status: "ok";
      sectionUrl: string;
      packageColumn: string;
      tableClass: string;
      pins: TiDocumentPin[];
    })
  | (PinoutCacheCommon & {
      status: "unavailable";
      sectionUrl?: string;
      reason: Exclude<TiPinoutFetchResult, { status: "ok" }>["reason"];
      message: string;
      packageColumns?: string[];
    });

export type PinoutCache = Record<string, PinoutCacheEntry>;

export interface PinoutCacheSummary {
  selected: number;
  resumed: number;
  fetched: number;
  successes: number;
  unavailable: number;
  pinCountMatches: number;
  pinCountMismatches: number;
  unavailableByReason: Record<string, number>;
  selection: CandidateSelectionDiagnostics;
}

type ComponentSourceReader = (
  entry: TiSysblocksCatalogEntry,
) => Promise<{ path: string; sourceText: string } | undefined>;

const unwrapExpression = (expression: ts.Expression): ts.Expression => {
  if (
    ts.isAsExpression(expression) ||
    ts.isTypeAssertionExpression(expression) ||
    ts.isParenthesizedExpression(expression) ||
    ts.isSatisfiesExpression(expression)
  ) {
    return unwrapExpression(expression.expression);
  }
  return expression;
};

const getPropertyName = (name: ts.PropertyName, sourceFile: ts.SourceFile) => {
  if (
    ts.isIdentifier(name) ||
    ts.isStringLiteral(name) ||
    ts.isNumericLiteral(name)
  ) {
    return name.text;
  }
  return name.getText(sourceFile).replace(/^['"]|['"]$/g, "");
};

const getStringAliases = (expression: ts.Expression) => {
  const unwrapped = unwrapExpression(expression);
  if (
    ts.isStringLiteral(unwrapped) ||
    ts.isNoSubstitutionTemplateLiteral(unwrapped)
  ) {
    return [unwrapped.text];
  }
  if (!ts.isArrayLiteralExpression(unwrapped)) return [];
  return unwrapped.elements.flatMap((element) => {
    if (
      ts.isStringLiteral(element) ||
      ts.isNoSubstitutionTemplateLiteral(element)
    ) {
      return [element.text];
    }
    return [];
  });
};

const isPhysicalCoordinateLabel = (label: string) =>
  // JEDEC BGA rows omit visually ambiguous I/O/Q/S/X/Z. Limiting the prefix
  // to two row letters also keeps functional aliases such as PIN1, VCC1,
  // AIN5, and OUT1 from being misclassified as package coordinates.
  /^[A-HJ-NPRT-WY]{1,2}[1-9]\d{0,2}$/i.test(label.trim());

const isNumericPhysicalLabel = (label: string) =>
  /^(?:PIN_?)?\d+$/i.test(label.trim());

const isPhysicalOnlyAliases = (aliases: readonly string[]) =>
  aliases.length > 0 &&
  aliases.every(
    (alias) =>
      isNumericPhysicalLabel(alias) || isPhysicalCoordinateLabel(alias),
  );

const isArrayPackage = (packageDescription: string | undefined) =>
  /(?:BGA|CSP|PICOSTAR)/i.test(packageDescription ?? "");

export const getPinLabelCoordinateStats = (
  sourceText: string,
  sourcePath = "component.tsx",
): PinLabelCoordinateStats | undefined => {
  const sourceFile = ts.createSourceFile(
    sourcePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  let pinLabels: ts.ObjectLiteralExpression | undefined;

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (
        !ts.isIdentifier(declaration.name) ||
        declaration.name.text !== "pinLabels" ||
        !declaration.initializer
      ) {
        continue;
      }
      const initializer = unwrapExpression(declaration.initializer);
      if (ts.isObjectLiteralExpression(initializer)) pinLabels = initializer;
    }
  }
  if (!pinLabels) return undefined;

  const entries = pinLabels.properties.flatMap((property) => {
    if (!ts.isPropertyAssignment(property)) return [];
    const pinKey = getPropertyName(property.name, sourceFile);
    if (!/^pin\d+$/i.test(pinKey)) return [];
    return [getStringAliases(property.initializer)];
  });
  if (entries.length === 0) return undefined;

  const hasGeneratedFunctionalMetadata =
    /\bconst\s+pinRoles\s*=/.test(sourceText) &&
    /\bconst\s+pinAttributes\s*=/.test(sourceText);
  const coordinateLabelCount = entries.filter((aliases) =>
    aliases.some(isPhysicalCoordinateLabel),
  ).length;
  const physicalOnlyPinCount = entries.filter((aliases) =>
    hasGeneratedFunctionalMetadata
      ? aliases.some(
          (alias) =>
            isNumericPhysicalLabel(alias) || isPhysicalCoordinateLabel(alias),
        )
      : isPhysicalOnlyAliases(aliases),
  ).length;
  return {
    pinLabelCount: entries.length,
    coordinateLabelCount,
    coordinateLabelRatio: coordinateLabelCount / entries.length,
    physicalOnlyPinCount,
    physicalOnly: physicalOnlyPinCount === entries.length,
    numericPhysicalOnly: entries.every((aliases) =>
      hasGeneratedFunctionalMetadata
        ? aliases.some(isNumericPhysicalLabel)
        : aliases.length > 0 && aliases.every(isNumericPhysicalLabel),
    ),
  };
};

const componentFilenameCandidates = (entry: TiSysblocksCatalogEntry) => [
  entry.componentExportName,
  entry.manufacturerPartNumber?.replace(/[^A-Za-z0-9_]/g, "_"),
];

const createDefaultComponentSourceReader = (
  repoRoot: string,
): ComponentSourceReader => {
  return async (entry) => {
    for (const filename of componentFilenameCandidates(entry).filter(
      (candidate): candidate is string => Boolean(candidate),
    )) {
      for (const sourcePath of [
        resolve(repoRoot, "lib/chips", `${filename}.circuit.tsx`),
        resolve(repoRoot, "imports", `${filename}.tsx`),
      ]) {
        if (!existsSync(sourcePath)) continue;
        return {
          path: relative(repoRoot, sourcePath),
          sourceText: await readFile(sourcePath, "utf8"),
        };
      }
    }
    return undefined;
  };
};

const makeInputFingerprint = (
  candidate: Omit<PinoutCandidate, "inputFingerprint">,
) =>
  JSON.stringify({
    family: candidate.family,
    catalogSource: candidate.catalogSource,
    manufacturerPartNumber: candidate.manufacturerPartNumber,
    packageDescription: candidate.packageDescription,
    packageCode: candidate.packageCode,
    expectedPinCount: candidate.expectedPinCount,
    selectionReason: candidate.selectionReason,
    pinLabelSourcePath: candidate.pinLabelSourcePath,
    coordinateLabelRatio: candidate.coordinateLabelRatio,
    physicalOnly: candidate.physicalOnly,
    numericPhysicalOnly: candidate.numericPhysicalOnly,
  });

const finalizeCandidate = (
  candidate: Omit<PinoutCandidate, "inputFingerprint">,
): PinoutCandidate => ({
  ...candidate,
  inputFingerprint: makeInputFingerprint(candidate),
});

export const selectTiSysblocksPinoutCandidates = async (
  catalog: readonly TiSysblocksCatalogEntry[],
  options: {
    repoRoot: string;
    readComponentSource?: ComponentSourceReader;
  },
) => {
  const readComponentSource =
    options.readComponentSource ??
    createDefaultComponentSourceReader(options.repoRoot);
  const candidates: PinoutCandidate[] = [];
  const diagnostics: CandidateSelectionDiagnostics = {
    catalogEntries: catalog.length,
    tiDatasheetCandidates: 0,
    jlcpcbEntriesInspected: 0,
    jlcpcbCoordinateCandidates: 0,
    jlcpcbNumericPhysicalCandidates: 0,
    jlcpcbNonArrayPackage: 0,
    jlcpcbMissingComponentFile: 0,
    jlcpcbMissingPinLabels: 0,
    invalidCatalogEntries: 0,
  };

  for (const entry of catalog) {
    if (entry.source !== "ti-datasheet" && entry.source !== "jlcpcb") continue;
    if (
      !entry.family ||
      !entry.manufacturerPartNumber ||
      !entry.packageCode ||
      !Number.isInteger(entry.pinCount) ||
      (entry.pinCount ?? 0) <= 0
    ) {
      diagnostics.invalidCatalogEntries += 1;
      continue;
    }

    const common = {
      family: entry.family,
      catalogSource: entry.source,
      manufacturerPartNumber: entry.manufacturerPartNumber,
      packageDescription: entry.package,
      packageCode: entry.packageCode,
      expectedPinCount: entry.pinCount as number,
    };
    if (entry.source === "ti-datasheet") {
      diagnostics.tiDatasheetCandidates += 1;
      candidates.push(
        finalizeCandidate({ ...common, selectionReason: "ti-datasheet" }),
      );
      continue;
    }

    diagnostics.jlcpcbEntriesInspected += 1;
    const component = await readComponentSource(entry);
    if (!component) {
      diagnostics.jlcpcbMissingComponentFile += 1;
      continue;
    }
    const stats = getPinLabelCoordinateStats(
      component.sourceText,
      component.path,
    );
    if (!stats) {
      diagnostics.jlcpcbMissingPinLabels += 1;
      continue;
    }
    const isCoordinateCandidate =
      stats.coordinateLabelRatio >= PHYSICAL_COORDINATE_THRESHOLD &&
      isArrayPackage(entry.package);
    if (isCoordinateCandidate) {
      diagnostics.jlcpcbCoordinateCandidates += 1;
      candidates.push(
        finalizeCandidate({
          ...common,
          selectionReason: "jlcpcb-physical-coordinate-labels",
          pinLabelSourcePath: component.path,
          ...stats,
        }),
      );
      continue;
    }

    if (stats.numericPhysicalOnly) {
      diagnostics.jlcpcbNumericPhysicalCandidates += 1;
      candidates.push(
        finalizeCandidate({
          ...common,
          selectionReason: "jlcpcb-numeric-physical-labels",
          pinLabelSourcePath: component.path,
          ...stats,
        }),
      );
      continue;
    }

    // A1/B1 are also common functional channel names. Requiring an array-style
    // package description distinguishes physical ball coordinates from those
    // logical aliases without hard-coding TI package codes.
    if (stats.coordinateLabelRatio >= PHYSICAL_COORDINATE_THRESHOLD) {
      diagnostics.jlcpcbNonArrayPackage += 1;
    }
  }

  candidates.sort((left, right) => left.family.localeCompare(right.family));
  const uniqueFamilies = new Set(
    candidates.map((candidate) => candidate.family),
  );
  if (uniqueFamilies.size !== candidates.length) {
    throw new Error(
      "Selected pinout candidates contain duplicate family keys.",
    );
  }
  return { candidates, diagnostics };
};

const isReusableCacheEntry = (
  entry: PinoutCacheEntry | undefined,
  candidate: PinoutCandidate,
) =>
  entry?.cacheVersion === CACHE_VERSION &&
  entry.inputFingerprint === candidate.inputFingerprint;

const mergeWarnings = (...warningLists: readonly string[][]) => [
  ...new Set(warningLists.flat().filter(Boolean)),
];

const toCacheEntry = (
  candidate: PinoutCandidate,
  result: TiPinoutFetchResult,
  attempts: number,
): PinoutCacheEntry => {
  const common = {
    ...candidate,
    cacheVersion: CACHE_VERSION,
    fetchedAt: new Date().toISOString(),
    attempts,
    rootUrl: result.rootUrl,
  } as const;
  if (result.status === "unavailable") {
    return {
      ...common,
      status: "unavailable",
      sectionUrl: result.sectionUrl,
      reason: result.reason,
      message: result.message,
      packageColumns: result.packageColumns,
      warnings: [],
    };
  }

  const countWarning =
    result.table.pins.length === candidate.expectedPinCount
      ? []
      : [
          `Official TI pin count ${result.table.pins.length} does not match catalog pinCount ${candidate.expectedPinCount}.`,
        ];
  return {
    ...common,
    status: "ok",
    sectionUrl: result.sectionUrl,
    packageColumn: result.table.packageColumn,
    tableClass: result.table.tableClass,
    pins: result.table.pins,
    warnings: mergeWarnings(result.table.warnings, countWarning),
  };
};

const isRetryable = (result: TiPinoutFetchResult) =>
  result.status === "unavailable" && result.reason === "http-error";

const fetchWithRetries = async (
  candidate: PinoutCandidate,
  retries: number,
  fetchPinout: typeof fetchTiDocumentViewerPinout,
) => {
  const fetchWithTimeout = async (input: string | URL, init?: RequestInit) => {
    const headers = new Headers(init?.headers);
    headers.set("user-agent", "tscircuit-ti-pinout-cache/1.0");
    const requestInit = {
      ...init,
      headers,
      signal: AbortSignal.timeout(30_000),
    };
    const response = await fetch(input, requestInit);
    if (response.status !== 403) return response;

    const fallbackUrl = new URL(input);
    if (fallbackUrl.hostname !== "www.ti.com") return response;
    fallbackUrl.hostname = "edgeworker.ti.com";
    return fetch(fallbackUrl, {
      ...requestInit,
      signal: AbortSignal.timeout(30_000),
    });
  };

  let result: TiPinoutFetchResult | undefined;
  for (let attempt = 1; attempt <= retries + 1; attempt += 1) {
    result = await fetchPinout(candidate.family, candidate.packageCode, {
      fetch: fetchWithTimeout,
      packageDescription: candidate.packageDescription,
      expectedPinCount: candidate.expectedPinCount,
      orderablePartNumber: candidate.manufacturerPartNumber,
    });
    if (!isRetryable(result) || attempt > retries) {
      return { result, attempts: attempt };
    }
    await delay(300 * 2 ** (attempt - 1));
  }
  throw new Error(`Retry loop ended without a result for ${candidate.family}.`);
};

const writeCacheAtomically = async (outputPath: string, cache: PinoutCache) => {
  const sorted = Object.fromEntries(
    Object.entries(cache).sort(([left], [right]) => left.localeCompare(right)),
  );
  await mkdir(dirname(outputPath), { recursive: true });
  const temporaryPath = `${outputPath}.tmp`;
  await writeFile(
    temporaryPath,
    `${JSON.stringify(sorted, null, 2)}\n`,
    "utf8",
  );
  await rename(temporaryPath, outputPath);
};

const readExistingCache = async (outputPath: string): Promise<PinoutCache> => {
  if (!existsSync(outputPath)) return {};
  const parsed = JSON.parse(await readFile(outputPath, "utf8"));
  if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
    throw new Error(
      `Existing cache is not a family-keyed object: ${outputPath}`,
    );
  }
  return parsed as PinoutCache;
};

const summarizeCache = (
  candidates: readonly PinoutCandidate[],
  cache: PinoutCache,
  resumed: number,
  fetched: number,
  selection: CandidateSelectionDiagnostics,
): PinoutCacheSummary => {
  const entries = candidates.map((candidate) => cache[candidate.family]);
  const unavailableByReason: Record<string, number> = {};
  let successes = 0;
  let unavailable = 0;
  let pinCountMatches = 0;
  let pinCountMismatches = 0;
  for (const entry of entries) {
    if (!entry) continue;
    if (entry.status === "ok") {
      successes += 1;
      if (entry.pins.length === entry.expectedPinCount) pinCountMatches += 1;
      else pinCountMismatches += 1;
      continue;
    }
    unavailable += 1;
    unavailableByReason[entry.reason] =
      (unavailableByReason[entry.reason] ?? 0) + 1;
  }
  return {
    selected: candidates.length,
    resumed,
    fetched,
    successes,
    unavailable,
    pinCountMatches,
    pinCountMismatches,
    unavailableByReason,
    selection,
  };
};

export const runTiSysblocksPinoutCache = async (options: {
  repoRoot: string;
  catalogPath: string;
  outputPath: string;
  concurrency?: number;
  retries?: number;
  refresh?: boolean;
  retryUnavailable?: boolean;
  fetchPinout?: typeof fetchTiDocumentViewerPinout;
  log?: (message: string) => void;
}) => {
  const concurrency = Math.max(
    1,
    Math.min(8, Math.floor(options.concurrency ?? DEFAULT_CONCURRENCY)),
  );
  const retries = Math.max(
    0,
    Math.min(5, Math.floor(options.retries ?? DEFAULT_RETRIES)),
  );
  const log = options.log ?? console.log;
  const catalog = JSON.parse(
    await readFile(options.catalogPath, "utf8"),
  ) as TiSysblocksCatalogEntry[];
  const { candidates, diagnostics } = await selectTiSysblocksPinoutCandidates(
    catalog,
    {
      repoRoot: options.repoRoot,
    },
  );
  const existing = await readExistingCache(options.outputPath);
  const cache: PinoutCache = {};
  const pending: PinoutCandidate[] = [];
  let resumed = 0;

  for (const candidate of candidates) {
    const cached = existing[candidate.family];
    const reuse =
      !options.refresh &&
      isReusableCacheEntry(cached, candidate) &&
      !(options.retryUnavailable && cached?.status === "unavailable");
    if (reuse && cached) {
      cache[candidate.family] = cached;
      resumed += 1;
    } else {
      pending.push(candidate);
    }
  }
  await writeCacheAtomically(options.outputPath, cache);

  log(
    `Selected ${candidates.length} families (${diagnostics.tiDatasheetCandidates} TI-datasheet + ${diagnostics.jlcpcbCoordinateCandidates} coordinate-label JLC + ${diagnostics.jlcpcbNumericPhysicalCandidates} numeric-physical JLC); resumed ${resumed}, fetching ${pending.length} with concurrency ${concurrency}.`,
  );

  let nextIndex = 0;
  let completed = resumed;
  let writeQueue = Promise.resolve();
  const persist = () => {
    writeQueue = writeQueue.then(() =>
      writeCacheAtomically(options.outputPath, cache),
    );
    return writeQueue;
  };

  const worker = async () => {
    while (nextIndex < pending.length) {
      const index = nextIndex;
      nextIndex += 1;
      const candidate = pending[index];
      const { result, attempts } = await fetchWithRetries(
        candidate,
        retries,
        options.fetchPinout ?? fetchTiDocumentViewerPinout,
      );
      const previous = existing[candidate.family];
      const preservePreviousSuccess =
        result.status === "unavailable" &&
        result.reason === "http-error" &&
        previous?.status === "ok" &&
        isReusableCacheEntry(previous, candidate);
      const entry = preservePreviousSuccess
        ? previous
        : toCacheEntry(candidate, result, attempts);
      cache[candidate.family] = entry;
      completed += 1;
      const detail = preservePreviousSuccess
        ? `preserved previous successful cache after transient HTTP failure: ${result.status === "unavailable" ? result.message : "unknown error"}`
        : entry.status === "ok"
          ? `${entry.pins.length} pins`
          : `${entry.reason}: ${entry.message}`;
      log(
        `[${completed}/${candidates.length}] ${candidate.family}/${candidate.packageCode}: ${entry.status} (${detail})`,
      );
      await persist();
    }
  };

  await Promise.all(
    Array.from({ length: Math.min(concurrency, pending.length) }, async () =>
      worker(),
    ),
  );
  await writeQueue;
  if (Object.keys(cache).length !== candidates.length) {
    throw new Error(
      `Cache completeness check failed: ${Object.keys(cache).length}/${candidates.length} family entries.`,
    );
  }

  const summary = summarizeCache(
    candidates,
    cache,
    resumed,
    pending.length,
    diagnostics,
  );
  log(JSON.stringify(summary, null, 2));
  return summary;
};

const parseIntegerOption = (value: string | undefined, option: string) => {
  const parsed = Number(value);
  if (!Number.isInteger(parsed))
    throw new Error(`${option} requires an integer.`);
  return parsed;
};

const runCli = async () => {
  const scriptDirectory = dirname(fileURLToPath(import.meta.url));
  const repoRoot = resolve(scriptDirectory, "..");
  let catalogPath = resolve(
    repoRoot,
    "lib/chips/ti-sysblocks-chip-catalog.json",
  );
  let outputPath = resolve(repoRoot, "lib/chips/ti-sysblocks-pinouts.json");
  let concurrency = DEFAULT_CONCURRENCY;
  let retries = DEFAULT_RETRIES;
  let refresh = false;
  let retryUnavailable = false;
  const args = process.argv.slice(2);

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === "--catalog") catalogPath = resolve(args[++index] ?? "");
    else if (argument === "--output") outputPath = resolve(args[++index] ?? "");
    else if (argument === "--concurrency") {
      concurrency = parseIntegerOption(args[++index], argument);
    } else if (argument === "--retries") {
      retries = parseIntegerOption(args[++index], argument);
    } else if (argument === "--refresh") refresh = true;
    else if (argument === "--retry-unavailable") retryUnavailable = true;
    else if (argument === "--help") {
      console.log(`Usage: bun scripts/cache-ti-sysblocks-pinouts.ts [options]

Options:
  --catalog <path>       Catalog JSON path
  --output <path>        Cache JSON path
  --concurrency <1-8>    Concurrent TI requests (default: 4)
  --retries <0-5>        Retries for transient HTTP failures (default: 2)
  --refresh              Ignore all reusable cache entries
  --retry-unavailable    Re-fetch only cached unavailable entries`);
      return;
    } else throw new Error(`Unknown option: ${argument}`);
  }

  await runTiSysblocksPinoutCache({
    repoRoot,
    catalogPath,
    outputPath,
    concurrency,
    retries,
    refresh,
    retryUnavailable,
  });
};

const entry = process.argv[1];
if (entry && import.meta.url === pathToFileURL(resolve(entry)).href) {
  await runCli();
}
