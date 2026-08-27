import "tscircuit";
import { SMPP2_03 } from "../chips/SMPP2_03.circuit.tsx";
import { TIDA010266InlineNetPorts } from "./TIDA010266InlineNetPorts.tsx";
import type { TIDA010266SectionedSubcircuitProps } from "./TIDA010266.types.ts";

/** TIDA-010266 U7/R22 Omron bridge-pressure-sensor stage. */
export const PressureSensor_2SMPP03_TIDA010266 = (
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
      <SMPP2_03
        name="U7"
        schSectionName={props.schSectionName}
        schX={0}
        schY={0}
        connections={{
          VOUT_POS: "net.BRIDGE_POS",
          VOUT_NEG: "net.BRIDGE_NEG",
          GND: "net.IBIAS_FB",
        }}
      />
      <resistor
        name="R22"
        schSectionName={props.schSectionName}
        resistance="2.49k"
        tolerance="0.1%"
        footprint="0603"
        schX={3.8}
        schY={-2.4}
        schOrientation="vertical"
        connections={{ pin1: "net.IBIAS_FB", pin2: "net.GND" }}
      />
      <TIDA010266InlineNetPorts
        originX={originX}
        originY={originY}
        ports={[
          {
            name: "SENSOR_DRIVE",
            connectsTo: [".U7 > .ICC", ".U7 > .N_SUB"],
            schX: -3,
            schY: 1,
            direction: "left",
          },
          {
            name: "BRIDGE_POS",
            connectsTo: ".U7 > .VOUT_POS",
            schX: 3,
            schY: 1,
            direction: "right",
          },
          {
            name: "BRIDGE_NEG",
            connectsTo: ".U7 > .VOUT_NEG",
            schX: 3,
            schY: 0,
            direction: "right",
          },
          {
            name: "IBIAS_FB",
            connectsTo: [".U7 > .GND", ".R22 > .pin1"],
            schX: 3,
            schY: -1.4,
            direction: "right",
          },
          {
            name: "GND",
            connectsTo: ".R22 > .pin2",
            schX: 3.8,
            schY: -3.5,
            direction: "down",
          },
        ]}
      />
    </subcircuit>
  );
};

export default PressureSensor_2SMPP03_TIDA010266;
