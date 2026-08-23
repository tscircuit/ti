import "tscircuit";
import { TRS3232EIRGTR } from "../lib/chips/TRS3232EIRGTR.tsx";

/**
 * TI SLLS790E, Figure 8-1, "Typical Operating Circuit and Capacitor Values".
 * Section: https://www.ti.com/document-viewer/TRS3232E/datasheet/GUID-053CAD17-BC69-4139-BDE3-BAE1B00ED46F#TITLE-SLLS790SLLS410300
 * Figure: https://www.ti.com/ods/images/SLLS790E/GUID-6C8B4B54-E0F2-409E-B581-B13949C009DB-low.gif
 *
 * The two flying capacitors and positive/negative reservoir capacitors remain
 * on the left of the transceiver. The VCC bypass capacitor remains upper-right.
 */
export const TRS3232E_TypicalOperatingCircuit = () => (
  <board routingDisabled>
    <TRS3232EIRGTR
      name="U1"
      schX={0}
      schY={0}
      schWidth={3}
      schHeight={5.4}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "C1_POS",
            "V_POS",
            "C1_NEG",
            "C2_POS",
            "C2_NEG",
            "V_NEG",
            "DOUT2",
            "RIN2",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "VCC",
            "GND",
            "DOUT1",
            "RIN1",
            "ROUT1",
            "DIN1",
            "DIN2",
            "ROUT2",
          ],
        },
      }}
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      schX={-2.8}
      schY={2.05}
      schOrientation="vertical"
      polarized
    />
    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0402"
      schX={-2.8}
      schY={0.1}
      schOrientation="vertical"
      polarized
    />
    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="0402"
      schX={-4.45}
      schY={1.2}
      schOrientation="vertical"
      polarized
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0402"
      schX={-4.45}
      schY={-1.25}
      schOrientation="vertical"
      polarized
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      schX={3.1}
      schY={2.15}
      schOrientation="vertical"
      polarized
    />

    <trace from="C1.pin1" to="U1.C1_POS" />
    <trace from="C1.pin2" to="U1.C1_NEG" />
    <trace from="C2.pin1" to="U1.C2_POS" />
    <trace from="C2.pin2" to="U1.C2_NEG" />
    <trace from="C3.pin1" to="U1.V_POS" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="U1.V_NEG" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="U1.VCC" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="U1.VCC" to="net.VCC" />
    <trace from="U1.GND" to="net.GND" />
  </board>
);

export default TRS3232E_TypicalOperatingCircuit;
