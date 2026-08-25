import "tscircuit";
import type { SubcircuitProps } from "@tscircuit/props";
import { BQ25731RSN } from "../chips/BQ25731RSN.circuit.tsx";

type SchematicPin = {
  number: number;
  name: string;
};

type SchematicComponent = {
  ref: string;
  value: string;
  partNumber: string;
  orientation: number;
  centerX: number;
  centerY: number;
  pins?: SchematicPin[];
};

// Distilled from altium-to-circuit-json output and normalized to the existing
// 25-unit tscircuit grid. Centers use emitted symbol bounds, not Altium anchors.
// Only fields used here are retained, so this file has no runtime dependency
// on the converter or its generated Circuit JSON.
const components: SchematicComponent[] = [
  {
    ref: "C1",
    value: "0.01uF",
    partNumber: "GRM188R71C103KA01D",
    orientation: 2,
    centerX: 450,
    centerY: 685,
  },
  {
    ref: "C2",
    value: "0.01uF",
    partNumber: "GRM188R71E103KA01D",
    orientation: 3,
    centerX: 525,
    centerY: 825,
  },
  {
    ref: "C3",
    value: "0.01uF",
    partNumber: "GRM188R71E103KA01D",
    orientation: 3,
    centerX: 1160,
    centerY: 845,
  },
  {
    ref: "C4",
    value: "68uF",
    partNumber: "25TDC68MYF",
    orientation: 3,
    centerX: 1535,
    centerY: 843.5,
  },
  {
    ref: "C5",
    value: "0.018uF",
    partNumber: "GRM188R71H183KA01D",
    orientation: 2,
    centerX: 1185,
    centerY: 690,
  },
  {
    ref: "C6",
    value: "0.018uF",
    partNumber: "GRM188R71H183KA01D",
    orientation: 2,
    centerX: 1185,
    centerY: 650,
  },
  {
    ref: "C20",
    value: "10uF",
    partNumber: "GRM188R61E106MA73D",
    orientation: 3,
    centerX: 1480,
    centerY: 845,
  },
  {
    ref: "C21",
    value: "1000pF",
    partNumber: "C0402C102J3RACTU",
    orientation: 3,
    centerX: 545,
    centerY: 825,
  },
  {
    ref: "C22",
    value: "0.047uF",
    partNumber: "GRM188R71E473KA01D",
    orientation: 1,
    centerX: 720,
    centerY: 825,
  },
  {
    ref: "C23",
    value: "0.047uF",
    partNumber: "GRM188R71E473KA01D",
    orientation: 1,
    centerX: 950,
    centerY: 825,
  },
  {
    ref: "C24",
    value: "1uF",
    partNumber: "GRM188R71E105KA12D",
    orientation: 3,
    centerX: 155,
    centerY: 805,
  },
  {
    ref: "C25",
    value: "150pF",
    partNumber: "885012005062",
    orientation: 2,
    centerX: 625,
    centerY: 780,
  },
  {
    ref: "C26",
    value: "150pF",
    partNumber: "C0603C151J5GACTU",
    orientation: 0,
    centerX: 1055,
    centerY: 780,
  },
  {
    ref: "C27",
    value: "0.47uF",
    partNumber: "C1608X5R1H474K080AB",
    orientation: 3,
    centerX: 540,
    centerY: 735,
  },
  {
    ref: "C28",
    value: "0.033uF",
    partNumber: "GRM188R71E333KA01D",
    orientation: 2,
    centerX: 485,
    centerY: 710,
  },
  {
    ref: "C29",
    value: "0.033uF",
    partNumber: "GRM188R71E333KA01D",
    orientation: 3,
    centerX: 390,
    centerY: 695,
  },
  {
    ref: "C30",
    value: "0.068uF",
    partNumber: "C1005X5R1H683K050BB",
    orientation: 3,
    centerX: 965,
    centerY: 655,
  },
  {
    ref: "C31",
    value: "0.1uF",
    partNumber: "GRM188R71E104KA01D",
    orientation: 2,
    centerX: 1400,
    centerY: 800,
  },
  {
    ref: "C32",
    value: "1uF",
    partNumber: "GRM188R71E105KA12D",
    orientation: 3,
    centerX: 540,
    centerY: 615,
  },
  {
    ref: "C33",
    value: "33pF",
    partNumber: "GRM1555C1H330JA01D",
    orientation: 0,
    centerX: 635,
    centerY: 600,
  },
  {
    ref: "C34",
    value: "2.2uF",
    partNumber: "GRM188R6YA225KA12D",
    orientation: 0,
    centerX: 1035,
    centerY: 600,
  },
  {
    ref: "C35",
    value: "4700pF",
    partNumber: "CGA2B2X7R1H472K050BA",
    orientation: 2,
    centerX: 605,
    centerY: 570,
  },
  {
    ref: "C36",
    value: "680pF",
    partNumber: "GRM1555C1H681JA01D",
    orientation: 0,
    centerX: 1035,
    centerY: 560,
  },
  {
    ref: "C37",
    value: "15pF",
    partNumber: "GRM1555C1H150JA01D",
    orientation: 0,
    centerX: 995,
    centerY: 535,
  },
  {
    ref: "C38",
    value: "100pF",
    partNumber: "GRM155R71H182KA01D",
    orientation: 1,
    centerX: 370,
    centerY: 535,
  },
  {
    ref: "C39",
    value: "100pF",
    partNumber: "GRM155R71H182KA01D",
    orientation: 1,
    centerX: 1075,
    centerY: 455,
  },
  {
    ref: "C40",
    value: "100pF",
    partNumber: "GRM155R71H182KA01D",
    orientation: 1,
    centerX: 1025,
    centerY: 455,
  },
  {
    ref: "C50",
    value: "22uF",
    partNumber: "GRM21BR61E226ME44L",
    orientation: 3,
    centerX: 200,
    centerY: 845,
  },
  {
    ref: "C51",
    value: "22uF",
    partNumber: "GRM21BR61E226ME44L",
    orientation: 3,
    centerX: 250,
    centerY: 845,
  },
  {
    ref: "C52",
    value: "22uF",
    partNumber: "GRM21BR61E226ME44L",
    orientation: 3,
    centerX: 300,
    centerY: 845,
  },
  {
    ref: "C53",
    value: "22uF",
    partNumber: "GRM21BR61E226ME44L",
    orientation: 3,
    centerX: 350,
    centerY: 845,
  },
  {
    ref: "C55",
    value: "22uF",
    partNumber: "GRM21BR61E226ME44L",
    orientation: 3,
    centerX: 1200,
    centerY: 845,
  },
  {
    ref: "C56",
    value: "22uF",
    partNumber: "GRM21BR61E226ME44L",
    orientation: 3,
    centerX: 1245,
    centerY: 845,
  },
  {
    ref: "C57",
    value: "22uF",
    partNumber: "GRM21BR61E226ME44L",
    orientation: 3,
    centerX: 1290,
    centerY: 845,
  },
  {
    ref: "C58",
    value: "22uF",
    partNumber: "GRM21BR61E226ME44L",
    orientation: 3,
    centerX: 1335,
    centerY: 845,
  },
  {
    ref: "C100",
    value: "15uF",
    partNumber: "TPSD156K035R0100",
    orientation: 3,
    centerX: 110,
    centerY: 823.5,
  },
  {
    ref: "L1",
    value: "4.7uH",
    partNumber: "XAL1060-472MEB",
    orientation: 0,
    centerX: 835,
    centerY: 860,
  },
  {
    ref: "P1",
    value: "SOLDER JUMPER",
    partNumber: "SOLDER JUMPER",
    orientation: 1,
    centerX: 1195,
    centerY: 575,
  },
  {
    ref: "P3",
    value: "SOLDER JUMPER",
    partNumber: "SOLDER JUMPER",
    orientation: 0,
    centerX: 1255,
    centerY: 475,
  },
  {
    ref: "Q1",
    value: "40V",
    partNumber: "CSD18511Q5AR",
    orientation: 3,
    centerX: 590,
    centerY: 852.25,
  },
  {
    ref: "Q2",
    value: "40V",
    partNumber: "CSD18511Q5AR",
    orientation: 1,
    centerX: 1110,
    centerY: 867.75,
  },
  {
    ref: "Q3",
    value: "40V",
    partNumber: "CSD18511Q5AR",
    orientation: 0,
    centerX: 646.5,
    centerY: 830,
  },
  {
    ref: "Q4",
    value: "40V",
    partNumber: "CSD18511Q5AR",
    orientation: 0,
    centerX: 1033.5,
    centerY: 830,
  },
  {
    ref: "R1",
    value: "0.005",
    partNumber: "CSNL1206FT5L00",
    orientation: 0,
    centerX: 450,
    centerY: 860,
  },
  {
    ref: "R2",
    value: "0.005",
    partNumber: "CSNL1206FT5L00",
    orientation: 0,
    centerX: 1400,
    centerY: 860,
  },
  {
    ref: "R3",
    value: "1.80",
    partNumber: "CRCW06031R80FKEA",
    orientation: 1,
    centerX: 155,
    centerY: 840,
  },
  {
    ref: "R4",
    value: "1.00",
    partNumber: "RC0603FR-071RL",
    orientation: 0,
    centerX: 510,
    centerY: 760,
  },
  {
    ref: "R5",
    value: "4.99",
    partNumber: "CRCW06034R99FKEA",
    orientation: 1,
    centerX: 470,
    centerY: 760,
  },
  {
    ref: "R6",
    value: "4.99",
    partNumber: "CRCW06034R99FKEA",
    orientation: 1,
    centerX: 430,
    centerY: 730,
  },
  {
    ref: "R7",
    value: "10",
    partNumber: "CRCW060310R0JNEA",
    orientation: 2,
    centerX: 1305,
    centerY: 670,
  },
  {
    ref: "R8",
    value: "10.0",
    partNumber: "CRCW060310R0FKEA",
    orientation: 0,
    centerX: 410,
    centerY: 630,
  },
  {
    ref: "R9",
    value: "10",
    partNumber: "CRCW060310R0JNEA",
    orientation: 2,
    centerX: 1315,
    centerY: 630,
  },
  {
    ref: "R11",
    value: "360k",
    partNumber: "ERJ-3EKF3603V",
    orientation: 1,
    centerX: 1150,
    centerY: 560,
  },
  {
    ref: "R12",
    value: "40.2k",
    partNumber: "CRCW040240K2FKED",
    orientation: 0,
    centerX: 670,
    centerY: 570,
  },
  {
    ref: "R13",
    value: "15.0k",
    partNumber: "RC0402FR-0715KL",
    orientation: 0,
    centerX: 980,
    centerY: 575,
  },
  {
    ref: "R14",
    value: "220k",
    partNumber: "CRCW040240K2FKED",
    orientation: 1,
    centerX: 420,
    centerY: 520,
  },
  {
    ref: "R15",
    value: "100k",
    partNumber: "CRCW040240K2FKED",
    orientation: 1,
    centerX: 670,
    centerY: 440,
  },
  {
    ref: "R16",
    value: "191k",
    partNumber: "RC0603FR-07191KL",
    orientation: 1,
    centerX: 1120,
    centerY: 450,
  },
  {
    ref: "R17",
    value: "30.1k",
    partNumber: "CRCW060330K1FKEA",
    orientation: 3,
    centerX: 990,
    centerY: 430,
  },
  {
    ref: "R18",
    value: "360k",
    partNumber: "ERJ-3EKF3603V",
    orientation: 1,
    centerX: 1195,
    centerY: 520,
  },
  {
    ref: "R20",
    value: "100k",
    partNumber: "RC0603FR-07220KL",
    orientation: 0,
    centerX: 1170,
    centerY: 475,
  },
  {
    ref: "R110",
    value: "383k",
    partNumber: "CRCW040240K2FKED",
    orientation: 0,
    centerX: 460,
    centerY: 580,
  },
  {
    ref: "U1",
    value: "BQ25731RSN",
    partNumber: "BQ25731RSN",
    orientation: 0,
    centerX: 835,
    centerY: 610,
    pins: [
      { number: 7, name: "VDDA" },
      { number: 16, name: "COMP1" },
      { number: 17, name: "COMP2" },
      { number: 32, name: "SW1" },
      { number: 23, name: "SW2" },
      { number: 31, name: "HIDRV1" },
      { number: 24, name: "HIDRV2" },
      { number: 30, name: "BTST1" },
      { number: 25, name: "BTST2" },
      { number: 29, name: "LODRV1" },
      { number: 26, name: "LODRV2" },
      { number: 21, name: "BATDRV" },
      { number: 11, name: "PROCHOT" },
      { number: 18, name: "CELL_BATPRESZ" },
      { number: 8, name: "IADPT" },
      { number: 9, name: "IBAT" },
      { number: 10, name: "PSYS" },
      { number: 28, name: "REGN" },
      { number: 19, name: "SRN" },
      { number: 20, name: "SRP" },
      { number: 33, name: "Thermal_Pad" },
      { number: 1, name: "VBUS" },
      { number: 22, name: "VSYS" },
      { number: 27, name: "PGND" },
      { number: 2, name: "ACN" },
      { number: 3, name: "ACP" },
      { number: 6, name: "ILIM_HIZ" },
      { number: 4, name: "CHRG_OK" },
      { number: 12, name: "SDA" },
      { number: 13, name: "SCL" },
      { number: 14, name: "CMPIN" },
      { number: 15, name: "CMPOUT" },
      { number: 5, name: "OTG/VAP" },
    ],
  },
];

