import { describe, expect, test } from "bun:test";

import {
  enrichArrayComponentSource,
  enrichArrayPinMetadata,
  parsePinLabels,
} from "./enrich-ti-array-pin-labels.ts";

const pins = [
  { number: "A1", name: "VSS", type: "Ground", description: "Ground" },
  { number: "B1", name: "GPIO0", type: "I/O", description: "GPIO" },
  { number: "A2", name: "VSS", type: "Ground", description: "Ground" },
];

describe("TI array-pin enrichment", () => {
  test("maps functions through physical aliases rather than array order", () => {
    const metadata = enrichArrayPinMetadata(
      {
        pin1: ["B1"],
        pin2: ["A2"],
        pin3: ["A1"],
      },
      pins,
    );

    expect(metadata.pinLabels.pin1).toEqual(["GPIO0", "B1"]);
    expect(metadata.pinLabels.pin2).toEqual(["VSS", "A2", "VSS_A2"]);
    expect(metadata.pinLabels.pin3).toEqual(["VSS", "A1", "VSS_A1"]);
    expect(metadata.pinRoles).toEqual({
      pin1: "bidirectional",
      pin2: "ground",
      pin3: "ground",
    });
    expect(metadata.pinAttributes).toEqual({
      pin2: { requiresGround: true },
      pin3: { requiresGround: true },
    });
  });

  test("rejects an official ball that is absent from the footprint", () => {
    expect(() => enrichArrayPinMetadata({ pin1: ["A1"] }, [pins[1]])).toThrow(
      "official physical pin B1 has no footprint port",
    );
  });

  test("maps numeric PIN aliases directly to their existing pin keys", () => {
    const metadata = enrichArrayPinMetadata(
      {
        pin1: ["PIN1"],
        pin2: ["2"],
        pin3: ["PIN_03"],
      },
      [
        { number: "1", name: "VCC", type: "Power", description: "Supply" },
        { number: "2", name: "OUT", type: "Output", description: "Output" },
        { number: "3", name: "NC", type: "", description: "Do not connect" },
      ],
    );

    expect(metadata.pinLabels).toEqual({
      pin1: ["VCC", "1"],
      pin2: ["OUT", "2"],
      pin3: ["NC", "3"],
    });
    expect(metadata.pinRoles).toEqual({
      pin1: "power",
      pin2: "output",
      pin3: "no-connect",
    });
    expect(metadata.pinAttributes).toEqual({
      pin1: { requiresPower: true },
      pin3: { doNotConnect: true },
    });
  });

  test("does not mistake a generated functional alias for another physical ball", () => {
    const metadata = enrichArrayPinMetadata(
      {
        pin1: ["A1", "B1"],
        pin2: ["VSS", "A1"],
      },
      [
        { number: "A1", name: "VSS", type: "Ground", description: "Ground" },
        { number: "B1", name: "A1", type: "I", description: "Input" },
      ],
    );

    expect(metadata.pinLabels).toEqual({
      pin2: ["VSS", "A1"],
      pin1: ["A1", "B1"],
    });
  });

  test("rewrites only symbol metadata and schematic props", () => {
    const source = `import type { ChipProps } from "@tscircuit/props"
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["B1"],
  pin3: ["A2"]
} as const

export const Example = (props: ChipProps<typeof pinLabels>) => (
  <chip
    {...getTiSchematicLayout(pinLabels)}
    pinLabels={pinLabels}
    footprint="bga3"
    {...props}
  />
)
`;
    const output = enrichArrayComponentSource(source, pins);
    const parsed = parsePinLabels(output);

    expect(parsed.labels.pin1).toEqual(["VSS", "A1", "VSS_A1"]);
    expect(output).toContain("getTiSchematicLayout(pinLabels, { pinRoles })");
    expect(output).toContain("pinAttributes={pinAttributes}");
    expect(output).toContain('footprint="bga3"');
    expect(enrichArrayComponentSource(output, pins)).toBe(output);
  });
});
