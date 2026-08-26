import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

/** TIDA-010070 ORing and hot-swap output protection.
 * Source placement and connectivity were extracted from TI's native Altium sheet (TIDM357 sheet 2).
 * @see https://www.ti.com/lit/pdf/TIDM357
 */
export const TIDA010070_OutputProtection = (props: SubcircuitProps) => (
  <subcircuit
    {...props}
    routingDisabled
    schMaxTraceDistance="100mm"
    schTraceAutoLabelEnabled={false}
  >
    <schematictext
      text="TIDA-010070 ORing and hot-swap output protection"
      schX={0}
      schY={9.25}
      fontSize={0.7}
    />
    <chip
      name="J2"
      schX={17.125}
      schY={2.5}
      manufacturerPartNumber="1986660-2"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="J4"
      schX={17.125}
      schY={-0.75}
      manufacturerPartNumber="282834-2"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="J1"
      schX={17.125}
      schY={5.25}
      manufacturerPartNumber="282834-2"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="J3"
      schX={-17.375}
      schY={0.75}
      manufacturerPartNumber="1986660-2"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <testpoint
      name="TP1"
      schX={-13.875}
      schY={3.125}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <diode
      name="D4"
      schX={-12.375}
      schY={-1.5}
      manufacturerPartNumber="10MQ100NTRPBF"
      footprint="sma"
      variant="schottky"
      schOrientation="vertical"
    />
    <resistor
      name="R5"
      schX={-2.625}
      schY={1.375}
      resistance="95.3k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <mosfet
      name="Q1"
      schX={-8.125}
      schY={2.625}
      manufacturerPartNumber="CSD19536KTT"
      footprint="pinrow3_p2.54mm"
      channelType="n"
      mosfetMode="enhancement"
    />
    <mosfet
      name="Q2"
      schX={5.125}
      schY={2.625}
      manufacturerPartNumber="CSD19536KTT"
      footprint="pinrow3_p2.54mm"
      channelType="n"
      mosfetMode="enhancement"
    />
    <testpoint
      name="TP4"
      schX={-3.625}
      schY={-1.875}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <chip
      name="J6"
      schX={9.375}
      schY={-5.25}
      manufacturerPartNumber="282834-2"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <capacitor
      name="C7"
      schX={-0.125}
      schY={-1}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C5"
      schX={-9}
      schY={-0.875}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C4"
      schX={-5.375}
      schY={0.75}
      capacitance="2.2uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C3"
      schX={-15.875}
      schY={0.75}
      capacitance="2.2uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <diode
      name="D5"
      schX={0.125}
      schY={-3.375}
      manufacturerPartNumber="1N4148W-7-F"
      footprint="pinrow2_p2.54mm"
      variant="standard"
      schOrientation="horizontal"
    />
    <chip
      name="Q3"
      schX={0.5}
      schY={-4.875}
      manufacturerPartNumber="MMBT5401LT1G"
      footprint="sot23"
      pinLabels={{ pin3: "C", pin1: "B", pin2: "E" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [2, 3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R11"
      schX={-0.875}
      schY={-4.125}
      resistance="1.02k"
      footprint="1206"
      schOrientation="vertical"
    />
    <capacitor
      name="C8"
      schX={2.875}
      schY={-5}
      capacitance="0.01uF"
      footprint="1206"
      schOrientation="vertical"
    />
    <testpoint
      name="TP3"
      schX={12.625}
      schY={3.125}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <capacitor
      name="C6"
      schX={-0.875}
      schY={-1}
      capacitance="0.012uF"
      footprint="1206"
      schOrientation="vertical"
    />
    <testpoint
      name="TP2"
      schX={-3.875}
      schY={3.125}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <resistor
      name="R8"
      schX={-2.625}
      schY={-0.875}
      resistance="4.12k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R3"
      schX={7.375}
      schY={2.625}
      resistance="102k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="U1"
      schX={-9.625}
      schY={1.625}
      manufacturerPartNumber="LM5050MK-1/NOPB"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin1: "VS",
        pin2: "GND",
        pin3: "OFF",
        pin4: "IN",
        pin5: "GATE",
        pin6: "OUT",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 4, 3] },
        rightSide: { direction: "top-to-bottom", pins: [5, 6, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R7"
      schX={-9.125}
      schY={4.625}
      resistance="100ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <chip
      name="U2"
      schX={1.875}
      schY={0.375}
      manufacturerPartNumber="CMP-0071871-1"
      footprint="pinrow10_p2.54mm"
      pinLabels={{
        pin7: "PWR",
        pin5: "GND",
        pin6: "TIMER",
        pin1: "SEN",
        pin2: "VIN",
        pin3: "UVLO",
        pin4: "OVLO",
        pin10: "GATE",
        pin9: "OUT",
        pin8: "PGD",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [7, 6, 4, 3, 2] },
        rightSide: { direction: "top-to-bottom", pins: [5, 1, 10, 9, 8] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="D2"
      schX={13.625}
      schY={0.875}
      manufacturerPartNumber="VS-6CWQ10FN-M3"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin1: "A", pin2: "K", pin3: "A" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [3] },
        topSide: { direction: "left-to-right", pins: [2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="J5"
      schX={17.375}
      schY={-3.5}
      manufacturerPartNumber="282834-2"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R1"
      schX={1.125}
      schY={3}
      resistance="0.002ohm"
      footprint="pinrow4_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C1"
      schX={10.125}
      schY={1.25}
      capacitance="33uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      schX={11.875}
      schY={1}
      capacitance="33uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R6"
      schX={-2.125}
      schY={1.375}
      resistance="95.3k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R10"
      schX={-1.625}
      schY={-0.875}
      resistance="30.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R9"
      schX={-2.125}
      schY={-0.875}
      resistance="7.15k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <diode
      name="D3"
      schX={-14.625}
      schY={0.875}
      manufacturerPartNumber="SMCJ26CA-TR"
      footprint="pinrow2_p2.54mm"
      variant="standard"
      schOrientation="vertical"
    />
    <trace from="J2.pin1" to="net.VCC_48V" schDisplayLabel="VCC_48V" />
    <trace from="J2.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="J4.pin1" to="net.VCC_ENC2" schDisplayLabel="VCC_ENC2" />
    <trace from="J4.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="J1.pin1" to="net.VCC_ENC1" schDisplayLabel="VCC_ENC1" />
    <trace from="J1.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="J3.pin1" to="C3.pin2" />
    <trace from="C3.pin2" to="D3.pin1" />
    <trace from="D3.pin1" to="TP1.pin1" />
    <trace from="D3.pin1" to="U1.pin4" />
    <trace from="U1.pin4" to="Q1.source" />
    <trace from="J3.pin2" to="C3.pin1" />
    <trace from="C3.pin1" to="D3.pin2" />
    <trace from="D3.pin2" to="D4.pin2" />
    <trace from="D4.pin2" to="TP4.pin1" />
    <trace from="TP4.pin1" to="R8.pin1" />
    <trace from="R8.pin1" to="R9.pin1" />
    <trace from="R9.pin1" to="R10.pin2" />
    <trace from="R10.pin2" to="C6.pin1" />
    <trace from="C6.pin1" to="C7.pin2" />
    <trace from="TP4.pin1" to="C4.pin1" />
    <trace from="C7.pin2" to="U2.pin5" />
    <trace from="J3.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="D4.pin1" to="C5.pin2" />
    <trace from="D4.pin1" to="U1.pin3" />
    <trace from="U1.pin3" to="U1.pin2" />
    <trace from="R5.pin1" to="R6.pin1" />
    <trace from="R5.pin1" to="TP2.pin1" />
    <trace from="R5.pin1" to="C4.pin2" />
    <trace from="C4.pin2" to="U1.pin6" />
    <trace from="U1.pin6" to="Q1.drain" />
    <trace from="Q1.drain" to="R7.pin2" />
    <trace from="R6.pin1" to="R1.pin2" />
    <trace from="R5.pin2" to="R8.pin2" />
    <trace from="R5.pin2" to="U2.pin4" />
    <trace from="Q1.gate" to="U1.pin5" />
    <trace from="Q2.gate" to="U2.pin10" />
    <trace from="Q2.gate" to="net.Gate" schDisplayLabel="Gate" />
    <trace from="Q2.source" to="R3.pin2" />
    <trace from="R3.pin2" to="C1.pin1" />
    <trace from="C1.pin1" to="C2.pin1" />
    <trace from="C2.pin1" to="D2.pin2" />
    <trace from="D2.pin2" to="TP3.pin1" />
    <trace from="Q2.source" to="U2.pin9" />
    <trace from="Q2.source" to="net.VCC_48V" schDisplayLabel="VCC_48V" />
    <trace from="Q2.drain" to="R1.pin1" />
    <trace from="J6.pin1" to="net.VCC_5V_BAT" schDisplayLabel="VCC_5V_BAT" />
    <trace from="J6.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="C7.pin1" to="U2.pin2" />
    <trace from="U2.pin2" to="R1.pin4" />
    <trace from="C5.pin1" to="U1.pin1" />
    <trace from="U1.pin1" to="R7.pin1" />
    <trace from="D5.pin1" to="R11.pin2" />
    <trace from="D5.pin1" to="net.Gate" schDisplayLabel="Gate" />
    <trace from="D5.pin2" to="Q3.pin2" />
    <trace from="Q3.pin2" to="C8.pin2" />
    <trace from="Q3.pin3" to="C8.pin1" />
    <trace from="Q3.pin3" to="net.GND" schDisplayLabel="GND" />
    <trace from="Q3.pin1" to="R11.pin1" />
    <trace from="C6.pin2" to="U2.pin6" />
    <trace from="R3.pin1" to="U2.pin8" />
    <trace from="R3.pin1" to="net.EN" schDisplayLabel="EN" />
    <trace from="U2.pin7" to="R10.pin1" />
    <trace from="U2.pin1" to="R1.pin3" />
    <trace from="U2.pin3" to="R9.pin2" />
    <trace from="R9.pin2" to="R6.pin2" />
    <trace from="D2.pin1" to="D2.pin3" />
    <trace from="D2.pin1" to="net.GND" schDisplayLabel="GND" />
    <trace from="J5.pin1" to="net.VCC_15V" schDisplayLabel="VCC_15V" />
    <trace from="J5.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="C1.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="C2.pin2" to="net.GND" schDisplayLabel="GND" />
  </subcircuit>
);

export default TIDA010070_OutputProtection;
