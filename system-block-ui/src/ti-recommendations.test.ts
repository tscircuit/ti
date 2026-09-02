import { describe, expect, test } from "bun:test";

import type { SubcircuitDefinition } from "./model";
import { matchTiRecommendedDefinitionIds } from "./ti-recommendations";

const definition = (id: string, title: string): SubcircuitDefinition => ({
  category: "Wireless",
  componentName: id,
  id,
  importPath: "@tsci/tscircuit.ti",
  ports: [],
  sourcePath: `lib/subcircuits/${id}.circuit.tsx`,
  title,
});

describe("TI recommendation matching", () => {
  test("matches exact titles and part-number tokens only", () => {
    const definitions = [
      definition("cc2340", "Wireless MCU CC2340 R5"),
      definition("cc2564", "CC2564C Bluetooth Controller"),
      definition("antenna", "W3006 Wireless Connectivity Antenna"),
    ];

    expect([
      ...matchTiRecommendedDefinitionIds(["CC2340R5", "W3006"], definitions),
    ]).toEqual(["cc2340", "antenna"]);
  });
});
