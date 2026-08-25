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
    {...props}
  />
);

type NetTieProps = {
  name: string;
  schX: number;
  schY: number;
};

/**
 * tscircuit does not currently have a dedicated net-tie schematic primitive.
 * The TI source uses a two-pin box, so retain that topology with the repository's
 * standard generic chip symbol instead of drawing a replacement symbol.
 */
const NetTie = ({ name, schX, schY }: NetTieProps) => (
  <chip
    name={name}
    displayName={name}
    schX={schX}
    schY={schY}
    schWidth="0.4mm"
    schHeight="0.4mm"
    footprint="kicad:NetTie/NetTie-2_SMD_Pad0.5mm"
    pinLabels={{ pin1: "1", pin2: "2" }}
    schPinArrangement={{
      leftSide: { pins: [1], direction: "top-to-bottom" },
      rightSide: { pins: [2], direction: "top-to-bottom" },
    }}
    internallyConnectedPins={[[1, 2]]}
  />
);

/**
 * TIDA-01389 H-bridge power stage, extracted from TIDA-01389_Sch.SchDoc.
 *
 * Component centers and route bends below are translated directly from the
 * Altium sheet around the H-bridge center (26.503300, 7.859599). Q1 and Q2 are
 * dual SQJ940EP packages, each represented by its two schematic units.
 *
 * Reference: https://www.ti.com/tool/TIDA-01389
 */
