import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { CSD18532KCS } from "../chips/CSD18532KCS.circuit.tsx";
import { INA213AIDCK } from "../chips/INA213AIDCK.circuit.tsx";
import { TL431BIDBZR } from "../chips/TL431BIDBZR.circuit.tsx";
import { UCC24610D } from "../chips/UCC24610D.circuit.tsx";
import { UCC25600D } from "../chips/UCC25600D.circuit.tsx";
import { UCC27714D } from "../chips/UCC27714D.circuit.tsx";

type TwoPinPart = {
  name: string;
  value: string;
  footprint: string;
  x: number;
  y: number;
  pin1: string;
  pin2: string;
  dnp?: boolean;
};

// Expand the native Altium sheet coordinates so tscircuit's larger symbols and
// net labels retain the same relative layout without crowding each other.
const sheetCoord = (value: number) => value * 1.6;

// PMP11064.Dat is the final fitted BOM from the supplied TI package. It is
// authoritative where older TIDRK28 drawing callouts differ (R526 and C530).
const capacitors: TwoPinPart[] = [
  {
    name: "C100",
    value: "2700pF",
    footprint: "0603",
    x: 5.3,
    y: -3.65,
    pin1: "net.V20V2",
    pin2: "net.OUTPUT_FB_DIV",
  },
  {
    name: "C500",
    value: "1500pF",
    footprint: "pinrow2_p7.5mm_id1mm_od2mm",
    x: -3.2,
    y: 6.58,
    pin1: "net.V20V1",
    pin2: "net.GND1",
  },
  {
    name: "C501",
    value: "47pF",
    footprint: "0402",
    x: 6.4,
    y: 6.67,
    pin1: "net.U500_VD",
    pin2: "net.U500_VS",
  },
  {
    name: "C502",
    value: "47pF",
    footprint: "0402",
    x: 12.06,
    y: 6.67,
    pin1: "net.U501_VD",
    pin2: "net.U501_VS",
  },
  {
    name: "C503",
    value: "0.047uF",
    footprint: "1210",
    x: -6.76,
    y: 6.12,
    pin1: "net.VBULK",
    pin2: "net.GND1",
  },
  {
    name: "C504",
    value: "1pF",
    footprint: "1206",
    x: 1.55,
    y: 5.85,
    pin1: "net.SGND",
    pin2: "net.SR2_SNUBBER",
    dnp: true,
  },
  {
    name: "C505",
    value: "0.22uF",
    footprint: "1206",
    x: -9.6,
    y: 4.75,
    pin1: "net.BOOTSTRAP",
    pin2: "net.HB_SW",
  },
  {
    name: "C506",
    value: "1uF",
    footprint: "0603",
    x: 7.77,
    y: 4.39,
    pin1: "net.V5Vs",
    pin2: "net.SGND",
  },
  {
    name: "C507",
    value: "1uF",
    footprint: "0603",
    x: 13.43,
    y: 4.39,
    pin1: "net.V5Vs",
    pin2: "net.SGND",
  },
  {
    name: "C508",
    value: "1uF",
    footprint: "0805",
    x: -14.44,
    y: 4.48,
    pin1: "net.V12V",
    pin2: "net.GND1",
  },
  {
    name: "C509",
    value: "1uF",
    footprint: "0805",
    x: -13.71,
    y: 4.48,
    pin1: "net.V12V",
    pin2: "net.GND1",
  },
  {
    name: "C510",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
    x: 3.66,
    y: 3.87,
    pin1: "net.V20V1",
    pin2: "net.SGND",
  },
  {
    name: "C511",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
    x: 4.57,
    y: 3.87,
    pin1: "net.V20V1",
    pin2: "net.SGND",
  },
  {
    name: "C512",
    value: "0.1uF",
    footprint: "0805",
    x: 2.74,
    y: -2.1,
    pin1: "net.V12Vs",
    pin2: "net.SGND",
  },
  {
    name: "C513",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
    x: 6.95,
    y: 2.35,
    pin1: "net.V20V2",
    pin2: "net.SGND",
  },
  {
    name: "C514",
    value: "220pF",
    footprint: "0603",
    x: -14.07,
    y: 2.47,
    pin1: "net.V12V",
    pin2: "net.GND1",
  },
  {
    name: "C515",
    value: "220pF",
    footprint: "0603",
    x: -13.34,
    y: 2.47,
    pin1: "net.V12V",
    pin2: "net.GND1",
  },
  {
    name: "C516",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
    x: 7.86,
    y: 2.35,
    pin1: "net.V20V2",
    pin2: "net.SGND",
  },
  {
    name: "C517",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
    x: 3.47,
    y: 2.17,
    pin1: "net.V20V1",
    pin2: "net.SGND",
  },
  {
    name: "C518",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
    x: 4.39,
    y: 2.17,
    pin1: "net.V20V1",
    pin2: "net.SGND",
  },
  {
    name: "C519",
    value: "0.047uF",
    footprint: "pinrow2_p15mm_id1mm_od2mm",
    x: -4.11,
    y: 0.91,
    pin1: "net.RESONANT_RETURN",
    pin2: "net.GND1",
  },
  {
    name: "C523",
    value: "0.1uF",
    footprint: "0805",
    x: 8.77,
    y: 2.1,
    pin1: "net.V20V2",
    pin2: "net.SGND",
  },
  {
    name: "C525",
    value: "1pF",
    footprint: "1206",
    x: 1.55,
    y: 0.37,
    pin1: "net.SGND",
    pin2: "net.SR1_SNUBBER",
    dnp: true,
  },
  {
    name: "C526",
    value: "100pF",
    footprint: "1206",
    x: -5.76,
    y: -0.91,
    pin1: "net.STARTUP_HV",
    pin2: "net.RESONANT_RETURN",
  },
  {
    name: "C527",
    value: "0.47uF",
    footprint: "0603",
    x: -8.59,
    y: -1.19,
    pin1: "net.CTRL_SS",
    pin2: "net.GND1",
  },
  {
    name: "C528",
    value: "0.01uF",
    footprint: "0603",
    x: -4.75,
    y: -3.38,
    pin1: "net.CTRL_FB",
    pin2: "net.GND1",
  },
  {
    name: "C529",
    value: "100pF",
    footprint: "0603",
    x: 2.65,
    y: -3.66,
    pin1: "net.FB_REF",
    pin2: "net.FB_CATHODE",
  },
  {
    name: "C530",
    value: "0.01uF",
    footprint: "0603",
    x: 2.29,
    y: -4.39,
    pin1: "net.FB_COMP",
    pin2: "net.FB_CATHODE",
  },
  {
    name: "C531",
    value: "4.7pF",
    footprint: "0603",
    x: 10.24,
    y: -4.84,
    pin1: "net.CS_IN_MINUS",
    pin2: "net.CS_IN_PLUS",
    dnp: true,
  },
  {
    name: "C532",
    value: "0.22uF",
    footprint: "0805",
    x: -8.77,
    y: -5.03,
    pin1: "net.V12V",
    pin2: "net.GND1",
  },
  {
    name: "C533",
    value: "1uF",
    footprint: "0603",
    x: -7.31,
    y: -5.03,
    pin1: "net.CTRL_OC",
    pin2: "net.GND1",
  },
  {
    name: "C534",
    value: "0.1uF",
    footprint: "0402",
    x: 5.48,
    y: -5.39,
    pin1: "net.CS_SHARE",
    pin2: "net.SGND",
    dnp: true,
  },
  {
    name: "C535",
    value: "0.1uF",
    footprint: "0402",
    x: 6.58,
    y: -5.39,
    pin1: "net.V5Vs",
    pin2: "net.SGND",
    dnp: true,
  },
  {
    name: "C536",
    value: "1uF",
    footprint: "1206",
    x: 0.37,
    y: -5.58,
    pin1: "net.SGND",
    pin2: "net.FB_AUX",
  },
];

