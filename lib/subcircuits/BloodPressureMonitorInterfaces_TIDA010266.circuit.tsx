import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TIDA010266InlineNetPorts } from "./TIDA010266InlineNetPorts.tsx";

const throughHoleTestPoint = {
  footprintVariant: "through_hole" as const,
  holeDiameter: "1mm",
  padDiameter: "1.8mm",
  doNotPlace: true,
};

export type BloodPressureMonitorInterfaces_TIDA010266Props = SubcircuitProps & {
  schSectionName?: string;
  inputSectionName?: string;
  connectorSectionName?: string;
  jumperSectionName?: string;
  testPointSectionName?: string;
  inaFilterSectionName?: string;
};

/** TIDA-010266 power, UART/GPIO, selection jumpers, and seven test points. */
export const BloodPressureMonitorInterfaces_TIDA010266 = ({
  inputSectionName,
  connectorSectionName,
  jumperSectionName,
  testPointSectionName,
  inaFilterSectionName,
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
        schX={10}
        schY={1.5}
        schWidth="1.2mm"
        schHeight="1.2mm"
        schPinArrangement={{
          leftSide: {
            pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
            direction: "top-to-bottom",
          },
        }}
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
        schX={10}
        schY={-5.8}
        schWidth="1.2mm"
        schHeight="2.2mm"
        schPinArrangement={{
          leftSide: {
            pins: [
              "pin1",
              "pin2",
              "pin3",
              "pin4",
              "pin5",
              "pin6",
              "pin7",
              "pin8",
              "pin9",
              "pin10",
            ],
            direction: "top-to-bottom",
          },
        }}
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
        schX={-25}
        schY={-4.6}
        schWidth="1.8mm"
        schHeight="1.8mm"
        schPinArrangement={{
          rightSide: {
            pins: ["pin3", "pin2", "pin1"],
            direction: "top-to-bottom",
          },
        }}
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
        schX={-15}
        schY={-4.6}
        schWidth="1.8mm"
        schHeight="1.8mm"
        schPinArrangement={{
          rightSide: {
            pins: ["pin3", "pin2", "pin1"],
            direction: "top-to-bottom",
          },
        }}
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
        schX={-25}
        schY={-7.2}
        schWidth="1.8mm"
        schHeight="1.8mm"
        schPinArrangement={{
          rightSide: {
            pins: ["pin3", "pin2", "pin1"],
            direction: "top-to-bottom",
          },
        }}
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
      <schematictext
        text="For MSPM0 INA + LMV324A Filter: Short pins 1-2"
        schX={-30.5}
        schY={-8.5}
        anchor="left"
        fontSize={0.22}
        color="#000000"
      />
      <schematictext
        text="For INA350 + LMV324A Filter: Short pins 2-3"
        schX={-30.5}
        schY={-9.2}
        anchor="left"
        fontSize={0.22}
        color="#000000"
      />
      <connector
        name="J10"
        schSectionName={inaFilterSectionName ?? props.schSectionName}
        manufacturerPartNumber="61300311121"
        footprint="pinrow3"
        schX={-23}
        schY={-11.5}
        schWidth="0.8mm"
        schHeight="1.5mm"
        schPinArrangement={{
          rightSide: {
            pins: ["pin3", "pin2", "pin1"],
            direction: "top-to-bottom",
          },
        }}
        pinLabels={{ pin1: ["GND"], pin2: ["INA_GS"], pin3: ["V3_3"] }}
        connections={{ pin1: "net.GND", pin3: "net.V3_3" }}
      />
      <port
        name="INA_IN_NEG_PORT"
        schX={originX - 23.8}
        schY={originY - 8}
        direction="right"
      />
      <trace
        from=".J8 > .INA_IN_NEG"
        to=".INA_IN_NEG_PORT"
        schDisplayLabel="INA_IN_NEG"
      />
      <port
        name="INA_GS_PORT"
        schX={originX - 21.8}
        schY={originY - 11.5}
        direction="right"
      />
      <trace from=".J10 > .INA_GS" to=".INA_GS_PORT" schDisplayLabel="INA_GS" />
      <netlabel net="GND" connectsTo=".J1 > .GND" anchorSide="bottom" />
      <netlabel net="GND" connectsTo=".J3 > .GND" anchorSide="top" />
      <netlabel net="GND" connectsTo=".J10 > .GND" anchorSide="top" />
      <netlabel net="GND" connectsTo=".TP6 > .pin1" anchorSide="top" />
      <netlabel net="GND" connectsTo=".TP7 > .pin1" anchorSide="top" />

      <testpoint
        {...throughHoleTestPoint}
        name="TP1"
        schSectionName={testPointSectionName ?? props.schSectionName}
        manufacturerPartNumber="5000"
        schX={-6}
        schY={-4.2}
        connections={{ pin1: "net.VIN" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP2"
        schSectionName={testPointSectionName ?? props.schSectionName}
        manufacturerPartNumber="5117"
        schX={6.5}
        schY={-5.4}
        connections={{ pin1: "net.PRESSURE" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP3"
        schSectionName={testPointSectionName ?? props.schSectionName}
        manufacturerPartNumber="5000"
        schX={-6}
        schY={-5.4}
        connections={{ pin1: "net.V3_3" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP4"
        schSectionName={testPointSectionName ?? props.schSectionName}
        manufacturerPartNumber="5000"
        schX={-6}
        schY={-6.6}
        connections={{ pin1: "net.VREF_2_5" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP5"
        schSectionName={testPointSectionName ?? props.schSectionName}
        manufacturerPartNumber="5117"
        schX={6.5}
        schY={-7.8}
        connections={{ pin1: "net.OSCILLATIONS" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP6"
        schSectionName={testPointSectionName ?? props.schSectionName}
        manufacturerPartNumber="5001"
        schX={-6}
        schY={-7.8}
        connections={{ pin1: "net.GND" }}
      />
      <testpoint
        {...throughHoleTestPoint}
        name="TP7"
        schSectionName={testPointSectionName ?? props.schSectionName}
        manufacturerPartNumber="5001"
        schX={-6}
        schY={-9}
        connections={{ pin1: "net.GND" }}
      />
      <TIDA010266InlineNetPorts
        originX={originX}
        originY={originY}
        ports={[
          {
            name: "V_EXT",
            connectsTo: [".J1 > .V_EXT", ".J4 > .V_EXT"],
            inlineLabelConnectsTo: false,
            schX: -31,
            schY: 3.4,
            direction: "left",
          },
          {
            name: "VIN",
            connectsTo: [".J4 > .VIN", ".TP1 > .pin1"],
            inlineLabelConnectsTo: ".TP1 > .pin1",
            schX: -31,
            schY: 2.3,
            direction: "left",
          },
          {
            name: "V3_3",
            connectsTo: [".J10 > .V3_3", ".TP3 > .pin1"],
            schX: -7.2,
            schY: -5.4,
            direction: "left",
          },
          {
            name: "VREF_2_5",
            connectsTo: ".TP4 > .pin1",
            schX: -7.2,
            schY: -6.6,
            direction: "left",
          },
          {
            name: "PRESSURE",
            connectsTo: [".J6 > .PRESSURE", ".TP2 > .pin1"],
            schX: 5.3,
            schY: -5.4,
            direction: "right",
          },
          {
            name: "OSCILLATIONS",
            connectsTo: ".TP5 > .pin1",
            schX: 5.3,
            schY: -7.8,
            direction: "right",
          },
          {
            name: "BRIDGE_POS",
            connectsTo: ".J5 > .BRIDGE_POS",
            schX: -26.2,
            schY: -4.6,
            direction: "left",
          },
          {
            name: "BRIDGE_NEG",
            connectsTo: ".J8 > .BRIDGE_NEG",
            schX: -26.2,
            schY: -7.2,
            direction: "left",
          },
          {
            name: "INA_IN_POS",
            connectsTo: ".J5 > .INA_IN_POS",
            schX: -26.2,
            schY: -5.4,
            direction: "left",
          },
          {
            name: "INA_OUT",
            connectsTo: ".J6 > .INA_OUT",
            schX: -16.2,
            schY: -5.4,
            direction: "left",
          },
          {
            name: "OPA0_IN0_POS",
            connectsTo: ".J8 > .OPA0_IN0_POS",
            schX: -26.2,
            schY: -6.4,
            direction: "left",
          },
          {
            name: "OPA1_IN0_POS",
            connectsTo: ".J5 > .OPA1_IN0_POS",
            schX: -26.2,
            schY: -3.8,
            direction: "left",
          },
          {
            name: "OPA1_OUT",
            connectsTo: ".J6 > .OPA1_OUT",
            schX: -16.2,
            schY: -3.8,
            direction: "left",
          },
          {
            name: "UART_RTS",
            connectsTo: ".J3 > .UART_RTS",
            schX: 7.2,
            schY: 2.5,
            direction: "left",
          },
          {
            name: "UART_RX",
            connectsTo: ".J3 > .UART_RX",
            schX: 7.2,
            schY: 2,
            direction: "left",
          },
          {
            name: "UART_TX",
            connectsTo: ".J3 > .UART_TX",
            schX: 7.2,
            schY: 1.5,
            direction: "left",
          },
          {
            name: "UART_CTS",
            connectsTo: ".J3 > .UART_CTS",
            schX: 7.2,
            schY: 0.5,
            direction: "left",
          },
          {
            name: "SDA",
            connectsTo: ".J7 > .SDA",
            schX: 7.2,
            schY: -3.55,
            direction: "left",
          },
          {
            name: "SCL",
            connectsTo: ".J7 > .SCL",
            schX: 7.2,
            schY: -4.05,
            direction: "left",
          },
          {
            name: "SPI0_CS",
            connectsTo: ".J7 > .SPI0_CS",
            schX: 7.2,
            schY: -4.55,
            direction: "left",
          },
          {
            name: "PA3",
            connectsTo: ".J7 > .PA3",
            schX: 7.2,
            schY: -5.05,
            direction: "left",
          },
          {
            name: "SPI0_POCI",
            connectsTo: ".J7 > .SPI0_POCI",
            schX: 7.2,
            schY: -5.55,
            direction: "left",
          },
          {
            name: "SPI0_PICO",
            connectsTo: ".J7 > .SPI0_PICO",
            schX: 7.2,
            schY: -6.05,
            direction: "left",
          },
          {
            name: "SPI_SCLK",
            connectsTo: ".J7 > .SPI_SCLK",
            schX: 7.2,
            schY: -6.55,
            direction: "left",
          },
          {
            name: "PA7",
            connectsTo: ".J7 > .PA7",
            schX: 7.2,
            schY: -7.05,
            direction: "left",
          },
          {
            name: "PA10",
            connectsTo: ".J7 > .PA10",
            schX: 7.2,
            schY: -7.55,
            direction: "left",
          },
          {
            name: "PA11",
            connectsTo: ".J7 > .PA11",
            schX: 7.2,
            schY: -8.05,
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
            inlineLabelConnectsTo: false,
            schX: -6,
            schY: -10,
            direction: "down",
          },
        ]}
      />
    </subcircuit>
  );
};

export default BloodPressureMonitorInterfaces_TIDA010266;
