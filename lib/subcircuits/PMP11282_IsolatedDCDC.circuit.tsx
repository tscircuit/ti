import type { SubcircuitProps } from "@tscircuit/props";
import { Fragment } from "react";
import "tscircuit";
import { INA213AIDCK } from "../chips/INA213AIDCK.circuit.tsx";
import { TL431BIDBZR } from "../chips/TL431BIDBZR.circuit.tsx";
import { UCC24610D } from "../chips/UCC24610D.circuit.tsx";
import { UCC25600D } from "../chips/UCC25600D.circuit.tsx";
import { UCC27714D } from "../chips/UCC27714D.circuit.tsx";
import { pmp11282TraceConnections } from "./PMP11282_IsolatedDCDC.connections.ts";
import {
  getPmp11282Placement,
  type Pmp11282ComponentName,
} from "./PMP11282_IsolatedDCDC.placements.ts";

type TwoPinPart = {
  name: Pmp11282ComponentName;
  value: string;
  footprint: string;
  dnp?: boolean;
};

type StandardDiode = {
  name: Pmp11282ComponentName;
  mpn: string;
  footprint: string;
  variant: "standard" | "schottky" | "zener";
};

type TestPoint = {
  name: Pmp11282ComponentName;
  dnp?: boolean;
};

type MosfetPart = {
  name: Pmp11282ComponentName;
  mpn: string;
  footprint: string;
};

// Kept only for sheet annotations and the subcircuit's public boundary ports.
// Every physical component is positioned from the parsed Altium source map.
const sheetCoord = (value: number) => value;

const horizontalCapacitors = new Set([
  "C500",
  "C504",
  "C505",
  "C506",
  "C507",
  "C519",
  "C525",
  "C526",
  "C529",
  "C530",
]);

const verticalResistors = new Set([
  "R511",
  "R515",
  "R521",
  "R524",
  "R525",
  "R527",
  "R528",
  "R530",
  "R539",
  "R541",
  "R542",
  "R543",
  "R545",
  "R546",
  "R547",
]);

// PMP11064.Dat is the final fitted BOM from the supplied TI package. It is
// authoritative where older TIDRK28 drawing callouts differ (R526 and C530).
const capacitors: TwoPinPart[] = [
  {
    name: "C500",
    value: "1500pF",
    footprint: "pinrow2_p7.5mm_id1mm_od2mm",
  },
  {
    name: "C501",
    value: "47pF",
    footprint: "0402",
  },
  {
    name: "C502",
    value: "47pF",
    footprint: "0402",
  },
  {
    name: "C503",
    value: "0.047uF",
    footprint: "1210",
  },
  {
    name: "C504",
    value: "1pF",
    footprint: "1206",
    dnp: true,
  },
  {
    name: "C505",
    value: "0.22uF",
    footprint: "1206",
  },
  {
    name: "C506",
    value: "1uF",
    footprint: "0603",
  },
  {
    name: "C507",
    value: "1uF",
    footprint: "0603",
  },
  {
    name: "C508",
    value: "1uF",
    footprint: "0805",
  },
  {
    name: "C509",
    value: "1uF",
    footprint: "0805",
  },
  {
    name: "C510",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C511",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C512",
    value: "0.1uF",
    footprint: "0805",
  },
  {
    name: "C513",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C514",
    value: "220pF",
    footprint: "0603",
  },
  {
    name: "C515",
    value: "220pF",
    footprint: "0603",
  },
  {
    name: "C516",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C517",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C518",
    value: "680uF",
    footprint: "pinrow2_p5mm_id1mm_od2mm",
  },
  {
    name: "C519",
    value: "0.047uF",
    footprint: "pinrow2_p15mm_id1mm_od2mm",
  },
  {
    name: "C523",
    value: "0.1uF",
    footprint: "0805",
  },
  {
    name: "C525",
    value: "1pF",
    footprint: "1206",
    dnp: true,
  },
  {
    name: "C526",
    value: "100pF",
    footprint: "1206",
  },
  {
    name: "C527",
    value: "0.47uF",
    footprint: "0603",
  },
  {
    name: "C528",
    value: "0.01uF",
    footprint: "0603",
  },
  {
    name: "C529",
    value: "100pF",
    footprint: "0603",
  },
  {
    name: "C530",
    value: "0.01uF",
    footprint: "0603",
  },
  {
    name: "C531",
    value: "4.7pF",
    footprint: "0603",
    dnp: true,
  },
  {
    name: "C532",
    value: "0.22uF",
    footprint: "0805",
  },
  {
    name: "C533",
    value: "1uF",
    footprint: "0603",
  },
  {
    name: "C534",
    value: "0.1uF",
    footprint: "0402",
    dnp: true,
  },
  {
    name: "C535",
    value: "0.1uF",
    footprint: "0402",
    dnp: true,
  },
  {
    name: "C536",
    value: "1uF",
    footprint: "1206",
  },
];

