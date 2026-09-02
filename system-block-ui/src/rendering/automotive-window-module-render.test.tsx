import { expect, test } from "bun:test";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { unzipSync } from "fflate";
import {
  createSystemBlockExamples,
  generateSystemDesignArtifacts,
  SUBCIRCUIT_CATALOG,
} from "../model";
import {
  evaluateGeneratedTsx,
  getCircuitJsonErrors,
} from "./evaluate-schematic";
import { createKicadProjectZipBlob } from "./export-kicad-project";
import { getGeneratedSystemEvaluationFsMap } from "./generated-source-files";
import { createLocalTiPackageEvaluationFsMap } from "./local-ti-package-files";

const automotiveWindowDefinitions = [
  {
    componentName: "PowerSupply_WindowModule",
    sourcePath: "lib/subcircuits/PowerSupply_WindowModule.circuit.tsx",
  },
  {
    componentName: "CommunicationInterface_LIN_TLIN1028",
    sourcePath:
      "lib/subcircuits/CommunicationInterface_LIN_TLIN1028.circuit.tsx",
  },
  {
    componentName: "Microcontroller_MSP430FR6007",
    sourcePath: "lib/subcircuits/Microcontroller_MSP430FR6007.circuit.tsx",
  },
  {
    componentName: "MotorDriver_DRV8703",
    sourcePath: "lib/subcircuits/MotorDriver_DRV8703.circuit.tsx",
  },
  {
    componentName: "PinchDetection_INA240_TLV2316_LMV7275",
    sourcePath:
      "lib/subcircuits/PinchDetection_INA240_TLV2316_LMV7275.circuit.tsx",
  },
  {
    componentName: "MotorThermalProtection_TMP390",
    sourcePath: "lib/subcircuits/MotorThermalProtection_TMP390.circuit.tsx",
  },
  {
    componentName: "PositionFeedback_DRV5013_TIDA01389",
    sourcePath:
      "lib/subcircuits/PositionFeedback_DRV5013_TIDA01389.circuit.tsx",
  },
] as const;

const loadRepositorySources = async (
  repositoryRoot: string,
): Promise<Record<string, string>> => {
  const sources: Record<string, string> = {};
  const glob = new Bun.Glob("lib/**/*.{ts,tsx}");
  for await (const path of glob.scan({
    cwd: repositoryRoot,
    onlyFiles: true,
  })) {
    sources[path] = await Bun.file(join(repositoryRoot, path)).text();
  }
  return sources;
};

test("Automotive Window Module renders every real schematic sheet", async () => {
  const repositoryRoot = fileURLToPath(new URL("../../..", import.meta.url));
  const sourceModules = await loadRepositorySources(repositoryRoot);
  const example = createSystemBlockExamples(SUBCIRCUIT_CATALOG).find(
    ({ id }) => id === "automotive-window-module",
  );
  if (!example) throw new Error("Missing Automotive Window Module example");

  const artifacts = generateSystemDesignArtifacts({
    blocks: example.graph.blocks,
    connections: example.graph.connections,
    catalog: SUBCIRCUIT_CATALOG,
    boardName: "automotive_window_module",
  });
  const evaluated = await evaluateGeneratedTsx(artifacts.tsx, {
    fsMap: {
      ...createLocalTiPackageEvaluationFsMap(
        automotiveWindowDefinitions,
        sourceModules,
      ),
      ...getGeneratedSystemEvaluationFsMap(artifacts),
    },
    mainComponentPath: "GeneratedSystem.circuit.tsx",
    timeoutMs: 120_000,
  });

  expect(evaluated.sheets).toHaveLength(9);
  expect(evaluated.sheets.map(({ title }) => title)).toEqual(
    expect.arrayContaining([
      "System Diagram",
      "Main Supply",
      "Watchdog and Vref",
      "MSP-TS430PZ100E Figure B-78",
      "TLIN1028-Q1 LIN Interface",
      "TIDA-01389 DRV8703 Motor Driver",
      "TIDA-01421 Pinch Detection",
      "TMP390-Q1 Motor Thermal Protection",
      "TIDA-01389 Position Feedback",
    ]),
  );
  expect(evaluated.sheets.map(({ title }) => title)).not.toContain(
    "Automotive Window Power Supply",
  );
  expect(evaluated.sheets.map(({ title }) => title)).not.toContain(
    "MSP430FR6007 Microcontroller",
  );

  const pinchDetectionSheet = evaluated.circuitJson.find(
    (element) =>
      element.type === "schematic_sheet" && element.name === "pinch_detection",
  );
  expect(pinchDetectionSheet).toMatchObject({
    sheet_width: 430,
    sheet_height: 280,
  });

  const errorTypes = getCircuitJsonErrors(evaluated.circuitJson).map(
    ({ error_type }) => error_type,
  );
  expect(new Set(errorTypes)).toEqual(
    new Set(["external_footprint_load_error", "pcb_missing_footprint_error"]),
  );

  const kicadBlob = await createKicadProjectZipBlob(evaluated.circuitJson, {
    projectName: "automotive-window-module",
  });
  const kicadArchive = unzipSync(new Uint8Array(await kicadBlob.arrayBuffer()));
  expect(Object.keys(kicadArchive)).toContain(
    "automotive-window-module.kicad_pro",
  );
  expect(Object.keys(kicadArchive)).toContain(
    "automotive-window-module.kicad_pcb",
  );
  expect(
    Object.keys(kicadArchive).filter((fileName) =>
      fileName.endsWith(".kicad_sch"),
    ),
  ).toHaveLength(9);
}, 120_000);
