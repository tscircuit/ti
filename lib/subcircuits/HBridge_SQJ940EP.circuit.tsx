import type { ChipProps, SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

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

type PositionedSymbolProps = { name: string; schX: number; schY: number };

const NetTie = ({ name, schX, schY }: PositionedSymbolProps) => (
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

type MosfetSymbolProps = { label: string; mirrored?: boolean };

const MosfetSymbol = ({ label, mirrored = false }: MosfetSymbolProps) => (
  <symbol>
    <schematictext
      text={label}
      schX={mirrored ? 0.3 : -0.3}
      schY={0.43}
      fontSize={0.14}
      anchor="center"
    />
    <schematiccircle
      center={{ x: 0, y: 0 }}
      radius={0.26}
      strokeWidth={0.025}
      color="#840000"
    />
    <schematicline
      x1={mirrored ? 0.1 : -0.1}
      y1={-0.17}
      x2={mirrored ? 0.1 : -0.1}
      y2={0.17}
      strokeWidth={0.025}
      color="#840000"
    />
    <schematicline
      x1={mirrored ? -0.08 : 0.08}
      y1={-0.16}
      x2={mirrored ? -0.08 : 0.08}
      y2={0.16}
      strokeWidth={0.025}
      color="#840000"
    />
    <schematicline
      x1={mirrored ? 0.1 : -0.1}
      y1={0.1}
      x2={mirrored ? -0.08 : 0.08}
      y2={0.1}
      strokeWidth={0.025}
      color="#840000"
    />
    <schematicline
      x1={mirrored ? 0.1 : -0.1}
      y1={-0.1}
      x2={mirrored ? -0.08 : 0.08}
      y2={-0.1}
      strokeWidth={0.025}
      color="#840000"
    />
    <port
      name="pin3"
      schX={mirrored ? 0.48 : -0.48}
      schY={0}
      direction={mirrored ? "right" : "left"}
      schStemLength={0.38}
      pinNumber={3}
    />
    <port
      name="pin1"
      schX={mirrored ? -0.08 : 0.08}
      schY={0.48}
      direction="up"
      schStemLength={0.32}
      pinNumber={1}
    />
    <port
      name="pin2"
      schX={mirrored ? -0.08 : 0.08}
      schY={-0.48}
      direction="down"
      schStemLength={0.32}
      pinNumber={2}
    />
  </symbol>
);

/**
 * Dual-SQJ940EP H-bridge power stage extracted from TI reference design
 * TIDA-01389. The DRV8703-Q1 gate driver is a separate subcircuit.
 *
 * Reference: https://www.ti.com/tool/TIDA-01389
 */
export const HBridge_SQJ940EP = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schMaxTraceDistance="50mm" {...props}>
    <net name="GND" isGroundNet />

    <schematicbox
      name="HBRIDGE_SECTION"
      schX={5.392051}
      schY={0}
      width={8.042381}
      height={7.676818}
    />
    <schematictext
      schX={5.392051}
      schY={-4.35}
      text="H-BRIDGE"
      fontSize={0.3}
    />

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

    <chip
      name="Q1B"
      displayName="Q1"
      schX={4.28}
      schY={0.86}
      symbol={<MosfetSymbol label="Q1" />}
    />
    <chip
      name="Q1A"
      displayName="Q1"
      schX={4.28}
      schY={-1.14}
      symbol={<MosfetSymbol label="Q1" />}
    />
    <chip
      name="Q2A"
      displayName="Q2"
      schX={7.36}
      schY={0.86}
      symbol={<MosfetSymbol label="Q2" mirrored />}
    />
    <chip
      name="Q2B"
      displayName="Q2"
      schX={7.36}
      schY={-1.14}
      symbol={<MosfetSymbol label="Q2" mirrored />}
    />

    <resistor
      name="R2"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={2.86}
      schY={0.9}
    />
    <resistor
      name="R3"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={2.86}
      schY={-1.08}
    />
    <resistor
      name="R5"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={8.23}
      schY={0.9}
    />
    <resistor
      name="R4"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={8.23}
      schY={-1.08}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0805"
      manufacturerPartNumber="GRM21BR71H105KA12L"
      schX={4.68}
      schY={2.57}
      schOrientation="vertical"
    />
    <capacitor
      name="C17"
      capacitance="0.1uF"
      footprint="0402"
      manufacturerPartNumber="GCM155R71C104KA55D"
      doNotPlace
      schX={5.47}
      schY={0.1}
    />
    <capacitor
      name="C18"
      capacitance="1000pF"
      footprint="0402"
      manufacturerPartNumber="GRM155R71C102KA01D"
      doNotPlace
      schX={5.47}
      schY={-0.6}
    />

    <NetTie name="NT2" schX={4.35} schY={-0.15} />
    <NetTie name="NT3" schX={7.71} schY={-0.15} />
    <NetTie name="NT4" schX={7.71} schY={-1.62} />
    <NetTie name="NT5" schX={6.26} schY={-2.03} />
    <NetTie name="NT6" schX={6.26} schY={-3.38} />
    <resistor
      name="R1"
      resistance="0.04ohm"
      footprint="2010"
      manufacturerPartNumber="CSRN2010FK40L0"
      schX={5.37}
      schY={-2.59}
      schOrientation="vertical"
    />
    <capacitor
      name="C16"
      capacitance="1000pF"
      footprint="0402"
      manufacturerPartNumber="GRM155R71C102KA01D"
      schX={6.66}
      schY={-2.61}
      schOrientation="vertical"
    />

    <netlabel
      net="GH1"
      connectsTo="R2.pin1"
      schX={2.2}
      schY={0.9}
      anchorSide="right"
    />
    <trace from="R2.pin2" to="Q1B.pin3" />
    <netlabel
      net="GL1"
      connectsTo="R3.pin1"
      schX={2.2}
      schY={-1.08}
      anchorSide="right"
    />
    <trace from="R3.pin2" to="Q1A.pin3" />
    <trace from="Q2A.pin3" to="R5.pin1" />
    <netlabel
      net="GH2"
      connectsTo="R5.pin2"
      schX={8.9}
      schY={0.9}
      anchorSide="left"
    />
    <trace from="Q2B.pin3" to="R4.pin1" />
    <netlabel
      net="GL2"
      connectsTo="R4.pin2"
      schX={8.9}
      schY={-1.08}
      anchorSide="left"
    />

    <trace from="Q1B.pin1" to="Q2A.pin1" />
    <trace from="C1.pin1" to="Q1B.pin1" />
    <netlabel
      net="PVDD"
      connectsTo="C1.pin1"
      schX={4.95}
      schY={3.05}
      anchorSide="left"
    />
    <netlabel
      net="GND"
      connectsTo="C1.pin2"
      schX={4.95}
      schY={2.0}
      anchorSide="left"
    />

    <trace from="Q1B.pin2" to="Q1A.pin1" />
    <trace from="NT2.pin2" to="Q1B.pin2" />
    <netlabel
      net="SH1"
      connectsTo="NT2.pin1"
      schX={3.55}
      schY={-0.15}
      anchorSide="right"
    />
    <trace from="C17.pin1" to="Q1B.pin2" />
    <trace from="C18.pin1" to="Q1B.pin2" />

    <trace from="Q2A.pin2" to="Q2B.pin1" />
    <trace from="NT3.pin1" to="Q2A.pin2" />
    <netlabel
      net="SH2"
      connectsTo="NT3.pin2"
      schX={8.5}
      schY={-0.15}
      anchorSide="left"
    />
    <trace from="C17.pin2" to="Q2A.pin2" />
    <trace from="C18.pin2" to="Q2A.pin2" />

    <trace from="Q1A.pin2" to="Q2B.pin2" />
    <trace from="NT4.pin1" to="Q2B.pin2" />
    <netlabel
      net="SL2"
      connectsTo="NT4.pin2"
      schX={8.5}
      schY={-1.62}
      anchorSide="left"
    />
    <trace from="NT5.pin1" to="Q1A.pin2" />
    <netlabel
      net="SP"
      connectsTo="NT5.pin2"
      schX={6.95}
      schY={-2.03}
      anchorSide="left"
    />
    <trace from="R1.pin1" to="NT5.pin2" />
    <trace from="R1.pin2" to="NT6.pin1" />
    <netlabel
      net="GND"
      connectsTo="R1.pin2"
      schX={5.37}
      schY={-3.35}
      anchorSide="top"
    />
    <netlabel
      net="SN"
      connectsTo="NT6.pin2"
      schX={6.95}
      schY={-3.38}
      anchorSide="left"
    />
    <trace from="C16.pin1" to="NT5.pin2" />
    <trace from="C16.pin2" to="NT6.pin2" />

    <port name="PVDD" direction="left" connectsTo="net.PVDD" />
    <port name="GH1" direction="left" connectsTo="net.GH1" />
    <port name="SH1" direction="left" connectsTo="net.SH1" />
    <port name="GL1" direction="left" connectsTo="net.GL1" />
    <port name="GH2" direction="right" connectsTo="net.GH2" />
    <port name="SH2" direction="right" connectsTo="net.SH2" />
    <port name="GL2" direction="right" connectsTo="net.GL2" />
    <port name="SL2" direction="right" connectsTo="net.SL2" />
    <port name="SP" direction="right" connectsTo="net.SP" />
    <port name="SN" direction="right" connectsTo="net.SN" />
    <port name="GND" direction="right" connectsTo="net.GND" />
  </subcircuit>
);

export default HBridge_SQJ940EP;
