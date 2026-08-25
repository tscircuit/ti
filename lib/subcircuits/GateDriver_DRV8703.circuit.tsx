import type { SubcircuitProps } from "@tscircuit/props";
import { Fragment } from "react";
import "tscircuit";
import { DRV8703QRHBRQ1_PIN_LABELS } from "../chips/DRV8703QRHBRQ1.circuit.tsx";
import {
  HiddenTwoPinPart,
  ReferenceGround,
  ReferenceJunctions,
  ReferenceLabels,
  ReferenceNetTie,
  ReferenceVerticalCapacitor,
  ReferenceVerticalResistor,
  ReferenceWiring,
  tidaSourceDark,
  tidaSourceLineWidth,
  tidaSourceRed,
} from "./tida01389-reference-primitives.tsx";

const driverLeftPins = [
  { pin: 14, label: "AVDD", y: 2.558939 },
  { pin: 12, label: "DVDD", y: 2.193377 },
  { pin: 28, label: "PVDD", y: 1.827814 },
  { pin: 27, label: "VDRAIN", y: 1.462251 },
  { pin: 29, label: "VCP", y: 1.096688 },
  { pin: 30, label: "CPH", y: 0.731126 },
  { pin: 31, label: "CPL", y: 0.182781 },
  { pin: 2, label: "IN1/PH", y: -0.182781 },
  { pin: 3, label: "IN2/EN", y: -0.548344 },
  { pin: 8, label: "\\SLEEP", y: -0.913907 },
  { pin: 11, label: "MODE", y: -1.27947 },
  { pin: 9, label: "WDFLT", y: -1.645033 },
  { pin: 7, label: "SCLK", y: -2.010595 },
  { pin: 6, label: "SDI", y: -2.193377 },
  { pin: 4, label: "SDO", y: -2.376158 },
  { pin: 5, label: "\\SCS", y: -2.558939 },
] as const;

const driverRightPins = [
  { pin: 18, label: "GH1", y: 2.558939 },
  { pin: 19, label: "SH1", y: 2.193377 },
  { pin: 20, label: "GL1", y: 1.827814 },
  { pin: 26, label: "GH2", y: 1.462251 },
  { pin: 25, label: "SH2", y: 1.096688 },
  { pin: 24, label: "GL2", y: 0.731126 },
  { pin: 23, label: "SL2", y: 0.365563 },
  { pin: 21, label: "SP", y: 0 },
  { pin: 22, label: "SN", y: -0.365563 },
  { pin: 16, label: "SO", y: -0.731126 },
  { pin: 15, label: "VREF", y: -1.096688 },
  { pin: 10, label: "\\FAULT", y: -1.462251 },
  { pin: 32, label: "NC", y: -1.827814 },
  { pin: 1, label: "GND", y: -2.193377 },
  { pin: 13, label: "GND", y: -2.376158 },
  { pin: 17, label: "GND", y: -2.558939 },
  { pin: 33, label: "PAD", y: -2.741721 },
] as const;

