import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

type CatalogEntry = {
  family: string;
  exportName: string;
  source: "existing" | "jlcpcb" | "ti-datasheet";
  componentExportName?: string;
  manufacturerPartNumber?: string;
  lcscPartNumber?: string;
  packageCode?: string;
  pinCount?: number;
  datasheetUrl: string;
  sourceRepository: string;
};

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const chipDirectory = join(repositoryRoot, "lib/chips");
const catalogPath = join(chipDirectory, "ti-sysblocks-chip-catalog.json");
const generatedExportsPath = join(chipDirectory, "ti-sysblocks-components.tsx");
const chipIndexPath = join(chipDirectory, "index.tsx");
const rootIndexPath = join(repositoryRoot, "index.ts");
const footprintSelectionsPath = join(
  chipDirectory,
  "ti-sysblocks-footprint-selections.json",
);
const materializationReportPath = join(
  chipDirectory,
  "ti-sysblocks-materialization-report.json",
);
const pinoutCachePath = join(chipDirectory, "ti-sysblocks-pinouts.json");

const catalog = (await Bun.file(catalogPath).json()) as CatalogEntry[];
const failures: string[] = [];

const assert = (condition: unknown, message: string) => {
  if (!condition) failures.push(message);
};

assert(
  catalog.length === 810,
  `expected 810 families, found ${catalog.length}`,
);
assert(
  new Set(catalog.map((entry) => entry.family)).size === catalog.length,
  "family names are not unique",
);
assert(
  new Set(catalog.map((entry) => entry.exportName)).size === catalog.length,
  "TypeScript export names are not unique",
);
const generatedComponentNames = catalog
  .filter((entry) => entry.source !== "existing")
  .map((entry) => entry.componentExportName!);
assert(
  new Set(generatedComponentNames).size === generatedComponentNames.length,
  "exact component export names are not unique",
);

const sourceCounts = catalog.reduce<Record<string, number>>((counts, entry) => {
  counts[entry.source] = (counts[entry.source] ?? 0) + 1;
  return counts;
}, {});
assert(
  sourceCounts.existing === 10,
  `expected 10 existing families, found ${sourceCounts.existing ?? 0}`,
);
assert(
  sourceCounts.jlcpcb === 689,
  `expected 689 JLCPCB families, found ${sourceCounts.jlcpcb ?? 0}`,
);
assert(
  sourceCounts["ti-datasheet"] === 111,
  `expected 111 TI-datasheet families, found ${sourceCounts["ti-datasheet"] ?? 0}`,
);

const footprintSelections = (await Bun.file(
  footprintSelectionsPath,
).json()) as {
  targetCount: number;
  coverage: {
    targetEntries: number;
    sourceReadyEntries: number;
    unavailableEntries: number;
  };
  targets: Record<
    string,
    {
      status: "source-ready" | "unavailable";
      drawingId?: string;
      footprintSource?: "exact-jlc-drawing" | "official-ti-drawing";
      provenanceComment?: string;
    }
  >;
};
assert(
  footprintSelections.targetCount === 111,
  "footprint catalog targetCount is not 111",
);
assert(
  footprintSelections.coverage.targetEntries === 111 &&
    Object.keys(footprintSelections.targets).length === 111,
  "footprint catalog does not cover all 111 TI-datasheet targets",
);
assert(
  footprintSelections.coverage.sourceReadyEntries === 111 &&
    footprintSelections.coverage.unavailableEntries === 0 &&
    Object.values(footprintSelections.targets).every(
      (target) => target.status === "source-ready",
    ),
  "one or more TI-datasheet footprints are unavailable",
);
const footprintSourceCounts = Object.values(footprintSelections.targets).reduce<
  Record<string, number>
>((counts, target) => {
  const source = target.footprintSource ?? "missing";
  counts[source] = (counts[source] ?? 0) + 1;
  return counts;
}, {});
assert(
  footprintSourceCounts["exact-jlc-drawing"] === 67 &&
    footprintSourceCounts["official-ti-drawing"] === 44,
  `unexpected TI-datasheet footprint sources: ${JSON.stringify(footprintSourceCounts)}`,
);
for (const target of Object.values(footprintSelections.targets)) {
  assert(
    Boolean(
      target.drawingId && target.provenanceComment?.includes(target.drawingId),
    ),
    `footprint ${target.drawingId ?? "unknown"}: missing exact-drawing provenance`,
  );
  if (target.footprintSource === "exact-jlc-drawing") {
    assert(
      /JLCPCB C\d+/.test(target.provenanceComment ?? ""),
      `footprint ${target.drawingId}: missing JLCPCB donor number`,
    );
  }
}

const materializationReport = (await Bun.file(
  materializationReportPath,
).json()) as {
  summary: {
    targetEntries: number;
    readyEntries: number;
    blockedEntries: number;
  };
};
assert(
  materializationReport.summary.targetEntries === 111 &&
    materializationReport.summary.readyEntries === 111 &&
    materializationReport.summary.blockedEntries === 0,
  "TI-datasheet materialization report contains blockers",
);

