/// <reference types="bun-types" />

import { expect, setDefaultTimeout, test } from "bun:test";
import { Circuit } from "@tscircuit/core";
import type { AnyCircuitElement } from "circuit-json";
import type { ReactElement } from "react";
import "tscircuit";
import { PowerSupply_WindowModule } from "../lib/subcircuits/PowerSupply_WindowModule.circuit.tsx";
import { ReverseBatteryProtection_TLV1805_SQJ461EP } from "../lib/subcircuits/ReverseBatteryProtection_TLV1805_SQJ461EP.circuit.tsx";
import { SupervisorWatchdog_TPS3850 } from "../lib/subcircuits/SupervisorWatchdog_TPS3850.circuit.tsx";
import { VoltageRegulator_LM73605 } from "../lib/subcircuits/VoltageRegulator_LM73605.circuit.tsx";

setDefaultTimeout(30_000);

type CircuitElement = AnyCircuitElement & Record<string, unknown>;

const render = async (element: ReactElement): Promise<CircuitElement[]> => {
  const originalError = console.error;
  const originalWarn = console.warn;
  const circuit = new Circuit({
    platform: {
      pcbDisabled: true,
      routingDisabled: true,
      partsEngineDisabled: true,
    },
  });
  console.error = () => {};
  console.warn = () => {};
  try {
    circuit.add(element);
    await circuit.renderUntilSettled();
    return circuit.getCircuitJson() as CircuitElement[];
  } finally {
    console.error = originalError;
    console.warn = originalWarn;
  }
};

const component = (circuitJson: CircuitElement[], name: string) => {
  const matches = circuitJson.filter(
    (element) => element.type === "source_component" && element.name === name,
  );
  expect(matches, `source component ${name}`).toHaveLength(1);
  return matches[0];
};

const port = (
  circuitJson: CircuitElement[],
  componentName: string,
  pinNumber: number,
) => {
  const sourceComponent = component(circuitJson, componentName);
  const match = circuitJson.find(
    (element) =>
      element.type === "source_port" &&
      element.source_component_id === sourceComponent.source_component_id &&
      element.pin_number === pinNumber,
  );
  expect(match, `${componentName}.${pinNumber}`).toBeDefined();
  return match!;
};

const subcircuitPort = (
  circuitJson: CircuitElement[],
  subcircuitName: string,
  portName: string,
) => {
  const sourceGroup = circuitJson.find(
    (element) =>
      element.type === "source_group" && element.name === subcircuitName,
  );
  expect(sourceGroup, `source group ${subcircuitName}`).toBeDefined();
  const match = circuitJson.find(
    (element) =>
      element.type === "source_port" &&
      (element.source_component_id === null ||
        element.source_component_id === undefined) &&
      element.subcircuit_id === sourceGroup!.subcircuit_id &&
      element.name === portName,
  );
  expect(match, `${subcircuitName}.${portName}`).toBeDefined();
  return match!;
};

const assertSubcircuitTrace = (
  circuitJson: CircuitElement[],
  from: [subcircuitName: string, portName: string],
  to: [subcircuitName: string, portName: string],
) => {
  const fromPort = subcircuitPort(circuitJson, ...from);
  const toPort = subcircuitPort(circuitJson, ...to);
  const fromPortId = String(fromPort.source_port_id);
  const toPortId = String(toPort.source_port_id);
  const match = circuitJson.find(
    (element) =>
      element.type === "source_trace" &&
      Array.isArray(element.connected_source_port_ids) &&
      element.connected_source_port_ids.includes(fromPortId) &&
      element.connected_source_port_ids.includes(toPortId),
  );
  expect(match, `${from[0]}.${from[1]} to ${to[0]}.${to[1]}`).toBeDefined();
};

