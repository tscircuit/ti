/// <reference types="node" />

import assert from "node:assert/strict";
import { test } from "node:test";
import { Circuit } from "@tscircuit/core";
import { TIDA01141_CurrentVoltageSense } from "../index.ts";

type TestCircuit = InstanceType<typeof Circuit>;

function getPort(circuit: TestCircuit, componentName: string, pin: string) {
  const component = circuit.db.source_component.getWhere({
    name: componentName,
  });
  assert.ok(component, componentName);
  const port = circuit.db.source_port
    .list({ source_component_id: component.source_component_id })
    .find((candidate) => candidate.port_hints?.includes(pin));
  assert.ok(port, `${componentName}.${pin}`);
  return port;
}

function getConnectedIds(circuit: TestCircuit, start: string) {
  const connected = new Set([start]);
  let previousSize = 0;
  while (connected.size !== previousSize) {
    previousSize = connected.size;
    for (const trace of circuit.db.source_trace.list()) {
      const ids = [
        ...trace.connected_source_port_ids,
        ...trace.connected_source_net_ids,
      ];
      if (ids.some((id) => connected.has(id))) {
        for (const id of ids) connected.add(id);
      }
    }
  }
  return connected;
}

function assertPortsConnected(
  circuit: TestCircuit,
  componentA: string,
  pinA: string,
  componentB: string,
  pinB: string,
) {
  const portA = getPort(circuit, componentA, pinA);
  const portB = getPort(circuit, componentB, pinB);
  assert.ok(
    getConnectedIds(circuit, portA.source_port_id).has(portB.source_port_id),
    `${componentA}.${pinA} must connect to ${componentB}.${pinB}`,
  );
}

function assertPinNet(
  circuit: TestCircuit,
  componentName: string,
  pin: string,
  netName: string,
) {
  const net = circuit.db.source_net.getWhere({ name: netName });
  assert.ok(net, netName);
  assert.ok(
    getConnectedIds(
      circuit,
      getPort(circuit, componentName, pin).source_port_id,
    ).has(net.source_net_id),
    `${componentName}.${pin} must connect to ${netName}`,
  );
}

test("TIDA-01141 matches the TI current and voltage sensing sheet", async () => {
  const circuit = new Circuit();
  circuit.pcbDisabled = true;
  circuit.add(
    <board width={30} height={25}>
      <TIDA01141_CurrentVoltageSense name="S1" />
    </board>,
  );
  await circuit.renderUntilSettled();

  assert.deepEqual(
    circuit
      .getCircuitJson()
      .filter(
        (element) =>
          element.type.endsWith("_error") &&
          (element.type.startsWith("source_") ||
            element.type.startsWith("schematic_")),
      ),
    [],
  );

  for (const [name, manufacturerPartNumber] of [
    ["U1", "INA240A2PW"],
    ["U2", "LM393AD"],
    ["U3", "LM4040D30IDBZR"],
    ["J1", "TSW-106-08-G-S-RA"],
  ] as const) {
    const component = circuit.db.source_component.getWhere({ name });
    assert.ok(component, name);
    assert.equal(component.manufacturer_part_number, manufacturerPartNumber);
  }

  assertPortsConnected(circuit, "U1", "pin2", "R7", "pin2");
  assertPortsConnected(circuit, "U1", "pin3", "R9", "pin2");
  assertPinNet(circuit, "U1", "pin8", "IBAT_HS");
  assertPinNet(circuit, "U1", "pin6", "VREF");
  assertPinNet(circuit, "U1", "pin7", "VREF");

  assertPinNet(circuit, "U2", "pin2", "LTV");
  assertPortsConnected(circuit, "U2", "pin3", "R11", "pin1");
  assertPortsConnected(circuit, "U2", "pin6", "R5", "pin2");
  assertPortsConnected(circuit, "U2", "pin5", "R13", "pin2");
  assertPinNet(circuit, "U2", "pin1", "IBAT_ALERT");
  assertPinNet(circuit, "U2", "pin7", "IBAT_ALERT");
  assertPinNet(circuit, "U2", "pin8", "LV_AUX_3_3V");
  assertPinNet(circuit, "U2", "pin9", "LV_AUX_3_3V");
  assertPinNet(circuit, "U2", "pin4", "SGND");
  assertPinNet(circuit, "U2", "pin10", "SGND");

  assertPinNet(circuit, "U3", "pin1", "VREF");
  assertPinNet(circuit, "U3", "pin2", "SGND");

  assertPinNet(circuit, "J1", "pin1", "SGND");
  assertPinNet(circuit, "J1", "pin2", "IBAT_HS_POS");
  assertPinNet(circuit, "J1", "pin3", "IBAT_HS_NEG");
  assertPinNet(circuit, "J1", "pin4", "LV_AUX_3_3V");
  assertPinNet(circuit, "J1", "pin5", "IBAT_HS");
  assertPinNet(circuit, "J1", "pin6", "IBAT_ALERT");
});