const resistors: TwoPinPart[] = [
  {
    name: "R500",
    value: "10ohm",
    footprint: "0603",
    x: 5.85,
    y: 6.95,
    pin1: "net.U500_VD",
    pin2: "net.U500_CLAMP",
  },
  {
    name: "R501",
    value: "10ohm",
    footprint: "0603",
    x: 11.52,
    y: 6.95,
    pin1: "net.U501_VD",
    pin2: "net.U501_CLAMP",
  },
  {
    name: "R502",
    value: "10ohm",
    footprint: "0603",
    x: 5.85,
    y: 6.22,
    pin1: "net.U500_VS",
    pin2: "net.SGND",
  },
  {
    name: "R503",
    value: "10ohm",
    footprint: "0603",
    x: 11.52,
    y: 6.22,
    pin1: "net.U501_VS",
    pin2: "net.SGND",
  },
  {
    name: "R504",
    value: "0ohm",
    footprint: "2010",
    x: 0.73,
    y: 5.85,
    pin1: "net.SR2_SNUBBER",
    pin2: "net.VD_SR2",
    dnp: true,
  },
  {
    name: "R505",
    value: "100kohm",
    footprint: "0603",
    x: 6.76,
    y: 5.85,
    pin1: "net.SGND",
    pin2: "net.U500_TON",
  },
  {
    name: "R506",
    value: "100kohm",
    footprint: "0603",
    x: 12.43,
    y: 5.85,
    pin1: "net.SGND",
    pin2: "net.U501_TON",
  },
  {
    name: "R507",
    value: "3.3ohm",
    footprint: "1206",
    x: -12.25,
    y: 5.67,
    pin1: "net.V12V",
    pin2: "net.BOOT_CHARGE",
  },
  {
    name: "R508",
    value: "221kohm",
    footprint: "0603",
    x: 6.76,
    y: 5.3,
    pin1: "net.SGND",
    pin2: "net.U500_EN",
  },
  {
    name: "R509",
    value: "221kohm",
    footprint: "0603",
    x: 12.43,
    y: 5.3,
    pin1: "net.SGND",
    pin2: "net.U501_EN",
  },
  {
    name: "R510",
    value: "3ohm",
    footprint: "0603",
    x: -8.23,
    y: 4.94,
    pin1: "net.HO",
    pin2: "net.HV_GATE_HIGH",
  },
  {
    name: "R511",
    value: "20kohm",
    footprint: "0805",
    x: -6.76,
    y: 4.2,
    pin1: "net.HV_GATE_HIGH",
    pin2: "net.HB_SW",
  },
  {
    name: "R512",
    value: "0ohm",
    footprint: "0603",
    x: 1.83,
    y: 3.84,
    pin1: "net.Q502_GATE",
    pin2: "net.VG_SR2",
  },
  {
    name: "R513",
    value: "0.01ohm",
    footprint: "2010",
    x: 6.03,
    y: 3.11,
    pin1: "net.V20V1",
    pin2: "net.V20V2",
  },
  {
    name: "R514",
    value: "0.01ohm",
    footprint: "2010",
    x: 6.03,
    y: 2.56,
    pin1: "net.V20V1",
    pin2: "net.V20V2",
  },
  {
    name: "R515",
    value: "21.5kohm",
    footprint: "0603",
    x: 4.57,
    y: -3.66,
    pin1: "net.OUTPUT_FB_DIV",
    pin2: "net.V20V2",
  },
  {
    name: "R516",
    value: "0ohm",
    footprint: "0603",
    x: 1.83,
    y: 2.19,
    pin1: "net.Q505_GATE",
    pin2: "net.VG_SR1",
  },
  {
    name: "R517",
    value: "0.01ohm",
    footprint: "2010",
    x: 6.03,
    y: 2.01,
    pin1: "net.V20V1",
    pin2: "net.V20V2",
  },
  {
    name: "R518",
    value: "3ohm",
    footprint: "0603",
    x: -8.04,
    y: 1.83,
    pin1: "net.LO",
    pin2: "net.HV_GATE_LOW",
  },
  {
    name: "R520",
    value: "0.01ohm",
    footprint: "2010",
    x: 6.03,
    y: 1.46,
    pin1: "net.V20V1",
    pin2: "net.V20V2",
  },
  {
    name: "R521",
    value: "20kohm",
    footprint: "0805",
    x: -6.76,
    y: 1.28,
    pin1: "net.HV_GATE_LOW",
    pin2: "net.GND1",
  },
  {
    name: "R522",
    value: "0ohm",
    footprint: "2010",
    x: 0.73,
    y: 0.37,
    pin1: "net.SR1_SNUBBER",
    pin2: "net.VD_SR1",
    dnp: true,
  },
  {
    name: "R523",
    value: "10ohm",
    footprint: "0603",
    x: -10.42,
    y: -0.73,
    pin1: "net.PWM_DISABLE_GATE",
    pin2: "net.PWMCNTL1",
  },
  {
    name: "R524",
    value: "51ohm",
    footprint: "0603",
    x: -14.99,
    y: -0.73,
    pin1: "net.GD2_INPUT",
    pin2: "net.GD2_DRIVER",
  },
  {
    name: "R525",
    value: "1Mohm",
    footprint: "0603",
    x: -9.87,
    y: -1.1,
    pin1: "net.GND1",
    pin2: "net.PWM_DISABLE_GATE",
  },
  {
    name: "R526",
    value: "4.99kohm",
    footprint: "0603",
    x: 0.55,
    y: -1.46,
    pin1: "net.FB_LED_ANODE",
    pin2: "net.V12Vs",
  },
  {
    name: "R527",
    value: "51ohm",
    footprint: "0603",
    x: -14.44,
    y: -1.46,
    pin1: "net.GD1_INPUT",
    pin2: "net.GD1_DRIVER",
  },
  {
    name: "R528",
    value: "10kohm",
    footprint: "0603",
    x: 1.83,
    y: -2.38,
    pin1: "net.FB_CATHODE",
    pin2: "net.V12Vs",
  },
  {
    name: "R530",
    value: "15ohm",
    footprint: "0603",
    x: -0.37,
    y: -2.56,
    pin1: "net.FB_LED_CATHODE",
    pin2: "net.FB_CATHODE",
  },
  {
    name: "R531",
    value: "511ohm",
    footprint: "0603",
    x: -5.3,
    y: -2.74,
    pin1: "net.CTRL_RT",
    pin2: "net.CTRL_FB",
  },
  {
    name: "R534",
    value: "10kohm",
    footprint: "0603",
    x: 3.11,
    y: -4.39,
    pin1: "net.FB_COMP",
    pin2: "net.FB_REF",
  },
  {
    name: "R535",
    value: "30.1kohm",
    footprint: "0603",
    x: 4.94,
    y: -4.57,
    pin1: "net.OUTPUT_FB_DIV",
    pin2: "net.CS_SHARE",
    dnp: true,
  },
  {
    name: "R536",
    value: "1kohm",
    footprint: "0603",
    x: 5.85,
    y: -4.57,
    pin1: "net.CS_SHARE",
    pin2: "net.CS_FILTER",
    dnp: true,
  },
  {
    name: "R537",
    value: "15ohm",
    footprint: "0603",
    x: 6.76,
    y: -4.57,
    pin1: "net.CS_FILTER",
    pin2: "net.CS_OUT",
    dnp: true,
  },
  {
    name: "R538",
    value: "10ohm",
    footprint: "0603",
    x: 11.15,
    y: -4.57,
    pin1: "net.CS_IN_MINUS",
    pin2: "net.V20V2",
    dnp: true,
  },
  {
    name: "R539",
    value: "100kohm",
    footprint: "0402",
    x: 1.28,
    y: -4.57,
    pin1: "net.V12Vs",
    pin2: "net.FB_AUX",
  },
  {
    name: "R540",
    value: "0ohm",
    footprint: "0603",
    x: 4.02,
    y: -4.94,
    pin1: "net.FB_REF",
    pin2: "net.OUTPUT_FB_DIV",
  },
  {
    name: "R541",
    value: "200ohm",
    footprint: "0603",
    x: -8.04,
    y: -4.94,
    pin1: "net.GND1",
    pin2: "net.CTRL_OC",
  },
  {
    name: "R542",
    value: "20kohm",
    footprint: "0603",
    x: -6.58,
    y: -4.94,
    pin1: "net.GND1",
    pin2: "net.CTRL_DT",
  },
  {
    name: "R543",
    value: "3.4kohm",
    footprint: "0603",
    x: -5.85,
    y: -4.94,
    pin1: "net.GND1",
    pin2: "net.CTRL_RT",
  },
  {
    name: "R544",
    value: "10ohm",
    footprint: "0603",
    x: 11.15,
    y: -5.12,
    pin1: "net.CS_IN_PLUS",
    pin2: "net.V20V1",
    dnp: true,
  },
  {
    name: "R545",
    value: "2.49kohm",
    footprint: "0603",
    x: 4.57,
    y: -5.48,
    pin1: "net.SGND",
    pin2: "net.OUTPUT_FB_DIV",
  },
  {
    name: "R546",
    value: "1kohm",
    footprint: "0603",
    x: -1.46,
    y: -6.22,
    pin1: "net.OPTO_AUX_ANODE",
    pin2: "net.AUX_ZENER",
  },
  {
    name: "R547",
    value: "1kohm",
    footprint: "0603",
    x: -1.46,
    y: -7.13,
    pin1: "net.SGND",
    pin2: "net.OPTO_AUX_ANODE",
  },
];