const assertSubcircuitPortNet = (
  circuitJson: CircuitElement[],
  subcircuitName: string,
  portName: string,
  netName: string,
) => {
  const groupPort = subcircuitPort(circuitJson, subcircuitName, portName);
  const sourceNet = circuitJson.find(
    (element) =>
      element.type === "source_net" &&
      element.name === netName &&
      element.subcircuit_id === groupPort.subcircuit_id,
  );
  expect(sourceNet, `${subcircuitName} net ${netName}`).toBeDefined();
  const groupPortId = String(groupPort.source_port_id);
  const sourceNetId = String(sourceNet!.source_net_id);
  const match = circuitJson.find(
    (element) =>
      element.type === "source_trace" &&
      Array.isArray(element.connected_source_port_ids) &&
      Array.isArray(element.connected_source_net_ids) &&
      element.connected_source_port_ids.includes(groupPortId) &&
      element.connected_source_net_ids.includes(sourceNetId),
  );
  expect(
    match,
    `${subcircuitName}.${portName} to local ${netName}`,
  ).toBeDefined();
};

const assertNet = (
  circuitJson: CircuitElement[],
  netName: string,
  endpoints: Array<[componentName: string, pinNumber: number]>,
) => {
  const firstPort = port(circuitJson, ...endpoints[0]);
  const sourceNet = circuitJson.find(
    (element) =>
      element.type === "source_net" &&
      element.name === netName &&
      element.subcircuit_id === firstPort.subcircuit_id,
  );
  expect(sourceNet, `source net ${netName}`).toBeDefined();

  for (const endpoint of endpoints) {
    expect(
      port(circuitJson, ...endpoint).subcircuit_connectivity_map_key,
      `${endpoint[0]}.${endpoint[1]} on ${netName}`,
    ).toBe(sourceNet!.subcircuit_connectivity_map_key);
  }
};

const expectNoCircuitErrors = (circuitJson: CircuitElement[]) => {
  const errors = circuitJson.filter((element) =>
    String(element.type).endsWith("_error"),
  );
  expect(errors).toEqual([]);
};

test("reverse-battery child preserves the TIDA-050008 sheet-2 netlist", async () => {
  const circuitJson = await render(
    <ReverseBatteryProtection_TLV1805_SQJ461EP name="reverseBattery" />,
  );
  expectNoCircuitErrors(circuitJson);

  assertNet(circuitJson, "VBATT_PCH", [
    ["P1", 1],
    ["TP2", 1],
    ["Q1", 5],
    ["R1", 2],
    ["D2", 1],
    ["D1", 1],
    ["C24", 2],
  ]);
  assertNet(circuitJson, "LED_RETURN", [
    ["D2", 2],
    ["R14", 2],
  ]);
  assertNet(circuitJson, "EMI_CAP_MID", [
    ["C24", 1],
    ["C25", 1],
  ]);
  assertNet(circuitJson, "LOAD_SENS_PCH", [
    ["Q1", 1],
    ["Q1", 2],
    ["Q1", 3],
    ["R4", 1],
    ["C4", 1],
    ["D5", 1],
    ["U1", 4],
    ["U1", 6],
    ["D6", 1],
    ["CF1", 1],
    ["C1", 1],
    ["C2", 1],
    ["FB1", 1],
  ]);
  assertNet(circuitJson, "P_Gate", [
    ["Q1", 4],
    ["R4", 2],
    ["R2", 2],
  ]);
  assertNet(circuitJson, "BATT_SENS_PCH", [
    ["R1", 1],
    ["D3", 1],
    ["U1", 3],
  ]);
  assertNet(circuitJson, "FLT_GND_P", [
    ["D3", 2],
    ["C4", 2],
    ["D5", 2],
    ["U1", 2],
    ["U1", 5],
    ["D4", 2],
  ]);
  assertNet(circuitJson, "CMP_OUT_PCH", [
    ["U1", 1],
    ["R2", 1],
  ]);
  assertNet(circuitJson, "D4_R3", [
    ["D4", 1],
    ["R3", 2],
  ]);
  assertNet(circuitJson, "FILTER_MID", [
    ["FB1", 2],
    ["CF2", 1],
    ["C3", 1],
    ["C8", 1],
    ["LF1", 1],
  ]);
  assertNet(circuitJson, "GND", [
    ["P2", 1],
    ["TP7", 1],
    ["R14", 1],
    ["D1", 2],
    ["C25", 2],
    ["R3", 1],
    ["D6", 2],
    ["CF1", 2],
    ["C1", 2],
    ["C2", 2],
    ["CF2", 2],
    ["C3", 2],
    ["C8", 2],
  ]);
  assertNet(circuitJson, "VIN1", [["LF1", 2]]);

  expect(component(circuitJson, "Q1").manufacturer_part_number).toBe(
    "SQJ461EP",
  );
  expect(component(circuitJson, "U1").manufacturer_part_number).toBe(
    "TLV1805QDBVRQ1",
  );
});

