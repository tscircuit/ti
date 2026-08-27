/// <reference types="node" />

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { Circuit } from "@tscircuit/core";
import type { SubcircuitProps } from "@tscircuit/props";
import ObstacleDetectionSensor from "../examples/ObstacleDetectionSensor.circuit.tsx";
import {
  CSD18531Q5A,
  PowerSupply_Boost_LM25122_TIDA00699,
  PowerSupply_Buck_LM53603_TIDA00699,
  PowerSupply_EmiFilter_TIDA00699,
  PowerSupply_ReverseBatteryProtection_LM74610_TIDA00699,
  PowerSupply_Supervisor_TPS3808_TIDA00699,
  PowerSupply_TIDA00699,
  SQ4850EY,
  TiChipComponents,
  TiSubcircuitComponents,
} from "../index.ts";

type TestCircuit = InstanceType<typeof Circuit>;
type ReferenceSubcircuit = (props: SubcircuitProps) => React.ReactNode;
type SchematicComponentSide = "top" | "bottom" | "left" | "right";

const sectionComponents = {
  "Transient & Reverse Polarity Protection": [
    "C8",
    "C9",
    "C11",
    "D2",
    "D3",
    "J1",
    "J3",
    "Q3",
    "U1",
  ],
  "EMI Filter": ["C2", "C25", "L3", "TP5", "TP7"],
  "WVIN Boost": [
    "C1",
    "C3",
    "C4",
    "C5",
    "C7",
    "C10",
    "C12",
    "C13",
    "C14",
    "C15",
    "C16",
    "C17",
    "D1",
    "D4",
    "D5",
    "L1",
    "Q1",
    "Q2",
    "R1",
    "R2",
    "R3",
    "R4",
    "R5",
    "R6",
    "R7",
    "R8",
    "R9",
    "R10",
    "R11",
    "R14",
    "R19",
    "R20",
    "R22",
    "R23",
    "TP1",
    "TP2",
    "TP3",
    "U2",
  ],
  "WVIN Buck": [
    "C18",
    "C19",
    "C20",
    "C21",
    "C22",
    "C23",
    "C24",
    "C27",
    "C28",
    "J2",
    "J4",
    "L2",
    "R12",
    "R13",
    "R15",
    "R21",
    "TP4",
    "TP6",
    "U3",
  ],
  "SVS & Header": ["C6", "C26", "DSHT", "J5", "R16", "R17", "R18", "U4"],
} as const;

const sectionModules: readonly [
  ReferenceSubcircuit,
  keyof typeof sectionComponents,
][] = [
  [
    PowerSupply_ReverseBatteryProtection_LM74610_TIDA00699,
    "Transient & Reverse Polarity Protection",
  ],
  [PowerSupply_EmiFilter_TIDA00699, "EMI Filter"],
  [PowerSupply_Boost_LM25122_TIDA00699, "WVIN Boost"],
  [PowerSupply_Buck_LM53603_TIDA00699, "WVIN Buck"],
  [PowerSupply_Supervisor_TPS3808_TIDA00699, "SVS & Header"],
];

test("TIDA-00699 delegates trace topology and routing to native tscircuit behavior", () => {
  const implementationSource = readFileSync(
    new URL(
      "../lib/subcircuits/PowerSupply_TIDA00699.shared.tsx",
      import.meta.url,
    ),
    "utf8",
  );

  for (const forbiddenRoutingConstruct of [
    "schematicRouteHints",
    "routeHints",
    "<tracehint",
    "referenceTraceOverridesByNetName",
    "createReferenceTraceProps",
  ]) {
    assert.equal(
      implementationSource.includes(forbiddenRoutingConstruct),
      false,
      `${forbiddenRoutingConstruct} must not be used`,
    );
  }
});

