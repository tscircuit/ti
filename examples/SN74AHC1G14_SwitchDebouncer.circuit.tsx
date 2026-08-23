import "tscircuit";
import { SN74AHC1G14DBVR } from "../lib/chips/SN74AHC1G14DBVR.tsx";

/**
 * TI SCLS321S, Figure 8-1, "SN74AHC1G14 Switch Debouncer".
 * Section: https://www.ti.com/document-viewer/SN74AHC1G14/datasheet/GUID-73F0AF56-7849-48C4-9A81-C7F828BB61AE#TITLE-SCLS321SCLS3214279
 * Figure: https://www.ti.com/ods/images/SCLS321S/GUID-BFCCD851-C35C-49FD-86C3-862D2F369B7D-low.gif
 *
 * The physical push button and pull-up stay to the left of the inverting
 * Schmitt trigger, with the receiving microprocessor block on the right.
 */
export const SN74AHC1G14_SwitchDebouncer = () => (
  <board routingDisabled>
    <SN74AHC1G14DBVR
      name="U1"
      schX={0}
      schY={0}
      schWidth={1.6}
      schHeight={1.2}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["A"] },
        rightSide: { direction: "top-to-bottom", pins: ["Y"] },
      }}
    />

    <pushbutton name="SW1" footprint="smdpushbutton" schX={-3.7} schY={-0.25} />
    <resistor
      name="R1"
      resistance="10k"
      footprint="0402"
      schX={-2.15}
      schY={1.2}
      schOrientation="vertical"
    />

    <chip
      name="MCU"
      footprint="pinrow1"
      manufacturerPartNumber="MICROPROCESSOR"
      schX={3.35}
      schY={0}
      schWidth={2.2}
      schHeight={1.5}
      pinLabels={{ pin1: "GPIO_IN" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["GPIO_IN"] },
      }}
    />

    <trace from="R1.pin2" to="U1.A" />
    <trace from="SW1.pin2" to="U1.A" />
    <trace from="U1.Y" to="MCU.GPIO_IN" />
    <trace from="R1.pin1" to="net.VCC" />
    <trace from="SW1.pin1" to="net.GND" />
  </board>
);

export default SN74AHC1G14_SwitchDebouncer;
