import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { generateTiReferenceExamples } from "./generate-ti-reference-examples.ts";
import {
  extractTiApplicationSectionLinks,
  extractTiReferenceFigures,
  getTiReferenceCoverage,
  isGeneratedTiReferenceExample,
  renderTiReferenceBlockIndex,
  renderTiReferenceExample,
  type TiReferenceCatalogEntry,
  type TiGeneratedReferenceExample,
  type TiReferenceExampleManifest,
  validateTiReferenceExampleManifest,
} from "./ti-reference-example-schema.ts";
import { validateTiReferenceExamples } from "./validate-ti-reference-examples.ts";

const catalog: TiReferenceCatalogEntry[] = [
  {
    family: "OPA371D",
    exportName: "OPA371D",
    componentExportName: "OPA371DDBVR",
  },
  {
    family: "UNRESOLVED",
    exportName: "UNRESOLVED",
    componentExportName: "UNRESOLVEDD",
  },
];

type TestManifest = TiReferenceExampleManifest & {
  examples: [TiGeneratedReferenceExample];
};

const makeManifest = (): TestManifest => ({
  schemaVersion: 1,
  examples: [
    {
      id: "OPA371D_LowSideCurrentSense",
      family: "OPA371D",
      implementation: "generated",
      title: "OPA371D Low-Side Current-Sense Reference",
      description: "Official TI application figure rendered as a circuit.",
      evidence: {
        kind: "ti-datasheet-typical-application",
        datasheetUrl: "https://www.ti.com/lit/gpn/OPA371D",
        documentViewerRootUrl:
          "https://www.ti.com/document-viewer/OPA371D/datasheet",
        sectionUrl:
          "https://www.ti.com/document-viewer/OPA371D/datasheet/GUID-APPLICATION",
        figureUrl: "https://www.ti.com/ods/images/SLVSM48A/GUID-FIGURE-low.gif",
        figure: "Figure 7-1",
        figureCaption: "Low-Side, Current-Sensing Application",
        pdfPage: 23,
        documentRevision: "SLVSM48A",
        scope: "Complete signal path and feedback network.",
      },
      mainDevice: {
        componentExportName: "OPA371DDBVR",
        modulePath: "../lib/chips/OPA371DDBVR.tsx",
        name: "U1",
        position: { x: 0, y: 0 },
        schematicProjection: {
          name: "U1_OPAMP",
          symbolName: "opamp_with_power_right",
          portMap: {
            inp1: "pin3",
            inp2: "pin4",
            out: "pin1",
            "V+": "pin5",
            "V-": "pin2",
          },
        },
      },
      components: [
        {
          kind: "resistor",
          name: "R_F",
          value: "57.6k",
          footprint: "0402",
          position: { x: 3, y: -1 },
          rotation: 90,
          connections: {
            pin1: "net.VOUT",
            pin2: "net.FEEDBACK",
          },
          evidenceLabel: "RF 57.6 kohm",
          valueStatus: "specified-by-ti",
        },
      ],
      traces: [
        {
          from: ".U1_OPAMP > .out",
          to: ".R_F > .pin1",
          evidenceLabel: "VOUT feeds RF",
        },
        {
          from: ".U1_OPAMP > .inp2",
          to: ".R_F > .pin2",
          evidenceLabel: "RF feedback drives the inverting input",
          schematicRouteHints: [
            { x: -1, y: -0.09 },
            { x: -1, y: -1 },
          ],
        },
        {
          from: ".U1_OPAMP > .pin5",
          to: "net.V5",
          evidenceLabel: "positive supply maps to physical pin 5",
        },
        {
          from: ".U1_OPAMP > .V-",
          to: "net.GND",
          evidenceLabel: "negative supply maps to physical pin 2",
        },
      ],
    },
  ],
});