test("Obstacle-detection example assigns TIDA-00699 to a named schematic sheet", async () => {
  const circuit = new Circuit({ platform: { pcbDisabled: true } });
  circuit.add(<ObstacleDetectionSensor />);
  await circuit.renderUntilSettled();
  assertNoErrors(circuit);

  const schematicSheet = circuit.db.schematic_sheet.getWhere({
    name: "power_supply",
  });
  assert.ok(schematicSheet);
  assert.equal(schematicSheet.sheet_size, "ansi_b");
  assert.equal(schematicSheet.sheet_width, 431.8);
  assert.equal(schematicSheet.sheet_height, 279.4);
  assert.equal(
    getSchematicPort(circuit, { componentName: "U3", pin: "pin12" })
      .schematic_sheet_id,
    schematicSheet.schematic_sheet_id,
  );
  assert.deepEqual(
    circuit
      .getCircuitJson()
      .filter(
        (element) => element.type === "schematic_element_outside_sheet_warning",
      ),
    [],
  );
});

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

function getSchematicPort(
  circuit: TestCircuit,
  portSelector: { componentName: string; pin: string },
) {
  const { componentName, pin } = portSelector;
  const schematicPort = circuit.db.schematic_port.getWhere({
    source_port_id: getPort(circuit, componentName, pin).source_port_id,
  });
  assert.ok(schematicPort, `${componentName}.${pin} schematic port`);
  return schematicPort;
}

function assertSchematicPinSideOrder(
  circuit: TestCircuit,
  expectedArrangement: {
    componentName: string;
    side: SchematicComponentSide;
    pins: readonly string[];
  },
) {
  const { componentName, side, pins } = expectedArrangement;
  const schematicPorts = pins.map((pin) => ({
    pin,
    schematicPort: getSchematicPort(circuit, { componentName, pin }),
  }));

  for (const { pin, schematicPort } of schematicPorts) {
    assert.equal(
      schematicPort.side_of_component,
      side,
      `${componentName}.${pin} must be on the ${side} side`,
    );
  }

  const orderedPins = [...schematicPorts]
    .sort((firstPort, secondPort) =>
      side === "left" || side === "right"
        ? secondPort.schematicPort.center.y - firstPort.schematicPort.center.y
        : firstPort.schematicPort.center.x - secondPort.schematicPort.center.x,
    )
    .map(({ pin }) => pin);

  assert.deepEqual(
    orderedPins,
    pins,
    `${componentName} ${side}-side pin order`,
  );
}

function assertPinNet(
  circuit: TestCircuit,
  componentName: string,
  pin: string,
  netName: string,
) {
  const port = getPort(circuit, componentName, pin);
  const net = circuit.db.source_net.getWhere({ name: netName });
  assert.ok(net, netName);
  assert.equal(
    port.subcircuit_connectivity_map_key,
    net.subcircuit_connectivity_map_key,
    `${componentName}.${pin} must connect to ${netName}`,
  );
}

function assertPinsConnected(
  circuit: TestCircuit,
  first: readonly [componentName: string, pin: string],
  second: readonly [componentName: string, pin: string],
) {
  assert.equal(
    getPort(circuit, first[0], first[1]).subcircuit_connectivity_map_key,
    getPort(circuit, second[0], second[1]).subcircuit_connectivity_map_key,
    `${first.join(".")} must connect to ${second.join(".")}`,
  );
}

function assertNoErrors(circuit: TestCircuit) {
  assert.deepEqual(
    circuit
      .getCircuitJson()
      .filter((element) => element.type.endsWith("_error")),
    [],
  );
}

function assertReferenceCenter(
  circuit: TestCircuit,
  componentName: string,
  sourceX: number,
  sourceY: number,
) {
  const sourcePort = getPort(circuit, componentName, "pin1");
  const schematicPort = circuit.db.schematic_port.getWhere({
    source_port_id: sourcePort.source_port_id,
  });
  assert.ok(schematicPort, `${componentName} schematic port`);
  assert.ok(
    schematicPort.schematic_component_id,
    `${componentName} schematic component id`,
  );
  const component = circuit.db.schematic_component.get(
    schematicPort.schematic_component_id,
  );
  assert.ok(component, `${componentName} schematic component`);
  assert.ok(Math.abs(component.center.x - sourceX * 1.4) < 1e-6);
  assert.ok(Math.abs(component.center.y - sourceY * 1.4) < 1e-6);
}

