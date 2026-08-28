import { Circuit } from "@tscircuit/core";
import type { AnyCircuitElement } from "circuit-json";
import { getFullConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map";
import { MSP430FR6007IPZ_PIN_LABELS } from "../lib/chips/MSP430FR6007IPZ.circuit.tsx";
import { Microcontroller_MSP430FR6007 } from "../lib/subcircuits/Microcontroller_MSP430FR6007.circuit.tsx";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const renderMcu = async () => {
  const circuit = new Circuit();
  circuit.add(<Microcontroller_MSP430FR6007 name="MCU" />);
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

const testConnectivity = async () => {
  const circuitJson = await renderMcu();
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
  }

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
    "J3_PIN16_BSL_TX",
    "J3_PIN17_BSL_RX",
    "J3_PIN20_TEST_SBWTCK",
    "J3_PIN21_RESET_SBWTDIO",
    "J3_PIN22_TDO",
    "J3_PIN23_TDI",
    "J3_PIN24_TMS",
    "J3_PIN25_TCK",
    "J4_PIN1_GND",
    "J4_PIN2_DVCC",
    "J5_PIN1_GND",
    "J5_PIN2_DVCC",
    "J5_PIN25_GND",
    "J6_PIN1_DVCC",
    "J6_PIN12_PVSS",
    "J6_PIN13_PVCC",
    "J6_PIN14_PVSS",
    "J6_PIN21_AVSS",
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
  assert(sheets.length === 1, "Expected exactly one schematic sheet");
  const targetBoardSheet = sheets.find(
    (sheet) =>
      sheet.type === "schematic_sheet" &&
      sheet.name === "msp430fr6007_target_board",
  );
  assert(
    targetBoardSheet?.type === "schematic_sheet",
    "Missing MSP430FR6007 target-board sheet",
  );

  for (const component of circuitJson) {
    if (component.type !== "schematic_component") continue;

    assert(
      component.schematic_sheet_id === targetBoardSheet.schematic_sheet_id,
      `${component.schematic_component_id} is not on the common target-board sheet`,
    );
  }

  for (const connectorName of ["J3", "J4", "J5", "J6"]) {
    const connector = findSourceComponent(circuitJson, connectorName);
    assert(
      "manufacturer_part_number" in connector &&
        connector.manufacturer_part_number === "TSW-125-07-G-S",
      `${connectorName} does not preserve the TI source part number`,
    );
  }

  const icCenter = findSchematicCenter(circuitJson, "IC1");
  assert(findSchematicCenter(circuitJson, "J3").x < icCenter.x, "J3 left");
  assert(findSchematicCenter(circuitJson, "J4").y < icCenter.y, "J4 below");
  assert(findSchematicCenter(circuitJson, "J5").x > icCenter.x, "J5 right");
  assert(findSchematicCenter(circuitJson, "J6").y > icCenter.y, "J6 above");

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
  for (const trace of circuitJson) {
    if (
      trace.type !== "schematic_trace" ||
      trace.schematic_sheet_id !== targetBoardSheet.schematic_sheet_id
    ) {
      continue;
    }

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
  }
  assert(
    directSocketTraceCount === 100,
    `Expected 100 direct IC1-to-socket traces, got ${directSocketTraceCount}`,
  );

  assertSameNet(["IC1", 100], ["C3", 1], ["C11", 1]);
  assertSameNet(["IC1", 88], ["C16", 1], ["C13", 1]);
  assertSameNet(["IC1", 21], ["R7", 2], ["C5", 1], ["SW2", 1], ["JTAG", 11]);
  assertSameNet(["IC1", 20], ["JTAG", 8]);
  assertSameNet(["IC1", 22], ["JTAG", 1]);
  assertSameNet(["IC1", 23], ["JTAG", 3]);
  assertSameNet(["IC1", 24], ["JTAG", 5]);
  assertSameNet(["IC1", 25], ["JTAG", 7]);
  assertSameNet(["IC1", 16], ["R20", 1]);
  assertSameNet(["R20", 2], ["JTAG", 12]);
  assertSameNet(["IC1", 17], ["R19", 1]);
  assertSameNet(["R19", 2], ["JTAG", 14]);

  const criticalPortEndpoints = {
    AVCC: ["IC1", 100],
    DVCC: ["IC1", 27],
    PVCC: ["IC1", 88],
    GND: ["IC1", 26],
    RESET: ["IC1", 21],
    BSL_TX: ["IC1", 16],
    BSL_RX: ["IC1", 17],
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
  assertSameNet(["IC1", 87], ["R11", 1]);
  assertSameNet(["IC1", 26], ["R11", 2], ["R12", 1]);
  assertSameNet(["IC1", 5], ["R12", 2]);

  assert(
    circuitJson.every(
      (element) => !element.type.endsWith("_trace_not_connected_error"),
    ),
    "Rendered circuit contains a trace-not-connected error",
  );
};

testPinMap();
await testConnectivity();
console.log("MSP430FR6007 pin-map and connectivity checks passed");