// Normalize the original placement grid into tscircuit schematic units.
const ALTIUM_ORIGIN = { x: 825, y: 600 };
const ALTIUM_UNITS_PER_SCH_UNIT = 25;

const schPlacement = ({ centerX, centerY }: SchematicComponent) => ({
  schX: Number(
    ((centerX - ALTIUM_ORIGIN.x) / ALTIUM_UNITS_PER_SCH_UNIT).toFixed(3),
  ),
  schY: Number(
    ((centerY - ALTIUM_ORIGIN.y) / ALTIUM_UNITS_PER_SCH_UNIT).toFixed(3),
  ),
});

const schRotation = ({ orientation }: SchematicComponent) => orientation * 90;
const byPrefix = (prefix: string) =>
  components.filter(({ ref }) => ref.startsWith(prefix));

const capacitors = byPrefix("C");
const resistors = byPrefix("R");
const mosfets = byPrefix("Q");
const solderJumpers = byPrefix("P");
const inductor = components.find(({ ref }) => ref === "L1")!;
const charger = components.find(({ ref }) => ref === "U1")!;
// Connectivity reconstructed from altium-to-circuit-json wire geometry,
// port endpoints, and genuine net labels. The grouped MOSFET pin annotations
// emitted as numeric labels are intentionally excluded.
const schematicNets = [
  {
    name: "GND",
    ports: [
      ".C2 > .pin2",
      ".C24 > .pin2",
      ".C34 > .pin2",
      ".C32 > .pin2",
      ".R17 > .pin2",
      ".C21 > .pin2",
      ".C36 > .pin2",
      ".C33 > .pin1",
      ".C37 > .pin2",
      ".C26 > .pin1",
      ".C3 > .pin2",
      ".C28 > .pin1",
      ".C29 > .pin2",
      ".U1 > .pin33",
      ".U1 > .pin27",
      ".U1 > .pin14",
      ".C27 > .pin2",
      ".C4 > .pin2",
      ".C20 > .pin2",
      ".C25 > .pin1",
      ".Q3 > .source",
      ".Q4 > .source",
      ".P3 > .pin2",
      ".C52 > .pin2",
      ".C51 > .pin2",
      ".C50 > .pin2",
      ".C53 > .pin2",
      ".C55 > .pin2",
      ".C56 > .pin2",
      ".C57 > .pin2",
      ".C58 > .pin2",
      ".C39 > .pin1",
      ".C40 > .pin1",
      ".C38 > .pin1",
      ".R14 > .pin1",
      ".R15 > .pin1",
      ".R16 > .pin1",
      ".C35 > .pin2",
      ".C5 > .pin1",
      ".C6 > .pin1",
      ".C100 > .pin2",
    ],
  },
  {
    name: "BAT",
    ports: [
      ".C31 > .pin1",
      ".R9 > .pin1",
      ".C4 > .pin1",
      ".C20 > .pin1",
      ".R2 > .pin2",
    ],
  },
  {
    name: "CSO_N",
    ports: [".R9 > .pin2", ".U1 > .pin19", ".C30 > .pin2", ".C6 > .pin2"],
  },
  {
    name: "CSO_P",
    ports: [".R7 > .pin2", ".U1 > .pin20", ".C30 > .pin1", ".C5 > .pin2"],
  },
  { name: "ENOTG", ports: [".U1 > .pin5", ".R15 > .pin2"] },
  {
    name: "ILIM_HIZ",
    ports: [".U1 > .pin6", ".C38 > .pin2", ".R14 > .pin2", ".R110 > .pin1"],
  },
  {
    name: "PPHV",
    ports: [
      ".R1 > .pin1",
      ".R6 > .pin2",
      ".R4 > .pin1",
      ".R3 > .pin2",
      ".C52 > .pin1",
      ".C51 > .pin1",
      ".C50 > .pin1",
      ".C53 > .pin1",
      ".C100 > .pin1",
    ],
  },
  { name: "REGN", ports: [".C34 > .pin1", ".R8 > .pin1", ".U1 > .pin28"] },
  {
    name: "VDDA",
    ports: [
      ".C32 > .pin1",
      ".R8 > .pin2",
      ".U1 > .pin7",
      ".P1 > .pin2",
      ".R110 > .pin2",
      ".R11 > .pin2",
    ],
  },
  {
    name: "NET_01",
    ports: [
      ".C2 > .pin1",
      ".R1 > .pin2",
      ".R5 > .pin2",
      ".C21 > .pin1",
      ".Q1 > .drain",
    ],
  },
  { name: "NET_02", ports: [".C22 > .pin1", ".U1 > .pin30"] },
  {
    name: "NET_03",
    ports: [
      ".C22 > .pin2",
      ".U1 > .pin32",
      ".Q1 > .source",
      ".Q3 > .drain",
      ".L1 > .pin1",
    ],
  },
  { name: "NET_04", ports: [".C23 > .pin1", ".U1 > .pin25"] },
  {
    name: "NET_05",
    ports: [
      ".C23 > .pin2",
      ".U1 > .pin23",
      ".Q2 > .source",
      ".Q4 > .drain",
      ".L1 > .pin2",
    ],
  },
  { name: "NET_06", ports: [".C24 > .pin1", ".R3 > .pin1"] },
  { name: "NET_07", ports: [".C26 > .pin2", ".U1 > .pin26", ".Q4 > .gate"] },
  {
    name: "NET_08",
    ports: [
      ".C31 > .pin2",
      ".R7 > .pin1",
      ".C3 > .pin1",
      ".U1 > .pin22",
      ".Q2 > .drain",
      ".C55 > .pin1",
      ".C56 > .pin1",
      ".C57 > .pin1",
      ".C58 > .pin1",
      ".R2 > .pin1",
    ],
  },
  { name: "NET_09", ports: [".C36 > .pin1", ".R13 > .pin2"] },
  { name: "NET_10", ports: [".C37 > .pin1", ".U1 > .pin17", ".R13 > .pin1"] },
  { name: "NET_11", ports: [".P1 > .pin1", ".R18 > .pin2"] },
  {
    name: "NET_12",
    ports: [".R5 > .pin1", ".C28 > .pin2", ".U1 > .pin2", ".C1 > .pin1"],
  },
  {
    name: "NET_13",
    ports: [".R6 > .pin1", ".C29 > .pin1", ".U1 > .pin3", ".C1 > .pin2"],
  },
  { name: "NET_14", ports: [".R12 > .pin1", ".C35 > .pin1"] },
  { name: "NET_15", ports: [".R12 > .pin2", ".C33 > .pin2", ".U1 > .pin16"] },
  { name: "NET_16", ports: [".R17 > .pin1", ".U1 > .pin10"] },
  { name: "NET_17", ports: [".R20 > .pin2", ".P3 > .pin1"] },
  { name: "NET_18", ports: [".U1 > .pin1", ".R4 > .pin2", ".C27 > .pin1"] },
  { name: "NET_19", ports: [".U1 > .pin8", ".C39 > .pin2", ".R16 > .pin2"] },
  { name: "NET_20", ports: [".U1 > .pin9", ".C40 > .pin2"] },
  {
    name: "NET_21",
    ports: [".U1 > .pin18", ".R20 > .pin1", ".R18 > .pin1", ".R11 > .pin1"],
  },
  { name: "NET_22", ports: [".U1 > .pin24", ".Q2 > .gate"] },
  { name: "NET_23", ports: [".U1 > .pin29", ".C25 > .pin2", ".Q3 > .gate"] },
  { name: "NET_24", ports: [".U1 > .pin31", ".Q1 > .gate"] },
] as const;

