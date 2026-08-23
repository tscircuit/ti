import "tscircuit";
import { OPA320SAIDBVR } from "../lib/chips/OPA320SAIDBVR.tsx";

/**
 * TI OPA320 datasheet (SBOS513F), Figure 45:
 * "Second-Order, Butterworth, 500-kHz, Low-Pass Filter"
 * https://www.ti.com/document-viewer/OPA320/datasheet/application-and-implementation#SBOS5132327
 * https://www.ti.com/ods/images/SBOS513F/ai_2order_lopass_filt_bos513.gif
 *
 * The physical OPA320S is projected as the op-amp triangle used by TI. The
 * shutdown input is electrically held at V+ but omitted from the drawing,
 * matching the simplified TI signal-path figure.
 */
export const OPA320_SecondOrderLowPassFilter = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <OPA320SAIDBVR name="U1" noSchematicRepresentation />
    <schematicsymbol
      name="U1_OPAMP"
      displayName="U1"
      chipRef=".U1"
      symbolName="opamp_no_power_right"
      schX={1.25}
      schY={0}
      connections={{
        inp1: ".U1 > .pin3",
        inp2: ".U1 > .pin4",
        out: ".U1 > .pin1",
      }}
    />

    <resistor
      name="R1"
      resistance="549ohm"
      footprint="0402"
      schX={-2.8}
      schY={0.35}
      schOrientation="horizontal"
    />
    <resistor
      name="R2"
      resistance="1.24k"
      footprint="0402"
      schX={-0.75}
      schY={0.35}
      schOrientation="horizontal"
    />
    <resistor
      name="R3"
      resistance="549ohm"
      footprint="0402"
      schX={-0.2}
      schY={1.85}
      schOrientation="horizontal"
    />
    <capacitor
      name="C1"
      capacitance="1nF"
      footprint="0402"
      schX={-1.75}
      schY={-0.65}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="150pF"
      footprint="0402"
      schX={0.35}
      schY={1.05}
      schOrientation="horizontal"
    />

    <schematicsymbol
      name="VIN"
      displayName="VIN"
      symbolName="testpoint_left"
      schX={-4.2}
      schY={0.35}
    />
    <schematicsymbol
      name="VOUT"
      displayName="VOUT"
      symbolName="testpoint_right"
      schX={3.15}
      schY={0}
    />
    <schematicsymbol
      name="GND_C1"
      displayName=""
      symbolName="digital_ground_up"
      schX={-1.75}
      schY={-1.55}
    />
    <schematicsymbol
      name="GND_INP"
      displayName=""
      symbolName="digital_ground_up"
      schX={0.15}
      schY={-1.2}
    />
    <net name="GND" isGroundNet connectsTo={["GND_C1.1", "GND_INP.1"]} />
    <net name="V_POS" connectsTo={["U1.pin5", "U1.pin6"]} />
    <trace from=".VIN > .1" to=".R1 > .pin1" />
    <trace path={[".R1 > .pin2", ".R2 > .pin1", ".C1 > .pin1"]} />
    <trace from=".C1 > .pin2" to=".GND_C1 > .1" />
    <trace from=".R2 > .pin2" to=".U1_OPAMP > .inp2" />
    <trace from=".U1_OPAMP > .inp1" to=".GND_INP > .1" />
    <trace from=".U1_OPAMP > .out" to=".VOUT > .1" />
    <trace from=".R3 > .pin2" to=".U1_OPAMP > .out" />
    <trace from=".C2 > .pin2" to=".U1_OPAMP > .out" />
    <trace from=".R3 > .pin1" to=".R1 > .pin2" />
    <trace from=".C2 > .pin1" to=".R2 > .pin2" />
  </board>
);

export default OPA320_SecondOrderLowPassFilter;
