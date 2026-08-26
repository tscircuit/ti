import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

/** PMP11774 auxiliary flyback power supply.
 * Source placement and connectivity were extracted from TI's native Altium sheet (TIDRLL5).
 * @see https://www.ti.com/lit/pdf/TIDRLL5
 */
export const PMP11774_AuxiliaryPower = (props: SubcircuitProps) => (
  <subcircuit
    {...props}
    routingDisabled
    schMaxTraceDistance="100mm"
    schTraceAutoLabelEnabled={false}
  >
    <schematictext
      text="PMP11774 auxiliary flyback power supply"
      schX={0}
      schY={9.313}
      fontSize={0.7}
    />
    <testpoint
      name="TP1"
      schX={14.375}
      schY={5.313}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <capacitor
      name="C2"
      schX={7.375}
      schY={3.813}
      capacitance="10uF"
      footprint="1210"
      schOrientation="vertical"
    />
    <diode
      name="D1"
      schX={3.75}
      schY={5.313}
      manufacturerPartNumber="STPS1150A"
      footprint="sma"
      variant="schottky"
      schOrientation="horizontal"
    />
    <capacitor
      name="C1"
      schX={6.125}
      schY={3.813}
      capacitance="150uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <diode
      name="D4"
      schX={-13.25}
      schY={-2.312}
      manufacturerPartNumber="BAV20WS-TP"
      footprint="sod-323"
      variant="standard"
      schOrientation="horizontal"
    />
    <resistor
      name="R13"
      schX={0.125}
      schY={-4.312}
      resistance="1.38k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C9"
      schX={-8.875}
      schY={-3.437}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R15"
      schX={-7.125}
      schY={-5.312}
      resistance="61.9k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R10"
      schX={-11.875}
      schY={-2.312}
      resistance="10ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <diode
      name="D3"
      schX={4.25}
      schY={1.688}
      manufacturerPartNumber="B160-13-F"
      footprint="sma"
      variant="schottky"
      schOrientation="horizontal"
    />
    <resistor
      name="R14"
      schX={-7.875}
      schY={-5.312}
      resistance="1ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
      doNotPlace
    />
    <chip
      name="J1"
      schX={15.375}
      schY={2.563}
      manufacturerPartNumber="1757255"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2", pin3: "3" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [3] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R1"
      schX={-1.375}
      schY={3.938}
      resistance="1ohm"
      footprint="1206"
      schOrientation="vertical"
      doNotPlace
    />
    <diode
      name="D2"
      schX={-1.125}
      schY={2.188}
      manufacturerPartNumber="DFLR1600-7"
      footprint="pinrow2_p2.54mm"
      variant="schottky"
      schOrientation="horizontal"
    />
    <capacitor
      name="C3"
      schX={-2.875}
      schY={3.813}
      capacitance="1pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R7"
      schX={-2.375}
      schY={2.188}
      resistance="1ohm"
      footprint="1206"
      schOrientation="horizontal"
      doNotPlace
    />
    <testpoint
      name="Neutral"
      schX={-15.375}
      schY={0.438}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <testpoint
      name="Line"
      schX={-15.375}
      schY={3.688}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <resistor
      name="R2"
      schX={-13.625}
      schY={3.688}
      resistance="10 ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C5"
      schX={-12.875}
      schY={2.063}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <testpoint
      name="TP2"
      schX={14.375}
      schY={1.688}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <testpoint
      name="GND.1"
      schX={6.875}
      schY={-0.687}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <capacitor
      name="C8"
      schX={11.125}
      schY={1.063}
      capacitance="10uF"
      footprint="1210"
      schOrientation="vertical"
    />
    <capacitor
      name="C7"
      schX={8.875}
      schY={1.063}
      capacitance="100uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C6"
      schX={7.375}
      schY={1.063}
      capacitance="330uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="J3"
      schX={5.5}
      schY={-2.937}
      manufacturerPartNumber="923345-05-C"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <capacitor
      name="C11"
      schX={0.875}
      schY={-4.187}
      capacitance="1pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
      doNotPlace
    />
    <capacitor
      name="C12"
      schX={-5.875}
      schY={-5.187}
      capacitance="1pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
      doNotPlace
    />
    <chip
      name="U1"
      schX={-2.375}
      schY={-3.062}
      manufacturerPartNumber="UCC28911DR"
      footprint="pinrow7_p2.54mm"
      pinLabels={{
        pin1: "GND",
        pin2: "GND",
        pin3: "GND",
        pin4: "IPK",
        pin5: "VS",
        pin6: "VDD",
        pin8: "DRAIN",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2, 3, 4] },
        rightSide: { direction: "top-to-bottom", pins: [8, 6, 5] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="J2"
      schX={-14.875}
      schY={1.938}
      manufacturerPartNumber="770W-X2/10"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin2: "Hot", pin1: "Neutral" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2, 1] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R9"
      schX={-10.875}
      schY={-0.312}
      resistance="1ohm"
      footprint="1206"
      schOrientation="horizontal"
      doNotPlace
    />
    <resistor
      name="R4"
      schX={-10.875}
      schY={2.938}
      resistance="10.0k"
      footprint="1206"
      schOrientation="horizontal"
    />
    <inductor
      name="L2"
      schX={-10.875}
      schY={0.438}
      inductance="1nH"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <inductor
      name="L1"
      schX={-10.875}
      schY={3.688}
      inductance="1mH"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <chip
      name="T1"
      schX={1.25}
      schY={3.313}
      manufacturerPartNumber="750315942_Rev01"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin3: "3",
        pin1: "1",
        pin6: "6",
        pin8: "8",
        pin4: "4",
        pin2: "2",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [8, 6] },
        rightSide: { direction: "top-to-bottom", pins: [4, 2, 1, 3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <capacitor
      name="C4"
      schX={-5.375}
      schY={2.063}
      capacitance="15uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R11"
      schX={-7.125}
      schY={-3.812}
      resistance="1ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R12"
      schX={-5.875}
      schY={-3.687}
      resistance="23.7k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R5"
      schX={3.125}
      schY={2.438}
      resistance="1ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R6"
      schX={4.875}
      schY={2.438}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R3"
      schX={10.5}
      schY={3.688}
      resistance="10k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R8"
      schX={12.375}
      schY={0.938}
      resistance="10k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R16"
      schX={5.25}
      schY={-4.937}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <chip
      name="D6"
      schX={-7.625}
      schY={1.938}
      manufacturerPartNumber="DF06M"
      footprint="pinrow4_p2.54mm"
      pinLabels={{ pin3: "_", pin1: "+", pin4: "_", pin2: "-" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [4] },
        rightSide: { direction: "top-to-bottom", pins: [3] },
        topSide: { direction: "left-to-right", pins: [1] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R17"
      schX={-5.875}
      schY={-2.687}
      resistance="0ohm"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R116"
      schX={-9.375}
      schY={-2.312}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <diode
      name="D5"
      schX={12.125}
      schY={4.438}
      manufacturerPartNumber="BZX84C20LT1G"
      footprint="sot23"
      variant="zener"
      schOrientation="vertical"
    />
    <diode
      name="D7"
      schX={14}
      schY={0.813}
      manufacturerPartNumber="BZX84C6V8LT1G"
      footprint="sot23"
      variant="zener"
      schOrientation="vertical"
    />
    <capacitor
      name="C10"
      schX={-10.125}
      schY={-3.437}
      capacitance="22uF"
      footprint="1210"
      schOrientation="vertical"
    />
    <trace from="TP1.pin1" to="R3.pin1" />
    <trace from="R3.pin1" to="C2.pin1" />
    <trace from="C2.pin1" to="C1.pin1" />
    <trace from="C1.pin1" to="D1.pin2" />
    <trace from="TP1.pin1" to="net.Vout_18" schDisplayLabel="Vout_18" />
    <trace from="C2.pin2" to="C1.pin2" />
    <trace from="C2.pin2" to="C6.pin2" />
    <trace from="C6.pin2" to="C7.pin2" />
    <trace from="C6.pin2" to="GND.1.pin1" />
    <trace from="C7.pin2" to="C8.pin2" />
    <trace from="C8.pin2" to="R8.pin2" />
    <trace from="C8.pin2" to="R3.pin2" />
    <trace from="C1.pin2" to="T1.pin3" />
    <trace from="C2.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="D1.pin1" to="T1.pin4" />
    <trace from="D1.pin1" to="net.Vsec" schDisplayLabel="Vsec" />
    <trace from="D4.pin2" to="R10.pin2" />
    <trace from="R13.pin1" to="C11.pin2" />
    <trace from="R13.pin2" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="C9.pin1" to="R116.pin1" />
    <trace from="R116.pin1" to="U1.pin1" />
    <trace from="C9.pin2" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="R15.pin1" to="R11.pin2" />
    <trace from="R15.pin1" to="R14.pin1" />
    <trace from="R15.pin1" to="C12.pin2" />
    <trace from="C12.pin2" to="R12.pin2" />
    <trace from="R15.pin2" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="R10.pin1" to="R116.pin2" />
    <trace from="R116.pin2" to="C10.pin1" />
    <trace from="D3.pin1" to="R5.pin2" />
    <trace from="R5.pin2" to="T1.pin1" />
    <trace from="D3.pin1" to="net.Vsec_5" schDisplayLabel="Vsec_5" />
    <trace from="D3.pin2" to="R6.pin2" />
    <trace from="D3.pin2" to="C6.pin1" />
    <trace from="C6.pin1" to="C7.pin1" />
    <trace from="C7.pin1" to="C8.pin1" />
    <trace from="C8.pin1" to="R8.pin1" />
    <trace from="R8.pin1" to="TP2.pin1" />
    <trace from="TP2.pin1" to="J1.pin1" />
    <trace from="D3.pin2" to="net.Vout_5" schDisplayLabel="Vout_5" />
    <trace from="R14.pin2" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="R1.pin1" to="C3.pin1" />
    <trace from="C3.pin1" to="R7.pin1" />
    <trace from="R1.pin2" to="C3.pin2" />
    <trace from="R1.pin2" to="T1.pin8" />
    <trace from="C3.pin2" to="C4.pin1" />
    <trace from="C4.pin1" to="D6.pin1" />
    <trace from="R1.pin2" to="net.Vbulk" schDisplayLabel="Vbulk" />
    <trace from="D2.pin1" to="T1.pin6" />
    <trace from="D2.pin1" to="U1.pin8" />
    <trace from="D2.pin2" to="R7.pin2" />
    <trace from="Neutral.pin1" to="J2.pin1" />
    <trace from="J2.pin1" to="C5.pin2" />
    <trace from="C5.pin2" to="L2.pin1" />
    <trace from="L2.pin1" to="R9.pin2" />
    <trace from="Line.pin1" to="R2.pin2" />
    <trace from="Line.pin1" to="J2.pin2" />
    <trace from="R2.pin1" to="C5.pin1" />
    <trace from="R2.pin1" to="L1.pin1" />
    <trace from="L1.pin1" to="R4.pin2" />
    <trace from="J3.pin1" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="J3.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="C11.pin1" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="C12.pin1" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="U1.pin5" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="R9.pin1" to="L2.pin2" />
    <trace from="L2.pin2" to="D6.pin3" />
    <trace from="R4.pin1" to="L1.pin2" />
    <trace from="R4.pin1" to="D6.pin4" />
    <trace from="T1.pin2" to="R5.pin1" />
    <trace from="R5.pin1" to="R6.pin1" />
    <trace from="C4.pin2" to="D6.pin2" />
    <trace from="C4.pin2" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="R11.pin1" to="net.Vsec" schDisplayLabel="Vsec" />
    <trace from="R12.pin1" to="R17.pin2" />
    <trace from="R16.pin1" to="net.GND" schDisplayLabel="GND" />
    <trace from="R16.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="R17.pin1" to="net.Vsec_5" schDisplayLabel="Vsec_5" />
    <trace from="C10.pin2" to="net.GND" schDisplayLabel="GND" />
  </subcircuit>
);

export default PMP11774_AuxiliaryPower;
