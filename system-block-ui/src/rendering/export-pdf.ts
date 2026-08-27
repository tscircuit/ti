import { jsPDF } from "jspdf";
import { downloadBlob } from "./download-blob";

export { downloadBlob } from "./download-blob";

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const DEFAULT_FILE_NAME = "system-schematic.pdf";
const DEFAULT_ORIENTATION = "landscape";
const DEFAULT_RASTER_DPI = 200;
const JPEG_QUALITY = 0.98;
const MILLIMETERS_PER_INCH = 25.4;

/** The evaluator's richer sheet objects are structurally assignable here. */
export interface SchematicPdfSheet {
  svg: string;
  title?: string;
}

export type SchematicPdfInput = string | readonly SchematicPdfSheet[];

export interface SchematicPdfOptions {
  /** Fixed orientation used by every page. Defaults to A4 landscape. */
  orientation?: "portrait" | "landscape";
  format?: string | readonly [number, number];
  /** PDF document metadata title. */
  title?: string;
}

export interface DownloadSchematicPdfOptions extends SchematicPdfOptions {
  fileName?: string;
}

interface SvgDimensions {
  width: number;
  height: number;
}

export interface SchematicPdfPageLayoutRequest {
  pageWidthMm: number;
  pageHeightMm: number;
}

export interface SchematicPdfPageLayout {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface SchematicPdfRasterDimensionsRequest {
  pageWidthMm: number;
  pageHeightMm: number;
  dpi?: number;
}

export interface SchematicPdfRasterDimensions {
  width: number;
  height: number;
}

interface PreparedSheet {
  element: Element;
}

const parseSvg = (svg: string): Element => {
  if (typeof DOMParser === "undefined") {
    throw new Error("PDF export requires a browser DOMParser");
  }

  // XML entities and doctypes are not needed in circuit-to-svg output and can
  // make untrusted XML parsing surprising across browser implementations.
  if (/<!DOCTYPE|<!ENTITY/i.test(svg)) {
    throw new Error("SVG doctypes and entities are not supported");
  }

  const parsed = new DOMParser().parseFromString(svg, "image/svg+xml");
  if (parsed.querySelector("parsererror")) {
    throw new Error("Unable to export malformed SVG");
  }

  const root = parsed.documentElement;
  if (root.localName !== "svg" || root.namespaceURI !== SVG_NAMESPACE) {
    throw new Error("PDF export input must have an SVG root element");
  }

  for (const element of [root, ...root.querySelectorAll("*")]) {
    const localName = element.localName.toLowerCase();
    if (
      localName === "script" ||
      localName === "foreignobject" ||
      localName === "iframe" ||
      localName === "object" ||
      localName === "embed"
    ) {
      throw new Error(`Unsafe SVG element <${element.localName}>`);
    }

    for (const attribute of element.attributes) {
      if (
        attribute.localName.toLowerCase().startsWith("on") ||
        /javascript\s*:/i.test(attribute.value)
      ) {
        throw new Error(`Unsafe SVG attribute ${attribute.name}`);
      }
    }
  }

  return root;
};

const parsePositiveNumber = (value: string | null): number | undefined => {
  if (value === null) return undefined;
  const match = value.trim().match(/^([+]?(?:\d+\.?\d*|\.\d+))/);
  if (!match) return undefined;
  const number = Number(match[1]);
  return Number.isFinite(number) && number > 0 ? number : undefined;
};

const getSvgDimensions = (svg: Element): SvgDimensions => {
  const viewBox = svg
    .getAttribute("viewBox")
    ?.trim()
    .split(/[\s,]+/)
    .map(Number);

  if (
    viewBox?.length === 4 &&
    viewBox.every(Number.isFinite) &&
    viewBox[2] > 0 &&
    viewBox[3] > 0
  ) {
    return { width: viewBox[2], height: viewBox[3] };
  }

  return {
    width: parsePositiveNumber(svg.getAttribute("width")) ?? 1200,
    height: parsePositiveNumber(svg.getAttribute("height")) ?? 600,
  };
};

const normalizeSvgViewport = (
  svg: Element,
  dimensions: SvgDimensions,
): void => {
  // circuit-to-svg currently emits width/height without a viewBox. Supplying
  // one lets the browser scale the schematic uniformly into the PDF page.
  if (!svg.hasAttribute("viewBox")) {
    svg.setAttribute("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`);
  }
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
};

const validateFinitePositive = (name: string, value: number): void => {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError(`${name} must be a positive finite number`);
  }
};

/** Uses the full PDF page as the schematic viewport. */
export function calculateSchematicPdfPageLayout({
  pageWidthMm,
  pageHeightMm,
}: SchematicPdfPageLayoutRequest): SchematicPdfPageLayout {
  validateFinitePositive("pageWidthMm", pageWidthMm);
  validateFinitePositive("pageHeightMm", pageHeightMm);

  return {
    x: 0,
    y: 0,
    width: pageWidthMm,
    height: pageHeightMm,
  };
}

/** Calculates a print-resolution raster matching the PDF page's aspect ratio. */
export function calculateSchematicPdfRasterDimensions({
  pageWidthMm,
  pageHeightMm,
  dpi = DEFAULT_RASTER_DPI,
}: SchematicPdfRasterDimensionsRequest): SchematicPdfRasterDimensions {
  validateFinitePositive("pageWidthMm", pageWidthMm);
  validateFinitePositive("pageHeightMm", pageHeightMm);
  validateFinitePositive("dpi", dpi);

  return {
    width: Math.round((pageWidthMm / MILLIMETERS_PER_INCH) * dpi),
    height: Math.round((pageHeightMm / MILLIMETERS_PER_INCH) * dpi),
  };
}

const renderSvgToCanvas = async (
  svg: Element,
  dimensions: SchematicPdfRasterDimensions,
): Promise<HTMLCanvasElement> => {
  if (
    typeof document === "undefined" ||
    typeof Image === "undefined" ||
    typeof XMLSerializer === "undefined" ||
    typeof URL === "undefined"
  ) {
    throw new Error("PDF export requires browser image and canvas APIs");
  }

  svg.setAttribute("width", String(dimensions.width));
  svg.setAttribute("height", String(dimensions.height));

  const serializedSvg = new XMLSerializer().serializeToString(svg);
  const svgBlob = new Blob([serializedSvg], {
    type: "image/svg+xml;charset=utf-8",
  });
  const svgUrl = URL.createObjectURL(svgBlob);

  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const candidate = new Image();
      candidate.decoding = "sync";
      candidate.onload = () => resolve(candidate);
      candidate.onerror = () =>
        reject(new Error("Unable to rasterize schematic SVG"));
      candidate.src = svgUrl;
    });

    const canvas = document.createElement("canvas");
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Unable to create a canvas for PDF export");
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas;
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
};

