import { describe, expect, test } from "bun:test";

import type { SubcircuitDefinition } from "../model";
import { getSelectableSubcircuitCandidates } from "./SubcircuitPickerModal";

const definition = (
  id: string,
  options: { canInstantiate?: boolean; category?: string } = {},
): SubcircuitDefinition => ({
  id,
  title: id,
  category: options.category ?? "Wireless",
  componentName: id.replaceAll("-", "_"),
  importPath: "@tsci/tscircuit.ti",
  sourcePath: `lib/subcircuits/${id}.circuit.tsx`,
  canInstantiate: options.canInstantiate,
  ports: [],
});

describe("subcircuit picker candidates", () => {
  test("shows only selectable same-category parts in alphabetical order", () => {
    const current = definition("current-part");
    const candidates = [
      definition("zeta-part"),
      definition("unavailable-part", { canInstantiate: false }),
      definition("power-part", { category: "Power" }),
      current,
      definition("alpha-part"),
    ];

    expect(
      getSelectableSubcircuitCandidates(candidates, current).map(
        (item) => item.id,
      ),
    ).toEqual(["alpha-part", "zeta-part"]);
  });
});
