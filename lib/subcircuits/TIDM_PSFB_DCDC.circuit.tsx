import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

type TwoPinPart = {
  name: string;
  value: string;
  x: number;
  y: number;
  pin1: string;
  pin2: string;
  orientation?: "horizontal" | "vertical";
  footprint?: string;
};

type DiodePart = {
  name: string;
  mpn: string;
  x: number;
  y: number;
  anode: string;
  cathode: string;
  orientation?: "horizontal" | "vertical";
};

type MosfetPart = {
  name: string;
  mpn: string;
  x: number;
  y: number;
  gate: string;
  drain: string;
  source: string;
};

type DriverProps = {
  name: string;
  x: number;
  y: number;
  inputA: string;
  inputB: string;
  outputA: string;
  outputB: string;
};

const page2X = 32;
const p2 = (x: number) => x + page2X;

// Coordinates were extracted from TI's native TIDM-PSFB-DCDC schematic PDF.
// The page-one origin is the sheet center; page two is translated intact.
const capacitors: TwoPinPart[] = [
  {
    name: "C1",
    value: "220nF",
    x: 9,
    y: 10.81,
    pin1: "net.RECT",
    pin2: "net.VOUT_PLUS",
  },
  {
    name: "C2",
    value: "0.47uF",
    x: -16.92,
    y: 8.9,
    pin1: "net.VINB",
    pin2: "net.VIN_NEG",
    orientation: "vertical",
  },
  {
    name: "C3",
    value: "330uF",
    x: -15.66,
    y: 8.9,
    pin1: "net.VINB",
    pin2: "net.VIN_NEG",
    orientation: "vertical",
    footprint: "pinrow2_p10mm_id1mm_od2mm",
  },
  {
    name: "C4",
    value: "1500uF",
    x: 6.68,
    y: 6.66,
    pin1: "net.VOUT_PLUS",
    pin2: "net.VOUT_MINUS",
    orientation: "vertical",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C5",
    value: "1500uF",
    x: 9.46,
    y: 6.66,
    pin1: "net.VOUT_PLUS",
    pin2: "net.VOUT_MINUS",
    orientation: "vertical",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C6",
    value: "1500uF",
    x: 12.25,
    y: 6.66,
    pin1: "net.VOUT_PLUS",
    pin2: "net.VOUT_MINUS",
    orientation: "vertical",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C7",
    value: "1500uF",
    x: 14.83,
    y: 6.66,
    pin1: "net.VOUT_PLUS",
    pin2: "net.VOUT_MINUS",
    orientation: "vertical",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C8",
    value: "1500uF",
    x: 17.62,
    y: 6.66,
    pin1: "net.VOUT_PLUS",
    pin2: "net.VOUT_MINUS",
    orientation: "vertical",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C9",
    value: "1uF",
    x: 8.27,
    y: 5.7,
    pin1: "net.VOUT_PLUS",
    pin2: "net.VOUT_MINUS",
    orientation: "vertical",
  },
  {
    name: "C10",
    value: "1uF",
    x: 11.11,
    y: 5.7,
    pin1: "net.VOUT_PLUS",
    pin2: "net.VOUT_MINUS",
    orientation: "vertical",
  },
  {
    name: "C11",
    value: "1uF",
    x: 13.9,
    y: 5.5,
    pin1: "net.VOUT_PLUS",
    pin2: "net.VOUT_MINUS",
    orientation: "vertical",
  },
  {
    name: "C12",
    value: "1uF",
    x: 16.68,
    y: 5.5,
    pin1: "net.VOUT_PLUS",
    pin2: "net.VOUT_MINUS",
    orientation: "vertical",
  },
  {
    name: "C13",
    value: "1000pF",
    x: 2.12,
    y: 4.96,
    pin1: "net.VOUT_MINUS",
    pin2: "net.SEC_GND",
    orientation: "vertical",
  },
  {
    name: "C14",
    value: "1uF",
    x: -13.95,
    y: 2.52,
    pin1: "net.U1_OUTA",
    pin2: "net.T3_PRI_A",
  },
  {
    name: "C15",
    value: "1uF",
    x: -6.59,
    y: 2.52,
    pin1: "net.U3_OUTA",
    pin2: "net.T4_PRI_A",
  },
  {
    name: "C16",
    value: "1uF",
    x: -17.92,
    y: -2.46,
    pin1: "net.VBIAS",
    pin2: "net.GND",
    orientation: "vertical",
  },
  {
    name: "C17",
    value: "1uF",
    x: -1.22,
    y: -5.24,
    pin1: "net.VBIAS",
    pin2: "net.GND",
    orientation: "vertical",
  },
  {
    name: "C18",
    value: "1uF",
    x: -8.18,
    y: -9.02,
    pin1: "net.VBIAS",
    pin2: "net.GND",
    orientation: "vertical",
  },
  {
    name: "C19",
    value: "22uF",
    x: -6.64,
    y: -9.4,
    pin1: "net.VBIAS",
    pin2: "net.GND",
    orientation: "vertical",
  },
  {
    name: "C20",
    value: "1uF",
    x: 0.74,
    y: 7.89,
    pin1: "net.T2_PRI_A",
    pin2: "net.T2_DAMP_A",
    orientation: "vertical",
  },
  {
    name: "C21",
    value: "1uF",
    x: 0.74,
    y: 7.29,
    pin1: "net.LEG_B",
    pin2: "net.T2_DAMP_B",
    orientation: "vertical",
  },
  {
    name: "C22",
    value: "1uF",
    x: p2(2.05),
    y: 2.52,
    pin1: "net.LDO_IN",
    pin2: "net.P2_GND",
    orientation: "vertical",
  },
  {
    name: "C23",
    value: "10nF",
    x: p2(4.42),
    y: 1.8,
    pin1: "net.LDO_FB",
    pin2: "net.P2_GND",
    orientation: "vertical",
  },
  {
    name: "C24",
    value: "220pF",
    x: p2(-9.34),
    y: 7.98,
    pin1: "net.P2_IOUT",
    pin2: "net.ISENSE_FB",
  },
  {
    name: "C25",
    value: "100nF",
    x: p2(-6.79),
    y: 5,
    pin1: "net.P2_IOUT",
    pin2: "net.P2_GND",
    orientation: "vertical",
  },
  {
    name: "C26",
    value: "10uF",
    x: p2(6.43),
    y: 2.72,
    pin1: "net.V3V3",
    pin2: "net.P2_GND",
    orientation: "vertical",
  },
];