const standardDiodes = [
  {
    name: "D500",
    mpn: "BAS316,115",
    footprint: "sod323",
    x: 5.48,
    y: 7.68,
    a: "net.U500_CLAMP",
    k: "net.V5Vs",
    variant: "standard" as const,
  },
  {
    name: "D501",
    mpn: "BAS316,115",
    footprint: "sod323",
    x: 11.15,
    y: 7.68,
    a: "net.U501_CLAMP",
    k: "net.V5Vs",
    variant: "standard" as const,
  },
  {
    name: "D502",
    mpn: "MURA160T3G",
    footprint: "sma",
    x: -11.15,
    y: 5.67,
    a: "net.BOOT_CHARGE",
    k: "net.BOOTSTRAP",
    variant: "standard" as const,
  },
  {
    name: "D503",
    mpn: "BAT54HT1G",
    footprint: "sod323",
    x: -8.34,
    y: 4.2,
    a: "net.HV_GATE_HIGH",
    k: "net.HO",
    variant: "schottky" as const,
  },
  {
    name: "D504",
    mpn: "BAT54HT1G",
    footprint: "sod323",
    x: -8.15,
    y: 1.1,
    a: "net.HV_GATE_LOW",
    k: "net.LO",
    variant: "schottky" as const,
  },
  {
    name: "D507",
    mpn: "MMSZ5254B-7-F",
    footprint: "sod123",
    x: -1.46,
    y: -5.36,
    a: "net.AUX_ZENER",
    k: "net.FB_AUX",
    variant: "zener" as const,
  },
];

