import { describe, expect, test } from "bun:test";

import {
  calculateSchematicPdfPageLayout,
  normalizeTextBaselinesForSvg2Pdf,
} from "./export-pdf";

const baselineElement = (
  initialAttributes: Readonly<Record<string, string>>,
) => {
  const attributes = new Map(Object.entries(initialAttributes));
  return {
    attributes,
    element: {
      getAttribute: (name: string) => attributes.get(name) ?? null,
      hasAttribute: (name: string) => attributes.has(name),
      setAttribute: (name: string, value: string) => {
        attributes.set(name, value);
      },
    },
  };
};

describe("schematic PDF page layout", () => {
  test("stretches a schematic over an entire A4 landscape page", () => {
    const layout = calculateSchematicPdfPageLayout({
      pageWidthMm: 297,
      pageHeightMm: 210,
    });

    expect(layout).toEqual({ x: 0, y: 0, width: 297, height: 210 });
  });

  test("uses the full page for custom page dimensions", () => {
    const layout = calculateSchematicPdfPageLayout({
      pageWidthMm: 180,
      pageHeightMm: 320,
    });

    expect(layout).toEqual({ x: 0, y: 0, width: 180, height: 320 });
  });

  test("rejects invalid page dimensions", () => {
    expect(() =>
      calculateSchematicPdfPageLayout({
        pageWidthMm: 0,
        pageHeightMm: 210,
      }),
    ).toThrow("pageWidthMm must be a positive finite number");

    expect(() =>
      calculateSchematicPdfPageLayout({
        pageWidthMm: 297,
        pageHeightMm: Number.NaN,
      }),
    ).toThrow("pageHeightMm must be a positive finite number");
  });
});

describe("SVG text baseline compatibility", () => {
  test("copies dominant-baseline for svg2pdf without overriding explicit alignment", () => {
    const centered = baselineElement({ "dominant-baseline": "central" });
    const explicitlyAligned = baselineElement({
      "dominant-baseline": "central",
      "alignment-baseline": "hanging",
    });
    const explicitlyPositioned = baselineElement({
      "dominant-baseline": "central",
      dy: "0.2em",
    });

    normalizeTextBaselinesForSvg2Pdf([
      centered.element,
      explicitlyAligned.element,
      explicitlyPositioned.element,
    ]);

    expect(Object.fromEntries(centered.attributes)).toEqual({
      "dominant-baseline": "central",
      "alignment-baseline": "central",
      dy: "0.175em",
    });
    expect(Object.fromEntries(explicitlyAligned.attributes)).toEqual({
      "dominant-baseline": "central",
      "alignment-baseline": "hanging",
    });
    expect(Object.fromEntries(explicitlyPositioned.attributes)).toEqual({
      "dominant-baseline": "central",
      "alignment-baseline": "central",
      dy: "0.2em",
    });
  });
});
