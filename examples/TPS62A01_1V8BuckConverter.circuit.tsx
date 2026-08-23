import "tscircuit";
import { TPS62A01PDDCR } from "../lib/chips/TPS62A01PDDCR.tsx";

/**
 * TI TPS62A01 datasheet (SLUSEG9E), Figure 8-1,
 * "TPS62A01 Typical Application Circuit":
 * https://www.ti.com/lit/ds/symlink/tps62a01.pdf#page=11
 * Figure asset: https://www.ti.com/ods/images/SLUSEG9E/GUID-20230310-SS0I-R5NB-L5XF-FBXFT6BWQ4KP-low.svg
 */
export const TPS62A01_1V8BuckConverter = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <TPS62A01PDDCR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={2}
      schHeight={2.4}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [4, 1] },
        rightSide: { direction: "top-to-bottom", pins: [3, 6, 5] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
    />

    <schematicsymbol
      name="VIN"
      displayName="VIN 2.5 V to 5.5 V"
      symbolName="testpoint_left"
      schX={-4.2}
      schY={0.55}
    />
    <capacitor
      name="C1"
      capacitance="4.7uF"
      footprint="0402"
      schX={-2.8}
      schY={0.15}
      schOrientation="vertical"
    />
    <inductor
      name="L1"
      inductance="1uH"
      footprint="0402"
      schX={2.1}
      schY={0.85}
      schOrientation="horizontal"
    />
    <resistor
      name="R1"
      resistance="200k"
      footprint="0402"
      schX={3.5}
      schY={0.25}
      schOrientation="vertical"
    />
    <resistor
      name="R2"
      resistance="100k"
      footprint="0402"
      schX={3.5}
      schY={-0.85}
      schOrientation="vertical"
    />
    <capacitor
      name="C3"
      capacitance="10pF"
      footprint="0402"
      schX={4.4}
      schY={0.25}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="22uF"
      footprint="0402"
      schX={5.4}
      schY={0.25}
      schOrientation="vertical"
    />
    <resistor
      name="R4"
      resistance="499k"
      footprint="0402"
      schX={2.3}
      schY={-0.65}
      schOrientation="vertical"
    />
    <schematicsymbol
      name="VIN_PULLUP"
      displayName="VIN"
      symbolName="rail_up"
      schX={2.3}
      schY={0.25}
    />
    <schematicsymbol
      name="VOUT"
      displayName="VOUT 1.8 V / 1 A"
      symbolName="testpoint_right"
      schX={6.7}
      schY={0.85}
    />
    <schematicsymbol
      name="PG"
      displayName="VPG"
      symbolName="testpoint_right"
      schX={4}
      schY={-1.25}
    />

    <schematicsymbol
      name="GND_INPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={-2.8}
      schY={-0.95}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-1.65}
    />
    <schematicsymbol
      name="GND_FEEDBACK"
      displayName=""
      symbolName="digital_ground_up"
      schX={3.5}
      schY={-1.85}
    />
    <schematicsymbol
      name="GND_OUTPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={5.4}
      schY={-0.95}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "GND_INPUT.1",
        "GND_DEVICE.1",
        "GND_FEEDBACK.1",
        "GND_OUTPUT.1",
      ]}
    />
    <net name="VIN_RAIL" connectsTo={["VIN.1", "VIN_PULLUP.1"]} />

    <trace path={[".VIN > .1", ".C1 > .pin1", ".U1 > .pin4"]} />
    <trace from=".VIN > .1" to=".U1 > .pin1" />
    <trace from=".VIN_PULLUP > .1" to=".R4 > .pin1" />
    <trace from=".U1 > .pin3" to=".L1 > .pin1" />
    <trace
      path={[
        ".L1 > .pin2",
        ".R1 > .pin1",
        ".C3 > .pin1",
        ".C2 > .pin1",
        ".VOUT > .1",
      ]}
    />
    <trace
      path={[".R1 > .pin2", ".C3 > .pin2", ".R2 > .pin1", ".U1 > .pin6"]}
    />
    <trace from=".R4 > .pin2" to=".U1 > .pin5" />
    <trace from=".U1 > .pin5" to=".PG > .1" />

    <trace from=".C1 > .pin2" to=".GND_INPUT > .1" />
    <trace from=".U1 > .pin2" to=".GND_DEVICE > .1" />
    <trace from=".R2 > .pin2" to=".GND_FEEDBACK > .1" />
    <trace from=".C2 > .pin2" to=".GND_OUTPUT > .1" />
  </board>
);

export default TPS62A01_1V8BuckConverter;
