import "tscircuit";
import { TPS7A2028PDBVR } from "../lib/chips/TPS7A2028PDBVR.tsx";

/**
 * TI TPS7A20 datasheet (SBVS338H), Figure 7-4, "TPS7A20 Typical Application":
 * https://www.ti.com/lit/ds/symlink/tps7a20.pdf#page=30
 *
 * Figure 7-4 and Table 7-1 use the fixed 2.8 V device with 1 uF input and
 * output capacitors. Component placement follows the TI left-to-right signal
 * flow while tscircuit autoroutes every schematic trace.
 */
export const TPS7A20_TypicalApplication = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <TPS7A2028PDBVR name="U1" schX={0} schY={0} />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0402"
      schX={-2.2}
      schY={-0.15}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="1uF"
      footprint="0402"
      schX={2.2}
      schY={-0.15}
      schOrientation="vertical"
    />

    <schematicsymbol
      name="INPUT"
      displayName="INPUT"
      symbolName="testpoint_right"
      schX={-3.5}
      schY={0.55}
    />
    <schematicsymbol
      name="ENABLE"
      displayName="ENABLE"
      symbolName="testpoint_right"
      schX={-3.5}
      schY={-0.7}
    />
    <schematicsymbol
      name="OUTPUT"
      displayName="OUTPUT"
      symbolName="testpoint_right"
      schX={3.5}
      schY={0.55}
    />

    <schematicsymbol
      name="GND_INPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={-2.2}
      schY={-1.1}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-1.7}
    />
    <schematicsymbol
      name="GND_OUTPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={2.2}
      schY={-1.1}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={["GND_INPUT.pin1", "GND_DEVICE.pin1", "GND_OUTPUT.pin1"]}
    />

    <trace path={[".INPUT > .1", ".C1 > .pin1", ".U1 > .VIN"]} />
    <trace from=".ENABLE > .1" to=".U1 > .VEN" />
    <trace path={[".U1 > .VOUT", ".C2 > .pin1", ".OUTPUT > .1"]} />
    <trace from=".C1 > .pin2" to=".GND_INPUT > .1" />
    <trace from=".U1 > .GND" to=".GND_DEVICE > .1" />
    <trace from=".C2 > .pin2" to=".GND_OUTPUT > .1" />
  </board>
);

export default TPS7A20_TypicalApplication;
