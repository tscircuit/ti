import { beforeAll, expect, test } from "bun:test";
import { Circuit } from "@tscircuit/core";
import type { AnyCircuitElement } from "circuit-json";
import {
  TIDA01421_ALTIUM_SCALE,
  tida01421Position,
} from "../tida01421-coordinates.ts";
import {
  PinchDetectionPower_TIDA01421,
  TIDA01421_POWER_ORIGIN,
} from "./PinchDetectionPower_TIDA01421.circuit.tsx";
import {
  PinchDetectionSignalChain_TIDA01421,
  TIDA01421_SIGNAL_CHAIN_ORIGIN,
} from "./PinchDetectionSignalChain_TIDA01421.circuit.tsx";
import { PinchDetection_TIDA01421 } from "./PinchDetection_TIDA01421.circuit.tsx";

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>;
type SourcePort = Extract<AnyCircuitElement, { type: "source_port" }>;
type SourceTrace = Extract<AnyCircuitElement, { type: "source_trace" }>;
type SchematicComponent = Extract<
  AnyCircuitElement,
  { type: "schematic_component" }
>;
type SchematicPort = Extract<AnyCircuitElement, { type: "schematic_port" }>;

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

const getSchematicComponent = (
  circuitJson: AnyCircuitElement[],
  componentName: string,
) => {
  const sourceComponent = getComponent(circuitJson, componentName);
  const schematicComponent = circuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component" &&
      element.source_component_id === sourceComponent.source_component_id,
  );
  if (!schematicComponent) {
    throw new Error(`Missing schematic component ${componentName}`);
  }
  return schematicComponent;
};

const getSchematicPort = (
  circuitJson: AnyCircuitElement[],
  componentName: string,
  pinNumber: number,
) => {
  const sourceComponent = getComponent(circuitJson, componentName);
  const sourcePort = circuitJson.find(
    (element): element is SourcePort =>
      element.type === "source_port" &&
      element.source_component_id === sourceComponent.source_component_id &&
      element.pin_number === pinNumber,
  );
  if (!sourcePort) {
    throw new Error(`Missing source port ${componentName}.${pinNumber}`);
  }
  const schematicPort = circuitJson.find(
    (element): element is SchematicPort =>
      element.type === "schematic_port" &&
      element.source_port_id === sourcePort.source_port_id,
  );
  if (!schematicPort) {
    throw new Error(`Missing schematic port ${componentName}.${pinNumber}`);
  }
  return schematicPort;
};

const getPortSide = (
  circuitJson: AnyCircuitElement[],
  componentName: string,
  pinNumber: number,
) => {
  const componentCenter = getSchematicComponent(
    circuitJson,
    componentName,
  ).center;
  const portCenter = getSchematicPort(
    circuitJson,
    componentName,
    pinNumber,
  ).center;
  const xDelta = portCenter.x - componentCenter.x;
  const yDelta = portCenter.y - componentCenter.y;
  if (Math.abs(xDelta) > Math.abs(yDelta)) {
    return xDelta < 0 ? "left" : "right";
  }
  return yDelta < 0 ? "bottom" : "top";
};

const roundedCenter = (center: { x: number; y: number }) => ({
  x: Number(center.x.toFixed(4)),
  y: Number(center.y.toFixed(4)),
});

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

