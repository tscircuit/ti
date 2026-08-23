import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import {
  getTiReferenceCoverage,
  isGeneratedTiReferenceExample,
  renderTiReferenceBlockIndex,
  renderTiReferenceExample,
  type TiReferenceCatalogEntry,
  type TiGeneratedReferenceExample,
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

export type GenerateTiReferenceExamplesOptions = {
  repoRoot: string;
  manifest: TiReferenceExampleManifest;
  catalog: readonly TiReferenceCatalogEntry[];
  family?: string;
  check?: boolean;
  requireCompleteCatalog?: boolean;
  verifyEvidence?: boolean;
  readText?: (path: string) => Promise<string>;
  writeText?: (path: string, source: string) => Promise<void>;
  formatSource?: (source: string, outputPath: string) => Promise<string>;
};

export type GeneratedTiReferenceExample = {
  family: string;
  id: string;
  outputPath: string;
  changed: boolean;
};

const defaultReadText = async (path: string): Promise<string> =>
  await Bun.file(path).text();

const defaultWriteText = async (
  path: string,
  source: string,
): Promise<void> => {
  await Bun.write(path, source);
};

const defaultFormatSource = async (
  source: string,
  outputPath: string,
): Promise<string> => {
  const process = Bun.spawn(
    ["bunx", "biome", "format", "--stdin-file-path", outputPath],
    { stdin: "pipe", stdout: "pipe", stderr: "pipe" },
  );
  process.stdin.write(source);
  process.stdin.end();
  const [exitCode, formattedSource, standardError] = await Promise.all([
    process.exited,
    new Response(process.stdout).text(),
    new Response(process.stderr).text(),
  ]);
  if (exitCode !== 0) {
    throw new Error(
      `Biome could not format ${outputPath}: ${standardError.trim()}`,
    );
  }
  return formattedSource;
};

const verifyComponentModule = async (
  example: TiGeneratedReferenceExample,
  repoRoot: string,
  readText: (path: string) => Promise<string>,
): Promise<void> => {
  const examplesDirectory = join(repoRoot, "examples");
  const componentPath = resolve(
    examplesDirectory,
    example.mainDevice.modulePath,
  );
  const chipsDirectory = resolve(repoRoot, "lib/chips");
  if (!componentPath.startsWith(`${chipsDirectory}/`)) {
    throw new Error(`${example.family}: component module escapes lib/chips`);
  }
  let source: string;
  try {
    source = await readText(componentPath);
  } catch {
    throw new Error(
      `${example.family}: component module not found: ${componentPath}`,
    );
  }
  const exportExpression = new RegExp(
    `export\\s+const\\s+${example.mainDevice.componentExportName}\\b`,
  );
  if (!exportExpression.test(source)) {
    throw new Error(
      `${example.family}: ${componentPath} does not export ${example.mainDevice.componentExportName}`,
    );
  }
};

const verifyFigureEvidence = async (
  example: TiReferenceExampleManifest["examples"][number],
): Promise<void> => {
  const response = await fetch(example.evidence.figureUrl, {
    method: "HEAD",
    headers: {
      Accept: "image/*",
      "User-Agent": "tscircuit-ti-reference-evidence/1.0",
    },
  });
  if (!response.ok) {
    throw new Error(
      `${example.family}: TI figure asset returned HTTP ${response.status}: ${example.evidence.figureUrl}`,
    );
  }
  const contentType = response.headers.get("content-type") ?? "";
  const normalizedContentType = contentType.toLowerCase();
  if (
    !normalizedContentType.startsWith("image/") &&
    !normalizedContentType.startsWith("application/pdf")
  ) {
    throw new Error(
      `${example.family}: TI figure evidence is not an image or PDF (${contentType || "missing content type"}): ${example.evidence.figureUrl}`,
    );
  }
};

export const generateTiReferenceExamples = async (
  options: GenerateTiReferenceExamplesOptions,
): Promise<GeneratedTiReferenceExample[]> => {
  const manifest = validateTiReferenceExampleManifest(options.manifest, {
    catalog: options.catalog,
  });
  const coverage = getTiReferenceCoverage(manifest, options.catalog);
  if (options.requireCompleteCatalog && coverage.unresolvedCount > 0) {
    throw new Error(
      `Reference evidence is incomplete: ${coverage.catalogSupportedCount}/${coverage.catalogFamilies} catalog families are verified; ${coverage.unresolvedCount} remain unresolved.`,
    );
  }
  if (options.verifyEvidence) {
    for (const example of manifest.examples)
      await verifyFigureEvidence(example);
  }
  let examples = manifest.examples.filter(isGeneratedTiReferenceExample);
  if (options.family) {
    const selectedExample = manifest.examples.find(
      (example) => example.family === options.family,
    );
    if (!selectedExample) {
      throw new Error(
        `${options.family}: no verified TI reference figure with component, connectivity, value, and placement evidence; refusing to generate a chip-only placeholder.`,
      );
    }
    if (!isGeneratedTiReferenceExample(selectedExample)) {
      throw new Error(
        `${options.family}: reference example is handwritten and will not be overwritten by the generator.`,
      );
    }
    examples = [selectedExample];
  }

  const readText = options.readText ?? defaultReadText;
  const writeText = options.writeText ?? defaultWriteText;
  const formatSource = options.formatSource ?? defaultFormatSource;
  const indexPath = join(options.repoRoot, "examples/index.ts");
  const indexSource = await formatSource(
    renderTiReferenceBlockIndex(manifest),
    indexPath,
  );
  let currentIndexSource: string | undefined;
  try {
    currentIndexSource = await readText(indexPath);
  } catch {
    currentIndexSource = undefined;
  }
  if (options.check && currentIndexSource !== indexSource) {
    throw new Error(
      `${indexPath} is missing or stale; run bun scripts/generate-ti-reference-examples.ts`,
    );
  }
  if (!options.check && currentIndexSource !== indexSource) {
    await writeText(indexPath, indexSource);
  }
  const results: GeneratedTiReferenceExample[] = [];
  for (const example of examples) {
    await verifyComponentModule(example, options.repoRoot, readText);
    const outputPath = join(
      options.repoRoot,
      "examples",
      `${example.id}.circuit.tsx`,
    );
    const source = await formatSource(
      renderTiReferenceExample(example),
      outputPath,
    );
    let currentSource: string | undefined;
    try {
      currentSource = await readText(outputPath);
    } catch {
      currentSource = undefined;
    }
    const changed = currentSource !== source;
    if (options.check && changed) {
      throw new Error(
        `${outputPath} is missing or stale; run bun scripts/generate-ti-reference-examples.ts`,
      );
    }
    if (!options.check && changed) await writeText(outputPath, source);
    results.push({
      family: example.family,
      id: example.id,
      outputPath,
      changed,
    });
  }
  return results;
};

type CliOptions = {
  manifestPath: string;
  catalogPath: string;
  family?: string;
  check: boolean;
  requireCompleteCatalog: boolean;
  verifyEvidence: boolean;
};

const parseCliOptions = (arguments_: string[]): CliOptions => {
  const options: CliOptions = {
    manifestPath: defaultManifestPath,
    catalogPath: defaultCatalogPath,
    check: false,
    requireCompleteCatalog: false,
    verifyEvidence: false,
  };
  for (let index = 0; index < arguments_.length; index += 1) {
    const argument = arguments_[index];
    if (argument === "--check") options.check = true;
    else if (argument === "--require-complete-catalog") {
      options.requireCompleteCatalog = true;
    } else if (argument === "--verify-evidence") options.verifyEvidence = true;
    else if (argument === "--family") {
      options.family = arguments_[index + 1];
      index += 1;
    } else if (argument === "--manifest") {
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
  const catalog = (await Bun.file(cliOptions.catalogPath).json()) as
    | TiReferenceCatalogEntry[]
    | undefined;
  const rawManifest: unknown = await Bun.file(cliOptions.manifestPath).json();
  if (!Array.isArray(catalog)) {
    throw new Error(`${cliOptions.catalogPath} must contain a catalog array`);
  }
  const manifest = validateTiReferenceExampleManifest(rawManifest, { catalog });
  const results = await generateTiReferenceExamples({
    repoRoot: repositoryRoot,
    manifest,
    catalog,
    family: cliOptions.family,
    check: cliOptions.check,
    requireCompleteCatalog: cliOptions.requireCompleteCatalog,
    verifyEvidence: cliOptions.verifyEvidence,
  });
  const coverage = getTiReferenceCoverage(manifest, catalog);
  const changedCount = results.filter((result) => result.changed).length;
  console.log(
    `${cliOptions.check ? "Checked" : "Generated"} ${results.length} verified TI reference example(s); ${changedCount} ${cliOptions.check ? "stale" : "changed"}.`,
  );
  console.log(
    `Coverage: ${coverage.supportedCount} blocks, including ${coverage.catalogSupportedCount}/${coverage.catalogFamilies} sysblocks families; ${coverage.unresolvedCount} catalog families intentionally unresolved.`,
  );
}
