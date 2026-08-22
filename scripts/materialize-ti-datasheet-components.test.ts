import assert from "node:assert/strict";
import { resolve } from "node:path";
import { describe, test } from "node:test";

import {
  assertFootprintDestinations,
  buildCoordinatePhysicalMap,
  buildTiGeneratedPins,
  type CommittedFootprintCatalog,
  deriveTiPinRole,
  extractDonorPinLabels,
  mergeTiSupplementalPins,
  renderCoordinateGridFootprintProp,
  renderTiDatasheetComponent,
  type TiDatasheetCatalogEntry,
  type TiOfficialPin,
} from "./materialize-ti-datasheet-components.ts";

const pin = (
  number: string,
  name: string,
  type = "",
  description = "",
): TiOfficialPin => ({ number, name, type, description });

const auditedSupplementalDestinations = new Map<
  string,
  { physical: string; pinKey: string }
>([
  ["CC2340R21N0RGER", { physical: "25", pinKey: "pin25" }],
  ["CC2531F128RHAR", { physical: "41", pinKey: "pin41" }],
  ["CC2755P105E0WRHAR", { physical: "41", pinKey: "pin41" }],
  ["CC2755P207E0WRHAR", { physical: "41", pinKey: "pin41" }],
  ["CC3501ENJARSHR", { physical: "57", pinKey: "pin57" }],
  ["CC3551ENJARSHR", { physical: "57", pinKey: "pin57" }],
  ["CSD18531Q5AT", { physical: "9", pinKey: "pin9" }],
  ["DAC43701DSGR", { physical: "9", pinKey: "pin9" }],
  ["DP83826AERHBR", { physical: "33", pinKey: "pin33" }],
  ["DRV8363QRGZRQ1", { physical: "49", pinKey: "pin49" }],
  ["LMG3612REQR", { physical: "39", pinKey: "pin39" }],
  ["XMSPM0G1218SRGZR", { physical: "49", pinKey: "pin49" }],
  ["TLC69699DRRR", { physical: "13", pinKey: "pin13" }],
  ["PTLIN821DRBRQ1", { physical: "9", pinKey: "pin9" }],
]);

