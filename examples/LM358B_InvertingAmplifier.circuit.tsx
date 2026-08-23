import "tscircuit";
import { LM358BIPWR } from "../lib/chips/LM358BIPWR.tsx";

/**
 * TI LM358B datasheet (SLOS068AB), Figure 8-1, "Application Schematic":
 * https://www.ti.com/lit/ds/symlink/lm358b.pdf#page=27
 *
 * TI's worked example uses RI = 10 kOhm and RF = 36 kOhm for a gain of -3.6.
 * The physical device remains the exported LM358BIPWR while a predefined
 * tscircuit op-amp symbol presents its first channel.
 */
export const LM358B_InvertingAmplifier = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <LM358BIPWR name="U1" noSchematicRepresentation />
    <schematicsymbol
      name="U1_OPAMP"
      displayName="U1"
      chipRef=".U1"
      symbolName="opamp_with_power_right"
      schX={0.8}
      schY={0}
      connections={{
        inp1: ".U1 > .pin3",
        inp2: ".U1 > .pin2",
        out: ".U1 > .pin1",
        "V+": ".U1 > .pin8",
        "V-": ".U1 > .pin4",
      }}
    />

    <voltagesource
      name="VIN"
      waveShape="sinewave"
      schX={-3}
      schY={-0.4}
      schRotation={90}
    />
    <resistor
      name="RI"
      resistance="10k"
      footprint="0402"
      schX={-1.2}
      schY={0.25}
      schOrientation="horizontal"
    />
    <resistor
      name="RF"
      resistance="36k"
      footprint="0402"
      schX={0.8}
      schY={2}
      schOrientation="horizontal"
    />

    <schematicsymbol
      name="VSUP_PLUS"
      displayName="Vsup+"
      symbolName="rail_up"
      schX={0.77}
      schY={0.95}
    />
    <schematicsymbol
      name="VOUT"
      displayName="VOUT"
      symbolName="testpoint_right"
      schX={3}
      schY={0}
    />
    <schematicsymbol
      name="GND_SOURCE"
      displayName=""
      symbolName="digital_ground_up"
      schX={-3}
      schY={-1.35}
    />
    <schematicsymbol
      name="GND_INPUT"
      displayName=""
      symbolName="digital_ground_up"
      schX={-0.6}
      schY={-1.15}
    />
    <schematicsymbol
      name="GND_SUPPLY"
      displayName="Vsup-"
      symbolName="digital_ground_up"
      schX={0.65}
      schY={-1.2}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={["GND_SOURCE.pin1", "GND_INPUT.pin1", "GND_SUPPLY.pin1"]}
    />

    <trace from=".VIN > .pin2" to=".RI > .pin1" />
    <trace path={[".RI > .pin2", ".RF > .pin1", ".U1_OPAMP > .inp2"]} />
    <trace path={[".RF > .pin2", ".U1_OPAMP > .out", ".VOUT > .1"]} />
    <trace from=".U1_OPAMP > .inp1" to=".GND_INPUT > .1" />
    <trace from=".VIN > .pin1" to=".GND_SOURCE > .1" />
    <trace from=".U1 > .V_P" to=".VSUP_PLUS > .1" />
    <trace from=".U1_OPAMP > .V-" to=".GND_SUPPLY > .1" />
  </board>
);

export default LM358B_InvertingAmplifier;
