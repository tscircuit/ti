import { beforeAll, expect, test } from "bun:test";
import { Circuit } from "@tscircuit/core";
import type { AnyCircuitElement } from "circuit-json";
import {
  TIDA01421_ALTIUM_SCALE,
  tida01421Position,
} from "../tida01421-coordinates.ts";
import {
  PinchDetectionPower_TPS7B69,
  TIDA01421_POWER_ORIGIN,
} from "./PinchDetectionPower_TPS7B69.circuit.tsx";
import {
  PinchDetectionSignalChain_INA240_TLV2316_LMV7275,
  TIDA01421_SIGNAL_CHAIN_ORIGIN,
} from "./PinchDetectionSignalChain_INA240_TLV2316_LMV7275.circuit.tsx";
import { PinchDetection_INA240_TLV2316_LMV7275 } from "./PinchDetection_INA240_TLV2316_LMV7275.circuit.tsx";

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>;
type SourceNet = Extract<AnyCircuitElement, { type: "source_net" }>;
type SourcePort = Extract<AnyCircuitElement, { type: "source_port" }>;
type SourceTrace = Extract<AnyCircuitElement, { type: "source_trace" }>;
type SchematicText = Extract<AnyCircuitElement, { type: "schematic_text" }>;
type SchematicComponent = Extract<
  AnyCircuitElement,
  { type: "schematic_component" }
>;
type SchematicPort = Extract<AnyCircuitElement, { type: "schematic_port" }>;
type SchematicNetLabel = Extract<
  AnyCircuitElement,
  { type: "schematic_net_label" }
>;
type SchematicTrace = Extract<AnyCircuitElement, { type: "schematic_trace" }>;

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
      renderSchematic(
        <PinchDetectionSignalChain_INA240_TLV2316_LMV7275 name="pinch" />,
      ),
      renderSchematic(<PinchDetectionPower_TPS7B69 name="power" />),
      renderSchematic(
        <PinchDetection_INA240_TLV2316_LMV7275 name="pinchComposite" />,
      ),
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
  const port = getSourcePort(circuitJson, componentName, pinNumber);
  if (!port.subcircuit_connectivity_map_key) {
    throw new Error(
      `Missing connectivity key for ${componentName}.${pinNumber}`,
    );
  }
  return port.subcircuit_connectivity_map_key;
};