const resistors: TwoPinPart[] = [
  {
    name: "R500",
    value: "10ohm",
    footprint: "0603",
  },
  {
    name: "R501",
    value: "10ohm",
    footprint: "0603",
  },
  {
    name: "R502",
    value: "10ohm",
    footprint: "0603",
  },
  {
    name: "R503",
    value: "10ohm",
    footprint: "0603",
  },
  {
    name: "R504",
    value: "0ohm",
    footprint: "2010",
    dnp: true,
  },
  {
    name: "R505",
    value: "100kohm",
    footprint: "0603",
  },
  {
    name: "R506",
    value: "100kohm",
    footprint: "0603",
  },
  {
    name: "R507",
    value: "3.3ohm",
    footprint: "1206",
  },
  {
    name: "R508",
    value: "221kohm",
    footprint: "0603",
  },
  {
    name: "R509",
    value: "221kohm",
    footprint: "0603",
  },
  {
    name: "R510",
    value: "3ohm",
    footprint: "0603",
  },
  {
    name: "R511",
    value: "20kohm",
    footprint: "0805",
  },
  {
    name: "R512",
    value: "0ohm",
    footprint: "0603",
  },
  {
    name: "R513",
    value: "0.01ohm",
    footprint: "2010",
  },
  {
    name: "R514",
    value: "0.01ohm",
    footprint: "2010",
  },
  {
    name: "R515",
    value: "21.5kohm",
    footprint: "0603",
  },
  {
    name: "R516",
    value: "0ohm",
    footprint: "0603",
  },
  {
    name: "R517",
    value: "0.01ohm",
    footprint: "2010",
  },
  {
    name: "R518",
    value: "3ohm",
    footprint: "0603",
  },
  {
    name: "R520",
    value: "0.01ohm",
    footprint: "2010",
  },
  {
    name: "R521",
    value: "20kohm",
    footprint: "0805",
  },
  {
    name: "R522",
    value: "0ohm",
    footprint: "2010",
    dnp: true,
  },
  {
    name: "R523",
    value: "10ohm",
    footprint: "0603",
  },
  {
    name: "R524",
    value: "51ohm",
    footprint: "0603",
  },
  {
    name: "R525",
    value: "1Mohm",
    footprint: "0603",
  },
  {
    name: "R526",
    value: "4.99kohm",
    footprint: "0603",
  },
  {
    name: "R527",
    value: "51ohm",
    footprint: "0603",
  },
  {
    name: "R528",
    value: "10kohm",
    footprint: "0603",
  },
  {
    name: "R530",
    value: "15ohm",
    footprint: "0603",
  },
  {
    name: "R531",
    value: "511ohm",
    footprint: "0603",
  },
  {
    name: "R534",
    value: "10kohm",
    footprint: "0603",
  },
  {
    name: "R535",
    value: "30.1kohm",
    footprint: "0603",
    dnp: true,
  },
  {
    name: "R536",
    value: "1kohm",
    footprint: "0603",
    dnp: true,
  },
  {
    name: "R537",
    value: "15ohm",
    footprint: "0603",
    dnp: true,
  },
  {
    name: "R538",
    value: "10ohm",
    footprint: "0603",
    dnp: true,
  },
  {
    name: "R539",
    value: "100kohm",
    footprint: "0402",
  },
  {
    name: "R540",
    value: "0ohm",
    footprint: "0603",
  },
  {
    name: "R541",
    value: "200ohm",
    footprint: "0603",
  },
  {
    name: "R542",
    value: "20kohm",
    footprint: "0603",
  },
  {
    name: "R543",
    value: "3.4kohm",
    footprint: "0603",
  },
  {
    name: "R544",
    value: "10ohm",
    footprint: "0603",
    dnp: true,
  },
  {
    name: "R545",
    value: "2.49kohm",
    footprint: "0603",
  },
  {
    name: "R546",
    value: "1kohm",
    footprint: "0603",
  },
  {
    name: "R547",
    value: "1kohm",
    footprint: "0603",
  },
];

