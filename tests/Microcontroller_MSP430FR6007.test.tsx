import { getSchematicElementBounds } from "@tscircuit/circuit-json-util";
import { Circuit } from "@tscircuit/core";
import type { AnyCircuitElement } from "circuit-json";
import { getFullConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map";
import { MSP430FR6007IPZ_PIN_LABELS } from "../lib/chips/MSP430FR6007IPZ.circuit.tsx";
import { Microcontroller_MSP430FR6007 } from "../lib/subcircuits/Microcontroller_MSP430FR6007.circuit.tsx";
import { Microcontroller_MSP430FR6007_MultiSheet } from "../lib/subcircuits/Microcontroller_MSP430FR6007_MultiSheet.circuit.tsx";

type LayoutVariant = "single-sheet" | "multi-sheet";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const renderMcu = async (layoutVariant: LayoutVariant) => {
  const circuit = new Circuit();
  const Component =
    layoutVariant === "single-sheet"
      ? Microcontroller_MSP430FR6007
      : Microcontroller_MSP430FR6007_MultiSheet;
  circuit.add(<Component name="MCU" />);
  await circuit.renderUntilSettled();
  return circuit.getCircuitJson();
};

const findSourceComponent = (
  circuitJson: AnyCircuitElement[],
  name: string,
) => {
  const component = circuitJson.find(
    (element) => "name" in element && element.name === name,
  );

  assert(component, `Missing source component ${name}`);
  assert(
    "source_component_id" in component,
    `${name} is not a source component`,
  );
  return component;
};

const findSourcePort = (
  circuitJson: AnyCircuitElement[],
  componentName: string,
  pinNumber: number,
) => {
  const component = findSourceComponent(circuitJson, componentName);
  const port = circuitJson.find(
    (element) =>
      element.type === "source_port" &&
      element.source_component_id === component.source_component_id &&
      element.pin_number === pinNumber,
  );

  assert(
    port?.type === "source_port",
    `Missing ${componentName}.pin${pinNumber}`,
  );
  return port;
};

const findSubcircuitPort = (circuitJson: AnyCircuitElement[], name: string) => {
  const port = circuitJson.find(
    (element) =>
      element.type === "source_port" &&
      element.source_component_id === null &&
      element.name === name,
  );

  assert(port?.type === "source_port", `Missing subcircuit port ${name}`);
  return port;
};

const findSchematicComponent = (
  circuitJson: AnyCircuitElement[],
  componentName: string,
) => {
  const component = findSourceComponent(circuitJson, componentName);
  const schematicComponent = circuitJson.find(
    (element) =>
      element.type === "schematic_component" &&
      element.source_component_id === component.source_component_id,
  );

  assert(
    schematicComponent?.type === "schematic_component",
    `Missing schematic component ${componentName}`,
  );
  return schematicComponent;
};

const findSchematicCenter = (
  circuitJson: AnyCircuitElement[],
  componentName: string,
) => findSchematicComponent(circuitJson, componentName).center;

const findSchematicPortCenter = (
  circuitJson: AnyCircuitElement[],
  componentName: string,
  pinNumber: number,
) => {
  const sourcePort = findSourcePort(circuitJson, componentName, pinNumber);
  const schematicPort = circuitJson.find(
    (element) =>
      element.type === "schematic_port" &&
      element.source_port_id === sourcePort.source_port_id,
  );

  assert(
    schematicPort?.type === "schematic_port",
    `Missing schematic port ${componentName}.pin${pinNumber}`,
  );
  return schematicPort.center;
};

const coordinateKey = ({ x, y }: { x: number; y: number }) =>
  `${x.toFixed(9)},${y.toFixed(9)}`;

const testPinMap = () => {
  assert(
    Object.keys(MSP430FR6007IPZ_PIN_LABELS).length === 100,
    "The PZ package must define all 100 pins",
  );
  assert(MSP430FR6007IPZ_PIN_LABELS.pin16.includes("BSLTX"), "pin16 BSLTX");
  assert(MSP430FR6007IPZ_PIN_LABELS.pin17.includes("BSLRX"), "pin17 BSLRX");
  assert(MSP430FR6007IPZ_PIN_LABELS.pin20.includes("SBWTCK"), "pin20 SBWTCK");
  assert(MSP430FR6007IPZ_PIN_LABELS.pin21.includes("SBWTDIO"), "pin21 SBWTDIO");
  assert(MSP430FR6007IPZ_PIN_LABELS.pin88 === "PVCC", "pin88 PVCC");
  assert(MSP430FR6007IPZ_PIN_LABELS.pin100.includes("AVCC"), "pin100 AVCC");
};

const testConnectivity = async (layoutVariant: LayoutVariant) => {
  const circuitJson = await renderMcu(layoutVariant);
  const connectivityMap = getFullConnectivityMapFromCircuitJson(circuitJson);
  const sourcePortsById = new Map(
    circuitJson
      .filter((element) => element.type === "source_port")
      .map((port) => [port.source_port_id, port]),
  );

  for (const trace of circuitJson) {
    if (trace.type !== "source_trace") continue;

    const touchesComponent = trace.connected_source_port_ids.some(
      (portId) => sourcePortsById.get(portId)?.source_component_id !== null,
    );
    assert(
      !touchesComponent || Boolean(trace.name),
      `${trace.source_trace_id} touches a component but has no native trace name`,
    );
    assert(
      !touchesComponent || Boolean(trace.display_name),
      `${trace.name ?? trace.source_trace_id} touches a component but has no schDisplayLabel trace name`,
    );
  }

  const emptyNetLabels = circuitJson.filter(
    (element) =>
      element.type === "schematic_net_label" && element.text.trim() === "",
  );
  assert(
    emptyNetLabels.length === 0,
    `${layoutVariant} renders ${emptyNetLabels.length} empty net-label bodies`,
  );

  for (const traceName of [
    "C3_AVCC",
    "R7_DVCC",
    "C16_PVCC",
    "C13_PVSS",
    "C5_RESET_SBWTDIO",
  ]) {
    assert(
      circuitJson.some(
        (element) =>
          element.type === "source_trace" && element.name === traceName,
      ),
      `Missing native on-trace name ${traceName}`,
    );
  }

  for (const traceName of [
    "J3_PIN5_AVSS",
    "J3_PIN6_LFXIN",
    "J3_PIN7_LFXOUT",
    "J3_PIN8_AVSS",
    "J3_PIN9_HFXIN",
    "J3_PIN10_HFXOUT",
    "J3_PIN11_AVSS",
    "J3_PIN3_P1_0",
    "J3_PIN4_P1_1",
    "J3_PIN14_BSL_SDA",
    "J3_PIN15_BSL_SCL",
    "J3_PIN16_BSL_TX",
    "J3_PIN17_BSL_RX",
    "J3_PIN19_P1_3",
    "J3_PIN20_TEST_SBWTCK",
    "J3_PIN21_RESET",
    "J3_PIN22_TDO",
    "J3_PIN23_TDI",
    "J3_PIN24_TMS",
    "J3_PIN25_TCK",
    "J4_PIN1_DVSS",
    "J4_PIN2_DVCC",
    "J5_PIN1_DVSS",
    "J5_PIN2_DVCC",
    "J5_PIN25_DVSS",
    "J5_PIN24_LCDCAP",
    "J6_PIN1_DVCC",
    "J6_PIN10_CH1_IN",
    "J6_PIN12_PVSS",
    "J6_PIN13_PVCC",
    "J6_PIN14_PVSS",
    "J6_PIN16_CH0_IN",
    "J6_PIN21_AVSS",
    "J6_PIN22_USSXTIN",
    "J6_PIN23_USSXTOUT",
    "J6_PIN24_AVSS",
    "J6_PIN25_AVCC",
  ]) {
    assert(
      circuitJson.some(
        (element) =>
          element.type === "source_trace" && element.name === traceName,
      ),
      `Missing target-socket on-trace net name ${traceName}`,
    );
  }

  const sheets = circuitJson.filter(
    (element) => element.type === "schematic_sheet",
  );
  const expectedSheetNames =
    layoutVariant === "single-sheet"
      ? (["reference_full"] as const)
      : ([
          "mcu_socket",
          "programming_debug",
          "power_user",
          "clocks_channels",
        ] as const);
  assert(
    sheets.length === expectedSheetNames.length,
    `${layoutVariant}: expected ${expectedSheetNames.length} native sheets, got ${sheets.length}`,
  );
  for (const [sheetIndex, sheetName] of expectedSheetNames.entries()) {
    const sheet = sheets.find((candidate) => candidate.name === sheetName);
    assert(sheet, `Missing native schematic sheet ${sheetName}`);
    assert(
      sheet.sheet_index === sheetIndex,
      `${sheetName} has sheet index ${sheet.sheet_index}, expected ${sheetIndex}`,
    );
  }

  const sheetIdByName = new Map(
    sheets.map((sheet) => [sheet.name, sheet.schematic_sheet_id]),
  );
  const componentsBySheet = {
    mcu_socket: ["IC1", "J3", "J4", "J5", "J6"],
    programming_debug: [
      "BSL",
      "C5",
      "JTAG",
      "JP5",
      "JP6",
      "JP7",
      "JP8",
      "JP9",
      "JP10",
      "SH-JP5",
      "SH-JP6",
      "SH-JP7",
      "SH-JP8",
      "SH-JP9",
      "SH-JP10",
      "R3",
      "R4",
      "R7",
      "R16",
      "R17",
      "R19",
      "R20",
      "R21",
      "SW2",
      "SW3",
      "SW4",
      "SW5",
      "TP1",
      "TP2",
      "TP3",
      "TP4",
    ],
    power_user: [
      "C3",
      "C4",
      "C6",
      "C7",
      "C10",
      "C11",
      "C13",
      "C16",
      "D1",
      "D2",
      "J1",
      "J2",
      "JP1",
      "JP2",
      "JP3",
      "JP4",
      "JP11",
      "JP12",
      "R1",
      "R2",
      "R10",
      "R11",
      "R12",
      "R13",
      "SW1",
      "TP5",
      "TP6",
      "SH-J1",
      "SH-JP1",
      "SH-JP2",
      "SH-JP3",
      "SH-JP4",
      "SH-JP11",
      "SH-JP12",
    ],
    clocks_channels: [
      "C1",
      "C2",
      "C8",
      "C9",
      "C12",
      "C14",
      "C15",
      "JP13",
      "JP14",
      "Q1",
      "Q2",
      "Q3",
      "R5",
      "R6",
      "R8",
      "R9",
      "R14",
      "R15",
      "R18",
      "R22",
      "SH-JP13",
      "SH-JP14",
    ],
  } as const;

  if (layoutVariant === "multi-sheet") {
    for (const [sheetName, componentNames] of Object.entries(
      componentsBySheet,
    )) {
      const expectedSheetId = sheetIdByName.get(sheetName);
      assert(expectedSheetId, `Missing sheet id for ${sheetName}`);
      for (const componentName of componentNames) {
        const component = findSchematicComponent(circuitJson, componentName);
        assert(
          component.schematic_sheet_id === expectedSheetId,
          `${componentName} is not on ${sheetName}`,
        );
      }
    }
  } else {
    const fullSheetId = sheetIdByName.get("reference_full");
    assert(fullSheetId, "Missing full reference sheet id");
    for (const componentNames of Object.values(componentsBySheet)) {
      for (const componentName of componentNames) {
        const component = findSchematicComponent(circuitJson, componentName);
        assert(
          component.schematic_sheet_id === fullSheetId,
          `${componentName} is not on the full reference sheet`,
        );
      }
    }
  }

  for (const connectorName of ["J3", "J4", "J5", "J6"]) {
    const connector = findSourceComponent(circuitJson, connectorName);
    assert(
      "manufacturer_part_number" in connector &&
        connector.manufacturer_part_number === "TSW-125-07-G-S",
      `${connectorName} does not preserve the TI source part number`,
    );
  }

  const figureB78ComponentNames = [
    "IC1",
    "J1",
    "J2",
    "J3",
    "J4",
    "J5",
    "J6",
    "JTAG",
    "BSL",
    "JP1",
    "JP2",
    "JP3",
    "JP4",
    "JP5",
    "JP6",
    "JP7",
    "JP8",
    "JP9",
    "JP10",
    "JP11",
    "JP12",
    "JP13",
    "JP14",
    "SW1",
    "SW2",
    "SW3",
    "SW4",
    "SW5",
    "Q1",
    "Q2",
    "Q3",
    "D1",
    "D2",
    "TP1",
    "TP2",
    "TP3",
    "TP4",
    "TP5",
    "TP6",
    ...Array.from({ length: 16 }, (_, index) => `C${index + 1}`),
    ...Array.from({ length: 22 }, (_, index) => `R${index + 1}`),
    "SH-J1",
    ...Array.from({ length: 14 }, (_, index) => `SH-JP${index + 1}`),
  ];

  for (const componentName of figureB78ComponentNames) {
    findSourceComponent(circuitJson, componentName);
  }

  const installedShuntRefdesByHeader = {
    J1: "SH-J1",
    JP1: "SH-JP1",
    JP2: "SH-JP2",
    JP3: "SH-JP3",
    JP4: "SH-JP4",
    JP5: "SH-JP5",
    JP6: "SH-JP6",
    JP7: "SH-JP7",
    JP8: "SH-JP8",
    JP9: "SH-JP9",
    JP10: "SH-JP10",
    JP11: "SH-JP11",
    JP12: "SH-JP12",
    JP13: "SH-JP13",
    JP14: "SH-JP14",
  } as const;
  const installedShuntPinsByHeader = {
    J1: [1, 2],
    JP1: [1, 2],
    JP2: [1, 2],
    JP3: [1, 2],
    JP4: [1, 2],
    JP5: [2, 3],
    JP6: [2, 3],
    JP7: [2, 3],
    JP8: [2, 3],
    JP9: [2, 3],
    JP10: [2, 3],
    JP11: [1, 2],
    JP12: [1, 2],
    JP13: [1, 2],
    JP14: [1, 2],
  } as const;
  for (const [headerName, shuntRefdes] of Object.entries(
    installedShuntRefdesByHeader,
  )) {
    const header = findSourceComponent(circuitJson, headerName);
    const shunt = findSourceComponent(circuitJson, shuntRefdes);
    assert(
      "manufacturer_part_number" in shunt &&
        shunt.manufacturer_part_number === "3M9580-ND",
      `${shuntRefdes} does not preserve the TI shunt part number`,
    );
    assert(
      !("display_name" in header) ||
        !header.display_name?.includes(shuntRefdes),
      `${headerName} must remain separate from ${shuntRefdes}`,
    );
    const shuntPin1 = findSourcePort(circuitJson, shuntRefdes, 1);
    const shuntPin2 = findSourcePort(circuitJson, shuntRefdes, 2);
    assert(
      connectivityMap.getNetConnectedToId(shuntPin1.source_port_id) ===
        connectivityMap.getNetConnectedToId(shuntPin2.source_port_id),
      `${shuntRefdes} is not internally bridged`,
    );
    const selectedHeaderPins =
      installedShuntPinsByHeader[
        headerName as keyof typeof installedShuntPinsByHeader
      ];
    const selectedHeaderPin1 = findSourcePort(
      circuitJson,
      headerName,
      selectedHeaderPins[0],
    );
    const selectedHeaderPin2 = findSourcePort(
      circuitJson,
      headerName,
      selectedHeaderPins[1],
    );
    assert(
      connectivityMap.getNetConnectedToId(selectedHeaderPin1.source_port_id) ===
        connectivityMap.getNetConnectedToId(selectedHeaderPin2.source_port_id),
      `${headerName}.pin${selectedHeaderPins[0]} and ${headerName}.pin${selectedHeaderPins[1]} do not preserve the Figure B-79 installed-shunt state`,
    );
    assert(
      connectivityMap.getNetConnectedToId(selectedHeaderPin1.source_port_id) !==
        connectivityMap.getNetConnectedToId(shuntPin1.source_port_id),
      `${shuntRefdes} must remain the separate Figure B-78 assembly block rather than creating an artificial schematic wire to ${headerName}`,
    );
  }

  for (const [componentName, pinNumbers] of [
    ["JTAG", [6, 13]],
    ["BSL", [5, 10]],
  ] as const) {
    for (const pinNumber of pinNumbers) {
      assert(
        findSourcePort(circuitJson, componentName, pinNumber).do_not_connect,
        `${componentName}.pin${pinNumber} must preserve the Figure B-78 no-connect`,
      );
    }
  }

  const physicalSourceComponentNames = circuitJson
    .filter((element) => element.type === "source_component")
    .map((element) => element.name)
    .sort();
  assert(
    physicalSourceComponentNames.length === 92,
    `Expected the 92 Figure B-78 physical components, got ${physicalSourceComponentNames.length}: ${physicalSourceComponentNames.join(", ")}`,
  );
  assert(
    [...figureB78ComponentNames]
      .sort()
      .every((name, index) => physicalSourceComponentNames[index] === name),
    "The rendered component inventory does not exactly match Figure B-78 and Table B-40",
  );

  const schematicBodiesAndLabels = circuitJson.filter(
    (element) =>
      element.type === "schematic_component" ||
      element.type === "schematic_net_label",
  );
  const schematicElementName = (element: AnyCircuitElement) => {
    if ("source_component_id" in element) {
      const sourceComponent = circuitJson.find(
        (candidate) =>
          candidate.type === "source_component" &&
          candidate.source_component_id === element.source_component_id,
      );
      if (sourceComponent && "name" in sourceComponent) {
        return sourceComponent.name;
      }
    }
    if ("text" in element) return element.text;
    return element.type;
  };
  for (
    let firstIndex = 0;
    firstIndex < schematicBodiesAndLabels.length;
    firstIndex += 1
  ) {
    const first = schematicBodiesAndLabels[firstIndex];
    const firstBounds = getSchematicElementBounds(first);
    if (!firstBounds) continue;

    for (
      let secondIndex = firstIndex + 1;
      secondIndex < schematicBodiesAndLabels.length;
      secondIndex += 1
    ) {
      const second = schematicBodiesAndLabels[secondIndex];
      if (first.schematic_sheet_id !== second.schematic_sheet_id) continue;
      const secondBounds = getSchematicElementBounds(second);
      if (!secondBounds) continue;
      const overlapX =
        Math.min(firstBounds.maxX, secondBounds.maxX) -
        Math.max(firstBounds.minX, secondBounds.minX);
      const overlapY =
        Math.min(firstBounds.maxY, secondBounds.maxY) -
        Math.max(firstBounds.minY, secondBounds.minY);

      assert(
        overlapX <= 0.05 || overlapY <= 0.05,
        `${first.type} ${schematicElementName(first)} overlaps ${second.type} ${schematicElementName(second)} on ${first.schematic_sheet_id}`,
      );
    }
  }

  const expectedCapacitances = {
    C1: 12e-12,
    C2: 12e-12,
    C3: 1e-6,
    C4: 0.1e-6,
    C5: 1100e-12,
    C6: 0.1e-6,
    C7: 1e-6,
    C8: 22e-12,
    C9: 22e-12,
    C10: 0.1e-6,
    C11: 0.1e-6,
    C12: 4.7e-6,
    // Figure B-78 values are authoritative for the replicated schematic;
    // Table B-40 conflicts on C13 and C16.
    C13: 0.1e-6,
    C14: 27e-12,
    C15: 27e-12,
    C16: 1e-6,
  } as const;
  for (const [name, capacitance] of Object.entries(expectedCapacitances)) {
    const component = findSourceComponent(circuitJson, name);
    assert(
      "capacitance" in component && component.capacitance === capacitance,
      `${name} does not match the Figure B-78 capacitance`,
    );
  }

  const expectedResistances = {
    R1: 330,
    R2: 200,
    R3: 0,
    R4: 0,
    R5: 0,
    R6: 0,
    R7: 47_000,
    R8: 0,
    R9: 0,
    R10: 0,
    R11: 0,
    R12: 0,
    R13: 47_000,
    R14: 0,
    R15: 0,
    R16: 4_700,
    R17: 4_700,
    R18: 0,
    R19: 0,
    R20: 0,
    R21: 0,
    R22: 22,
  } as const;
  for (const [name, resistance] of Object.entries(expectedResistances)) {
    const component = findSourceComponent(circuitJson, name);
    assert(
      "resistance" in component && component.resistance === resistance,
      `${name} does not match the Figure B-78 resistance`,
    );
  }

  const jtagBody = findSchematicComponent(circuitJson, "JTAG");
  const bslBody = findSchematicComponent(circuitJson, "BSL");
  assert(
    Math.abs(jtagBody.size.width / jtagBody.size.height - 0.643) < 0.02,
    "JTAG body must preserve the shortened Figure B-78 connector shape",
  );
  assert(
    jtagBody.size.height <= 2.8,
    "JTAG body is taller than the compact native reference geometry",
  );
  assert(
    Math.abs(bslBody.size.width / bslBody.size.height - 0.64) < 0.02,
    "BSL body must preserve the Figure B-78 aspect ratio",
  );

  const icCenter = findSchematicCenter(circuitJson, "IC1");
  assert(findSchematicCenter(circuitJson, "J3").x < icCenter.x, "J3 left");
  assert(findSchematicCenter(circuitJson, "J4").y < icCenter.y, "J4 below");
  assert(findSchematicCenter(circuitJson, "J5").x > icCenter.x, "J5 right");
  assert(findSchematicCenter(circuitJson, "J6").y > icCenter.y, "J6 above");

  if (layoutVariant === "single-sheet") {
    const jtagCenter = findSchematicCenter(circuitJson, "JTAG");
    const bslCenter = findSchematicCenter(circuitJson, "BSL");
    const powerCenter = findSchematicCenter(circuitJson, "J1");
    const userCenter = findSchematicCenter(circuitJson, "SW1");
    const channelCenter = findSchematicCenter(circuitJson, "JP13");
    assert(jtagCenter.x < icCenter.x, "Figure B-78 places JTAG left of IC1");
    assert(jtagCenter.y > icCenter.y, "Figure B-78 places JTAG above IC1");
    assert(bslCenter.y > icCenter.y, "Figure B-78 places BSL above IC1");
    assert(powerCenter.x < icCenter.x, "Figure B-78 places power left of IC1");
    assert(userCenter.x < icCenter.x, "Figure B-78 places SW1 left of IC1");
    assert(userCenter.y < icCenter.y, "Figure B-78 places SW1 below IC1");
    assert(
      channelCenter.x > icCenter.x,
      "Figure B-78 places channel headers right of IC1",
    );

    for (const [upper, lower] of [
      ["J1", "JP1"],
      ["JP1", "JP2"],
      ["JP2", "JP3"],
      ["JP3", "JP4"],
    ] as const) {
      assert(
        findSchematicCenter(circuitJson, upper).y >
          findSchematicCenter(circuitJson, lower).y,
        `Figure B-78 places ${upper} above ${lower}`,
      );
    }
    for (const [left, right] of [
      ["JP9", "JP10"],
      ["JP10", "JP5"],
      ["JP5", "JP6"],
      ["JP6", "JP7"],
      ["JP7", "JP8"],
    ] as const) {
      assert(
        findSchematicCenter(circuitJson, left).x <
          findSchematicCenter(circuitJson, right).x,
        `Figure B-78 places ${left} left of ${right}`,
      );
    }
  }

  const socketCenters = Object.fromEntries(
    ["J3", "J4", "J5", "J6"].map((name) => [
      name,
      findSchematicCenter(circuitJson, name),
    ]),
  );

  const netKey = (componentName: string, pinNumber: number) =>
    connectivityMap.getNetConnectedToId(
      findSourcePort(circuitJson, componentName, pinNumber).source_port_id,
    );

  const portNetKey = (name: string) =>
    connectivityMap.getNetConnectedToId(
      findSubcircuitPort(circuitJson, name).source_port_id,
    );

  const assertSameNet = (
    first: [string, number],
    ...rest: Array<[string, number]>
  ) => {
    const expected = netKey(...first);
    assert(expected, `${first[0]}.pin${first[1]} has no connected net`);
    for (const endpoint of rest) {
      assert(
        netKey(...endpoint) === expected,
        `${endpoint[0]}.pin${endpoint[1]} is not connected to ${first[0]}.pin${first[1]}`,
      );
    }
  };

  const assertDirectTrace = (
    traceName: string,
    first: [string, number],
    second: [string, number],
  ) => {
    const firstPort = findSourcePort(circuitJson, ...first);
    const secondPort = findSourcePort(circuitJson, ...second);
    const trace = circuitJson.find(
      (element) =>
        element.type === "source_trace" && element.name === traceName,
    );
    assert(trace?.type === "source_trace", `Missing direct trace ${traceName}`);
    assert(
      trace.connected_source_port_ids.length === 2 &&
        trace.connected_source_port_ids.includes(firstPort.source_port_id) &&
        trace.connected_source_port_ids.includes(secondPort.source_port_id),
      `${traceName} does not directly connect ${first[0]}.pin${first[1]} to ${second[0]}.pin${second[1]}`,
    );
    assert(
      (() => {
        const firstCenter = findSchematicPortCenter(circuitJson, ...first);
        const secondCenter = findSchematicPortCenter(circuitJson, ...second);
        const matchesCenter = (
          point: { x: number; y: number },
          center: { x: number; y: number },
        ) =>
          Math.abs(point.x - center.x) < 1e-6 &&
          Math.abs(point.y - center.y) < 1e-6;

        const points = circuitJson
          .filter(
            (element) =>
              element.type === "schematic_trace" &&
              element.subcircuit_connectivity_map_key ===
                trace.subcircuit_connectivity_map_key,
          )
          .flatMap((element) =>
            element.type === "schematic_trace"
              ? element.edges.flatMap(({ from, to }) => [from, to])
              : [],
          );
        return (
          points.some((point) => matchesCenter(point, firstCenter)) &&
          points.some((point) => matchesCenter(point, secondCenter))
        );
      })(),
      `${traceName} has no rendered native schematic route`,
    );
  };

  const connectorNames = ["J3", "J4", "J5", "J6"] as const;
  const socketPortEndpointsByPosition = new Map<
    string,
    Array<{ componentName: string; pinNumber: number }>
  >();

  for (let mcuPin = 1; mcuPin <= 100; mcuPin += 1) {
    const connectorName = connectorNames[Math.floor((mcuPin - 1) / 25)];
    const connectorPin = ((mcuPin - 1) % 25) + 1;
    assertSameNet(["IC1", mcuPin], [connectorName, connectorPin]);

    const mcuPortCenter = findSchematicPortCenter(circuitJson, "IC1", mcuPin);
    const socketPortCenter = findSchematicPortCenter(
      circuitJson,
      connectorName,
      connectorPin,
    );
    const socketCenter = socketCenters[connectorName];
    assert(socketCenter, `Missing ${connectorName} center`);

    for (const endpoint of [
      { componentName: "IC1", pinNumber: mcuPin, center: mcuPortCenter },
      {
        componentName: connectorName,
        pinNumber: connectorPin,
        center: socketPortCenter,
      },
    ]) {
      const key = coordinateKey(endpoint.center);
      const endpointsAtPosition = socketPortEndpointsByPosition.get(key) ?? [];
      endpointsAtPosition.push(endpoint);
      socketPortEndpointsByPosition.set(key, endpointsAtPosition);
    }

    if (connectorName === "J3" || connectorName === "J5") {
      assert(
        Math.abs(socketPortCenter.y - mcuPortCenter.y) < 1e-9,
        `${connectorName}.pin${connectorPin} is not aligned with IC1.pin${mcuPin}`,
      );
      assert(
        Math.abs(socketPortCenter.x - icCenter.x) <
          Math.abs(socketCenter.x - icCenter.x),
        `${connectorName}.pin${connectorPin} faces away from IC1`,
      );
    } else {
      assert(
        Math.abs(socketPortCenter.x - mcuPortCenter.x) < 1e-9,
        `${connectorName}.pin${connectorPin} is not aligned with IC1.pin${mcuPin}`,
      );
      assert(
        Math.abs(socketPortCenter.y - icCenter.y) <
          Math.abs(socketCenter.y - icCenter.y),
        `${connectorName}.pin${connectorPin} faces away from IC1`,
      );
    }
  }

  let directSocketTraceCount = 0;
  const directSocketMcuPins = new Set<number>();
  const mcuSocketSheetId = sheetIdByName.get(
    layoutVariant === "single-sheet" ? "reference_full" : "mcu_socket",
  );
  assert(mcuSocketSheetId, "Missing MCU socket sheet id");
  for (const trace of circuitJson) {
    if (trace.type !== "schematic_trace") continue;
    if (trace.schematic_sheet_id !== mcuSocketSheetId) continue;

    const touchedEndpoints = new Map<
      string,
      { componentName: string; pinNumber: number }
    >();
    for (const edge of trace.edges) {
      for (const point of [edge.from, edge.to]) {
        for (const endpoint of socketPortEndpointsByPosition.get(
          coordinateKey(point),
        ) ?? []) {
          touchedEndpoints.set(
            `${endpoint.componentName}.pin${endpoint.pinNumber}`,
            endpoint,
          );
        }
      }
    }

    if (touchedEndpoints.size < 2) continue;
    assert(
      touchedEndpoints.size === 2,
      `${trace.schematic_trace_id} joins more than one socket pair`,
    );

    const endpoints = [...touchedEndpoints.values()];
    const mcuEndpoint = endpoints.find(
      (endpoint) => endpoint.componentName === "IC1",
    );
    const connectorEndpoint = endpoints.find((endpoint) =>
      connectorNames.includes(
        endpoint.componentName as (typeof connectorNames)[number],
      ),
    );
    assert(
      mcuEndpoint && connectorEndpoint,
      `${trace.schematic_trace_id} connects two pins on the same component`,
    );

    const expectedConnector =
      connectorNames[Math.floor((mcuEndpoint.pinNumber - 1) / 25)];
    const expectedConnectorPin = ((mcuEndpoint.pinNumber - 1) % 25) + 1;
    assert(
      connectorEndpoint.componentName === expectedConnector &&
        connectorEndpoint.pinNumber === expectedConnectorPin,
      `${trace.schematic_trace_id} does not preserve the IC1-to-socket pin map`,
    );
    directSocketTraceCount += 1;
    directSocketMcuPins.add(mcuEndpoint.pinNumber);
  }
  const missingDirectSocketPins = Array.from(
    { length: 100 },
    (_, index) => index + 1,
  ).filter((pin) => !directSocketMcuPins.has(pin));
  assert(
    directSocketTraceCount === 100,
    `Expected 100 direct IC1-to-socket traces, got ${directSocketTraceCount}; missing IC1 pins ${missingDirectSocketPins.join(", ")}`,
  );

  assertSameNet(["IC1", 100], ["C3", 1], ["C11", 1]);
  assertSameNet(["IC1", 88], ["C16", 1], ["C13", 1]);
  assertSameNet(
    ["IC1", 21],
    ["R7", 2],
    ["C5", 1],
    ["SW2", 1],
    ["JP10", 2],
    ["BSL", 4],
  );
  assertSameNet(["IC1", 20], ["JP9", 2], ["BSL", 7]);
  assertSameNet(["IC1", 22], ["JP5", 2]);
  assertSameNet(["IC1", 23], ["JP6", 2]);
  assertSameNet(["IC1", 24], ["JP7", 2]);
  assertSameNet(["IC1", 25], ["JP8", 2]);
  assertSameNet(["JTAG", 1], ["JP5", 3], ["JP10", 1]);
  assertSameNet(["JTAG", 3], ["JP6", 3]);
  assertSameNet(["JTAG", 5], ["JP7", 3]);
  assertSameNet(["JTAG", 7], ["JP8", 3], ["JP9", 1]);
  assertSameNet(["JTAG", 8], ["JP9", 3]);
  assertSameNet(["JTAG", 11], ["JP10", 3]);
  assertSameNet(["IC1", 16], ["R20", 1]);
  assertSameNet(["R20", 2], ["JTAG", 12]);
  assertSameNet(["IC1", 17], ["R19", 1]);
  assertSameNet(["R19", 2], ["JTAG", 14]);
  assertSameNet(["IC1", 15], ["R21", 1]);
  assertSameNet(["R21", 2], ["JTAG", 10]);
  assertDirectTrace("R19_JTAG_BSL_RX", ["R19", 2], ["JTAG", 14]);
  assertDirectTrace("R20_JTAG_BSL_TX", ["R20", 2], ["JTAG", 12]);
  assertDirectTrace("R21_JTAG_BSL_SCL", ["R21", 2], ["JTAG", 10]);
  assertDirectTrace("BSL_PIN6_R3_PIN1_BSL_TOOL_VCC", ["BSL", 6], ["R3", 1]);
  assertDirectTrace("BSL_PIN8_R4_PIN1_BSL_TARGET_VCC", ["BSL", 8], ["R4", 1]);
  assertDirectTrace("D2_PIN2_R2_PIN1_LED2_A", ["D2", 2], ["R2", 1]);
  for (const [traceName, expectedLabel] of [
    ["R19_JTAG_BSL_RX", "BSL_RX"],
    ["R20_JTAG_BSL_TX", "BSL_TX"],
    ["R21_JTAG_BSL_SCL", "BSL_SCL"],
    ["BSL_PIN6_R3_PIN1_BSL_TOOL_VCC", "BSL_TOOL_VCC"],
    ["BSL_PIN8_R4_PIN1_BSL_TARGET_VCC", "BSL_TARGET_VCC"],
    ["D2_PIN2_R2_PIN1_LED2_A", "LED2_A"],
  ] as const) {
    const sourceTrace = circuitJson.find(
      (element) =>
        element.type === "source_trace" && element.name === traceName,
    );
    assert(sourceTrace?.type === "source_trace", `Missing ${traceName}`);
    assert(
      circuitJson.some(
        (element) =>
          element.type === "schematic_text" &&
          element.source_trace_id === sourceTrace.source_trace_id &&
          element.text === expectedLabel &&
          element.rotation === 0,
      ),
      `${traceName} must carry ${expectedLabel} above the resistor-to-JTAG trace`,
    );
  }
  for (const traceName of [
    "R19_PIN1_BSL_RX",
    "R20_PIN1_BSL_TX",
    "R21_PIN1_BSL_SCL",
  ]) {
    const sourceTrace = circuitJson.find(
      (element) =>
        element.type === "source_trace" && element.name === traceName,
    );
    assert(sourceTrace?.type === "source_trace", `Missing ${traceName}`);
    assert(
      !circuitJson.some(
        (element) =>
          element.type === "schematic_net_label" &&
          element.source_trace_id === sourceTrace.source_trace_id &&
          element.text.trim() !== "",
      ),
      `${traceName} must not use a free-standing net label outside R19-R21`,
    );
  }

  for (const [headerName, firstPin, secondPin] of [
    ["J1", 1, 2],
    ["JP1", 1, 2],
    ["JP2", 1, 2],
    ["JP3", 1, 2],
    ["JP4", 1, 2],
    ["JP5", 2, 3],
    ["JP6", 2, 3],
    ["JP7", 2, 3],
    ["JP8", 2, 3],
    ["JP9", 2, 3],
    ["JP10", 2, 3],
    ["JP11", 1, 2],
    ["JP12", 1, 2],
    ["JP13", 1, 2],
    ["JP14", 1, 2],
  ] as const) {
    assertSameNet([headerName, firstPin], [headerName, secondPin]);
  }
  assertSameNet(["IC1", 15], ["SW4", 1], ["R16", 2]);
  assertSameNet(["IC1", 14], ["SW4", 3], ["R17", 2]);
  assertSameNet(["BSL", 9], ["SW4", 2], ["TP1", 1]);
  assertSameNet(["BSL", 1], ["SW4", 4], ["SW5", 4], ["TP2", 1], ["TP4", 1]);
  assertSameNet(["IC1", 17], ["SW5", 1]);
  assertSameNet(["BSL", 3], ["SW5", 2], ["TP3", 1]);
  assertSameNet(["IC1", 16], ["SW5", 3]);
  assertSameNet(["BSL", 6], ["R3", 1]);
  assertSameNet(["BSL", 8], ["R4", 1]);
  assertSameNet(["R3", 2], ["R4", 2], ["J1", 2], ["J2", 1]);
  assertSameNet(["J1", 3], ["J2", 2]);
  assertSameNet(["J2", 3], ["BSL", 2], ["JTAG", 9]);
  assertSameNet(["IC1", 3], ["JP11", 2]);
  assertSameNet(["IC1", 4], ["JP12", 2]);
  assertSameNet(["IC1", 19], ["R13", 2], ["SW1", 1]);
  assertSameNet(["IC1", 74], ["R18", 1], ["C12", 1]);
  assertSameNet(["IC1", 85], ["JP13", 2]);
  assertSameNet(["IC1", 91], ["JP14", 2]);
  assertSameNet(["IC1", 97], ["Q3", 1], ["C14", 1], ["R14", 1]);
  assertSameNet(["IC1", 98], ["R22", 2], ["R15", 1]);
  assertSameNet(["Q3", 3], ["C15", 1], ["R22", 1]);

  const criticalPortEndpoints = {
    AVCC: ["IC1", 100],
    DVCC: ["IC1", 27],
    PVCC: ["IC1", 88],
    GND: ["R10", 1],
    DVSS: ["IC1", 26],
    RESET: ["IC1", 21],
    BSL_TX: ["IC1", 16],
    BSL_RX: ["IC1", 17],
    BSL_SDA: ["IC1", 14],
    BSL_SCL: ["IC1", 15],
    P1_0: ["IC1", 3],
    P1_1: ["IC1", 4],
    P1_3: ["IC1", 19],
    CH0_IN: ["IC1", 91],
    CH1_IN: ["IC1", 85],
    USSXTIN: ["IC1", 97],
    USSXTOUT: ["IC1", 98],
    LCDCAP: ["IC1", 74],
    TEST: ["IC1", 20],
    TDO: ["IC1", 22],
    TDI: ["IC1", 23],
    TMS: ["IC1", 24],
    TCK: ["IC1", 25],
  } as const;

  for (const [portName, [componentName, pinNumber]] of Object.entries(
    criticalPortEndpoints,
  )) {
    assert(
      portNetKey(portName) === netKey(componentName, pinNumber),
      `${portName} subcircuit port is not connected to ${componentName}.pin${pinNumber}`,
    );
  }

  for (const groundPin of [5, 8, 11, 96, 99]) {
    assert(
      netKey("IC1", groundPin) === netKey("C3", 2),
      `IC1.pin${groundPin} is not on AVSS`,
    );
  }
  for (const groundPin of [26, 51, 75]) {
    assert(
      netKey("IC1", groundPin) === netKey("C4", 2),
      `IC1.pin${groundPin} is not on DVSS/GND`,
    );
  }
  for (const groundPin of [87, 89]) {
    assert(
      netKey("IC1", groundPin) === netKey("C16", 2),
      `IC1.pin${groundPin} is not on PVSS`,
    );
  }
  assertSameNet(["IC1", 87], ["R11", 2]);
  assertSameNet(["R10", 1], ["R11", 1], ["R12", 1], ["TP6", 1]);
  assertSameNet(
    ["IC1", 26],
    ["R10", 2],
    ["C4", 2],
    ["C10", 2],
    ["C6", 2],
    ["C7", 2],
    ["TP5", 1],
  );
  assertSameNet(["IC1", 5], ["R12", 2]);

  assert(
    circuitJson.every(
      (element) => !element.type.endsWith("_trace_not_connected_error"),
    ),
    "Rendered circuit contains a trace-not-connected error",
  );
};

testPinMap();
await testConnectivity("single-sheet");
await testConnectivity("multi-sheet");
console.log(
  "MSP430FR6007 single-sheet and multi-sheet connectivity checks passed",
);
