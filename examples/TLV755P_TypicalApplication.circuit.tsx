import "tscircuit";
import { TLV75533PDBVR } from "../lib/chips/TLV75533PDBVR.tsx";

/**
 * TI TLV755P datasheet (SBVS320D), Figure 7-4, "TLV755P Typical Application":
 * https://www.ti.com/lit/ds/symlink/tlv755p.pdf#page=19
 * Figure asset: https://www.ti.com/ods/images/SBVS320D/GUID-0BCA8AAE-CBC2-4E39-90C5-FF3DE67E3CE3-low.gif
 */
export const TLV755P_TypicalApplication = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <TLV75533PDBVR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={1.8}
      schHeight={2}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 3] },
        rightSide: { direction: "top-to-bottom", pins: [5] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
    />

    <capacitor
      name="CIN"
      capacitance="1uF"
      footprint="0402"
      schX={-2.8}
      schY={0.75}
      schOrientation="vertical"
    />
    <capacitor
      name="COUT"
      capacitance="1uF"
      footprint="0402"
      schX={2.2}
      schY={0.75}
      schOrientation="vertical"
    />
    <schematicsymbol
      name="DC_DC_OUTPUT"
      displayName="DC/DC converter"
      symbolName="testpoint_left"
      schX={-4}
      schY={1.05}
    />
    <schematicsymbol
      name="ENABLE"
      displayName="ON / OFF"
      symbolName="testpoint_left"
      schX={-1.8}
      schY={-0.7}
    />
    <schematicsymbol
      name="LOAD"
      displayName="Load"
      symbolName="resistor_down"
      schX={3.8}
      schY={0.75}
    />
    <schematicsymbol
      name="GND_INPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={-2.8}
      schY={-0.15}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-2}
    />
    <schematicsymbol
      name="GND_OUTPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={2.2}
      schY={-0.15}
    />
    <schematicsymbol
      name="GND_LOAD"
      displayName=""
      symbolName="digital_ground_up"
      schX={3.8}
      schY={-0.15}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "GND_INPUT.1",
        "GND_DEVICE.1",
        "GND_OUTPUT.1",
        "GND_LOAD.1",
        "CIN.pin2",
        "U1.pin2",
        "COUT.pin2",
        "LOAD.2",
      ]}
    />

    <trace path={[".DC_DC_OUTPUT > .1", ".CIN > .pin1", ".U1 > .pin1"]} />
    <trace from=".ENABLE > .1" to=".U1 > .pin3" />
    <trace path={[".U1 > .pin5", ".COUT > .pin1", ".LOAD > .1"]} />
    <trace from=".CIN > .pin2" to=".GND_INPUT > .1" />
    <trace from=".U1 > .pin2" to=".GND_DEVICE > .1" />
    <trace from=".COUT > .pin2" to=".GND_OUTPUT > .1" />
    <trace from=".LOAD > .2" to=".GND_LOAD > .1" />
  </board>
);

export default TLV755P_TypicalApplication;
