import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

type GroundProps = {
  net: "GND" | "_Vpri";
  connectsTo: string | string[];
  schX: number;
  schY: number;
  anchorSide?: "left" | "top" | "right" | "bottom";
};

const Ground = ({
  net,
  connectsTo,
  schX,
  schY,
  anchorSide = "top",
}: GroundProps) => (
  <netlabel
    net={net}
    connectsTo={connectsTo}
    schX={schX}
    schY={schY}
    anchorSide={anchorSide}
  />
);

/**
 * PMP11774 8 W auxiliary flyback power supply.
 * Values, reference designators, pin nets, and functional placement follow
 * TI's released PMP11774 Rev C schematic and BOM (TIDRLL5/TIDRLL6).
 * @see https://www.ti.com/lit/pdf/TIDRLL5
 * @see https://www.ti.com/lit/pdf/TIDRLL6
 */
export const PMP11774_AuxiliaryPower = (props: SubcircuitProps) => (
  <subcircuit
    {...props}
    routingDisabled
    schMaxTraceDistance="4mm"
    schTraceAutoLabelEnabled={false}
  >
    <net name="GND" isGroundNet />
    <net name="_Vpri" isGroundNet />
    <net name="Vbulk" isPowerNet />
    <net name="VDD" isPowerNet />
    <net name="DRAIN" />
    <net name="VS" />
    <net name="Vsec" />
    <net name="Vsec_5" />
    <net name="Vout_18" isPowerNet />
    <net name="Vout_5" isPowerNet />

    <schematictext
      text="PMP11774 auxiliary flyback power supply"
      schX={0}
      schY={8.8}
      fontSize={0.7}
    />

    {/* AC input, EMI filter, and bridge rectifier */}
    <chip
      name="J2"
      schX={-16.9}
      schY={2.7}
      manufacturerPartNumber="770W-X2/10"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin2: "2", pin1: "1" }}
      schPinArrangement={{
        rightSide: { direction: "top-to-bottom", pins: [2, 1] },
      }}
      schPinStyle={{ pin1: { marginTop: 0.7 } }}
      schWidth="2.2mm"
      schHeight="2.6mm"
    />
    <testpoint
      name="Line"
      schX={-14.8}
      schY={3.35}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <testpoint
      name="Neutral"
      schX={-14.4}
      schY={1.55}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <resistor
      name="R2"
      schX={-13.1}
      schY={3.35}
      resistance="10ohm"
      footprint="pinrow2_p2.54mm"
    />
    <capacitor
      name="C5"
      schX={-11.9}
      schY={2.45}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <inductor
      name="L1"
      schX={-10.3}
      schY={3.35}
      inductance="1mH"
      footprint="pinrow2_p2.54mm"
    />
    <resistor
      name="R4"
      schX={-10.3}
      schY={2.55}
      resistance="10k"
      footprint="1206"
    />
    <inductor
      name="L2"
      displayName="L2 (short)"
      schX={-10.3}
      schY={1.55}
      inductance="1nH"
      footprint="pinrow2_p2.54mm"
    />
    <resistor
      name="R9"
      displayName="R9 (DNP)"
      schX={-10.3}
      schY={0.75}
      resistance="10k"
      footprint="1206"
      doNotPlace
    />
    <chip
      name="D6"
      schX={-8.2}
      schY={2.45}
      manufacturerPartNumber="DF06M"
      footprint="pinrow4_p2.54mm"
      pinLabels={{ pin1: "+", pin2: "-", pin3: "~", pin4: "~" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [4] },
        rightSide: { direction: "top-to-bottom", pins: [3] },
        topSide: { direction: "left-to-right", pins: [1] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
      schWidth="1.8mm"
      schHeight="2.2mm"
    />
    <capacitor
      name="C4"
      schX={-5.3}
      schY={2.45}
      capacitance="15uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />

    <trace from="J2.pin2" to="Line.pin1" />
    <trace from="Line.pin1" to="R2.pin1" />
    <trace from="J2.pin1" to="Neutral.pin1" />
    <trace path={["R2.pin2", "C5.pin1", "L1.pin1", "R4.pin1"]} />
    <trace path={["L1.pin2", "R4.pin2", "D6.pin4"]} />
    <trace path={["Neutral.pin1", "C5.pin2", "L2.pin1", "R9.pin1"]} />
    <trace path={["L2.pin2", "R9.pin2", "D6.pin3"]} />
    <netlabel
      net="Vbulk"
      connectsTo={["D6.pin1", "C4.pin1"]}
      schX={-6.7}
      schY={3.9}
      anchorSide="bottom"
    />
    <Ground
      net="_Vpri"
      connectsTo={["D6.pin2", "C4.pin2"]}
      schX={-6.7}
      schY={0.85}
    />

    {/* Primary winding, clamp network, and transformer */}
    <capacitor
      name="C3"
      displayName="C3 (DNP)"
      schX={-4.1}
      schY={4.15}
      capacitance="1000pF"
      footprint="0805"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R1"
      displayName="R1 (DNP)"
      schX={-3}
      schY={4.15}
      resistance="120k"
      footprint="1206"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R7"
      displayName="R7 (DNP)"
      schX={-3.55}
      schY={2.75}
      resistance="10ohm"
      footprint="1206"
      schRotation={180}
      doNotPlace
    />
    <diode
      name="D2"
      displayName="D2 (DNP)"
      schX={-2.15}
      schY={2.75}
      manufacturerPartNumber="DFLR1600-7"
      footprint="pinrow2_p2.54mm"
      variant="standard"
      schRotation={180}
      doNotPlace
    />
    <chip
      name="T1"
      schX={0}
      schY={3.65}
      manufacturerPartNumber="750315942_Rev01"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin8: "8",
        pin6: "6",
        pin4: "4",
        pin2: "2",
        pin1: "1",
        pin3: "3",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [8, 6] },
        rightSide: { direction: "top-to-bottom", pins: [4, 2, 1, 3] },
      }}
      schPinStyle={{
        pin6: { marginTop: 1.2 },
        pin2: { marginTop: 0.25 },
        pin1: { marginTop: 0.35 },
        pin3: { marginTop: 0.25 },
      }}
      schWidth="2.5mm"
      schHeight="4.6mm"
    />

    <netlabel
      net="Vbulk"
      connectsTo={["C3.pin2", "R1.pin1", "T1.pin8"]}
      schX={-2.8}
      schY={5.1}
      anchorSide="bottom"
    />
    <trace path={["C3.pin1", "R1.pin2", "R7.pin2"]} />
    <trace from="R7.pin1" to="D2.pin2" />
    <netlabel
      net="DRAIN"
      connectsTo={["D2.pin1", "T1.pin6"]}
      schX={-1.15}
      schY={2.75}
      anchorSide="left"
    />

    {/* 18 V and 5 V rectifier/output networks */}
    <diode
      name="D1"
      schX={2.25}
      schY={5.55}
      manufacturerPartNumber="STPS1150A"
      footprint="sma"
      variant="schottky"
    />
    <capacitor
      name="C1"
      schX={5.2}
      schY={4.55}
      capacitance="150uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      schX={6.7}
      schY={4.55}
      capacitance="10uF"
      footprint="1210"
      schOrientation="vertical"
    />
    <resistor
      name="R3"
      schX={10}
      schY={4.55}
      resistance="10k"
      footprint="0805"
      schOrientation="vertical"
    />
    <diode
      name="D5"
      schX={11.7}
      schY={4.55}
      manufacturerPartNumber="BZX84C20LT1G"
      footprint="sot23"
      variant="zener"
      schOrientation="vertical"
    />
    <testpoint
      name="TP1"
      schX={14.2}
      schY={5.55}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />

    <resistor
      name="R5"
      displayName="R5 (DNP)"
      schX={1.75}
      schY={2.55}
      resistance="0ohm"
      footprint="0805"
      schOrientation="vertical"
      doNotPlace
    />
    <diode
      name="D3"
      schX={3.1}
      schY={1.75}
      manufacturerPartNumber="B160-13-F"
      footprint="sma"
      variant="schottky"
    />
    <resistor
      name="R6"
      schX={4.45}
      schY={2.55}
      resistance="0ohm"
      footprint="0805"
      schOrientation="vertical"
    />
    <capacitor
      name="C6"
      schX={6.2}
      schY={0.75}
      capacitance="330uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C7"
      schX={7.7}
      schY={0.75}
      capacitance="100uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C8"
      schX={9.2}
      schY={0.75}
      capacitance="10uF"
      footprint="1210"
      schOrientation="vertical"
    />
    <resistor
      name="R8"
      schX={10.7}
      schY={0.75}
      resistance="10k"
      footprint="0805"
      schOrientation="vertical"
    />
    <diode
      name="D7"
      schX={12.2}
      schY={0.75}
      manufacturerPartNumber="BZX84C6V8LT1G"
      footprint="sot23"
      variant="zener"
      schOrientation="vertical"
    />
    <testpoint
      name="TP2"
      schX={14.2}
      schY={1.75}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <testpoint
      name="GND1"
      displayName="GND.1"
      schX={7}
      schY={-0.65}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <chip
      name="J1"
      schX={16}
      schY={3.65}
      manufacturerPartNumber="1757255"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin3: "18V", pin2: "GND", pin1: "5V" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [3, 2, 1] },
      }}
      schPinStyle={{
        pin2: { marginTop: 0.75 },
        pin1: { marginTop: 0.75 },
      }}
      schWidth="2.2mm"
      schHeight="4.2mm"
    />

    <trace from="T1.pin4" to="D1.pin1" />
    <netlabel
      net="Vsec"
      connectsTo="T1.pin4"
      schX={1.4}
      schY={6.1}
      anchorSide="bottom"
    />
    <trace
      path={[
        "D1.pin2",
        "C1.pin1",
        "C2.pin1",
        "R3.pin2",
        "D5.pin1",
        "TP1.pin1",
        "J1.pin3",
      ]}
    />
    <netlabel
      net="Vout_18"
      connectsTo="TP1.pin1"
      schX={13.6}
      schY={5.95}
      anchorSide="bottom"
    />
    <trace path={["C1.pin2", "C2.pin2", "R3.pin1", "D5.pin2", "J1.pin2"]} />
    <Ground net="GND" connectsTo="C1.pin2" schX={8.35} schY={3.25} />

    <trace path={["T1.pin2", "R5.pin2", "R6.pin2"]} />
    <trace path={["T1.pin1", "R5.pin1", "D3.pin1"]} />
    <netlabel
      net="Vsec_5"
      connectsTo="T1.pin1"
      schX={2.1}
      schY={2.55}
      anchorSide="bottom"
    />
    <trace
      path={[
        "D3.pin2",
        "R6.pin1",
        "C6.pin1",
        "C7.pin1",
        "C8.pin1",
        "R8.pin2",
        "D7.pin1",
        "TP2.pin1",
        "J1.pin1",
      ]}
    />
    <netlabel
      net="Vout_5"
      connectsTo="TP2.pin1"
      schX={13.6}
      schY={2.15}
      anchorSide="bottom"
    />
    <trace
      path={["T1.pin3", "C6.pin2", "C7.pin2", "C8.pin2", "R8.pin1", "D7.pin2"]}
    />
    <Ground net="GND" connectsTo="D7.pin2" schX={12.2} schY={-0.55} />
    <trace from="GND1.pin1" to="net.GND" schDisplayLabel="GND" />

    {/* UCC28911 bias, regulation divider, and current-limit network */}
    <diode
      name="D4"
      schX={-13.2}
      schY={-2.4}
      manufacturerPartNumber="BAV20WS-TP"
      footprint="sod-323"
      variant="standard"
    />
    <resistor
      name="R10"
      schX={-11.7}
      schY={-2.4}
      resistance="10ohm"
      footprint="0603"
    />
    <capacitor
      name="C10"
      schX={-10.4}
      schY={-3.55}
      capacitance="22uF"
      footprint="1210"
      schOrientation="vertical"
    />
    <resistor
      name="R116"
      schX={-9}
      schY={-2.4}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
    />
    <capacitor
      name="C9"
      schX={-7.65}
      schY={-3.55}
      capacitance="0.1uF"
      footprint="0603"
      schOrientation="vertical"
    />
    <resistor
      name="R17"
      schX={-5.8}
      schY={-2.9}
      resistance="0ohm"
      footprint="1206"
      schOrientation="vertical"
    />
    <resistor
      name="R12"
      schX={-4.45}
      schY={-3.8}
      resistance="23.7k"
      footprint="0603"
      schOrientation="vertical"
    />
    <resistor
      name="R11"
      displayName="R11 (DNP)"
      schX={-6.15}
      schY={-4.55}
      resistance="110k"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R14"
      displayName="R14 (DNP)"
      schX={-5.75}
      schY={-5.9}
      resistance="91k"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
    />
    <resistor
      name="R15"
      schX={-4.45}
      schY={-5.9}
      resistance="61.9k"
      footprint="0603"
      schOrientation="vertical"
    />
    <capacitor
      name="C12"
      displayName="C12 (DNP)"
      schX={-3.15}
      schY={-5.9}
      capacitance="10pF"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
    />
    <chip
      name="U1"
      schX={0}
      schY={-3.95}
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
        leftSide: { direction: "top-to-bottom", pins: [6, 5] },
        rightSide: { direction: "top-to-bottom", pins: [8, 4, 1, 2, 3] },
      }}
      schPinStyle={{
        pin5: { marginTop: 0.8 },
        pin4: { marginTop: 0.65 },
        pin1: { marginTop: 0.6 },
      }}
      schWidth="3.4mm"
      schHeight="4.2mm"
    />
    <resistor
      name="R13"
      schX={2.6}
      schY={-5}
      resistance="1.38k"
      footprint="0603"
      schOrientation="vertical"
    />
    <capacitor
      name="C11"
      displayName="C11 (DNP)"
      schX={3.75}
      schY={-5}
      capacitance="10pF"
      footprint="0603"
      schOrientation="vertical"
      doNotPlace
    />

    <netlabel
      net="Vsec"
      connectsTo={["D4.pin1", "R11.pin2"]}
      schX={-14.15}
      schY={-2.4}
      anchorSide="right"
    />
    <trace path={["D4.pin2", "R10.pin1"]} />
    <trace path={["R10.pin2", "C10.pin1", "R116.pin1"]} />
    <trace path={["R116.pin2", "C9.pin1"]} />
    <Ground net="GND" connectsTo="C10.pin2" schX={-10.4} schY={-4.6} />
    <Ground net="_Vpri" connectsTo="C9.pin2" schX={-7.65} schY={-4.6} />
    <netlabel
      net="VDD"
      connectsTo={["C9.pin1", "R17.pin1", "R12.pin2", "U1.pin6"]}
      schX={-2.3}
      schY={-1.9}
      anchorSide="bottom"
    />
    <netlabel
      net="Vsec_5"
      connectsTo="R17.pin2"
      schX={-5.8}
      schY={-1.9}
      anchorSide="bottom"
    />
    <netlabel
      net="Vsec"
      connectsTo="R11.pin2"
      schX={-6.15}
      schY={-3.55}
      anchorSide="bottom"
    />
    <trace
      path={["R11.pin1", "R12.pin1", "R14.pin2", "R15.pin2", "C12.pin2"]}
    />
    <netlabel
      net="VS"
      connectsTo={["R12.pin1", "U1.pin5"]}
      schX={-2.45}
      schY={-3.9}
      anchorSide="bottom"
    />
    <Ground
      net="_Vpri"
      connectsTo={["R14.pin1", "R15.pin1", "C12.pin1"]}
      schX={-4.45}
      schY={-6.75}
    />
    <netlabel
      net="DRAIN"
      connectsTo="U1.pin8"
      schX={2.55}
      schY={-2.3}
      anchorSide="bottom"
    />
    <trace path={["U1.pin4", "R13.pin2", "C11.pin2"]} />
    <trace path={["U1.pin1", "U1.pin2", "U1.pin3"]} />
    <Ground net="_Vpri" connectsTo="U1.pin3" schX={2.05} schY={-6} />
    <Ground
      net="_Vpri"
      connectsTo={["R13.pin1", "C11.pin1"]}
      schX={3.2}
      schY={-6.05}
    />

    {/* Optional return-to-return links from the released design */}
    <chip
      name="J3"
      schX={7.2}
      schY={-3.7}
      manufacturerPartNumber="923345-05-C"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "VPRI", pin2: "GND" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [2] },
      }}
      schWidth="2.2mm"
      schHeight="1.5mm"
    />
    <resistor
      name="R16"
      schX={7.2}
      schY={-5.65}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
    />
    <trace from="J3.pin1" to="net._Vpri" schDisplayLabel="-Vpri" />
    <trace from="J3.pin2" to="net.GND" schDisplayLabel="GND" />
    <trace from="R16.pin1" to="net.GND" schDisplayLabel="GND" />
    <trace from="R16.pin2" to="net.GND" schDisplayLabel="GND" />
  </subcircuit>
);

export default PMP11774_AuxiliaryPower;
