import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TIDA010266InlineNetPorts } from "./TIDA010266InlineNetPorts.tsx";

const throughHoleTestPoint = {
  footprintVariant: "through_hole" as const,
  holeDiameter: "1mm",
  padDiameter: "1.8mm",
  doNotPlace: true,
};

const InvertedGroundGlyph = ({ x, y }: { x: number; y: number }) => (
  <>
    <schematicline
      x1={x - 0.09}
      y1={y + 0.24}
      x2={x + 0.09}
      y2={y + 0.24}
      strokeWidth={0.035}
      color="#840000"
    />
    <schematicline
      x1={x - 0.21}
      y1={y + 0.12}
      x2={x + 0.21}
      y2={y + 0.12}
      strokeWidth={0.035}
      color="#840000"
    />
    <schematicline
      x1={x - 0.32}
      y1={y}
      x2={x + 0.32}
      y2={y}
      strokeWidth={0.035}
      color="#840000"
    />
  </>
);

export type BloodPressureMonitorInterfaces_TIDA010266Props = SubcircuitProps & {
  schSectionName?: string;
  inputSectionName?: string;
  connectorSectionName?: string;
  jumperSectionName?: string;
};

/** TIDA-010266 power, UART/GPIO, selection jumpers, and seven test points. */
export const BloodPressureMonitorInterfaces_TIDA010266 = ({
  inputSectionName,
  connectorSectionName,
  jumperSectionName,
  ...props
}: BloodPressureMonitorInterfaces_TIDA010266Props) => {
  const originX = typeof props.schX === "number" ? props.schX : 0;
  const originY = typeof props.schY === "number" ? props.schY : 0;

  return (
    <subcircuit
      {...props}
      schTraceAutoLabelEnabled={false}
      schMaxTraceDistance="1000mm"
    >
      <connector
        name="J1"
        schSectionName={inputSectionName ?? props.schSectionName}
        manufacturerPartNumber="691101710002"
        footprint="pinrow2_rows1_p5mm"
        schX={-30}
        schY={2.8}
        schWidth="0.8mm"
        schHeight="1.1mm"
        schPinArrangement={{
          rightSide: { pins: ["pin1", "pin2"], direction: "top-to-bottom" },
        }}
        schPinStyle={{ pin2: { marginTop: 0.15 } }}
        pinLabels={{ pin1: ["GND"], pin2: ["V_EXT"] }}
        connections={{ pin1: "net.GND", pin2: "net.V_EXT" }}
      />
      <connector
        name="J4"
        schSectionName={inputSectionName ?? props.schSectionName}
        manufacturerPartNumber="61300211121"
        footprint="pinrow2"
        schX={-30}
        schY={0.8}
        schWidth="0.8mm"
        schHeight="1.1mm"
        schPinArrangement={{
          rightSide: { pins: ["pin2", "pin1"], direction: "top-to-bottom" },
        }}
        schPinStyle={{ pin1: { marginTop: 0.15 } }}
        pinLabels={{ pin1: ["VIN"], pin2: ["V_EXT"] }}
        connections={{ pin1: "net.VIN", pin2: "net.V_EXT" }}
      />
      <connector
        name="J3"
        schSectionName={connectorSectionName ?? props.schSectionName}
        manufacturerPartNumber="90121-0766"
        footprint="pinrow6"
        schX={-1}
        schY={4.2}
        pinLabels={{
          pin1: ["UART_RTS"],
          pin2: ["UART_RX"],
          pin3: ["UART_TX"],
          pin4: ["NC"],
          pin5: ["UART_CTS"],
          pin6: ["GND"],
        }}
        connections={{
          pin1: "net.UART_RTS",
          pin2: "net.UART_RX",
          pin3: "net.UART_TX",
          pin5: "net.UART_CTS",
          pin6: "net.GND",
        }}
        pinAttributes={{ NC: { doNotConnect: true } }}
      />
      <connector
        name="J7"
        schSectionName={connectorSectionName ?? props.schSectionName}
        manufacturerPartNumber="TSW-110-08-G-S"
        footprint="pinrow10"
        schX={5}
        schY={3.5}
        pinLabels={{
          pin1: ["SDA"],
          pin2: ["SCL"],
          pin3: ["SPI0_CS"],
          pin4: ["PA3"],
          pin5: ["SPI0_POCI"],
          pin6: ["SPI0_PICO"],
          pin7: ["SPI_SCLK"],
          pin8: ["PA7"],
          pin9: ["PA10"],
          pin10: ["PA11"],
        }}
        connections={{
          pin1: "net.SDA",
          pin2: "net.SCL",
          pin3: "net.SPI0_CS",
          pin4: "net.PA3",
          pin5: "net.SPI0_POCI",
          pin6: "net.SPI0_PICO",
          pin7: "net.SPI_SCLK",
          pin8: "net.PA7",
          pin9: "net.PA10",
          pin10: "net.PA11",
        }}
      />

      <connector
        name="J5"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="61300311121"
        footprint="pinrow3"
        schX={-7}
        schY={-0.4}
        pinLabels={{
          pin1: ["OPA1_IN0_POS"],
          pin2: ["BRIDGE_POS"],
          pin3: ["INA_IN_POS"],
        }}
        connections={{
          pin1: "net.OPA1_IN0_POS",
          pin2: "net.BRIDGE_POS",
          pin3: "net.INA_IN_POS",
        }}
      />
      <connector
        name="J6"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="61300311121"
        footprint="pinrow3"
        schX={-2.5}
        schY={-0.4}
        pinLabels={{
          pin1: ["OPA1_OUT"],
          pin2: ["PRESSURE"],
          pin3: ["INA_OUT"],
        }}
        connections={{
          pin1: "net.OPA1_OUT",
          pin2: "net.PRESSURE",
          pin3: "net.INA_OUT",
        }}
      />
      <connector
        name="J8"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="61300311121"
        footprint="pinrow3"
        schX={2}
        schY={-0.4}
        pinLabels={{
          pin1: ["OPA0_IN0_POS"],
          pin2: ["BRIDGE_NEG"],
          pin3: ["INA_IN_NEG"],
        }}
        connections={{
          pin1: "net.OPA0_IN0_POS",
          pin2: "net.BRIDGE_NEG",
        }}
      />
      <connector
        name="J10"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="61300311121"
        footprint="pinrow3"
        schX={6.5}
        schY={-0.4}
        pinLabels={{ pin1: ["GND"], pin2: ["INA_GS"], pin3: ["V3_3"] }}
        connections={{ pin1: "net.GND", pin3: "net.V3_3" }}
      />
      <port
        name="INA_IN_NEG_PORT"
        schX={originX + 7.5}
        schY={originY - 2}
        direction="right"
      />
      <trace
        from=".J8 > .INA_IN_NEG"
        to=".INA_IN_NEG_PORT"
        schDisplayLabel="INA_IN_NEG"
      />
      <port
        name="INA_GS_PORT"
        schX={originX + 9.5}
        schY={originY - 1.2}
        direction="right"
      />
      <trace from=".J10 > .INA_GS" to=".INA_GS_PORT" schDisplayLabel="INA_GS" />
      <netlabel net="GND" connectsTo=".J1 > .GND" anchorSide="bottom" />
      <InvertedGroundGlyph x={-29.3} y={3.65} />

      <testpoint
        {...throughHoleTestPoint}
        name="TP1"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="5000"
        schX={-7}
        schY={-3}
        connections={{ pin1: "net.VIN" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP2"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="5117"
        schX={-4.7}
        schY={-3}
        connections={{ pin1: "net.PRESSURE" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP3"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="5000"
        schX={-2.4}
        schY={-3}
        connections={{ pin1: "net.V3_3" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP4"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="5000"
        schX={-0.1}
        schY={-3}
        connections={{ pin1: "net.VREF_2_5" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP5"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="5117"
        schX={2.2}
        schY={-3}
        connections={{ pin1: "net.OSCILLATIONS" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP6"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="5001"
        schX={4.5}
        schY={-3}
        connections={{ pin1: "net.GND" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP7"
        schSectionName={jumperSectionName ?? props.schSectionName}
        manufacturerPartNumber="5001"
        schX={6.8}
        schY={-3}
        connections={{ pin1: "net.GND" }}
      />
      <TIDA010266InlineNetPorts
        originX={originX}
        originY={originY}
        ports={[
          {
            name: "V_EXT",
            connectsTo: [".J1 > .V_EXT", ".J4 > .V_EXT"],
            schX: -31,
            schY: 3.4,
            direction: "left",
          },
          {
            name: "VIN",
            connectsTo: [".J4 > .VIN", ".TP1 > .pin1"],
            schX: -31,
            schY: 2.3,
            direction: "left",
          },
          {
            name: "V3_3",
            connectsTo: [".J10 > .V3_3", ".TP3 > .pin1"],
            schX: 7.5,
            schY: -0.4,
            direction: "right",
          },
          {
            name: "VREF_2_5",
            connectsTo: ".TP4 > .pin1",
            schX: -0.1,
            schY: -4,
            direction: "down",
          },
          {
            name: "PRESSURE",
            connectsTo: [".J6 > .PRESSURE", ".TP2 > .pin1"],
            schX: -3.7,
            schY: -1.2,
            direction: "left",
          },
          {
            name: "OSCILLATIONS",
            connectsTo: ".TP5 > .pin1",
            schX: 2.2,
            schY: -4,
            direction: "down",
          },
          {
            name: "BRIDGE_POS",
            connectsTo: ".J5 > .BRIDGE_POS",
            schX: -8,
            schY: -0.4,
            direction: "left",
          },
          {
            name: "BRIDGE_NEG",
            connectsTo: ".J8 > .BRIDGE_NEG",
            schX: 1,
            schY: -1.2,
            direction: "left",
          },
          {
            name: "INA_IN_POS",
            connectsTo: ".J5 > .INA_IN_POS",
            schX: -8,
            schY: -1.2,
            direction: "left",
          },
          {
            name: "INA_OUT",
            connectsTo: ".J6 > .INA_OUT",
            schX: -3.7,
            schY: -2,
            direction: "left",
          },
          {
            name: "OPA0_IN0_POS",
            connectsTo: ".J8 > .OPA0_IN0_POS",
            schX: 1,
            schY: 0.4,
            direction: "left",
          },
          {
            name: "OPA1_IN0_POS",
            connectsTo: ".J5 > .OPA1_IN0_POS",
            schX: -8,
            schY: 0.4,
            direction: "left",
          },
          {
            name: "OPA1_OUT",
            connectsTo: ".J6 > .OPA1_OUT",
            schX: -3.7,
            schY: 0.4,
            direction: "left",
          },
          {
            name: "UART_RTS",
            connectsTo: ".J3 > .UART_RTS",
            schX: -2.5,
            schY: 5.2,
            direction: "left",
          },
          {
            name: "UART_RX",
            connectsTo: ".J3 > .UART_RX",
            schX: -2.5,
            schY: 4.7,
            direction: "left",
          },
          {
            name: "UART_TX",
            connectsTo: ".J3 > .UART_TX",
            schX: -2.5,
            schY: 4.2,
            direction: "left",
          },
          {
            name: "UART_CTS",
            connectsTo: ".J3 > .UART_CTS",
            schX: -2.5,
            schY: 3.2,
            direction: "left",
          },
          {
            name: "SDA",
            connectsTo: ".J7 > .SDA",
            schX: 3.5,
            schY: 5.7,
            direction: "left",
          },
          {
            name: "SCL",
            connectsTo: ".J7 > .SCL",
            schX: 3.5,
            schY: 5.2,
            direction: "left",
          },
          {
            name: "SPI0_CS",
            connectsTo: ".J7 > .SPI0_CS",
            schX: 3.5,
            schY: 4.7,
            direction: "left",
          },
          {
            name: "PA3",
            connectsTo: ".J7 > .PA3",
            schX: 3.5,
            schY: 4.2,
            direction: "left",
          },
          {
            name: "SPI0_POCI",
            connectsTo: ".J7 > .SPI0_POCI",
            schX: 3.5,
            schY: 3.7,
            direction: "left",
          },
          {
            name: "SPI0_PICO",
            connectsTo: ".J7 > .SPI0_PICO",
            schX: 3.5,
            schY: 3.2,
            direction: "left",
          },
          {
            name: "SPI_SCLK",
            connectsTo: ".J7 > .SPI_SCLK",
            schX: 3.5,
            schY: 2.7,
            direction: "left",
          },
          {
            name: "PA7",
            connectsTo: ".J7 > .PA7",
            schX: 3.5,
            schY: 2.2,
            direction: "left",
          },
          {
            name: "PA10",
            connectsTo: ".J7 > .PA10",
            schX: 3.5,
            schY: 1.7,
            direction: "left",
          },
          {
            name: "PA11",
            connectsTo: ".J7 > .PA11",
            schX: 3.5,
            schY: 1.2,
            direction: "left",
          },
          {
            name: "GND",
            connectsTo: [
              ".J3 > .GND",
              ".J10 > .GND",
              ".TP6 > .pin1",
              ".TP7 > .pin1",
            ],
            schX: 0,
            schY: -4.5,
            direction: "down",
          },
        ]}
      />
    </subcircuit>
  );
};

export default BloodPressureMonitorInterfaces_TIDA010266;