describe("TI reference-figure discovery", () => {
  test("discovers application leaves and first-party ODS figure assets", () => {
    const rootUrl = "https://www.ti.com/document-viewer/TEST/datasheet";
    const links = extractTiApplicationSectionLinks(
      `<ol>
        <li><a href="//www.ti.com/document-viewer/TEST/datasheet/GUID-APP#TITLE"
          data-navtitle="Typical Application"
          data-chaptertitle="Application and Implementation">Typical Application</a></li>
        <li><a href="//www.ti.com/document-viewer/TEST/datasheet/GUID-PINS"
          data-navtitle="Pin Functions">Pin Functions</a></li>
      </ol>`,
      rootUrl,
    );
    assert.deepEqual(links, [
      {
        sectionUrl:
          "https://www.ti.com/document-viewer/TEST/datasheet/GUID-APP",
        sectionTitle: "Typical Application",
      },
    ]);

    const figures = extractTiReferenceFigures(
      `<div class="fig figure">
        <img class="image"
          src="/ods/images/TEST/GUID-FIGURE-low.gif"
          title="TEST Typical Application">
        <span class="caption"><span class="figure-label">Figure 7-4 </span>TEST Typical Application</span>
      </div>`,
      links[0].sectionUrl,
      rootUrl,
      links[0].sectionTitle,
    );
    assert.deepEqual(figures, [
      {
        documentViewerRootUrl: rootUrl,
        sectionUrl: links[0].sectionUrl,
        sectionTitle: "Typical Application",
        figureUrl: "https://www.ti.com/ods/images/TEST/GUID-FIGURE-low.gif",
        figure: "Figure 7-4",
        figureCaption: "Figure 7-4 TEST Typical Application",
        imageTitle: "TEST Typical Application",
      },
    ]);
  });

  test("ignores non-TI and non-ODS images", () => {
    assert.deepEqual(
      extractTiReferenceFigures(
        `<img src="https://example.com/application.png" title="Figure 1-1">`,
        "https://www.ti.com/document-viewer/TEST/datasheet/GUID-APP",
        "https://www.ti.com/document-viewer/TEST/datasheet",
      ),
      [],
    );
  });
});