const pinoutCache = (await Bun.file(pinoutCachePath).json()) as Record<
  string,
  {
    catalogSource: "jlcpcb" | "ti-datasheet";
    status: "ok" | "unavailable";
  }
>;
const pinoutEntries = Object.values(pinoutCache);
assert(
  pinoutEntries.length === 179,
  `expected 179 official pinout records, found ${pinoutEntries.length}`,
);
assert(
  pinoutEntries.filter((entry) => entry.catalogSource === "ti-datasheet")
    .length === 111,
  "official pinout cache does not cover all 111 TI-datasheet components",
);
assert(
  pinoutEntries.filter((entry) => entry.catalogSource === "jlcpcb").length ===
    68,
  "official pinout cache does not cover all 68 physical-label JLCPCB components",
);
assert(
  pinoutEntries.every((entry) => entry.status === "ok"),
  "one or more official pinout records are unavailable",
);

const generatedExports = await Bun.file(generatedExportsPath).text();
const chipIndex = await Bun.file(chipIndexPath).text();
const rootIndex = await Bun.file(rootIndexPath).text();

assert(
  chipIndex.includes('export * from "./ti-sysblocks-components.tsx";'),
  "lib/chips/index.tsx does not re-export the sysblocks catalog",
);
assert(
  rootIndex.includes("TiSysblocksChipComponents") &&
    rootIndex.includes("...TiSysblocksChipComponents"),
  "TiChipComponents does not include the sysblocks catalog",
);

for (const entry of catalog) {
  assert(
    entry.sourceRepository === "https://github.com/tscircuit/ti-sysblocks",
    `${entry.family}: missing source-repository provenance`,
  );
  assert(
    entry.datasheetUrl.startsWith("https://www.ti.com/"),
    `${entry.family}: missing official TI datasheet URL`,
  );
  assert(
    generatedExports.includes(`  ${entry.exportName},`),
    `${entry.family}: missing from TiSysblocksChipComponents`,
  );

  const componentName = entry.componentExportName ?? entry.exportName;
  const componentPath = join(chipDirectory, `${componentName}.circuit.tsx`);
  assert(
    await Bun.file(componentPath).exists(),
    `${entry.family}: missing ${componentPath}`,
  );

  if (entry.source === "existing") continue;

  assert(
    Boolean(entry.manufacturerPartNumber),
    `${entry.family}: missing canonical MPN`,
  );
  assert(
    Boolean(entry.packageCode),
    `${entry.family}: missing TI package code`,
  );
  assert(
    Number.isInteger(entry.pinCount),
    `${entry.family}: missing TI pin count`,
  );

  const component = await Bun.file(componentPath).text();
  assert(component.includes("<chip"), `${entry.family}: component has no chip`);
  assert(
    component.includes("getTiSchematicLayout(pinLabels"),
    `${entry.family}: component does not use the shared schematic layout`,
  );
  assert(
    !/\bsymbol\s*=/.test(component),
    `${entry.family}: custom symbol bypasses the shared schematic box layout`,
  );
  assert(
    !component.includes("schPinSpacing"),
    `${entry.family}: uses deprecated schPinSpacing instead of the 0.2 mm standard`,
  );
  assert(
    !component.includes("<via"),
    `${entry.family}: embeds unconnected thermal vias in the component footprint`,
  );
  assert(
    component.includes("footprint="),
    `${entry.family}: component has no footprint`,
  );
  assert(
    component.includes(`export default ${componentName}`),
    `${entry.family}: component has no default export`,
  );
  assert(
    component.includes(
      `manufacturerPartNumber=${JSON.stringify(entry.manufacturerPartNumber)}`,
    ),
    `${entry.family}: MPN does not match the catalog`,
  );
  const pinLabelBlock = component.match(
    /const pinLabels = \{([\s\S]+?)\n\} as const/,
  )?.[1];
  assert(
    Boolean(pinLabelBlock),
    `${entry.family}: component has no pin labels`,
  );
  if (pinLabelBlock) {
    const aliases = [...pinLabelBlock.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(
      (match) => JSON.parse(`"${match[1]}"`) as string,
    );
    const invalidAliases = aliases.filter(
      (alias) => !/^[A-Za-z0-9_]+$/.test(alias),
    );
    assert(
      invalidAliases.length === 0,
      `${entry.family}: invalid tscircuit pin aliases ${invalidAliases.join(", ")}`,
    );
  }

  if (entry.source === "jlcpcb") {
    assert(
      Boolean(entry.lcscPartNumber),
      `${entry.family}: missing JLCPCB part number`,
    );
    assert(
      component.includes(entry.lcscPartNumber!),
      `${entry.family}: JLCPCB part number does not match the catalog`,
    );
  } else {
    assert(
      component.includes("// Footprint provenance:"),
      `${entry.family}: official footprint provenance is missing`,
    );
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log({ families: catalog.length, sourceCounts });
