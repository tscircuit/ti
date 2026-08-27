import { beforeAll, expect, test } from "bun:test";
import { Circuit } from "@tscircuit/core";
import type { AnyCircuitElement } from "circuit-json";
import {
  TIDA01421_ALTIUM_SCALE,
  tida01421Position,
} from "../tida01421-coordinates.ts";
import { PinchDetectionPower_TIDA01421 } from "./PinchDetectionPower_TIDA01421.circuit.tsx";
import {
  PinchDetectionSignalChain_TIDA01421,
  TIDA01421_SIGNAL_CHAIN_ORIGIN,
} from "./PinchDetectionSignalChain_TIDA01421.circuit.tsx";
import { PinchDetection_TIDA01421 } from "./PinchDetection_TIDA01421.circuit.tsx";

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>;
type SourcePort = Extract<AnyCircuitElement, { type: "source_port" }>;
type SourceTrace = Extract<AnyCircuitElement, { type: "source_trace" }>;

let signalJson: AnyCircuitElement[];
let powerJson: AnyCircuitElement[];
let compositeJson: AnyCircuitElement[];

const renderSchematic = async (element: React.ReactElement) => {
  const circuit = new Circuit({
    platform: { pcbDisabled: true, partsEngineDisabled: true },
  });
  circuit.add(element);
  await circuit.renderUntilSettled();
  return circuit.getCircuitJson();
};

beforeAll(async () => {
  const originalConsoleError = console.error;
  console.error = (...args: unknown[]) => {
    const isExpectedSchematicOnlyFootprintMessage = args.some((arg) =>
      String(arg).includes(
        'No footprint resolver is configured for library "kicad"',
      ),
    );
    if (!isExpectedSchematicOnlyFootprintMessage) originalConsoleError(...args);
  };
  try {
    [signalJson, powerJson, compositeJson] = await Promise.all([
      renderSchematic(<PinchDetectionSignalChain_TIDA01421 name="pinch" />),
      renderSchematic(<PinchDetectionPower_TIDA01421 name="power" />),
      renderSchematic(<PinchDetection_TIDA01421 name="pinchComposite" />),
    ]);
  } finally {
    console.error = originalConsoleError;
  }
}, 30_000);

const getComponent = (circuitJson: AnyCircuitElement[], name: string) => {
  const component = circuitJson.find(
    (element): element is SourceComponent =>
      element.type === "source_component" && element.name === name,
  );
  if (!component) throw new Error(`Missing source component ${name}`);
  return component;
};

const getConnectivityKey = (
  circuitJson: AnyCircuitElement[],
  componentName: string,
  pinNumber: number,
) => {
  const component = getComponent(circuitJson, componentName);
  const port = circuitJson.find(
    (element): element is SourcePort =>
      element.type === "source_port" &&
      element.source_component_id === component.source_component_id &&
      element.pin_number === pinNumber,
  );
  if (!port) throw new Error(`Missing ${componentName} pin ${pinNumber}`);
  if (!port.subcircuit_connectivity_map_key) {
    throw new Error(
      `Missing connectivity key for ${componentName}.${pinNumber}`,
    );
  }
  return port.subcircuit_connectivity_map_key;
};

const expectOneNet = (
  circuitJson: AnyCircuitElement[],
  pins: Array<[componentName: string, pinNumber: number]>,
) => {
  const keys = pins.map(([componentName, pinNumber]) =>
    getConnectivityKey(circuitJson, componentName, pinNumber),
  );
  expect(new Set(keys).size).toBe(1);
};

const getTraceConnectivityKey = (
  circuitJson: AnyCircuitElement[],
  displayName: string,
) => {
  const trace = circuitJson.find(
    (element): element is SourceTrace =>
      element.type === "source_trace" && element.display_name === displayName,
  );
  if (!trace?.subcircuit_connectivity_map_key) {
    throw new Error(`Missing wrapper trace ${displayName}`);
  }
  return trace.subcircuit_connectivity_map_key;
};

test("uses the authoritative devices, values, and one coordinate transform", () => {
  expect(TIDA01421_ALTIUM_SCALE).toBe(0.01827814);
  expect(tida01421Position(1280, 910, TIDA01421_SIGNAL_CHAIN_ORIGIN)).toEqual({
    schX: 8.407944,
    schY: 1.27947,
  });

  expect(getComponent(signalJson, "J1").manufacturer_part_number).toBe(
    "1727010",
  );
  expect(getComponent(signalJson, "R6")).toMatchObject({ resistance: 0.003 });
  expect(getComponent(signalJson, "U2").manufacturer_part_number).toBe(
    "INA240A1QDRQ1",
  );
  expect(getComponent(signalJson, "U3").manufacturer_part_number).toBe(
    "TLV2316QDGKRQ1",
  );
  expect(getComponent(signalJson, "U1").manufacturer_part_number).toBe(
    "LMV7275IDCKRQ1",
  );
  expect(getComponent(signalJson, "C15")).toMatchObject({
    capacitance: 0.1e-6,
  });
  expect(getComponent(powerJson, "U4").manufacturer_part_number).toBe(
    "TPS7B6933QDBVRQ1",
  );
  expect(getComponent(powerJson, "U5").manufacturer_part_number).toBe(
    "TPS7B6950QDBVRQ1",
  );
});