const standardDiodes: StandardDiode[] = [
  {
    name: "D500",
    mpn: "BAS316,115",
    footprint: "sod323",
    variant: "standard" as const,
  },
  {
    name: "D501",
    mpn: "BAS316,115",
    footprint: "sod323",
    variant: "standard" as const,
  },
  {
    name: "D502",
    mpn: "MURA160T3G",
    footprint: "sma",
    variant: "standard" as const,
  },
  {
    name: "D503",
    mpn: "BAT54HT1G",
    footprint: "sod323",
    variant: "schottky" as const,
  },
  {
    name: "D504",
    mpn: "BAT54HT1G",
    footprint: "sod323",
    variant: "schottky" as const,
  },
  {
    name: "D507",
    mpn: "MMSZ5254B-7-F",
    footprint: "sod123",
    variant: "zener" as const,
  },
];

const mosfets: MosfetPart[] = [
  { name: "Q500", mpn: "BSS123", footprint: "sot23" },
  { name: "Q501", mpn: "BSS123", footprint: "sot23" },
  { name: "Q502", mpn: "CSD18532KCS", footprint: "to220" },
  {
    name: "Q503",
    mpn: "IPW50R190CE",
    footprint: "pinrow3_rows1_p5.45mm_id1.2mm_od2.2mm",
  },
  {
    name: "Q504",
    mpn: "IPW50R190CE",
    footprint: "pinrow3_rows1_p5.45mm_id1.2mm_od2.2mm",
  },
  { name: "Q505", mpn: "CSD18532KCS", footprint: "to220" },
  { name: "Q506", mpn: "2N7002-7-F", footprint: "sot23" },
];

const tp: TestPoint[] = [
  { name: "TP500" },
  { name: "TP501" },
  { name: "TP502" },
  { name: "TP503" },
  { name: "TP504", dnp: true },
  { name: "TP505", dnp: true },
  { name: "TP506" },
];

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
 * TIDRK31. The PFC and auxiliary flyback sheets are intentionally excluded.
 * Gray/DNP parts are retained because they are explicit tuning options on the
 * isolated stage's source sheet.
 *
 * Reference design: https://www.ti.com/tool/PMP11282
 */