const powerNetNames = new Set([
  "GND",
  "BAT",
  "PPHV",
  "REGN",
  "VDDA",
  "NET_01",
  "NET_03",
  "NET_05",
  "NET_08",
]);
const powerNets = schematicNets.filter((net) => powerNetNames.has(net.name));

const traceConnections = schematicNets.flatMap((net) =>
  net.ports.slice(1).map((to) => ({
    net: net.name,
    from: net.ports[0],
    to,
  })),
);

// Pin order follows the original Altium symbol from top to bottom.
const bq25731LeftPins = [
  30, 32, 29, 31, 1, 2, 3, 7, 6, 16, 11, 13, 12, 4, 5, 15, 14,
];
const bq25731RightPins = [
  25, 23, 26, 24, 22, 21, 20, 19, 28, 17, 18, 8, 9, 10, 33, 27,
];

// The chip renderer uses a fixed 0.2-unit base pin spacing. These margins
// reproduce the vertical distances from the Altium symbol (25 native units
// per schematic unit), including the larger gaps between functional groups.
const bq25731SchPinStyle = {
  pin32: { marginTop: 0.6 },
  pin29: { marginTop: 0.6 },
  pin31: { marginTop: 0.6 },
  pin1: { marginTop: 0.6 },
  pin2: { marginTop: 0.6 },
  pin3: { marginTop: 0.6 },
  pin7: { marginTop: 0.6 },
  pin6: { marginTop: 1.4 },
  pin16: { marginTop: 0.6 },
  pin11: { marginTop: 1.0 },
  pin13: { marginTop: 0.6 },
  pin12: { marginTop: 0.6 },
  pin4: { marginTop: 0.6 },
  pin5: { marginTop: 0.6 },
  pin15: { marginTop: 0.6 },
  pin14: { marginTop: 0.6 },
  pin23: { marginTop: 0.6 },
  pin26: { marginTop: 0.6 },
  pin24: { marginTop: 0.6 },
  pin22: { marginTop: 0.6 },
  pin21: { marginTop: 0.6 },
  pin20: { marginTop: 0.6 },
  pin19: { marginTop: 0.6 },
  pin28: { marginTop: 1.0 },
  pin17: { marginTop: 1.4 },
  pin18: { marginTop: 1.4 },
  pin8: { marginTop: 1.0 },
  pin9: { marginTop: 0.6 },
  pin10: { marginTop: 0.6 },
  pin33: { marginTop: 0.6 },
  pin27: { marginTop: 0.2 },
} as const;

