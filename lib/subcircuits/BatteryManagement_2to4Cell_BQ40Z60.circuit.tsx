import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { Fragment } from "react";
import { BQ294700DSG } from "../chips/BQ294700DSG.circuit.tsx";
import { BQ40Z60RHB } from "../chips/BQ40Z60RHB.circuit.tsx";

type Placement = { schX: number; schY: number; schRotation?: number };
type Passive = Placement & { name: string; partNumber: string; value: string };

// Electrical values are taken from the TIDA-00553 reference-design BOM. The
// placement records below remain the normalized Altium coordinates.
const capacitorValues: Record<string, string> = {
  C1: "0.1uF",
  C2: "0.1uF",
  C3: "0.1uF",
  C4: "0.1uF",
  C6: "0.1uF",
  C8: "0.1uF",
  C9: "0.1uF",
  C10: "0.1uF",
  C11: "0.1uF",
  C18: "1uF",
  C19: "0.1uF",
  C20: "2.2uF",
  C21: "0.1uF",
  C22: "0.1uF",
  C23: "0.1uF",
  C26: "0.1uF",
  C27: "1.5uF",
  C36: "100pF",
};

const resistorValues: Record<string, string> = {
  R1: "20",
  R2: "10M",
  R3: "10M",
  R4: "100",
  R5: "5.1k",
  R9: "1M",
  R10: "5.1k",
  R11: "5.1k",
  R12: "1k",
  R13: "1k",
  R16: "1k",
  R17: "499k",
  R18: "20k",
  R19: "1k",
  R22: "5.1k",
  R25: "10",
  R26: "26.1k",
  R27: "9.53k",
  R28: "20.5k",
  R29: "78.7k",
  R30: "100",
  R32: "100",
  R33: "100",
  R34: "1k",
  R35: "100",
  R37: "100",
  R38: "0",
  R39: "100",
  R40: "100",
  R41: "100",
  R42: "100",
  R43: "0.005",
  R44: "0",
};

