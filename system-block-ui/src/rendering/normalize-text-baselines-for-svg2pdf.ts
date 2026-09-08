const SVG2PDF_CENTRAL_BASELINE_DY = "0.08em";

type SvgTextBaselineElement = Pick<
  Element,
  "getAttribute" | "hasAttribute" | "setAttribute"
>;

export const normalizeTextBaselinesForSvg2Pdf = (
  elements: Iterable<SvgTextBaselineElement>,
): void => {
  for (const element of elements) {
    if (element.hasAttribute("alignment-baseline")) continue;

    const dominantBaseline = element.getAttribute("dominant-baseline");
    if (!dominantBaseline) continue;

    element.setAttribute("alignment-baseline", dominantBaseline);

    // jsPDF places its middle baseline slightly above the browser SVG
    // central baseline. Preserve author positioning when compensating for it.
    if (dominantBaseline === "central" && !element.hasAttribute("dy")) {
      element.setAttribute("dy", SVG2PDF_CENTRAL_BASELINE_DY);
    }
  }
};
