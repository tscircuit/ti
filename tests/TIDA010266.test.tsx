/// <reference types="node" />

import assert from "node:assert/strict";
import { test } from "node:test";
import { Circuit } from "@tscircuit/core";
import TIDA010266 from "../examples/BloodPressureAndHeartRateMonitor_TIDA010266.circuit.tsx";
import {
  ATL431LI,
  ATL431LIBIDBZR,
  LMV324A,
  LMV324AIPWR,
  SMPP2_03,
  TPS7A24,
  TPS7A2433DBVR,
  TiChipComponents,
  TiSubcircuitComponents,
} from "../index.ts";

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

function assertConnected(
  circuit: TestCircuit,
  first: readonly [string, string],
  ...rest: ReadonlyArray<readonly [string, string]>
) {
  const firstPort = getPort(circuit, ...first);
  const connected = new Set([firstPort.source_port_id]);
  let previousSize = 0;
  while (previousSize !== connected.size) {
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
  for (const endpoint of rest) {
    assert.ok(
      connected.has(getPort(circuit, ...endpoint).source_port_id),
      `${first.join(".")} -> ${endpoint.join(".")}`,
    );
  }
}

function assertNoErrors(circuit: TestCircuit) {
  assert.deepEqual(
    circuit
      .getCircuitJson()
      .filter((element) => element.type.endsWith("_error")),
    [],
  );
}

test("TIDA-010266 raw parts expose the released package pinouts", async () => {
  assert.equal(TiChipComponents.TPS7A24, TPS7A24);
  assert.equal(TiChipComponents.ATL431LI, ATL431LI);
  assert.equal(TiChipComponents.LMV324A, LMV324A);
  assert.equal(TiChipComponents.SMPP2_03, SMPP2_03);

  for (const [Chip, mpn, pins] of [
    [TPS7A24, "TPS7A2433DBVR", 5],
    [ATL431LI, "ATL431LIBIDBZR", 3],
    [LMV324A, "LMV324AIPWR", 14],
    [SMPP2_03, "2SMPP03", 6],
  ] as const) {
    const circuit = new Circuit();
    circuit.add(
      <board width={15} height={15} routingDisabled>
        <Chip name="U1" />
      </board>,
    );
    await circuit.renderUntilSettled();
    const component = circuit.db.source_component.getWhere({ name: "U1" });
    assert.equal(component?.manufacturer_part_number, mpn);
    assert.equal(
      circuit.db.source_port.list({
        source_component_id: component?.source_component_id,
      }).length,
      pins,
    );
    assert.equal(circuit.db.pcb_smtpad.list().length, pins);
  }

  assert.equal(typeof TPS7A2433DBVR, "function");
  assert.equal(typeof ATL431LIBIDBZR, "function");
  assert.equal(typeof LMV324AIPWR, "function");
});

test("TIDA-010266 example contains the complete released BOM and net topology", {
  timeout: 60_000,
}, async () => {
  const circuit = new Circuit({ platform: { pcbDisabled: true } });
  circuit.add(<TIDA010266 />);
  await circuit.renderUntilSettled();
  assertNoErrors(circuit);

  assert.equal(circuit.db.schematic_sheet.list().length, 1);
  assert.equal(circuit.db.schematic_sheet.list()[0]?.name, "main");
  assert.ok(
    circuit.db.schematic_line.list().some((line) => line.is_dashed),
    "schematicsection should generate native dashed dividers",
  );

  const expectedInlineMcuLabels = [
    "V3_3",
    "RST",
    "SDA",
    "SCL",
    "SPI0_CS",
    "PA3",
    "SPI0_POCI",
    "SPI0_PICO",
    "SPI_SCLK",
    "PA7",
    "UART_RX",
    "UART_TX",
    "PA10",
    "PA11",
    "UART_CTS",
    "UART_RTS",
    "PUMP_CONTROL",
    "VALVE_CONTROL",
    "OPA1_OUT",
    "OPA1_IN0_NEG",
    "OPA1_IN0_POS",
    "SWDIO",
    "SWCLK",
    "OPA0_OUT",
    "VREF_2_5",
    "OPA0_IN0_NEG",
    "OPA0_IN0_POS",
    "ADC_OSCILLATIONS",
    "ADC_PRESSURE",
  ];
  const schematicText = new Set(
    circuit.db.schematic_text.list().map((text) => text.text),
  );
  for (const label of expectedInlineMcuLabels) {
    assert.ok(schematicText.has(label), `${label} should render inline`);
  }

  const u4 = circuit.db.source_component.getWhere({ name: "U4" });
  assert.ok(u4);
  const u4SchematicComponent = circuit.db.schematic_component.getWhere({
    source_component_id: u4.source_component_id,
  });
  assert.ok(u4SchematicComponent);
  const u4LeftPinPositions = circuit.db.schematic_port
    .list({
      schematic_component_id: u4SchematicComponent.schematic_component_id,
    })
    .filter((port) => port.facing_direction === "left")
    .map((port) => port.center);
  const boxedLabelsAtU4 = circuit.db.schematic_net_label
    .list()
    .filter((label) =>
      label.anchor_position
        ? u4LeftPinPositions.some(
            (position) =>
              Math.abs(label.anchor_position!.x - position.x) < 1e-6 &&
              Math.abs(label.anchor_position!.y - position.y) < 1e-6,
          )
        : false,
    );
  assert.deepEqual(
    boxedLabelsAtU4.map((label) => label.text),
    [],
    "MCU pin nets should use inline text instead of boxed net labels",
  );

  const designators = circuit.db.source_component
    .list()
    // SchematicSymbol projections U2A-U2D share the one physical U2 package.
    .filter((component) => !/^U2[A-D]$/.test(component.name))
    .map((component) => component.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  assert.deepEqual(designators, [
    ...Array.from({ length: 18 }, (_, index) => `C${index + 1}`),
    ...Array.from({ length: 10 }, (_, index) => `J${index + 1}`),
    ...Array.from({ length: 23 }, (_, index) => `R${index + 1}`),
    "S1",
    ...Array.from({ length: 7 }, (_, index) => `TP${index + 1}`),
    ...Array.from({ length: 7 }, (_, index) => `U${index + 1}`),
  ]);

  const getSchematicComponent = (name: string) => {
    const source = circuit.db.source_component.getWhere({ name });
    assert.ok(source, name);
    const schematic = circuit.db.schematic_component.getWhere({
      source_component_id: source.source_component_id,
    });
    assert.ok(schematic, `${name} schematic representation`);
    return schematic;
  };
  const pressureLayout = ["R18", "U2D", "U7", "R22"].map(getSchematicComponent);
  assert.ok(
    pressureLayout.every(
      (component, index) =>
        index === 0 || pressureLayout[index - 1]!.center.x < component.center.x,
    ),
    "pressure stage should run left-to-right from its bias divider to R22",
  );
  const u7Schematic = getSchematicComponent("U7");
  assert.deepEqual(u7Schematic.size, { width: 3.2, height: 1.8 });
  for (const name of ["R18", "R21", "R22"]) {
    const component = getSchematicComponent(name);
    const ports = circuit.db.schematic_port.list({
      schematic_component_id: component.schematic_component_id,
    });
    assert.equal(ports.length, 2, name);
    assert.ok(
      Math.abs(ports[0]!.center.x - ports[1]!.center.x) < 1e-6,
      `${name} should be vertical`,
    );
  }

  const inputReferenceLayout = ["J1", "U1", "U3", "R4", "U2A"].map(
    getSchematicComponent,
  );
  assert.ok(
    inputReferenceLayout.every(
      (component, index) =>
        index === 0 ||
        inputReferenceLayout[index - 1]!.center.x < component.center.x,
    ),
    "input/reference stage should follow the released left-to-right signal flow",
  );
  const u3Schematic = getSchematicComponent("U3");
  assert.ok(u3Schematic.size.width < 1.5, "U3 should use the compact symbol");
  assert.ok(u3Schematic.size.height < 1.3, "U3 should use the compact symbol");
  for (const name of ["R3", "R4", "R6", "C1", "C2", "C3", "C5"]) {
    const component = getSchematicComponent(name);
    const ports = circuit.db.schematic_port.list({
      schematic_component_id: component.schematic_component_id,
    });
    assert.equal(ports.length, 2, name);
    assert.ok(
      Math.abs(ports[0]!.center.x - ports[1]!.center.x) < 1e-6,
      `${name} should be vertical in the input/reference section`,
    );
  }

  const expectedResistors: Record<string, number> = {
    R1: 27,
    R2: 47_000,
    R3: 330,
    R4: 10_000,
    R5: 27,
    R6: 10_000,
    R7: 10_000,
    R8: 10_000,
    R9: 270_000,
    R10: 270_000,
    R11: 20_000,
    R12: 499,
    R13: 20_000,
    R14: 20_000,
    R15: 499,
    R16: 20_000,
    R17: 20_000,
    R18: 45_300,
    R19: 200,
    R20: 200,
    R21: 4_990,
    R22: 2_490,
    R23: 0,
  };
  for (const [name, resistance] of Object.entries(expectedResistors)) {
    const component = circuit.db.source_component.getWhere({ name });
    assert.equal(component?.ftype, "simple_resistor");
    assert.equal(component.resistance, resistance, name);
  }

  const expectedCapacitors: Record<string, number> = {
    C1: 4.7e-6,
    C2: 4.7e-6,
    C3: 4.7e-6,
    C4: 1.1e-9,
    C5: 1e-6,
    C6: 10e-6,
    C7: 100e-9,
    C8: 470e-9,
    C9: 100e-9,
    C10: 100e-9,
    C11: 4.7e-6,
    C12: 4.7e-6,
    C13: 100e-9,
    C14: 22e-6,
    C15: 100e-9,
    C16: 100e-9,
    C17: 100e-12,
    C18: 100e-12,
  };
  for (const [name, capacitance] of Object.entries(expectedCapacitors)) {
    const component = circuit.db.source_component.getWhere({ name });
    assert.equal(component?.ftype, "simple_capacitor");
    assert.equal(component.capacitance, capacitance, name);
  }

  for (const [name, mpn] of Object.entries({
    U1: "TPS7A2433DBVR",
    U2: "LMV324AIPWR",
    U3: "ATL431LIBIDBZR",
    U4: "MSPM0L1306SRHBR",
    U5: "INA350CDSIDSGR",
    U6: "DRV8210DSGR",
    U7: "2SMPP03",
  })) {
    assert.equal(
      circuit.db.source_component.getWhere({ name })?.manufacturer_part_number,
      mpn,
      name,
    );
  }

  assertConnected(
    circuit,
    ["J4", "VIN"],
    ["U1", "IN"],
    ["U1", "EN"],
    ["U6", "VM"],
    ["TP1", "pin1"],
  );
  assertConnected(
    circuit,
    ["U1", "OUT"],
    ["U2", "V_POS"],
    ["U4", "VDD"],
    ["U5", "V_POS"],
    ["U6", "VCC"],
    ["J10", "V3_3"],
    ["TP3", "pin1"],
  );
  assertConnected(
    circuit,
    ["U3", "CATHODE"],
    ["U3", "REF"],
    ["R4", "pin1"],
    ["U4", "PA23"],
    ["TP4", "pin1"],
  );
  assertConnected(
    circuit,
    ["U2", "OUT_A"],
    ["U2", "IN_NEG_A"],
    ["U5", "REF"],
    ["R14", "pin1"],
  );

  assertConnected(circuit, ["U2", "OUT_D"], ["U7", "ICC"], ["U7", "N_SUB"]);
  assertConnected(circuit, ["U7", "GND"], ["R22", "pin1"], ["U2", "IN_NEG_D"]);
  assertConnected(circuit, ["U7", "VOUT_POS"], ["J5", "BRIDGE_POS"]);
  assertConnected(circuit, ["U7", "VOUT_NEG"], ["J8", "BRIDGE_NEG"]);
  assertConnected(circuit, ["U5", "IN_POS"], ["J5", "INA_IN_POS"]);
  assertConnected(circuit, ["U5", "IN_NEG"], ["J8", "INA_IN_NEG"]);
  assertConnected(circuit, ["U5", "OUT"], ["J6", "INA_OUT"]);
  assertConnected(circuit, ["U5", "GS"], ["J10", "INA_GS"]);
  assertConnected(circuit, ["U5", "SHDN"], ["R23", "pin1"]);

  assertConnected(
    circuit,
    ["J6", "PRESSURE"],
    ["C11", "pin1"],
    ["R19", "pin1"],
    ["TP2", "pin1"],
  );
  assertConnected(circuit, ["C11", "pin2"], ["R16", "pin1"]);
  assertConnected(
    circuit,
    ["R16", "pin2"],
    ["U2", "IN_NEG_B"],
    ["R9", "pin1"],
    ["C9", "pin1"],
  );
  assertConnected(
    circuit,
    ["U2", "OUT_B"],
    ["R9", "pin2"],
    ["C9", "pin2"],
    ["C12", "pin1"],
  );
  assertConnected(circuit, ["C12", "pin2"], ["R17", "pin1"]);
  assertConnected(
    circuit,
    ["R17", "pin2"],
    ["U2", "IN_NEG_C"],
    ["R10", "pin1"],
    ["C10", "pin1"],
  );
  assertConnected(
    circuit,
    ["U2", "OUT_C"],
    ["R10", "pin2"],
    ["C10", "pin2"],
    ["R20", "pin1"],
    ["TP5", "pin1"],
  );
  assertConnected(circuit, ["R19", "pin2"], ["C17", "pin1"], ["U4", "PA27"]);
  assertConnected(circuit, ["R20", "pin2"], ["C18", "pin1"], ["U4", "PA26"]);

  assertConnected(
    circuit,
    ["R14", "pin2"],
    ["R12", "pin1"],
    ["R11", "pin1"],
    ["U4", "PA24"],
  );
  assertConnected(circuit, ["R12", "pin2"], ["R15", "pin1"], ["U4", "PA22"]);
  assertConnected(
    circuit,
    ["R11", "pin2"],
    ["R15", "pin2"],
    ["R13", "pin1"],
    ["U4", "PA17"],
  );
  assertConnected(circuit, ["R13", "pin2"], ["U4", "PA16"], ["J6", "OPA1_OUT"]);

  assertConnected(
    circuit,
    ["U4", "NRST"],
    ["R2", "pin2"],
    ["C4", "pin1"],
    ["S1", "pin1"],
    ["S1", "pin2"],
    ["J2", "RST"],
  );
  assertConnected(circuit, ["U4", "SWDIO"], ["R1", "pin2"]);
  assertConnected(circuit, ["U4", "SWCLK"], ["R5", "pin2"]);
  assertConnected(circuit, ["U4", "PA14"], ["U6", "IN2"]);
  assertConnected(circuit, ["U4", "PA15"], ["U6", "IN1"]);
  assertConnected(circuit, ["U6", "OUT1"], ["J9", "VALVE_OUT"]);
  assertConnected(circuit, ["U6", "OUT2"], ["J9", "PUMP_OUT"]);

  for (const key of [
    "ADCFilter_TIDA010266",
    "AnalogFrontEnd_LMV324A_TIDA010266",
    "BloodPressureMonitorInterfaces_TIDA010266",
    "IntegratedInstrumentationAmplifier_MSPM0_TIDA010266",
    "Microcontroller_MSPM0L1306_TIDA010266",
    "MotorDriver_DRV8210_TIDA010266",
    "PowerManagement_TPS7A2433_TIDA010266",
    "PressureSensor_2SMPP03_TIDA010266",
    "ProgrammingInterface_MSPM0_TIDA010266",
    "VoltageReference_ATL431LI_TIDA010266",
  ] as const) {
    assert.equal(typeof TiSubcircuitComponents[key], "function", key);
  }
});