describe("TI reference-example schema and rendering", () => {
  test("validates exact evidence and renders a plain .tsx import", () => {
    const manifest = validateTiReferenceExampleManifest(makeManifest(), {
      catalog,
    });
    const example = manifest.examples[0];
    assert.ok(isGeneratedTiReferenceExample(example));
    const source = renderTiReferenceExample(example);
    assert.match(source, /from "\.\.\/lib\/chips\/OPA371DDBVR\.tsx"/);
    assert.doesNotMatch(source, /OPA371DDBVR\.circuit\.tsx/);
    assert.match(source, /noSchematicRepresentation/);
    assert.match(source, /symbolName="opamp_with_power_right"/);
    assert.match(source, /"inp1": "\.U1 > \.pin3"/);
    assert.match(source, /"V\+": "\.U1 > \.pin5"/);
    assert.match(source, /"V-": "\.U1 > \.pin2"/);
    assert.match(source, /from="\.U1_OPAMP > \.pin5"/);
    assert.match(source, /from="\.U1_OPAMP > \.V-"/);
    assert.match(source, /from="\.U1_OPAMP > \.inp2"/);
    assert.match(source, /to="\.R_F > \.pin2"/);
    assert.match(source, /schematicRouteHints=/);
    assert.match(source, /resistance="57\.6k"/);
    assert.match(source, /Figure 7-1/);
  });

  test("renders the reusable block index from the manifest", () => {
    const source = renderTiReferenceBlockIndex(makeManifest());
    assert.match(
      source,
      /import \{ OPA371D_LowSideCurrentSense \} from "\.\/OPA371D_LowSideCurrentSense\.circuit\.tsx";/,
    );
    assert.match(source, /export const TiReferenceBlockComponents = \{/);
    assert.match(source, /OPA371D_LowSideCurrentSense,/);
  });

  test("rejects a non-first-party figure asset", () => {
    const manifest = makeManifest();
    manifest.examples[0].evidence.figureUrl =
      "https://example.com/copied-figure.gif";
    assert.throws(
      () => validateTiReferenceExampleManifest(manifest, { catalog }),
      /must be an https:\/\/www\.ti\.com URL/,
    );
  });

  test("rejects chip-only examples and invented symbolic-load values", () => {
    const chipOnly = makeManifest();
    chipOnly.examples[0].components = [];
    assert.throws(
      () => validateTiReferenceExampleManifest(chipOnly, { catalog }),
      /components must not be empty/,
    );

    const invented = makeManifest() as unknown as {
      examples: Array<{ components: Array<Record<string, unknown>> }>;
    };
    invented.examples[0].components = [
      {
        kind: "symbolic-load",
        name: "Z_LOAD",
        displayLabel: "ZLOAD",
        value: "100k",
        position: { x: -3, y: 1 },
        connections: { pin1: "net.VBUS", pin2: "net.VSHUNT" },
        evidenceLabel: "ZLOAD",
        valueStatus: "unspecified-by-ti",
      },
    ];
    assert.throws(
      () => validateTiReferenceExampleManifest(invented, { catalog }),
      /must not invent a value/,
    );
  });

  test("reports exact supported and unresolved catalog coverage", () => {
    const coverage = getTiReferenceCoverage(makeManifest(), catalog);
    assert.deepEqual(coverage, {
      catalogFamilies: 2,
      supportedFamilies: ["OPA371D"],
      supportedCount: 1,
      catalogSupportedFamilies: ["OPA371D"],
      catalogSupportedCount: 1,
      unresolvedFamilies: ["UNRESOLVED"],
      unresolvedCount: 1,
    });
  });

  test("rejects traces that bypass a main-device schematic projection", () => {
    const manifest = makeManifest();
    manifest.examples[0].traces[0].from = ".U1 > .pin1";
    assert.throws(
      () => validateTiReferenceExampleManifest(manifest, { catalog }),
      /must route through schematic projection U1_OPAMP/,
    );
  });
});

describe("TI reference-example generator", () => {
  test("writes a deterministic evidence-backed circuit", async () => {
    const writes = new Map<string, string>();
    const results = await generateTiReferenceExamples({
      repoRoot: "/repo",
      manifest: makeManifest(),
      catalog,
      readText: async (path) => {
        if (path === "/repo/lib/chips/OPA371DDBVR.tsx") {
          return "export const OPA371DDBVR = () => null";
        }
        const source = writes.get(path);
        if (source === undefined) throw new Error("ENOENT");
        return source;
      },
      writeText: async (path, source) => {
        writes.set(path, source);
      },
      formatSource: async (source) => source,
    });
    assert.deepEqual(results, [
      {
        family: "OPA371D",
        id: "OPA371D_LowSideCurrentSense",
        outputPath: "/repo/examples/OPA371D_LowSideCurrentSense.circuit.tsx",
        changed: true,
      },
    ]);
    assert.match(
      writes.get(results[0].outputPath) ?? "",
      /Low-Side Current-Sense Reference/,
    );
  });

  test("fails loudly for a family without verified layout evidence", async () => {
    await assert.rejects(
      generateTiReferenceExamples({
        repoRoot: "/repo",
        manifest: makeManifest(),
        catalog,
        family: "UNRESOLVED",
      }),
      /refusing to generate a chip-only placeholder/,
    );
  });

  test("can enforce complete-catalog evidence", async () => {
    await assert.rejects(
      generateTiReferenceExamples({
        repoRoot: "/repo",
        manifest: makeManifest(),
        catalog,
        requireCompleteCatalog: true,
      }),
      /1\/2 catalog families are verified; 1 remain unresolved/,
    );
  });
});

describe("TI reference-example coverage validator", () => {
  const makeVirtualReader = (snapshot = "<svg></svg>") => {
    const manifest = makeManifest();
    const generatedSource = renderTiReferenceExample(manifest.examples[0]);
    return async (path: string) => {
      if (path === "/repo/lib/chips/OPA371DDBVR.tsx") {
        return "export const OPA371DDBVR = () => null";
      }
      if (path === "/repo/examples/OPA371D_LowSideCurrentSense.circuit.tsx") {
        return generatedSource;
      }
      if (path === "/repo/examples/index.ts") {
        return renderTiReferenceBlockIndex(manifest);
      }
      if (
        path ===
        "/repo/examples/__snapshots__/OPA371D_LowSideCurrentSense.circuit-schematic.snap.svg"
      ) {
        return snapshot;
      }
      throw new Error("ENOENT");
    };
  };

  test("validates the committed reference-backed sample library", async () => {
    const coverage = await validateTiReferenceExamples({
      repoRoot: "/repo",
      manifest: makeManifest(),
      catalog,
      readText: makeVirtualReader(),
      formatSource: async (source) => source,
      listSnapshotNames: async () => [
        "OPA371D_LowSideCurrentSense.circuit-schematic.snap.svg",
      ],
    });
    assert.equal(coverage.supportedCount, 1);
    assert.deepEqual(coverage.unresolvedFamilies, ["UNRESOLVED"]);
  });

  test("can require complete catalog coverage explicitly", async () => {
    await assert.rejects(
      validateTiReferenceExamples({
        repoRoot: "/repo",
        manifest: makeManifest(),
        catalog,
        requireComplete: true,
        readText: makeVirtualReader(),
        formatSource: async (source) => source,
        listSnapshotNames: async () => [
          "OPA371D_LowSideCurrentSense.circuit-schematic.snap.svg",
        ],
      }),
      /coverage is incomplete: 1\/2/,
    );
  });

  test("requires exactly one schematic snapshot per manifest entry", async () => {
    await assert.rejects(
      validateTiReferenceExamples({
        repoRoot: "/repo",
        manifest: makeManifest(),
        catalog,
        readText: makeVirtualReader(),
        formatSource: async (source) => source,
        listSnapshotNames: async () => [],
      }),
      /expected exactly one schematic snapshot/,
    );
  });
});