function assertPcbPad(
  circuit: TestCircuit,
  componentName: string,
  pin: string,
  expectedX: number,
  expectedY: number,
) {
  const sourcePort = getPort(circuit, componentName, pin);
  const pcbPort = circuit.db.pcb_port.getWhere({
    source_port_id: sourcePort.source_port_id,
  });
  assert.ok(pcbPort, `${componentName}.${pin} PCB port`);
  const pad = circuit.db.pcb_smtpad.getWhere({
    pcb_port_id: pcbPort.pcb_port_id,
  });
  assert.ok(pad, `${componentName}.${pin} pad`);
  assert.notEqual(pad.shape, "polygon", `${componentName}.${pin} pad shape`);
  if (pad.shape === "polygon") assert.fail("unexpected polygon pad");
  assert.ok(Math.abs(pad.x - expectedX) < 1e-6, `${componentName}.${pin} x`);
  assert.ok(Math.abs(pad.y - expectedY) < 1e-6, `${componentName}.${pin} y`);
}

function assertSimpleMosfetSymbol(circuit: TestCircuit, componentName: string) {
  assert.equal(
    circuit.db.schematic_text
      .list()
      .some(({ text }) => /^\d+(,\d+)+$/.test(text)),
    false,
    `${componentName} must not draw grouped package-pin numbers`,
  );
}

for (const [Section, title] of sectionModules) {
  test(`${title} is independently renderable and contains only its official schematic section`, async () => {
    const circuit = new Circuit({ platform: { pcbDisabled: true } });
    circuit.add(
      <board routingDisabled>
        <Section name="section_under_test" />
      </board>,
    );
    await circuit.renderUntilSettled();
    assertNoErrors(circuit);

    assert.deepEqual(
      circuit.db.source_component
        .list()
        .map(({ name }) => name)
        .sort(),
      [...sectionComponents[title]].sort(),
    );
    assert.ok(circuit.db.schematic_text.getWhere({ text: title }));
    assert.equal(circuit.db.schematic_box.list().length, 0);
  });
}

test("TIDA-00699 MOSFETs preserve every physical pad without grouped pin-number text", async () => {
  assert.equal(TiChipComponents.CSD18531Q5A, CSD18531Q5A);
  assert.equal(TiChipComponents.SQ4850EY, SQ4850EY);

  const csdCircuit = new Circuit();
  csdCircuit.add(
    <board width={15} height={15} routingDisabled>
      <CSD18531Q5A name="Q1" />
    </board>,
  );
  await csdCircuit.renderUntilSettled();
  assertNoErrors(csdCircuit);
  assertSimpleMosfetSymbol(csdCircuit, "Q1");
  assert.equal(
    csdCircuit.db.source_port.list({
      source_component_id: csdCircuit.db.source_component.getWhere({
        name: "Q1",
      })?.source_component_id,
    }).length,
    9,
  );
  assert.equal(csdCircuit.db.pcb_smtpad.list().length, 9);
  assertPcbPad(csdCircuit, "Q1", "pin1", -2.77629874, 1.91749426);
  assertPcbPad(csdCircuit, "Q1", "pin4", -2.77629874, -1.91749934);
  assertPcbPad(csdCircuit, "Q1", "pin5", 2.77630128, -1.91749426);
  assertPcbPad(csdCircuit, "Q1", "pin9", 0.30130242, 0);

  const sqCircuit = new Circuit();
  sqCircuit.add(
    <board width={15} height={15} routingDisabled>
      <SQ4850EY name="Q3" />
    </board>,
  );
  await sqCircuit.renderUntilSettled();
  assertNoErrors(sqCircuit);
  assertSimpleMosfetSymbol(sqCircuit, "Q3");
  assert.equal(
    sqCircuit.db.source_port.list({
      source_component_id: sqCircuit.db.source_component.getWhere({
        name: "Q3",
      })?.source_component_id,
    }).length,
    8,
  );
  assert.equal(sqCircuit.db.pcb_smtpad.list().length, 8);
  assertPcbPad(sqCircuit, "Q3", "pin1", -2.4, 1.905);
  assertPcbPad(sqCircuit, "Q3", "pin4", -2.4, -1.905);
  assertPcbPad(sqCircuit, "Q3", "pin5", 2.4, -1.905);
  assertPcbPad(sqCircuit, "Q3", "pin8", 2.4, 1.905);
});