const prepareSheets = (input: SchematicPdfInput): PreparedSheet[] => {
  const sheets: readonly SchematicPdfSheet[] =
    typeof input === "string" ? [{ svg: input }] : input;
  if (sheets.length === 0) {
    throw new RangeError("At least one schematic sheet is required");
  }

  // Parse every sheet before creating the PDF so invalid later pages never
  // produce a partial download.
  return sheets.map((sheet, index) => {
    if (typeof sheet.svg !== "string" || sheet.svg.trim().length === 0) {
      throw new TypeError(`Schematic sheet ${index + 1} has no SVG content`);
    }
    const element = parseSvg(sheet.svg);
    const dimensions = getSvgDimensions(element);
    normalizeSvgViewport(element, dimensions);
    return { element };
  });
};

/** Converts one or more schematic SVGs into a one-sheet-per-page PDF. */
export async function createSchematicPdfBlob(
  input: SchematicPdfInput,
  options: SchematicPdfOptions = {},
): Promise<Blob> {
  const sheets = prepareSheets(input);

  const format: string | number[] =
    typeof options.format === "string" || options.format === undefined
      ? (options.format ?? "a4")
      : [options.format[0], options.format[1]];
  const orientation = options.orientation ?? DEFAULT_ORIENTATION;
  const pdf = new jsPDF({
    orientation,
    unit: "mm",
    format,
    compress: true,
  });

  pdf.setProperties({
    ...(options.title ? { title: options.title } : {}),
    creator: "tscircuit system block UI",
  });

  for (const [index, sheet] of sheets.entries()) {
    if (index > 0) pdf.addPage(format, orientation);

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const layout = calculateSchematicPdfPageLayout({
      pageWidthMm: pageWidth,
      pageHeightMm: pageHeight,
    });
    const rasterDimensions = calculateSchematicPdfRasterDimensions({
      pageWidthMm: pageWidth,
      pageHeightMm: pageHeight,
    });
    const canvas = await renderSvgToCanvas(sheet.element, rasterDimensions);
    const imageData = canvas.toDataURL("image/jpeg", JPEG_QUALITY);

    // Browser rasterization keeps the exact SVG glyphs and font metrics. The
    // previous svg2pdf path substituted unsupported Unicode (for example Ω)
    // and changed text widths, making net-label text overflow its outline.
    pdf.addImage(
      imageData,
      "JPEG",
      layout.x,
      layout.y,
      layout.width,
      layout.height,
      undefined,
      "FAST",
    );

    // jsPDF has already encoded the canvas; release its backing store before
    // rasterizing the next sheet.
    canvas.width = 1;
    canvas.height = 1;
  }

  return pdf.output("blob");
}

/** Builds and downloads a schematic PDF, returning the downloaded Blob. */
export async function downloadSchematicPdf(
  input: SchematicPdfInput,
  options: DownloadSchematicPdfOptions = {},
): Promise<Blob> {
  const blob = await createSchematicPdfBlob(input, options);
  downloadBlob(blob, options.fileName ?? DEFAULT_FILE_NAME);
  return blob;
}

export const exportSchematicPdf = downloadSchematicPdf;