const tp = [
  { name: "TP500", x: 10.05, y: 3.55, net: "net.V20V2", color: "#d62828" },
  { name: "TP501", x: 10.05, y: 1.02, net: "net.SGND", color: "#111111" },
  {
    name: "TP502",
    x: -0.11,
    y: -2.01,
    net: "net.FB_LED_CATHODE",
    color: "#f77f00",
  },
  {
    name: "TP503",
    x: -0.11,
    y: -2.93,
    net: "net.FB_CATHODE",
    color: "#fcbf49",
  },
  {
    name: "TP504",
    x: 6.22,
    y: -3.77,
    net: "net.CS_FILTER",
    color: "#d62828",
    dnp: true,
  },
  {
    name: "TP505",
    x: 7.13,
    y: -3.77,
    net: "net.CS_OUT",
    color: "#111111",
    dnp: true,
  },
  { name: "TP506", x: 0.11, y: -5.85, net: "net.SGND", color: "#111111" },
];

const mosfetPins = {
  pin1: ["G", "GATE"],
  pin2: ["D", "DRAIN"],
  pin3: ["S", "SOURCE"],
} as const;
const optocouplerPins = {
  pin1: ["A", "ANODE"],
  pin2: ["K", "CATHODE"],
  pin3: ["E", "EMITTER"],
  pin4: ["C", "COLLECTOR"],
} as const;

