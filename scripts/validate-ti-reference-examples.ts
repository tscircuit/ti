import { createHash } from "node:crypto";
import { readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { generateTiReferenceExamples } from "./generate-ti-reference-examples.ts";
import {
  getTiReferenceCoverage,
  isGeneratedTiReferenceExample,
  type TiReferenceCatalogEntry,
  type TiReferenceExampleManifest,
  validateTiReferenceExampleManifest,
} from "./ti-reference-example-schema.ts";

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const defaultManifestPath = join(
  repositoryRoot,
  "examples/ti-reference-examples.json",
);
const defaultCatalogPath = join(
  repositoryRoot,
  "lib/chips/ti-sysblocks-chip-catalog.json",
);

export type ValidateTiReferenceExamplesOptions = {
  repoRoot: string;
  manifest: TiReferenceExampleManifest;
  catalog: readonly TiReferenceCatalogEntry[];
  requireComplete?: boolean;
  verifyEvidence?: boolean;
  readText?: (path: string) => Promise<string>;
  listExampleSourceNames?: (directory: string) => Promise<string[]>;
  listSnapshotNames?: (directory: string) => Promise<string[]>;
  formatSource?: (source: string, outputPath: string) => Promise<string>;
};

const manualSchematicMarkupPattern =
  /<\/?schematic(?:line|path|circle|rect|text|arc|ellipse|polygon)\b|(?:schematicRouteHints|schRouteHints)\s*=|<\/?symbol\b|symbol\s*=\s*\{/i;

export const assertNoManualSchematicMarkup = (
  source: string,
  location: string,
): void => {
  const match = source.match(manualSchematicMarkupPattern);
  if (match) {
    throw new Error(
      `${location}: manual schematic markup ${JSON.stringify(match[0])} is not allowed; use components, predefined schematic symbols, and autorouted <trace> connectivity`,
    );
  }
};

export const validateTiReferenceExamples = async (
  options: ValidateTiReferenceExamplesOptions,
) => {
  const manifest = validateTiReferenceExampleManifest(options.manifest, {
    catalog: options.catalog,
  });
  const readText =
    options.readText ?? (async (path) => await Bun.file(path).text());
  const listExampleSourceNames = options.listExampleSourceNames ?? readdir;
  const listSnapshotNames = options.listSnapshotNames ?? readdir;

  await generateTiReferenceExamples({
    repoRoot: options.repoRoot,
    manifest,
    catalog: options.catalog,
    check: true,
    verifyEvidence: options.verifyEvidence,
    readText,
    formatSource: options.formatSource,
  });

  const examplesDirectory = join(options.repoRoot, "examples");
  const exampleSourceNames = await listExampleSourceNames(examplesDirectory);
  for (const sourceFile of exampleSourceNames.filter((name) =>
    name.endsWith(".circuit.tsx"),
  )) {
    const sourcePath = join(examplesDirectory, sourceFile);
    const source = await readText(sourcePath);
    assertNoManualSchematicMarkup(source, sourceFile);
  }

  for (const example of manifest.examples) {
    const sourceFile = isGeneratedTiReferenceExample(example)
      ? `${example.id}.circuit.tsx`
      : example.sourceFile;
    const sourcePath = join(options.repoRoot, "examples", sourceFile);
    let source: string;
    try {
      source = await readText(sourcePath);
    } catch {
      throw new Error(`${example.family}: source is unreadable: ${sourcePath}`);
    }
    assertNoManualSchematicMarkup(source, `${example.family}: ${sourceFile}`);
    if (isGeneratedTiReferenceExample(example)) continue;
    const namedExport = new RegExp(`export\\s+const\\s+${example.id}\\b`);
    const defaultExport = new RegExp(`export\\s+default\\s+${example.id}\\s*;`);
    if (!namedExport.test(source) || !defaultExport.test(source)) {
      throw new Error(
        `${example.family}: ${example.sourceFile} must named-export ${example.id} and default-export the same reusable block`,
      );
    }
    const sourceSha256 = createHash("sha256").update(source).digest("hex");
    if (sourceSha256 !== example.sourceSha256) {
      throw new Error(
        `${example.family}: handwritten source is stale; expected SHA-256 ${example.sourceSha256}, received ${sourceSha256}`,
      );
    }
  }

  const snapshotsDirectory = join(options.repoRoot, "examples/__snapshots__");
  const snapshotNames = await listSnapshotNames(snapshotsDirectory);
  for (const example of manifest.examples) {
    const expectedSnapshotName = `${example.id}.circuit-schematic.snap.svg`;
    const matchingSnapshots = snapshotNames.filter(
      (name) =>
        name.startsWith(`${example.id}.circuit-`) && name.endsWith(".snap.svg"),
    );
    if (
      matchingSnapshots.length !== 1 ||
      matchingSnapshots[0] !== expectedSnapshotName
    ) {
      throw new Error(
        `${example.family}: expected exactly one schematic snapshot ${expectedSnapshotName}; found ${matchingSnapshots.join(", ") || "none"}`,
      );
    }
    const snapshotPath = join(snapshotsDirectory, expectedSnapshotName);
    let snapshot: string;
    try {
      snapshot = await readText(snapshotPath);
    } catch {
      throw new Error(
        `${example.family}: snapshot is unreadable: ${snapshotPath}`,
      );
    }
    if (!snapshot.includes("<svg")) {
      throw new Error(
        `${example.family}: snapshot is not an SVG: ${snapshotPath}`,
      );
    }
  }

  const coverage = getTiReferenceCoverage(manifest, options.catalog);
  if (options.requireComplete && coverage.unresolvedCount > 0) {
    throw new Error(
      `TI reference-example coverage is incomplete: ${coverage.catalogSupportedCount}/${coverage.catalogFamilies} catalog families have a committed evidence-backed example and snapshot; ${coverage.unresolvedCount} are missing. Remove --require-complete when validating the curated reference-backed sample library.`,
    );
  }
  return coverage;
};

type CliOptions = {
  requireComplete: boolean;
  verifyEvidence: boolean;
  manifestPath: string;
  catalogPath: string;
};

const parseCliOptions = (arguments_: string[]): CliOptions => {
  const options: CliOptions = {
    requireComplete: false,
    verifyEvidence: false,
    manifestPath: defaultManifestPath,
    catalogPath: defaultCatalogPath,
  };
  for (let index = 0; index < arguments_.length; index += 1) {
    const argument = arguments_[index];
    if (argument === "--require-complete") options.requireComplete = true;
    else if (argument === "--verify-evidence") options.verifyEvidence = true;
    else if (argument === "--manifest") {
      options.manifestPath = resolve(arguments_[index + 1]);
      index += 1;
    } else if (argument === "--catalog") {
      options.catalogPath = resolve(arguments_[index + 1]);
      index += 1;
    } else {
      throw new Error(`Unknown argument: ${argument}`);
    }
  }
  return options;
};

const isMain =
  process.argv[1] !== undefined &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const cliOptions = parseCliOptions(process.argv.slice(2));
  const rawManifest: unknown = await Bun.file(cliOptions.manifestPath).json();
  const catalog: unknown = await Bun.file(cliOptions.catalogPath).json();
  if (!Array.isArray(catalog)) {
    throw new Error(`${cliOptions.catalogPath} must contain a catalog array`);
  }
  const manifest = validateTiReferenceExampleManifest(rawManifest, {
    catalog: catalog as TiReferenceCatalogEntry[],
  });
  const coverage = await validateTiReferenceExamples({
    repoRoot: repositoryRoot,
    manifest,
    catalog: catalog as TiReferenceCatalogEntry[],
    requireComplete: cliOptions.requireComplete,
    verifyEvidence: cliOptions.verifyEvidence,
  });
  console.log(
    `Validated ${coverage.supportedCount} evidence-backed TI reference block(s). Sysblocks catalog sampling: ${coverage.catalogSupportedCount}/${coverage.catalogFamilies}; unsupported or unselected families are skipped.`,
  );
  if (cliOptions.requireComplete && coverage.unresolvedCount > 0) {
    console.log(`Committed: ${coverage.supportedFamilies.join(", ")}`);
    console.log(`Missing: ${coverage.unresolvedFamilies.join(", ")}`);
  }
}