const resistors: TwoPinPart[] = [
  {
    name: "R1",
    value: "48.7ohm",
    x: 6.55,
    y: 12.48,
    pin1: "net.CS",
    pin2: "net.GND",
    orientation: "vertical",
  },
  {
    name: "R2",
    value: "4.87kohm",
    x: 4.36,
    y: 12.28,
    pin1: "net.T1_SENSE",
    pin2: "net.GND",
    orientation: "vertical",
  },
  {
    name: "R3",
    value: "3.01ohm",
    x: -12.55,
    y: 12.32,
    pin1: "net.T3_HI",
    pin2: "net.Q1_GATE",
  },
  {
    name: "R4",
    value: "1Mohm",
    x: -14.66,
    y: 12.28,
    pin1: "net.VINB",
    pin2: "net.BLEED1",
    orientation: "vertical",
  },
  {
    name: "R5",
    value: "3.01ohm",
    x: -5.19,
    y: 12.13,
    pin1: "net.T4_HI",
    pin2: "net.Q2_GATE",
  },
  {
    name: "R6",
    value: "100kohm",
    x: 7.45,
    y: 10.75,
    pin1: "net.RECT",
    pin2: "net.VOUT_PLUS",
  },
  {
    name: "R7",
    value: "10kohm",
    x: -9.65,
    y: 10.35,
    pin1: "net.Q1_GATE",
    pin2: "net.LEG_A",
    orientation: "vertical",
  },
  {
    name: "R8",
    value: "1kohm",
    x: 10,
    y: 10.93,
    pin1: "net.VOUT_PLUS",
    pin2: "net.VOUT",
    orientation: "vertical",
  },
  {
    name: "R9",
    value: "1kohm",
    x: 10.99,
    y: 10.93,
    pin1: "net.VOUT",
    pin2: "net.VOUT_MINUS",
    orientation: "vertical",
  },
  {
    name: "R10",
    value: "10kohm",
    x: -2.46,
    y: 10.54,
    pin1: "net.Q2_GATE",
    pin2: "net.LEG_B",
    orientation: "vertical",
  },
  {
    name: "R11",
    value: "49.9ohm",
    x: 13.08,
    y: 9.36,
    pin1: "net.VOUT",
    pin2: "net.GND",
  },
  {
    name: "R12",
    value: "3.01ohm",
    x: -11.21,
    y: 8.35,
    pin1: "net.T3_LO",
    pin2: "net.Q4_GATE",
  },
  {
    name: "R13",
    value: "3.01ohm",
    x: -3.65,
    y: 8.35,
    pin1: "net.T4_LO",
    pin2: "net.Q3_GATE",
  },
  {
    name: "R14",
    value: "1Mohm",
    x: -14.6,
    y: 7.51,
    pin1: "net.BLEED1",
    pin2: "net.VINMON",
    orientation: "vertical",
  },
  {
    name: "R15",
    value: "10kohm",
    x: -2.03,
    y: 5.58,
    pin1: "net.Q3_GATE",
    pin2: "net.VIN_NEG",
    orientation: "vertical",
  },
  {
    name: "R16",
    value: "10kohm",
    x: -9.39,
    y: 5.38,
    pin1: "net.Q4_GATE",
    pin2: "net.VIN_NEG",
    orientation: "vertical",
  },
  {
    name: "R17",
    value: "1Mohm",
    x: -14.6,
    y: 5.71,
    pin1: "net.VINMON",
    pin2: "net.VIN_NEG",
    orientation: "vertical",
  },
  {
    name: "R18",
    value: "3.01ohm",
    x: -13.97,
    y: 1.4,
    pin1: "net.T3_PRI_B",
    pin2: "net.U1_OUTB",
  },
  {
    name: "R19",
    value: "3.01ohm",
    x: -6.61,
    y: 1.4,
    pin1: "net.T4_PRI_B",
    pin2: "net.U3_OUTB",
  },
  {
    name: "R20",
    value: "3.01ohm",
    x: 2.94,
    y: -6.55,
    pin1: "net.U2_OUTA",
    pin2: "net.Q5_GATE",
  },
  {
    name: "R21",
    value: "3.01ohm",
    x: 8.31,
    y: -6.55,
    pin1: "net.U2_OUTB",
    pin2: "net.Q6_GATE",
  },
  {
    name: "R22",
    value: "0ohm",
    x: -6.48,
    y: -8.15,
    pin1: "net.EXT_BIAS",
    pin2: "net.VBIAS",
  },
  {
    name: "R23",
    value: "10kohm",
    x: 2.94,
    y: -8.94,
    pin1: "net.Q5_GATE",
    pin2: "net.GND",
    orientation: "vertical",
  },
  {
    name: "R24",
    value: "10kohm",
    x: 8.31,
    y: -8.94,
    pin1: "net.Q6_GATE",
    pin2: "net.GND",
    orientation: "vertical",
  },
  {
    name: "R25",
    value: "499ohm",
    x: 1.29,
    y: 6.81,
    pin1: "net.T2_DAMP_A",
    pin2: "net.LEG_B",
  },
  {
    name: "R26",
    value: "499ohm",
    x: 1.29,
    y: 6.21,
    pin1: "net.T2_PRI_A",
    pin2: "net.T2_DAMP_B",
  },
  {
    name: "R27",
    value: "0.0005ohm",
    x: 15.11,
    y: 0.6,
    pin1: "net.VOUT_MINUS",
    pin2: "net.SEC_GND",
  },
  {
    name: "R28",
    value: "10kohm",
    x: -9.56,
    y: -1.54,
    pin1: "net.OUTB",
    pin2: "net.U1_INB",
  },
  {
    name: "R29",
    value: "10kohm",
    x: -9.54,
    y: -0.71,
    pin1: "net.OUTA",
    pin2: "net.U1_INA",
  },
  {
    name: "R30",
    value: "10kohm",
    x: -13.92,
    y: -4.49,
    pin1: "net.OUTC",
    pin2: "net.U3_INA",
  },
  {
    name: "R31",
    value: "10kohm",
    x: -13.92,
    y: -5.28,
    pin1: "net.OUTD",
    pin2: "net.U3_INB",
  },
  {
    name: "R32",
    value: "10kohm",
    x: -4.37,
    y: -1.9,
    pin1: "net.OUTE",
    pin2: "net.U2_INA",
  },
  {
    name: "R33",
    value: "10kohm",
    x: -4.37,
    y: -2.69,
    pin1: "net.OUTF",
    pin2: "net.U2_INB",
  },
  {
    name: "R34",
    value: "1ohm",
    x: p2(1.91),
    y: 4.19,
    pin1: "net.P2_VBIAS",
    pin2: "net.LDO_IN",
  },
  {
    name: "R35",
    value: "174kohm",
    x: p2(5.53),
    y: 3.46,
    pin1: "net.V3V3",
    pin2: "net.LDO_FB",
    orientation: "vertical",
  },
  {
    name: "R36",
    value: "100kohm",
    x: p2(5.61),
    y: 1.85,
    pin1: "net.LDO_FB",
    pin2: "net.P2_GND",
    orientation: "vertical",
  },
  {
    name: "R37",
    value: "1kohm",
    x: p2(-11.52),
    y: 5.19,
    pin1: "net.IS_MINUS",
    pin2: "net.ISENSE_FB",
  },
  {
    name: "R38",
    value: "1kohm",
    x: p2(-11.5),
    y: 6.04,
    pin1: "net.P2_GND",
    pin2: "net.ISENSE_PLUS",
  },
  {
    name: "R39",
    value: "47kohm",
    x: p2(-9.23),
    y: 7.1,
    pin1: "net.P2_IOUT",
    pin2: "net.ISENSE_FB",
  },
  {
    name: "R40",
    value: "4.7ohm",
    x: p2(-7.59),
    y: 6.93,
    pin1: "net.V3V3",
    pin2: "net.OPA_SUPPLY",
  },
];

