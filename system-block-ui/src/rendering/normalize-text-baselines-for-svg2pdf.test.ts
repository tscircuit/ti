import { describe, expect, test } from "bun:test";
import { normalizeTextBaselinesForSvg2Pdf } from "./normalize-text-baselines-for-svg2pdf";

const createBaselineElement = (
  initialAttributes: Readonly<Record<string, string>>,
) => {
  const attributes = new Map(Object.entries(initialAttributes));

  return {
    attributes,
    element: {
      getAttribute: (name: string) => attributes.get(name) ?? null,
      hasAttribute: (name: string) => attributes.has(name),
      setAttribute: (name: string, attributeValue: string) => {
        attributes.set(name, attributeValue);
      },
    },
  };
};

describe("SVG text baseline compatibility", () => {
  test("maps the dominant baseline and calibrates central text", () => {
    const centered = createBaselineElement({
      "dominant-baseline": "central",
    });

    normalizeTextBaselinesForSvg2Pdf([centered.element]);

    expect(Object.fromEntries(centered.attributes)).toEqual({
      "dominant-baseline": "central",
      "alignment-baseline": "central",
      dy: "0.08em",
    });
  });

  test("preserves explicit alignment and positioning", () => {
    const explicitlyAligned = createBaselineElement({
      "dominant-baseline": "central",
      "alignment-baseline": "hanging",
    });
    const explicitlyPositioned = createBaselineElement({
      "dominant-baseline": "central",
      dy: "0.2em",
    });

    normalizeTextBaselinesForSvg2Pdf([
      explicitlyAligned.element,
      explicitlyPositioned.element,
    ]);

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
