import type { SubcircuitProps } from "@tscircuit/props";
import { DRV8210DSGR } from "../chips/DRV8210DSGR.circuit.tsx";

/**
 * DRV8210 DSG full-bridge PWM application.
 * MODE is low; VCC is separate from VM and requires its own bypass capacitor.
 * Controller and BDC are connectable schematic-only placeholders, not PCB parts.
 * Add system-sized VM bulk capacitance at the motor supply connection.
 * https://www.ti.com/document-viewer/DRV8210/datasheet
 */
export const MotorDriver_DRV8210 = (props: SubcircuitProps) => (
  <subcircuit {...props}>
    <DRV8210DSGR name="U1" pcbX={0} pcbY={0} schX={0} schY={0} />

    {/* External devices are annotations; labeled nets are the connection points. */}
    <schematicbox
      name="Controller"
      title="Controller"
      titleInside
      titleAlignment="top_center"
      titleFontSize={0.22}
      width={2}
      height={2.2}
      schX={-5}
      schY={0.1}
    />
    <netlabel
      net="PWM1"
      schX={-4}
      schY={0.2}
      anchorSide="right"
      connectsTo=".U1 > .IN1"
    />
    <netlabel
      net="PWM2"
      schX={-4}
      schY={0}
      anchorSide="right"
      connectsTo=".U1 > .IN2"
    />
    <schematicline x1={-5} y1={1.2} x2={-5} y2={1.6} strokeWidth={0.02} />
    <schematicline x1={-5.14} y1={1.6} x2={-4.86} y2={1.6} strokeWidth={0.02} />
    <schematictext text="VCC" schX={-5} schY={1.8} fontSize={0.18} />
    <schematicline x1={-5} y1={-1} x2={-5} y2={-1.4} strokeWidth={0.02} />
    <schematicline
      x1={-5.14}
      y1={-1.4}
      x2={-4.86}
      y2={-1.4}
      strokeWidth={0.02}
    />
    <schematictext text="GND" schX={-5} schY={-1.6} fontSize={0.18} />

    <schematicbox
      name="BDC"
      title="BDC"
      titleInside
      titleAlignment="top_center"
      titleFontSize={0.22}
      width={1.6}
      height={1.5}
      schX={5}
      schY={-0.1}
    />
    <netlabel
      net="OUT1"
      schX={4.2}
      schY={0}
      anchorSide="left"
      connectsTo=".U1 > .OUT1"
    />
    <netlabel
      net="OUT2"
      schX={4.2}
      schY={-0.2}
      anchorSide="left"
      connectsTo=".U1 > .OUT2"
    />

    {/* DSG pin 7 selects PWM mode when grounded; pin 9 is the exposed pad. */}
    <trace name="PWM_MODE" from=".U1 > .MODE" to="net.GND" />
    <trace name="DRIVER_GND" from=".U1 > .GND" to="net.GND" />
    <trace name="THERMAL_PAD_GND" from=".U1 > .EP" to="net.GND" />
    <trace name="LOGIC_SUPPLY" from=".U1 > .VCC" to="net.VCC" />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={-0.8}
      pcbY={-2.5}
      schX={3}
      schY={1.8}
      schRotation={-90}
    />
    <trace name="MOTOR_SUPPLY" from=".U1 > .VM" to=".C1 > .pin1" />
    <trace name="VM_BYPASS_SUPPLY" from=".C1 > .pin1" to="net.VM" />
    <trace name="VM_BYPASS_GND" from=".C1 > .pin2" to="net.GND" />

    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={-0.8}
      pcbY={2.5}
      schX={-2}
      schY={2.4}
      schRotation={-90}
    />
    <trace name="VCC_BYPASS_SUPPLY" from=".C2 > .pin1" to="net.VCC" />
    <trace name="VCC_BYPASS_GND" from=".C2 > .pin2" to="net.GND" />
  </subcircuit>
);

export default MotorDriver_DRV8210;
