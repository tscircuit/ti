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