const getSourcePort = (
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
  return port;
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

const getProjectedSchematicPort = (
  circuitJson: AnyCircuitElement[],
  representationName: string,
  symbolPinNumber: number,
) => {
  const schematicComponent = getSchematicComponent(
    circuitJson,
    representationName,
  );
  const schematicPort = circuitJson.find(
    (element): element is SchematicPort =>
      element.type === "schematic_port" &&
      element.schematic_component_id ===
        schematicComponent.schematic_component_id &&
      element.pin_number === symbolPinNumber,
  );
  if (!schematicPort) {
    throw new Error(
      `Missing projected schematic port ${representationName}.${symbolPinNumber}`,
    );
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

const getProjectedPortSide = (
  circuitJson: AnyCircuitElement[],
  representationName: string,
  symbolPinNumber: number,
) => {
  const componentCenter = getSchematicComponent(
    circuitJson,
    representationName,
  ).center;
  const portCenter = getProjectedSchematicPort(
    circuitJson,
    representationName,
    symbolPinNumber,
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

test("uses the authoritative devices, values, and one coordinate transform", () => {
  expect(TIDA01421_ALTIUM_SCALE).toBe(0.028);
  expect(tida01421Position(1280, 910, TIDA01421_SIGNAL_CHAIN_ORIGIN)).toEqual({
    schX: 12.88,
    schY: 1.96,
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

test("preserves Altium placements with documented native-symbol projection offsets", () => {
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
    U3A: [790, 925],
    U3B: [1080, 898.357143],
    C1: [790, 1040],
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
    U1Symbol: [1280, 903],
    C2: [1280, 1010],
    R15: [1200, 830],
    R18: [1200, 780],
    R16: [1300, 800],
    R4: [1400, 920.5],
    C15: [1460, 881.928571],
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

  // Rectangular devices use the native chip-box renderer. Exact custom port
  // coordinates are intentionally not asserted because no custom box symbol
  // is supplied; pin sides and physical pin mappings are asserted below.
  expect(getSchematicComponent(signalJson, "J1").symbol_name).toBeFalsy();
  expect(getSchematicComponent(signalJson, "U2").symbol_name).toBeFalsy();
  expect(getSchematicComponent(powerJson, "U4").symbol_name).toBeFalsy();
  expect(getSchematicComponent(powerJson, "U5").symbol_name).toBeFalsy();

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

  const projectionPinSides = {
    U3A: { 1: "left", 2: "left", 3: "bottom", 4: "right", 5: "top" },
    U3B: { 1: "left", 2: "left", 3: "bottom", 4: "right", 5: "top" },
    U1Symbol: {
      1: "left",
      2: "left",
      3: "bottom",
      4: "right",
      5: "top",
    },
  } as const;
  const renderedProjectionPinSides = Object.fromEntries(
    Object.entries(projectionPinSides).map(([name, pins]) => [
      name,
      Object.fromEntries(
        Object.keys(pins).map((pin) => [
          pin,
          getProjectedPortSide(signalJson, name, Number(pin)),
        ]),
      ),
    ]),
  );
  expect(renderedProjectionPinSides).toEqual(projectionPinSides);
});

test("keeps the horizontally connected analog stages on straight routes", () => {
  const nearlyEqual = (a: number, b: number) => Math.abs(a - b) < 1e-6;
  const u3aInMinus = getProjectedSchematicPort(signalJson, "U3A", 2);
  const r3Output = getSchematicPort(signalJson, "R3", 2);
  const u3bOutput = getProjectedSchematicPort(signalJson, "U3B", 4);
  const u1InMinus = getProjectedSchematicPort(signalJson, "U1Symbol", 2);
  const u1Output = getProjectedSchematicPort(signalJson, "U1Symbol", 4);
  const r4TimerPin = getSchematicPort(signalJson, "R4", 1);
  const c15TimerPin = getSchematicPort(signalJson, "C15", 1);

  expect(
    nearlyEqual(
      getSchematicComponent(signalJson, "C1").center.x,
      getSchematicComponent(signalJson, "R1").center.x,
    ),
  ).toBe(true);
  expect(
    nearlyEqual(
      getSchematicPort(signalJson, "C1", 1).center.x,
      getSchematicPort(signalJson, "R1", 2).center.x,
    ),
  ).toBe(true);
  expect(
    nearlyEqual(
      getSchematicPort(signalJson, "C1", 2).center.x,
      getSchematicPort(signalJson, "R1", 1).center.x,
    ),
  ).toBe(true);

  for (const [first, second] of [
    ["C3", "C4"],
    ["C5", "C6"],
    ["C9", "R10"],
  ] as const) {
    expect(
      nearlyEqual(
        getSchematicComponent(signalJson, first).center.y,
        getSchematicComponent(signalJson, second).center.y,
      ),
    ).toBe(true);
  }

  for (const [first, second] of [
    ["R11", "R17"],
    ["R8", "R9"],
    ["R15", "R18"],
    ["U1Symbol", "C2"],
  ] as const) {
    expect(
      nearlyEqual(
        getSchematicComponent(signalJson, first).center.x,
        getSchematicComponent(signalJson, second).center.x,
      ),
    ).toBe(true);
  }

  expect(nearlyEqual(r3Output.center.y, u3aInMinus.center.y)).toBe(true);
  expect(nearlyEqual(u3bOutput.center.y, u1InMinus.center.y)).toBe(true);

  const schematicEdges = signalJson
    .filter(
      (element): element is SchematicTrace =>
        element.type === "schematic_trace",
    )
    .flatMap((trace) => trace.edges);
  const hasHorizontalEdge = (fromX: number, toX: number, y: number) =>
    schematicEdges.some(
      (edge) =>
        nearlyEqual(edge.from.y, y) &&
        nearlyEqual(edge.to.y, y) &&
        nearlyEqual(Math.min(edge.from.x, edge.to.x), Math.min(fromX, toX)) &&
        nearlyEqual(Math.max(edge.from.x, edge.to.x), Math.max(fromX, toX)),
    );

  expect(
    hasHorizontalEdge(
      u1Output.center.x,
      r4TimerPin.center.x,
      u1Output.center.y,
    ),
  ).toBe(true);
  expect(
    hasHorizontalEdge(
      r4TimerPin.center.x,
      c15TimerPin.center.x,
      u1Output.center.y,
    ),
  ).toBe(true);
});

test("maps each native amplifier symbol port to the authoritative physical pin", () => {
  const disconnectedProjectionPorts: string[] = [];
  const expectedProjectionMappings = {
    U3A: {
      1: ["U3", 3],
      2: ["U3", 2],
      3: ["U3", 4],
      4: ["U3", 1],
      5: ["U3", 8],
    },
    U3B: {
      1: ["U3", 5],
      2: ["U3", 6],
      3: ["U3", 4],
      4: ["U3", 7],
      5: ["U3", 8],
    },
    U1Symbol: {
      1: ["U1", 1],
      2: ["U1", 3],
      3: ["U1", 2],
      4: ["U1", 4],
      5: ["U1", 5],
    },
  } as const;

  for (const [representationName, mappings] of Object.entries(
    expectedProjectionMappings,
  )) {
    expect(
      getSchematicComponent(signalJson, representationName).symbol_name,
    ).toBe("opamp_with_power_right");
    for (const [
      symbolPinNumber,
      [physicalComponent, physicalPinNumber],
    ] of Object.entries(mappings)) {
      const projectedPort = getProjectedSchematicPort(
        signalJson,
        representationName,
        Number(symbolPinNumber),
      );
      expect(projectedPort.source_port_id).toBe(
        getSourcePort(signalJson, physicalComponent, physicalPinNumber)
          .source_port_id,
      );
      const isSignalPin = ![3, 5].includes(Number(symbolPinNumber));
      if (isSignalPin && !projectedPort.is_connected)
        disconnectedProjectionPorts.push(
          `${representationName}.${symbolPinNumber}`,
        );
    }
  }
  expect(disconnectedProjectionPorts).toEqual([]);

  const supplyLabels = {
    U3A: { 3: "GND", 5: "V5" },
    U3B: { 3: "GND", 5: "V5" },
    U1Symbol: { 3: "GND", 5: "V5" },
  } as const;
  for (const [representationName, pins] of Object.entries(supplyLabels)) {
    for (const [symbolPinNumber, netName] of Object.entries(pins)) {
      const projectedPort = getProjectedSchematicPort(
        signalJson,
        representationName,
        Number(symbolPinNumber),
      );
      const sourceNet = signalJson.find(
        (element): element is SourceNet =>
          element.type === "source_net" && element.name === netName,
      );
      const railLabel = signalJson.find(
        (element): element is SchematicNetLabel =>
          element.type === "schematic_net_label" &&
          element.text === netName &&
          element.anchor_position !== undefined &&
          Math.abs(element.anchor_position.x - projectedPort.center.x) < 1e-6 &&
          Math.abs(element.anchor_position.y - projectedPort.center.y) < 1e-6,
      );

      expect(sourceNet).toBeDefined();
      expect(railLabel?.source_net_id).toBe(sourceNet?.source_net_id);
      expect(railLabel?.symbol_name).toBe(
        netName === "GND" ? "rail_down" : "rail_up",
      );
    }
  }
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
    ],
    [
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
      ["R10", 1],
    ],
    [
      ["R8", 2],
      ["R2", 1],
      ["U3", 6],
    ],
    [
      ["R9", 2],
      ["C9", 1],
      ["R10", 2],
      ["U3", 5],
    ],
    [
      ["R2", 2],
      ["U3", 7],
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

  const powerGroundLabels = powerJson.filter(
    (element) =>
      element.type === "schematic_net_label" &&
      element.text === "GND" &&
      element.symbol_name === "rail_down",
  );
  expect(powerGroundLabels).toHaveLength(4);
});

test("uses on-trace labels for the source signal names", () => {
  const explicitNetNames = signalJson
    .filter((element) => element.type === "source_net")
    .map((net) => net.name)
    .sort();
  expect(explicitNetNames).toEqual([
    "ADCMOTOR",
    "BIAS",
    "GND",
    "TIMER",
    "V3_3",
    "V5",
  ]);

  const namedSignalTraces = signalJson
    .filter(
      (element): element is SourceTrace => element.type === "source_trace",
    )
    .map((trace) => trace.name)
    .filter(Boolean)
    .sort();
  expect(namedSignalTraces).toEqual(["ADCMOTOR", "BIAS-A", "BIAS-B", "TIMER"]);

  expect(
    signalJson.filter(
      (element): element is SchematicText =>
        element.type === "schematic_text" &&
        Boolean(element.source_trace_id) &&
        element.text === "V5",
    ),
  ).toEqual([]);

  const u2V5Labels = signalJson.filter(
    (element): element is SchematicNetLabel =>
      element.type === "schematic_net_label" &&
      element.text === "V5" &&
      [
        getSchematicPort(signalJson, "U2", 6).center.x,
        getSchematicPort(signalJson, "U2", 7).center.x,
      ].includes(element.anchor_position?.x ?? Number.NaN),
  );
  expect(
    u2V5Labels.map((label) => [label.anchor_side, label.symbol_name]),
  ).toEqual([
    ["bottom", "rail_up"],
    ["left", undefined],
  ]);

  const traceOwnedSignalLabels = signalJson.filter(
    (element): element is SchematicText =>
      element.type === "schematic_text" &&
      Boolean(element.source_trace_id) &&
      ["ADCMOTOR", "BIAS", "TIMER"].includes(element.text),
  );
  expect(
    [...new Set(traceOwnedSignalLabels.map((label) => label.text))].sort(),
  ).toEqual(["ADCMOTOR", "BIAS", "TIMER"]);
  expect(
    signalJson.filter(
      (element) =>
        element.type === "schematic_net_label" &&
        ["ADCMOTOR", "BIAS", "TIMER"].includes(element.text),
    ),
  ).toEqual([]);

  const renderedLabels = [
    ...new Set(
      signalJson.flatMap((element) => {
        if (element.type === "schematic_net_label") return [element.text];
        if (element.type === "schematic_text" && element.source_trace_id)
          return [element.text];
        return [];
      }),
    ),
  ].sort();
  expect(renderedLabels).toEqual([
    "ADCMOTOR",
    "BIAS",
    "GND",
    "TIMER",
    "V+",
    "V-",
    "V3_3",
    "V5",
  ]);
});

test("joins the child power rails in the composite without circuit errors", () => {
  for (const netName of ["V3_3", "V5", "GND"]) {
    const exposedNetKeys = compositeJson
      .filter(
        (element): element is SourceNet =>
          element.type === "source_net" && element.name === netName,
      )
      .map((net) => net.subcircuit_connectivity_map_key);
    // One source net exists in each child and the wrapper. Native exposedNets
    // remaps all three to the wrapper connectivity key.
    expect(exposedNetKeys).toHaveLength(3);
    expect(new Set(exposedNetKeys).size).toBe(1);
  }

  expect(
    compositeJson.filter((element) => element.type.endsWith("_error")),
  ).toEqual([]);

  expect(
    compositeJson.filter(
      (element) =>
        element.type === "schematic_net_label" &&
        (/(?:^|[_-])(?:U\d+[A-Z]?[_-])?(?:V5|GND)$/.test(element.text) ||
          element.text === "U2_VS") &&
        !["V5", "GND"].includes(element.text),
    ),
  ).toEqual([]);

  const compositeSupplyLabels = {
    U3A: { 3: "GND", 5: "V5" },
    U3B: { 3: "GND", 5: "V5" },
    U1Symbol: { 3: "GND", 5: "V5" },
  } as const;
  for (const [representationName, pins] of Object.entries(
    compositeSupplyLabels,
  )) {
    for (const [symbolPinNumber, netName] of Object.entries(pins)) {
      const projectedPort = getProjectedSchematicPort(
        compositeJson,
        representationName,
        Number(symbolPinNumber),
      );
      const labelsAtStem = compositeJson.filter(
        (element): element is SchematicNetLabel =>
          element.type === "schematic_net_label" &&
          element.anchor_position !== undefined &&
          Math.abs(element.anchor_position.x - projectedPort.center.x) < 1e-6 &&
          Math.abs(element.anchor_position.y - projectedPort.center.y) < 1e-6,
      );

      expect(labelsAtStem.length).toBeGreaterThanOrEqual(1);
      expect(new Set(labelsAtStem.map((label) => label.text))).toEqual(
        new Set([netName]),
      );
      expect(new Set(labelsAtStem.map((label) => label.symbol_name))).toEqual(
        new Set([netName === "GND" ? "rail_down" : "rail_up"]),
      );
    }
  }
});
