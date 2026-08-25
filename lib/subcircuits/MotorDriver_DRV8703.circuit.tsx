import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { DRV8703QRHBRQ1 } from "../chips/DRV8703QRHBRQ1.circuit.tsx";

type NetTieProps = { name: string; schX: number; schY: number };

const NetTie = ({ name, schX, schY }: NetTieProps) => (
  <chip
    name={name}
    schX={schX}
    schY={schY}
    footprint="kicad:NetTie/NetTie-2_SMD_Pad0.5mm"
    pinLabels={{ pin1: "A", pin2: "B" }}
    internallyConnectedPins={[[1, 2]]}
    symbol={
      <symbol>
        <schematictext
          text="{NAME}"
          schX={-0.28}
          schY={0.27}
          fontSize={0.12}
          anchor="left"
        />
        <schematictext
          text="Net-Tie"
          schX={0}
          schY={-0.28}
          fontSize={0.1}
          anchor="center"
        />
        <schematicrect
          schX={0}
          schY={0}
          width={0.48}
          height={0.3}
          strokeWidth={0.025}
          color="#c77700"
        />
        <port
          name="pin1"
          schX={-0.4}
          schY={0}
          direction="left"
          schStemLength={0.16}
          pinNumber={1}
        />
        <port
          name="pin2"
          schX={0.4}
          schY={0}
          direction="right"
          schStemLength={0.16}
          pinNumber={2}
        />
      </symbol>
    }
  />
);

/**
 * DRV8703-Q1 gate-driver section extracted from TI reference design
 * TIDA-01389. Its SQJ940EP power stage is a separate HBridge_SQJ940EP
 * subcircuit.
 *
 * Reference: https://www.ti.com/tool/TIDA-01389
 */