const ReferenceDriverSymbol = () => {
  const schX = -3.198674;
  const schY = -0.182781;
  const halfWidth = 1.096688;
  const halfHeight = 2.924502;

  return (
    <>
      <schematicrect
        schX={schX}
        schY={schY}
        width={2.193377}
        height={5.849004}
        strokeWidth={tidaSourceLineWidth}
        isFilled
        color="#ffffb0"
      />
      <schematicrect
        schX={schX}
        schY={schY}
        width={2.193377}
        height={5.849004}
        strokeWidth={tidaSourceLineWidth}
        color={tidaSourceDark}
      />
      {driverLeftPins.map(({ pin, label, y }) => (
        <Fragment key={`left-${pin}`}>
          <schematicline
            x1={schX - halfWidth}
            y1={schY + y}
            x2={schX - halfWidth - 0.365563}
            y2={schY + y}
            strokeWidth={tidaSourceLineWidth}
            color={tidaSourceDark}
          />
          <schematictext
            text={String(pin)}
            schX={schX - halfWidth - 0.036556}
            schY={schY + y + 0.091391}
            fontSize={0.182781}
            anchor="right"
            color={tidaSourceDark}
          />
          <schematictext
            text={label}
            schX={schX - halfWidth + 0.036556}
            schY={schY + y + 0.091391}
            fontSize={0.182781}
            anchor="left"
            color={tidaSourceDark}
          />
        </Fragment>
      ))}
      {driverRightPins.map(({ pin, label, y }) => (
        <Fragment key={`right-${pin}`}>
          <schematicline
            x1={schX + halfWidth}
            y1={schY + y}
            x2={schX + halfWidth + 0.365563}
            y2={schY + y}
            strokeWidth={tidaSourceLineWidth}
            color={tidaSourceDark}
          />
          <schematictext
            text={String(pin)}
            schX={schX + halfWidth + 0.036556}
            schY={schY + y + 0.091391}
            fontSize={0.182781}
            anchor="left"
            color={tidaSourceDark}
          />
          <schematictext
            text={label}
            schX={schX + halfWidth - 0.036556}
            schY={schY + y + 0.091391}
            fontSize={0.182781}
            anchor="right"
            color={tidaSourceDark}
          />
        </Fragment>
      ))}
      <schematictext
        text="U1"
        schX={schX - halfWidth}
        schY={schY + halfHeight + 0.091391}
        fontSize={0.182781}
        anchor="left"
        color={tidaSourceDark}
      />
      <schematictext
        text="=PartNumber"
        schX={schX - halfWidth}
        schY={schY - halfHeight - 0.09139}
        fontSize={0.182781}
        anchor="left"
        color={tidaSourceDark}
      />

      <schematicline
        x1={-5.465164}
        y1={-1.754702}
        x2={-5.318939}
        y2={-1.900927}
        strokeWidth={tidaSourceLineWidth}
        color="#ff0000"
      />
      <schematicline
        x1={-5.318939}
        y1={-1.754702}
        x2={-5.465164}
        y2={-1.900927}
        strokeWidth={tidaSourceLineWidth}
        color="#ff0000"
      />
      <schematicline
        x1={-1.443973}
        y1={-1.937483}
        x2={-1.297748}
        y2={-2.083708}
        strokeWidth={tidaSourceLineWidth}
        color="#ff0000"
      />
      <schematicline
        x1={-1.297748}
        y1={-1.937483}
        x2={-1.443973}
        y2={-2.083708}
        strokeWidth={tidaSourceLineWidth}
        color="#ff0000"
      />
    </>
  );
};

