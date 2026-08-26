/// <reference types="node" />

import assert from "node:assert/strict";
import { test } from "node:test";
import { Circuit } from "@tscircuit/core";
import INA350ModuleExample from "../examples/InstrumentationAmplifier_INA350.circuit.tsx";
import {
  INA350,
  INA350ABSIDSGR,
  InstrumentationAmplifier_INA350,
  TiChipComponents,
  TiSubcircuitComponents,
} from "../index.ts";

type TestCircuit = InstanceType<typeof Circuit>;

function getPort(
  circuit: TestCircuit,
  name: string,
  pin: string,
  group?: string,
) {
  const sourceGroup = group
    ? circuit.db.source_group.getWhere({ name: group })
    : undefined;
  if (group) assert.ok(sourceGroup, group);
  const component = circuit.db.source_component
    .list()
    .find(
      (candidate) =>
        candidate.name === name &&
        (!sourceGroup ||
          candidate.source_group_id === sourceGroup.source_group_id),
    );
  assert.ok(component, name);
  const port = circuit.db.source_port
    .list({ source_component_id: component.source_component_id })
    .find((candidate) => candidate.port_hints?.includes(pin));
  assert.ok(port, name + "." + pin);
  return port;
}

function connectedIds(circuit: TestCircuit, start: string) {
  const connected = new Set([start]);
  let size = 0;
  while (size !== connected.size) {
    size = connected.size;
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

function assertNoErrors(circuit: TestCircuit) {
  assert.deepEqual(
    circuit
      .getCircuitJson()
      .filter((element) => element.type.endsWith("_error")),
    [],
  );
}

test("INA350 package exports use the datasheet DSG pinout and land pattern", async () => {
  assert.equal(TiChipComponents.INA350, INA350);
  assert.equal(
    TiSubcircuitComponents.InstrumentationAmplifier_INA350,
    InstrumentationAmplifier_INA350,
  );
  for (const Chip of [INA350, INA350ABSIDSGR]) {
    const circuit = new Circuit();
    circuit.add(
      <board width={12} height={12} routingDisabled>
        <Chip name="U1" pcbX={0} pcbY={0} />
      </board>,
    );
    await circuit.renderUntilSettled();
    assertNoErrors(circuit);
    const component = circuit.db.source_component.getWhere({ name: "U1" });
    assert.equal(component?.manufacturer_part_number, "INA350ABSIDSGR");
    assert.equal(circuit.db.source_port.list().length, 9);
    assert.equal(circuit.db.pcb_smtpad.list().length, 9);
    // TI Table 6-1, Figure 6-2, and DSG0008A land-pattern drawing.
    const expected = [
      ["GS", -0.95, 0.75],
      ["IN_NEG", -0.95, 0.25],
      ["IN_POS", -0.95, -0.25],
      ["V_NEG", -0.95, -0.75],
      ["REF", 0.95, -0.75],
      ["OUT", 0.95, -0.25],
      ["V_POS", 0.95, 0.25],
      ["SHDN", 0.95, 0.75],
      ["EP", 0, 0],
    ] as const;
    expected.forEach(([pin, x, y], index) => {
      const port = getPort(circuit, "U1", pin);
      assert.equal(port.pin_number, index + 1);
      const pcbPorts = circuit.db.pcb_port.list({
        source_port_id: port.source_port_id,
      });
      assert.equal(pcbPorts.length, 1);
      const pads = circuit.db.pcb_smtpad.list({
        pcb_port_id: pcbPorts[0].pcb_port_id,
      });
      assert.equal(pads.length, 1);
      const pad = pads[0];
      assert.ok(pad.shape === "rect");
      assert.ok(
        Math.abs(pad.x - x) < 1e-6 && Math.abs(pad.y - y) < 1e-6,
        pin + " position",
      );
      assert.equal(pad.width, pin === "EP" ? 0.9 : 0.5);
      assert.equal(pad.height, pin === "EP" ? 1.6 : 0.25);
    });
    assert.equal(getPort(circuit, "U1", "VS").pin_number, 7);
    assert.equal(getPort(circuit, "U1", "PAD").pin_number, 9);
    assert.equal(getPort(circuit, "U1", "N_SHDN").pin_number, 8);
  }
  assert.throws(
    () => INA350({ name: "U1", footprintVariant: "sot_23_8" as never }),
    /Unsupported INA350 footprint/,
  );
});

for (const gain of [undefined, 10] as const) {
  test(`INA350 amplifier connects gain ${gain ?? 20}, bypass, reference and exposed pad`, async () => {
    const circuit = new Circuit();
    circuit.add(
      <board width={12} height={10} routingDisabled>
        <InstrumentationAmplifier_INA350 name="Amp" gain={gain} />
      </board>,
    );
    await circuit.renderUntilSettled();
    assertNoErrors(circuit);

    for (const [name, pin, netName] of [
      ["U1", "IN_NEG", "IN_NEG"],
      ["U1", "IN_POS", "IN_POS"],
      ["U1", "OUT", "OUT"],
      ["U1", "V_POS", "VS"],
      ["U1", "SHDN", "VS"],
      ["U1", "GS", gain === 10 ? "GND" : "VS"],
      ["U1", "V_NEG", "GND"],
      ["U1", "REF", "GND"],
      ["U1", "EP", "GND"],
      ["C1", "pin1", "VS"],
      ["C1", "pin2", "GND"],
    ]) {
      const port = getPort(circuit, name, pin);
      const net = circuit.db.source_net.getWhere({ name: netName });
      assert.ok(net);
      assert.ok(
        connectedIds(circuit, port.source_port_id).has(net.source_net_id),
        name + "." + pin + " -> " + netName,
      );
    }
    const nets = circuit.db.source_net.list();
    assert.equal(nets.length, 5);
    for (const net of nets) {
      const connected = connectedIds(circuit, net.source_net_id);
      assert.equal(
        nets.filter((other) => connected.has(other.source_net_id)).length,
        1,
        net.name + " is shorted",
      );
    }
    const capacitor = circuit.db.source_component.getWhere({ name: "C1" });
    assert.ok(capacitor?.ftype === "simple_capacitor");
    assert.equal(capacitor.capacitance, 1e-7);
    assert.equal(circuit.db.pcb_component.list().length, 2);

    // Custom-symbol ports must be the physical pins, not disconnected drawing-only duplicates.
    const chip = circuit.db.source_component.getWhere({ name: "U1" });
    assert.ok(chip);
    const ports = circuit.db.source_port.list({
      source_component_id: chip.source_component_id,
    });
    assert.equal(ports.length, 9);
    for (const port of ports) {
      const schematicPorts = circuit.db.schematic_port.list({
        source_port_id: port.source_port_id,
      });
      assert.equal(schematicPorts.length, 1);
      assert.ok(schematicPorts[0].is_connected);
      assert.equal(
        circuit.db.pcb_port.list({ source_port_id: port.source_port_id })
          .length,
        1,
      );
    }
    for (const [pin, x, y] of [
      ["IN_NEG", -2.5, 1],
      ["IN_POS", -2.5, -1],
      ["OUT", 2.5, 0],
    ] as const) {
      const port = circuit.db.schematic_port.getWhere({
        source_port_id: getPort(circuit, "U1", pin).source_port_id,
      });
      assert.ok(port);
      assert.deepEqual(port.center, { x, y });
    }
  });
}

test("two imported INA350 modules accept parent connections without shorting their nets", async () => {
  const circuit = new Circuit();
  const signals = ["IN_NEG", "IN_POS", "OUT", "VS", "V_NEG"] as const;
  circuit.add(
    <board width={36} height={20} routingDisabled>
      <InstrumentationAmplifier_INA350 name="AmpA" pcbX={-6} schX={-6} />
      <InstrumentationAmplifier_INA350
        name="AmpB"
        pcbX={6}
        schX={6}
        gain={10}
      />
      <chip
        name="JA"
        footprint="pinrow5"
        pcbX={-8}
        pcbY={5}
        schX={-6}
        schY={6}
        pinLabels={Object.fromEntries(
          signals.map((signal, index) => [`pin${index + 1}`, signal]),
        )}
        connections={Object.fromEntries(
          signals.map((signal) => [signal, `.AmpA .U1 > .${signal}`]),
        )}
      />
      <chip
        name="JB"
        footprint="pinrow5"
        pcbX={8}
        pcbY={5}
        schX={6}
        schY={6}
        pinLabels={Object.fromEntries(
          signals.map((signal, index) => [`pin${index + 1}`, signal]),
        )}
        connections={Object.fromEntries(
          signals.map((signal) => [signal, `.AmpB .U1 > .${signal}`]),
        )}
      />
    </board>,
  );
  await circuit.renderUntilSettled();
  assertNoErrors(circuit);
  for (const [group, header] of [
    ["AmpA", "JA"],
    ["AmpB", "JB"],
  ]) {
    for (const signal of signals) {
      const connected = connectedIds(
        circuit,
        getPort(circuit, "U1", signal, group).source_port_id,
      );
      assert.ok(connected.has(getPort(circuit, header, signal).source_port_id));
      for (const other of signals) {
        assert.ok(
          !connected.has(
            getPort(circuit, group === "AmpA" ? "JB" : "JA", other)
              .source_port_id,
          ),
          "module isolation",
        );
      }
    }
  }
});

for (const gain of [10, 20] as const) {
  test(`INA350 import example routes gain ${gain} and all five header connections`, async () => {
    const circuit = new Circuit();
    circuit.add(<INA350ModuleExample gain={gain} />);
    await circuit.renderUntilSettled();
    assertNoErrors(circuit);
    assert.ok(circuit.db.pcb_trace.list().length > 0);
    for (const [headerPin, chipPin] of [
      ["VS", "VS"],
      ["GND", "V_NEG"],
      ["IN_NEG", "IN_NEG"],
      ["IN_POS", "IN_POS"],
      ["OUT", "OUT"],
    ]) {
      const connected = connectedIds(
        circuit,
        getPort(circuit, "J1", headerPin).source_port_id,
      );
      assert.ok(connected.has(getPort(circuit, "U1", chipPin).source_port_id));
    }
  });
}
