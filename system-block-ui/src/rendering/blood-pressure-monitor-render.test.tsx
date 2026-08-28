import { expect, test } from "bun:test";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  createSystemBlockExamples,
  generateSystemDesignArtifacts,
  SUBCIRCUIT_CATALOG,
} from "../model";
import { evaluateGeneratedTsx } from "./evaluate-schematic";
import { getGeneratedSystemEvaluationFsMap } from "./generated-source-files";
import { createLocalTiPackageEvaluationFsMap } from "./local-ti-package-files";

const bloodPressureDefinitions = [
  {
    componentName: "PowerManagement_TPS7A2433_TIDA010266",
    sourcePath:
      "lib/subcircuits/PowerManagement_TPS7A2433_TIDA010266.circuit.tsx",
  },
  {
    componentName: "VoltageReference_ATL431LI_TIDA010266",
    sourcePath:
      "lib/subcircuits/VoltageReference_ATL431LI_TIDA010266.circuit.tsx",
  },
  {
    componentName: "AnalogFrontEnd_LMV324A_TIDA010266",
    sourcePath: "lib/subcircuits/AnalogFrontEnd_LMV324A_TIDA010266.circuit.tsx",
  },
  {
    componentName: "Microcontroller_MSPM0L1306_TIDA010266",
    sourcePath:
      "lib/subcircuits/Microcontroller_MSPM0L1306_TIDA010266.circuit.tsx",
  },
  {
    componentName: "MotorDriver_DRV8210_TIDA010266",
    sourcePath: "lib/subcircuits/MotorDriver_DRV8210_TIDA010266.circuit.tsx",
  },
] as const;

const loadRepositorySources = async (
  repositoryRoot: string,
): Promise<Record<string, string>> => {
  const sources: Record<string, string> = {};
  for (const sourceRoot of ["lib", "imports"]) {
    const glob = new Bun.Glob(`${sourceRoot}/**/*.{ts,tsx}`);
    for await (const path of glob.scan({
      cwd: repositoryRoot,
      onlyFiles: true,
    })) {
      sources[path] = await Bun.file(join(repositoryRoot, path)).text();
    }
  }
  return sources;
};

test("renders every reusable TIDA-010266 monitor block", async () => {
  const repositoryRoot = fileURLToPath(new URL("../../..", import.meta.url));
  const sourceModules = await loadRepositorySources(repositoryRoot);
  const example = createSystemBlockExamples(SUBCIRCUIT_CATALOG).find(
    ({ id }) => id === "tida-010266-blood-pressure-monitor",
  );
  if (!example) throw new Error("Missing TIDA-010266 monitor example");

  const artifacts = generateSystemDesignArtifacts({
    blocks: example.graph.blocks,
    connections: example.graph.connections,
    catalog: SUBCIRCUIT_CATALOG,
    boardName: "tida_010266_blood_pressure_monitor",
  });
  const evaluated = await evaluateGeneratedTsx(artifacts.tsx, {
    fsMap: {
      ...createLocalTiPackageEvaluationFsMap(
        bloodPressureDefinitions,
        sourceModules,
      ),
      ...getGeneratedSystemEvaluationFsMap(artifacts),
    },
    mainComponentPath: "GeneratedSystem.circuit.tsx",
    timeoutMs: 90_000,
  });

  expect(evaluated.sheets.map(({ title }) => title)).toEqual([
    "System Diagram",
    "LMV324A Analog Front End",
    "MSPM0L1306 Microcontroller",
    "DRV8210 Pump and Valve Driver",
    "TPS7A2433 3.3 V Power Management",
    "ATL431LI 2.5 V Voltage Reference",
  ]);
}, 30_000);