/**
 * PMP11282's complete half-bridge LLC isolated DC/DC sheet (PMP11064 sheet 2).
 *
 * Extracted from TI's published Altium design package and checked against
 * TIDRK28. The PFC and auxiliary flyback sheets are intentionally excluded.
 * Gray/DNP parts are retained because they are explicit tuning options on the
 * isolated stage's source sheet.
 *
 * Reference design: https://www.ti.com/tool/PMP11282
 */
export const PMP11282_IsolatedDCDC = (props: SubcircuitProps) => (
  <subcircuit schMaxTraceDistance="6mm" routingDisabled {...props}>
    <schematictext
      text="Notes: L500 and C100 are modified parts."
      schX={sheetCoord(-12.2)}
      schY={sheetCoord(8.7)}
      fontSize={0.4}
      color="#d00000"
      anchor="left"
    />
    <schematictext
      text="Current sharing control."
      schX={sheetCoord(8.2)}
      schY={sheetCoord(-6.3)}
      fontSize={0.4}
      color="#0000cc"
    />

    {capacitors.map((c) => (
      <capacitor
        key={c.name}
        name={c.name}
        capacitance={c.value}
        footprint={c.footprint}
        schX={sheetCoord(c.x)}
        schY={sheetCoord(c.y)}
        schOrientation="vertical"
        doNotPlace={c.dnp}
        connections={{ pin1: c.pin1, pin2: c.pin2 }}
      />
    ))}
    {resistors.map((r) => (
      <resistor
        key={r.name}
        name={r.name}
        resistance={r.value}
        footprint={r.footprint}
        schX={sheetCoord(r.x)}
        schY={sheetCoord(r.y)}
        doNotPlace={r.dnp}
        connections={{ pin1: r.pin1, pin2: r.pin2 }}
      />
    ))}
    {standardDiodes.map((d) => (
      <diode
        key={d.name}
        name={d.name}
        manufacturerPartNumber={d.mpn}
        footprint={d.footprint}
        variant={d.variant}
        schX={sheetCoord(d.x)}
        schY={sheetCoord(d.y)}
        connections={{ anode: d.a, cathode: d.k }}
      />
    ))}

    <chip
      name="D505"
      manufacturerPartNumber="BAV99WT1G"
      footprint="sot323"
      pinLabels={{ pin1: "A", pin2: "C", pin3: "K" }}
      schX={sheetCoord(-6.76)}
      schY={sheetCoord(-0.91)}
      connections={{
        pin1: "net.GND1",
        pin2: "net.STARTUP_HV",
        pin3: "net.CTRL_OC",
      }}
    />
    <chip
      name="D506"
      manufacturerPartNumber="BAV99WT1G"
      footprint="sot323"
      pinLabels={{ pin1: "A", pin2: "C", pin3: "K" }}
      schX={sheetCoord(0.37)}
      schY={sheetCoord(-4.02)}
      connections={{
        pin1: "net.FB_CATHODE",
        pin2: "net.FB_AUX",
        pin3: "net.V12Vs",
      }}
    />

    <chip
      name="Q500"
      manufacturerPartNumber="BSS123"
      footprint="sot23"
      pinLabels={mosfetPins}
      schX={sheetCoord(4.75)}
      schY={sheetCoord(7.01)}
      connections={{
        pin1: "net.V5Vs",
        pin2: "net.VD_SR1",
        pin3: "net.U500_CLAMP",
      }}
    />
    <chip
      name="Q501"
      manufacturerPartNumber="BSS123"
      footprint="sot23"
      pinLabels={mosfetPins}
      schX={sheetCoord(10.42)}
      schY={sheetCoord(7.01)}
      connections={{
        pin1: "net.V5Vs",
        pin2: "net.VD_SR2",
        pin3: "net.U501_CLAMP",
      }}
    />
    <CSD18532KCS
      name="Q502"
      schX={sheetCoord(1.46)}
      schY={sheetCoord(4.69)}
      connections={{ G: "net.Q502_GATE", D: "net.VD_SR2", S: "net.SGND" }}
    />
    <chip
      name="Q503"
      manufacturerPartNumber="IPW50R190CE"
      footprint="pinrow3_rows1_p5.45mm_id1.2mm_od2.2mm"
      pinLabels={mosfetPins}
      schX={sheetCoord(-5.91)}
      schY={sheetCoord(4.75)}
      connections={{
        pin1: "net.HV_GATE_HIGH",
        pin2: "net.VBULK",
        pin3: "net.HB_SW",
      }}
    />
    <chip
      name="Q504"
      manufacturerPartNumber="IPW50R190CE"
      footprint="pinrow3_rows1_p5.45mm_id1.2mm_od2.2mm"
      pinLabels={mosfetPins}
      schX={sheetCoord(-5.91)}
      schY={sheetCoord(1.83)}
      connections={{
        pin1: "net.HV_GATE_LOW",
        pin2: "net.HB_SW",
        pin3: "net.GND1",
      }}
    />
    <CSD18532KCS
      name="Q505"
      schX={sheetCoord(1.46)}
      schY={sheetCoord(1.53)}
      connections={{ G: "net.Q505_GATE", D: "net.VD_SR1", S: "net.SGND" }}
    />
    <chip
      name="Q506"
      manufacturerPartNumber="2N7002-7-F"
      footprint="sot23"
      pinLabels={mosfetPins}
      schX={sheetCoord(-9.2)}
      schY={sheetCoord(-0.73)}
      connections={{
        pin1: "net.PWM_DISABLE_GATE",
        pin2: "net.CTRL_SS",
        pin3: "net.GND1",
      }}
    />

    <chip
      name="L500"
      manufacturerPartNumber="RLTI-1150"
      footprint="pinrow4_p5mm_id1mm_od2mm"
      pinLabels={{ pin1: "IN_1", pin2: "IN_2", pin3: "OUT_11", pin4: "OUT_12" }}
      schX={sheetCoord(-4.02)}
      schY={sheetCoord(4.8)}
      connections={{
        pin1: "net.HB_SW",
        pin2: "net.HB_SW",
        pin3: "net.RESONANT_INPUT",
        pin4: "net.RESONANT_INPUT",
      }}
    />
    <schematictext
      text="40uH (modified part)"
      schX={sheetCoord(-4.02)}
      schY={sheetCoord(3.95)}
      fontSize={0.25}
    />
    <chip
      name="T500"
      manufacturerPartNumber="RLTI-1149"
      footprint="pinrow10_p5mm_id1mm_od2mm"
      pinLabels={{
        pin1: "PRI_3",
        pin2: "PRI_4",
        pin3: "SEC_13",
        pin4: "SEC_14",
        pin5: "CT_15",
        pin6: "CT_16",
        pin7: "CT_17",
        pin8: "CT_18",
        pin9: "SEC_19",
        pin10: "SEC_20",
      }}
      schX={sheetCoord(-2.39)}
      schY={sheetCoord(3.11)}
      schWidth="3mm"
      schHeight="4.5mm"
      connections={{
        pin1: "net.RESONANT_RETURN",
        pin2: "net.RESONANT_INPUT",
        pin3: "net.VD_SR2",
        pin4: "net.VD_SR2",
        pin5: "net.V20V1",
        pin6: "net.V20V1",
        pin7: "net.V20V1",
        pin8: "net.V20V1",
        pin9: "net.VD_SR1",
        pin10: "net.VD_SR1",
      }}
    />
    <schematictext
      text="210uH LLC transformer"
      schX={sheetCoord(-2.39)}
      schY={sheetCoord(0.55)}
      fontSize={0.25}
    />

    <UCC24610D
      name="U500"
      schX={sheetCoord(8.23)}
      schY={sheetCoord(6.03)}
      connections={{
        VD: "net.U500_VD",
        VS: "net.U500_VS",
        GATE: "net.VG_SR1",
        GND: "net.SGND",
        VCC: "net.V5Vs",
        TON: "net.U500_TON",
        EN_TOFF: "net.U500_EN",
      }}
    />
    <UCC24610D
      name="U501"
      schX={sheetCoord(13.89)}
      schY={sheetCoord(6.03)}
      connections={{
        VD: "net.U501_VD",
        VS: "net.U501_VS",
        GATE: "net.VG_SR2",
        GND: "net.SGND",
        VCC: "net.V5Vs",
        TON: "net.U501_TON",
        EN_TOFF: "net.U501_EN",
      }}
    />
    <UCC27714D
      name="U502"
      schX={sheetCoord(-11.33)}
      schY={sheetCoord(3.47)}
      connections={{
        HI: "net.GD2_DRIVER",
        LI: "net.GD1_DRIVER",
        VSS: "net.GND1",
        COM: "net.GND1",
        LO: "net.LO",
        VDD: "net.V12V",
        HS: "net.HB_SW",
        HO: "net.HO",
        HB: "net.BOOTSTRAP",
      }}
    />
    <chip
      name="U503"
      manufacturerPartNumber="PC817X4NSZ0F"
      footprint="dip4_p2.54mm_w7.62mm"
      pinLabels={optocouplerPins}
      schX={sheetCoord(-2.74)}
      schY={sheetCoord(-1.65)}
      connections={{
        pin1: "net.FB_LED_ANODE",
        pin2: "net.FB_LED_CATHODE",
        pin3: "net.GND1",
        pin4: "net.CTRL_FB",
      }}
    />
    <UCC25600D
      name="U504"
      schX={sheetCoord(-9.87)}
      schY={sheetCoord(-3.11)}
      connections={{
        DT: "net.CTRL_DT",
        RT: "net.CTRL_RT",
        OC: "net.CTRL_OC",
        SS: "net.CTRL_SS",
        GD2: "net.GD2_INPUT",
        GND: "net.GND1",
        VCC: "net.V12V",
        GD1: "net.GD1_INPUT",
      }}
    />
    <INA213AIDCK
      name="U505"
      doNotPlace
      schX={sheetCoord(8.59)}
      schY={sheetCoord(-4.57)}
      connections={{
        REF: "net.SGND",
        GND: "net.SGND",
        V_PLUS: "net.V5Vs",
        IN_PLUS: "net.CS_IN_PLUS",
        IN_MINUS: "net.CS_IN_MINUS",
        OUT: "net.CS_OUT",
      }}
    />
    <TL431BIDBZR
      name="U506"
      schX={sheetCoord(1.92)}
      schY={sheetCoord(-5.36)}
      connections={{
        CATHODE: "net.FB_CATHODE",
        REFERENCE: "net.FB_REF",
        ANODE: "net.SGND",
      }}
    />
    <chip
      name="U507"
      manufacturerPartNumber="LTV-817"
      footprint="dip4_p2.54mm_w7.62mm"
      pinLabels={optocouplerPins}
      schX={sheetCoord(-2.74)}
      schY={sheetCoord(-6.95)}
      connections={{
        pin1: "net.OPTO_AUX_ANODE",
        pin2: "net.SGND",
        pin3: "net.GND1",
        pin4: "net.CTRL_RT",
      }}
    />

    <pinheader
      name="J500"
      displayName="24V OUTPUT"
      pinCount={4}
      gender="male"
      pitch="4.2mm"
      schX={sheetCoord(10.6)}
      schY={sheetCoord(2.29)}
      pinLabels={["20V2", "20V2", "SGND", "SGND"]}
      connections={{
        pin1: "net.V20V2",
        pin2: "net.V20V2",
        pin3: "net.SGND",
        pin4: "net.SGND",
      }}
    />
    <chip
      name="H500"
      manufacturerPartNumber="782653B04250G"
      footprint="pinrow3_p5mm_id2mm_od3mm"
      pinLabels={{ pin1: "MOUNT_1", pin2: "MOUNT_2", pin3: "MOUNT_3" }}
      schX={sheetCoord(3.69)}
      schY={sheetCoord(6.18)}
      connections={{ pin1: "net.SGND", pin2: "net.SGND", pin3: "net.SGND" }}
    />
    <chip
      name="H501"
      manufacturerPartNumber="513101B02500G"
      footprint="pinrow2_p5mm_id2mm_od3mm"
      pinLabels={{ pin1: "MOUNT_1", pin2: "MOUNT_2" }}
      schX={sheetCoord(-4.9)}
      schY={sheetCoord(2.44)}
      connections={{ pin1: "net.GND1", pin2: "net.GND1" }}
    />

    {tp.map((t) => (
      <testpoint
        key={t.name}
        name={t.name}
        schX={sheetCoord(t.x)}
        schY={sheetCoord(t.y)}
        footprintVariant="through_hole"
        holeDiameter="1mm"
        padDiameter="2mm"
        doNotPlace={t.dnp}
        connections={{ pin1: t.net }}
      />
    ))}

    <port
      name="VBULK"
      direction="left"
      schX={sheetCoord(-16.5)}
      schY={sheetCoord(6.1)}
      connectsTo="net.VBULK"
    />
    <port
      name="12V"
      direction="left"
      schX={sheetCoord(-16.5)}
      schY={sheetCoord(4.7)}
      connectsTo="net.V12V"
    />
    <port
      name="PWMCNTL1"
      direction="left"
      schX={sheetCoord(-16.5)}
      schY={sheetCoord(-0.7)}
      connectsTo="net.PWMCNTL1"
    />
    <port
      name="GND1"
      direction="left"
      schX={sheetCoord(-16.5)}
      schY={sheetCoord(-2)}
      connectsTo="net.GND1"
    />
    <port
      name="20V2"
      direction="right"
      schX={sheetCoord(15.5)}
      schY={sheetCoord(2.8)}
      connectsTo="net.V20V2"
    />
    <port
      name="SGND"
      direction="right"
      schX={sheetCoord(15.5)}
      schY={sheetCoord(1.8)}
      connectsTo="net.SGND"
    />
  </subcircuit>
);

export default PMP11282_IsolatedDCDC;
