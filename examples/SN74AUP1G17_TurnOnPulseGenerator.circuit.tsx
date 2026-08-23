import "tscircuit";
import { SN74AUP1G17DBVR } from "../lib/chips/SN74AUP1G17DBVR.tsx";

/**
 * TI SCES579J, Figure 8, "Turn-On Pulse Generator (Normally High Output)".
 * Section: https://www.ti.com/document-viewer/SN74AUP1G17/datasheet/application-and-implementation#x5214
 * Figure: https://www.ti.com/ods/images/SCES579J/sces579_app1.gif
 *
 * The timing node is kept directly left of the non-inverting Schmitt buffer,
 * with the pull-up above it and timing capacitor below it as in the TI figure.
 */
export const SN74AUP1G17_TurnOnPulseGenerator = () => (
  <board routingDisabled>
    <SN74AUP1G17DBVR
      name="U1"
      schX={1}
      schY={0}
      schWidth={1.6}
      schHeight={1.2}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["A"] },
        rightSide: { direction: "top-to-bottom", pins: ["Y"] },
      }}
    />

    <resistor
      name="R1"
      resistance="100k"
      footprint="0402"
      schX={-1.15}
      schY={1.4}
      schOrientation="vertical"
    />
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      schX={-1.15}
      schY={-1.35}
      schOrientation="vertical"
    />

    <trace from="R1.pin2" to="U1.A" />
    <trace from="C1.pin1" to="U1.A" />
    <trace from="R1.pin1" to="net.VCC" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="U1.Y" to="net.VO" />
  </board>
);

export default SN74AUP1G17_TurnOnPulseGenerator;
