import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TLIN10283DDARQ1 } from "../chips/TLIN10283DDARQ1.circuit.tsx";

/**
 * LIN communication and system-supply block extracted from the "Power & LIN"
 * section of TI TIDA-020027, SideMirror_Logic_TLIN1028.SchDoc.
 *
 * Altium Location coordinates are normalized without re-layout using:
 *   schX = (sourceX - 390) * 0.0254
 *   schY = (sourceY - 380) * 0.0254
 *
 * The source's "3.3V" label is retained as a trace display label because a
 * period is not legal in a tscircuit net selector.
 *
 * Reference: https://www.ti.com/tool/TIDA-020027
 */
export const CommunicationInterface_TLIN1028 = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="12mm"
    autorouterEffortLevel="10x"
    schTraceAutoLabelEnabled={false}
    // This source extraction is schematic-only. PCB autorouting is intentionally
    // disabled while the native schematic autorouter remains active.
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />
    <net name="Vsup" isPowerNet />
    <net name="EN_1028" />
    <net name="RXD" />
    <net name="TXD" />
    <net name="nRST" />
    <net name="LIN" />

    <schematictext
      schX={-1.016}
      schY={4.826}
      text="Power & LIN"
      fontSize={0.3}
    />

    <TLIN10283DDARQ1 name="U4" schX={0} schY={0} />

    {/* VCC output filtering and RXD pull-up. */}
    <capacitor
      name="C23"
      capacitance="10uF"
      maxVoltageRating="10V"
      schShowRatings
      footprint="0603"
      manufacturerPartNumber="GRM188Z71A106MA73D"
      schX={-5.08}
      schY={2.667}
      schRotation={270}
      schSize={0.762}
    />
    <capacitor
      name="C24"
      capacitance="0.1uF"
      maxVoltageRating="16V"
      schShowRatings
      footprint="0603"
      manufacturerPartNumber="C0603C104K4RACTU"
      schX={-3.81}
      schY={2.667}
      schRotation={270}
      schSize={0.762}
    />
    <resistor
      name="R19"
      resistance="10kohm"
      tolerance="5%"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0JNED"
      schX={-5.588}
      schY={0.508}
      schRotation={270}
      schSize={1.016}
    />

    {/* VSUP input bypassing. */}
    <capacitor
      name="C25"
      capacitance="0.1uF"
      maxVoltageRating="50V"
      schShowRatings
      footprint="0603"
      manufacturerPartNumber="C1608X7R1H104K080AA"
      schX={3.302}
      schY={2.413}
      schRotation={270}
      schSize={0.762}
    />
    <capacitor
      name="C26"
      capacitance="10uF"
      maxVoltageRating="50V"
      schShowRatings
      footprint="1206"
      manufacturerPartNumber="CGA5L3X5R1H106M160AB"
      schX={4.826}
      schY={2.413}
      schOrientation="vertical"
      schSize={0.762}
    />

    {/* LIN-bus and TXD filtering. TLIN1028-Q1 supplies the source design's
        automotive LIN ESD and bus-fault protection internally. */}
    <capacitor
      name="C29"
      capacitance="220pF"
      maxVoltageRating="50V"
      schShowRatings
      footprint="0603"
      manufacturerPartNumber="C0603C221K5RACTU"
      schX={4.064}
      schY={0.127}
      schOrientation="vertical"
      schSize={0.762}
    />
    <resistor
      name="R20"
      resistance="1kohm"
      tolerance="1%"
      footprint="0603"
      manufacturerPartNumber="CRCW06031K00FKEA"
      schX={-5.588}
      schY={-0.508}
      schSize={1.016}
    />
    <capacitor
      name="C31"
      capacitance="100pF"
      maxVoltageRating="25V"
      schShowRatings
      footprint="0603"
      manufacturerPartNumber="06033C101KAT2A"
      schX={-5.08}
      schY={-0.889}
      schRotation={270}
      schSize={0.762}
    />

    {/* 3.3 V rail: U4 VCC, C23/C24, and the RXD pull-up. */}
    <trace
      from="U4.VCC"
      to="C24.pin1"
      schematicRouteHints={[
        { x: -2.794, y: 1.016 },
        { x: -2.794, y: 3.048 },
        { x: -3.81, y: 3.048 },
      ]}
    />
    <trace from="C24.pin1" to="C23.pin1" />
    <trace from="C23.pin1" to="R19.pin1" schDisplayLabel="3.3V" />
    <trace from="C23.pin2" to="C24.pin2" />
    <netlabel
      net="GND"
      connectsTo="C24.pin2"
      schX={-3.81}
      schY={2.032}
      anchorSide="top"
    />

    {/* Logic-side signal boundaries. */}
    <trace from="U4.RXD" to="R19.pin2" />
    <netlabel
      net="RXD"
      connectsTo="R19.pin2"
      schX={-6.858}
      schY={0}
      anchorSide="right"
    />
    <netlabel
      net="TXD"
      connectsTo="R20.pin1"
      schX={-6.858}
      schY={-0.508}
      anchorSide="right"
    />
    <trace from="R20.pin2" to="U4.TXD" />
    <trace from="C31.pin1" to="R20.pin2" />
    <netlabel
      net="GND"
      connectsTo="C31.pin2"
      schX={-5.08}
      schY={-1.27}
      anchorSide="top"
    />
    <netlabel
      net="EN_1028"
      connectsTo="U4.EN"
      schX={-3.048}
      schY={0.508}
      anchorSide="right"
    />
    <netlabel
      net="nRST"
      connectsTo="U4.nRST"
      schX={-2.904}
      schY={-1.016}
      anchorSide="right"
    />

    {/* VSUP rail and its two source-local bypass capacitors. */}
    <trace
      from="U4.VSUP"
      to="C25.pin1"
      schematicRouteHints={[
        { x: 2.286, y: 1.524 },
        { x: 2.286, y: 2.794 },
        { x: 3.302, y: 2.794 },
      ]}
    />
    <trace from="C25.pin1" to="C26.pin1" />
    <netlabel
      net="Vsup"
      connectsTo="C26.pin1"
      schX={4.826}
      schY={2.794}
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      connectsTo="C25.pin2"
      schX={3.302}
      schY={2.032}
      anchorSide="top"
    />
    <netlabel
      net="GND"
      connectsTo="C26.pin2"
      schX={4.826}
      schY={2.032}
      anchorSide="top"
    />

    {/* LIN bus shunt capacitor and external LIN boundary. */}
    <trace from="U4.LIN" to="C29.pin1" />
    <netlabel
      net="LIN"
      connectsTo="C29.pin1"
      schX={4.572}
      schY={0.508}
      anchorSide="left"
    />
    <netlabel
      net="GND"
      connectsTo="C29.pin2"
      schX={4.064}
      schY={-1.016}
      anchorSide="top"
    />

    {/* The DDA exposed pad and pin 3 are both grounded in the TI source. */}
    <trace from="U4.GND" to="U4.PAD" />
    <netlabel
      net="GND"
      connectsTo="U4.PAD"
      schX={2.794}
      schY={-1.016}
      anchorSide="top"
    />
  </subcircuit>
);

export default CommunicationInterface_TLIN1028;