describe("TI datasheet component materialization", () => {
  test("committed footprint selections cover every TI-datasheet target", async () => {
    const footprintCatalog = (await Bun.file(
      resolve(
        import.meta.dir,
        "../lib/chips/ti-sysblocks-footprint-selections.json",
      ),
    ).json()) as CommittedFootprintCatalog;
    const chipCatalog = (await Bun.file(
      resolve(import.meta.dir, "../lib/chips/ti-sysblocks-chip-catalog.json"),
    ).json()) as TiDatasheetCatalogEntry[];
    const entries = chipCatalog.filter(
      (entry) => entry.source === "ti-datasheet",
    );
    const entriesByMpn = new Map(
      entries.map((entry) => [entry.manufacturerPartNumber, entry]),
    );
    const targets = Object.values(footprintCatalog.targets);

    assert.equal(footprintCatalog.schemaVersion, 1);
    assert.equal(footprintCatalog.targetCount, 111);
    assert.equal(footprintCatalog.coverage.targetEntries, 111);
    assert.equal(footprintCatalog.coverage.sourceReadyEntries, 111);
    assert.equal(footprintCatalog.coverage.unavailableEntries, 0);
    assert.equal(entries.length, 111);
    assert.equal(entriesByMpn.size, 111);
    assert.equal(targets.length, 111);
    for (const [manufacturerPartNumber, target] of Object.entries(
      footprintCatalog.targets,
    )) {
      const entry = entriesByMpn.get(manufacturerPartNumber);
      assert.ok(entry, `Unexpected footprint target ${manufacturerPartNumber}`);
      assert.equal(target.status, "source-ready");
      assert.equal(target.manufacturerPartNumber, manufacturerPartNumber);
      assert.equal(target.family, entry.family);
      assert.equal(target.componentExportName, entry.componentExportName);
      assert.equal(target.packageDrawing, entry.packageDrawing);
      assert.equal(target.drawingId, target.packageDrawing);
      assert.ok(target.provenanceComment?.includes(target.drawingId ?? ""));
    }
  });

  test("every committed footprint destination resolves to a generated port", async () => {
    const footprintCatalog = (await Bun.file(
      resolve(
        import.meta.dir,
        "../lib/chips/ti-sysblocks-footprint-selections.json",
      ),
    ).json()) as CommittedFootprintCatalog;
    const chipCatalog = (await Bun.file(
      resolve(import.meta.dir, "../lib/chips/ti-sysblocks-chip-catalog.json"),
    ).json()) as TiDatasheetCatalogEntry[];
    const pinoutCatalog = (await Bun.file(
      resolve(import.meta.dir, "../lib/chips/ti-sysblocks-pinouts.json"),
    ).json()) as Record<
      string,
      { status: "ok" | "unavailable"; pins?: TiOfficialPin[] }
    >;

    let auditedSupplementalCount = 0;
    for (const entry of chipCatalog.filter(
      (candidate) => candidate.source === "ti-datasheet",
    )) {
      const target = footprintCatalog.targets[entry.manufacturerPartNumber];
      const pinout = pinoutCatalog[entry.family];
      assert.equal(target?.status, "source-ready", entry.family);
      assert.equal(pinout?.status, "ok", entry.family);
      const coordinatePinAssignment = target.coordinateGrid
        ? {
            mode: "physical-alias" as const,
            rowOrder: target.coordinateGrid.rowOrder,
            columnOrder: target.coordinateGrid.columnOrder,
          }
        : target.coordinatePinAssignment;
      const generatedPins = buildTiGeneratedPins({
        pins: mergeTiSupplementalPins(
          pinout.pins ?? [],
          target.supplementalPins,
        ),
        expectedPinCount: entry.pinCount,
        explicitPhysicalMap: target.physicalPadToPortHint,
        ignoredPhysicalPins: target.ignoredPhysicalPins,
        coordinatePinAssignment,
      });
      const footprintPropSource = target.coordinateGrid
        ? renderCoordinateGridFootprintProp({
            pins: generatedPins,
            grid: target.coordinateGrid,
          })
        : target.footprintPropSource;
      assert.ok(footprintPropSource, `${entry.family} has footprint source`);
      assertFootprintDestinations({
        pins: generatedPins,
        footprintPropSource,
        physicalPadToPortHint: target.physicalPadToPortHint,
        label: `${entry.family}:${target.drawingId}`,
      });
      const audited = auditedSupplementalDestinations.get(
        entry.manufacturerPartNumber,
      );
      if (audited) {
        auditedSupplementalCount += 1;
        assert.ok(
          target.supplementalPins?.some(
            (supplemental) => supplemental.number === audited.physical,
          ),
          `${entry.family} preserves supplemental physical ${audited.physical}`,
        );
        assert.ok(
          Object.values(target.physicalPadToPortHint ?? {}).includes(
            audited.pinKey,
          ),
          `${entry.family} maps copper to ${audited.pinKey}`,
        );
        assert.ok(
          generatedPins.some(
            (generated) => generated.pinKey === audited.pinKey,
          ),
          `${entry.family} generates ${audited.pinKey}`,
        );
      }
    }
    assert.equal(auditedSupplementalCount, 14);
  });

  test("maps BGA coordinates through donor aliases rather than row-major order", () => {
    const donorPinLabels = extractDonorPinLabels(`
      const pinLabels = {
        pin1: ["D2"],
        pin2: ["D1"],
        pin3: ["C1"],
        pin7: ["A1"],
      } as const
    `);
    const generated = buildTiGeneratedPins({
      pins: [
        pin("D1", "GND", "GND"),
        pin("D2", "ON", "Input"),
        pin("C1", "VOUT", "Output"),
        pin("A1", "VOUT", "Output"),
      ],
      expectedPinCount: 4,
      donorPinLabels,
    });

    assert.deepEqual(
      generated.map(({ pinKey, physical }) => [pinKey, physical]),
      [
        ["pin1", "D2"],
        ["pin2", "D1"],
        ["pin3", "C1"],
        ["pin7", "A1"],
      ],
    );
    assert.deepEqual(
      generated.find(({ pinKey }) => pinKey === "pin7")?.labels,
      ["VOUT", "A1", "VOUT_A1"],
    );
  });

  test("maps an official coordinate footprint through physical aliases without a donor", () => {
    const pins = [
      pin("D2", "ON", "Input"),
      pin("A1", "VOUT", "Output"),
      pin("D1", "GND", "Ground"),
      pin("C1", "VDD", "Power"),
    ];
    const assignment = {
      mode: "physical-alias" as const,
      rowOrder: ["A", "C", "D"],
    };

    assert.deepEqual(
      buildCoordinatePhysicalMap({
        pins,
        expectedPinCount: 4,
        assignment,
      }),
      { A1: "pin1", C1: "pin2", D1: "pin3", D2: "pin4" },
    );
    assert.deepEqual(
      buildTiGeneratedPins({
        pins,
        expectedPinCount: 4,
        coordinatePinAssignment: assignment,
      }).map(({ pinKey, physical, labels }) => ({
        pinKey,
        physical,
        labels,
      })),
      [
        { pinKey: "pin1", physical: "A1", labels: ["VOUT", "A1"] },
        { pinKey: "pin2", physical: "C1", labels: ["VDD", "C1"] },
        { pinKey: "pin3", physical: "D1", labels: ["GND", "D1"] },
        { pinKey: "pin4", physical: "D2", labels: ["ON", "D2"] },
      ],
    );
  });

  test("renders compact grid footprints with physical aliases and custom axes", () => {
    const pins = buildTiGeneratedPins({
      pins: [pin("A1", "IN", "Input"), pin("K22", "OUT", "Output")],
      expectedPinCount: 2,
      coordinatePinAssignment: {
        mode: "physical-alias",
        rowOrder: ["A", "K"],
        columnOrder: [1, 22],
      },
    });
    const source = renderCoordinateGridFootprintProp({
      pins,
      grid: {
        rowOrder: ["A", "K"],
        columnOrder: [1, 22],
        rowAxis: "x",
        rowPitchMm: 0.742,
        columnPositionsMm: { "1": -6.307, "22": 6.307 },
        padShape: "rect",
        padWidthMm: 0.6,
        padHeightMm: 0.6,
      },
    });

    assert.match(
      source,
      /portHints=\{\["A1"\]\} pcbX="-0.371mm" pcbY="-6.307mm"/,
    );
    assert.match(
      source,
      /portHints=\{\["K22"\]\} pcbX="0.371mm" pcbY="6.307mm"/,
    );
    assert.match(source, /width="0.6mm" height="0.6mm" shape="rect"/);

    const bgaPins = buildTiGeneratedPins({
      pins: [pin("A1", "IN", "Input"), pin("P14", "OUT", "Output")],
      expectedPinCount: 2,
      coordinatePinAssignment: {
        mode: "physical-alias",
        rowOrder: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "J",
          "K",
          "L",
          "M",
          "N",
          "P",
        ],
        columnOrder: Array.from({ length: 14 }, (_, index) => index + 1),
      },
    });
    const bgaSource = renderCoordinateGridFootprintProp({
      pins: bgaPins,
      grid: {
        rowOrder: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "J",
          "K",
          "L",
          "M",
          "N",
          "P",
        ],
        columnOrder: Array.from({ length: 14 }, (_, index) => index + 1),
        pitchMm: 0.65,
        padShape: "circle",
        padDiameterMm: 0.35,
      },
    });
    assert.match(bgaSource, /pcbX="-4.225mm" pcbY="4.225mm"/);
    assert.match(bgaSource, /pcbX="4.225mm" pcbY="-4.225mm"/);
    assert.match(bgaSource, /radius="0.175mm" shape="circle"/);
  });

  test("fills omitted numeric positions as no-connect and keeps numbered pads direct", () => {
    const generated = buildTiGeneratedPins({
      pins: [pin("1", "VDD", "Power"), pin("3", "OUT", "Output")],
      expectedPinCount: 3,
    });
    assert.deepEqual(
      generated.map(({ pinKey, labels, role, attributes }) => ({
        pinKey,
        labels,
        role,
        attributes,
      })),
      [
        {
          pinKey: "pin1",
          labels: ["VDD", "1"],
          role: "power",
          attributes: { requiresPower: true },
        },
        {
          pinKey: "pin2",
          labels: ["NC", "2"],
          role: "no-connect",
          attributes: { doNotConnect: true },
        },
        {
          pinKey: "pin3",
          labels: ["OUT", "3"],
          role: "output",
          attributes: undefined,
        },
      ],
    );
  });

  test("uses a compact primary display function for multiplexed pins", () => {
    const [generated] = buildTiGeneratedPins({
      pins: [pin("1", "P1.0/TA0.1/DMAE0", "I/O")],
      expectedPinCount: 1,
    });

    assert.deepEqual(generated.labels, ["P1_0", "TA0_1", "DMAE0", "1"]);
  });

  test("uses explicit copper mappings for special pads and permits a numbered EP", () => {
    const generated = buildTiGeneratedPins({
      pins: [
        pin("1", "IN", "Input"),
        pin("2", "GND", "Ground"),
        pin("Thermal Pad", "GND", "Ground"),
        pin("17", "EP", "Ground"),
      ],
      expectedPinCount: 16,
      explicitPhysicalMap: { "Thermal Pad": "pin18" },
    });
    assert.equal(
      generated.find(({ physical }) => physical === "Thermal Pad")?.pinKey,
      "pin18",
    );
    assert.equal(
      generated.find(({ physical }) => physical === "17")?.pinKey,
      "pin17",
    );
  });

  test("merges multiple physical contacts that intentionally share one copper port", () => {
    const generated = buildTiGeneratedPins({
      pins: [
        pin("1", "GND", "Ground"),
        pin("2", "OUT", "Output"),
        pin("Tab", "OUT", "Output"),
        pin("3", "IN", "Input"),
      ],
      expectedPinCount: 3,
      explicitPhysicalMap: { Tab: "pin2" },
    });

    assert.equal(generated.length, 3);
    assert.deepEqual(
      generated.find(({ pinKey }) => pinKey === "pin2"),
      {
        pinKey: "pin2",
        physical: "2, Tab",
        name: "OUT",
        labels: ["OUT", "2", "OUT_2", "TAB", "OUT_TAB"],
        role: "output",
        attributes: undefined,
      },
    );
  });

  test("ignores target-specific pin-table artifacts before filling numeric NCs", () => {
    const generated = buildTiGeneratedPins({
      pins: [
        pin("1", "IN", "Input"),
        pin("2", "GND", "Ground"),
        pin("3", "EN", "Input"),
        pin("4", "NC", "No connect"),
        pin("5", "OUT", "Output"),
        pin("Thermal pad", "Thermal pad", "Thermal pad"),
      ],
      expectedPinCount: 5,
      ignoredPhysicalPins: ["Thermal pad"],
    });

    assert.deepEqual(
      generated.map(({ pinKey }) => pinKey),
      ["pin1", "pin2", "pin3", "pin4", "pin5"],
    );
  });

  test("derives schematic roles from official type, name, and description", () => {
    assert.equal(deriveTiPinRole(pin("1", "VDD", "Power")), "power");
    assert.equal(
      deriveTiPinRole(pin("2", "SDA", "Input/output")),
      "bidirectional",
    );
    assert.equal(deriveTiPinRole(pin("3", "RESET", "Input")), "control");
    assert.equal(
      deriveTiPinRole(pin("4", "NC", "", "Do not connect")),
      "no-connect",
    );
    assert.equal(deriveTiPinRole(pin("5", "A0", "I")), "input");
    assert.equal(deriveTiPinRole(pin("6", "Y", "O")), "output");
    assert.equal(deriveTiPinRole(pin("7", "SUP", "P")), "power");
    assert.equal(
      deriveTiPinRole(pin("8", "P1.0/TA0.1/VREF-", "I/O")),
      "bidirectional",
    );
    assert.equal(
      deriveTiPinRole(
        pin("9", "OUT", "O", "Output capacitor returns to ground"),
      ),
      "output",
    );
    assert.equal(
      deriveTiPinRole(pin("10", "VREG", "O", "Regulator output")),
      "output",
    );
    assert.equal(
      deriveTiPinRole(pin("11", "IN", "I", "Input supply pin")),
      "power",
    );
    assert.equal(
      deriveTiPinRole(
        pin("Pad", "QFN Pad", "", "TI recommends connection to VSS"),
      ),
      "ground",
    );
    assert.equal(deriveTiPinRole(pin("12", "Y", "", "Output")), "output");
    assert.equal(deriveTiPinRole(pin("13", "A", "", "Input")), "input");
    assert.equal(
      deriveTiPinRole(
        pin(
          "14",
          "THERMAL_PAD",
          "Thermal",
          "Used only for thermal dissipation; not electrical grounding",
        ),
      ),
      "thermal",
    );
    assert.equal(
      deriveTiPinRole(
        pin(
          "15",
          "THERMAL_PAD",
          "",
          "Thermal pad. Connect to a solid ground plane.",
        ),
      ),
      "ground",
    );
    assert.equal(
      deriveTiPinRole(
        pin("16", "THERMAL_PAD", "", "Can be grounded or left floating."),
      ),
      "thermal",
    );
    assert.equal(
      deriveTiPinRole(pin("17", "PAD", "", "No electrical role specified")),
      "thermal",
    );
    assert.equal(
      deriveTiPinRole(pin("18", "GATE", "", "MOSFET gate")),
      "control",
    );
    assert.deepEqual(
      buildTiGeneratedPins({
        pins: [pin("1", "THERMAL_PAD", "", "No electrical connection")],
        expectedPinCount: 1,
      })[0],
      {
        pinKey: "pin1",
        physical: "1",
        name: "THERMAL_PAD",
        labels: ["THERMAL_PAD", "1"],
        role: "thermal",
        attributes: undefined,
      },
    );
  });

  test("fails loudly when selected or inline footprint hints target absent ports", () => {
    const generatedPins = buildTiGeneratedPins({
      pins: [pin("1", "IN", "Input"), pin("2", "OUT", "Output")],
      expectedPinCount: 2,
    });
    assert.throws(
      () =>
        assertFootprintDestinations({
          pins: generatedPins,
          footprintPropSource:
            'footprint={<footprint><smtpad portHints={["pin3"]} pcbX="0mm" pcbY="0mm" width="1mm" height="1mm" /></footprint>}',
          physicalPadToPortHint: { Pad: "pin4" },
          label: "missing-destinations",
        }),
      /physicalPadToPortHint\["Pad"\] -> pin4.*inline portHints -> pin3/,
    );
  });

  test("accepts footprint hints that target a generated physical alias", () => {
    const generatedPins = buildTiGeneratedPins({
      pins: [pin("A1", "IN", "Input")],
      expectedPinCount: 1,
      coordinatePinAssignment: {
        mode: "physical-alias",
        rowOrder: ["A"],
      },
    });
    assert.doesNotThrow(() =>
      assertFootprintDestinations({
        pins: generatedPins,
        footprintPropSource:
          'footprint={<footprint><smtpad portHints={["A1"]} pcbX="0mm" pcbY="0mm" width="1mm" height="1mm" /></footprint>}',
      }),
    );
  });

  test("renders named and default exports with standard schematic layout", () => {
    const entry: TiDatasheetCatalogEntry = {
      family: "TEST",
      source: "ti-datasheet",
      componentExportName: "TESTD",
      manufacturerPartNumber: "TESTD",
      pinCount: 2,
      packageDrawing: "D0002A",
    };
    const source = renderTiDatasheetComponent({
      entry,
      pins: buildTiGeneratedPins({
        pins: [pin("1", "IN", "Input"), pin("2", "OUT", "Output")],
        expectedPinCount: 2,
      }),
      footprintPropSource: 'footprint="soic2"',
      footprintProvenance: "TI drawing D0002A; donor TEST2 (JLCPCB C1)",
    });
    assert.match(source, /export const TESTD/);
    assert.match(source, /export default TESTD/);
    assert.match(source, /getTiSchematicLayout\(pinLabels, \{ pinRoles \}\)/);
    assert.match(source, /Footprint provenance: TI drawing D0002A/);
    assert.doesNotMatch(source, /schPinSpacing/);
  });
});
