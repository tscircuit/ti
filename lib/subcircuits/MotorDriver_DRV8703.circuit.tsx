import type { ChipProps, SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { DRV8703QRHBRQ1 } from "../chips/DRV8703QRHBRQ1.circuit.tsx";

const dualMosfetPinLabels = {
  pin1: "S1",
  pin2: "G1",
  pin3: "S2",
  pin4: "G2",
  pin5: "D2",
  pin6: "D1",
} as const;

const SQJ940EP = (props: ChipProps<typeof dualMosfetPinLabels>) => (
  <chip
    manufacturerPartNumber="SQJ940EP-T1-GE3"
    datasheetUrl="https://www.vishay.com/docs/62767/sqj940ep.pdf"
    footprint="kicad:Package_SO/PowerPAK_SO-8_Dual"
    pinLabels={dualMosfetPinLabels}
    schWidth="0.9mm"
    schHeight="2.376158mm"
    {...props}
  />
);

type NetTieProps = {
  name: string;
  schX: number;
  schY: number;
  a: string;
  b: string;
};

const NetTie = ({ name, schX, schY, a, b }: NetTieProps) => (
  <chip
    name={name}
    displayName="Net-Tie"
    footprint="kicad:NetTie/NetTie-2_SMD_Pad0.5mm"
    pinLabels={{ pin1: "A", pin2: "B" }}
    internallyConnectedPins={[[1, 2]]}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: [1] },
      rightSide: { direction: "top-to-bottom", pins: [2] },
    }}
    schWidth="0.4mm"
    schHeight="0.4mm"
    schX={schX}
    schY={schY}
    connections={{ pin1: a, pin2: b }}
  />
);

/**
 * DRV8703-Q1 brushed-DC motor driver and dual-MOSFET H-bridge extracted from
 * TI reference design TIDA-01389.
 *
 * Component centers preserve the normalized coordinates converted from TI's
 * native TIDA-01389_Sch.SchDoc. Inputs/outputs, Hall encoder, 3.3 V LDO, and
 * reverse-protection/EMC sections are intentionally excluded.
 *
 * Reference: https://www.ti.com/tool/TIDA-01389
 */