export const BatteryCharging_BQ25731 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schAutoLayoutEnabled={false} {...props}>
    {powerNets.map((net) => (
      <net name={net.name} isPowerNet isGroundNet={net.name === "GND"} />
    ))}

    {capacitors.map((component) => (
      <capacitor
        key={component.ref}
        name={component.ref}
        capacitance={component.value}
        schRotation={schRotation(component)}
        {...schPlacement(component)}
      />
    ))}

    {resistors.map((component) => (
      <resistor
        key={component.ref}
        name={component.ref}
        resistance={component.value}
        schRotation={schRotation(component)}
        {...schPlacement(component)}
      />
    ))}

    <inductor
      name={inductor.ref}
      inductance={inductor.value}
      schRotation={schRotation(inductor)}
      {...schPlacement(inductor)}
    />

    {mosfets.map((component) => (
      <mosfet
        key={component.ref}
        name={component.ref}
        manufacturerPartNumber={component.partNumber}
        channelType="n"
        mosfetMode="enhancement"
        symbolDrainSide={
          component.ref === "Q1"
            ? "left"
            : component.ref === "Q4"
              ? "top"
              : undefined
        }
        symbolSourceSide={
          component.ref === "Q1"
            ? "right"
            : component.ref === "Q4"
              ? "bottom"
              : undefined
        }
        symbolGateSide={
          component.ref === "Q1"
            ? "bottom"
            : component.ref === "Q4"
              ? "right"
              : undefined
        }
        schRotation={schRotation(component)}
        {...schPlacement(component)}
      />
    ))}

    {solderJumpers.map((component) => (
      <solderjumper
        key={component.ref}
        name={component.ref}
        pinCount={2}
        schRotation={schRotation(component)}
        {...schPlacement(component)}
      />
    ))}

    <BQ25731RSN
      name={charger.ref}
      schPinArrangement={{
        leftSide: { pins: bq25731LeftPins, direction: "top-to-bottom" },
        rightSide: { pins: bq25731RightPins, direction: "top-to-bottom" },
      }}
      schPinStyle={bq25731SchPinStyle}
      schWidth={6.8}
      schHeight={16}
      {...schPlacement(charger)}
    />

    <netlabel
      net="GND"
      connectsTo=".U1 > .pin27"
      schX={5.4}
      schY={-7.2}
      anchorSide="left"
    />

    {traceConnections.map(({ from, to }, index) => (
      <trace key={`${from}-${to}-${index}`} from={from} to={to} />
    ))}

    {powerNets.map((net) => (
      <trace
        key={`power-${net.name}`}
        from={net.ports[0]}
        to={`net.${net.name}`}
      />
    ))}
  </subcircuit>
);

export default BatteryCharging_BQ25731;
