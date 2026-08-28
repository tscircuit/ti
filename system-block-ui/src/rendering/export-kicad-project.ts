import type { CircuitJson } from "circuit-json";
import {
  CircuitJsonToKicadPcbConverter,
  CircuitJsonToKicadProConverter,
  CircuitJsonToKicadSchConverter,
} from "circuit-json-to-kicad";
import { strToU8, zipSync } from "fflate";
import {
  copyBytesToArrayBuffer,
  getSafeProjectExportName,
  type ProjectZipOptions,
} from "./project-zip-options";
import { prepareCircuitJsonForEcadExport } from "./prepare-circuit-json-for-ecad-export";

const ZIP_MIME_TYPE = "application/zip";
const KICAD_CHILD_SHEET_WIDTH_MM = 40;
const KICAD_CHILD_SHEET_HEIGHT_MM = 25;
const KICAD_CHILD_SHEET_MIN_GAP_MM = 2;
const KICAD_CHILD_SHEET_TOP_MM = 12;

const KICAD_PAPER_WIDTH_MM: Readonly<Record<string, number>> = {
  A0: 1189,
  A1: 841,
  A2: 594,
  A3: 420,
  A4: 297,
  A5: 210,
};

export type KicadProjectZipOptions = ProjectZipOptions;

type CircuitElement = CircuitJson[number];

const getSheetIndex = (element: CircuitElement): number =>
  element.type === "schematic_sheet" && typeof element.sheet_index === "number"
    ? element.sheet_index
    : Number.MAX_SAFE_INTEGER;

/**
 * KiCad requires one root schematic file for a hierarchy. Use the first real
 * Circuit JSON sheet as that root instead of emitting an extra page containing
 * only child-sheet boxes.
 */
export const promoteFirstSchematicSheetToKicadRoot = (
  circuitJson: readonly CircuitElement[],
): CircuitElement[] => {
  const rootSheet = circuitJson
    .filter((element) => element.type === "schematic_sheet")
    .sort((a, b) => getSheetIndex(a) - getSheetIndex(b))[0];
  if (!rootSheet || rootSheet.type !== "schematic_sheet") {
    return [...circuitJson];
  }

  const rootSheetId = rootSheet.schematic_sheet_id;
  return circuitJson.flatMap((element) => {
    if (element === rootSheet) return [];
    if (
      "schematic_sheet_id" in element &&
      element.schematic_sheet_id === rootSheetId
    ) {
      const promotedElement = { ...element } as Record<string, unknown>;
      delete promotedElement.schematic_sheet_id;
      return [promotedElement as CircuitElement];
    }
    return [element];
  });
};

const placeKicadChildSheetsAboveRootCircuit = (
  schematicConverter: CircuitJsonToKicadSchConverter,
): string => {
  const root = schematicConverter.getOutput();
  const childSheets = root.sheets ?? [];
  if (childSheets.length === 0) return root.getString();

  const paperWidth = KICAD_PAPER_WIDTH_MM[root.paper?.size ?? "A4"] ?? 297;
  const sheetsWidth = childSheets.length * KICAD_CHILD_SHEET_WIDTH_MM;
  const availableGap =
    childSheets.length > 1
      ? (paperWidth - sheetsWidth) / (childSheets.length - 1)
      : 0;
  const gap = Math.max(KICAD_CHILD_SHEET_MIN_GAP_MM, Math.min(8, availableGap));
  const rowWidth = sheetsWidth + gap * (childSheets.length - 1);
  const left = Math.max(0, (paperWidth - rowWidth) / 2);

  for (const [index, sheet] of childSheets.entries()) {
    const x = left + index * (KICAD_CHILD_SHEET_WIDTH_MM + gap);
    const y = KICAD_CHILD_SHEET_TOP_MM;
    if (!sheet.position) continue;
    sheet.position.x = x;
    sheet.position.y = y;
    for (const property of sheet.properties) {
      if (!property.at) continue;
      property.at.x = x;
      property.at.y =
        property.key === "Sheetname"
          ? y - 0.7
          : y + KICAD_CHILD_SHEET_HEIGHT_MM + 0.7;
    }
  }

  return root.getString();
};

export const getKicadProjectZipFileName = (
  options: KicadProjectZipOptions = {},
): string => `${getSafeProjectExportName(options)}.kicad-project.zip`;

/** Convert evaluated Circuit JSON into a complete, browser-downloadable KiCad project. */
export async function createKicadProjectZipBlob(
  circuitJson: readonly CircuitJson[number][],
  options: KicadProjectZipOptions = {},
): Promise<Blob> {
  const projectName = getSafeProjectExportName(options);
  const input = promoteFirstSchematicSheetToKicadRoot(
    prepareCircuitJsonForEcadExport(circuitJson),
  );
  const schematicFileName = `${projectName}.kicad_sch`;
  const pcbFileName = `${projectName}.kicad_pcb`;

  const schematicConverter = new CircuitJsonToKicadSchConverter(input);
  schematicConverter.runUntilFinished();
  const schematicFiles = schematicConverter.getOutputFiles({
    schematicFilename: schematicFileName,
  });
  if (schematicFiles.length > 1) {
    schematicFiles[0] = {
      ...schematicFiles[0],
      content: placeKicadChildSheetsAboveRootCircuit(schematicConverter),
    };
  }

  const pcbConverter = new CircuitJsonToKicadPcbConverter(input, {
    projectName,
  });
  pcbConverter.runUntilFinished();

  const projectConverter = new CircuitJsonToKicadProConverter(input, {
    projectName,
    schematicFilename: schematicFileName,
    pcbFilename: pcbFileName,
    schematicSheetPlan: schematicConverter.schematicSheetPlan,
  });
  projectConverter.runUntilFinished();

  const files: Record<string, Uint8Array> = {
    [pcbFileName]: strToU8(pcbConverter.getOutputString()),
    [`${projectName}.kicad_pro`]: strToU8(projectConverter.getOutputString()),
  };
  for (const schematicFile of schematicFiles) {
    files[schematicFile.filename] = strToU8(schematicFile.content);
  }

  const zipBytes = zipSync(files, { level: 6 });
  return new Blob([copyBytesToArrayBuffer(zipBytes)], { type: ZIP_MIME_TYPE });
}