export const MotorDriver_DRV8703 = (props: SubcircuitProps) => (
  <subcircuit
    routingDisabled
    schMaxTraceDistance="4.5mm"
    schTraceAutoLabelEnabled
    {...props}
  >
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
      schY={-4.18}
      text="DRV8703-Q1"
      fontSize={0.36}
    />
    <schematicbox
      name="HBRIDGE_SECTION"
      schX={5.392051}
      schY={0}
      width={8.042381}
      height={7.676818}
    />
    <schematictext
      schX={5.392051}
      schY={-4.18}
      text="H-BRIDGE"
      fontSize={0.36}
    />

    <DRV8703QRHBRQ1
      name="U1"
      schX={-3.198674}
      schY={-0.182781}
      noConnect={["nWDFLT", "NC"]}
      connections={{
        GND_1: "net.GND",
        GND_2: "net.GND",
        GND_3: "net.GND",
        PAD: "net.GND",
        MODE: "net.GND",
        IN1_PH: "net.IN1_PH",
        IN2_EN: "net.IN2_EN",
        SDO: "net.SDO",
        nSCS: "net.nSCS",
        SDI: "net.SDI",
        SCLK: "net.SCLK",
        nSLEEP: "net.nSLEEP",
        nFAULT: "net.nFAULT",
        DVDD: "net.DVDD",
        AVDD: "net.AVDD",
        VREF: "net.VCC",
        SO: "net.SO",
        GH1: "net.GH1",
        SH1: "net.SH1",
        GL1: "net.GL1",
        SP: "net.SP",
        SN: "net.SN",
        SL2: "net.SL2",
        GL2: "net.GL2",
        SH2: "net.SH2",
        GH2: "net.GH2",
        VDRAIN: "net.VDRAIN",
        PVDD: "net.PVDD",
        VCP: "net.VCP",
        CPH: "net.CPH",
        CPL: "net.CPL",
      }}
    />

    <capacitor
      name="C8"
      capacitance="10uF"
      footprint="1206"
      manufacturerPartNumber="C3216X5R1H106K160AB"
      schX={-8.316553}
      schY={1.37086}
      schOrientation="vertical"
      connections={{ pin1: "net.PVDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C7"
      capacitance="0.1uF"
      footprint="0402"
      manufacturerPartNumber="GRM155R61H104ME14D"
      schX={-7.585427}
      schY={1.37086}
      schOrientation="vertical"
      connections={{ pin1: "net.PVDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="1uF"
      footprint="0402"
      manufacturerPartNumber="C1005X5R1C105K050BC"
      schX={-6.305958}
      schY={1.37086}
      schOrientation="vertical"
      connections={{ pin1: "net.PVDD", pin2: "net.VCP" }}
    />
    <NetTie
      name="NT1"
      schX={-5.209269}
      schY={1.27947}
      a="net.PVDD"
      b="net.VDRAIN"
    />
    <capacitor
      name="C10"
      capacitance="1uF"
      footprint="0402"
      manufacturerPartNumber="GRM155R70J105MA12D"
      schX={-6.488739}
      schY={2.65033}
      schOrientation="vertical"
      connections={{ pin1: "net.AVDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C9"
      capacitance="1uF"
      footprint="0402"
      manufacturerPartNumber="GRM155R70J105MA12D"
      schX={-5.757613}
      schY={2.65033}
      schOrientation="vertical"
      connections={{ pin1: "net.DVDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      capacitance="0.1uF"
      footprint="0402"
      manufacturerPartNumber="GCM155R71H104KE02D"
      schX={-5.392051}
      schY={0.274172}
      connections={{ pin1: "net.CPL", pin2: "net.CPH" }}
    />
    <resistor
      name="R8"
      resistance="10kohm"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0JNED"
      schX={-0.274172}
      schY={-1.27947}
      schOrientation="vertical"
      connections={{ pin1: "net.nFAULT", pin2: "net.VCC" }}
    />

    {/* Tscircuit does not yet have multi-unit package symbols. Keep one hidden
        physical chip per BOM item and show each MOSFET unit at its native
        Altium symbol center. */}
    <SQJ940EP
      name="Q1"
      noSchematicRepresentation
      connections={{
        S1: "net.HSRC",
        G1: "net.Q1G1",
        S2: "net.HB1",
        G2: "net.Q1G2",
        D2: "net.PVDD",
        D1: "net.HB1",
      }}
    />
    <SQJ940EP
      name="Q2"
      noSchematicRepresentation
      connections={{
        S1: "net.HB2",
        G1: "net.Q2G1",
        S2: "net.HSRC",
        G2: "net.Q2G2",
        D2: "net.HB2",
        D1: "net.PVDD",
      }}
    />
    <mosfet
      name="Q1B"
      displayName="Q1"
      channelType="n"
      mosfetMode="enhancement"
      schX={4.048608}
      schY={1.645032}
      symbolGateSide="left"
      symbolDrainSide="top"
      symbolSourceSide="bottom"
      connections={{
        gate: "net.Q1G2",
        drain: "net.PVDD",
        source: "net.HB1",
      }}
    />
    <mosfet
      name="Q1A"
      displayName="Q1"
      channelType="n"
      mosfetMode="enhancement"
      schX={4.048608}
      schY={-0.731126}
      symbolGateSide="left"
      symbolDrainSide="top"
      symbolSourceSide="bottom"
      connections={{
        gate: "net.Q1G1",
        drain: "net.HB1",
        source: "net.HSRC",
      }}
    />
    <mosfet
      name="Q2A"
      displayName="Q2"
      channelType="n"
      mosfetMode="enhancement"
      schX={6.735494}
      schY={1.645032}
      symbolGateSide="left"
      symbolDrainSide="top"
      symbolSourceSide="bottom"
      connections={{
        gate: "net.Q2G1",
        drain: "net.PVDD",
        source: "net.HB2",
      }}
    />
    <mosfet
      name="Q2B"
      displayName="Q2"
      channelType="n"
      mosfetMode="enhancement"
      schX={6.735494}
      schY={-0.731126}
      symbolGateSide="left"
      symbolDrainSide="top"
      symbolSourceSide="bottom"
      connections={{
        gate: "net.Q2G2",
        drain: "net.HB2",
        source: "net.HSRC",
      }}
    />

    <resistor
      name="R2"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={2.65033}
      schY={1.645032}
      connections={{ pin1: "net.Q1G2", pin2: "net.GH1" }}
    />
    <resistor
      name="R3"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={2.65033}
      schY={-0.731126}
      connections={{ pin1: "net.Q1G1", pin2: "net.GL1" }}
    />
    <resistor
      name="R5"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={7.95099}
      schY={1.645032}
      connections={{ pin1: "net.GH2", pin2: "net.Q2G1" }}
    />
    <resistor
      name="R4"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={7.95099}
      schY={-0.731126}
      connections={{ pin1: "net.GL2", pin2: "net.Q2G2" }}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0805"
      manufacturerPartNumber="GRM21BR71H105KA12L"
      schX={4.478144}
      schY={3.198674}
      schOrientation="vertical"
      connections={{ pin1: "net.PVDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C17"
      capacitance="0.1uF"
      footprint="0402"
      manufacturerPartNumber="GCM155R71C104KA55D"
      doNotPlace
      schX={5.30066}
      schY={0.913907}
      connections={{ pin1: "net.HB1", pin2: "net.HB2" }}
    />
    <capacitor
      name="C18"
      capacitance="1000pF"
      footprint="0402"
      manufacturerPartNumber="GRM155R71C102KA01D"
      doNotPlace
      schX={5.30066}
      schY={0}
      connections={{ pin1: "net.HB1", pin2: "net.HB2" }}
    />

    <NetTie
      name="NT2"
      schX={3.015893}
      schY={0.182781}
      a="net.SH1"
      b="net.HB1"
    />
    <NetTie
      name="NT3"
      schX={7.768209}
      schY={0.182781}
      a="net.HB2"
      b="net.SH2"
    />
    <NetTie
      name="NT4"
      schX={7.768209}
      schY={-1.462251}
      a="net.HSRC"
      b="net.SL2"
    />
    <NetTie
      name="NT5"
      schX={6.123176}
      schY={-1.827814}
      a="net.HSRC"
      b="net.SP"
    />
    <NetTie
      name="NT6"
      schX={6.123176}
      schY={-2.924502}
      a="net.GND"
      b="net.SN"
    />
    <resistor
      name="R1"
      resistance="0.04ohm"
      footprint="2010"
      manufacturerPartNumber="CSRN2010FK40L0"
      schX={5.392051}
      schY={-2.376158}
      schOrientation="vertical"
      connections={{ pin1: "net.GND", pin2: "net.HSRC" }}
    />
    <capacitor
      name="C16"
      capacitance="1000pF"
      footprint="0402"
      manufacturerPartNumber="GRM155R71C102KA01D"
      schX={6.67152}
      schY={-2.284767}
      schOrientation="vertical"
      connections={{ pin1: "net.SP", pin2: "net.SN" }}
    />

    <port
      name="PVDD"
      direction="left"
      schX={-10.4}
      schY={2.6}
      connectsTo="net.PVDD"
    />
    <port
      name="VCC"
      direction="left"
      schX={-10.4}
      schY={1.9}
      connectsTo="net.VCC"
    />
    <port
      name="VCP"
      direction="left"
      schX={-10.4}
      schY={1.2}
      connectsTo="net.VCP"
    />
    <port
      name="IN1_PH"
      direction="left"
      schX={-10.4}
      schY={0.4}
      connectsTo="net.IN1_PH"
    />
    <port
      name="IN2_EN"
      direction="left"
      schX={-10.4}
      schY={-0.2}
      connectsTo="net.IN2_EN"
    />
    <port
      name="nSLEEP"
      direction="left"
      schX={-10.4}
      schY={-0.8}
      connectsTo="net.nSLEEP"
    />
    <port
      name="SCLK"
      direction="left"
      schX={-10.4}
      schY={-1.4}
      connectsTo="net.SCLK"
    />
    <port
      name="SDI"
      direction="left"
      schX={-10.4}
      schY={-2}
      connectsTo="net.SDI"
    />
    <port
      name="SDO"
      direction="left"
      schX={-10.4}
      schY={-2.6}
      connectsTo="net.SDO"
    />
    <port
      name="nSCS"
      direction="left"
      schX={-10.4}
      schY={-3.2}
      connectsTo="net.nSCS"
    />

    <port
      name="SH1"
      direction="right"
      schX={10.4}
      schY={1.2}
      connectsTo="net.SH1"
    />
    <port
      name="SH2"
      direction="right"
      schX={10.4}
      schY={0.4}
      connectsTo="net.SH2"
    />
    <port
      name="SO"
      direction="right"
      schX={10.4}
      schY={-0.6}
      connectsTo="net.SO"
    />
    <port
      name="nFAULT"
      direction="right"
      schX={10.4}
      schY={-1.4}
      connectsTo="net.nFAULT"
    />
    <port
      name="GND"
      direction="right"
      schX={10.4}
      schY={-2.4}
      connectsTo="net.GND"
    />
  </subcircuit>
);

export default MotorDriver_DRV8703;