test("regulator child preserves the TIDA-050008 sheet-2 netlist", async () => {
  const circuitJson = await render(
    <VoltageRegulator_LM73605 name="regulator" />,
  );
  expectNoCircuitErrors(circuitJson);

  assertNet(circuitJson, "VIN1", [
    ["Cbulk1", 1],
    ["CI1", 2],
    ["CI2", 2],
    ["CI3", 1],
    ["CI4", 1],
    ["U2", 18],
    ["U2", 20],
    ["U2", 21],
    ["U2", 22],
  ]);
  assertNet(circuitJson, "SW", [
    ["U2", 1],
    ["U2", 2],
    ["U2", 3],
    ["U2", 4],
    ["U2", 5],
    ["CB", 2],
    ["L1", 1],
  ]);
  assertNet(circuitJson, "CBOOT_NET", [
    ["U2", 6],
    ["CB", 1],
  ]);
  assertNet(circuitJson, "VCC", [
    ["U2", 7],
    ["CVCC", 1],
  ]);
  assertNet(circuitJson, "BIAS", [
    ["U2", 8],
    ["Cbias1", 1],
    ["Rbias1", 1],
  ]);
  assertNet(circuitJson, "RT", [
    ["U2", 9],
    ["RT", 1],
  ]);
  assertNet(circuitJson, "SS_TRK", [
    ["U2", 10],
    ["CSS", 1],
  ]);
  assertNet(circuitJson, "FB1", [
    ["U2", 11],
    ["CFF", 2],
    ["RFBT", 1],
    ["RFBB", 2],
    ["R20", 2],
  ]);
  assertNet(circuitJson, "PGOOD_NET", [
    ["U2", 16],
    ["RPG", 1],
  ]);
  assertNet(circuitJson, "V3_3", [
    ["L1", 2],
    ["CO", 2],
    ["CO1", 1],
    ["CO2", 1],
    ["CO3", 1],
    ["CO4", 1],
    ["CO5", 1],
    ["RPG", 2],
    ["CFF", 1],
    ["RFBT", 2],
    ["Rbias1", 2],
    ["TP18", 1],
    ["P3", 1],
  ]);
  assertNet(circuitJson, "V_CTRL1", [
    ["R20", 1],
    ["TP5", 1],
  ]);
  assertNet(circuitJson, "AGND", [
    ["U2", 19],
    ["CSS", 2],
    ["RFBB", 1],
    ["NTGND1", 2],
  ]);
  assertNet(circuitJson, "GND", [
    ["Cbulk1", 2],
    ["CI1", 1],
    ["CI2", 1],
    ["CI3", 2],
    ["CI4", 2],
    ["U2", 12],
    ["U2", 13],
    ["U2", 14],
    ["U2", 15],
    ["U2", 17],
    ["U2", 23],
    ["U2", 24],
    ["U2", 25],
    ["U2", 26],
    ["U2", 27],
    ["U2", 28],
    ["U2", 29],
    ["U2", 30],
    ["U2", 31],
    ["CO", 1],
    ["CO1", 2],
    ["CO2", 2],
    ["CO3", 2],
    ["CO4", 2],
    ["CO5", 2],
    ["CVCC", 2],
    ["RT", 2],
    ["Cbias1", 2],
    ["NTGND1", 1],
    ["TP19", 1],
    ["P4", 1],
  ]);

  expect(component(circuitJson, "U2").manufacturer_part_number).toBe(
    "LM73605QRNPRQ1",
  );
});

