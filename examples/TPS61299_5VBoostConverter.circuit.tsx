import "tscircuit";
import { TPS61299DRLR } from "../lib/chips/TPS61299DRLR.tsx";

/**
 * TI TPS61299 datasheet (SLVSGS9G), Figure 8-1,
 * "3.6-V Input Source to 5-V Boost Converter Under Fast Mode":
 * https://www.ti.com/lit/ds/symlink/tps61299.pdf#page=19
 * Figure asset: https://www.ti.com/ods/images/SLVSGS9G/GUID-20230315-SS0I-SNWQ-NK7H-W5SZXM5FNTJP-low.svg
 */
export const TPS61299_5VBoostConverter = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <TPS61299DRLR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={2}
      schHeight={2.2}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 3] },
        rightSide: { direction: "top-to-bottom", pins: [5, 4] },
        topSide: { direction: "left-to-right", pins: [2] },
        bottomSide: { direction: "left-to-right", pins: [6] },
      }}
    />

    <schematicsymbol
      name="VIN"
      displayName="VIN 3.6 V"
      symbolName="testpoint_left"
      schX={-4}
      schY={0.6}
    />
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0402"
      schX={-3}
      schY={0.2}
      schOrientation="vertical"
    />
    <inductor
      name="L1"
      displayName="L1"
      inductance="1uH"
      footprint="0402"
      schX={-1.4}
      schY={1.7}
      schOrientation="horizontal"
    />
    <schematicsymbol
      name="ENABLE"
      displayName="EN · Fast mode"
      symbolName="testpoint_left"
      schX={-2.6}
      schY={-0.55}
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0402"
      schX={2.7}
      schY={0.2}
      schOrientation="vertical"
    />
    <schematicsymbol
      name="VOUT"
      displayName="VOUT 5 V"
      symbolName="testpoint_right"
      schX={4}
      schY={0.55}
    />

    <schematicsymbol
      name="GND_INPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={-3}
      schY={-0.85}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-1.5}
    />
    <schematicsymbol
      name="GND_OUTPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={2.7}
      schY={-0.85}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={["GND_INPUT.1", "GND_DEVICE.1", "GND_OUTPUT.1"]}
    />

    <trace path={[".VIN > .1", ".C1 > .pin1", ".U1 > .pin1"]} />
    <trace from=".VIN > .1" to=".L1 > .pin1" />
    <trace from=".L1 > .pin2" to=".U1 > .pin2" />
    <trace from=".ENABLE > .1" to=".U1 > .pin3" />
    <trace path={[".U1 > .pin5", ".C2 > .pin1", ".VOUT > .1"]} />
    <trace from=".U1 > .pin4" to=".C2 > .pin1" />

    <trace from=".C1 > .pin2" to=".GND_INPUT > .1" />
    <trace from=".U1 > .pin6" to=".GND_DEVICE > .1" />
    <trace from=".C2 > .pin2" to=".GND_OUTPUT > .1" />
  </board>
);

export default TPS61299_5VBoostConverter;
