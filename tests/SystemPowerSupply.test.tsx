/// <reference types="node" />

import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";
import { getSchematicElementBounds } from "@tscircuit/circuit-json-util";
import { Circuit } from "@tscircuit/core";
import ObstacleDetectionSensor from "../examples/ObstacleDetectionSensor.circuit.tsx";
import {
  LM4060A33EDBZR,
  LP87524BRNFRQ1,
  SystemPowerLdo1_TPS7A8101_TIDEP0092,
  SystemPowerLdo2_TPS7A8801_TIDEP0092,
  SystemPowerPmicBuck_LP87524B_TIDEP0092,
  SystemPowerPmicSequencer_TIDEP0092,
  SystemPowerReference_LM4060_Datasheet,
  SystemPowerSupply_ObstacleDetectionSensor_TIDEP0092,
  SystemPowerVpp_TPS79601_TIDEP0092,
  TiChipComponents,
  TiSubcircuitComponents,
  TPS79601DRBR,
  TPS7A8101QDRBRQ1,
  TPS7A8801RTJR,
} from "../index.ts";

type TestCircuit = InstanceType<typeof Circuit>;
type Module = (props: Record<string, unknown>) => React.JSX.Element;

const SCHEMATIC_UNIT_TO_MM = 10.16 / 1.1;
const PDF_POINT_TO_SCHEMATIC_UNIT = 25.4 / 72 / SCHEMATIC_UNIT_TO_MM;
const refCenter = (pdfX: number, pdfY: number) =>
  [
    (pdfX - 612) * PDF_POINT_TO_SCHEMATIC_UNIT,
    (403.2 - pdfY) * PDF_POINT_TO_SCHEMATIC_UNIT,
  ] as const;

test("System power traces use only the native schematic autorouter", () => {
  const subcircuitDirectory = new URL("../lib/subcircuits/", import.meta.url);
  const systemPowerFileNames = readdirSync(subcircuitDirectory).filter(
    (fileName) =>
      fileName.startsWith("SystemPower") && fileName.endsWith(".circuit.tsx"),
  );
  for (const fileName of systemPowerFileNames) {
    const source = readFileSync(new URL(fileName, subcircuitDirectory), "utf8");
    assert.doesNotMatch(source, /schematicRouteHints|<tracehint|routeHint/);
    assert.doesNotMatch(source, /<trace\s[^>]*\bpath=/);
    assert.doesNotMatch(
      source,
      /<schematic(?:rect|line|path|text)\b/,
      `${fileName} must not draw custom schematic graphics`,
    );
    for (const schematicSymbol of source.matchAll(
      /<schematicsymbol\b([\s\S]*?)\/>/g,
    )) {
      assert.match(
        schematicSymbol[1],
        /\bsymbolName=/,
        `${fileName} schematic symbols must come from the native library`,
      );
    }
    for (const trace of source.matchAll(/<trace\b([\s\S]*?)\/>/g)) {
      assert.match(trace[1], /\bfrom=/, `${fileName} trace requires from`);
      assert.match(trace[1], /\bto=/, `${fileName} trace requires to`);
    }
  }
});

test("System power implementation never sets schSize", () => {
  const subcircuitDirectory = new URL("../lib/subcircuits/", import.meta.url);
  const systemPowerSourceUrls = [
    ...readdirSync(subcircuitDirectory)
      .filter(
        (fileName) =>
          fileName.startsWith("SystemPower") &&
          fileName.endsWith(".circuit.tsx"),
      )
      .map((fileName) => new URL(fileName, subcircuitDirectory)),
    new URL("../lib/chips/LM4060A33EDBZR.circuit.tsx", import.meta.url),
    new URL("../lib/chips/LP87524BRNFRQ1.circuit.tsx", import.meta.url),
    new URL("../lib/chips/TPS79601DRBR.circuit.tsx", import.meta.url),
    new URL("../lib/chips/TPS7A8101QDRBRQ1.circuit.tsx", import.meta.url),
    new URL("../lib/chips/TPS7A8801RTJR.circuit.tsx", import.meta.url),
    new URL("../examples/ObstacleDetectionSensor.circuit.tsx", import.meta.url),
  ];

  for (const sourceUrl of systemPowerSourceUrls) {
    const source = readFileSync(sourceUrl, "utf8");
    assert.doesNotMatch(
      source,
      /\bschSize\s*=/,
      `${sourceUrl.pathname} must use native named sheet sizing`,
    );
  }
});

