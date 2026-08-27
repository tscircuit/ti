import "tscircuit";
import { DRV8210DSGR } from "../chips/DRV8210DSGR.circuit.tsx";
import { TIDA010266InlineNetPorts } from "./TIDA010266InlineNetPorts.tsx";
import type { TIDA010266SectionedSubcircuitProps } from "./TIDA010266.types.ts";

/** TIDA-010266 U6/C14/C15/C16/J9 pump-and-valve driver stage. */
export const MotorDriver_DRV8210_TIDA010266 = (
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
      <DRV8210DSGR
        name="U6"
        schSectionName={props.schSectionName}
        schX={0}
        schY={0}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["IN1", "IN2", "MODE"],
          },
          rightSide: { direction: "top-to-bottom", pins: ["OUT1", "OUT2"] },
          topSide: { direction: "left-to-right", pins: ["VM", "VCC"] },
          bottomSide: { direction: "left-to-right", pins: ["GND", "EP"] },
        }}
        schPinStyle={{
          IN2: { marginTop: 0.3 },
          MODE: { marginTop: 0.3 },
          VCC: { marginLeft: 0.55 },
          OUT2: { marginTop: 0.3 },
          EP: { marginLeft: 0.3 },
        }}
        connections={{
          VM: "net.VIN",
          VCC: "net.V3_3",
          MODE: "net.GND",
          IN1: "net.VALVE_CONTROL",
          IN2: "net.PUMP_CONTROL",
          OUT1: "net.VALVE_OUT",
          OUT2: "net.PUMP_OUT",
          GND: "net.GND",
          EP: "net.GND",
        }}
      />
      <capacitor
        name="C14"
        schSectionName={props.schSectionName}
        capacitance="22uF"
        maxVoltageRating="16V"
        footprint="0603"
        schX={-3.3}
        schY={2.2}
        schOrientation="vertical"
        connections={{ pin1: "net.VIN", pin2: "net.GND" }}
      />
      <capacitor
        name="C15"
        schSectionName={props.schSectionName}
        capacitance="100nF"
        maxVoltageRating="25V"
        footprint="0402"
        schX={-2.1}
        schY={2.2}
        schOrientation="vertical"
        connections={{ pin1: "net.VIN", pin2: "net.GND" }}
      />
      <capacitor
        name="C16"
        schSectionName={props.schSectionName}
        capacitance="100nF"
        maxVoltageRating="25V"
        footprint="0402"
        schX={-3.3}
        schY={-2.4}
        schOrientation="vertical"
        connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
      />
      <connector
        name="J9"
        schSectionName={props.schSectionName}
        manufacturerPartNumber="M22-5330405"
        footprint="pinrow4_rows1_p2mm"
        schX={5.3}
        schY={0}
        pinLabels={{
          pin1: ["GND_1"],
          pin2: ["VALVE_OUT"],
          pin3: ["PUMP_OUT"],
          pin4: ["GND_4"],
        }}
        connections={{
          pin1: "net.GND",
          pin2: "net.VALVE_OUT",
          pin3: "net.PUMP_OUT",
          pin4: "net.GND",
        }}
      />
      <TIDA010266InlineNetPorts
        originX={originX}
        originY={originY}
        ports={[
          {
            name: "VIN",
            connectsTo: [".U6 > .VM", ".C14 > .pin1", ".C15 > .pin1"],
            schX: -2.7,
            schY: 3.2,
            direction: "up",
          },
          {
            name: "V3_3",
            connectsTo: [".U6 > .VCC", ".C16 > .pin1"],
            schX: -1,
            schY: 3.2,
            direction: "up",
          },
          {
            name: "VALVE_CONTROL",
            connectsTo: ".U6 > .IN1",
            schX: -3,
            schY: 0.6,
            direction: "left",
          },
          {
            name: "PUMP_CONTROL",
            connectsTo: ".U6 > .IN2",
            schX: -3,
            schY: -0.2,
            direction: "left",
          },
          {
            name: "VALVE_OUT",
            connectsTo: [".U6 > .OUT1", ".J9 > .VALVE_OUT"],
            schX: 3,
            schY: 0.6,
            direction: "right",
          },
          {
            name: "PUMP_OUT",
            connectsTo: [".U6 > .OUT2", ".J9 > .PUMP_OUT"],
            schX: 3,
            schY: -0.2,
            direction: "right",
          },
          {
            name: "GND",
            connectsTo: [
              ".U6 > .MODE",
              ".U6 > .GND",
              ".U6 > .EP",
              ".C14 > .pin2",
              ".C15 > .pin2",
              ".C16 > .pin2",
              ".J9 > .GND_1",
              ".J9 > .GND_4",
            ],
            schX: 0,
            schY: -3.5,
            direction: "down",
          },
        ]}
      />
    </subcircuit>
  );
};

export default MotorDriver_DRV8210_TIDA010266;
