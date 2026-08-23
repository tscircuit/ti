import "tscircuit";
import { LMK1C1104DQFR } from "../lib/chips/LMK1C1104DQFR.tsx";

/**
 * TI SNAS791D, Figure 10-1, "System Configuration Example".
 * Section: https://www.ti.com/document-viewer/LMK1C1104/datasheet/GUID-DF196164-2159-47B2-946B-44FD1EF575AA#TITLE-SNAS791SNAS7914064
 * Figure: https://www.ti.com/ods/images/SNAS791D/GUID-467CAA0F-CEDA-47AC-B524-6B7EFFBEAC74-low.gif
 *
 * A 100-MHz LVCMOS source enters on the left. Two outputs feed CMOS loads
 * through source resistors, while a third uses TI's 100-ohm Thevenin load.
 */
export const LMK1C1104_ClockFanout = () => (
  <board routingDisabled>
    <chip
      name="U5"
      footprint="pinrow2"
      manufacturerPartNumber="100-MHz LVCMOS OSCILLATOR"
      schX={-5.2}
      schY={1}
      schWidth={2.2}
      schHeight={1.4}
      pinLabels={{ pin1: "OUT", pin2: "GND" }}
      schPinArrangement={{
        rightSide: { direction: "top-to-bottom", pins: ["OUT"] },
        bottomSide: { direction: "left-to-right", pins: ["GND"] },
      }}
    />
    <LMK1C1104DQFR
      name="U1"
      schX={-1.7}
      schY={0}
      schWidth={2.4}
      schHeight={3.8}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["CLKIN", "1G"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["Y0", "Y1", "Y3"],
        },
        topSide: { direction: "left-to-right", pins: ["VDD"] },
        bottomSide: { direction: "left-to-right", pins: ["GND"] },
      }}
    />

    <resistor
      name="R1"
      resistance="33"
      footprint="0402"
      schX={0.55}
      schY={0.65}
    />
    <resistor name="R2" resistance="33" footprint="0402" schX={0.55} schY={0} />
    <resistor
      name="R3"
      resistance="33"
      footprint="0402"
      schX={0.55}
      schY={-1.55}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="0402"
      schX={-3.35}
      schY={-0.55}
      schOrientation="vertical"
    />
    <resistor
      name="R5"
      resistance="100"
      footprint="0402"
      schX={2.6}
      schY={-1.05}
      schOrientation="vertical"
    />
    <resistor
      name="R6"
      resistance="100"
      footprint="0402"
      schX={2.6}
      schY={-2.05}
      schOrientation="vertical"
    />

    <schematicsymbol
      name="CPU_ENABLE"
      displayName="From CPU"
      symbolName="testpoint_left"
      schX={-4.85}
      schY={-0.55}
    />

    <chip
      name="U2"
      footprint="pinrow1"
      manufacturerPartNumber="CMOS CPU CLOCK"
      schX={4.6}
      schY={1.9}
      schWidth={2}
      schHeight={1.1}
      pinLabels={{ pin1: "CLK" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["CLK"] },
      }}
    />
    <chip
      name="U3"
      footprint="pinrow1"
      manufacturerPartNumber="CMOS FPGA CLOCK"
      schX={4.6}
      schY={0.2}
      schWidth={2}
      schHeight={1.1}
      pinLabels={{ pin1: "CLK" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["CLK"] },
      }}
    />
    <chip
      name="U4"
      footprint="pinrow1"
      manufacturerPartNumber="PLL REFERENCE"
      schX={4.6}
      schY={-1.65}
      schWidth={2}
      schHeight={1.1}
      pinLabels={{ pin1: "REF" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["REF"] },
      }}
    />

    <trace from="U5.OUT" to="U1.CLKIN" />
    <trace from="U5.GND" to="net.GND" />
    <trace from="U1.VDD" to="net.VDD" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="R4.pin1" to="net.VDD" />
    <trace from="R4.pin2" to="U1.1G" />
    <trace from="CPU_ENABLE.1" to="U1.1G" />

    <trace from="U1.Y0" to="R1.pin1" />
    <trace from="R1.pin2" to="U2.CLK" />
    <trace from="U1.Y1" to="R2.pin1" />
    <trace from="R2.pin2" to="U3.CLK" />
    <trace from="U1.Y3" to="R3.pin1" />
    <trace from="R3.pin2" to="R5.pin2" />
    <trace from="R5.pin1" to="net.VDD" />
    <trace from="R5.pin2" to="R6.pin1" />
    <trace from="R6.pin1" to="U4.REF" />
    <trace from="R6.pin2" to="net.GND" />
  </board>
);

export default LMK1C1104_ClockFanout;
