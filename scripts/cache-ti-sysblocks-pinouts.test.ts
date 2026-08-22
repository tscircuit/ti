import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  getPinLabelCoordinateStats,
  selectTiSysblocksPinoutCandidates,
  type TiSysblocksCatalogEntry,
} from "./cache-ti-sysblocks-pinouts.ts";

const pinLabelsSource = (labels: string[]) => `
  const pinLabels = {
    ${labels.map((label, index) => `pin${index + 1}: [${JSON.stringify(label)}],`).join("\n")}
  } as const
`;

describe("TI sysblocks pinout cache selection", () => {
  test("measures physical coordinate aliases from a TSX pinLabels object", () => {
    const stats = getPinLabelCoordinateStats(
      `
        const pinLabels = {
          pin1: ["A1"],
          "pin2": ["B1", "GND"],
          pin3: ["C2"],
          pin4: ["D2"],
          pin5: ["VCC"],
        } as const
      `,
    );
    assert.deepEqual(stats, {
      pinLabelCount: 5,
      coordinateLabelCount: 4,
      coordinateLabelRatio: 0.8,
      physicalOnlyPinCount: 3,
      physicalOnly: false,
      numericPhysicalOnly: false,
    });
  });

  test("does not mistake numbered functional labels for BGA coordinates", () => {
    const stats = getPinLabelCoordinateStats(
      pinLabelsSource(["PIN1", "IN1", "VCC1", "AIN5", "OUT1", "C0"]),
    );
    assert.deepEqual(stats, {
      pinLabelCount: 6,
      coordinateLabelCount: 0,
      coordinateLabelRatio: 0,
      physicalOnlyPinCount: 1,
      physicalOnly: false,
      numericPhysicalOnly: false,
    });
  });

  test("recognizes physical aliases after its own functional enrichment", () => {
    const stats = getPinLabelCoordinateStats(`
      const pinLabels = {
        pin1: ["VCC", "1"],
        pin2: ["GPIO0", "2"],
      } as const
      const pinRoles = { pin1: "power" } as const
      const pinAttributes = { pin1: { requiresPower: true } } as const
    `);

    assert.deepEqual(stats, {
      pinLabelCount: 2,
      coordinateLabelCount: 0,
      coordinateLabelRatio: 0,
      physicalOnlyPinCount: 2,
      physicalOnly: true,
      numericPhysicalOnly: true,
    });
  });

  test("selects TI rows plus coordinate-array and numeric-physical JLC rows", async () => {
    const catalog: TiSysblocksCatalogEntry[] = [
      {
        family: "NO_LOCAL_SYMBOL",
        source: "ti-datasheet",
        manufacturerPartNumber: "NO_LOCAL_SYMBOLD",
        packageCode: "D",
        pinCount: 8,
      },
      {
        family: "BGA80",
        source: "jlcpcb",
        manufacturerPartNumber: "BGA80ZCZ",
        componentExportName: "BGA80ZCZ",
        package: "DSBGA-5",
        packageCode: "ZCZ",
        pinCount: 5,
      },
      {
        family: "BGA79",
        source: "jlcpcb",
        manufacturerPartNumber: "BGA79ZCZ",
        componentExportName: "BGA79ZCZ",
        package: "DSBGA-5",
        packageCode: "ZCZ",
        pinCount: 5,
      },
      {
        family: "NUMERIC",
        source: "jlcpcb",
        manufacturerPartNumber: "NUMERICD",
        componentExportName: "NUMERICD",
        package: "SOIC-8",
        packageCode: "D",
        pinCount: 8,
      },
      {
        family: "ALREADY_EXISTS",
        source: "existing",
        manufacturerPartNumber: "ALREADY_EXISTS",
        packageCode: "D",
        pinCount: 8,
      },
    ];
    const sources: Record<string, string> = {
      BGA80: pinLabelsSource(["A1", "B1", "C1", "D1", "VCC"]),
      BGA79: pinLabelsSource(["A1", "B1", "C1", "VCC", "GND"]),
      NUMERIC: pinLabelsSource(["1", "PIN2", "PIN_3", "4", "5", "6", "7", "8"]),
    };
    const { candidates, diagnostics } = await selectTiSysblocksPinoutCandidates(
      catalog,
      {
        repoRoot: "/fixture",
        readComponentSource: async (entry) => {
          const sourceText = sources[entry.family];
          return sourceText
            ? { path: `imports/${entry.family}.tsx`, sourceText }
            : undefined;
        },
      },
    );

    assert.deepEqual(
      candidates.map(({ family, selectionReason }) => [
        family,
        selectionReason,
      ]),
      [
        ["BGA80", "jlcpcb-physical-coordinate-labels"],
        ["NO_LOCAL_SYMBOL", "ti-datasheet"],
        ["NUMERIC", "jlcpcb-numeric-physical-labels"],
      ],
    );
    assert.equal(diagnostics.tiDatasheetCandidates, 1);
    assert.equal(diagnostics.jlcpcbEntriesInspected, 3);
    assert.equal(diagnostics.jlcpcbCoordinateCandidates, 1);
    assert.equal(diagnostics.jlcpcbNumericPhysicalCandidates, 1);
  });

  test("rejects functional A1/B1 aliases on a non-array package", async () => {
    const entry: TiSysblocksCatalogEntry = {
      family: "BUFFER",
      source: "jlcpcb",
      manufacturerPartNumber: "BUFFERD",
      componentExportName: "BUFFERD",
      package: "SOIC-8",
      packageCode: "D",
      pinCount: 5,
    };
    const { candidates, diagnostics } = await selectTiSysblocksPinoutCandidates(
      [entry],
      {
        repoRoot: "/fixture",
        readComponentSource: async () => ({
          path: "imports/BUFFERD.tsx",
          sourceText: pinLabelsSource(["A1", "A2", "B1", "B2", "VCC"]),
        }),
      },
    );
    assert.deepEqual(candidates, []);
    assert.equal(diagnostics.jlcpcbNonArrayPackage, 1);
  });

  test("reports a missing or non-literal pinLabels object cleanly", () => {
    assert.equal(getPinLabelCoordinateStats("export const x = 1"), undefined);
    assert.equal(
      getPinLabelCoordinateStats("const pinLabels = makePinLabels()"),
      undefined,
    );
  });
});
