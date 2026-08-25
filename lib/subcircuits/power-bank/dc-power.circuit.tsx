import "tscircuit";

type Placement = { schX: number; schY: number; schRotation?: number };
type Passive = Placement & { name: string; partNumber: string; value: string };

// Generated once from PMP9776.SchDoc with altium-to-circuit-json. Everything
// required at runtime is embedded below; the final schematic has no converter
// or JSON-file dependency.
const capacitors: Passive[] = [
  {
    name: "C2",
    partNumber: "C2",
    schX: -0.9,
    schY: 4.8,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C4",
    partNumber: "C4",
    schX: 0.9,
    schY: 4.8,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C3",
    partNumber: "C3",
    schX: 0.1,
    schY: 4.8,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C5",
    partNumber: "C5",
    schX: -2.7,
    schY: 4.6,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C1",
    partNumber: "C1",
    schX: -10.3,
    schY: 4.2,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C7",
    partNumber: "C7",
    schX: -11.5,
    schY: 1,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C6",
    partNumber: "C6",
    schX: -9.7,
    schY: 2.2,
    value: "1uF",
    schRotation: 270,
  },
];
const resistors: Passive[] = [
  {
    name: "R4",
    partNumber: "R4",
    schX: -10.5,
    schY: 2.3,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R3",
    partNumber: "R3",
    schX: -11.5,
    schY: 2.5,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R2",
    partNumber: "R2",
    schX: -2.3,
    schY: 3.7,
    value: "1k",
    schRotation: 180,
  },
  {
    name: "R1",
    partNumber: "R1",
    schX: -3.5,
    schY: 4.5,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R6",
    partNumber: "R6",
    schX: -3.5,
    schY: 3.1,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R5",
    partNumber: "R5",
    schX: -8.7,
    schY: 2.6,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R7",
    partNumber: "R7",
    schX: -11.5,
    schY: 1.7,
    value: "1k",
    schRotation: 90,
  },
];
const inductors: Passive[] = [
  {
    name: "L1",
    partNumber: "L1",
    schX: -6.7,
    schY: 6.95,
    value: "1uH",
    schRotation: 0,
  },
];
const diodes: any[] = [];
const testPoints: Array<{ name: string; schX: number; schY: number }> = [];
const mosfets = [
  {
    name: "Q2",
    partNumber: "Q2",
    schX: -12.45,
    schY: 1.38,
    drainSide: "top",
    gateSide: "left",
    sourceSide: "bottom",
  },
  {
    name: "Q1",
    partNumber: "Q1",
    schX: -1.55,
    schY: 2.98,
    drainSide: "top",
    gateSide: "right",
    sourceSide: "bottom",
  },
] as const;
const genericChips = [
  {
    name: "U1",
    partNumber: "U1",
    schX: -6.4,
    schY: 4.3,
    pinLabels: {
      pin1: "PGND",
      pin2: "SW",
      pin3: "VIN",
      pin4: "CC",
      pin5: "AGND",
      pin6: "FB",
      pin7: "EN",
      pin8: "INACT",
      pin9: "VOUT",
    },
    schPinArrangement: {
      leftSide: {
        pins: [3, 7, 4, 8],
        direction: "top-to-bottom",
      },
      rightSide: {
        pins: [9, 2, 6, 5, 1],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {
      pin7: {
        marginTop: 0.4,
      },
      pin4: {
        marginTop: 0.4,
      },
      pin8: {
        marginTop: 0.4,
      },
      pin2: {
        marginTop: 0.4,
      },
      pin6: {
        marginTop: 0.4,
      },
      pin5: {
        marginTop: 0.4,
      },
    },
    schWidth: 2.2,
    schHeight: 2.8,
  },
  {
    name: "J1",
    partNumber: "",
    schX: -11.38,
    schY: 5,
    pinLabels: { pin1: "1" },
    schPinArrangement: {
      rightSide: { pins: [1], direction: "top-to-bottom" },
    },
    schPinStyle: {},
    schWidth: 0.3,
    schHeight: 0.3,
  },
  {
    name: "J3",
    partNumber: "",
    schX: -11.38,
    schY: 3.7,
    pinLabels: { pin1: "1" },
    schPinArrangement: {
      rightSide: { pins: [1], direction: "top-to-bottom" },
    },
    schPinStyle: {},
    schWidth: 0.3,
    schHeight: 0.3,
  },
  {
    name: "J2",
    partNumber: "",
    schX: 2.78,
    schY: 5.3,
    pinLabels: { pin1: "1" },
    schPinArrangement: {
      leftSide: { pins: [1], direction: "top-to-bottom" },
    },
    schPinStyle: {},
    schWidth: 0.3,
    schHeight: 0.3,
  },
  {
    name: "J4",
    partNumber: "",
    schX: 2.78,
    schY: 4.3,
    pinLabels: { pin1: "1" },
    schPinArrangement: {
      leftSide: { pins: [1], direction: "top-to-bottom" },
    },
    schPinStyle: {},
    schWidth: 0.3,
    schHeight: 0.3,
  },
] as const;
const schematicNets = [
  {
    name: "VBUS",
    ports: [
      ".C2 > .pin1",
      ".C4 > .pin1",
      ".C3 > .pin1",
      ".C5 > .pin1",
      ".U1 > .pin9",
      ".R1 > .pin2",
      ".J2 > .pin1",
    ],
  },
  {
    name: "GND",
    ports: [
      ".C2 > .pin2",
      ".C4 > .pin2",
      ".C3 > .pin2",
      ".U1 > .pin1",
      ".U1 > .pin5",
      ".C1 > .pin2",
      ".J3 > .pin1",
      ".R4 > .pin1",
      ".Q2 > .source",
      ".Q1 > .source",
      ".R6 > .pin1",
      ".J4 > .pin1",
      ".C7 > .pin2",
      ".C6 > .pin2",
    ],
  },
  {
    name: "NET_001",
    ports: [
      ".C5 > .pin2",
      ".U1 > .pin6",
      ".R2 > .pin2",
      ".R1 > .pin1",
      ".R6 > .pin2",
    ],
  },
  {
    name: "NET_002",
    ports: [".U1 > .pin2", ".L1 > .pin2"],
  },
  {
    name: "VBAT",
    ports: [".U1 > .pin3", ".C1 > .pin1", ".J1 > .pin1", ".L1 > .pin1"],
  },
  {
    name: "CC",
    ports: [".U1 > .pin4", ".R4 > .pin2", ".R3 > .pin2", ".C6 > .pin1"],
  },
  {
    name: "INACT",
    ports: [".U1 > .pin8", ".R5 > .pin2"],
  },
  {
    name: "NET_003",
    ports: [".R3 > .pin1", ".Q2 > .drain", ".R7 > .pin2"],
  },
  {
    name: "NET_004",
    ports: [".Q1 > .drain", ".R2 > .pin1"],
  },
  {
    name: "NET_005",
    ports: [".C7 > .pin1", ".R7 > .pin1"],
  },
] as const;

const traceConnections = schematicNets.flatMap((net) =>
  net.ports.slice(1).map((to) => ({ from: net.ports[0], to })),
);
const groundNet = schematicNets.find((net) => net.name === "GND")!;
// tscircuit net selectors cannot begin with a digit. The zero-width prefix
// keeps the rendered power-net text as "3V" while satisfying the selector.
const threeVoltNetName = "\u200B3V";

export default () => (
  <board
    routingDisabled
    placementDrcChecksDisabled
    schAutoLayoutEnabled={false}
  >
    <net name="GND" isGroundNet />
    <net name={threeVoltNetName} isPowerNet />
    <net name="VCUR" />
    <net name="VCOM" />

    {capacitors.map((component) => (
      <capacitor
        key={component.name}
        name={component.name}
        capacitance={component.value}
        schX={component.schX}
        schY={component.schY}
        schRotation={component.schRotation}
      />
    ))}
    {resistors.map((component) => (
      <resistor
        key={component.name}
        name={component.name}
        resistance={component.value}
        schX={component.schX}
        schY={component.schY}
        schRotation={component.schRotation}
      />
    ))}
    {inductors.map((component) => (
      <inductor
        key={component.name}
        name={component.name}
        inductance={component.value}
        schX={component.schX}
        schY={component.schY}
        schRotation={component.schRotation}
      />
    ))}
    {diodes.map((component) => (
      <diode
        key={component.name}
        name={component.name}
        manufacturerPartNumber={component.partNumber}
        schX={component.schX}
        schY={component.schY}
        schRotation={component.schRotation}
      />
    ))}
    {testPoints.map((component) => (
      <testpoint
        key={component.name}
        name={component.name}
        schX={component.schX}
        schY={component.schY}
      />
    ))}
    {mosfets.map((component) => (
      <mosfet
        key={component.name}
        name={component.name}
        manufacturerPartNumber={component.partNumber}
        channelType="n"
        mosfetMode="enhancement"
        symbolDrainSide={component.drainSide}
        symbolSourceSide={component.sourceSide}
        symbolGateSide={component.gateSide}
        schX={component.schX}
        schY={component.schY}
      />
    ))}
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
        schX={component.schX}
        schY={component.schY}
      />
    ))}

    {traceConnections.map(({ from, to }, index) => (
      <trace key={`${from}-${to}-${index}`} from={from} to={to} />
    ))}
    <trace from={groundNet.ports[0]} to="net.GND" />
    <netlabel net="VCUR" connectsTo=".Q2 > .gate" anchorSide="right" />
    <netlabel net="VCOM" connectsTo=".Q1 > .gate" anchorSide="left" />
    <netlabel
      net={threeVoltNetName}
      connectsTo=".R5 > .pin1"
      anchorSide="bottom"
    />
  </board>
);
