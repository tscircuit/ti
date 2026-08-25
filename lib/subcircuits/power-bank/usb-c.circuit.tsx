import "tscircuit";

type Placement = { schX: number; schY: number; schRotation?: number };
type Passive = Placement & { name: string; partNumber: string; value: string };

// Generated once from PMP40909_schematic.SchDoc with altium-to-circuit-json. Everything
// required at runtime is embedded below; the final schematic has no converter
// or JSON-file dependency.
const capacitors: Passive[] = [
  {
    name: "C29",
    partNumber: "GRM188R72E222KW07D",
    schX: -6.2,
    schY: -1.1,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C10",
    partNumber: "EEHZA1E101XP",
    schX: -10.6,
    schY: 6.57,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C11",
    partNumber: "GRM32ER71E226KE15L",
    schX: -9.8,
    schY: 6.5,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C2",
    partNumber: "CGA3E2X7R1H104K080AA",
    schX: -6.4,
    schY: 8.9,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C13",
    partNumber: "GRM188R72E222KW07D",
    schX: -6.2,
    schY: 6.1,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C9",
    partNumber: "CGA3E2X7R1H104K080AA",
    schX: -4.5,
    schY: 6.8,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C14",
    partNumber: "0603ZD475KAT2A",
    schX: -4.4,
    schY: 5.5,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C1",
    partNumber: "GRT188R61H105ME13D",
    schX: 0.6,
    schY: 8.9,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C3",
    partNumber: "GRM32ER71E226KE15L",
    schX: 4.2,
    schY: 8.3,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C4",
    partNumber: "GRM32ER71E226KE15L",
    schX: 4.8,
    schY: 8.3,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C5",
    partNumber: "GRM32ER71E226KE15L",
    schX: 5.6,
    schY: 8.3,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C6",
    partNumber: "GRM32ER71E226KE15L",
    schX: 6.4,
    schY: 8.3,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C7",
    partNumber: "GRM32ER71E226KE15L",
    schX: 7,
    schY: 8.3,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C8",
    partNumber: "GRM32ER71E226KE15L",
    schX: 7.8,
    schY: 8.3,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C26",
    partNumber: "EEHZA1E101XP",
    schX: -10.6,
    schY: -0.63,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C27",
    partNumber: "GRM32ER71E226KE15L",
    schX: -9.8,
    schY: -0.7,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C22",
    partNumber: "CGA3E2X7R1H104K080AA",
    schX: -5,
    schY: 2.3,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C25",
    partNumber: "CGA3E2X7R1H104K080AA",
    schX: -4.5,
    schY: -0.4,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C31",
    partNumber: "0603ZD475KAT2A",
    schX: -4.4,
    schY: -1.7,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C23",
    partNumber: "GRT188R61H105ME13D",
    schX: 0.6,
    schY: 1.7,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C16",
    partNumber: "GRM32ER71E226KE15L",
    schX: 4.2,
    schY: 1.5,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C17",
    partNumber: "GRM32ER71E226KE15L",
    schX: 5,
    schY: 1.5,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C18",
    partNumber: "GRM32ER71E226KE15L",
    schX: 5.8,
    schY: 1.5,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C19",
    partNumber: "GRM32ER71E226KE15L",
    schX: 6.6,
    schY: 1.5,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C20",
    partNumber: "GRM32ER71E226KE15L",
    schX: 7.4,
    schY: 1.5,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C21",
    partNumber: "GRM32ER71E226KE15L",
    schX: 8.2,
    schY: 1.5,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C24",
    partNumber: "C0603X332K5RACTU",
    schX: -1.1,
    schY: -8.4,
    value: "1uF",
    schRotation: 180,
  },
  {
    name: "C32",
    partNumber: "GRT188R61H105ME13D",
    schX: 9.2,
    schY: 8.5,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C33",
    partNumber: "GRT188R61H105ME13D",
    schX: 9.6,
    schY: 1.5,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C12",
    partNumber: "GRM1885C1H100JA01D",
    schX: 1.8,
    schY: 6.1,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C28",
    partNumber: "GRM1885C1H100JA01D",
    schX: 1.8,
    schY: -1.1,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C15",
    partNumber: "GRM1885C1H332JA01D",
    schX: 0.6,
    schY: 5.7,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C30",
    partNumber: "GRM1885C1H332JA01D",
    schX: 0.6,
    schY: -1.5,
    value: "1uF",
    schRotation: 270,
  },
];
const resistors: Passive[] = [
  {
    name: "R12",
    partNumber: "CRCW12061R20FKEA",
    schX: -6.2,
    schY: -0.4,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R4",
    partNumber: "CRCW12061R20FKEA",
    schX: -6.2,
    schY: 6.8,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R2",
    partNumber: "ERJ-3EKF49R9V",
    schX: 3.4,
    schY: 9.2,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R5",
    partNumber: "RCG060310K0FKEA",
    schX: 3.4,
    schY: 6.6,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R1",
    partNumber: "WSL2512R0100FEA",
    schX: 8.8,
    schY: 9.6,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R8",
    partNumber: "ERJ-3EKF49R9V",
    schX: 3.4,
    schY: 2,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R14",
    partNumber: "RCG060310K0FKEA",
    schX: 3.4,
    schY: -0.6,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R7",
    partNumber: "WSL2512R0100FEA",
    schX: 9.2,
    schY: 2.6,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R17",
    partNumber: "RMCF0603ZT0R00",
    schX: 6.2,
    schY: 5.5,
    value: "1k",
    schRotation: 180,
  },
  {
    name: "R18",
    partNumber: "RMCF0603ZT0R00",
    schX: 6.2,
    schY: 4.4,
    value: "1k",
    schRotation: 180,
  },
  {
    name: "R9",
    partNumber: "RCG060310K0FKEA",
    schX: 0.4,
    schY: -8.4,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R10",
    partNumber: "CRCW06031M30FKEA",
    schX: 2.4,
    schY: -6.6,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R15",
    partNumber: "ERJ-3EKF1000V",
    schX: -2.6,
    schY: -7,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R16",
    partNumber: "ERJ-3EKF1000V",
    schX: -2.6,
    schY: -6.2,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "ATOG2",
    partNumber: "RMCF0603ZT0R00",
    schX: -3.8,
    schY: -2.6,
    value: "1k",
    schRotation: 180,
  },
  {
    name: "ATOG1",
    partNumber: "RMCF0603ZT0R00",
    schX: -3.8,
    schY: 4.6,
    value: "1k",
    schRotation: 180,
  },
  {
    name: "R6",
    partNumber: "CRCW060310K0FKEA",
    schX: 0.6,
    schY: 6.4,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R13",
    partNumber: "CRCW060310K0FKEA",
    schX: 0.6,
    schY: -0.8,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R3",
    partNumber: "CRCW0603191KFKEA",
    schX: 3.4,
    schY: 7.8,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R11",
    partNumber: "CRCW0603191KFKEA",
    schX: 3.4,
    schY: 0.6,
    value: "1k",
    schRotation: 90,
  },
];
const inductors: Passive[] = [
  {
    name: "L1",
    partNumber: "CMLE105T-2R2MS-99",
    schX: -7.4,
    schY: 7.64,
    value: "1uH",
    schRotation: 0,
  },
  {
    name: "L2",
    partNumber: "CMLE105T-2R2MS-99",
    schX: -7.4,
    schY: 0.44,
    value: "1uH",
    schRotation: 0,
  },
];
const diodes: any[] = [];
const testPoints: Array<{ name: string; schX: number; schY: number }> = [
  {
    name: "TP_SW1",
    schX: -6.2,
    schY: 7.88,
  },
  {
    name: "TP_SW2",
    schX: -6.2,
    schY: 0.68,
  },
];
const mosfets: any[] = [];
const genericChips = [
  {
    name: "U1",
    partNumber: "TPS61288RQQR",
    schX: -2.4,
    schY: 7,
    pinLabels: {
      pin11: "VCC",
      pin7: "VIN",
      pin4: "SW",
      pin9: "SW",
      pin8: "BST",
      pin2: "COMP",
      pin6: "EN",
      pin1: "FB",
      pin5: "VOUT",
      pin10: "AGND",
      pin3: "PGND",
    },
    schPinArrangement: {
      leftSide: {
        pins: [7, 4, 9, 8, 6, 11],
        direction: "top-to-bottom",
      },
      rightSide: {
        pins: [5, 1, 2, 10, 3],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {
      pin4: {
        marginTop: 0.2,
      },
      pin8: {
        marginTop: 0.2,
      },
      pin6: {
        marginTop: 0.2,
      },
      pin11: {
        marginTop: 0.2,
      },
      pin1: {
        marginTop: 0.2,
      },
      pin2: {
        marginTop: 0.2,
      },
      pin10: {
        marginTop: 0.6,
      },
    },
    schWidth: 2,
    schHeight: 2.4,
  },
  {
    name: "U2",
    partNumber: "TPS61288RQQR",
    schX: -2.4,
    schY: -0.2,
    pinLabels: {
      pin11: "VCC",
      pin7: "VIN",
      pin4: "SW",
      pin9: "SW",
      pin8: "BST",
      pin2: "COMP",
      pin6: "EN",
      pin1: "FB",
      pin5: "VOUT",
      pin10: "AGND",
      pin3: "PGND",
    },
    schPinArrangement: {
      leftSide: {
        pins: [7, 4, 9, 8, 6, 11],
        direction: "top-to-bottom",
      },
      rightSide: {
        pins: [5, 1, 2, 10, 3],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {
      pin4: {
        marginTop: 0.2,
      },
      pin8: {
        marginTop: 0.2,
      },
      pin6: {
        marginTop: 0.2,
      },
      pin11: {
        marginTop: 0.2,
      },
      pin1: {
        marginTop: 0.2,
      },
      pin2: {
        marginTop: 0.2,
      },
      pin10: {
        marginTop: 0.6,
      },
    },
    schWidth: 2,
    schHeight: 2.4,
  },
  {
    name: "JOUT_P1",
    partNumber: "691214110002",
    schX: 10.8,
    schY: 8.1,
    pinLabels: {
      pin1: "1",
      pin2: "2",
    },
    schPinArrangement: {
      leftSide: {
        pins: [1, 2],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {},
    schWidth: 0.5,
    schHeight: 0.6,
  },
  {
    name: "J1",
    partNumber: "108-0740-001",
    schX: -13.4,
    schY: 7.4,
    pinLabels: {
      pin1: "1",
    },
    schPinArrangement: {
      rightSide: {
        pins: [1],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {},
    schWidth: 0.3,
    schHeight: 0.3,
  },
  {
    name: "J2",
    partNumber: "108-0740-001",
    schX: -13.4,
    schY: 5.6,
    pinLabels: {
      pin1: "1",
    },
    schPinArrangement: {
      rightSide: {
        pins: [1],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {},
    schWidth: 0.3,
    schHeight: 0.3,
  },
  {
    name: "J3",
    partNumber: "5003",
    schX: -13.48,
    schY: -1.6,
    pinLabels: {
      pin1: "1",
    },
    schPinArrangement: {
      rightSide: {
        pins: [1],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {},
    schWidth: 0.3,
    schHeight: 0.3,
  },
  {
    name: "J4",
    partNumber: "5003",
    schX: -13.48,
    schY: -2.4,
    pinLabels: {
      pin1: "1",
    },
    schPinArrangement: {
      rightSide: {
        pins: [1],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {},
    schWidth: 0.3,
    schHeight: 0.3,
  },
] as const;
const u3Parts = [
  {
    name: "U3A",
    partNumber: "TLV9152IDR",
    schX: 0.2,
    schY: -6.6,
    symbolName: "opamp_with_power",
  },
] as const;
const schematicNets = [
  {
    name: "NET_001",
    ports: [".C29 > .pin1", ".R12 > .pin2"],
  },
  {
    name: "GND",
    ports: [
      ".C29 > .pin2",
      ".C10 > .pin2",
      ".C11 > .pin2",
      ".C2 > .pin1",
      ".C13 > .pin2",
      ".U1 > .pin3",
      ".C1 > .pin2",
      ".C3 > .pin2",
      ".C4 > .pin2",
      ".C5 > .pin2",
      ".C6 > .pin2",
      ".C7 > .pin2",
      ".C8 > .pin2",
      ".C26 > .pin2",
      ".C27 > .pin2",
      ".C22 > .pin1",
      ".U2 > .pin3",
      ".C23 > .pin2",
      ".C16 > .pin1",
      ".C17 > .pin1",
      ".C18 > .pin1",
      ".C19 > .pin1",
      ".C20 > .pin1",
      ".C21 > .pin1",
      ".ATOG2 > .pin1",
      ".U3A > .negative_supply",
      ".JOUT_P1 > .pin2",
      ".ATOG1 > .pin1",
      ".J2 > .pin1",
      ".J3 > .pin1",
      ".J4 > .pin1",
      ".C32 > .pin2",
      ".C33 > .pin2",
    ],
  },
  {
    name: "SW2",
    ports: [
      ".R12 > .pin1",
      ".L2 > .pin2",
      ".TP_SW2 > .pin1",
      ".C25 > .pin1",
      ".U2 > .pin4",
      ".U2 > .pin9",
    ],
  },
  {
    name: "VIN1",
    ports: [
      ".C10 > .pin1",
      ".C11 > .pin1",
      ".L1 > .pin1",
      ".C2 > .pin2",
      ".U1 > .pin7",
      ".C26 > .pin1",
      ".C27 > .pin1",
      ".L2 > .pin1",
      ".C22 > .pin2",
      ".U2 > .pin7",
      ".J1 > .pin1",
    ],
  },
  {
    name: "SW1",
    ports: [
      ".L1 > .pin2",
      ".R4 > .pin1",
      ".TP_SW1 > .pin1",
      ".C9 > .pin1",
      ".U1 > .pin4",
      ".U1 > .pin9",
    ],
  },
  {
    name: "NET_002",
    ports: [".R4 > .pin2", ".C13 > .pin1"],
  },
  {
    name: "NET_003",
    ports: [".C9 > .pin2", ".U1 > .pin8"],
  },
  {
    name: "AGND1",
    ports: [
      ".C14 > .pin1",
      ".U1 > .pin10",
      ".R5 > .pin2",
      ".ATOG1 > .pin2",
      ".C12 > .pin2",
      ".C15 > .pin2",
    ],
  },
  {
    name: "VCC1",
    ports: [".C14 > .pin2", ".U1 > .pin11", ".U1 > .pin6"],
  },
  {
    name: "COMP1",
    ports: [".U1 > .pin2", ".R18 > .pin2", ".C12 > .pin1", ".R6 > .pin2"],
  },
  {
    name: "FB1",
    ports: [".U1 > .pin1", ".R5 > .pin1", ".R17 > .pin2", ".R3 > .pin1"],
  },
  {
    name: "VOUT1",
    ports: [
      ".U1 > .pin5",
      ".C1 > .pin1",
      ".R2 > .pin2",
      ".C3 > .pin1",
      ".C4 > .pin1",
      ".C5 > .pin1",
      ".C6 > .pin1",
      ".C7 > .pin1",
      ".C8 > .pin1",
      ".R1 > .pin1",
      ".R15 > .pin1",
      ".U3A > .positive_supply",
    ],
  },
  {
    name: "NET_004",
    ports: [".R2 > .pin1", ".R3 > .pin2"],
  },
  {
    name: "VOUT",
    ports: [
      ".R1 > .pin2",
      ".R7 > .pin2",
      ".JOUT_P1 > .pin1",
      ".C32 > .pin1",
      ".C33 > .pin1",
    ],
  },
  {
    name: "NET_005",
    ports: [".C25 > .pin2", ".U2 > .pin8"],
  },
  {
    name: "AGND2",
    ports: [
      ".C31 > .pin1",
      ".U2 > .pin10",
      ".R14 > .pin2",
      ".ATOG2 > .pin2",
      ".C28 > .pin2",
      ".C30 > .pin2",
    ],
  },
  {
    name: "VCC2",
    ports: [".C31 > .pin2", ".U2 > .pin11", ".U2 > .pin6"],
  },
  {
    name: "COMP2",
    ports: [".U2 > .pin2", ".R18 > .pin1", ".C28 > .pin1", ".R13 > .pin2"],
  },
  {
    name: "FB2",
    ports: [
      ".U2 > .pin1",
      ".R14 > .pin1",
      ".R17 > .pin1",
      ".R10 > .pin2",
      ".R11 > .pin1",
    ],
  },
  {
    name: "VOUT2",
    ports: [
      ".U2 > .pin5",
      ".C23 > .pin1",
      ".R8 > .pin1",
      ".C16 > .pin2",
      ".C17 > .pin2",
      ".C18 > .pin2",
      ".C19 > .pin2",
      ".C20 > .pin2",
      ".C21 > .pin2",
      ".R7 > .pin1",
      ".R16 > .pin1",
    ],
  },
  {
    name: "NET_006",
    ports: [".R8 > .pin2", ".R11 > .pin2"],
  },
  {
    name: "NET_007",
    ports: [".R9 > .pin2", ".R10 > .pin1", ".U3A > .output"],
  },
  {
    name: "NET_008",
    ports: [".R9 > .pin1", ".C24 > .pin1"],
  },
  {
    name: "NET_009",
    ports: [".C24 > .pin2", ".R15 > .pin2", ".U3A > .inverting_input"],
  },
  {
    name: "NET_010",
    ports: [".R16 > .pin2", ".U3A > .non_inverting_input"],
  },
  {
    name: "NET_011",
    ports: [".C15 > .pin1", ".R6 > .pin1"],
  },
  {
    name: "NET_012",
    ports: [".C30 > .pin1", ".R13 > .pin1"],
  },
] as const;

const traceConnections = schematicNets.flatMap((net) =>
  net.ports.slice(1).map((to) => ({ from: net.ports[0], to })),
);
const groundNet = schematicNets.find((net) => net.name === "GND")!;

export default () => (
  <board
    routingDisabled
    placementDrcChecksDisabled
    schAutoLayoutEnabled={false}
  >
    <net name="GND" isGroundNet />

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
    {u3Parts.map((component) => (
      <opamp
        key={component.name}
        name={component.name}
        manufacturerPartNumber={component.partNumber}
        symbolName={component.symbolName}
        schX={component.schX}
        schY={component.schY}
      />
    ))}

    {traceConnections.map(({ from, to }, index) => (
      <trace key={`${from}-${to}-${index}`} from={from} to={to} />
    ))}
    <trace from={groundNet.ports[0]} to="net.GND" />
  </board>
);
