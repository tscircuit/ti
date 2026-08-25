import "tscircuit";
import { MSP430G2332IPW20 } from "../chips/MSP430G2332IPW20.circuit.tsx";
import { TPS78230DRVR } from "../chips/TPS78230DRVR.circuit.tsx";

type Placement = { schX: number; schY: number; schRotation?: number };
type Passive = Placement & { name: string; partNumber: string; value: string };
type McuCircuitProps = {
  manualEdits?: {
    schematic_placements?: Array<{
      selector: string;
      relative_to?: string;
      center: { x: number; y: number };
    }>;
  };
  useManualPlacement?: boolean;
};

// Generated once from PMP9776.SchDoc with altium-to-circuit-json. Everything
// required at runtime is embedded below; the final schematic has no converter
// or JSON-file dependency.
const capacitors: Passive[] = [
  {
    name: "C16",
    partNumber: "C16",
    schX: -0.7,
    schY: -7.2,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C8",
    partNumber: "C8",
    schX: -11.7,
    schY: -0.4,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C9",
    partNumber: "C9",
    schX: -7.9,
    schY: 0.1,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C14",
    partNumber: "C14",
    schX: -5.6,
    schY: -6,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C15",
    partNumber: "C15",
    schX: -8.5,
    schY: -6.8,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C12",
    partNumber: "C12",
    schX: -8.1,
    schY: -3.3,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C11",
    partNumber: "C11",
    schX: -11.1,
    schY: -2.6,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C13",
    partNumber: "C13",
    schX: -7.1,
    schY: -3.2,
    value: "1uF",
    schRotation: 90,
  },
];
const resistors: Passive[] = [
  {
    name: "R10",
    partNumber: "R10",
    schX: 2.9,
    schY: -1.25,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R11",
    partNumber: "R11",
    schX: -13.2,
    schY: -2.1,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R15",
    partNumber: "R15",
    schX: -8.9,
    schY: -3.1,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R19",
    partNumber: "R19",
    schX: 2.5,
    schY: -5.9,
    value: "1k",
    schRotation: 180,
  },
  {
    name: "R20",
    partNumber: "R20",
    schX: -0.7,
    schY: -6.3,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R12",
    partNumber: "R12",
    schX: 2.9,
    schY: -2.05,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R16",
    partNumber: "R16",
    schX: 2.9,
    schY: -2.85,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R17",
    partNumber: "R17",
    schX: 2.9,
    schY: -3.65,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R14",
    partNumber: "R14",
    schX: -12,
    schY: -2.6,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R13",
    partNumber: "R13",
    schX: -9.3,
    schY: -2.7,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R18",
    partNumber: "R18",
    schX: -7.7,
    schY: -5.5,
    value: "1k",
    schRotation: 90,
  },
];
const inductors: Passive[] = [];
const diodes = [
  {
    name: "D2",
    partNumber: "D2",
    schX: 4.1,
    schY: -2.08,
    schRotation: 0,
  },
  {
    name: "D1",
    partNumber: "D1",
    schX: 4.1,
    schY: -1.28,
    schRotation: 0,
  },
  {
    name: "D4",
    partNumber: "D4",
    schX: 4.1,
    schY: -3.68,
    schRotation: 0,
  },
  {
    name: "D3",
    partNumber: "D3",
    schX: 4.1,
    schY: -2.88,
    schRotation: 0,
  },
] as const;
const testPoints: Array<{ name: string; schX: number; schY: number }> = [];
const transistors = [
  {
    name: "Q5",
    partNumber: "Q5",
    schX: 3.4,
    schY: -5.9,
    schRotation: 270,
  },
] as const;
const genericChips = [
  {
    name: "J6",
    partNumber: "J6",
    schX: -2.9,
    schY: -6.8,
    pinLabels: {
      pin1: "1",
      pin2: "2",
    },
    schPinArrangement: {
      rightSide: {
        pins: [2, 1],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {},
    schWidth: 0.5,
    schHeight: 0.6,
  },
  {
    name: "RT1",
    partNumber: "RT1",
    schX: -7.7,
    schY: -6.7,
    pinLabels: {
      pin2: "2",
      pin1: "1",
    },
    schPinArrangement: {
      topSide: {
        pins: [2],
        direction: "left-to-right",
      },
      bottomSide: {
        pins: [1],
        direction: "left-to-right",
      },
    },
    schPinStyle: {},
    schWidth: 0.5,
    schHeight: 0.5,
  },
] as const;
const schematicNets = [
  {
    name: "NET_001",
    ports: [".D2 > .anode", ".R12 > .pin2"],
  },
  {
    name: "GND",
    ports: [
      ".D2 > .cathode",
      ".D1 > .cathode",
      ".D4 > .cathode",
      ".D3 > .cathode",
      ".C16 > .pin1",
      ".Q5 > .emitter",
      ".U2 > .pin3",
      ".U2 > .pin5",
      ".U2 > .pin7",
      ".C8 > .pin2",
      ".RT1 > .pin1",
      ".R15 > .pin1",
      ".C9 > .pin2",
      ".C14 > .pin2",
      ".C15 > .pin1",
      ".C12 > .pin1",
      ".C11 > .pin1",
      ".C13 > .pin1",
      ".R14 > .pin1",
      ".U4 > .pin20",
    ],
  },
  {
    name: "NET_002",
    ports: [".D1 > .anode", ".R10 > .pin2"],
  },
  {
    name: "NET_003",
    ports: [".R10 > .pin1", ".U4 > .pin8"],
  },
  {
    name: "NET_004",
    ports: [".D4 > .anode", ".R17 > .pin2"],
  },
  {
    name: "NET_005",
    ports: [".D3 > .anode", ".R16 > .pin2"],
  },
  {
    name: "TEST",
    ports: [".J6 > .pin1", ".U4 > .pin17"],
  },
  {
    name: "RST",
    ports: [".J6 > .pin2", ".C16 > .pin2", ".R20 > .pin1", ".U4 > .pin16"],
  },
  {
    name: "NET_006",
    ports: [".Q5 > .base", ".R19 > .pin1"],
  },
  {
    name: "DVCC",
    ports: [
      ".U2 > .pin1",
      ".C9 > .pin1",
      ".C14 > .pin1",
      ".R20 > .pin2",
      ".R18 > .pin2",
      ".U4 > .pin1",
    ],
  },
  {
    name: "VBAT",
    ports: [".U2 > .pin4", ".U2 > .pin6", ".C8 > .pin1", ".R11 > .pin1"],
  },
  {
    name: "VREF",
    ports: [".RT1 > .pin2", ".C15 > .pin2", ".R18 > .pin1", ".U4 > .pin5"],
  },
  {
    name: "VBAT",
    ports: [".R11 > .pin2", ".C11 > .pin2", ".R14 > .pin2", ".U4 > .pin2"],
  },
  {
    name: "VBUS",
    ports: [".R15 > .pin2", ".C12 > .pin2", ".R13 > .pin2", ".U4 > .pin3"],
  },
  {
    name: "XOUT",
    ports: [".R19 > .pin2", ".U4 > .pin18"],
  },
  {
    name: "NET_011",
    ports: [".R12 > .pin1", ".U4 > .pin9"],
  },
  {
    name: "NET_012",
    ports: [".R16 > .pin1", ".U4 > .pin10"],
  },
  {
    name: "LED",
    ports: [".R17 > .pin1", ".U4 > .pin7"],
  },
  {
    name: "CC",
    ports: [".C13 > .pin2", ".U4 > .pin4"],
  },
] as const;

// tscircuit net selectors cannot begin with a digit. The zero-width prefix
// keeps the rendered power-net text as "3V" while satisfying the selector.
const threeVoltNetName = "\u200B3V";
const threeVoltNetSelector = `net.${threeVoltNetName}`;

const traceConnections: Array<{
  from: string;
  to: string;
  schDisplayLabel?: string;
}> = [];
for (const net of schematicNets) {
  if (net.name === "VBUS") {
    traceConnections.push(
      { from: ".C12 > .pin2", to: ".U4 > .pin3" },
      { from: ".C12 > .pin2", to: ".R13 > .pin2" },
      { from: ".R15 > .pin2", to: ".R13 > .pin2" },
    );
    continue;
  }

  for (const [portIndex, to] of net.ports.slice(1).entries()) {
    if (net.name === "TEST" || (net.name === "RST" && to === ".U4 > .pin16")) {
      continue;
    }

    traceConnections.push({
      from: net.ports[0],
      to,
      schDisplayLabel:
        net.name === "VREF" ? "VREF" : net.name === "LED" ? "LED" : undefined,
    });
  }
}

export const Microcontroller_MSP430G2332 = ({
  manualEdits,
  useManualPlacement = false,
}: McuCircuitProps = {}) => (
  <subcircuit
    manualEdits={manualEdits}
    routingDisabled
    schAutoLayoutEnabled={false}
    schTraceAutoLabelEnabled={false}
    schMaxTraceDistance={100}
  >
    <net name="GND" isGroundNet />
    <net name={threeVoltNetName} isPowerNet />
    <net name="TEST" />

    {capacitors.map((component) => (
      <capacitor
        key={component.name}
        name={component.name}
        capacitance={component.value}
        schX={useManualPlacement ? undefined : component.schX}
        schY={useManualPlacement ? undefined : component.schY}
        schRotation={component.schRotation}
      />
    ))}
    {resistors.map((component) => (
      <resistor
        key={component.name}
        name={component.name}
        resistance={component.value}
        schX={useManualPlacement ? undefined : component.schX}
        schY={useManualPlacement ? undefined : component.schY}
        schRotation={component.schRotation}
      />
    ))}
    {inductors.map((component) => (
      <inductor
        key={component.name}
        name={component.name}
        inductance={component.value}
        schX={useManualPlacement ? undefined : component.schX}
        schY={useManualPlacement ? undefined : component.schY}
        schRotation={component.schRotation}
      />
    ))}
    {diodes.map((component) => (
      <diode
        key={component.name}
        name={component.name}
        manufacturerPartNumber={component.partNumber}
        schX={useManualPlacement ? undefined : component.schX}
        schY={useManualPlacement ? undefined : component.schY}
        schRotation={component.schRotation}
      />
    ))}
    {testPoints.map((component) => (
      <testpoint
        key={component.name}
        name={component.name}
        schX={useManualPlacement ? undefined : component.schX}
        schY={useManualPlacement ? undefined : component.schY}
      />
    ))}
    {transistors.map((component) => (
      <transistor
        key={component.name}
        name={component.name}
        manufacturerPartNumber={component.partNumber}
        type="npn"
        schX={useManualPlacement ? undefined : component.schX}
        schY={useManualPlacement ? undefined : component.schY}
        schRotation={component.schRotation}
      />
    ))}
    <TPS78230DRVR
      name="U2"
      schX={useManualPlacement ? undefined : -9.7}
      schY={useManualPlacement ? undefined : 0.5}
      schWidth={1.2}
      schHeight={1.2}
      schPinArrangement={{
        leftSide: { pins: [6, 4, 2], direction: "top-to-bottom" },
        rightSide: { pins: [1, 7, 3, 5], direction: "top-to-bottom" },
      }}
      schPinStyle={{
        pin4: { marginTop: 0.2 },
        pin2: { marginTop: 0.2 },
        pin7: { marginTop: 0.2 },
      }}
    />
    <MSP430G2332IPW20
      name="U4"
      schX={useManualPlacement ? undefined : -1.9}
      schY={useManualPlacement ? undefined : -3.5}
      schWidth={4.4}
      schHeight={2.8}
      schPinArrangement={{
        leftSide: {
          pins: [2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 1],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: [8, 9, 10, 11, 12, 13, 19, 18, 20],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{
        pin16: { marginTop: 0.2 },
        pin1: { marginTop: 0.2 },
        pin20: { marginTop: 0.8 },
      }}
    />
    {genericChips.map((component) => (
      <chip
        key={component.name}
        name={component.name}
        manufacturerPartNumber={component.partNumber}
        pinLabels={component.pinLabels}
        schPinArrangement={component.schPinArrangement as any}
        schPinStyle={component.schPinStyle}
        schWidth={component.schWidth}
        schHeight={component.schHeight}
        schX={useManualPlacement ? undefined : component.schX}
        schY={useManualPlacement ? undefined : component.schY}
      />
    ))}

    {traceConnections.map(({ from, to, schDisplayLabel }, index) => (
      <trace
        key={`${from}-${to}-${index}`}
        from={from}
        to={to}
        schDisplayLabel={schDisplayLabel}
      />
    ))}
    <trace from=".C9 > .pin2" to="net.GND" />
    <trace from=".U2 > .pin1" to={threeVoltNetSelector} />
    <netlabel
      net="TEST"
      connectsTo=".U4 > .pin17"
      schX={-4.5}
      schY={-4.3}
      anchorSide="right"
    />
    <netlabel
      net="TEST"
      connectsTo=".J6 > .pin1"
      schX={-2.25}
      schY={-6.9}
      anchorSide="left"
    />
  </subcircuit>
);

export default Microcontroller_MSP430G2332;
