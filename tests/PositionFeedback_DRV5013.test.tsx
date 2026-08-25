import { beforeAll, describe, expect, test } from "bun:test";
import type {
  AnyCircuitElement,
  SchematicComponent,
  SchematicPort,
  SourcePort,
} from "circuit-json";
import { getSourcePortConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map";
import { Circuit } from "@tscircuit/core";
import { PositionFeedback_DRV5013 } from "../lib/subcircuits/PositionFeedback_DRV5013.circuit.tsx";

const ALTIUM_SCALE = 0.018278145;
const ALTIUM_ORIGIN = { x: 185, y: 215 } as const;

const fromAltium = (x: number, y: number) => ({
  x: (x - ALTIUM_ORIGIN.x) * ALTIUM_SCALE,
  y: (y - ALTIUM_ORIGIN.y) * ALTIUM_SCALE,
});

let circuitJson: AnyCircuitElement[];
type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>;
let sourceComponents: SourceComponent[];
let sourcePorts: SourcePort[];
let schematicComponents: SchematicComponent[];
let schematicPorts: SchematicPort[];

beforeAll(async () => {
  const circuit = new Circuit();
  circuit.add(<PositionFeedback_DRV5013 name="positionFeedback" />);
  await circuit.renderUntilSettled();
  circuitJson = circuit.getCircuitJson();
  sourceComponents = circuitJson.filter(
    (element): element is SourceComponent =>
      element.type === "source_component",
  );
  sourcePorts = circuitJson.filter(
    (element): element is SourcePort => element.type === "source_port",
  );
  schematicComponents = circuitJson.filter(
    (element): element is SchematicComponent =>
      element.type === "schematic_component",
  );
  schematicPorts = circuitJson.filter(
    (element): element is SchematicPort => element.type === "schematic_port",
  );
});

const component = (name: string) => {
  const found = sourceComponents.find((element) => element.name === name);
  if (!found) throw new Error(`Missing source component ${name}`);
  return found;
};

const port = (componentName: string, pinNumber: number) => {
  const owner = component(componentName);
  const found = sourcePorts.find(
    (element) =>
      element.source_component_id === owner.source_component_id &&
      element.pin_number === pinNumber,
  );
  if (!found) throw new Error(`Missing ${componentName} pin ${pinNumber}`);
  return found;
};

const schematicComponent = (name: string) => {
  const owner = component(name);
  const found = schematicComponents.find(
    (element) => element.source_component_id === owner.source_component_id,
  );
  if (!found) throw new Error(`Missing schematic component ${name}`);
  return found;
};

const schematicPort = (componentName: string, pinNumber: number) => {
  const sourcePort = port(componentName, pinNumber);
  const found = schematicPorts.find(
    (element) => element.source_port_id === sourcePort.source_port_id,
  );
  if (!found)
    throw new Error(`Missing schematic port ${componentName}.${pinNumber}`);
  return found;
};

const capacitance = (name: string) => {
  const found = component(name);
  if (found.ftype !== "simple_capacitor") {
    throw new Error(`${name} is not a capacitor`);
  }
  return found.capacitance;
};

const resistance = (name: string) => {
  const found = component(name);
  if (found.ftype !== "simple_resistor") {
    throw new Error(`${name} is not a resistor`);
  }
  return found.resistance;
};

describe("TIDA-01389 position feedback extraction", () => {
  test("preserves source designators, values, MPNs, and Altium centers", () => {
    const expected = {
      U6: { xy: [180, 280], mpn: "DRV5013ADQDBZRQ1" },
      U5: { xy: [180, 140], mpn: "DRV5013ADQDBZRQ1" },
      C13: { xy: [60, 275], mpn: "GRM155R61H104ME14D" },
      C14: { xy: [60, 135], mpn: "GRM155R61H104ME14D" },
      R14: { xy: [270, 310], mpn: "CRCW040210K0JNED" },
      R15: { xy: [270, 170], mpn: "CRCW040210K0JNED" },
      J1: { xy: [150, 475], mpn: "SSQ-110-01-T-S" },
      J2: { xy: [190, 475], mpn: "SSQ-110-01-T-S" },
      R9: { xy: [100, 530], mpn: "CRCW06030000Z0EA" },
    } as const;

    for (const [name, source] of Object.entries(expected)) {
      const sourceComponent = component(name);
      const center = schematicComponent(name).center;
      const [x, y] = source.xy;
      const transformed = fromAltium(x, y);
      expect(sourceComponent.manufacturer_part_number).toBe(source.mpn);
      expect(center.x).toBeCloseTo(transformed.x, 5);
      expect(center.y).toBeCloseTo(transformed.y, 5);
    }

    expect(capacitance("C13")).toBe(0.1e-6);
    expect(capacitance("C14")).toBe(0.1e-6);
    expect(resistance("R14")).toBe(10_000);
    expect(resistance("R15")).toBe(10_000);
    expect(resistance("R9")).toBe(0);
  });

  test("uses the data-sheet DBZ pin numbers and aliases", () => {
    for (const sensor of ["U5", "U6"]) {
      expect(port(sensor, 1).port_hints).toEqual(
        expect.arrayContaining(["VCC", "VS"]),
      );
      expect(port(sensor, 2).port_hints).toEqual(
        expect.arrayContaining(["OUT", "OUTPUT"]),
      );
      expect(port(sensor, 3).port_hints).toContain("GND");
    }

    const expectedPinAnchors = [
      ["U6", 1, 100, 290],
      ["U6", 2, 260, 290],
      ["U6", 3, 260, 260],
      ["U5", 1, 100, 150],
      ["U5", 2, 260, 150],
      ["U5", 3, 260, 120],
      ["J1", 1, 120, 520],
      ["J2", 1, 220, 520],
      ["J2", 6, 220, 470],
      ["J2", 7, 220, 460],
    ] as const;

    for (const [name, pinNumber, x, y] of expectedPinAnchors) {
      const center = schematicPort(name, pinNumber).center;
      const transformed = fromAltium(x, y);
      expect(center.x).toBeCloseTo(transformed.x, 5);
      expect(center.y).toBeCloseTo(transformed.y, 5);
    }
  });

  test("connects both Hall outputs and both supply rails end to end", () => {
    const connectivity =
      getSourcePortConnectivityMapFromCircuitJson(circuitJson);
    const areConnected = (pins: ReadonlyArray<readonly [string, number]>) =>
      connectivity.areAllIdsConnected(
        pins.map(([name, pinNumber]) => port(name, pinNumber).source_port_id),
      );

    expect(
      areConnected([
        ["U6", 2],
        ["R14", 1],
        ["J2", 6],
      ]),
    ).toBeTrue();
    expect(
      areConnected([
        ["U5", 2],
        ["R15", 1],
        ["J2", 7],
      ]),
    ).toBeTrue();
    expect(
      areConnected([
        ["U6", 1],
        ["U5", 1],
        ["C13", 1],
        ["C14", 1],
        ["R14", 2],
        ["R15", 2],
        ["R9", 2],
      ]),
    ).toBeTrue();
    expect(
      areConnected([
        ["R9", 1],
        ["J1", 1],
      ]),
    ).toBeTrue();
    expect(
      areConnected([
        ["U6", 3],
        ["U5", 3],
        ["C13", 2],
        ["C14", 2],
        ["J2", 1],
      ]),
    ).toBeTrue();

    const outputPorts = sourcePorts
      .filter(
        (element) =>
          element.source_component_id == null &&
          (element.name === "HALL_1" || element.name === "HALL_2"),
      )
      .map((element) => element.name);
    expect(outputPorts).toEqual(["HALL_1", "HALL_2", "HALL_1", "HALL_2"]);
  });

  test("renders without circuit errors", () => {
    const errors = circuitJson.filter((element) =>
      element.type.endsWith("_error"),
    );
    expect(errors).toEqual([]);
  });
});
