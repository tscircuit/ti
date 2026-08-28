import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { LM4060A33EDBZR } from "../chips/LM4060A33EDBZR.circuit.tsx";

/**
 * Datasheet-derived LM4060A33 3.3 V reference application.
 * Topology and placement follow LM4060 Figure 9-1, including the MCU load.
 * 74 ohms is the calculated maximum RS in Section 9.2.1.2, and the 1 uF load
 * capacitor is the tested Figure 9-3 case.
 * This is not a TIDEP-0092 board section and has no editable board coordinates.
 */
export const PrecisionVoltageReference_LM4060A33 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schMaxTraceDistance="100mm" {...props}>
    <net name="GND" isGroundNet />
    <port name="V5_IN" />
    <port name="VREF_3V3" />

    <resistor
      name="R1"
      displayName="R_S"
      resistance="74ohm"
      footprint="0402"
      schX={-3}
      schY={0.7}
      schOrientation="vertical"
    />
    <LM4060A33EDBZR name="U1" schX={-3} schY={-0.98} />
    <schematicsymbol
      name="U1_SCHEMATIC"
      displayName="U1"
      chipRef=".U1"
      symbolName="zener_diode_vert"
      schX={-3}
      schY={-0.98}
      connections={{
        1: ".U1 > .ANODE",
        2: ".U1 > .CATHODE",
      }}
    />
    <capacitor
      name="C1"
      displayName="C_L"
      capacitance="1uF"
      footprint="0402"
      schX={0}
      schY={-1.2}
      schOrientation="vertical"
    />

    <group
      name="MCU"
      showAsSchematicBox
      schTitle="MCU"
      schWidth={2}
      schHeight={1.5}
      schX={3.3}
      schY={-0.55}
      schPinArrangement={{
        topSide: { pins: ["REF", "VDD"], direction: "left-to-right" },
        bottomSide: { pins: ["GND"], direction: "left-to-right" },
      }}
    >
      <port name="REF" direction="up" />
      <port name="VDD" direction="up" />
      <port name="GND" direction="down" schPinLabelFontSize={0.001} />
    </group>

    <trace
      name="V5_INPUT"
      from=".V5_IN"
      to=".R1 > .pin1"
      schDisplayLabel="V_S = 5V"
    />
    <trace name="VREF_R_TO_U1" from=".R1 > .pin2" to=".U1 > .CATHODE" />
    <trace name="VREF_U1_TO_C1" from=".U1 > .CATHODE" to=".C1 > .pin1" />
    <trace name="VREF_C1_TO_MCU_REF" from=".C1 > .pin1" to=".MCU > .REF" />
    <trace name="VREF_MCU_REF_TO_VDD" from=".MCU > .REF" to=".MCU > .VDD" />
    <trace
      name="VREF_OUTPUT"
      from=".U1 > .CATHODE"
      to=".VREF_3V3"
      schDisplayLabel="V_R = 3.3V"
    />

    <trace name="GND_U1_TO_C1" from=".U1 > .ANODE" to=".C1 > .pin2" />
    <trace name="GND_C1_TO_MCU" from=".C1 > .pin2" to=".MCU > .GND" />

    <netlabel
      net="GND"
      connection="U1.ANODE"
      schX={-3}
      schY={-2.05}
      anchorSide="top"
    />
  </subcircuit>
);

export default PrecisionVoltageReference_LM4060A33;