const driverWirePaths = [
  [
    { x: -1.005298, y: -1.27947 },
    { x: -1.736424, y: -1.27947 },
  ],
  [
    { x: -1.005298, y: 1.645032 },
    { x: -1.736424, y: 1.645032 },
  ],
  [
    { x: -1.005298, y: 2.376158 },
    { x: -1.736424, y: 2.376158 },
  ],
  [
    { x: -1.005298, y: 1.27947 },
    { x: -1.736424, y: 1.27947 },
  ],
  [
    { x: -1.005298, y: 0.548344 },
    { x: -1.736424, y: 0.548344 },
  ],
  [
    { x: -1.736424, y: -2.376158 },
    { x: -1.370861, y: -2.376158 },
    { x: -1.370861, y: -2.558939 },
    { x: -1.736424, y: -2.558939 },
  ],
  [
    { x: -1.736424, y: -2.741721 },
    { x: -1.370861, y: -2.741721 },
    { x: -1.370861, y: -2.558939 },
  ],
  [
    { x: -1.370861, y: -2.741721 },
    { x: -1.370861, y: -2.924502 },
    { x: -1.736424, y: -2.924502 },
  ],
  [
    { x: -1.370861, y: -2.924502 },
    { x: -1.370861, y: -3.107283 },
  ],
  [
    { x: -1.005298, y: 0.913907 },
    { x: -1.736424, y: 0.913907 },
  ],
  [
    { x: -1.005298, y: 2.010595 },
    { x: -1.736424, y: 2.010595 },
  ],
  [
    { x: -4.843707, y: 1.27947 },
    { x: -4.660926, y: 1.27947 },
  ],
  [
    { x: -6.305958, y: 1.096688 },
    { x: -6.305958, y: 0.913907 },
    { x: -4.660926, y: 0.913907 },
  ],
  [
    { x: -6.854302, y: 0.913907 },
    { x: -6.305958, y: 0.913907 },
  ],
  [
    { x: -6.305958, y: 1.645032 },
    { x: -5.757614, y: 1.645032 },
    { x: -4.660926, y: 1.645032 },
  ],
  [
    { x: -5.574833, y: 1.27947 },
    { x: -5.757614, y: 1.27947 },
    { x: -5.757614, y: 1.645032 },
  ],
  [
    { x: -5.392051, y: 0.548344 },
    { x: -4.660926, y: 0.548344 },
  ],
  [
    { x: -4.660926, y: 0 },
    { x: -5.392051, y: 0 },
  ],
  [
    { x: -7.585428, y: 1.645032 },
    { x: -6.305958, y: 1.645032 },
  ],
  [
    { x: -8.316553, y: 1.096688 },
    { x: -8.316553, y: 0.913907 },
    { x: -7.950991, y: 0.913907 },
  ],
  [
    { x: -8.316553, y: 1.645032 },
    { x: -7.585428, y: 1.645032 },
  ],
  [
    { x: -9.047679, y: 1.645032 },
    { x: -8.316553, y: 1.645032 },
  ],
  [
    { x: -7.950991, y: 0.913907 },
    { x: -7.585428, y: 0.913907 },
    { x: -7.585428, y: 1.096688 },
  ],
  [
    { x: -5.757614, y: 2.376158 },
    { x: -6.48874, y: 2.376158 },
  ],
  [
    { x: -5.757614, y: 2.924502 },
    { x: -5.20927, y: 2.924502 },
    { x: -5.20927, y: 2.010595 },
    { x: -4.660926, y: 2.010595 },
  ],
  [
    { x: -6.48874, y: 2.924502 },
    { x: -6.48874, y: 3.290065 },
    { x: -4.843707, y: 3.290065 },
    { x: -4.843707, y: 2.376158 },
    { x: -4.660926, y: 2.376158 },
  ],
  [
    { x: -1.736424, y: -2.010595 },
    { x: -1.370861, y: -2.010595 },
  ],
  [
    { x: -1.005298, y: -0.182781 },
    { x: -1.736424, y: -0.182781 },
  ],
  [
    { x: -1.005298, y: -0.548344 },
    { x: -1.736424, y: -0.548344 },
  ],
  [
    { x: -1.005298, y: 0.182781 },
    { x: -1.736424, y: 0.182781 },
  ],
  [
    { x: -1.005298, y: -0.913907 },
    { x: -1.736424, y: -0.913907 },
  ],
  [
    { x: -1.736424, y: -1.645032 },
    { x: 0.09139, y: -1.645032 },
  ],
  [
    { x: -5.392051, y: -0.365563 },
    { x: -4.660926, y: -0.365563 },
  ],
  [
    { x: -5.392051, y: -0.731126 },
    { x: -4.660926, y: -0.731126 },
  ],
  [
    { x: -5.392051, y: -2.558939 },
    { x: -4.660926, y: -2.558939 },
  ],
  [
    { x: -5.392051, y: -2.741721 },
    { x: -4.660926, y: -2.741721 },
  ],
  [
    { x: -5.392051, y: -2.376158 },
    { x: -4.660926, y: -2.376158 },
  ],
  [
    { x: -5.392051, y: -2.193377 },
    { x: -4.660926, y: -2.193377 },
  ],
  [
    { x: -5.392051, y: -1.096688 },
    { x: -4.660926, y: -1.096688 },
  ],
  [
    { x: -5.392051, y: -1.827814 },
    { x: -4.660926, y: -1.827814 },
  ],
  [
    { x: -5.940395, y: -1.462251 },
    { x: -5.026489, y: -1.462251 },
  ],
  [
    { x: -5.026489, y: -1.462251 },
    { x: -4.660926, y: -1.462251 },
  ],
] as const;

const driverLabels = [
  { text: "VCC", x: -1.005298, y: -1.27947 },
  { text: "GH1", x: -1.005298, y: 2.376158 },
  { text: "GL1", x: -1.005298, y: 1.645032 },
  { text: "GH2", x: -1.005298, y: 1.27947 },
  { text: "GL2", x: -1.005298, y: 0.548344 },
  { text: "SH1", x: -1.005298, y: 2.010595 },
  { text: "SH2", x: -1.005298, y: 0.913907 },
  { text: "VCP", x: -6.854302, y: 0.913907 },
  { text: "PVDD", x: -9.047679, y: 1.645032 },
  { text: "SL2", x: -1.005298, y: 0.182781 },
  { text: "SP", x: -1.005298, y: -0.182781 },
  { text: "SN", x: -1.005298, y: -0.548344 },
  { text: "SO", x: -1.005298, y: -0.913907 },
  { text: "VCC", x: -0.274173, y: -0.913907 },
  { text: "nFAULT", x: 0.09139, y: -1.645032 },
  { text: "IN1/PH", x: -5.392051, y: -0.365563 },
  { text: "IN2/EN", x: -5.392051, y: -0.731126 },
  { text: "SLEEP", x: -5.392051, y: -1.096688 },
  { text: "SCLK", x: -5.392051, y: -2.193377 },
  { text: "SDI", x: -5.392051, y: -2.376158 },
  { text: "SDO", x: -5.392051, y: -2.558939 },
  { text: "SCS", x: -5.392051, y: -2.741721 },
] as const;

