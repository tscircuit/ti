import "tscircuit";
import { LMV324AIPWR } from "../chips/LMV324AIPWR.circuit.tsx";
import { TIDA010266InlineNetPorts } from "./TIDA010266InlineNetPorts.tsx";
import type { TIDA010266SectionedSubcircuitProps } from "./TIDA010266.types.ts";

const filterOpAmpSymbol = (unitName: "U2B" | "U2C") => (
  <symbol>
    <schematicpath
      points={[
        { x: -1.1, y: 1 },
        { x: 1.1, y: 0 },
        { x: -1.1, y: -1 },
        { x: -1.1, y: 1 },
      ]}
      strokeWidth={0.04}
    />
    <schematictext text="-" schX={-0.82} schY={0.48} fontSize={0.3} />
    <schematictext text="+" schX={-0.82} schY={-0.48} fontSize={0.3} />
    <schematictext text={unitName} schX={1.3} schY={0.6} fontSize={0.22} />
    <schematictext text="LMV324AIPWR" schX={1.3} schY={0.3} fontSize={0.18} />
    <port
      name="pin6"
      pinNumber={6}
      schX={-1.5}
      schY={0.48}
      direction="left"
      schStemLength={0.4}
    />
    <port
      name="pin5"
      pinNumber={5}
      schX={-1.5}
      schY={-0.48}
      direction="left"
      schStemLength={0.4}
    />
    <port
      name="pin7"
      pinNumber={7}
      schX={1.5}
      schY={0}
      direction="right"
      schStemLength={0.4}
    />
    <port
      name="pin4"
      pinNumber={4}
      schX={0}
      schY={1.45}
      direction="up"
      schStemLength={0.45}
    />
    <port
      name="pin11"
      pinNumber={11}
      schX={0}
      schY={-1.45}
      direction="down"
      schStemLength={0.45}
    />
  </symbol>
);

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
        schX={4.5}
        schY={15}
        connections={{
          inp1: ".U2 > .IN_POS_A",
          inp2: ".U2 > .IN_NEG_A",
          out: ".U2 > .OUT_A",
        }}
      />
      {/* The released drawing flips the input order and loops the output back
          to the inverting input. U2 remains the sole electrical/PCB package. */}
      <schematicline
        x1={4.47}
        y1={15.22}
        x2={4.47}
        y2={16.05}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematictext
        text="3.3V"
        schX={4.47}
        schY={16.25}
        fontSize={0.18}
        color="#840000"
      />
      <schematictext
        text="4"
        schX={4.3}
        schY={15.42}
        fontSize={0.14}
        color="#840000"
      />
      <schematicline
        x1={5}
        y1={15}
        x2={5.4}
        y2={15}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicline
        x1={5.4}
        y1={15}
        x2={5.4}
        y2={15.8}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicline
        x1={5.4}
        y1={15.8}
        x2={3.75}
        y2={15.8}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicline
        x1={3.75}
        y1={15.8}
        x2={3.75}
        y2={15.14}
        strokeWidth={0.025}
        color="#008000"
      />
      <schematicline
        x1={3.75}
        y1={15.14}
        x2={4}
        y2={15.14}
        strokeWidth={0.025}
        color="#008000"
      />
      <chip
        name="U2B"
        manufacturerPartNumber="LMV324AIPWR U2B"
        doNotPlace
        schX={0}
        schY={0}
        pinLabels={{
          pin4: "V+",
          pin5: "+",
          pin6: "-",
          pin7: "OUT",
          pin11: "V-",
        }}
        symbol={filterOpAmpSymbol("U2B")}
      />
      <chip
        name="U2C"
        manufacturerPartNumber="LMV324AIPWR U2C"
        doNotPlace
        schX={7}
        schY={0}
        pinLabels={{
          pin4: "V+",
          pin5: "+",
          pin6: "-",
          pin7: "OUT",
          pin11: "V-",
        }}
        symbol={filterOpAmpSymbol("U2C")}
      />
      <netlabel net="V3_3" connectsTo=".U2B > .pin4" inline />
      <netlabel net="GND" connectsTo=".U2B > .pin11" anchorSide="top" />
      <netlabel net="V3_3" connectsTo=".U2C > .pin4" inline />
      <netlabel net="GND" connectsTo=".U2C > .pin11" anchorSide="top" />
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

      <resistor
        name="R4"
        schSectionName={inputReferenceSectionName ?? props.schSectionName}
        resistance="10k"
        footprint="0603"
        schX={1.5}
        schY={15.8}
        schOrientation="vertical"
        connections={{ pin1: "net.VREF_2_5", pin2: "net.VREF_DIV" }}
      />
      <resistor
        name="R6"
        schSectionName={inputReferenceSectionName ?? props.schSectionName}
        resistance="10k"
        footprint="0603"
        schX={1.5}
        schY={14.2}
        schOrientation="vertical"
        connections={{ pin1: "net.VREF_DIV", pin2: "net.GND" }}
      />
      <netlabel net="GND" connectsTo=".R6 > .pin2" anchorSide="top" />

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
        schX={0}
        schY={3.2}
        connections={{ pin1: "net.FILTER_1_INV" }}
      />
      <capacitor
        name="C9"
        schSectionName={props.schSectionName}
        capacitance="100nF"
        maxVoltageRating="25V"
        footprint="0603"
        schX={0}
        schY={2.3}
        connections={{ pin1: "net.FILTER_1_INV" }}
      />

      <capacitor
        name="C12"
        schSectionName={props.schSectionName}
        capacitance="4.7uF"
        maxVoltageRating="16V"
        footprint="0603"
        schX={3.5}
        schY={0.3}
        connections={{}}
      />
      <resistor
        name="R17"
        schSectionName={props.schSectionName}
        resistance="20k"
        footprint="0603"
        schX={4.8}
        schY={0.6}
        connections={{ pin2: "net.FILTER_2_INV" }}
      />
      <resistor
        name="R10"
        schSectionName={props.schSectionName}
        resistance="270k"
        footprint="0603"
        schX={7}
        schY={3.2}
        connections={{ pin1: "net.FILTER_2_INV", pin2: "net.OSCILLATIONS" }}
      />
      <capacitor
        name="C10"
        schSectionName={props.schSectionName}
        capacitance="100nF"
        maxVoltageRating="25V"
        footprint="0603"
        schX={7}
        schY={2.3}
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
            inlineLabelConnectsTo: ".R18 > .pin1",
            schX: 1.5,
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
              ".U2B > .pin5",
              ".U2C > .pin5",
            ],
            inlineLabelConnectsTo: [".U2 > .IN_POS_B", ".U2 > .IN_POS_C"],
            schX: 5,
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
            inlineLabelConnectsTo: ".C11 > .pin2",
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
              ".U2B > .pin6",
            ],
            inlineLabelConnectsTo: ".R16 > .pin2",
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
              ".U2B > .pin7",
            ],
            inlineLabelConnectsTo: ".U2B > .pin7",
            schX: 2.4,
            schY: 1,
            direction: "right",
          },
          {
            name: "FILTER_2_HP",
            connectsTo: [".C12 > .pin2", ".R17 > .pin1"],
            inlineLabelConnectsTo: ".C12 > .pin2",
            schX: 4.2,
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
              ".U2C > .pin6",
            ],
            inlineLabelConnectsTo: ".R17 > .pin2",
            schX: 5.5,
            schY: 1,
            direction: "right",
          },
          {
            name: "OSCILLATIONS",
            connectsTo: [
              ".U2 > .OUT_C",
              ".R10 > .pin2",
              ".C10 > .pin2",
              ".U2C > .pin7",
            ],
            schX: 8.5,
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