const diodes: DiodePart[] = [
  {
    name: "D1",
    mpn: "1N4148W",
    x: 4.75,
    y: 13.92,
    anode: "net.T1_SENSE",
    cathode: "net.CS",
  },
  {
    name: "D2",
    mpn: "1N4148W",
    x: -11.88,
    y: 10.89,
    anode: "net.LEG_A",
    cathode: "net.Q1_GATE",
    orientation: "vertical",
  },
  {
    name: "D3",
    mpn: "1N4148W",
    x: -4.52,
    y: 10.49,
    anode: "net.LEG_B",
    cathode: "net.Q2_GATE",
    orientation: "vertical",
  },
  {
    name: "D4",
    mpn: "ES3BB",
    x: 4.43,
    y: 10.69,
    anode: "net.SEC_A",
    cathode: "net.RECT",
  },
  {
    name: "D5",
    mpn: "MURS360T3G",
    x: -0.22,
    y: 10.73,
    anode: "net.LEG_B",
    cathode: "net.VINB_SENSED",
    orientation: "vertical",
  },
  {
    name: "D6",
    mpn: "ES3BB",
    x: 4.43,
    y: 9.9,
    anode: "net.SEC_B",
    cathode: "net.RECT",
  },
  {
    name: "D7",
    mpn: "MMSZ5242BT1G",
    x: -11.68,
    y: 9.9,
    anode: "net.LEG_A",
    cathode: "net.Q1_GATE",
    orientation: "vertical",
  },
  {
    name: "D8",
    mpn: "MMSZ5242BT1G",
    x: -4.52,
    y: 9.69,
    anode: "net.LEG_B",
    cathode: "net.Q2_GATE",
    orientation: "vertical",
  },
  {
    name: "D9",
    mpn: "1N4148W",
    x: -11.28,
    y: 6.71,
    anode: "net.Q4_GATE",
    cathode: "net.VIN_NEG",
    orientation: "vertical",
  },
  {
    name: "D10",
    mpn: "1N4148W",
    x: -3.67,
    y: 6.71,
    anode: "net.Q3_GATE",
    cathode: "net.VIN_NEG",
    orientation: "vertical",
  },
  {
    name: "D11",
    mpn: "MURS360T3G",
    x: -0.27,
    y: 5.16,
    anode: "net.VIN_NEG",
    cathode: "net.LEG_B",
    orientation: "vertical",
  },
  {
    name: "D12",
    mpn: "MMSZ5242BT1G",
    x: -11.02,
    y: 4.92,
    anode: "net.Q4_GATE",
    cathode: "net.VIN_NEG",
    orientation: "vertical",
  },
  {
    name: "D13",
    mpn: "MMSZ5242BT1G",
    x: -3.67,
    y: 4.92,
    anode: "net.Q3_GATE",
    cathode: "net.VIN_NEG",
    orientation: "vertical",
  },
  {
    name: "D14",
    mpn: "BAT54",
    x: -13.93,
    y: -2.5,
    anode: "net.GND",
    cathode: "net.U1_INA",
  },
  {
    name: "D15",
    mpn: "BAT54",
    x: -12.54,
    y: -2.5,
    anode: "net.GND",
    cathode: "net.U1_INB",
  },
  {
    name: "D16",
    mpn: "BAT54",
    x: 0.59,
    y: -3.89,
    anode: "net.GND",
    cathode: "net.U2_INA",
  },
  {
    name: "D17",
    mpn: "BAT54",
    x: 1.79,
    y: -3.89,
    anode: "net.GND",
    cathode: "net.U2_INB",
  },
  {
    name: "D18",
    mpn: "BAT54",
    x: -7.56,
    y: -6.28,
    anode: "net.GND",
    cathode: "net.U3_INA",
  },
  {
    name: "D19",
    mpn: "BAT54",
    x: -5.97,
    y: -6.28,
    anode: "net.GND",
    cathode: "net.U3_INB",
  },
];

