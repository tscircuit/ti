import { DRV8833 } from "../chips/DRV8833";
import type { SubcircuitProps } from "@tscircuit/props";

export const MotorDriver_DRV8833 = (props: SubcircuitProps) => (
  <subcircuit width={100} height={100}>
    <DRV8833 schX={0} schY={0} name={props.name || "U1"} />
    <trace from=".U1 > .GND" to="net.GND" />
    <trace from=".U1 > .BIN1" to="net.IN1" />
    <trace from=".U1 > .AIN1" to="net.IN1" />
    <trace from=".U1 > .BIN2" to="net.IN2" />
    <trace from=".U1 > .AIN2" to="net.IN2" />
    <trace from=".U1 > .VM" to="net.VM" />
    <resistor
      schX={3}
      schY={-1.8}
      name="R1"
      footprint="0603"
      resistance="200"
      schRotation={-90}
    />
    <trace from=".U1 > .BISEN" to=".R1 > .pin1" />
    <trace from="net.GND" to=".R1 > .pin2" />
    <trace from=".U1 > .AISEN" to=".R1 > .pin1" />
    <capacitor
      schX={4}
      schY={-1.8}
      name="C2"
      footprint="0603"
      capacitance="2.2uF"
      schRotation={-90}
    />
    <trace from=".U1 > .VINT" to=".C2 > .pin1" />
    <trace from="net.GND" to=".C2 > .pin2" />
    <capacitor
      schX={0.75}
      schY={2.75}
      name="C4"
      footprint="0805"
      capacitance="10uF"
      schRotation={-90}
    />
    <trace from="net.GND" to=".C4 > .pin2" />
    <trace from="net.VM" to=".C4 > .pin1" />
    <capacitor
      schX={1.5}
      schY={2.75}
      name="C1"
      footprint="0402"
      capacitance="0.01uF"
      schRotation={-90}
    />
    <trace from="net.VM" to=".C1 > .pin1" />
    <trace from=".U1 > .VCP" to=".C1 > .pin2" />

    <chip
      name="Motor"
      footprint={"pinrow2"}
      schX={4}
      schY={0.8}
      schWidth={0.75}
    />
    <trace from=".U1 > .AOUT1" to=".Motor > .pin1" />
    <trace from=".U1 > .BOUT1" to=".Motor > .pin1" />

    <trace from=".Motor > .pin2" to=".U1 > .BOUT2" />
    <trace from=".Motor > .pin2" to=".U1 > .AOUT2" schDisplayLabel="BOUT" />
  </subcircuit>
);

export default MotorDriver_DRV8833;
