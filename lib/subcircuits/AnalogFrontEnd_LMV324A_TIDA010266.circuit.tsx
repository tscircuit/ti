import "tscircuit";
import { LMV324AIPWR } from "../chips/LMV324AIPWR.circuit.tsx";
import { TIDA010266InlineNetPorts } from "./TIDA010266InlineNetPorts.tsx";
import type { TIDA010266SectionedSubcircuitProps } from "./TIDA010266.types.ts";

export type AnalogFrontEnd_LMV324A_TIDA010266Props =
  TIDA010266SectionedSubcircuitProps & {
    inputReferenceSectionName?: string;
    pressureSectionName?: string;
  };

/**
 * TIDA-010266 U2 quad-amplifier functions: 1.25 V reference buffer,
 * two-stage oscillometric band-pass filter, and sensor current-bias loop.
 */
export const AnalogFrontEnd_LMV324A_TIDA010266 = ({
  inputReferenceSectionName,
  pressureSectionName,
  ...props
}: AnalogFrontEnd_LMV324A_TIDA010266Props) => {
  const originX = typeof props.schX === "number" ? props.schX : 0;
  const originY = typeof props.schY === "number" ? props.schY : 0;

  return (
    <subcircuit
      {...props}
      schTraceAutoLabelEnabled={false}
      schMaxTraceDistance="1000mm"
    >
      <LMV324AIPWR
        name="U2"
        noSchematicRepresentation
        connections={{
          V_POS: "net.V3_3",
          V_NEG: "net.GND",
          IN_POS_A: "net.VREF_DIV",
          IN_NEG_B: "net.FILTER_1_INV",
          OUT_C: "net.OSCILLATIONS",
          IN_NEG_C: "net.FILTER_2_INV",
          OUT_D: "net.SENSOR_DRIVE",
          IN_NEG_D: "net.IBIAS_FB",
          IN_POS_D: "net.IBIAS_SET",
        }}
      />

      {/* U2 is one physical quad op-amp with four schematic units. */}
      <schematicsymbol
        name="U2A"
        displayName="U2A"
        chipRef=".U2"
        symbolName="opamp_no_power_left"
        schRotation={180}
        schSectionName={inputReferenceSectionName ?? props.schSectionName}
        schX={-8.5}
        schY={15}
        connections={{
          inp1: ".U2 > .IN_POS_A",
          inp2: ".U2 > .IN_NEG_A",
          out: ".U2 > .OUT_A",
        }}
      />
      {/* The released drawing flips the input order and shows the shared
          package power pins on unit A. These primitives complete that IEC
          presentation while U2 remains the sole electrical/PCB component. */}
      <schematicline
        x1={-8.53}
        y1={15.22}
        x2={-8.53}
        y2={16.05}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematictext
        text="3.3V"
        schX={-8.53}
        schY={16.25}
        fontSize={0.18}
        color="#840000"
      />
      <schematictext
        text="4"
        schX={-8.7}
        schY={15.42}
        fontSize={0.14}
        color="#840000"
      />
      <schematicline
        x1={-8.53}
        y1={14.78}
        x2={-8.53}
        y2={14.15}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicline
        x1={-8.88}
        y1={14.15}
        x2={-8.18}
        y2={14.15}
        strokeWidth={0.035}
        color="#840000"
      />
      <schematicline
        x1={-8.77}
        y1={14.03}
        x2={-8.29}
        y2={14.03}
        strokeWidth={0.035}
        color="#840000"
      />
      <schematicline
        x1={-8.64}
        y1={13.91}
        x2={-8.42}
        y2={13.91}
        strokeWidth={0.035}
        color="#840000"
      />
      <schematictext
        text="11"
        schX={-8.72}
        schY={14.62}
        fontSize={0.14}
        color="#840000"
      />
      <schematictext
        text="GND"
        schX={-8.53}
        schY={13.7}
        fontSize={0.18}
        color="#840000"
      />
      <schematicline
        x1={-8}
        y1={15}
        x2={-7.6}
        y2={15}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicline
        x1={-7.6}
        y1={15}
        x2={-7.6}
        y2={15.8}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicline
        x1={-7.6}
        y1={15.8}
        x2={-9.25}
        y2={15.8}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicline
        x1={-9.25}
        y1={15.8}
        x2={-9.25}
        y2={15.14}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicline
        x1={-9.25}
        y1={15.14}
        x2={-9}
        y2={15.14}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicsymbol
        name="U2B"
        displayName="U2B"
        chipRef=".U2"
        symbolName="opamp_no_power_right"
        schSectionName={props.schSectionName}
        schX={0}
        schY={0}
        connections={{
          inp1: ".U2 > .IN_POS_B",
          inp2: ".U2 > .IN_NEG_B",
          out: ".U2 > .OUT_B",
        }}
      />
      <schematicsymbol
        name="U2C"
        displayName="U2C"
        chipRef=".U2"
        symbolName="opamp_no_power_right"
        schSectionName={props.schSectionName}
        schX={8}
        schY={0}
        connections={{
          inp1: ".U2 > .IN_POS_C",
          inp2: ".U2 > .IN_NEG_C",
          out: ".U2 > .OUT_C",
        }}
      />
      <schematicsymbol
        name="U2D"
        displayName="U2D"
        chipRef=".U2"
        symbolName="opamp_no_power_left"
        schRotation={180}
        schSectionName={pressureSectionName ?? props.schSectionName}
        schX={-19}
        schY={-16.5}
        connections={{
          inp1: ".U2 > .IN_POS_D",
          inp2: ".U2 > .IN_NEG_D",
          out: ".U2 > .OUT_D",
        }}
      />
      <schematicline
        x1={-19.03}
        y1={-16.28}
        x2={-19.03}
        y2={-15.55}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematictext
        text="3.3V"
        schX={-19.03}
        schY={-15.35}
        fontSize={0.18}
        color="#840000"
      />
      <schematicline
        x1={-19.03}
        y1={-16.72}
        x2={-19.03}
        y2={-17.3}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicline
        x1={-19.38}
        y1={-17.3}
        x2={-18.68}
        y2={-17.3}
        strokeWidth={0.035}
        color="#840000"
      />
      <schematicline
        x1={-19.27}
        y1={-17.42}
        x2={-18.79}
        y2={-17.42}
        strokeWidth={0.035}
        color="#840000"
      />
      <schematicline
        x1={-19.14}
        y1={-17.54}
        x2={-18.92}
        y2={-17.54}
        strokeWidth={0.035}
        color="#840000"
      />
      <schematictext
        text="GND"
        schX={-19.03}
        schY={-17.78}
        fontSize={0.18}
        color="#840000"
      />

      <resistor
        name="R4"
        schSectionName={inputReferenceSectionName ?? props.schSectionName}
        resistance="10k"
        footprint="0603"
        schX={-11.5}
        schY={15.8}
        schOrientation="vertical"
        connections={{ pin1: "net.VREF_2_5", pin2: "net.VREF_DIV" }}
      />
      <resistor
        name="R6"
        schSectionName={inputReferenceSectionName ?? props.schSectionName}
        resistance="10k"
        footprint="0603"
        schX={-11.5}
        schY={14.2}
        schOrientation="vertical"
        connections={{ pin1: "net.VREF_DIV", pin2: "net.GND" }}
      />
      <netlabel net="GND" connectsTo=".R6 > .pin2" anchorSide="top" />
      <schematicline
        x1={-11.82}
        y1={13.2}
        x2={-11.18}
        y2={13.2}
        strokeWidth={0.035}
        color="#840000"
      />
      <schematicline
        x1={-11.71}
        y1={13.08}
        x2={-11.29}
        y2={13.08}
        strokeWidth={0.035}
        color="#840000"
      />
      <schematicline
        x1={-11.59}
        y1={12.96}
        x2={-11.41}
        y2={12.96}
        strokeWidth={0.035}
        color="#840000"
      />

      <capacitor
        name="C11"
        schSectionName={props.schSectionName}
        capacitance="4.7uF"
        maxVoltageRating="16V"
        footprint="0603"
        schX={-7}
        schY={0.6}
        connections={{ pin1: "net.PRESSURE", pin2: "net.FILTER_1_HP" }}
      />
      <resistor
        name="R16"
        schSectionName={props.schSectionName}
        resistance="20k"
        footprint="0603"
        schX={-5}
        schY={0.6}
        connections={{ pin1: "net.FILTER_1_HP", pin2: "net.FILTER_1_INV" }}
      />
      <resistor
        name="R9"
        schSectionName={props.schSectionName}
        resistance="270k"
        footprint="0603"
        schX={-3.8}
        schY={2.2}
        connections={{ pin1: "net.FILTER_1_INV" }}
      />
      <capacitor
        name="C9"
        schSectionName={props.schSectionName}
        capacitance="100nF"
        maxVoltageRating="25V"
        footprint="0603"
        schX={-3.8}
        schY={1.3}
        connections={{ pin1: "net.FILTER_1_INV" }}
      />

      <capacitor
        name="C12"
        schSectionName={props.schSectionName}
        capacitance="4.7uF"
        maxVoltageRating="16V"
        footprint="0603"
        schX={4.7}
        schY={0.3}
        connections={{}}
      />
      <resistor
        name="R17"
        schSectionName={props.schSectionName}
        resistance="20k"
        footprint="0603"
        schX={6}
        schY={0.6}
        connections={{ pin2: "net.FILTER_2_INV" }}
      />
      <resistor
        name="R10"
        schSectionName={props.schSectionName}
        resistance="270k"
        footprint="0603"
        schX={3.8}
        schY={2.2}
        connections={{ pin1: "net.FILTER_2_INV", pin2: "net.OSCILLATIONS" }}
      />
      <capacitor
        name="C10"
        schSectionName={props.schSectionName}
        capacitance="100nF"
        maxVoltageRating="25V"
        footprint="0603"
        schX={3.8}
        schY={1.3}
        connections={{ pin1: "net.FILTER_2_INV", pin2: "net.OSCILLATIONS" }}
      />

      <resistor
        name="R18"
        schSectionName={pressureSectionName ?? props.schSectionName}
        resistance="45.3k"
        footprint="0603"
        schX={-23}
        schY={-15.8}
        schOrientation="vertical"
        connections={{ pin1: "net.VREF_2_5", pin2: "net.IBIAS_SET" }}
      />
      <resistor
        name="R21"
        schSectionName={pressureSectionName ?? props.schSectionName}
        resistance="4.99k"
        footprint="0603"
        schX={-23}
        schY={-18.2}
        schOrientation="vertical"
        connections={{ pin1: "net.IBIAS_SET", pin2: "net.GND" }}
      />
      <port
        name="SENSOR_DRIVE"
        schX={originX - 18.5}
        schY={originY - 16.5}
        direction="right"
        connectsTo="net.SENSOR_DRIVE"
      />
      <trace from=".U2 > .OUT_D" to=".SENSOR_DRIVE" schDisplayLabel=" " />
      <TIDA010266InlineNetPorts
        originX={originX}
        originY={originY}
        ports={[
          {
            name: "V3_3",
            connectsTo: ".U2 > .V_POS",
            schX: 0,
            schY: 5,
            direction: "up",
          },
          {
            name: "GND",
            connectsTo: [".U2 > .V_NEG", ".R21 > .pin2"],
            schX: 0,
            schY: -5.5,
            direction: "down",
          },
          {
            name: "VREF_2_5",
            connectsTo: [".R4 > .pin1", ".R18 > .pin1"],
            schX: -11.5,
            schY: 16.1,
            direction: "left",
          },
          {
            name: "VREF_1_25",
            connectsTo: [
              ".U2 > .OUT_A",
              ".U2 > .IN_NEG_A",
              ".U2 > .IN_POS_B",
              ".U2 > .IN_POS_C",
            ],
            schX: -8,
            schY: 15,
            direction: "left",
          },
          {
            name: "PRESSURE",
            connectsTo: ".C11 > .pin1",
            schX: -8,
            schY: 0.6,
            direction: "left",
          },
          {
            name: "FILTER_1_HP",
            connectsTo: [".C11 > .pin2", ".R16 > .pin1"],
            schX: -6,
            schY: 0.6,
            direction: "left",
          },
          {
            name: "FILTER_1_INV",
            connectsTo: [
              ".R16 > .pin2",
              ".R9 > .pin1",
              ".C9 > .pin1",
              ".U2 > .IN_NEG_B",
            ],
            schX: -3,
            schY: 1,
            direction: "left",
          },
          {
            name: "FILTER_1_OUT",
            connectsTo: [
              ".U2 > .OUT_B",
              ".R9 > .pin2",
              ".C9 > .pin2",
              ".C12 > .pin1",
            ],
            schX: 2.4,
            schY: 1,
            direction: "right",
          },
          {
            name: "FILTER_2_HP",
            connectsTo: [".C12 > .pin2", ".R17 > .pin1"],
            schX: 5.3,
            schY: 0.3,
            direction: "right",
          },
          {
            name: "FILTER_2_INV",
            connectsTo: [
              ".R17 > .pin2",
              ".R10 > .pin1",
              ".C10 > .pin1",
              ".U2 > .IN_NEG_C",
            ],
            schX: 3,
            schY: 1,
            direction: "right",
          },
          {
            name: "OSCILLATIONS",
            connectsTo: [".U2 > .OUT_C", ".R10 > .pin2", ".C10 > .pin2"],
            schX: 7,
            schY: 1,
            direction: "right",
          },
          {
            name: "IBIAS_FB",
            connectsTo: ".U2 > .IN_NEG_D",
            schX: -19.6,
            schY: -16.4,
            direction: "left",
          },
          {
            name: "IBIAS_SET",
            connectsTo: [".U2 > .IN_POS_D", ".R18 > .pin2", ".R21 > .pin1"],
            schX: -19.6,
            schY: -16.7,
            direction: "left",
          },
        ]}
      />
    </subcircuit>
  );
};

export default AnalogFrontEnd_LMV324A_TIDA010266;
