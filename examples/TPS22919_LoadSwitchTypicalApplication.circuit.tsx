import "tscircuit";
import { TPS22919 } from "../lib/chips/TPS22919.tsx";

/**
 * TI TPS22919 datasheet (SLVSEN5B), Figure 30, "Typical Application Schematic":
 * https://www.ti.com/lit/ds/symlink/tps22919.pdf#page=15
 * Figure asset: https://www.ti.com/ods/images/SLVSEN5B/Typical%20Application.jpg
 */
export const TPS22919_LoadSwitchTypicalApplication = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <TPS22919
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={2}
      schHeight={2.4}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 3] },
        rightSide: { direction: "top-to-bottom", pins: [6, 5] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
    />

    <schematicsymbol
      name="VIN"
      displayName="VIN 3.3 V"
      symbolName="testpoint_left"
      schX={-4.2}
      schY={0.75}
    />
    <capacitor
      name="CIN"
      displayName="CIN"
      capacitance="1uF"
      footprint="0402"
      schX={-2.6}
      schY={0.45}
      schOrientation="vertical"
    />
    <schematicsymbol
      name="ON"
      displayName="ON"
      symbolName="testpoint_left"
      schX={-3.3}
      schY={-0.65}
    />
    <resistor
      name="RQOD"
      displayName="RQOD"
      resistance="100k"
      footprint="0402"
      schX={2}
      schY={0}
      schOrientation="vertical"
    />
    <capacitor
      name="CLOAD"
      displayName="CL"
      capacitance="1uF"
      footprint="0402"
      schX={3.2}
      schY={0.25}
      schOrientation="vertical"
    />
    <resistor
      name="RLOAD"
      displayName="RL"
      resistance="10k"
      footprint="0402"
      schX={4.3}
      schY={0.25}
      schOrientation="vertical"
    />
    <schematicsymbol
      name="VOUT"
      displayName="VOUT"
      symbolName="testpoint_right"
      schX={5.5}
      schY={0.55}
    />

    <schematicsymbol
      name="GND_CIN"
      displayName=""
      symbolName="digital_ground_up"
      schX={-2.6}
      schY={-0.45}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-2.1}
    />
    <schematicsymbol
      name="GND_CLOAD"
      displayName=""
      symbolName="digital_ground_up"
      schX={3.2}
      schY={-0.85}
    />
    <schematicsymbol
      name="GND_RLOAD"
      displayName=""
      symbolName="digital_ground_up"
      schX={4.3}
      schY={-0.85}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={["GND_CIN.1", "GND_DEVICE.1", "GND_CLOAD.1", "GND_RLOAD.1"]}
    />

    <trace path={[".VIN > .1", ".CIN > .pin1", ".U1 > .pin1"]} />
    <trace from=".ON > .1" to=".U1 > .pin3" />
    <trace
      path={[
        ".U1 > .pin6",
        ".RQOD > .pin1",
        ".CLOAD > .pin1",
        ".RLOAD > .pin1",
        ".VOUT > .1",
      ]}
    />
    <trace from=".RQOD > .pin2" to=".U1 > .pin5" />

    <trace from=".CIN > .pin2" to=".GND_CIN > .1" />
    <trace from=".U1 > .pin2" to=".GND_DEVICE > .1" />
    <trace from=".CLOAD > .pin2" to=".GND_CLOAD > .1" />
    <trace from=".RLOAD > .pin2" to=".GND_RLOAD > .1" />
  </board>
);

export default TPS22919_LoadSwitchTypicalApplication;