export const HBridge_SQJ940EP = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="20mm"
    schTraceAutoLabelEnabled={false}
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />

    <schematicbox
      name="HBRIDGE_SECTION"
      schX={0}
      schY={0}
      width={8.042381}
      height={8.2}
    />
    <schematictext schX={0} schY={-4.55} text="H-BRIDGE" fontSize={0.3} />

    {/* The physical dual-MOSFET packages carry BOM/footprint metadata. Their
        four Altium schematic units are rendered below with native tscircuit
        MOSFET symbols. PCB routing is outside this schematic-only extraction. */}
    <SQJ940EP
      name="Q1"
      noSchematicRepresentation
      noConnect={["S1", "G1", "S2", "G2", "D2", "D1"]}
    />
    <SQJ940EP
      name="Q2"
      noSchematicRepresentation
      noConnect={["S1", "G1", "S2", "G2", "D2", "D1"]}
    />

    <mosfet
      name="Q1B"
      displayName="Q1"
      channelType="n"
      mosfetMode="enhancement"
      schX={-1.343443}
      schY={1.645032}
      symbolDrainSide="top"
      symbolSourceSide="bottom"
      symbolGateSide="left"
    />
    <mosfet
      name="Q1A"
      displayName="Q1"
      channelType="n"
      mosfetMode="enhancement"
      schX={-1.343443}
      schY={-0.731126}
      symbolDrainSide="top"
      symbolSourceSide="bottom"
      symbolGateSide="left"
    />
    <mosfet
      name="Q2A"
      displayName="Q2"
      channelType="n"
      mosfetMode="enhancement"
      schX={1.343443}
      schY={1.645032}
      symbolDrainSide="top"
      symbolSourceSide="bottom"
      symbolGateSide="right"
    />
    <mosfet
      name="Q2B"
      displayName="Q2"
      channelType="n"
      mosfetMode="enhancement"
      schX={1.343443}
      schY={-0.731126}
      symbolDrainSide="top"
      symbolSourceSide="bottom"
      symbolGateSide="right"
    />

    <resistor
      name="R2"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={-2.741721}
      schY={1.645032}
    />
    <resistor
      name="R3"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={-2.741721}
      schY={-0.731126}
    />
    <resistor
      name="R5"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={2.558939}
      schY={1.645032}
    />
    <resistor
      name="R4"
      resistance="0ohm"
      footprint="0603"
      manufacturerPartNumber="CRCW06030000Z0EA"
      schX={2.558939}
      schY={-0.831126}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0805"
      manufacturerPartNumber="GRM21BR71H105KA12L"
      schX={-0.913907}
      schY={3.198674}
      schOrientation="vertical"
    />
    <capacitor
      name="C17"
      capacitance="0.1uF"
      footprint="0402"
      manufacturerPartNumber="GCM155R71C104KA55D"
      doNotPlace
      schX={-0.091391}
      schY={0.913907}
    />
    <capacitor
      name="C18"
      capacitance="1000pF"
      footprint="0402"
      manufacturerPartNumber="GRM155R71C102KA01D"
      doNotPlace
      schX={-0.091391}
      schY={0}
    />

    <NetTie name="NT2" schX={-2.376158} schY={0.182781} />
    <NetTie name="NT3" schX={2.376158} schY={0.182781} />
    <NetTie name="NT4" schX={2.376158} schY={-1.462251} />
    <NetTie name="NT5" schX={0.731126} schY={-1.827814} />
    <NetTie name="NT6" schX={0.731126} schY={-3.25} />

    <resistor
      name="R1"
      resistance="0.04ohm"
      footprint="2010"
      manufacturerPartNumber="CSRN2010FK40L0"
      schX={0}
      schY={-2.376158}
      schOrientation="vertical"
    />
    <capacitor
      name="C16"
      capacitance="1000pF"
      footprint="0402"
      manufacturerPartNumber="GRM155R71C102KA01D"
      schX={1.27947}
      schY={-2.284767}
      schOrientation="vertical"
    />

    {/* Gate paths: direct horizontal wires in the Altium source. */}
    <netlabel
      net="GH1"
      connectsTo="R2.pin1"
      schX={-3.472847}
      schY={1.645032}
      anchorSide="right"
    />
    <trace from="R2.pin2" to="Q1B.gate" />
    <netlabel
      net="GL1"
      connectsTo="R3.pin1"
      schX={-3.472847}
      schY={-0.731126}
      anchorSide="right"
    />
    <trace from="R3.pin2" to="Q1A.gate" />
    <trace from="Q2A.gate" to="R5.pin1" />
    <netlabel
      net="GH2"
      connectsTo="R5.pin2"
      schX={3.472847}
      schY={1.645032}
      anchorSide="left"
    />
    <trace from="Q2B.gate" to="R4.pin1" />
    <netlabel
      net="GL2"
      connectsTo="R4.pin2"
      schX={3.472847}
      schY={-0.831126}
      anchorSide="left"
    />

    {/* PVDD rail and the C1 decoupling branch. */}
    <trace from="Q1B.drain" to="Q2A.drain" />
    <trace
      from="C1.pin1"
      to="Q1B.drain"
      schematicRouteHints={[
        { x: -0.913907, y: 3.472846 },
        { x: 0, y: 3.472846 },
        { x: 0, y: 2.193377 },
      ]}
    />
    <netlabel
      net="PVDD"
      connectsTo="Q1B.drain"
      schX={0.365563}
      schY={3.472846}
      anchorSide="left"
    />
    <netlabel
      net="GND"
      connectsTo="C1.pin2"
      schX={-0.913907}
      schY={2.924502}
      anchorSide="top"
    />

    {/* Left bridge midpoint, exactly following the source junctions. */}
    <trace from="Q1B.source" to="Q1A.drain" />
    <trace
      from="NT2.pin2"
      to="Q1B.source"
      schematicRouteHints={[
        { x: -1.27947, y: 0.182781 },
        { x: -1.27947, y: 1.096688 },
      ]}
    />
    <netlabel
      net="SH1"
      connectsTo="NT2.pin1"
      schX={-3.472847}
      schY={0.182781}
      anchorSide="right"
    />
    <trace
      from="C17.pin1"
      to="Q1B.source"
      schematicRouteHints={[
        { x: -0.731126, y: 0.913907 },
        { x: -0.731126, y: 0.182781 },
        { x: -1.27947, y: 0.182781 },
      ]}
    />
    <trace
      from="C18.pin1"
      to="C17.pin1"
      schematicRouteHints={[
        { x: -0.731126, y: 0 },
        { x: -0.731126, y: 0.913907 },
      ]}
    />

    {/* Right bridge midpoint, mirrored from the Altium source. */}
    <trace from="Q2A.source" to="Q2B.drain" />
    <trace
      from="Q2A.source"
      to="NT3.pin1"
      schematicRouteHints={[
        { x: 1.27947, y: 0.182781 },
        { x: 2.010595, y: 0.182781 },
      ]}
    />
    <netlabel
      net="SH2"
      connectsTo="NT3.pin2"
      schX={3.472847}
      schY={0.182781}
      anchorSide="left"
    />
    <trace
      from="C17.pin2"
      to="Q2A.source"
      schematicRouteHints={[
        { x: 0.731126, y: 0.913907 },
        { x: 0.731126, y: 0.182781 },
        { x: 1.27947, y: 0.182781 },
      ]}
    />
    <trace
      from="C18.pin2"
      to="C17.pin2"
      schematicRouteHints={[
        { x: 0.731126, y: 0 },
        { x: 0.731126, y: 0.913907 },
      ]}
    />

    {/* Low-side source rail, current shunt, and SP/SN filter. */}
    <trace
      from="Q1A.source"
      to="Q2B.source"
      schematicRouteHints={[
        { x: -1.27947, y: -1.462251 },
        { x: 1.27947, y: -1.462251 },
      ]}
    />
    <trace from="Q2B.source" to="NT4.pin1" />
    <netlabel
      net="SL2"
      connectsTo="NT4.pin2"
      schX={3.472847}
      schY={-1.462251}
      anchorSide="left"
    />
    <trace
      from="Q1A.source"
      to="R1.pin1"
      schematicRouteHints={[
        { x: -1.27947, y: -1.462251 },
        { x: 0, y: -1.462251 },
        { x: 0, y: -2.010595 },
      ]}
    />
    <trace
      from="NT5.pin1"
      to="R1.pin1"
      schematicRouteHints={[
        { x: 0, y: -1.827814 },
        { x: 0, y: -2.010595 },
      ]}
    />
    <netlabel
      net="SP"
      connectsTo="NT5.pin2"
      schX={1.645032}
      schY={-1.827814}
      anchorSide="left"
    />
    <trace from="C16.pin1" to="NT5.pin2" />

    <netlabel
      net="GND"
      connectsTo="R1.pin2"
      schX={0}
      schY={-3.48}
      anchorSide="top"
    />
    <trace
      from="R1.pin2"
      to="NT6.pin1"
      schematicRouteHints={[
        { x: 0, y: -3.25 },
        { x: 0.365563, y: -3.25 },
      ]}
    />
    <netlabel
      net="SN"
      connectsTo="NT6.pin2"
      schX={1.645032}
      schY={-3.25}
      anchorSide="left"
    />
    <trace
      from="C16.pin2"
      to="NT6.pin2"
      schematicRouteHints={[
        { x: 1.27947, y: -3.25 },
        { x: 1.096688, y: -3.25 },
      ]}
    />

    <port name="PVDD" direction="left" connectsTo="C1.pin1" />
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
