import { expect, test } from "bun:test";
import {
  createSystemBlockExamples,
  generateSystemDesignArtifacts,
  resolveDesignConnections,
  SUBCIRCUIT_CATALOG,
} from "./index";

test("builds the automotive window module from its seven reusable blocks", () => {
  const example = createSystemBlockExamples(SUBCIRCUIT_CATALOG).find(
    ({ id }) => id === "automotive-window-module",
  );
  if (!example) throw new Error("Missing Automotive Window Module example");

  expect(example.graph.blocks.map(({ id }) => id)).toEqual([
    "power_supply",
    "communication_interface",
    "microcontroller",
    "motor_driver",
    "pinch_detection",
    "motor_thermal_protection",
    "position_feedback",
  ]);

  const resolved = resolveDesignConnections(
    example.graph.blocks,
    example.graph.connections,
    SUBCIRCUIT_CATALOG,
  );
  expect(resolved).toHaveLength(12);
  expect(
    resolved.find(({ id }) => id === "data_motor_control")?.traces,
  ).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        fromSelector: ".IC1 > .UCA2SIMO",
        toSelector: ".gateDriver .U1 > .SDI",
      }),
      expect.objectContaining({
        fromSelector: ".gateDriver .U1 > .SDO",
        toSelector: ".IC1 > .UCA2SOMI",
      }),
      expect.objectContaining({
        fromSelector: ".gateDriver .U1 > .SO",
        toSelector: ".IC1 > .A10",
      }),
    ]),
  );
  expect(
    resolved.find(({ id }) => id === "power_motor_supply_to_driver")?.traces,
  ).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        fromSelector: ".signalChain .J1 > .V_MINUS",
        toSelector: ".gateDriver .U1 > .PVDD",
      }),
    ]),
  );

  const artifacts = generateSystemDesignArtifacts({
    blocks: example.graph.blocks,
    connections: example.graph.connections,
    catalog: SUBCIRCUIT_CATALOG,
    boardName: "automotive_window_module",
  });
  for (const componentName of [
    "PowerSupply_WindowModule",
    "CommunicationInterface_LIN_TLIN1028",
    "Microcontroller_MSP430FR6007",
    "MotorDriver_DRV8703",
    "PinchDetection_INA240_TLV2316_LMV7275",
    "MotorThermalProtection_TMP390",
    "PositionFeedback_DRV5013_TIDA01389",
  ]) {
    expect(artifacts.tsx).toContain(componentName);
  }
  expect(artifacts.tsx).not.toContain(
    'displayName="Automotive Window Power Supply"',
  );
  expect(artifacts.tsx).not.toContain(
    'displayName="MSP430FR6007 Microcontroller"',
  );
  expect(artifacts.tsx).not.toContain(
    '<PowerSupply_WindowModule\n      name="power_supply"\n      schSheetName=',
  );
  expect(artifacts.tsx).not.toContain(
    '<Microcontroller_MSP430FR6007\n      name="microcontroller"\n      schSheetName=',
  );
  expect(artifacts.tsx).toContain(
    '<schematicsheet\n      name="pinch_detection"\n      displayName="TIDA-01421 Pinch Detection"\n      sheetIndex={4}\n      sheetWidth="430mm"\n      sheetHeight="280mm"',
  );
  for (const sheetName of [
    "communication_interface",
    "motor_driver",
    "motor_thermal_protection",
    "position_feedback",
  ]) {
    const sheet = artifacts.tsx.match(
      new RegExp(`<schematicsheet\\s+name="${sheetName}"[\\s\\S]*?/>`),
    )?.[0];
    expect(sheet).toBeDefined();
    expect(sheet).not.toMatch(/sheetSize|sheetWidth|sheetHeight/);
  }
  expect(artifacts.systemDiagramSvg).toContain(
    'data-connection-id="data_motor_control" data-kind="data"',
  );
});
