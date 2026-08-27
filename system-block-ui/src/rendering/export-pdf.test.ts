import { describe, expect, test } from "bun:test";

import {
  calculateSchematicPdfPageLayout,
  normalizeSvgTextForPdf,
} from "./export-pdf";
import {
  SCHEMATIC_SVG_HEIGHT,
  SCHEMATIC_SVG_WIDTH,
} from "./schematic-page-size";

describe("schematic PDF page layout", () => {
  test("matches the schematic canvas to A4 landscape", () => {
    expect(SCHEMATIC_SVG_HEIGHT).toBe(990);
    expect(SCHEMATIC_SVG_WIDTH / SCHEMATIC_SVG_HEIGHT).toBeCloseTo(
      297 / 210,
      3,
    );
  });

  test("uses an entire A4 landscape page", () => {
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

describe("schematic PDF text normalization", () => {
  test("maps the SVG dominant baseline to the attribute svg2pdf reads", () => {
    const attributes = new Map([
      ["dominant-baseline", "central"],
      ["style", "font-size:12px"],
    ]);
    const textElement = {
      getAttribute: (name: string) => attributes.get(name) ?? null,
      hasAttribute: (name: string) => attributes.has(name),
      setAttribute: (name: string, value: string) =>
        attributes.set(name, value),
    };
    const svg = {
      querySelectorAll: () => [textElement],
    } as unknown as Element;

    normalizeSvgTextForPdf(svg);

    expect(attributes.get("alignment-baseline")).toBe("central");
    expect(attributes.get("font-family")).toBe("LiberationSans");
    expect(attributes.get("style")).toContain("font-family:LiberationSans");
  });
});