test("preserves every included Altium placement and pin orientation", () => {
  const signalCenters = {
    R6: [320, 890],
    R5: [370, 910],
    R7: [370, 870],
    C8: [400, 890],
    U2: [520, 900],
    C3: [520, 1000],
    C4: [550, 1000],
    R12: [670, 670],
    R20: [710, 650],
    C10: [750, 640],
    C7: [660, 920],
    R3: [720, 920],
    U3A: [790, 910],
    U3B: [1080, 900],
    C1: [780, 1040],
    R1: [790, 1000],
    C5: [860, 1000],
    C6: [890, 1000],
    R11: [670, 840],
    R17: [670, 790],
    R8: [930, 910],
    R9: [930, 890],
    C9: [980, 860],
    R10: [1010, 860],
    R2: [1050, 980],
    C2: [1280, 1010],
    R15: [1200, 830],
    R18: [1200, 780],
    R16: [1300, 800],
    R4: [1400, 910],
    C15: [1460, 870],
  } as const;
  const powerCenters = {
    U4: [790, 440],
    U5: [790, 280],
    C11: [690, 440],
    C12: [900, 440],
    C13: [690, 280],
    C14: [900, 280],
  } as const;
  const expectedCenters = (
    centers: Record<string, readonly [number, number]>,
    origin: { x: number; y: number },
  ) =>
    Object.fromEntries(
      Object.entries(centers).map(([name, [x, y]]) => {
        const { schX, schY } = tida01421Position(x, y, origin);
        return [name, roundedCenter({ x: schX, y: schY })];
      }),
    );
  const renderedCenters = (
    circuitJson: AnyCircuitElement[],
    centers: Record<string, readonly [number, number]>,
  ) =>
    Object.fromEntries(
      Object.keys(centers).map((name) => [
        name,
        roundedCenter(getSchematicComponent(circuitJson, name).center),
      ]),
    );

  expect(renderedCenters(signalJson, signalCenters)).toEqual(
    expectedCenters(signalCenters, TIDA01421_SIGNAL_CHAIN_ORIGIN),
  );
  expect(renderedCenters(powerJson, powerCenters)).toEqual(
    expectedCenters(powerCenters, TIDA01421_POWER_ORIGIN),
  );

  const signalCustomPinLocations = {
    J1: { 1: [210, 900], 2: [210, 890] },
    U2: {
      1: [450, 890],
      2: [590, 870],
      3: [590, 890],
      4: [450, 870],
      5: [590, 920],
      6: [450, 920],
      7: [590, 900],
      8: [450, 900],
    },
    U3A: {
      1: [830, 910],
      2: [750, 920],
      3: [750, 900],
      4: [790, 870],
      8: [790, 950],
    },
    U3B: {
      4: [1080, 860],
      5: [1040, 890],
      6: [1040, 910],
      7: [1120, 900],
      8: [1080, 940],
    },
    U1: {
      1: [1260, 880],
      2: [1300, 850],
      3: [1260, 900],
      4: [1340, 890],
      5: [1300, 930],
    },
  } as const;
  const powerCustomPinLocations = {
    U4: {
      1: [710, 470],
      2: [710, 410],
      3: [870, 420],
      4: [870, 410],
      5: [870, 470],
    },
    U5: {
      1: [710, 310],
      2: [710, 250],
      3: [870, 260],
      4: [870, 250],
      5: [870, 310],
    },
  } as const;
  const renderedCustomPinLocations = (
    circuitJson: AnyCircuitElement[],
    locations: Record<string, Record<number, readonly [number, number]>>,
  ) =>
    Object.fromEntries(
      Object.entries(locations).map(([name, pins]) => [
        name,
        Object.fromEntries(
          Object.keys(pins).map((pin) => [
            pin,
            roundedCenter(
              getSchematicPort(circuitJson, name, Number(pin)).center,
            ),
          ]),
        ),
      ]),
    );
  const expectedCustomPinLocations = (
    locations: Record<string, Record<number, readonly [number, number]>>,
    origin: { x: number; y: number },
  ) =>
    Object.fromEntries(
      Object.entries(locations).map(([name, pins]) => [
        name,
        Object.fromEntries(
          Object.entries(pins).map(([pin, [x, y]]) => {
            const { schX, schY } = tida01421Position(x, y, origin);
            return [pin, roundedCenter({ x: schX, y: schY })];
          }),
        ),
      ]),
    );

  expect(
    renderedCustomPinLocations(signalJson, signalCustomPinLocations),
  ).toEqual(
    expectedCustomPinLocations(
      signalCustomPinLocations,
      TIDA01421_SIGNAL_CHAIN_ORIGIN,
    ),
  );
  expect(
    renderedCustomPinLocations(powerJson, powerCustomPinLocations),
  ).toEqual(
    expectedCustomPinLocations(powerCustomPinLocations, TIDA01421_POWER_ORIGIN),
  );

  const signalPinSides = {
    J1: { 1: "right", 2: "right" },
    R6: { 1: "bottom", 2: "top" },
    R5: { 1: "left", 2: "right" },
    R7: { 1: "left", 2: "right" },
    C8: { 1: "top", 2: "bottom" },
    U2: {
      1: "left",
      2: "right",
      3: "right",
      4: "left",
      5: "right",
      6: "left",
      7: "right",
      8: "left",
    },
    C3: { 1: "top", 2: "bottom" },
    C4: { 1: "top", 2: "bottom" },
    R12: { 1: "left", 2: "right" },
    R20: { 1: "bottom", 2: "top" },
    C10: { 1: "top", 2: "bottom" },
    C7: { 1: "right", 2: "left" },
    R3: { 1: "left", 2: "right" },
    U3A: { 1: "right", 2: "left", 3: "left", 4: "bottom", 8: "top" },
    U3B: { 4: "bottom", 5: "left", 6: "left", 7: "right", 8: "top" },
    C1: { 1: "right", 2: "left" },
    R1: { 1: "left", 2: "right" },
    C5: { 1: "top", 2: "bottom" },
    C6: { 1: "top", 2: "bottom" },
    R11: { 1: "bottom", 2: "top" },
    R17: { 1: "bottom", 2: "top" },
    R8: { 1: "left", 2: "right" },
    R9: { 1: "left", 2: "right" },
    C9: { 1: "top", 2: "bottom" },
    R10: { 1: "bottom", 2: "top" },
    R2: { 1: "left", 2: "right" },
    U1: { 1: "left", 2: "bottom", 3: "left", 4: "right", 5: "top" },
    C2: { 1: "top", 2: "bottom" },
    R15: { 1: "bottom", 2: "top" },
    R18: { 1: "bottom", 2: "top" },
    R16: { 1: "left", 2: "right" },
    R4: { 1: "bottom", 2: "top" },
    C15: { 1: "top", 2: "bottom" },
  } as const;
  const powerPinSides = {
    U4: { 1: "left", 2: "left", 3: "right", 4: "right", 5: "right" },
    U5: { 1: "left", 2: "left", 3: "right", 4: "right", 5: "right" },
    C11: { 1: "top", 2: "bottom" },
    C12: { 1: "top", 2: "bottom" },
    C13: { 1: "top", 2: "bottom" },
    C14: { 1: "top", 2: "bottom" },
  } as const;
  const renderedPinSides = (
    circuitJson: AnyCircuitElement[],
    expected: Record<string, Record<number, string>>,
  ) =>
    Object.fromEntries(
      Object.entries(expected).map(([name, pins]) => [
        name,
        Object.fromEntries(
          Object.keys(pins).map((pin) => [
            pin,
            getPortSide(circuitJson, name, Number(pin)),
          ]),
        ),
      ]),
    );

  expect(renderedPinSides(signalJson, signalPinSides)).toEqual(signalPinSides);
  expect(renderedPinSides(powerJson, powerPinSides)).toEqual(powerPinSides);
});