const mosfets: MosfetPart[] = [
  {
    name: "Q1",
    mpn: "SPP20N60CFD",
    x: -9.09,
    y: 11.49,
    gate: "net.Q1_GATE",
    drain: "net.VINB",
    source: "net.LEG_A",
  },
  {
    name: "Q2",
    mpn: "SPP20N60CFD",
    x: -1.93,
    y: 11.49,
    gate: "net.Q2_GATE",
    drain: "net.VINB_SENSED",
    source: "net.LEG_B",
  },
  {
    name: "Q3",
    mpn: "SPP20N60CFD",
    x: -1.93,
    y: 6.71,
    gate: "net.Q3_GATE",
    drain: "net.LEG_B",
    source: "net.VIN_NEG",
  },
  {
    name: "Q4",
    mpn: "SPP20N60CFD",
    x: -9.09,
    y: 6.51,
    gate: "net.Q4_GATE",
    drain: "net.LEG_A",
    source: "net.VIN_NEG",
  },
  {
    name: "Q5",
    mpn: "FDP032N08",
    x: 4.04,
    y: -7.21,
    gate: "net.Q5_GATE",
    drain: "net.SEC_A",
    source: "net.SEC_GND",
  },
  {
    name: "Q6",
    mpn: "FDP032N08",
    x: 9.21,
    y: -7.21,
    gate: "net.Q6_GATE",
    drain: "net.SEC_B",
    source: "net.SEC_GND",
  },
];

