import "tscircuit";
import { TPS92612DBVR } from "../lib/chips/TPS92612DBVR.tsx";

/**
 * TI TPS92612 datasheet (SLVSFG3), front-page
 * "TPS92612 Typical Application Diagram":
 * https://www.ti.com/lit/ds/symlink/tps92612.pdf#page=1
 * Figure asset: https://www.ti.com/ods/images/SLVSFG3/tps92612-typical-application-diagram.gif
 */
export const TPS92612_LinearLedDriver = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <TPS92612DBVR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={2.1}
      schHeight={2.4}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [3, 2] },
        rightSide: { direction: "top-to-bottom", pins: [4, 5] },
        bottomSide: { direction: "left-to-right", pins: [1] },
      }}
    />

    <schematicsymbol
      name="SUPPLY"
      displayName="4.5 V to 40 V"
      symbolName="rail_up"
      schX={-2.8}
      schY={1.8}
    />
    <capacitor
      name="CSUPPLY"
      displayName="C(SUPPLY)"
      capacitance="1uF"
      footprint="0402"
      schX={-2.8}
      schY={0.6}
      schOrientation="vertical"
    />
    <schematicsymbol
      name="PWM"
      displayName="PWM"
      symbolName="testpoint_left"
      schX={-2.8}
      schY={-0.35}
    />
    <resistor
      name="RSNS"
      displayName="R(SNS)"
      resistance="1ohm"
      footprint="0402"
      schX={2}
      schY={0.8}
      schOrientation="vertical"
    />
    <capacitor
      name="COUT"
      displayName="C(OUT)"
      capacitance="100nF"
      footprint="0402"
      schX={3.9}
      schY={0.65}
      schOrientation="horizontal"
    />
    <led
      name="LED1"
      displayName="LED1"
      color="white"
      footprint="0603"
      schX={2.2}
      schY={-0.55}
      schRotation={0}
    />
    <led
      name="LED2"
      displayName="LED2"
      color="white"
      footprint="0603"
      schX={3.5}
      schY={-0.55}
      schRotation={0}
    />
    <led
      name="LED3"
      displayName="LED3"
      color="white"
      footprint="0603"
      schX={4.8}
      schY={-0.55}
      schRotation={0}
    />

    <schematicsymbol
      name="GND_SUPPLY"
      displayName=""
      symbolName="digital_ground_up"
      schX={-2.8}
      schY={-0.3}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-1.6}
    />
    <schematicsymbol
      name="GND_RETURN"
      displayName=""
      symbolName="digital_ground_up"
      schX={5.7}
      schY={-0.55}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={["GND_SUPPLY.1", "GND_DEVICE.1", "GND_RETURN.1"]}
    />

    <trace path={[".SUPPLY > .1", ".CSUPPLY > .pin1", ".U1 > .pin3"]} />
    <trace from=".SUPPLY > .1" to=".RSNS > .pin1" />
    <trace from=".RSNS > .pin2" to=".U1 > .pin4" />
    <trace from=".PWM > .1" to=".U1 > .pin2" />
    <trace path={[".U1 > .pin5", ".COUT > .pin1", ".LED1 > .anode"]} />
    <trace from=".LED1 > .cathode" to=".LED2 > .anode" />
    <trace from=".LED2 > .cathode" to=".LED3 > .anode" />
    <trace path={[".LED3 > .cathode", ".COUT > .pin2", ".GND_RETURN > .1"]} />

    <trace from=".CSUPPLY > .pin2" to=".GND_SUPPLY > .1" />
    <trace from=".U1 > .pin1" to=".GND_DEVICE > .1" />
  </board>
);

export default TPS92612_LinearLedDriver;
