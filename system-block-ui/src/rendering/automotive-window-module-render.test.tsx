import { expect, test } from "bun:test";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { getSchematicElementBounds } from "@tscircuit/circuit-json-util";
import type { AnyCircuitElement } from "circuit-json";
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

const expectWindowSheetSizes = (circuitJson: AnyCircuitElement[]) => {
  const dimensionsBySheet = {
    communication_interface: [297, 210],
    motor_driver: [297, 210],
    motor_thermal_protection: [297, 210],
    position_feedback: [297, 210],
    watchdog_and_vref: [297, 210],
    main_supply: [431.8, 279.4],
    reference_full: [500, 330],
    pinch_detection: [430, 280],
  } as const;

  // Native sheet rendering maps the 1.1-unit resistor span to KiCad's 10.16 mm
  // and reserves a 5 mm inner margin on each side of the physical page.
  const schematicUnitToMm = 10.16 / 1.1;
  for (const [name, [width, height]] of Object.entries(dimensionsBySheet)) {
    const sheet = circuitJson.find(
      (element) => element.type === "schematic_sheet" && element.name === name,
    );
    expect(sheet).toMatchObject({ sheet_width: width, sheet_height: height });
    if (sheet?.type !== "schematic_sheet") throw new Error(`Missing ${name}`);
    if (width === 297 && height === 210) {
      expect(sheet.sheet_size).toBe("a4");
    }

    const bounds = circuitJson.flatMap((element) => {
      if (
        (element.type !== "schematic_component" &&
          element.type !== "schematic_trace" &&
          element.type !== "schematic_net_label") ||
        element.schematic_sheet_id !== sheet.schematic_sheet_id
      ) {
        return [];
      }
      const bounds = getSchematicElementBounds(element);
      return bounds ? [bounds] : [];
    });
    expect(bounds.length).toBeGreaterThan(0);
    const extentX = Math.max(
      ...bounds.flatMap(({ minX, maxX }) => [Math.abs(minX), Math.abs(maxX)]),
    );
    const extentY = Math.max(
      ...bounds.flatMap(({ minY, maxY }) => [Math.abs(minY), Math.abs(maxY)]),
    );
    expect(extentX).toBeLessThanOrEqual((width / 2 - 5) / schematicUnitToMm);
    expect(extentY).toBeLessThanOrEqual((height / 2 - 5) / schematicUnitToMm);
  }
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

  expectWindowSheetSizes(evaluated.circuitJson);

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

test("standalone window example uses A4 unless the circuit needs a larger sheet", async () => {
  const repositoryRoot = fileURLToPath(new URL("../../..", import.meta.url));
  const sourceModules = await loadRepositorySources(repositoryRoot);
  const source = await Bun.file(
    join(repositoryRoot, "examples/AutomotiveWindowModule.circuit.tsx"),
  ).text();
  const evaluated = await evaluateGeneratedTsx(source, {
    fsMap: createLocalTiPackageEvaluationFsMap(
      automotiveWindowDefinitions,
      sourceModules,
    ),
    mainComponentPath: "AutomotiveWindowModule.circuit.tsx",
    timeoutMs: 120_000,
  });

  expect(evaluated.sheets).toHaveLength(8);
  expectWindowSheetSizes(evaluated.circuitJson);
}, 120_000);