test("supervisor/watchdog child preserves the TIDA-050008 sheet-3 netlist", async () => {
  const circuitJson = await render(
    <SupervisorWatchdog_TPS3850 name="supervisorWatchdog" />,
  );
  expectNoCircuitErrors(circuitJson);

  assertNet(circuitJson, "V3_3", [
    ["U3", 1],
    ["U3", 3],
    ["U3", 10],
    ["C11", 1],
    ["C13", 1],
    ["J1", 1],
    ["R21", 2],
    ["R5", 2],
    ["R16", 1],
    ["R6", 2],
    ["R15", 1],
  ]);
  assertNet(circuitJson, "CWD", [
    ["U3", 2],
    ["C12", 1],
  ]);
  assertNet(circuitJson, "SET1", [
    ["U3", 6],
    ["J1", 2],
  ]);
  assertNet(circuitJson, "CRST", [
    ["U3", 4],
    ["R21", 1],
  ]);
  assertNet(circuitJson, "WDI", [
    ["U3", 7],
    ["TP1", 1],
  ]);
  assertNet(circuitJson, "WDO", [
    ["U3", 8],
    ["R5", 1],
    ["D9", 1],
    ["TP8", 1],
  ]);
  assertNet(circuitJson, "WDO_LED_A", [
    ["R16", 2],
    ["D9", 2],
  ]);
  assertNet(circuitJson, "RESET_3V3", [
    ["U3", 9],
    ["R6", 1],
    ["D8", 1],
    ["TP6", 1],
  ]);
  assertNet(circuitJson, "RESET_LED_A", [
    ["R15", 2],
    ["D8", 2],
  ]);
  assertNet(circuitJson, "GND", [
    ["U3", 5],
    ["U3", 11],
    ["C11", 2],
    ["C13", 2],
    ["J1", 3],
    ["C12", 2],
  ]);

  expect(component(circuitJson, "U3").manufacturer_part_number).toBe(
    "TPS3850H33QDRCRQ1",
  );
});

test("composite joins only the shared TI sheet nets", async () => {
  const circuitJson = await render(
    <PowerSupply_WindowModule name="powerSupply" />,
  );
  expectNoCircuitErrors(circuitJson);

  assertSubcircuitTrace(
    circuitJson,
    ["reverseBattery", "VIN1"],
    ["regulator", "VIN1"],
  );
  assertSubcircuitTrace(
    circuitJson,
    ["regulator", "V3_3"],
    ["supervisorWatchdog", "V3_3"],
  );
  assertSubcircuitTrace(
    circuitJson,
    ["reverseBattery", "GND"],
    ["regulator", "GND"],
  );
  assertSubcircuitTrace(
    circuitJson,
    ["regulator", "GND"],
    ["supervisorWatchdog", "GND"],
  );

  assertSubcircuitPortNet(circuitJson, "reverseBattery", "VIN1", "VIN1");
  assertSubcircuitPortNet(circuitJson, "regulator", "VIN1", "VIN1");
  assertSubcircuitPortNet(circuitJson, "regulator", "V3_3", "V3_3");
  assertSubcircuitPortNet(circuitJson, "supervisorWatchdog", "V3_3", "V3_3");
  assertSubcircuitPortNet(circuitJson, "reverseBattery", "GND", "GND");
  assertSubcircuitPortNet(circuitJson, "regulator", "GND", "GND");
  assertSubcircuitPortNet(circuitJson, "supervisorWatchdog", "GND", "GND");
  expect(port(circuitJson, "U3", 1).subcircuit_connectivity_map_key).toBe(
    port(circuitJson, "U3", 10).subcircuit_connectivity_map_key,
  );
});
