import "tscircuit";
import { TPS61165DRVR } from "../lib/chips/TPS61165DRVR.tsx";

/**
 * TI TPS61165 datasheet (SLVS790E), front-page "Typical Application":
 * https://www.ti.com/lit/ds/symlink/tps61165.pdf#page=1
 * Figure asset: https://www.ti.com/ods/images/SLVS790E/typ_app_lvs790.gif
 */
export const TPS61165_WhiteLedDriver = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <TPS61165DRVR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={2.2}
      schHeight={2.8}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [6, 5, 2] },
        rightSide: { direction: "top-to-bottom", pins: [4, 1] },
        bottomSide: { direction: "left-to-right", pins: [3, 7] },
      }}
    />

    <schematicsymbol
      name="VIN"
      displayName="VIN 5 V"
      symbolName="testpoint_left"
      schX={-4.7}
      schY={1.55}
    />
    <capacitor
      name="C1"
      capacitance="4.7uF"
      footprint="0402"
      schX={-3.5}
      schY={0.8}
      schOrientation="vertical"
    />
    <inductor
      name="L1"
      inductance="10uH"
      footprint="0603"
      schX={-1.7}
      schY={1.55}
      schOrientation="horizontal"
    />
    <schematicsymbol
      name="CTRL"
      displayName="ON/OFF · Dimming"
      symbolName="testpoint_left"
      schX={-3.3}
      schY={-0.1}
    />
    <capacitor
      name="CCOMP"
      displayName="CCOMP"
      capacitance="220nF"
      footprint="0402"
      schX={-2.2}
      schY={-1.2}
      schOrientation="vertical"
    />
    <diode name="D1" footprint="sod123" schX={2} schY={1.55} schRotation={0} />
    <capacitor
      name="C2"
      capacitance="1uF"
      footprint="0402"
      schX={3.2}
      schY={0.9}
      schOrientation="vertical"
    />
    <led
      name="LED1"
      displayName="LED1"
      color="white"
      footprint="0603"
      schX={4.6}
      schY={0.95}
      schRotation={270}
    />
    <led
      name="LED2"
      displayName="LED2"
      color="white"
      footprint="0603"
      schX={4.6}
      schY={-0.25}
      schRotation={270}
    />
    <led
      name="LED3"
      displayName="LED3"
      color="white"
      footprint="0603"
      schX={4.6}
      schY={-1.45}
      schRotation={270}
    />
    <resistor
      name="RSET"
      displayName="RSET · 350 mA"
      resistance="0.57ohm"
      footprint="0402"
      schX={4.6}
      schY={-2.55}
      schOrientation="vertical"
    />

    <schematicsymbol
      name="GND_INPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={-3.5}
      schY={-0.8}
    />
    <schematicsymbol
      name="GND_COMP"
      displayName=""
      symbolName="digital_ground_up"
      schX={-2.2}
      schY={-2.1}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-1.9}
    />
    <schematicsymbol
      name="GND_OUTPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={3.2}
      schY={0}
    />
    <schematicsymbol
      name="GND_LED"
      displayName=""
      symbolName="digital_ground_up"
      schX={4.6}
      schY={-3.45}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "GND_INPUT.1",
        "GND_COMP.1",
        "GND_DEVICE.1",
        "GND_OUTPUT.1",
        "GND_LED.1",
      ]}
    />

    <trace path={[".VIN > .1", ".C1 > .pin1", ".U1 > .pin6"]} />
    <trace from=".VIN > .1" to=".L1 > .pin1" />
    <trace path={[".L1 > .pin2", ".U1 > .pin4", ".D1 > .pin1"]} />
    <trace path={[".D1 > .pin2", ".C2 > .pin1", ".LED1 > .anode"]} />
    <trace from=".LED1 > .cathode" to=".LED2 > .anode" />
    <trace from=".LED2 > .cathode" to=".LED3 > .anode" />
    <trace path={[".LED3 > .cathode", ".U1 > .pin1", ".RSET > .pin1"]} />
    <trace from=".CTRL > .1" to=".U1 > .pin5" />
    <trace from=".U1 > .pin2" to=".CCOMP > .pin1" />

    <trace from=".C1 > .pin2" to=".GND_INPUT > .1" />
    <trace from=".CCOMP > .pin2" to=".GND_COMP > .1" />
    <trace path={[".U1 > .pin3", ".U1 > .pin7", ".GND_DEVICE > .1"]} />
    <trace from=".C2 > .pin2" to=".GND_OUTPUT > .1" />
    <trace from=".RSET > .pin2" to=".GND_LED > .1" />
  </board>
);

export default TPS61165_WhiteLedDriver;