test("TIDA-00699 composite preserves all five source sections, coordinates, and boundary nets", {
  timeout: 15_000,
}, async () => {
  assert.equal(
    TiSubcircuitComponents.PowerSupply_ReverseBatteryProtection_LM74610_TIDA00699,
    PowerSupply_ReverseBatteryProtection_LM74610_TIDA00699,
  );
  assert.equal(
    TiSubcircuitComponents.PowerSupply_EmiFilter_TIDA00699,
    PowerSupply_EmiFilter_TIDA00699,
  );
  assert.equal(
    TiSubcircuitComponents.PowerSupply_Boost_LM25122_TIDA00699,
    PowerSupply_Boost_LM25122_TIDA00699,
  );
  assert.equal(
    TiSubcircuitComponents.PowerSupply_Buck_LM53603_TIDA00699,
    PowerSupply_Buck_LM53603_TIDA00699,
  );
  assert.equal(
    TiSubcircuitComponents.PowerSupply_Supervisor_TPS3808_TIDA00699,
    PowerSupply_Supervisor_TPS3808_TIDA00699,
  );
  assert.equal(
    TiSubcircuitComponents.PowerSupply_TIDA00699,
    PowerSupply_TIDA00699,
  );

  const circuit = new Circuit({ platform: { pcbDisabled: true } });
  circuit.add(
    <board routingDisabled>
      <PowerSupply_TIDA00699 name="power_supply" />
    </board>,
  );
  await circuit.renderUntilSettled();
  assertNoErrors(circuit);

  const expectedComponents = Object.values(sectionComponents).flat().sort();
  assert.equal(expectedComponents.length, 79);
  assert.deepEqual(
    circuit.db.source_component
      .list()
      .map(({ name }) => name)
      .sort(),
    expectedComponents,
  );
  assert.equal(circuit.db.schematic_box.list().length, 0);
  assert.ok(circuit.db.schematic_line.list().length > 0);
  for (const title of Object.keys(sectionComponents)) {
    assert.ok(circuit.db.schematic_text.getWhere({ text: title }));
  }

  for (const expectedArrangement of [
    {
      componentName: "U1",
      side: "left",
      pins: ["pin7", "pin1", "pin4", "pin8"],
    },
    {
      componentName: "U1",
      side: "right",
      pins: ["pin6", "pin2", "pin3", "pin5"],
    },
    {
      componentName: "U2",
      side: "left",
      pins: [
        "pin5",
        "pin6",
        "pin12",
        "pin11",
        "pin10",
        "pin7",
        "pin14",
        "pin8",
        "pin1",
        "pin2",
        "pin9",
      ],
    },
    {
      componentName: "U2",
      side: "right",
      pins: [
        "pin4",
        "pin3",
        "pin13",
        "pin17",
        "pin20",
        "pin18",
        "pin16",
        "pin19",
        "pin15",
        "pin21",
      ],
    },
    {
      componentName: "U3",
      side: "left",
      pins: [
        "pin12",
        "pin13",
        "pin11",
        "pin8",
        "pin4",
        "pin7",
        "pin6",
        "pin14",
      ],
    },
    {
      componentName: "U3",
      side: "right",
      pins: [
        "pin3",
        "pin1",
        "pin2",
        "pin9",
        "pin5",
        "pin10",
        "pin15",
        "pin16",
        "pin17",
      ],
    },
    {
      componentName: "U4",
      side: "left",
      pins: ["pin6", "pin4", "pin3"],
    },
    {
      componentName: "U4",
      side: "right",
      pins: ["pin1", "pin5", "pin2"],
    },
    {
      componentName: "D1",
      side: "left",
      pins: ["pin1", "pin2"],
    },
    { componentName: "D1", side: "right", pins: ["pin3"] },
    {
      componentName: "DSHT",
      side: "left",
      pins: ["pin1", "pin2"],
    },
    { componentName: "DSHT", side: "right", pins: ["pin3"] },
    { componentName: "Q1", side: "top", pins: ["pin5"] },
    { componentName: "Q1", side: "bottom", pins: ["pin1"] },
    { componentName: "Q1", side: "left", pins: ["pin4"] },
    { componentName: "Q2", side: "left", pins: ["pin1"] },
    { componentName: "Q2", side: "right", pins: ["pin5"] },
    { componentName: "Q2", side: "bottom", pins: ["pin4"] },
    { componentName: "Q3", side: "left", pins: ["pin1"] },
    { componentName: "Q3", side: "right", pins: ["pin5"] },
    { componentName: "Q3", side: "bottom", pins: ["pin4"] },
  ] as const) {
    assertSchematicPinSideOrder(circuit, expectedArrangement);
  }

  // Altium source centers are transformed with schX/Y = sourceX/Y * 1.4.
  assertReferenceCenter(circuit, "J1", -13.8914, 5.6662);
  assertReferenceCenter(circuit, "L3", 1.645, 6.0775);
  assertReferenceCenter(circuit, "U2", -6.3973, -5.1179);
  assertReferenceCenter(circuit, "U3", 7.8596, -5.3007);
  assertReferenceCenter(circuit, "U4", 10.053, 4.7523);

  assertPinNet(circuit, "J1", "pin1", "VBAT");
  for (const testpointName of ["J1", "J2", "J3", "J4"]) {
    assert.equal(
      circuit.db.source_component.getWhere({ name: testpointName })?.ftype,
      "simple_test_point",
    );
  }
  assert.equal(
    getPort(circuit, "D2", "pin1").source_port_id,
    getPort(circuit, "D2", "cathode").source_port_id,
  );
  assert.equal(
    getPort(circuit, "D2", "pin2").source_port_id,
    getPort(circuit, "D2", "anode").source_port_id,
  );
  assertPinNet(circuit, "D2", "pin1", "VBAT");
  assertPinNet(circuit, "D3", "pin1", "GND");
  assertPinNet(circuit, "D5", "pin1", "SHT_BST");
  assertPinNet(circuit, "Q1", "pin1", "GND");
  assertPinsConnected(circuit, ["Q2", "pin1"], ["C13", "pin2"]);
  assertPinNet(circuit, "Q3", "pin1", "VBAT");
  for (const pin of ["pin2", "pin3"]) {
    getPort(circuit, "Q1", pin);
    getPort(circuit, "Q2", pin);
    getPort(circuit, "Q3", pin);
  }
  assertPinsConnected(circuit, ["Q1", "pin4"], ["R22", "pin1"]);
  assertPinsConnected(circuit, ["Q2", "pin4"], ["R23", "pin1"]);
  assertPinsConnected(circuit, ["Q3", "pin4"], ["U1", "pin2"]);
  assertPinsConnected(circuit, ["Q1", "pin5"], ["C13", "pin2"]);
  assertPinNet(circuit, "Q2", "pin5", "VBST");
  assertPinNet(circuit, "Q3", "pin5", "VBAT_PROTECT");
  for (const pin of ["pin6", "pin7", "pin8"]) {
    getPort(circuit, "Q1", pin);
    getPort(circuit, "Q2", pin);
    getPort(circuit, "Q3", pin);
  }
  getPort(circuit, "Q1", "pin9");
  getPort(circuit, "Q2", "pin9");
  assertPinNet(circuit, "U1", "pin4", "VBAT");
  assertPinNet(circuit, "U1", "pin8", "VBAT_PROTECT");
  assertPinNet(circuit, "L3", "pin1", "VBAT_PROTECT");
  assertPinNet(circuit, "L3", "pin2", "VBAT_FILT");
  assertPinNet(circuit, "R14", "pin1", "VBAT_FILT");
  assertPinNet(circuit, "U2", "pin6", "SHT_BST");
  assertPinNet(circuit, "U3", "pin11", "SHT_BCK");
  assertPinNet(circuit, "U3", "pin9", "VSYS");
  assertPinNet(circuit, "U4", "pin6", "VSYS");
  assertPinNet(circuit, "J5", "pin1", "SVS_OUT");
  assertPinNet(circuit, "J5", "pin2", "SYNC_BUCK");
  assertPinNet(circuit, "J5", "pin3", "RST_OUT");
  assertPinNet(circuit, "J5", "pin4", "SYNC_BST");
  assertPinNet(circuit, "J5", "pin6", "GND");
});
