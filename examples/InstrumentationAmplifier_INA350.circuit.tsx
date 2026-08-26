import { InstrumentationAmplifier_INA350 } from "@tsci/tscircuit.ti";

/** Single-supply INA350 module with a parent-circuit signal/supply header. */
export default ({ gain = 20 }: { gain?: 10 | 20 } = {}) => (
  <board width={18} height={14} minTraceWidth={0.1} nominalTraceWidth={0.1}>
    <InstrumentationAmplifier_INA350 name="Amp" gain={gain} pcbX={2} schX={3} />
    <connector
      name="J1"
      footprint="pinrow5"
      pcbRotation={90}
      pcbX={-5}
      pcbY={0}
      schX={-4}
      schY={0}
      schWidth={1.8}
      schHeight={3.2}
      pinLabels={{
        pin1: "VS",
        pin2: "IN_NEG",
        pin3: "IN_POS",
        pin4: "OUT",
        pin5: "GND",
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VS", "IN_NEG", "IN_POS", "OUT", "GND"],
        },
      }}
      schPinStyle={{
        IN_NEG: { marginTop: 0.3 },
        IN_POS: { marginTop: 0.3 },
        OUT: { marginTop: 0.3 },
        GND: { marginTop: 0.3 },
      }}
    />
    <trace
      name="HEADER_SUPPLY"
      schDisplayLabel="VS"
      from=".J1 > .VS"
      to=".Amp .U1 > .VS"
    />
    <trace
      name="HEADER_INPUT_NEGATIVE"
      schDisplayLabel="IN_NEG"
      from=".J1 > .IN_NEG"
      to=".Amp .U1 > .IN_NEG"
    />
    <trace
      name="HEADER_INPUT_POSITIVE"
      schDisplayLabel="IN_POS"
      from=".J1 > .IN_POS"
      to=".Amp .U1 > .IN_POS"
    />
    <trace
      name="HEADER_OUTPUT"
      schDisplayLabel="OUT"
      from=".J1 > .OUT"
      to=".Amp .U1 > .OUT"
    />
    <trace
      name="HEADER_GROUND"
      schDisplayLabel="GND"
      from=".J1 > .GND"
      to=".Amp .U1 > .V_NEG"
    />
  </board>
);