const testpoints = [
  { name: "TP1", x: -1.47, y: -9.2, net: "net.EXT_BIAS" },
  { name: "TP2", x: -1.47, y: -6.81, net: "net.GND" },
  { name: "TP3", x: -1.47, y: -7.61, net: "net.SYNC" },
  { name: "TP4", x: 13.74, y: 10.23, net: "net.VOUT_PLUS" },
  { name: "TP5", x: 13.74, y: 8.64, net: "net.VOUT_MINUS" },
  { name: "TP6", x: 15.43, y: 8.7, net: "net.VOUT_PLUS" },
  { name: "TP7", x: 15.43, y: 4.72, net: "net.VOUT_MINUS" },
  { name: "TP8", x: -17.18, y: 4.72, net: "net.VIN_NEG" },
  { name: "TP9", x: -16.99, y: 13.87, net: "net.VINB" },
  { name: "TP10", x: -5.25, y: -12.16, net: "net.VAUX_PRI" },
  { name: "TP11", x: 0.54, y: -13.11, net: "net.VINMON" },
  { name: "TP12", x: p2(5.49), y: 4.74, net: "net.V3V3" },
];

const DualGateDriver = ({
  name,
  x,
  y,
  inputA,
  inputB,
  outputA,
  outputB,
}: DriverProps) => (
  <chip
    name={name}
    manufacturerPartNumber="UCC27324D"
    footprint="soic8"
    pinLabels={{
      pin1: "NC1",
      pin2: "INA",
      pin3: "GND",
      pin4: "INB",
      pin5: "OUTB",
      pin6: "VDD",
      pin7: "OUTA",
      pin8: "NC2",
    }}
    schX={x}
    schY={y}
    schWidth="2.1mm"
    schHeight="2.8mm"
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: [2, 4, 3] },
      rightSide: { direction: "top-to-bottom", pins: [7, 5, 6] },
    }}
    connections={{
      INA: inputA,
      INB: inputB,
      GND: "net.GND",
      VDD: "net.VBIAS",
      OUTA: outputA,
      OUTB: outputB,
    }}
  />
);

/**
 * TIDM-PSFB-DCDC's complete 600 W phase-shifted full-bridge power stage.
 *
 * Recreated from TI's published Schematic.pdf and BOM. Sheet 1 contains the
 * 400 V to 12 V isolated power path, gate drive, synchronous rectification,
 * sensing, and control-card interface. Sheet 2 contains the output-current
 * amplifier and 3.3 V LDO. The PCB and separate controlCARD design are
 * intentionally excluded.
 *
 * Reference design: https://www.ti.com/tool/TIDM-PSFB-DCDC
 */
