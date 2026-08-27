import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TPS79601DRBR } from "../chips/TPS79601DRBR.circuit.tsx";

// Native `vertical` is 270 degrees, so its 180-degree flip is 90 degrees.
const VERTICAL_ROTATED_180_DEGREES = 90;

/**
 * TIDEP-0092 Rev C VPP LDO sheet, PROC011C_VPP_Supply.SchDoc.
 * Placement is digitized from the official TIDRQR8 schematic PDF page 7.
 * The downloadable Altium conversion uses a different TPS79601 symbol mode and
 * does not reproduce the published component layout, so the PDF is authoritative
 * for visible centers and pin sides on this sheet.
 */
export const SystemPowerVpp_TPS79601_TIDEP0092 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schMaxTraceDistance="100mm" {...props}>
    <net name="GND" isGroundNet />
    <net name="V5_IN" isPowerNet />
    <net name="VPP_1P7" isPowerNet />

    <TPS79601DRBR name="U11" schX={0} schY={3.375} noConnect={["NC"]} />
    <capacitor
      name="C86"
      capacitance="2.2uF"
      maxVoltageRating="10V"
      footprint="0402"
      manufacturerPartNumber="C1005X7S1A225K050BC"
      schX={-3.09375}
      schY={5.0625}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
    />
    <resistor
      name="R194"
      resistance="10kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0FKED"
      schX={3.375}
      schY={4.59375}
      schOrientation="vertical"
    />
    <resistor
      name="R61"
      resistance="14kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW040214K0FKED"
      schX={-3.375}
      schY={1.96875}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
    />
    <resistor
      name="R193"
      resistance="35kohm"
      tolerance="0.1%"
      footprint="0402"
      manufacturerPartNumber="PNM0402E3502BST1"
      schX={-3.375}
      schY={-0.28125}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
    />
    <capacitor
      name="C88"
      capacitance="33pF"
      maxVoltageRating="50V"
      footprint="0402"
      manufacturerPartNumber="C0402C330J5GAC"
      schX={-5.625}
      schY={1.96875}
      schOrientation="vertical"
    />
    <capacitor
      name="C85"
      capacitance="1uF"
      maxVoltageRating="6.3V"
      footprint="0402"
      manufacturerPartNumber="C1005X7S0J105M050BC"
      schX={-7.875}
      schY={1.96875}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
    />
    <pinheader
      name="P7"
      manufacturerPartNumber="TSW-102-07-G-S"
      pinCount={2}
      pitch="2.54mm"
      gender="male"
      schX={-10.875}
      schY={1.96875}
      schFacingDirection="up"
      schPinArrangement={{
        topSide: { pins: [1, 2], direction: "left-to-right" },
      }}
    />

    <trace from=".C86 > .pin2" to=".U11 > .IN1" />
    <trace from=".U11 > .IN1" to=".U11 > .IN2" />
    <trace from=".R194 > .pin1" to=".U11 > .IN1" />
    <netlabel
      net="V5_IN"
      connection="R194.pin1"
      schX={2.8125}
      schY={6.75}
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      connection="C86.pin1"
      schX={-3.09375}
      schY={3.9375}
      anchorSide="top"
    />
    <trace from=".R194 > .pin2" to=".U11 > .EN" />

    <trace from=".U11 > .OUT1" to=".U11 > .OUT2" />
    <trace from=".U11 > .OUT2" to=".P7 > .pin1" />
    <trace from=".P7 > .pin1" to=".P7 > .pin2" />
    <trace from=".R61 > .pin2" to=".P7 > .pin1" />
    <trace from=".C88 > .pin1" to=".P7 > .pin1" />
    <trace from=".C85 > .pin2" to=".P7 > .pin1" />
    <netlabel
      net="VPP_1P7"
      connection="P7.pin1"
      schX={-13.125}
      schY={4.78125}
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      connection="C85.pin1"
      schX={-7.875}
      schY={-0.5625}
      anchorSide="top"
    />
    <trace from=".U11 > .FB" to=".R61 > .pin1" />
    <trace from=".R61 > .pin1" to=".C88 > .pin2" />
    <trace from=".C88 > .pin2" to=".R193 > .pin2" />
    <netlabel
      net="GND"
      connection="R193.pin1"
      schX={-3.375}
      schY={-1.125}
      anchorSide="top"
    />
    <netlabel
      net="GND"
      connection="U11.GND"
      schX={2.8125}
      schY={0.28125}
      anchorSide="top"
    />
    {/* TI physically ties GND and EP before the single GND power port. */}
    <trace from=".U11 > .GND" to=".U11 > .EP" />
  </subcircuit>
);

export default SystemPowerVpp_TPS79601_TIDEP0092;
