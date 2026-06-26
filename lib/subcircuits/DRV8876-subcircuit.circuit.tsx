import { DRV8876 } from "../chips/DRV8876";
import type { SubcircuitProps } from "@tscircuit/props";

export const MotorDriver_DRV8876 = (props: SubcircuitProps) => (
  <subcircuit width={100} height={100} {...props}>
    <DRV8876 schX={0} schY={0} name="U1" />
    <trace from=".U1 > .PMODE" to="net.GND" />
    <trace from=".U1 > .GND" to="net.GND" />
    <trace from=".U1 > .PGND" to="net.GND" />
    <trace from=".U1 > .PAD" to="net.GND" />
    <trace from=".U1 > .IMODE" to="net.GND" />
    <trace from=".U1 > .VREF" to="net.VREF" />

    <capacitor
      schX={4}
      schY={-1.15}
      name="C3"
      footprint="0402"
      capacitance="0.1uF"
      schRotation={90}
    />
    <trace to="net.VM" from=".C3 > .pin2" />

    <capacitor
      schX={5}
      schY={-1.15}
      name="C4"
      footprint="1206"
      capacitance="Bulk"
      schRotation={90}
    />
    <trace to="net.VM" from=".C4 > .pin2" />

    <capacitor
      schX={2.5}
      schY={1.2}
      name="C1"
      footprint="0402"
      capacitance="0.022uF"
    />
    <trace from=".U1 > .CPL" to=".C1 > .pin1" />
    <trace from=".U1 > .CPH" to=".C1 > .pin2" />

    <capacitor
      schX={2.5}
      schY={-0.4}
      name="C2"
      footprint="0402"
      capacitance="0.1uF"
    />
    <trace from=".U1 > .VCP" to=".C2 > .pin1" />
    <trace to="net.VM" from=".C2 > .pin2" />
    <trace from=".U1 > .VM" to="net.VM" />

    <resistor
      schX={-5}
      schY={-3.5}
      name="R1"
      footprint="0402"
      resistance="100"
      schRotation={90}
    />
    <resistor
      schX={-5.5}
      schY={-5}
      name="R2"
      footprint="0402"
      resistance="100"
      schRotation={90}
    />
    <trace to=".R1 > .pin2" from="net.VCC" />
    <trace to=".R1 > .pin1" from="net.VREF" />
    <trace to=".R2 > .pin1" from="net.GND" />
    <trace to=".R2 > .pin2" from="net.VREF" />

    <resistor
      schX={-4}
      schY={-2}
      name="R4"
      footprint="0402"
      resistance="100"
      schRotation={90}
    />
    <trace to=".R4 > .pin2" from="net.VCC" />
    <trace to=".R4 > .pin1" from="net.nFAULT" />

    <resistor
      schX={-3}
      schY={-2}
      name="R3"
      footprint="0402"
      resistance="100"
      schRotation={90}
    />
    <trace to=".R3 > .pin1" from="net.GND" />
    <trace to=".R3 > .pin2" from="net.ADC" />

    <chip footprint={"pinrow5"} schX={-6.5} schY={1.2} name="Controller" />
    <trace to=".Controller > .PWM" from=".U1 > .EN" />
    <trace to=".Controller > .pin2" from=".U1 > .PH" />
    <trace to=".Controller > .pin3" from=".U1 > .nSLEEP" />
    <trace to=".Controller > .pin4" from="net.nFAULT" />
    <trace to=".U1 > .nFAULT" from="net.nFAULT" />
    <trace to=".Controller > .ADC" from="net.ADC" />
    <trace to=".U1 > .IPROPI" from="net.ADC" />

    <chip schX={1} schY={-4.5} footprint={"pinrow2"} name="Motor" />
    <trace to=".U1 > .OUT1" from=".Motor > .pin1" />
    <trace to=".U1 > .OUT2" from=".Motor > .pin2" />
  </subcircuit>
);

export default MotorDriver_DRV8876;