// Generated once from PWR578A.SchDoc with altium-to-circuit-json. Everything
// required at runtime is embedded below; the final schematic has no converter
// or JSON-file dependency.
const capacitors: Passive[] = [
  {
    name: "C3",
    partNumber: "C3",
    schX: -12.4,
    schY: 8.4,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C6",
    partNumber: "C6",
    schX: -12.4,
    schY: 6.7,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C8",
    partNumber: "C8",
    schX: -12.4,
    schY: 5.4,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C9",
    partNumber: "C9",
    schX: -12.4,
    schY: 4.1,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C11",
    partNumber: "C11",
    schX: -12.4,
    schY: 2.8,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C4",
    partNumber: "C4",
    schX: -5.8,
    schY: 6.9,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C10",
    partNumber: "C10",
    schX: -6.2,
    schY: 4.7,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C1",
    partNumber: "C1",
    schX: 1.9,
    schY: 9.8,
    value: "1uF",
    schRotation: 180,
  },
  {
    name: "C2",
    partNumber: "C2",
    schX: 3,
    schY: 9.8,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C21",
    partNumber: "C21",
    schX: -10.4,
    schY: -0.8,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C22",
    partNumber: "C22",
    schX: -10.4,
    schY: -2.2,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C23",
    partNumber: "C23",
    schX: -10.4,
    schY: -3.6,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C26",
    partNumber: "C26",
    schX: -11.4,
    schY: -5.3,
    value: "1uF",
    schRotation: 270,
  },
  {
    name: "C20",
    partNumber: "C20",
    schX: 1.4,
    schY: 0.6,
    value: "1uF",
    schRotation: 180,
  },
  {
    name: "C27",
    partNumber: "C27",
    schX: 1,
    schY: -3.9,
    value: "1uF",
    schRotation: 90,
  },
  {
    name: "C18",
    partNumber: "C18",
    schX: 1.4,
    schY: 1.6,
    value: "1uF",
    schRotation: 180,
  },
  {
    name: "C19",
    partNumber: "C19",
    schX: -10.4,
    schY: 0.6,
    value: "1uF",
    schRotation: 0,
  },
  {
    name: "C36",
    partNumber: "C36",
    schX: -10.2,
    schY: -5.3,
    value: "1uF",
    schRotation: 270,
  },
];
const resistors: Passive[] = [
  {
    name: "R12",
    partNumber: "R12",
    schX: -14.5,
    schY: 7.1,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R13",
    partNumber: "R13",
    schX: -14.5,
    schY: 5.8,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R16",
    partNumber: "R16",
    schX: -14.5,
    schY: 4.5,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R19",
    partNumber: "R19",
    schX: -14.5,
    schY: 3.2,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R4",
    partNumber: "R4",
    schX: -14.5,
    schY: 8.8,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R5",
    partNumber: "R5",
    schX: -7,
    schY: 7.8,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R11",
    partNumber: "R11",
    schX: 2.2,
    schY: 7,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R10",
    partNumber: "R10",
    schX: 0.1,
    schY: 7,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R2",
    partNumber: "R2",
    schX: -0.8,
    schY: 8,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R3",
    partNumber: "R3",
    schX: 3.2,
    schY: 8,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R25",
    partNumber: "R25",
    schX: -9.8,
    schY: 2.6,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R43",
    partNumber: "R43",
    schX: -14,
    schY: -5.4,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R30",
    partNumber: "R30",
    schX: -12,
    schY: 1,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R32",
    partNumber: "R32",
    schX: -12,
    schY: -0.4,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R35",
    partNumber: "R35",
    schX: -12,
    schY: -1.8,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R37",
    partNumber: "R37",
    schX: -12,
    schY: -3.2,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R33",
    partNumber: "R33",
    schX: 6.6,
    schY: -0.8,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R42",
    partNumber: "R42",
    schX: 7.7,
    schY: -3.9,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R41",
    partNumber: "R41",
    schX: 6.5,
    schY: -3.9,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R34",
    partNumber: "R34",
    schX: 7.8,
    schY: -0.8,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R40",
    partNumber: "R40",
    schX: 5.6,
    schY: -3,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R39",
    partNumber: "R39",
    schX: 4.4,
    schY: -3,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R22",
    partNumber: "R22",
    schX: -6.6,
    schY: 3.4,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R26",
    partNumber: "R26",
    schX: 5.2,
    schY: 2,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R27",
    partNumber: "R27",
    schX: 6.2,
    schY: 2,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R28",
    partNumber: "R28",
    schX: 7.2,
    schY: 2,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R29",
    partNumber: "R29",
    schX: 8.2,
    schY: 2,
    value: "1k",
    schRotation: 0,
  },
  {
    name: "R1",
    partNumber: "R1",
    schX: -2.8,
    schY: 9,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R9",
    partNumber: "R9",
    schX: -1.4,
    schY: 7.2,
    value: "1k",
    schRotation: 270,
  },
  {
    name: "R17",
    partNumber: "R17",
    schX: -1.4,
    schY: 4.6,
    value: "1k",
    schRotation: 180,
  },
  {
    name: "R18",
    partNumber: "R18",
    schX: -5.4,
    schY: 4.6,
    value: "1k",
    schRotation: 90,
  },
  {
    name: "R38",
    partNumber: "R38",
    schX: -12.8,
    schY: -5,
    value: "1k",
    schRotation: 180,
  },
  {
    name: "R44",
    partNumber: "R44",
    schX: -12.8,
    schY: -6,
    value: "1k",
    schRotation: 180,
  },
];
const inductors: Passive[] = [];
const diodes = [
  {
    name: "D2",
    partNumber: "MMSZ5232BS-7-F",
    variant: "zener",
    schX: 7.2,
    schY: -1.66,
    schRotation: 90,
  },
  {
    name: "D5",
    partNumber: "MMSZ5232BS-7-F",
    variant: "zener",
    schX: 7.1,
    schY: -4.76,
    schRotation: 90,
  },
  {
    name: "D4",
    partNumber: "MMSZ5232BS-7-F",
    variant: "zener",
    schX: 5,
    schY: -4.76,
    schRotation: 90,
  },
  {
    name: "D1",
    partNumber: "BAT54HT1G",
    variant: "schottky",
    schX: -8.48,
    schY: 2.6,
    schRotation: 0,
  },
] as const;
const testPoints: Array<{ name: string; schX: number; schY: number }> = [];
const mosfets = [
  {
    name: "Q7",
    partNumber: "BSS138",
    channelType: "n",
    schX: -4.47,
    schY: 5.4,
    gateSide: "left",
    sourceSide: "bottom",
    drainSide: "top",
  },
  {
    name: "Q2",
    partNumber: "CSD17308Q3",
    channelType: "n",
    schX: 0.2,
    schY: 8.53,
    drainSide: "right",
    gateSide: "bottom",
    sourceSide: "left",
  },
  {
    name: "Q3",
    partNumber: "CSD17308Q3",
    channelType: "n",
    schX: 2.2,
    schY: 8.53,
    drainSide: "left",
    gateSide: "bottom",
    sourceSide: "right",
  },
  {
    name: "Q1",
    partNumber: "FDN358P",
    channelType: "p",
    schX: -1.8,
    schY: 9.53,
    drainSide: "left",
    gateSide: "bottom",
    sourceSide: "right",
  },
  {
    name: "Q6",
    partNumber: "BSS138",
    channelType: "n",
    schX: -1.73,
    schY: 5.6,
    gateSide: "right",
    sourceSide: "bottom",
    drainSide: "top",
  },
] as const;
const genericChips = [
  {
    name: "J3",
    partNumber: "J3",
    schX: -15.5,
    schY: 0.6,
    pinLabels: {
      pin5: "5",
      pin4: "4",
      pin1: "1",
      pin2: "2",
      pin3: "3",
    },
    schPinArrangement: {
      rightSide: {
        pins: [1, 2, 3, 4, 5],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {},
    schWidth: 0.8,
    schHeight: 1.2,
  },
  {
    name: "J6",
    partNumber: "J6",
    schX: 12.6,
    schY: -3.3,
    pinLabels: {
      pin4: "4",
      pin1: "1",
      pin2: "2",
      pin3: "3",
    },
    schPinArrangement: {
      leftSide: {
        pins: [4, 3, 2, 1],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {},
    schWidth: 0.8,
    schHeight: 1,
  },
  {
    name: "J4",
    partNumber: "J4",
    schX: 8.4,
    schY: 0.6,
    pinLabels: {
      pin1: "1",
      pin2: "2",
      pin3: "3",
      pin4: "4",
      pin5: "5",
      pin6: "6",
    },
    schPinArrangement: {
      leftSide: {
        pins: [1, 3, 5],
        direction: "top-to-bottom",
      },
      rightSide: {
        pins: [2, 4, 6],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {},
    schWidth: 0.8,
    schHeight: 0.8,
  },
  {
    name: "U1",
    partNumber: "BQ294700DSG",
    schX: -9,
    schY: 7.2,
    pinLabels: {
      pin1: "VDD",
      pin2: "V4",
      pin3: "V3",
      pin4: "V2",
      pin5: "V1",
      pin6: "VSS",
      pin7: "CD",
      pin8: "OUT",
      pin9: "PAD",
    },
    schPinArrangement: {
      leftSide: {
        pins: [1, 2, 3, 4],
        direction: "top-to-bottom",
      },
      rightSide: {
        pins: [8, 7, 6, 5],
        direction: "top-to-bottom",
      },
      bottomSide: {
        pins: [9],
        direction: "left-to-right",
      },
    },
    schPinStyle: {
      pin2: {
        marginTop: 0.2,
      },
      pin3: {
        marginTop: 0.2,
      },
      pin4: {
        marginTop: 0.2,
      },
      pin7: {
        marginTop: 0.2,
      },
      pin6: {
        marginTop: 0.2,
      },
      pin5: {
        marginTop: 0.2,
      },
    },
    schWidth: 1.6,
    schHeight: 1.6,
  },
  {
    name: "F1",
    partNumber: "SFH-1412B",
    schX: -4.6,
    schY: 8.6,
    pinLabels: {
      pin1: "Fuse",
      pin4: "Heater",
      pin3: "Fuse",
      pin2: "2",
    },
    schPinArrangement: {
      leftSide: {
        pins: [1],
        direction: "top-to-bottom",
      },
      rightSide: {
        pins: [3],
        direction: "top-to-bottom",
      },
      topSide: {
        pins: [2],
        direction: "left-to-right",
      },
      bottomSide: {
        pins: [4],
        direction: "left-to-right",
      },
    },
    schPinStyle: {},
    schWidth: 1.2,
    schHeight: 0.8,
  },
  {
    name: "RT4",
    partNumber: "RT4",
    schX: -4.7,
    schY: -3.07,
    pinLabels: {
      pin2: "2",
      pin1: "1",
    },
    schPinArrangement: {
      topSide: {
        pins: [1],
        direction: "left-to-right",
      },
      bottomSide: {
        pins: [2],
        direction: "left-to-right",
      },
    },
    schPinStyle: {},
    schWidth: 0.8,
    schHeight: 0.8,
  },
  {
    name: "RT1",
    partNumber: "RT1",
    schX: -8,
    schY: -2.47,
    pinLabels: {
      pin2: "2",
      pin1: "1",
    },
    schPinArrangement: {
      topSide: {
        pins: [1],
        direction: "left-to-right",
      },
      bottomSide: {
        pins: [2],
        direction: "left-to-right",
      },
    },
    schPinStyle: {},
    schWidth: 0.8,
    schHeight: 0.8,
  },
  {
    name: "RT2",
    partNumber: "RT2",
    schX: -6.9,
    schY: -2.67,
    pinLabels: {
      pin2: "2",
      pin1: "1",
    },
    schPinArrangement: {
      topSide: {
        pins: [1],
        direction: "left-to-right",
      },
      bottomSide: {
        pins: [2],
        direction: "left-to-right",
      },
    },
    schPinStyle: {},
    schWidth: 0.8,
    schHeight: 0.8,
  },
  {
    name: "RT3",
    partNumber: "RT3",
    schX: -5.8,
    schY: -2.87,
    pinLabels: {
      pin2: "2",
      pin1: "1",
    },
    schPinArrangement: {
      topSide: {
        pins: [1],
        direction: "left-to-right",
      },
      bottomSide: {
        pins: [2],
        direction: "left-to-right",
      },
    },
    schPinStyle: {},
    schWidth: 0.8,
    schHeight: 0.8,
  },
  {
    name: "U2",
    partNumber: "BQ40Z60RHB",
    schX: -1.9,
    schY: -1.2,
    pinLabels: {
      pin1: "BAT",
      pin2: "PBI",
      pin3: "VC4",
      pin4: "VC3",
      pin5: "VC2",
      pin6: "VC1",
      pin7: "SRN",
      pin8: "SRP",
      pin9: "VSS",
      pin10: "TS1",
      pin11: "TS2",
      pin12: "TS3",
      pin13: "TS4",
      pin14: "GPIO0",
      pin15: "GPIO1",
      pin16: "SMBD",
      pin17: "SMBC",
      pin18: "VFB",
      pin19: "HSRN",
      pin20: "HSRP",
      pin21: "AFEFUSE",
      pin22: "VCC",
      pin23: "REGN",
      pin24: "PGND",
      pin25: "LODRV",
      pin26: "PH",
      pin27: "HIDRV",
      pin28: "BTST",
      pin29: "ACFET",
      pin30: "DSG",
      pin31: "ACP",
      pin32: "CHG",
      pin33: "PAD",
    },
    schPinArrangement: {
      leftSide: {
        pins: [3, 4, 5, 6, 21, 14, 15, 8, 7, 10, 11, 12, 13, 24, 9, 33],
        direction: "top-to-bottom",
      },
      rightSide: {
        pins: [
          31, 1, 2, 32, 30, 29, 22, 20, 19, 18, 27, 28, 26, 25, 23, 16, 17,
        ],
        direction: "top-to-bottom",
      },
    },
    schPinStyle: {
      pin21: {
        marginTop: 0.2,
      },
      pin14: {
        marginTop: 0.2,
      },
      pin8: {
        marginTop: 0.2,
      },
      pin10: {
        marginTop: 0.4,
      },
      pin24: {
        marginTop: 0.4,
      },
      pin32: {
        marginTop: 0.2,
      },
      pin29: {
        marginTop: 0.2,
      },
      pin20: {
        marginTop: 0.2,
      },
      pin27: {
        marginTop: 0.2,
      },
      pin23: {
        marginTop: 0.2,
      },
      pin16: {
        marginTop: 0.2,
      },
    },
    schWidth: 2.2,
    schHeight: 5.2,
  },
  {
    name: "J7",
    partNumber: "J7",
    schX: 10.6,
    schY: -0.9,
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
    schWidth: 0.8,
    schHeight: 0.8,
  },
] as const;
const zigzagResistorNames = new Set(["RT1", "RT2", "RT3", "RT4"]);
const schematicNets = [
  {
    name: "NET_001",
    ports: [".C3 > .pin1", ".R4 > .pin2", ".U1 > .pin1"],
  },
  {
    name: "GND",
    ports: [
      ".C3 > .pin2",
      ".C11 > .pin2",
      ".C4 > .pin1",
      ".C10 > .pin2",
      ".J3 > .pin5",
      ".C23 > .pin2",
      ".R43 > .pin1",
      ".C20 > .pin1",
      ".C27 > .pin1",
      ".J4 > .pin2",
      ".J4 > .pin4",
      ".J4 > .pin6",
      ".R29 > .pin2",
      ".U1 > .pin6",
      ".U1 > .pin9",
      ".C18 > .pin1",
      ".Q7 > .source",
      ".R17 > .pin2",
      ".Q6 > .source",
      ".R18 > .pin1",
      ".RT4 > .pin2",
      ".RT1 > .pin2",
      ".RT2 > .pin2",
      ".RT3 > .pin2",
      ".U2 > .pin9",
      ".U2 > .pin33",
      ".R38 > .pin2",
    ],
  },
  {
    name: "NET_002",
    ports: [".C6 > .pin1", ".R12 > .pin2", ".U1 > .pin2"],
  },
  {
    name: "NET_003",
    ports: [".C6 > .pin2", ".C8 > .pin1", ".R13 > .pin2", ".U1 > .pin3"],
  },
  {
    name: "NET_004",
    ports: [".C8 > .pin2", ".C9 > .pin1", ".R16 > .pin2", ".U1 > .pin4"],
  },
  {
    name: "NET_005",
    ports: [".C9 > .pin2", ".C11 > .pin1", ".R19 > .pin2", ".U1 > .pin5"],
  },
  {
    name: "NET_006",
    ports: [".C4 > .pin2", ".U1 > .pin7"],
  },
  {
    name: "4P",
    ports: [
      ".J3 > .pin1",
      ".R4 > .pin1",
      ".R12 > .pin1",
      ".R25 > .pin1",
      ".R30 > .pin1",
      ".R1 > .pin1",
      ".F1 > .pin1",
    ],
  },
  {
    name: "PGND",
    ports: [
      ".R43 > .pin2",
      ".D2 > .anode",
      ".D5 > .anode",
      ".J6 > .pin1",
      ".D4 > .anode",
      ".U2 > .pin24",
      ".J7 > .pin2",
      ".R44 > .pin2",
    ],
  },
  {
    name: "NET_007",
    ports: [".R13 > .pin1", ".J3 > .pin2", ".R32 > .pin1"],
  },
  {
    name: "NET_008",
    ports: [".R16 > .pin1", ".J3 > .pin3", ".R35 > .pin1"],
  },
  {
    name: "NET_009",
    ports: [".R19 > .pin1", ".J3 > .pin4", ".R37 > .pin1"],
  },
  {
    name: "NET_010",
    ports: [
      ".R5 > .pin2",
      ".C10 > .pin1",
      ".R22 > .pin2",
      ".Q7 > .gate",
      ".R18 > .pin2",
    ],
  },
  {
    name: "NET_011",
    ports: [".R5 > .pin1", ".U1 > .pin8"],
  },
  {
    name: "NET_012",
    ports: [".C1 > .pin2", ".Q2 > .drain", ".Q3 > .drain"],
  },
  {
    name: "NET_C1_C2",
    ports: [".C1 > .pin1", ".C2 > .pin1"],
  },
  {
    name: "VSYS",
    ports: [".C2 > .pin2", ".R3 > .pin1", ".Q3 > .source"],
  },
  {
    name: "NET_013",
    ports: [".R11 > .pin2", ".U2 > .pin30"],
  },
  {
    name: "NET_014",
    ports: [".R11 > .pin1", ".R3 > .pin2", ".Q3 > .gate"],
  },
  {
    name: "NET_015",
    ports: [".R10 > .pin2", ".U2 > .pin32"],
  },
  {
    name: "NET_016",
    ports: [".R10 > .pin1", ".R2 > .pin2", ".Q2 > .gate"],
  },
  {
    name: "NET_017",
    ports: [".C21 > .pin1", ".R32 > .pin2", ".C19 > .pin2", ".U2 > .pin4"],
  },
  {
    name: "NET_018",
    ports: [".C21 > .pin2", ".C22 > .pin1", ".R35 > .pin2", ".U2 > .pin5"],
  },
  {
    name: "NET_019",
    ports: [".C22 > .pin2", ".C23 > .pin1", ".R37 > .pin2", ".U2 > .pin6"],
  },
  {
    name: "NET_020",
    ports: [".R25 > .pin2", ".D1 > .anode"],
  },
  {
    name: "NET_021",
    ports: [".C26 > .pin1", ".U2 > .pin8", ".C36 > .pin1", ".R38 > .pin1"],
  },
  {
    name: "NET_022",
    ports: [".C26 > .pin2", ".U2 > .pin7", ".C36 > .pin2", ".R44 > .pin1"],
  },
  {
    name: "NET_023",
    ports: [".C20 > .pin2", ".U2 > .pin2"],
  },
  {
    name: "NET_024",
    ports: [".R30 > .pin2", ".C19 > .pin1", ".U2 > .pin3"],
  },
  {
    name: "NET_025",
    ports: [".R33 > .pin2", ".D2 > .cathode", ".R34 > .pin1"],
  },
  {
    name: "NET_026",
    ports: [".R33 > .pin1", ".U2 > .pin14"],
  },
  {
    name: "SMBC",
    ports: [".R42 > .pin2", ".J6 > .pin2"],
  },
  {
    name: "NET_027",
    ports: [".R42 > .pin1", ".R41 > .pin2", ".D5 > .cathode"],
  },
  {
    name: "NET_028",
    ports: [".R41 > .pin1", ".U2 > .pin17"],
  },
  {
    name: "SYSPRES",
    ports: [".R34 > .pin2", ".J7 > .pin1"],
  },
  {
    name: "SMBD",
    ports: [".J6 > .pin3", ".R40 > .pin2"],
  },
  {
    name: "NET_029",
    ports: [".R40 > .pin1", ".R39 > .pin2", ".D4 > .cathode"],
  },
  {
    name: "NET_030",
    ports: [".R39 > .pin1", ".U2 > .pin16"],
  },
  {
    name: "NET_031",
    ports: [".R22 > .pin1", ".U2 > .pin21"],
  },
  {
    name: "NET_032",
    ports: [".C27 > .pin2", ".U2 > .pin23"],
  },
  {
    name: "2-Cell",
    ports: [".J4 > .pin1", ".R28 > .pin2", ".R29 > .pin1"],
  },
  {
    name: "3-Cell",
    ports: [".J4 > .pin3", ".R27 > .pin2", ".R28 > .pin1"],
  },
  {
    name: "4-Cell",
    ports: [".J4 > .pin5", ".R26 > .pin2", ".R27 > .pin1"],
  },
  {
    name: "NET_033",
    ports: [".R26 > .pin1", ".U2 > .pin18"],
  },
  {
    name: "NET_034",
    ports: [".R1 > .pin2", ".Q1 > .drain", ".F1 > .pin3"],
  },
  {
    name: "NET_035",
    ports: [".R9 > .pin2", ".Q1 > .gate", ".Q6 > .drain"],
  },
  {
    name: "NET_036",
    ports: [".Q2 > .source", ".Q1 > .source", ".R9 > .pin1", ".R2 > .pin1"],
  },
  {
    name: "NET_037",
    ports: [".RT1 > .pin1", ".U2 > .pin10"],
  },
  {
    name: "NET_038",
    ports: [".RT2 > .pin1", ".U2 > .pin11"],
  },
  {
    name: "NET_039",
    ports: [".RT3 > .pin1", ".U2 > .pin12"],
  },
  {
    name: "NET_040",
    ports: [".RT4 > .pin1", ".U2 > .pin13"],
  },
  {
    name: "NET_041",
    ports: [".D1 > .cathode", ".C18 > .pin2", ".U2 > .pin1"],
  },
  {
    name: "NET_042",
    ports: [".Q7 > .drain", ".F1 > .pin4"],
  },
  {
    name: "NET_043",
    ports: [".R17 > .pin1", ".Q6 > .gate"],
  },
] as const;

const cellSenseNetNames = new Set(["NET_017", "NET_018", "NET_019", "NET_024"]);
const cellSenseTraceConnections = [
  { from: ".C19 > .pin1", to: ".R30 > .pin2" },
  { from: ".C19 > .pin1", to: ".U2 > .pin3" },
  { from: ".C19 > .pin2", to: ".C21 > .pin1" },
  { from: ".C19 > .pin2", to: ".R32 > .pin2" },
  { from: ".C19 > .pin2", to: ".U2 > .pin4" },
  { from: ".C21 > .pin2", to: ".C22 > .pin1" },
  { from: ".C21 > .pin2", to: ".R35 > .pin2" },
  { from: ".C21 > .pin2", to: ".U2 > .pin5" },
  { from: ".C22 > .pin2", to: ".C23 > .pin1" },
  { from: ".C22 > .pin2", to: ".R37 > .pin2" },
  { from: ".C22 > .pin2", to: ".U2 > .pin6" },
] as const;
const traceConnections: Array<{ from: string; to: string }> = [
  ...schematicNets.flatMap((net) => {
    if (cellSenseNetNames.has(net.name)) return [];
    const ports =
      net.name === "GND"
        ? net.ports.filter((port) => port !== ".C23 > .pin2")
        : net.ports;
    return ports.slice(1).map((to) => ({ from: ports[0], to }));
  }),
  ...cellSenseTraceConnections,
];
const groundNet = schematicNets.find((net) => net.name === "GND")!;
const fourPNetName = "\u200B4P";
const boundaryNets = [
  { name: fourPNetName, isPowerNet: true, ports: [".J3 > .pin1"] },
  { name: "VDD", isPowerNet: true, ports: [".U1 > .pin1"] },
  { name: "BAT", isPowerNet: true, ports: [".U2 > .pin1"] },
  { name: "VSYS", isPowerNet: true, ports: [".C2 > .pin2"] },
  { name: "VCC", isPowerNet: true, ports: [".U2 > .pin22"] },
  { name: "REGN", isPowerNet: true, ports: [".U2 > .pin23"] },
  { name: "PH", isPowerNet: true, ports: [".U2 > .pin26"] },
  { name: "HIDRV", isPowerNet: false, ports: [".U2 > .pin27"] },
  { name: "LODRV", isPowerNet: false, ports: [".U2 > .pin25"] },
  { name: "ACFET", isPowerNet: false, ports: [".U2 > .pin29"] },
  { name: "GPIO1", isPowerNet: false, ports: [".U2 > .pin15"] },
] as const;

export const BatteryManagement_2to4Cell_BQ40Z60 = (props: SubcircuitProps) => (
  <subcircuit
    routingDisabled
    schAutoLayoutEnabled={false}
    schTraceAutoLabelEnabled={false}
    {...props}
  >
    <net name="GND" isGroundNet />
    <net name="PGND" isGroundNet />
    <net name={fourPNetName} isPowerNet />
    <net name="VDD" isPowerNet />
    <net name="BAT" isPowerNet />
    <net name="VSYS" isPowerNet />
    <net name="VCC" isPowerNet />
    <net name="REGN" isPowerNet />
    <net name="PH" isPowerNet />
    <net name="HIDRV" />
    <net name="LODRV" />
    <net name="ACFET" />
    <net name="GPIO1" />

    {capacitors.map((component) => (
      <capacitor
        key={component.name}
        name={component.name}
        capacitance={capacitorValues[component.name] ?? component.value}
        schX={component.schX}
        schY={component.schY}
        schRotation={component.schRotation}
      />
    ))}
    {resistors.map((component) => (
      <resistor
        key={component.name}
        name={component.name}
        resistance={resistorValues[component.name] ?? component.value}
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
        variant={component.variant}
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
        channelType={component.channelType}
        mosfetMode="enhancement"
        symbolDrainSide={component.drainSide}
        symbolSourceSide={component.sourceSide}
        symbolGateSide={component.gateSide}
        schX={component.schX}
        schY={component.schY}
      />
    ))}
    {genericChips
      .filter((component) => !zigzagResistorNames.has(component.name))
      .map((component) => {
        const placementProps = {
          name: component.name,
          schPinArrangement: component.schPinArrangement as any,
          schPinStyle: component.schPinStyle,
          schWidth: component.schWidth,
          schHeight: component.schHeight,
          schX: component.schX,
          schY: component.schY,
        };

        if (component.name === "U1") {
          return <BQ294700DSG key={component.name} {...placementProps} />;
        }
        if (component.name === "U2") {
          return <BQ40Z60RHB key={component.name} {...placementProps} />;
        }

        return (
          <chip
            key={component.name}
            manufacturerPartNumber={component.partNumber}
            pinLabels={component.pinLabels}
            {...placementProps}
          />
        );
      })}
    {genericChips
      .filter((component) => zigzagResistorNames.has(component.name))
      .map((component) => (
        <resistor
          key={component.name}
          name={component.name}
          manufacturerPartNumber={component.partNumber}
          resistance="10k"
          symbolName="resistor"
          schX={component.schX}
          schY={component.schY}
          schRotation={270}
        />
      ))}

    {traceConnections.map(({ from, to }, index) => (
      <Fragment key={`${from}-${to}-${index}`}>
        <trace from={from} to={to} />
      </Fragment>
    ))}
    {boundaryNets.flatMap((net) =>
      net.ports.map((port) => (
        <Fragment key={`${net.name}-${port}`}>
          <trace from={port} to={`net.${net.name}`} />
        </Fragment>
      )),
    )}
    <trace from={groundNet.ports[0]} to="net.GND" />
    <trace from=".C23 > .pin2" to="net.GND" />
    <trace from=".R43 > .pin2" to="net.PGND" />
  </subcircuit>
);

export default BatteryManagement_2to4Cell_BQ40Z60;