export const PMP11282_IsolatedDCDC = (props: SubcircuitProps) => (
  <subcircuit
    {...props}
    schMaxTraceDistance="100mm"
    schTraceAutoLabelEnabled={false}
    routingDisabled
  >
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
        schX={getPmp11282Placement(c.name).x}
        schY={getPmp11282Placement(c.name).y}
        schOrientation={
          horizontalCapacitors.has(c.name) ? "horizontal" : "vertical"
        }
        doNotPlace={c.dnp}
      />
    ))}
    {resistors.map((r) => (
      <resistor
        key={r.name}
        name={r.name}
        resistance={r.value}
        footprint={r.footprint}
        schX={getPmp11282Placement(r.name).x}
        schY={getPmp11282Placement(r.name).y}
        schOrientation={
          verticalResistors.has(r.name) ? "vertical" : "horizontal"
        }
        doNotPlace={r.dnp}
      />
    ))}
    {standardDiodes.map((d) => (
      <diode
        key={d.name}
        name={d.name}
        manufacturerPartNumber={d.mpn}
        footprint={d.footprint}
        variant={d.variant}
        schX={getPmp11282Placement(d.name).x}
        schY={getPmp11282Placement(d.name).y}
        schOrientation={
          d.name === "D500" || d.name === "D501" || d.name === "D507"
            ? "vertical"
            : "horizontal"
        }
      />
    ))}

    <chip
      name="D505"
      manufacturerPartNumber="BAV99WT1G"
      footprint="sot323"
      pinLabels={{ pin1: "A", pin2: "C", pin3: "K" }}
      schX={getPmp11282Placement("D505").x}
      schY={getPmp11282Placement("D505").y}
    />
    <chip
      name="D506"
      manufacturerPartNumber="BAV99WT1G"
      footprint="sot323"
      pinLabels={{ pin1: "A", pin2: "C", pin3: "K" }}
      schX={getPmp11282Placement("D506").x}
      schY={getPmp11282Placement("D506").y}
    />

    {mosfets.map((q) => (
      <mosfet
        key={q.name}
        name={q.name}
        manufacturerPartNumber={q.mpn}
        footprint={q.footprint}
        channelType="n"
        mosfetMode="enhancement"
        schX={getPmp11282Placement(q.name).x}
        schY={getPmp11282Placement(q.name).y}
      />
    ))}

    <chip
      name="L500"
      manufacturerPartNumber="RLTI-1150"
      footprint="pinrow4_p5mm_id1mm_od2mm"
      pinLabels={{ pin1: "IN_1", pin2: "IN_2", pin3: "OUT_11", pin4: "OUT_12" }}
      schX={getPmp11282Placement("L500").x}
      schY={getPmp11282Placement("L500").y}
      schWidth="1.1mm"
      schHeight="0.46mm"
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
        rightSide: { direction: "top-to-bottom", pins: [3, 4] },
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
      schX={getPmp11282Placement("T500").x}
      schY={getPmp11282Placement("T500").y}
      schWidth="0.4mm"
      schHeight="2.56mm"
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
        rightSide: {
          direction: "top-to-bottom",
          pins: [3, 4, 5, 6, 7, 8, 9, 10],
        },
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
      schX={getPmp11282Placement("U500").x}
      schY={getPmp11282Placement("U500").y}
      schWidth="1.1mm"
      schHeight="2.56mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [8, 5, 7, 3, 2, 6],
        },
        rightSide: { direction: "top-to-bottom", pins: [1, 4] },
      }}
    />
    <UCC24610D
      name="U501"
      schX={getPmp11282Placement("U501").x}
      schY={getPmp11282Placement("U501").y}
      schWidth="1.1mm"
      schHeight="2.56mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [8, 5, 7, 3, 2, 6],
        },
        rightSide: { direction: "top-to-bottom", pins: [1, 4] },
      }}
    />
    <UCC27714D
      name="U502"
      schX={getPmp11282Placement("U502").x}
      schY={getPmp11282Placement("U502").y}
      schWidth="2.19mm"
      schHeight="3.29mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [7, 4, 1, 2, 8, 9, 10, 14],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [13, 12, 11, 6, 5, 3],
        },
      }}
    />
    <chip
      name="U503"
      manufacturerPartNumber="PC817X4NSZ0F"
      footprint="dip4_p2.54mm_w7.62mm"
      pinLabels={optocouplerPins}
      schX={getPmp11282Placement("U503").x}
      schY={getPmp11282Placement("U503").y}
    />
    <UCC25600D
      name="U504"
      schX={getPmp11282Placement("U504").x}
      schY={getPmp11282Placement("U504").y}
      schWidth="1.1mm"
      schHeight="1.83mm"
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [8, 5, 6] },
        rightSide: { direction: "top-to-bottom", pins: [4, 2, 1, 3, 7] },
      }}
    />
    <INA213AIDCK
      name="U505"
      doNotPlace
      schX={getPmp11282Placement("U505").x}
      schY={getPmp11282Placement("U505").y}
    />
    <TL431BIDBZR
      name="U506"
      schX={getPmp11282Placement("U506").x}
      schY={getPmp11282Placement("U506").y}
    />
    <chip
      name="U507"
      manufacturerPartNumber="LTV-817"
      footprint="dip4_p2.54mm_w7.62mm"
      pinLabels={optocouplerPins}
      schX={getPmp11282Placement("U507").x}
      schY={getPmp11282Placement("U507").y}
    />

    <pinheader
      name="J500"
      displayName="24V OUTPUT"
      pinCount={4}
      gender="male"
      pitch="4.2mm"
      schX={getPmp11282Placement("J500").x}
      schY={getPmp11282Placement("J500").y}
      pinLabels={["20V2", "20V2", "SGND", "SGND"]}
    />
    <chip
      name="H500"
      manufacturerPartNumber="782653B04250G"
      footprint="pinrow3_p5mm_id2mm_od3mm"
      pinLabels={{ pin1: "MOUNT_1", pin2: "MOUNT_2", pin3: "MOUNT_3" }}
      schX={getPmp11282Placement("H500").x}
      schY={getPmp11282Placement("H500").y}
    />
    <chip
      name="H501"
      manufacturerPartNumber="513101B02500G"
      footprint="pinrow2_p5mm_id2mm_od3mm"
      pinLabels={{ pin1: "MOUNT_1", pin2: "MOUNT_2" }}
      schX={getPmp11282Placement("H501").x}
      schY={getPmp11282Placement("H501").y}
    />

    {tp.map((t) => (
      <testpoint
        key={t.name}
        name={t.name}
        schX={getPmp11282Placement(t.name).x}
        schY={getPmp11282Placement(t.name).y}
        footprintVariant="through_hole"
        holeDiameter="1mm"
        padDiameter="2mm"
        doNotPlace={t.dnp}
      />
    ))}

    {pmp11282TraceConnections.map((trace) => (
      <Fragment key={`${trace.from}-${trace.to}`}>
        <trace
          from={trace.from}
          to={trace.to}
          schDisplayLabel={
            "schDisplayLabel" in trace ? trace.schDisplayLabel : undefined
          }
        />
      </Fragment>
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
