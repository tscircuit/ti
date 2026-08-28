import { expect, test } from "bun:test";
import {
  createSystemBlockExamples,
  generateSystemDesignArtifacts,
  resolveDesignConnections,
  SUBCIRCUIT_CATALOG,
} from "./index";

test("builds the TIDA-010266 blood-pressure monitor from its reusable blocks", () => {
  const example = createSystemBlockExamples(SUBCIRCUIT_CATALOG).find(
    ({ id }) => id === "tida-010266-blood-pressure-monitor",
  );
  if (!example) throw new Error("Missing TIDA-010266 monitor example");

  expect(example.graph.blocks.map(({ id }) => id)).toEqual([
    "power",
    "reference_2v5",
    "analog_front_end",
    "microcontroller",
    "motor_driver",
  ]);

  const resolved = resolveDesignConnections(
    example.graph.blocks,
    example.graph.connections,
    SUBCIRCUIT_CATALOG,
  );
  expect(resolved).toHaveLength(7);
  expect(
    resolved.find(({ id }) => id === "microcontroller_to_motor_driver")?.traces,
  ).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        fromSelector: ".PUMP_CONTROL",
        toSelector: ".PUMP_CONTROL",
      }),
      expect.objectContaining({
        fromSelector: ".VALVE_CONTROL",
        toSelector: ".VALVE_CONTROL",
      }),
    ]),
  );

  const artifacts = generateSystemDesignArtifacts({
    blocks: example.graph.blocks,
    connections: example.graph.connections,
    catalog: SUBCIRCUIT_CATALOG,
    boardName: "tida_010266_blood_pressure_monitor",
  });
  for (const componentName of [
    "PowerManagement_TPS7A2433_TIDA010266",
    "VoltageReference_ATL431LI_TIDA010266",
    "AnalogFrontEnd_LMV324A_TIDA010266",
    "Microcontroller_MSPM0L1306_TIDA010266",
    "MotorDriver_DRV8210_TIDA010266",
  ]) {
    expect(artifacts.tsx).toContain(componentName);
  }
  expect(artifacts.systemDiagramSvg).toContain(
    'data-connection-id="microcontroller_to_motor_driver" data-kind="data"',
  );
});