export const TIDM_PSFB_DCDC = (props: SubcircuitProps) => (
  <subcircuit schMaxTraceDistance="1mm" routingDisabled {...props}>
    <schematicrect
      schX={0}
      schY={0}
      width={42}
      height={31}
      strokeWidth={0.05}
    />
    <schematictext
      text="C2000 600W HVPSFB EVM — MAIN POWER STAGE"
      schX={-19.5}
      schY={14.5}
      anchor="left"
      fontSize={0.45}
    />
    <schematictext
      text="TIDM-PSFB-DCDC / Sheet 1 of 2"
      schX={19}
      schY={-14.3}
      anchor="right"
      fontSize={0.32}
    />
    <schematicrect
      schX={page2X}
      schY={4.5}
      width={24}
      height={13}
      strokeWidth={0.05}
    />
    <schematictext
      text="OUTPUT CURRENT AMPLIFIER AND 3.3V LDO"
      schX={p2(-11.3)}
      schY={10.4}
      anchor="left"
      fontSize={0.4}
    />
    <schematictext
      text="TIDM-PSFB-DCDC / Sheet 2 of 2"
      schX={p2(11.2)}
      schY={-1.5}
      anchor="right"
      fontSize={0.3}
    />

    {capacitors.map((c) => (
      <capacitor
        key={c.name}
        name={c.name}
        capacitance={c.value}
        footprint={c.footprint ?? "0603"}
        schX={c.x}
        schY={c.y}
        schOrientation={c.orientation ?? "horizontal"}
        connections={{ pin1: c.pin1, pin2: c.pin2 }}
      />
    ))}
    {resistors.map((r) => (
      <resistor
        key={r.name}
        name={r.name}
        resistance={r.value}
        footprint={r.footprint ?? "0603"}
        schX={r.x}
        schY={r.y}
        schOrientation={r.orientation ?? "horizontal"}
        connections={{ pin1: r.pin1, pin2: r.pin2 }}
      />
    ))}
    {diodes.map((d) => (
      <diode
        key={d.name}
        name={d.name}
        manufacturerPartNumber={d.mpn}
        footprint="sod123"
        schX={d.x}
        schY={d.y}
        schOrientation={d.orientation ?? "horizontal"}
        connections={{ anode: d.anode, cathode: d.cathode }}
      />
    ))}
    {mosfets.map((q) => (
      <mosfet
        key={q.name}
        name={q.name}
        manufacturerPartNumber={q.mpn}
        footprint="to220_3"
        channelType="n"
        mosfetMode="enhancement"
        schX={q.x}
        schY={q.y}
        connections={{ gate: q.gate, drain: q.drain, source: q.source }}
      />
    ))}

    <fuse
      name="F1"
      footprint="0603"
      currentRating="2A"
      voltageRating="390V"
      schShowRatings
      schX={-18.5}
      schY={12.68}
      schOrientation="vertical"
      connections={{ pin1: "net.VIN_RAW", pin2: "net.VINB" }}
    />
    <chip
      name="T1"
      displayName="PE63587"
      manufacturerPartNumber="PE-63587NL"
      footprint="pinrow4_p2.54mm"
      pinLabels={{ pin1: "P1", pin2: "P2", pin3: "S1", pin4: "S2" }}
      schX={1.91}
      schY={13.72}
      schWidth="1.5mm"
      schHeight="2.2mm"
      schPinArrangement={{
        leftSide: { pins: [1, 2], direction: "top-to-bottom" },
        rightSide: { pins: [3, 4], direction: "top-to-bottom" },
      }}
      connections={{
        P1: "net.VINB",
        P2: "net.VINB_SENSED",
        S1: "net.T1_SENSE",
        S2: "net.GND",
      }}
    />
    <chip
      name="T2"
      displayName="75PR8107"
      manufacturerPartNumber="75PR8107"
      footprint="pinrow4_p5mm"
      pinLabels={{ pin1: "P1", pin2: "P2", pin3: "S1", pin4: "S2" }}
      schX={1.91}
      schY={10.09}
      schWidth="1.8mm"
      schHeight="2.4mm"
      schPinArrangement={{
        leftSide: { pins: [1, 2], direction: "top-to-bottom" },
        rightSide: { pins: [3, 4], direction: "top-to-bottom" },
      }}
      connections={{
        P1: "net.T2_PRI_A",
        P2: "net.LEG_B",
        S1: "net.SEC_A",
        S2: "net.SEC_B",
      }}
    />
    <chip
      name="T3"
      displayName="56PR3362"
      manufacturerPartNumber="56PR3362"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin1: "P1",
        pin2: "P2",
        pin3: "A1",
        pin4: "A2",
        pin5: "B1",
        pin6: "B2",
      }}
      schX={-14.4}
      schY={3.97}
      schWidth="1.8mm"
      schHeight="3.2mm"
      schPinArrangement={{
        leftSide: { pins: [1, 2], direction: "top-to-bottom" },
        rightSide: { pins: [3, 4, 5, 6], direction: "top-to-bottom" },
      }}
      connections={{
        P1: "net.T3_PRI_A",
        P2: "net.T3_PRI_B",
        A1: "net.T3_HI",
        A2: "net.LEG_A",
        B1: "net.T3_LO",
        B2: "net.VIN_NEG",
      }}
    />
    <chip
      name="T4"
      displayName="56PR3362"
      manufacturerPartNumber="56PR3362"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin1: "P1",
        pin2: "P2",
        pin3: "A1",
        pin4: "A2",
        pin5: "B1",
        pin6: "B2",
      }}
      schX={-6.65}
      schY={3.97}
      schWidth="1.8mm"
      schHeight="3.2mm"
      schPinArrangement={{
        leftSide: { pins: [1, 2], direction: "top-to-bottom" },
        rightSide: { pins: [3, 4, 5, 6], direction: "top-to-bottom" },
      }}
      connections={{
        P1: "net.T4_PRI_A",
        P2: "net.T4_PRI_B",
        A1: "net.T4_HI",
        A2: "net.LEG_B",
        B1: "net.T4_LO",
        B2: "net.VIN_NEG",
      }}
    />
    <chip
      name="L2"
      displayName="26uH 60PR964"
      manufacturerPartNumber="60PR964"
      footprint="pinrow8_p2.54mm"
      pinLabels={{
        pin1: "A1",
        pin2: "B1",
        pin3: "A2",
        pin4: "B2",
        pin5: "A3",
        pin6: "B3",
        pin7: "A4",
        pin8: "B4",
      }}
      schX={-1.27}
      schY={2.46}
      schWidth="2mm"
      schHeight="3.8mm"
      schPinArrangement={{
        leftSide: { pins: [1, 3, 5, 7], direction: "top-to-bottom" },
        rightSide: { pins: [2, 4, 6, 8], direction: "top-to-bottom" },
      }}
      connections={{
        A1: "net.LEG_A",
        A2: "net.LEG_A",
        A3: "net.LEG_A",
        A4: "net.LEG_A",
        B1: "net.T2_PRI_A",
        B2: "net.T2_PRI_A",
        B3: "net.T2_PRI_A",
        B4: "net.T2_PRI_A",
      }}
    />
    <inductor
      name="L1"
      inductance="2uH"
      footprint="pinrow2_p10mm_id1mm_od2mm"
      schX={5.56}
      schY={9.34}
      connections={{ pin1: "net.RECT", pin2: "net.VOUT_PLUS" }}
    />

    <DualGateDriver
      name="U1"
      x={-11.44}
      y={0.11}
      inputA="net.U1_INA"
      inputB="net.U1_INB"
      outputA="net.U1_OUTA"
      outputB="net.U1_OUTB"
    />
    <DualGateDriver
      name="U2"
      x={-1.65}
      y={-1.08}
      inputA="net.U2_INA"
      inputB="net.U2_INB"
      outputA="net.U2_OUTA"
      outputB="net.U2_OUTB"
    />
    <DualGateDriver
      name="U3"
      x={-11.4}
      y={-3.67}
      inputA="net.U3_INA"
      inputB="net.U3_INB"
      outputA="net.U3_OUTA"
      outputB="net.U3_OUTB"
    />

    <chip
      name="U4"
      manufacturerPartNumber="TPS715A01DRBR"
      footprint="son8_ep"
      pinLabels={{
        pin1: "OUT",
        pin2: "NC2",
        pin3: "NC3",
        pin4: "FB",
        pin5: "VIN",
        pin6: "NC6",
        pin7: "NC7",
        pin8: "GND",
        pin9: "PAD",
      }}
      schX={p2(4.11)}
      schY={5.22}
      schWidth="2.2mm"
      schHeight="3mm"
      schPinArrangement={{
        leftSide: { pins: [5, 8, 9], direction: "top-to-bottom" },
        rightSide: { pins: [1, 4, 2, 3, 6, 7], direction: "top-to-bottom" },
      }}
      connections={{
        VIN: "net.LDO_IN",
        GND: "net.P2_GND",
        PAD: "net.P2_GND",
        OUT: "net.V3V3",
        FB: "net.LDO_FB",
      }}
    />
    <chip
      name="U5"
      manufacturerPartNumber="OPA365AIDBVR"
      footprint="sot23_5"
      pinLabels={{
        pin1: "OUT",
        pin2: "V_MINUS",
        pin3: "IN_PLUS",
        pin4: "IN_MINUS",
        pin5: "V_PLUS",
      }}
      schX={p2(-9.11)}
      schY={5.67}
      schWidth="1.8mm"
      schHeight="2.4mm"
      schPinArrangement={{
        leftSide: { pins: [3, 4, 2], direction: "top-to-bottom" },
        rightSide: { pins: [1, 5], direction: "top-to-bottom" },
      }}
      connections={{
        pin1: "net.P2_IOUT",
        pin2: "net.P2_GND",
        pin3: "net.ISENSE_PLUS",
        pin4: "net.ISENSE_FB",
        pin5: "net.OPA_SUPPLY",
      }}
    />

    <pinheader
      name="J1"
      displayName="400V INPUT +"
      pinCount={2}
      pitch="5mm"
      schX={-18.76}
      schY={9.42}
      connections={{ pin1: "net.VIN_RAW", pin2: "net.VIN_RAW" }}
    />
    <pinheader
      name="J2"
      displayName="400V INPUT -"
      pinCount={2}
      pitch="5mm"
      schX={-18.76}
      schY={8.02}
      connections={{ pin1: "net.VIN_NEG", pin2: "net.VIN_NEG" }}
    />
    <pinheader
      name="J3"
      displayName="12V OUT +"
      pinCount={2}
      pitch="5mm"
      schX={18.1}
      schY={8.74}
      connections={{ pin1: "net.VOUT_PLUS", pin2: "net.VOUT_PLUS" }}
    />
    <pinheader
      name="J4"
      displayName="12V OUT -"
      pinCount={2}
      pitch="5mm"
      schX={18.1}
      schY={3.77}
      connections={{ pin1: "net.VOUT_MINUS", pin2: "net.VOUT_MINUS" }}
    />
    <pinheader
      name="J5"
      displayName="CONTROLCARD"
      pinCount={14}
      pitch="2.54mm"
      schX={-14.42}
      schY={-6.71}
      schWidth="2.2mm"
      schHeight="7.5mm"
      connections={{
        pin1: "net.VOUT",
        pin2: "net.IOUT",
        pin3: "net.VINMON",
        pin4: "net.GND",
        pin5: "net.VBIAS",
        pin6: "net.OUTE",
        pin7: "net.GND",
        pin8: "net.OUTF",
        pin9: "net.OUTB",
        pin10: "net.OUTC",
        pin11: "net.OUTA",
        pin12: "net.OUTD",
        pin13: "net.CS",
        pin14: "net.SYNC",
      }}
    />
    <pinheader
      name="J6"
      displayName="PRIMARY JUMPER"
      pinCount={2}
      pitch="2.54mm"
      schX={1.01}
      schY={8.76}
      connections={{ pin1: "net.T2_PRI_A", pin2: "net.T2_PRI_A" }}
    />
    <pinheader
      name="J7"
      displayName="AUXILIARY MODULE"
      pinCount={7}
      pitch="2.54mm"
      schX={-2.69}
      schY={-11.54}
      schWidth="2mm"
      schHeight="4.5mm"
      connections={{
        pin1: "net.VINB",
        pin2: "net.VAUX_PRI",
        pin3: "net.VIN_NEG",
        pin4: "net.VIN_NEG",
        pin5: "net.GND",
        pin6: "net.VINMON",
        pin7: "net.VBIAS",
      }}
    />
    <pinheader
      name="J8"
      displayName="AUX INPUT"
      pinCount={2}
      pitch="2.54mm"
      schX={-5.02}
      schY={-10.74}
      connections={{ pin1: "net.VINB", pin2: "net.VAUX_PRI" }}
    />

    {testpoints.map((tp) => (
      <testpoint
        key={tp.name}
        name={tp.name}
        schX={tp.x}
        schY={tp.y}
        footprintVariant="through_hole"
        holeDiameter="1mm"
        padDiameter="2mm"
        connections={{ pin1: tp.net }}
      />
    ))}

    <schematictext
      text="HS1 — Q1/Q2 HEATSINK"
      schX={-5.5}
      schY={12.95}
      fontSize={0.24}
      color="#666666"
    />
    <schematictext
      text="HS2 — Q3/Q4 HEATSINK"
      schX={-5.5}
      schY={6.05}
      fontSize={0.24}
      color="#666666"
    />
    <schematictext
      text="HS3 — Q5/Q6 HEATSINK"
      schX={6.6}
      schY={-10.15}
      fontSize={0.24}
      color="#666666"
    />

    {/* Off-sheet labels from TI's second source sheet are public ports here. */}
    <port
      name="VBIAS"
      direction="left"
      schX={p2(-12)}
      schY={4.19}
      connectsTo="net.P2_VBIAS"
    />
    <port
      name="IOUT"
      direction="left"
      schX={p2(-12)}
      schY={7.1}
      connectsTo="net.P2_IOUT"
    />
    <port
      name="GND"
      direction="left"
      schX={p2(-12)}
      schY={3.1}
      connectsTo="net.P2_GND"
    />
    <port
      name="IS_MINUS"
      direction="left"
      schX={p2(-12)}
      schY={5.19}
      connectsTo="net.IS_MINUS"
    />

    <port
      name="VIN_POS"
      direction="left"
      schX={-20.5}
      schY={12.68}
      connectsTo="net.VIN_RAW"
    />
    <port
      name="VIN_NEG"
      direction="left"
      schX={-20.5}
      schY={8.02}
      connectsTo="net.VIN_NEG"
    />
    <port
      name="VOUT_POS"
      direction="right"
      schX={20.5}
      schY={8.74}
      connectsTo="net.VOUT_PLUS"
    />
    <port
      name="VOUT_NEG"
      direction="right"
      schX={20.5}
      schY={3.77}
      connectsTo="net.VOUT_MINUS"
    />
  </subcircuit>
);

export default TIDM_PSFB_DCDC;