test("preserves the shunt, ripple-filter, comparator, and output nets", () => {
  expectOneNet(signalJson, [
    ["J1", 1],
    ["R6", 2],
    ["R5", 1],
  ]);
  expectOneNet(signalJson, [
    ["J1", 2],
    ["R6", 1],
    ["R7", 1],
  ]);
  expectOneNet(signalJson, [
    ["R5", 2],
    ["C8", 1],
    ["U2", 8],
  ]);
  expectOneNet(signalJson, [
    ["R7", 2],
    ["C8", 2],
    ["U2", 1],
  ]);
  expectOneNet(signalJson, [
    ["U2", 5],
    ["C7", 2],
    ["R12", 1],
  ]);
  expectOneNet(signalJson, [
    ["R3", 2],
    ["C1", 2],
    ["R1", 1],
    ["U3", 2],
    ["U3A", 2],
  ]);
  expectOneNet(signalJson, [
    ["U3A", 1],
    ["C1", 1],
    ["R1", 2],
    ["U3", 1],
    ["R8", 1],
    ["R9", 1],
  ]);
  expectOneNet(signalJson, [
    ["R11", 1],
    ["R17", 2],
    ["U3", 3],
    ["U3A", 3],
    ["R10", 1],
  ]);
  expectOneNet(signalJson, [
    ["R8", 2],
    ["R2", 1],
    ["U3", 6],
    ["U3B", 6],
  ]);
  expectOneNet(signalJson, [
    ["R9", 2],
    ["C9", 1],
    ["R10", 2],
    ["U3", 5],
    ["U3B", 5],
  ]);
  expectOneNet(signalJson, [
    ["R2", 2],
    ["U3", 7],
    ["U3B", 7],
    ["U1", 3],
  ]);
  expectOneNet(signalJson, [
    ["R15", 1],
    ["R18", 2],
    ["R16", 1],
    ["U1", 1],
  ]);
  expectOneNet(signalJson, [
    ["U1", 4],
    ["R16", 2],
    ["R4", 1],
    ["C15", 1],
  ]);
  expectOneNet(signalJson, [
    ["R12", 2],
    ["R20", 2],
    ["C10", 1],
  ]);
});

test("preserves the local power nets and renders without circuit errors", () => {
  expectOneNet(powerJson, [
    ["U4", 1],
    ["U5", 1],
    ["C11", 1],
    ["C13", 1],
  ]);
  expectOneNet(powerJson, [
    ["U4", 5],
    ["C12", 1],
  ]);
  expectOneNet(powerJson, [
    ["U5", 5],
    ["C14", 1],
  ]);
  expectOneNet(powerJson, [
    ["U4", 3],
    ["U4", 4],
    ["U5", 3],
    ["U5", 4],
    ["C11", 2],
    ["C12", 2],
    ["C13", 2],
    ["C14", 2],
  ]);
  expectOneNet(signalJson, [
    ["U2", 2],
    ["C3", 2],
    ["C10", 2],
    ["R17", 1],
    ["U3", 4],
    ["U3A", 4],
    ["U3B", 4],
    ["C5", 2],
    ["C9", 2],
    ["U1", 2],
    ["C2", 2],
    ["R18", 1],
    ["C15", 2],
  ]);

  const circuitErrors = [...signalJson, ...powerJson].filter((element) =>
    element.type.endsWith("_error"),
  );
  expect(circuitErrors).toEqual([]);
});

test("joins the child power rails in the composite without circuit errors", () => {
  const expectWrapperNet = (netName: "V3_3" | "V5" | "GND") => {
    const powerKey = getTraceConnectivityKey(
      compositeJson,
      `.power > .${netName} to net.${netName}`,
    );
    const signalKey = getTraceConnectivityKey(
      compositeJson,
      `.signalChain > .${netName} to net.${netName}`,
    );
    expect(powerKey).toBe(signalKey);
  };

  expectWrapperNet("V3_3");
  expectWrapperNet("V5");
  expectWrapperNet("GND");

  expect(
    compositeJson.filter((element) => element.type.endsWith("_error")),
  ).toEqual([]);
});