test("preserves the shunt, ripple-filter, comparator, and output nets", () => {
  const expectedAltiumNets: Array<
    Array<[componentName: string, pinNumber: number]>
  > = [
    [
      ["J1", 1],
      ["R6", 2],
      ["R5", 1],
    ],
    [
      ["J1", 2],
      ["R6", 1],
      ["R7", 1],
    ],
    [
      ["R5", 2],
      ["C8", 1],
      ["U2", 8],
    ],
    [
      ["R7", 2],
      ["C8", 2],
      ["U2", 1],
    ],
    [
      ["U2", 5],
      ["C7", 2],
      ["R12", 1],
    ],
    [
      ["C7", 1],
      ["R3", 1],
    ],
    [
      ["R3", 2],
      ["C1", 2],
      ["R1", 1],
      ["U3", 2],
      ["U3A", 2],
    ],
    [
      ["U3A", 1],
      ["C1", 1],
      ["R1", 2],
      ["U3", 1],
      ["R8", 1],
      ["R9", 1],
    ],
    [
      ["R11", 1],
      ["R17", 2],
      ["U3", 3],
      ["U3A", 3],
      ["R10", 1],
    ],
    [
      ["R8", 2],
      ["R2", 1],
      ["U3", 6],
      ["U3B", 6],
    ],
    [
      ["R9", 2],
      ["C9", 1],
      ["R10", 2],
      ["U3", 5],
      ["U3B", 5],
    ],
    [
      ["R2", 2],
      ["U3", 7],
      ["U3B", 7],
      ["U1", 3],
    ],
    [
      ["R15", 1],
      ["R18", 2],
      ["R16", 1],
      ["U1", 1],
    ],
    [
      ["U1", 4],
      ["R16", 2],
      ["R4", 1],
      ["C15", 1],
    ],
    [
      ["R12", 2],
      ["R20", 2],
      ["C10", 1],
    ],
    [
      ["U2", 6],
      ["U2", 7],
      ["C3", 1],
      ["C4", 1],
      ["U3", 8],
      ["U3A", 8],
      ["U3B", 8],
      ["C5", 1],
      ["C6", 1],
      ["R11", 2],
      ["U1", 5],
      ["C2", 1],
      ["R15", 2],
    ],
    [
      ["U2", 2],
      ["U2", 3],
      ["C3", 2],
      ["C4", 2],
      ["C10", 2],
      ["R20", 1],
      ["R17", 1],
      ["U3", 4],
      ["U3A", 4],
      ["U3B", 4],
      ["C5", 2],
      ["C6", 2],
      ["C9", 2],
      ["U1", 2],
      ["C2", 2],
      ["R18", 1],
      ["C15", 2],
    ],
    [["R4", 2]],
  ];

  for (const pins of expectedAltiumNets) expectOneNet(signalJson, pins);
  const representativeKeys = expectedAltiumNets.map((pins) =>
    getConnectivityKey(signalJson, pins[0][0], pins[0][1]),
  );
  expect(new Set(representativeKeys).size).toBe(expectedAltiumNets.length);
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
