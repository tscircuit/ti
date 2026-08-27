import "tscircuit";
import type { TIDA010266SectionedSubcircuitProps } from "./TIDA010266.types.ts";
import { TIDA010266InlineNetPorts } from "./TIDA010266InlineNetPorts.tsx";

/** TIDA-010266 R11-R15 network around the MSPM0 internal OPA0/OPA1. */
export const IntegratedInstrumentationAmplifier_MSPM0_TIDA010266 = (
  props: TIDA010266SectionedSubcircuitProps,
) => {
  const originX = typeof props.schX === "number" ? props.schX : 0;
  const originY = typeof props.schY === "number" ? props.schY : 0;

  return (
    <subcircuit
      {...props}
      schTraceAutoLabelEnabled={false}
      schMaxTraceDistance="1000mm"
    >
      <group
        name="OPA0"
        showAsSchematicBox
        schTitle="Internal OPA0"
        schWidth={2.6}
        schHeight={2.4}
        schX={-2.2}
        schY={0}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["inverting_input", "non_inverting_input"],
          },
          rightSide: { direction: "top-to-bottom", pins: ["output"] },
        }}
      >
        <port name="inverting_input" direction="left" />
        <port name="non_inverting_input" direction="left" />
        <port name="output" direction="right" />
      </group>
      <trace from=".OPA0 > .inverting_input" to="net.OPA0_IN0_NEG" />
      <trace from=".OPA0 > .non_inverting_input" to="net.OPA0_IN0_POS" />

      <group
        name="OPA1"
        showAsSchematicBox
        schTitle="Internal OPA1"
        schWidth={2.6}
        schHeight={2.4}
        schX={3.2}
        schY={0}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["inverting_input", "non_inverting_input"],
          },
          rightSide: { direction: "top-to-bottom", pins: ["output"] },
        }}
      >
        <port name="inverting_input" direction="left" />
        <port name="non_inverting_input" direction="left" />
        <port name="output" direction="right" />
      </group>
      <trace from=".OPA1 > .inverting_input" to="net.OPA1_IN0_NEG" />
      <trace from=".OPA1 > .output" to="net.OPA1_OUT" />
      <port
        name="OPA0_OUT_PORT"
        schX={originX + 6.5}
        schY={originY}
        direction="right"
      />
      <trace
        from=".OPA0 > .output"
        to=".OPA0_OUT_PORT"
        schDisplayLabel="OPA0_OUT"
      />
      <port
        name="OPA0_OUT_R12"
        schX={originX - 5}
        schY={originY + 1.6}
        direction="left"
      />
      <trace
        from=".R12 > .pin2"
        to=".OPA0_OUT_R12"
        schDisplayLabel="OPA0_OUT"
      />
      <port
        name="OPA0_OUT_R15"
        schX={originX - 2.5}
        schY={originY + 1.4}
        direction="left"
      />
      <trace
        from=".R15 > .pin1"
        to=".OPA0_OUT_R15"
        schDisplayLabel="OPA0_OUT"
      />
      <port
        name="OPA1_IN0_POS_PORT"
        schX={originX + 7}
        schY={originY - 0.6}
        direction="right"
      />
      <trace
        from=".OPA1 > .non_inverting_input"
        to=".OPA1_IN0_POS_PORT"
        schDisplayLabel="OPA1_IN0_POS"
      />
      <resistor
        name="R14"
        schSectionName={props.schSectionName}
        resistance="20k"
        footprint="0603"
        schX={-5.4}
        schY={0.8}
        connections={{ pin1: "net.VREF_1_25", pin2: "net.OPA0_IN0_NEG" }}
      />
      <resistor
        name="R12"
        schSectionName={props.schSectionName}
        resistance="499"
        footprint="0603"
        schX={-2.2}
        schY={1.6}
        connections={{ pin1: "net.OPA0_IN0_NEG" }}
      />
      <resistor
        name="R11"
        schSectionName={props.schSectionName}
        resistance="20k"
        footprint="0603"
        schX={0.5}
        schY={2.6}
        connections={{ pin1: "net.OPA0_IN0_NEG", pin2: "net.OPA1_IN0_NEG" }}
      />
      <resistor
        name="R15"
        schSectionName={props.schSectionName}
        resistance="499"
        footprint="0603"
        schX={0.5}
        schY={1.4}
        connections={{ pin2: "net.OPA1_IN0_NEG" }}
      />
      <resistor
        name="R13"
        schSectionName={props.schSectionName}
        resistance="20k"
        footprint="0603"
        schX={4.6}
        schY={1.6}
        connections={{ pin1: "net.OPA1_IN0_NEG", pin2: "net.OPA1_OUT" }}
      />
      <TIDA010266InlineNetPorts
        originX={originX}
        originY={originY}
        ports={[
          {
            name: "VREF_1_25",
            connectsTo: ".R14 > .pin1",
            schX: -6.5,
            schY: 0.8,
            direction: "left",
          },
          {
            name: "OPA0_IN0_NEG",
            connectsTo: [
              ".OPA0 > .inverting_input",
              ".R14 > .pin2",
              ".R12 > .pin1",
              ".R11 > .pin1",
            ],
            schX: -3.8,
            schY: 0.6,
            direction: "left",
          },
          {
            name: "OPA0_IN0_POS",
            connectsTo: ".OPA0 > .non_inverting_input",
            schX: -3.8,
            schY: -0.6,
            direction: "left",
          },
          {
            name: "OPA1_IN0_NEG",
            connectsTo: [
              ".OPA1 > .inverting_input",
              ".R11 > .pin2",
              ".R15 > .pin2",
              ".R13 > .pin1",
            ],
            schX: 1.6,
            schY: 0.6,
            direction: "left",
          },
          {
            name: "OPA1_OUT",
            connectsTo: [".OPA1 > .output", ".R13 > .pin2"],
            schX: 5,
            schY: 0,
            direction: "right",
          },
        ]}
      />
    </subcircuit>
  );
};

export default IntegratedInstrumentationAmplifier_MSPM0_TIDA010266;
