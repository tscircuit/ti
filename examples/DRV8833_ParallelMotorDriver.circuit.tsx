import "tscircuit";
import { DRV8833 } from "../lib/chips/DRV8833.tsx";

/**
 * TI DRV8833 datasheet (SLVSAR1E), Figure 7, "Parallel Mode":
 * https://www.ti.com/lit/ds/symlink/drv8833.pdf#page=12
 */
export const DRV8833_ParallelMotorDriver = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <DRV8833
      name="U1"
      displayName="DRV8833"
      schX={0}
      schY={0}
      schWidth={2.8}
      schHeight={4.4}
    />

    <schematicsymbol
      name="IN1"
      displayName="IN1"
      symbolName="testpoint_left"
      schX={-4}
      schY={1}
    />
    <schematicsymbol
      name="IN2"
      displayName="IN2"
      symbolName="testpoint_left"
      schX={-4}
      schY={0.25}
    />
    <schematicsymbol
      name="NSLEEP"
      displayName="nSLEEP"
      symbolName="testpoint_left"
      schX={-4}
      schY={-0.65}
    />
    <schematicsymbol
      name="VM"
      displayName="VM"
      symbolName="rail_up"
      schX={0}
      schY={3.2}
    />
    <capacitor
      name="C4"
      capacitance="10uF"
      footprint="0805"
      schX={2.4}
      schY={2.3}
      schOrientation="vertical"
      polarized
    />
    <capacitor
      name="C1"
      capacitance="10nF"
      footprint="0402"
      schX={3.5}
      schY={1.8}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="2.2uF"
      footprint="0402"
      schX={3.3}
      schY={-1.2}
      schOrientation="vertical"
    />
    <resistor
      name="R2"
      displayName="RSENSE"
      resistance="0.2ohm"
      footprint="0603"
      schX={2.2}
      schY={-2.25}
      schOrientation="vertical"
    />
    <pinheader
      name="M1"
      displayName="M1 Motor"
      pinCount={2}
      footprint="pinrow2"
      schX={5}
      schY={0.55}
    />
    <schematicsymbol
      name="NFAULT"
      displayName="nFAULT"
      symbolName="testpoint_right"
      schX={4.2}
      schY={-0.25}
    />

    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-3}
    />
    <schematicsymbol
      name="GND_VM"
      displayName=""
      symbolName="digital_ground_up"
      schX={2.4}
      schY={1.4}
    />
    <schematicsymbol
      name="GND_VINT"
      displayName=""
      symbolName="digital_ground_up"
      schX={3.3}
      schY={-2.1}
    />
    <schematicsymbol
      name="GND_SENSE"
      displayName=""
      symbolName="digital_ground_up"
      schX={2.2}
      schY={-3.15}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={["GND_DEVICE.1", "GND_VM.1", "GND_VINT.1", "GND_SENSE.1"]}
    />

    <trace path={[".IN1 > .1", ".U1 > .pin16", ".U1 > .pin9"]} />
    <trace path={[".IN2 > .1", ".U1 > .pin15", ".U1 > .pin10"]} />
    <trace from=".NSLEEP > .1" to=".U1 > .pin1" />
    <trace path={[".VM > .1", ".U1 > .pin12", ".C4 > .pin1", ".C1 > .pin1"]} />
    <trace from=".U1 > .pin11" to=".C1 > .pin2" />
    <trace path={[".U1 > .pin2", ".U1 > .pin7", ".M1 > .pin1"]} />
    <trace path={[".U1 > .pin4", ".U1 > .pin5", ".M1 > .pin2"]} />
    <trace path={[".U1 > .pin14", ".C2 > .pin1"]} />
    <trace path={[".U1 > .pin3", ".U1 > .pin6", ".R2 > .pin1"]} />
    <trace from=".U1 > .pin8" to=".NFAULT > .1" />

    <trace from=".U1 > .pin13" to=".GND_DEVICE > .1" />
    <trace from=".C4 > .pin2" to=".GND_VM > .1" />
    <trace from=".C2 > .pin2" to=".GND_VINT > .1" />
    <trace from=".R2 > .pin2" to=".GND_SENSE > .1" />
  </board>
);

export default DRV8833_ParallelMotorDriver;