test("TI off-sheet ports use native on-trace labels", () => {
  const cases = [
    {
      sourceUrl: new URL(
        "../lib/subcircuits/SystemPowerPmicBuck_LP87524B_TIDEP0092.circuit.tsx",
        import.meta.url,
      ),
      traces: [
        [".U8 > .CLKIN", "net.PMIC_CLK", "PMIC_CLK"],
        [".R146 > .pin1", "net.AR_SCL", "AR_SCL"],
        [".R144 > .pin2", "net.AR_SDA", "AR_SDA"],
        [".U8 > .NRST", "net.PMIC_NRST", "PMIC_NRST"],
        [".U8 > .EN1", "net.PMIC_EN1", "PMIC_EN1"],
        [".U8 > .EN2", "net.PMIC_EN2", "PMIC_EN2"],
        [".U8 > .EN3", "net.PMIC_EN3", "PMIC_EN3"],
      ],
      formerNetLabelConnections: [
        "U8.CLKIN",
        "R146.pin1",
        "R144.pin2",
        "U8.NRST",
        "U8.EN1",
        "U8.EN2",
        "U8.EN3",
      ],
    },
    {
      sourceUrl: new URL(
        "../lib/subcircuits/SystemPowerPmicSequencer_TIDEP0092.circuit.tsx",
        import.meta.url,
      ),
      traces: [
        [".R150 > .pin2", "net.PMIC_NRST", "PMIC_NRST"],
        [".R142 > .pin1", "net.PMIC_EN1", "PMIC_EN1"],
        [".R148 > .pin1", "net.PMIC_EN2", "PMIC_EN2"],
        [".R145 > .pin1", "net.PMIC_EN3", "PMIC_EN3"],
        [".R138 > .pin2", "net.PGOOD", "PGOOD"],
      ],
      formerNetLabelConnections: [
        "R150.pin2",
        "R142.pin1",
        "R148.pin1",
        "R145.pin1",
        "R141.pin2",
      ],
    },
    {
      sourceUrl: new URL(
        "../lib/subcircuits/SystemPowerLdo1_TPS7A8101_TIDEP0092.circuit.tsx",
        import.meta.url,
      ),
      traces: [[".R84 > .pin2", "net.LDO_01_EN", "LDO_01_EN"]],
      formerNetLabelConnections: ["R84.pin2"],
    },
    {
      sourceUrl: new URL(
        "../lib/subcircuits/SystemPowerLdo2_TPS7A8801_TIDEP0092.circuit.tsx",
        import.meta.url,
      ),
      traces: [[".R46 > .pin2", "net.LDO_02_EN", "LDO_02_EN"]],
      formerNetLabelConnections: ["R46.pin2"],
    },
  ] as const;

  for (const testCase of cases) {
    const source = readFileSync(testCase.sourceUrl, "utf8");
    const traceBlocks = [...source.matchAll(/<trace\b([\s\S]*?)\/>/g)].map(
      (match) => match[1],
    );
    const netLabelBlocks = [
      ...source.matchAll(/<netlabel\b([\s\S]*?)\/>/g),
    ].map((match) => match[1]);

    for (const [from, to, label] of testCase.traces) {
      assert.ok(
        traceBlocks.some(
          (trace) =>
            trace.includes(`from="${from}"`) &&
            trace.includes(`to="${to}"`) &&
            trace.includes(`schDisplayLabel="${label}"`),
        ),
        `${testCase.sourceUrl.pathname} must render ${label} on its trace`,
      );
    }

    for (const connection of testCase.formerNetLabelConnections) {
      assert.ok(
        netLabelBlocks.every(
          (netLabel) => !netLabel.includes(`connection="${connection}"`),
        ),
        `${testCase.sourceUrl.pathname} must not use a standalone net label at ${connection}`,
      );
    }
  }
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
  selector: { componentName: string; pin: string },
) {
  const sourcePort = getPort(circuit, selector.componentName, selector.pin);
  const schematicPort = circuit.db.schematic_port.getWhere({
    source_port_id: sourcePort.source_port_id,
  });
  assert.ok(
    schematicPort,
    `${selector.componentName}.${selector.pin} schematic port`,
  );
  return schematicPort;
}

function assertVerticalPin1BelowPin2(
  circuit: TestCircuit,
  componentNames: string[],
) {
  for (const componentName of componentNames) {
    const pin1 = getSchematicPort(circuit, { componentName, pin: "pin1" });
    const pin2 = getSchematicPort(circuit, { componentName, pin: "pin2" });
    assert.ok(
      Math.abs(pin1.center.x - pin2.center.x) < 1e-9,
      `${componentName} must remain vertical`,
    );
    assert.ok(
      pin1.center.y < pin2.center.y,
      `${componentName} must have the requested 180-degree pin order`,
    );
  }
}

function assertVerticalPin1AbovePin2(
  circuit: TestCircuit,
  componentNames: string[],
) {
  for (const componentName of componentNames) {
    const pin1 = getSchematicPort(circuit, { componentName, pin: "pin1" });
    const pin2 = getSchematicPort(circuit, { componentName, pin: "pin2" });
    assert.ok(
      Math.abs(pin1.center.x - pin2.center.x) < 1e-9,
      `${componentName} must remain vertical`,
    );
    assert.ok(
      pin1.center.y > pin2.center.y,
      `${componentName} must have the requested pin order`,
    );
  }
}

function assertHorizontalPin1RightOfPin2(
  circuit: TestCircuit,
  componentNames: string[],
) {
  for (const componentName of componentNames) {
    const pin1 = getSchematicPort(circuit, { componentName, pin: "pin1" });
    const pin2 = getSchematicPort(circuit, { componentName, pin: "pin2" });
    assert.ok(
      Math.abs(pin1.center.y - pin2.center.y) < 0.01,
      `${componentName} must remain horizontal`,
    );
    assert.ok(
      pin1.center.x > pin2.center.x,
      `${componentName} must have the requested 180-degree pin order`,
    );
  }
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

function assertPinNotNet(
  circuit: TestCircuit,
  componentName: string,
  pin: string,
  netName: string,
) {
  const net = circuit.db.source_net.getWhere({ name: netName });
  assert.ok(net, netName);
  assert.ok(
    !getConnectedIds(
      circuit,
      getPort(circuit, componentName, pin).source_port_id,
    ).has(net.source_net_id),
    `${componentName}.${pin} must remain isolated from ${netName}`,
  );
}

function assertPinPort(
  circuit: TestCircuit,
  componentName: string,
  pin: string,
  portName: string,
) {
  const boundaryPort = circuit.db.source_port.getWhere({
    name: portName,
    source_component_id: null,
  });
  assert.ok(boundaryPort, portName);
  assert.ok(
    getConnectedIds(
      circuit,
      getPort(circuit, componentName, pin).source_port_id,
    ).has(boundaryPort.source_port_id),
    `${componentName}.${pin} must connect to boundary port ${portName}`,
  );
}

function assertConnectedPorts(
  circuit: TestCircuit,
  firstComponent: string,
  firstPin: string,
  secondComponent: string,
  secondPin: string,
) {
  const first = getPort(circuit, firstComponent, firstPin);
  const second = getPort(circuit, secondComponent, secondPin);
  assert.ok(
    getConnectedIds(circuit, first.source_port_id).has(second.source_port_id),
    `${firstComponent}.${firstPin} must connect to ${secondComponent}.${secondPin}`,
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

async function renderModule(Module: Module) {
  const circuit = new Circuit({ platform: { pcbDisabled: true } });
  circuit.add(<Module />);
  await circuit.renderUntilSettled();
  assertNoErrors(circuit);
  return circuit;
}

function assertComponentNames(circuit: TestCircuit, expected: string[]) {
  assert.deepEqual(
    circuit.db.source_component
      .list()
      .map((component) => component.name)
      .sort(),
    [...expected].sort(),
  );
}

function assertAllComponentsHaveMpn(circuit: TestCircuit) {
  for (const component of circuit.db.source_component.list()) {
    assert.ok(
      component.manufacturer_part_number,
      `${component.name} must preserve its source manufacturer part number`,
    );
  }
}

function assertSchematicCenter(
  circuit: TestCircuit,
  componentName: string,
  expected: { x: number; y: number },
) {
  const source = circuit.db.source_component.getWhere({ name: componentName });
  assert.ok(source, componentName);
  const schematic = circuit.db.schematic_component.getWhere({
    source_component_id: source.source_component_id,
  });
  assert.ok(schematic, `${componentName} schematic component`);
  assert.ok(Math.abs(schematic.center.x - expected.x) < 1e-6);
  assert.ok(Math.abs(schematic.center.y - expected.y) < 1e-6);
}

function assertSchematicCenters(
  circuit: TestCircuit,
  expectedByName: Record<string, readonly [number, number]>,
) {
  for (const [componentName, [x, y]] of Object.entries(expectedByName)) {
    assertSchematicCenter(circuit, componentName, { x, y });
  }
  assert.deepEqual(
    circuit.db.source_component
      .list()
      .map((component) => component.name)
      .sort(),
    Object.keys(expectedByName).sort(),
    "the source-coordinate table must cover every component",
  );
}

function assertPinSideOrder(
  circuit: TestCircuit,
  componentName: string,
  side: "left" | "right" | "up" | "down",
  pins: readonly string[],
) {
  const axis = side === "left" || side === "right" ? "y" : "x";
  const coordinates = pins.map((pin) => {
    const port = getSchematicPort(circuit, { componentName, pin });
    assert.equal(
      port.facing_direction,
      side,
      `${componentName}.${pin} must face ${side}`,
    );
    return port.center[axis];
  });
  const expected = [...coordinates].sort(
    axis === "y" ? (a, b) => b - a : (a, b) => a - b,
  );
  assert.deepEqual(
    coordinates,
    expected,
    `${componentName} ${side} pins must retain source order`,
  );
}

test("System power chips and subcircuits are publicly exported", () => {
  assert.equal(TiChipComponents.LP87524BRNFRQ1, LP87524BRNFRQ1);
  assert.equal(TiChipComponents.TPS7A8101QDRBRQ1, TPS7A8101QDRBRQ1);
  assert.equal(TiChipComponents.TPS7A8801RTJR, TPS7A8801RTJR);
  assert.equal(TiChipComponents.TPS79601DRBR, TPS79601DRBR);
  assert.equal(TiChipComponents.LM4060A33EDBZR, LM4060A33EDBZR);
  assert.equal(
    TiSubcircuitComponents.SystemPowerSupply_ObstacleDetectionSensor_TIDEP0092,
    SystemPowerSupply_ObstacleDetectionSensor_TIDEP0092,
  );
});

test("Obstacle Detection Sensor keeps every visible element inside its assigned sheet", async () => {
  const circuit = await renderModule(ObstacleDetectionSensor);
  const sheets = circuit.db.schematic_sheet.list();
  assert.deepEqual(sheets.map((sheet) => sheet.name).sort(), [
    "dual_ldo_1p3v",
    "ldo_1p8v",
    "pmic_power_stage",
    "precision_reference",
    "vpp_ldo",
  ]);
  assert.equal(
    sheets.find((sheet) => sheet.name === "pmic_power_stage")?.sheet_index,
    0,
  );
  assert.equal(
    sheets.find((sheet) => sheet.name === "pmic_power_stage")?.sheet_size,
    "ansi_b",
  );
  assert.equal(
    sheets.find((sheet) => sheet.name === "pmic_power_stage")?.sheet_width,
    431.8,
  );
  assert.equal(
    sheets.find((sheet) => sheet.name === "pmic_power_stage")?.sheet_height,
    279.4,
  );
  assert.equal(
    circuit.db.schematic_text
      .list()
      .filter((text) => text.text === "5 V Input Decoupling").length,
    1,
    "the PMIC sheet must render the native input-decoupling section title",
  );
  assert.equal(
    circuit.db.schematic_text
      .list()
      .filter((text) => text.text === "Snubber on Switching Nodes").length,
    1,
    "the PMIC sheet must render the native switch-node snubber section title",
  );
  for (const sectionTitle of [
    "Controls for the PMIC",
    "PMIC Enable Pull-ups",
    "3.3 V PGOOD Output",
  ]) {
    assert.equal(
      circuit.db.schematic_text
        .list()
        .filter((text) => text.text === sectionTitle).length,
      1,
      `the PMIC sheet must render the native ${sectionTitle} section title`,
    );
  }
  assert.equal(
    circuit.db.schematic_text
      .list()
      .filter((text) => text.text === "LDO 02 - Dual 1.3 V Outputs").length,
    1,
    "the LDO 02 sheet must render its native schematic-section title",
  );
  assert.equal(
    circuit.db.schematic_text.list().filter((text) => text.text === "PMIC")
      .length,
    1,
    "the LDO 01 sheet must render the native PMIC section title",
  );

  const schematicElements = circuit
    .getCircuitJson()
    .filter(
      (element) =>
        element.type === "schematic_component" ||
        element.type === "schematic_net_label" ||
        element.type === "schematic_trace",
    );
  assert.equal(
    schematicElements.filter((element) => !element.schematic_sheet_id).length,
    0,
    "every visible schematic element must be assigned to a sheet",
  );

  for (const sheet of sheets) {
    const drawingHalfWidth =
      ((sheet.sheet_width ?? 297) / 2 - 5) / SCHEMATIC_UNIT_TO_MM;
    const drawingHalfHeight =
      ((sheet.sheet_height ?? 210) / 2 - 5) / SCHEMATIC_UNIT_TO_MM;
    const sheetElements = schematicElements.filter(
      (element) => element.schematic_sheet_id === sheet.schematic_sheet_id,
    );
    assert.ok(sheetElements.length > 0, `${sheet.name} must not be empty`);

    for (const element of sheetElements) {
      const bounds = getSchematicElementBounds(element);
      assert.ok(bounds, `${element.type} must have measurable bounds`);
      assert.ok(
        bounds.minX >= -drawingHalfWidth &&
          bounds.maxX <= drawingHalfWidth &&
          bounds.minY >= -drawingHalfHeight &&
          bounds.maxY <= drawingHalfHeight,
        `${element.type} on ${sheet.name} must remain inside its drawing frame`,
      );
    }
  }
  assert.equal(
    circuit.db.schematic_element_outside_sheet_warning.list().length,
    0,
    "all System Power elements must remain inside their declared sheets",
  );
});

test("TIDEP-0092 PMIC stage keeps its four official output rails", async () => {
  const circuit = await renderModule(SystemPowerPmicBuck_LP87524B_TIDEP0092);
  assertComponentNames(circuit, [
    "U8",
    "C59",
    "C60",
    "C73",
    "C72",
    "C68",
    "C55",
    "C54",
    "C81",
    "C82",
    "L2",
    "L1",
    "L4",
    "L3",
    "R144",
    "R146",
    "R143",
    "R147",
    "R202",
    "R203",
    "R204",
    "R205",
    "C93",
    "C94",
    "C95",
    "C96",
  ]);
  assertAllComponentsHaveMpn(circuit);
  for (const pin of ["VIN_B0", "VIN_B1", "VIN_B2", "VIN_B3", "VANA"])
    assertPinNet(circuit, "U8", pin, "V5_UNREG");
  for (const pin of ["AGND1", "AGND2", "PGND_B01", "PGND_B23", "EP"])
    assertPinNet(circuit, "U8", pin, "GND");
  for (const [inductor, feedback, capacitor, net] of [
    ["L2", "FB_B0", "C55", "PMICOUT_3V3"],
    ["L1", "FB_B1", "C54", "PMIC_1V2"],
    ["L4", "FB_B2", "C81", "PMIC_1V8"],
    ["L3", "FB_B3", "C82", "PMIC_2V3"],
  ]) {
    assertPinNet(circuit, inductor, "pin2", net);
    assertPinNet(circuit, capacitor, "pin2", net);
    assertPinNet(circuit, "U8", feedback, net);
  }
  assertPinSideOrder(circuit, "U8", "left", [
    "CLKIN",
    "SCL",
    "NRST",
    "VIN_B0",
    "VIN_B1",
    "VIN_B2",
    "VIN_B3",
    "EN1",
    "EN2",
    "EN3",
  ]);
  assertPinSideOrder(circuit, "U8", "right", [
    "VANA",
    "SDA",
    "PGOOD",
    "NINT",
    "FB_B0",
    "FB_B1",
    "FB_B2",
    "FB_B3",
    "SW_B0",
    "SW_B1",
    "SW_B2",
    "SW_B3",
    "AGND1",
    "AGND2",
    "EP",
    "PGND_B01",
    "PGND_B23",
  ]);
  assertSchematicCenters(circuit, {
    U8: refCenter(777.476878, 312.967138),
    C59: refCenter(183.918952, 169.073907),
    C60: refCenter(227.086159, 169.073907),
    C73: refCenter(263.059933, 169.073907),
    C72: refCenter(299.033211, 169.073907),
    R146: refCenter(640.778369, 219.436729),
    R144: refCenter(914.174664, 233.826022),
    C68: refCenter(939.355862, 169.073907),
    R143: refCenter(1029.289647, 190.657904),
    R147: refCenter(1076.054852, 187.060581),
    L2: refCenter(558.042289, 334.551078),
    L1: refCenter(558.042289, 348.940372),
    L4: refCenter(558.042289, 363.329665),
    L3: refCenter(558.042289, 377.718959),
    C55: refCenter(165.931896, 438.873232),
    C54: refCenter(270.254275, 442.47078),
    C81: refCenter(370.979331, 442.47078),
    C82: refCenter(478.899033, 442.47078),
    R202: refCenter(993.316283, 492.83368),
    R203: refCenter(1036.484164, 491.03499),
    R204: refCenter(1083.249368, 491.03499),
    R205: refCenter(1137.209219, 492.83368),
    C93: refCenter(993.316283, 557.58567),
    C94: refCenter(1036.484164, 557.58567),
    C95: refCenter(1083.249368, 557.58567),
    C96: refCenter(1137.209219, 557.58567),
  });
  assertVerticalPin1BelowPin2(circuit, [
    "R202",
    "R203",
    "R204",
    "R205",
    "C93",
    "C94",
    "C95",
    "C96",
    "C55",
    "C54",
    "C81",
    "C82",
  ]);
  assertHorizontalPin1RightOfPin2(circuit, ["L1", "L2", "L3", "L4"]);
  const u8Source = circuit.db.source_component.getWhere({ name: "U8" });
  assert.ok(u8Source);
  const u8Schematic = circuit.db.schematic_component.getWhere({
    source_component_id: u8Source.source_component_id,
  });
  assert.ok(u8Schematic);
  assert.deepEqual(u8Schematic.size, { width: 6.045502, height: 10.44223 });
});

test("TIDEP-0092 LDO sheets retain exact parts, rails, and source centers", async () => {
  const ldo1 = await renderModule(SystemPowerLdo1_TPS7A8101_TIDEP0092);
  assertComponentNames(ldo1, [
    "U4",
    "C21",
    "C25",
    "C23",
    "C22",
    "C18",
    "C19",
    "R82",
    "R81",
    "R84",
    "R83",
  ]);
  assertAllComponentsHaveMpn(ldo1);
  assertPinNet(ldo1, "U4", "IN1", "PMIC_2V3");
  assertPinNet(ldo1, "U4", "IN2", "PMIC_2V3");
  assertPinNet(ldo1, "U4", "OUT1", "AR_1V8");
  assertPinNet(ldo1, "U4", "OUT2", "AR_1V8");
  assertConnectedPorts(ldo1, "U4", "FB_SNS", "R82", "pin1");
  assertPinNet(ldo1, "U4", "GND", "GND");
  assertPinNet(ldo1, "U4", "EP", "GND");
  assertPinSideOrder(ldo1, "U4", "left", ["IN2", "IN1", "NR", "EN"]);
  assertPinSideOrder(ldo1, "U4", "right", ["OUT1", "OUT2", "FB_SNS", "GND"]);
  assertPinSideOrder(ldo1, "U4", "down", ["EP"]);
  assertSchematicCenters(ldo1, {
    U4: [0, 6.375],
    C21: [-13.125, 5.625],
    C25: [-10.875, 5.625],
    C23: [-8.625, 4.875],
    C22: [-5.25, 4.5],
    C18: [7.125, 6.375],
    C19: [9, 6.375],
    R82: [5.625, 6],
    R81: [6.375, 3.375],
    R84: [-3.75, -3.375],
    R83: [-3.75, -6],
  });

  const ldo2 = await renderModule(SystemPowerLdo2_TPS7A8801_TIDEP0092);
  assertComponentNames(ldo2, [
    "U5",
    "C31",
    "C32",
    "C30",
    "C40",
    "C44",
    "C29",
    "R131",
    "R132",
    "C46",
    "C36",
    "C37",
    "C38",
    "R122",
    "R121",
    "C28",
    "C35",
    "C33",
    "C34",
    "R46",
    "R47",
    "R120",
    "R119",
  ]);
  assertAllComponentsHaveMpn(ldo2);
  for (const pin of ["IN1_1", "IN1_2", "IN2_1", "IN2_2"])
    assertPinNet(ldo2, "U5", pin, "PMIC_1V8");
  for (const pin of ["OUT1_1", "OUT1_2"])
    assertPinNet(ldo2, "U5", pin, "AR_1P3_RF1");
  assertConnectedPorts(ldo2, "U5", "FB1", "R131", "pin1");
  for (const pin of ["OUT2_1", "OUT2_2"])
    assertPinNet(ldo2, "U5", pin, "AR_1P3_RF2");
  assertConnectedPorts(ldo2, "U5", "FB2", "R122", "pin1");
  for (const pin of ["GND1", "GND2", "EP"])
    assertPinNet(ldo2, "U5", pin, "GND");
  assertPinSideOrder(ldo2, "U5", "left", [
    "IN1_1",
    "IN1_2",
    "GND1",
    "IN2_1",
    "IN2_2",
  ]);
  assertPinSideOrder(ldo2, "U5", "up", [
    "EN1",
    "NR_SS1",
    "SS_CTRL1",
    "PG1",
    "FB1",
  ]);
  assertPinSideOrder(ldo2, "U5", "right", [
    "OUT1_2",
    "OUT1_1",
    "GND2",
    "OUT2_2",
    "OUT2_1",
    "EP",
  ]);
  assertPinSideOrder(ldo2, "U5", "down", [
    "EN2",
    "NR_SS2",
    "SS_CTRL2",
    "PG2",
    "FB2",
  ]);
  assertSchematicCenters(ldo2, {
    U5: [0, 2.2],
    C31: [-10.725, 5.225],
    C32: [-9.625, 5.225],
    C30: [-8.525, 5.225],
    C40: [-7.425, 5.225],
    C44: [-4.125, 3.3],
    C29: [-4.95, -0.55],
    C46: [4.95, 6.6],
    R131: [4.125, 5.775],
    R132: [5.225, 3.3],
    C36: [6.05, 6.6],
    C37: [7.15, 6.6],
    C38: [8.25, 6.6],
    C28: [5.5, 1.375],
    R122: [4.4, 1.1],
    R121: [4.95, -1.1],
    C35: [6.6, 0.825],
    C33: [7.7, 0.825],
    C34: [8.8, 0.825],
    R46: [-1.65, -4.675],
    R47: [-1.65, -6.325],
    R120: [11, -2.75],
    R119: [11, -4.4],
  });
});

test("TIDEP-0092 sequencer and VPP sections preserve control connectivity", async () => {
  const sequencer = await renderModule(SystemPowerPmicSequencer_TIDEP0092);
  assertComponentNames(sequencer, [
    "R149",
    "R139",
    "R150",
    "R142",
    "R148",
    "R145",
    "R141",
    "R138",
  ]);
  assertAllComponentsHaveMpn(sequencer);
  assertPinNet(sequencer, "R149", "pin2", "V5_IN");
  assertPinNet(sequencer, "R149", "pin1", "PMICVIO_3V3");
  assertPinNet(sequencer, "R150", "pin2", "PMIC_NRST");
  assertPinNet(sequencer, "R142", "pin1", "PMIC_EN1");
  assertPinNet(sequencer, "R148", "pin1", "PMIC_EN2");
  assertPinNet(sequencer, "R145", "pin1", "PMIC_EN3");
  assertPinNet(sequencer, "R141", "pin1", "PMICOUT_3V3");
  assertPinNet(sequencer, "R141", "pin2", "PGOOD");
  assertSchematicCenters(sequencer, {
    R149: refCenter(90.388104, 579.168815),
    R139: refCenter(90.388104, 679.894126),
    R150: refCenter(270.254275, 651.115539),
    R142: refCenter(356.590037, 647.518216),
    R148: refCenter(439.328476, 647.518216),
    R145: refCenter(529.261561, 647.518216),
    R141: refCenter(705.530409, 593.558364),
    R138: refCenter(759.49026, 629.531599),
  });
  assertVerticalPin1BelowPin2(sequencer, [
    "R138",
    "R142",
    "R148",
    "R145",
    "R139",
    "R149",
  ]);
  assertVerticalPin1AbovePin2(sequencer, ["R150"]);

  const vpp = await renderModule(SystemPowerVpp_TPS79601_TIDEP0092);
  assertComponentNames(vpp, [
    "U11",
    "C86",
    "R194",
    "R61",
    "R193",
    "C88",
    "C85",
    "P7",
  ]);
  assertAllComponentsHaveMpn(vpp);
  assertPinNet(vpp, "U11", "IN1", "V5_IN");
  assertPinNet(vpp, "U11", "IN2", "V5_IN");
  assertConnectedPorts(vpp, "U11", "EN", "R194", "pin2");
  assertConnectedPorts(vpp, "U11", "OUT1", "P7", "pin1");
  assertConnectedPorts(vpp, "U11", "OUT2", "P7", "pin1");
  assertConnectedPorts(vpp, "P7", "pin1", "P7", "pin2");
  assertConnectedPorts(vpp, "U11", "FB", "R61", "pin1");
  assertPinNet(vpp, "U11", "GND", "GND");
  assertPinNet(vpp, "U11", "EP", "GND");
  assertPinNet(vpp, "P7", "pin1", "VPP_1P7");
  assertPinNet(vpp, "P7", "pin2", "VPP_1P7");
  assertPinSideOrder(vpp, "P7", "up", ["pin1", "pin2"]);
  assertPinSideOrder(vpp, "U11", "left", ["IN1", "IN2", "OUT1", "OUT2"]);
  assertPinSideOrder(vpp, "U11", "right", ["EN", "NC", "GND", "FB"]);
  assertPinSideOrder(vpp, "U11", "down", ["EP"]);
  assertVerticalPin1BelowPin2(vpp, ["C85", "C86", "R193", "R61"]);
  assertSchematicCenters(vpp, {
    U11: [0, 3.375],
    C86: [-3.09375, 5.0625],
    R194: [3.375, 4.59375],
    R61: [-3.375, 1.96875],
    R193: [-3.375, -0.28125],
    C88: [-5.625, 1.96875],
    C85: [-7.875, 1.96875],
    P7: [-10.875, 1.96875],
  });
});

test("LM4060 section is isolated as a datasheet-derived reference", async () => {
  const lm4060Source = readFileSync(
    new URL("../lib/chips/LM4060A33EDBZR.circuit.tsx", import.meta.url),
    "utf8",
  );
  assert.match(lm4060Source, /noSchematicRepresentation/);
  assert.doesNotMatch(lm4060Source, /schPinArrangement/);

  const circuit = await renderModule(SystemPowerReference_LM4060_Datasheet);
  assertComponentNames(circuit, ["R1", "U1", "U1_SCHEMATIC", "C1"]);
  const lm4060SymbolSource = circuit.db.source_component.getWhere({
    name: "U1_SCHEMATIC",
  });
  assert.ok(lm4060SymbolSource);
  const lm4060Symbol = circuit.db.schematic_component.getWhere({
    source_component_id: lm4060SymbolSource.source_component_id,
  });
  assert.ok(lm4060Symbol);
  assert.equal(lm4060Symbol.symbol_name, "zener_diode_vert");
  assert.deepEqual(lm4060Symbol.center, { x: -3, y: -0.98 });
  assertPinPort(circuit, "R1", "pin1", "V5_IN");
  assertPinPort(circuit, "U1", "CATHODE", "VREF_3V3");
  assertPinPort(circuit, "C1", "pin1", "VREF_3V3");
  assertPinNet(circuit, "U1", "ANODE", "GND");
  assertPinNet(circuit, "C1", "pin2", "GND");
  assertPinSideOrder(circuit, "U1", "up", ["CATHODE"]);
  assertPinSideOrder(circuit, "U1", "down", ["ANODE"]);
  assert.equal(
    circuit.db.schematic_port.getWhere({
      source_port_id: getPort(circuit, "U1", "DNC").source_port_id,
    }),
    undefined,
    "the no-connect package pin must not appear on the two-terminal symbol",
  );
  assertSchematicCenter(circuit, "R1", { x: -3, y: 0.7 });
  assertSchematicCenter(circuit, "U1_SCHEMATIC", { x: -3, y: -0.98 });
  assertSchematicCenter(circuit, "C1", { x: 0, y: -1.2 });
  const lm4060Physical = circuit.db.source_component.getWhere({ name: "U1" });
  assert.ok(lm4060Physical);
  assert.equal(
    circuit.db.schematic_component.getWhere({
      source_component_id: lm4060Physical.source_component_id,
    }),
    undefined,
    "the physical LM4060 must not also render a generic chip box",
  );
  for (const portName of ["REF", "VDD"]) {
    const port = circuit.db.source_port.getWhere({ name: portName });
    assert.ok(port, `MCU.${portName}`);
    const referencePort = circuit.db.source_port.getWhere({
      name: "VREF_3V3",
      source_component_id: null,
    });
    assert.ok(referencePort);
    assert.ok(
      getConnectedIds(circuit, port.source_port_id).has(
        referencePort.source_port_id,
      ),
      `MCU.${portName} must connect to VREF_3V3`,
    );
  }
  const mcuGround = circuit.db.source_port.getWhere({ name: "GND" });
  assert.ok(mcuGround, "MCU.GND");
  const groundNet = circuit.db.source_net.getWhere({ name: "GND" });
  assert.ok(groundNet);
  assert.ok(
    getConnectedIds(circuit, mcuGround.source_port_id).has(
      groundNet.source_net_id,
    ),
    "MCU.GND must connect to GND",
  );
});