const driverJunctions = [
  { x: -8.316553, y: 1.645032 },
  { x: -7.950991, y: 0.913907 },
  { x: -7.585428, y: 1.645032 },
  { x: -6.305958, y: 0.913907 },
  { x: -6.305958, y: 1.645032 },
  { x: -5.757614, y: 1.645032 },
  { x: -5.757614, y: 2.376158 },
  { x: -1.370861, y: -2.924502 },
  { x: -1.370861, y: -2.741721 },
  { x: -1.370861, y: -2.558939 },
  { x: -0.274173, y: -1.645032 },
] as const;

/**
 * DRV8703-Q1 gate-driver section extracted from TIDA-01389_Sch.SchDoc.
 * The visible layer is a direct 0.018278138-unit-per-source-pixel translation
 * of the Altium SVG. Electrical traces connect hidden real components so the
 * automatic router cannot alter any source geometry.
 */
export const GateDriver_DRV8703 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schTraceAutoLabelEnabled={false} {...props}>
    <net name="GND" isGroundNet />

    <schematicpath
      points={[
        { x: 0.822517, y: -3.838409 },
        { x: 0.822517, y: 3.838409 },
        { x: -9.413242, y: 3.838409 },
        { x: -9.413242, y: -3.838409 },
        { x: 0.822517, y: -3.838409 },
      ]}
      strokeColor={tidaSourceDark}
      strokeWidth={0.036556}
    />
    <schematictext
      schX={-4.295363}
      schY={-4.203972}
      text="DRV8703-Q1"
      fontSize={0.365563}
      color={tidaSourceDark}
    />

    <chip
      name="U1"
      manufacturerPartNumber="DRV8703QRHBRQ1"
      datasheetUrl="https://www.ti.com/lit/ds/symlink/drv8703-q1.pdf"
      footprint="kicad:Package_DFN_QFN/Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm"
      pinLabels={DRV8703QRHBRQ1_PIN_LABELS}
      noSchematicRepresentation
      noConnect={["nWDFLT", "NC"]}
    />
    <HiddenTwoPinPart
      name="C8"
      footprint="cap1206"
      manufacturerPartNumber="C3216X5R1H106K160AB"
    />
    <HiddenTwoPinPart
      name="C7"
      footprint="cap0402"
      manufacturerPartNumber="GRM155R61H104ME14D"
    />
    <HiddenTwoPinPart
      name="C5"
      footprint="cap0402"
      manufacturerPartNumber="C1005X5R1C105K050BC"
    />
    <chip
      name="NT1"
      noSchematicRepresentation
      footprint="kicad:NetTie/NetTie-2_SMD_Pad0.5mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      internallyConnectedPins={[[1, 2]]}
    />
    <HiddenTwoPinPart
      name="C10"
      footprint="cap0402"
      manufacturerPartNumber="GRM155R70J105MA12D"
    />
    <HiddenTwoPinPart
      name="C9"
      footprint="cap0402"
      manufacturerPartNumber="GRM155R70J105MA12D"
    />
    <HiddenTwoPinPart
      name="C6"
      footprint="cap0402"
      manufacturerPartNumber="GCM155R71H104KE02D"
    />
    <HiddenTwoPinPart
      name="R8"
      footprint="res0402"
      manufacturerPartNumber="CRCW040210K0JNED"
    />

    <ReferenceDriverSymbol />
    <ReferenceVerticalCapacitor
      name="C8"
      value="10µF"
      schX={-8.316553}
      schY={1.37086}
    />
    <ReferenceVerticalCapacitor
      name="C7"
      value="0.1µF"
      schX={-7.585427}
      schY={1.37086}
    />
    <ReferenceVerticalCapacitor
      name="C5"
      value="1µF"
      schX={-6.305958}
      schY={1.37086}
    />
    <ReferenceNetTie name="NT1" schX={-5.209269} schY={1.27947} />
    <ReferenceVerticalCapacitor
      name="C10"
      value="1µF"
      schX={-6.488739}
      schY={2.65033}
    />
    <ReferenceVerticalCapacitor
      name="C9"
      value="1µF"
      schX={-5.757613}
      schY={2.65033}
    />
    <ReferenceVerticalCapacitor
      name="C6"
      value="0.1µF"
      schX={-5.392051}
      schY={0.274172}
    />
    <ReferenceVerticalResistor
      name="R8"
      value="10k"
      schX={-0.274172}
      schY={-1.27947}
    />
    <ReferenceWiring paths={driverWirePaths} />
    <ReferenceJunctions centers={driverJunctions} />
    <ReferenceLabels labels={driverLabels} />
    <ReferenceGround schX={-5.757614} schY={2.376158} />
    <ReferenceGround schX={-7.950991} schY={0.913907} />
    <ReferenceGround schX={-5.940395} schY={-1.462251} />
    <ReferenceGround schX={-1.370861} schY={-3.107283} />

    <trace from="C10.pin1" to="U1.AVDD" />
    <trace from="C9.pin1" to="U1.DVDD" />
    <trace from="C10.pin2" to="C9.pin2" />
    <trace from="C9.pin2" to="net.GND" />

    <trace from="C8.pin1" to="C7.pin1" />
    <trace from="C7.pin1" to="C5.pin1" />
    <trace from="C5.pin1" to="U1.PVDD" />
    <trace from="C8.pin1" to="net.PVDD" />
    <trace from="C8.pin2" to="C7.pin2" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="C5.pin2" to="U1.VCP" />
    <trace from="C5.pin2" to="net.VCP" />
    <trace from="C5.pin1" to="NT1.pin1" />
    <trace from="NT1.pin2" to="U1.VDRAIN" />

    <trace from="C6.pin2" to="U1.CPL" />
    <trace from="C6.pin1" to="U1.CPH" />

    <trace from="U1.IN1_PH" to="net.IN1_PH" />
    <trace from="U1.IN2_EN" to="net.IN2_EN" />
    <trace from="U1.nSLEEP" to="net.SLEEP" />
    <trace from="U1.MODE" to="net.GND" />
    <trace from="U1.SCLK" to="net.SCLK" />
    <trace from="U1.SDI" to="net.SDI" />
    <trace from="U1.SDO" to="net.SDO" />
    <trace from="U1.nSCS" to="net.SCS" />

    <trace from="U1.GH1" to="net.GH1" />
    <trace from="U1.SH1" to="net.SH1" />
    <trace from="U1.GL1" to="net.GL1" />
    <trace from="U1.GH2" to="net.GH2" />
    <trace from="U1.SH2" to="net.SH2" />
    <trace from="U1.GL2" to="net.GL2" />
    <trace from="U1.SL2" to="net.SL2" />
    <trace from="U1.SP" to="net.SP" />
    <trace from="U1.SN" to="net.SN" />
    <trace from="U1.SO" to="net.SO" />
    <trace from="U1.VREF" to="net.VCC" />
    <trace from="U1.nFAULT" to="R8.pin2" />
    <trace from="R8.pin2" to="net.nFAULT" />
    <trace from="R8.pin1" to="net.VCC" />

    <trace from="U1.pin1" to="net.GND" />
    <trace from="U1.pin13" to="net.GND" />
    <trace from="U1.pin17" to="net.GND" />
    <trace from="U1.pin33" to="net.GND" />

    <port name="PVDD" direction="left" connectsTo="net.PVDD" />
    <port name="VCC" direction="left" connectsTo="net.VCC" />
    <port name="VCP" direction="left" connectsTo="net.VCP" />
    <port name="IN1_PH" direction="left" connectsTo="net.IN1_PH" />
    <port name="IN2_EN" direction="left" connectsTo="net.IN2_EN" />
    <port name="nSLEEP" direction="left" connectsTo="net.SLEEP" />
    <port name="SCLK" direction="left" connectsTo="net.SCLK" />
    <port name="SDI" direction="left" connectsTo="net.SDI" />
    <port name="SDO" direction="left" connectsTo="net.SDO" />
    <port name="nSCS" direction="left" connectsTo="net.SCS" />
    <port name="GH1" direction="right" connectsTo="net.GH1" />
    <port name="SH1" direction="right" connectsTo="net.SH1" />
    <port name="GL1" direction="right" connectsTo="net.GL1" />
    <port name="GH2" direction="right" connectsTo="net.GH2" />
    <port name="SH2" direction="right" connectsTo="net.SH2" />
    <port name="GL2" direction="right" connectsTo="net.GL2" />
    <port name="SL2" direction="right" connectsTo="net.SL2" />
    <port name="SP" direction="right" connectsTo="net.SP" />
    <port name="SN" direction="right" connectsTo="net.SN" />
    <port name="SO" direction="right" connectsTo="net.SO" />
    <port name="nFAULT" direction="right" connectsTo="net.nFAULT" />
    <port name="GND" direction="right" connectsTo="net.GND" />
  </subcircuit>
);

export default GateDriver_DRV8703;
