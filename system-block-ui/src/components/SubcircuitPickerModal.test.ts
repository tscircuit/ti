import { describe, expect, test } from "bun:test";

import type { SubcircuitDefinition } from "../model";
import { getSelectableSubcircuitCandidates } from "./SubcircuitPickerModal";

const definition = (
  id: string,
  options: {
    canInstantiate?: boolean;
    category?: string;
    sourcePath?: string;
  } = {},
): SubcircuitDefinition => ({
  id,
  title: id,
  category: options.category ?? "Wireless",
  componentName: id.replaceAll("-", "_"),
  importPath: "@tsci/tscircuit.ti",
  sourcePath: options.sourcePath ?? `lib/subcircuits/${id}.circuit.tsx`,
  canInstantiate: options.canInstantiate,
  ports: [],
});

describe("subcircuit picker candidates", () => {
  test("shows the full selectable same-category library in alphabetical order", () => {
    const current = definition("current-part");
    const candidates = [
      definition("zeta-part"),
      definition("unavailable-part", { canInstantiate: false }),
      definition("power-part", { category: "Power" }),
      definition("imported-chip", {
        sourcePath: "lib/chips/imported-chip.circuit.tsx",
      }),
      current,
      definition("alpha-part"),
    ];

    expect(
      getSelectableSubcircuitCandidates(candidates, current).map(
        (item) => item.id,
      ),
    ).toEqual(["alpha-part", "current-part", "zeta-part"]);
  });
});