export const MotorDriver_DRV8703 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schMaxTraceDistance="4mm" {...props}>
    <net name="GND" isGroundNet />

    <schematicbox
      name="DRV8703_SECTION"
      schX={-4.295363}
      schY={0}
      width={10.235757}
      height={7.676818}
    />
    <schematictext
      schX={-4.295363}
      schY={-4.35}
      text="DRV8703-Q1"
      fontSize={0.3}
    />

    <DRV8703QRHBRQ1
      name="U1"
      schX={-3.198674}
      schY={-0.5}
      schHeight="5.3mm"
      noConnect={["nWDFLT", "NC"]}
    />

    <capacitor
      name="C8"
      capacitance="10uF"
      footprint="1206"
      manufacturerPartNumber="C3216X5R1H106K160AB"
      schX={-8.316553}
      schY={1.37086}
      schOrientation="vertical"
    />
    <capacitor
      name="C7"
      capacitance="0.1uF"
      footprint="0402"
      manufacturerPartNumber="GRM155R61H104ME14D"
      schX={-7.585427}
      schY={1.37086}
      schOrientation="vertical"
    />
    <capacitor
      name="C5"
      capacitance="1uF"
      footprint="0402"
      manufacturerPartNumber="C1005X5R1C105K050BC"
      schX={-6.305958}
      schY={1.37086}
      schOrientation="vertical"
    />
    <NetTie name="NT1" schX={-5.209269} schY={0.95} />
    <capacitor
      name="C10"
      capacitance="1uF"
      footprint="0402"
      manufacturerPartNumber="GRM155R70J105MA12D"
      schX={-6.488739}
      schY={2.15}
      schOrientation="vertical"
    />
    <capacitor
      name="C9"
      capacitance="1uF"
      footprint="0402"
      manufacturerPartNumber="GRM155R70J105MA12D"
      schX={-5.757613}
      schY={2.15}
      schOrientation="vertical"
    />
    <capacitor
      name="C6"
      capacitance="0.1uF"
      footprint="0402"
      manufacturerPartNumber="GCM155R71H104KE02D"
      schX={-5.392051}
      schY={0}
    />
    <resistor
      name="R8"
      resistance="10kohm"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0JNED"
      schX={-0.274172}
      schY={-1.2}
      schOrientation="vertical"
    />

    <trace from="U1.AVDD" to="C10.pin2" />
    <trace from="U1.DVDD" to="C9.pin2" />
    <trace from="C10.pin1" to="C9.pin1" />
    <netlabel
      net="GND"
      connectsTo="C10.pin1"
      schX={-6.12}
      schY={2.9}
      anchorSide="top"
    />

    <trace from="U1.PVDD" to="C5.pin1" />
    <trace from="C5.pin1" to="C7.pin1" />
    <trace from="C7.pin1" to="C8.pin1" />
    <netlabel net="PVDD" connectsTo="C8.pin1" anchorSide="right" />
    <trace from="C7.pin2" to="C8.pin2" />
    <netlabel net="GND" connectsTo="C7.pin2" anchorSide="top" />
    <trace from="C5.pin2" to="U1.VCP" />
    <netlabel net="VCP" connectsTo="C5.pin2" anchorSide="right" />
    <trace from="C5.pin1" to="NT1.pin1" />
    <trace from="NT1.pin2" to="U1.VDRAIN" />

    <trace from="C6.pin1" to="U1.CPL" />
    <trace from="C6.pin2" to="U1.CPH" />
    <trace from="U1.nFAULT" to="R8.pin2" />
    <netlabel
      net="nFAULT"
      connectsTo="R8.pin2"
      schX={0.55}
      schY={-1.5}
      anchorSide="left"
    />
    <netlabel net="VCC" connectsTo="R8.pin1" anchorSide="top" />
    <netlabel
      net="VCC"
      connectsTo="U1.VREF"
      schX={-1.1}
      schY={-1.3}
      anchorSide="left"
    />

    <trace from="U1.GND_1" to="U1.GND_2" />
    <trace from="U1.GND_2" to="U1.GND_3" />
    <trace from="U1.GND_3" to="U1.PAD" />
    <netlabel net="GND" connectsTo="U1.PAD" anchorSide="top" />
    <netlabel
      net="GND"
      connectsTo="U1.MODE"
      schX={-5.25}
      schY={-1}
      anchorSide="right"
    />

    <netlabel
      net="IN1_PH"
      connectsTo="U1.IN1_PH"
      schX={-5.35}
      schY={-0.4}
      anchorSide="right"
    />
    <netlabel
      net="IN2_EN"
      connectsTo="U1.IN2_EN"
      schX={-5.35}
      schY={-0.6}
      anchorSide="right"
    />
    <netlabel
      net="nSLEEP"
      connectsTo="U1.nSLEEP"
      schX={-5.35}
      schY={-0.8}
      anchorSide="right"
    />
    <netlabel
      net="SCLK"
      connectsTo="U1.SCLK"
      schX={-5.35}
      schY={-1.4}
      anchorSide="right"
    />
    <netlabel
      net="SDI"
      connectsTo="U1.SDI"
      schX={-5.35}
      schY={-1.6}
      anchorSide="right"
    />
    <netlabel
      net="SDO"
      connectsTo="U1.SDO"
      schX={-5.35}
      schY={-1.8}
      anchorSide="right"
    />
    <netlabel
      net="nSCS"
      connectsTo="U1.nSCS"
      schX={-5.35}
      schY={-2}
      anchorSide="right"
    />

    <netlabel
      net="GH1"
      connectsTo="U1.GH1"
      schX={-1.1}
      schY={0.7}
      anchorSide="left"
    />
    <netlabel
      net="SH1"
      connectsTo="U1.SH1"
      schX={-1.1}
      schY={0.5}
      anchorSide="left"
    />
    <netlabel
      net="GL1"
      connectsTo="U1.GL1"
      schX={-1.1}
      schY={0.3}
      anchorSide="left"
    />
    <netlabel
      net="GH2"
      connectsTo="U1.GH2"
      schX={-1.1}
      schY={0.1}
      anchorSide="left"
    />
    <netlabel
      net="SH2"
      connectsTo="U1.SH2"
      schX={-1.1}
      schY={-0.1}
      anchorSide="left"
    />
    <netlabel
      net="GL2"
      connectsTo="U1.GL2"
      schX={-1.1}
      schY={-0.3}
      anchorSide="left"
    />
    <netlabel
      net="SL2"
      connectsTo="U1.SL2"
      schX={-1.1}
      schY={-0.5}
      anchorSide="left"
    />
    <netlabel
      net="SP"
      connectsTo="U1.SP"
      schX={-1.1}
      schY={-0.7}
      anchorSide="left"
    />
    <netlabel
      net="SN"
      connectsTo="U1.SN"
      schX={-1.1}
      schY={-0.9}
      anchorSide="left"
    />
    <netlabel
      net="SO"
      connectsTo="U1.SO"
      schX={-1.1}
      schY={-1.1}
      anchorSide="left"
    />

    <port name="PVDD" direction="left" connectsTo="net.PVDD" />
    <port name="VCC" direction="left" connectsTo="net.VCC" />
    <port name="VCP" direction="left" connectsTo="net.VCP" />
    <port name="IN1_PH" direction="left" connectsTo="net.IN1_PH" />
    <port name="IN2_EN" direction="left" connectsTo="net.IN2_EN" />
    <port name="nSLEEP" direction="left" connectsTo="net.nSLEEP" />
    <port name="SCLK" direction="left" connectsTo="net.SCLK" />
    <port name="SDI" direction="left" connectsTo="net.SDI" />
    <port name="SDO" direction="left" connectsTo="net.SDO" />
    <port name="nSCS" direction="left" connectsTo="net.nSCS" />
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

export default MotorDriver_DRV8703;
