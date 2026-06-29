import { BQ25895RTWR } from "../chips/BQ25895RTWR";
import type { SubcircuitProps } from "@tscircuit/props";

export const BatteryManagement_BQ25895 = (props: SubcircuitProps) => (
  <subcircuit schMaxTraceDistance={20} width={100} height={100}>
    <BQ25895RTWR
      name={props.name || "U1"}
      schX={0}
      schY={0}
      schWidth={2.6}
      schHeight={7.5}
      showPinAliases={false}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "PMID",
            "VBUS",
            "D_POS",
            "D_NEG",
            "ILIM",
            "STAT",
            "SDA",
            "SCL",
            "INT",
            "OTG",
            "CE",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SW1", "BTST", "REGN", "PGND1", "SYS1", "BAT1", "QON", "TS"],
        },
      }}
      schPinStyle={{
        PMID: { marginBottom: 0.9 },
        VBUS: { marginBottom: 0.55 },
        D_POS: { marginBottom: 0.05 },
        D_NEG: { marginBottom: 0.35 },
        ILIM: { marginBottom: 0.7 },
        STAT: { marginBottom: 0.45 },
        SDA: { marginBottom: 0.05 },
        SCL: { marginBottom: 0.05 },
        INT: { marginBottom: 0.05 },
        OTG: { marginBottom: 0.05 },
        SW1: { marginBottom: 0.99 },
        BTST: { marginBottom: 0.05 },
        REGN: { marginBottom: 0.5 },
        PGND1: { marginBottom: 0.6 },
        SYS1: { marginBottom: 0.45 },
        BAT1: { marginBottom: 0.45 },
        QON: { marginBottom: 0.95 },
      }}
      connections={{
        pin17: "net.GND",
        pin18: "net.GND",
        pin24: "net.GND",
        pin25: "net.GND",
      }}
    />

    <chip
      name="J1"
      manufacturerPartNumber="USB Input"
      footprint="pinrow4"
      pinLabels={{
        pin1: "VBUS",
        pin2: "D_POS",
        pin3: "D_NEG",
        pin4: "GND",
      }}
      schX={-10.8}
      schY={1.4}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      connections={{ pin4: "net.GND" }}
    />

    <schematictext
      text="Input 3.9V-14V at 3A"
      schX={-9.8}
      schY={2.7}
      fontSize={0.18}
      anchor="center"
    />
    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0603"
      schX={-6.0}
      schY={1.45}
      schOrientation="vertical"
      connections={{ pin2: "net.GND" }}
    />

    <chip
      name="J2"
      manufacturerPartNumber="Phone OTG"
      footprint="pinrow2"
      pinLabels={{
        pin1: "5V",
        pin2: "GND",
      }}
      schX={-3.5}
      schY={4.05}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2"],
        },
      }}
      connections={{ pin2: "net.GND" }}
    />

    <schematictext
      text="5V at 2.4A OTG"
      schX={-3.45}
      schY={4.85}
      fontSize={0.18}
      anchor="center"
    />
    <capacitor
      name="C2"
      capacitance="40uF"
      footprint="0805"
      schX={-2.25}
      schY={3.15}
      schRotation={90}
      connections={{ pin2: "net.GND" }}
    />

    <resistor
      name="R1"
      resistance="260"
      footprint="0603"
      schX={-2.5}
      schY={-0.05}
      schRotation={180}
      connections={{ pin2: "net.GND" }}
    />

    <chip
      name="J3"
      manufacturerPartNumber="Host"
      footprint="pinrow6"
      pinLabels={{
        pin1: "VREF",
        pin2: "SDA",
        pin3: "SCL",
        pin4: "INT",
        pin5: "OTG",
        pin6: "CE",
      }}
      schX={-10.8}
      schY={-3.25}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
        },
      }}
      connections={{
        pin1: "net.VREF",
      }}
    />

    <resistor
      name="R2"
      resistance="10k"
      footprint="0603"
      schX={-8.0}
      schY={-2.35}
      schOrientation="vertical"
      connections={{ pin1: "net.VREF" }}
    />
    <resistor
      name="R3"
      resistance="10k"
      footprint="0603"
      schX={-6.9}
      schY={-2.35}
      schOrientation="vertical"
      connections={{ pin1: "net.VREF" }}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="0603"
      schX={-5.8}
      schY={-2.35}
      schOrientation="vertical"
      connections={{ pin1: "net.VREF" }}
    />

    <resistor
      name="R5"
      resistance="2.2k"
      footprint="0603"
      schX={-4.65}
      schY={-0.75}
      schOrientation="vertical"
    />
    <led
      name="D1"
      color="yellow"
      footprint="0603"
      schX={-4.65}
      schY={-1.9}
      schOrientation="vertical"
    />

    <capacitor
      name="C3"
      capacitance="47nF"
      footprint="0603"
      schX={2.85}
      schY={2.45}
      schOrientation="vertical"
    />
    <capacitor
      name="C4"
      capacitance="4.7uF"
      footprint="0603"
      schX={3.75}
      schY={1.15}
      schRotation={-90}
      connections={{ pin2: "net.GND" }}
    />
    <inductor
      name="L1"
      inductance="2.2uH"
      footprint="0603"
      schX={4.35}
      schY={3.25}
      schOrientation="horizontal"
    />
    <capacitor
      name="C5"
      capacitance="10uF"
      footprint="0603"
      schX={6.15}
      schY={2.45}
      schOrientation="vertical"
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      capacitance="10uF"
      footprint="0603"
      schX={7.45}
      schY={2.45}
      schOrientation="vertical"
      connections={{ pin2: "net.GND" }}
    />
    <schematictext
      text="SYS 3.5V-4.5V"
      schX={6.65}
      schY={3.85}
      fontSize={0.18}
      anchor="center"
    />

    <chip
      name="BT1"
      manufacturerPartNumber="Battery"
      footprint="pinrow2"
      pinLabels={{
        pin1: "BAT_POS",
        pin2: "GND",
      }}
      schX={10.15}
      schY={-0.35}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2"],
        },
      }}
      connections={{ pin2: "net.GND" }}
    />
    <schematictext
      text="Ichg=5A"
      schX={6.7}
      schY={0.35}
      fontSize={0.18}
      anchor="center"
    />
    <capacitor
      name="C7"
      capacitance="10uF"
      footprint="0603"
      schX={7.7}
      schY={-0.75}
      schOrientation="vertical"
      connections={{ pin2: "net.GND" }}
    />

    <chip
      name="SW1"
      manufacturerPartNumber="Optional QON Pushbutton"
      footprint="pinrow2"
      pinLabels={{
        pin1: "QON",
        pin2: "GND",
      }}
      schX={9.1}
      schY={-2.2}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2"],
        },
      }}
      connections={{ pin2: "net.GND" }}
    />

    <resistor
      name="R6"
      resistance="5.23k"
      footprint="0603"
      schX={4.45}
      schY={-4.05}
      schOrientation="vertical"
    />
    <resistor
      name="R7"
      resistance="30.1k"
      footprint="0603"
      schX={4.45}
      schY={-5.5}
      schOrientation="vertical"
      connections={{ pin2: "net.GND" }}
    />
    <resistor
      name="RT1"
      resistance="10k"
      footprint="0603"
      schX={5.65}
      schY={-5.5}
      schOrientation="vertical"
      connections={{ pin2: "net.GND" }}
    />
    <schematictext
      text="10k NTC"
      schX={6.35}
      schY={-5.5}
      fontSize={0.16}
      anchor="center"
    />

    <trace from="J1.pin1" to="C1.pin1" />
    <trace from="C1.pin1" to="U1.VBUS" />
    <trace from="J1.pin2" to="U1.D_POS" />
    <trace from="J1.pin3" to="U1.D_NEG" />

    <trace from="J2.pin1" to="C2.pin1" />
    <trace from="C2.pin1" to="U1.PMID" />

    <trace from="R1.pin1" to="U1.ILIM" />

    <trace from="J3.pin2" to="R2.pin2" />
    <trace from="R2.pin2" to="U1.SDA" />
    <trace from="J3.pin3" to="R3.pin2" />
    <trace from="R3.pin2" to="U1.SCL" />
    <trace from="J3.pin4" to="R4.pin2" />
    <trace from="R4.pin2" to="U1.INT" />
    <trace from="J3.pin5" to="U1.OTG" />
    <trace from="J3.pin6" to="U1.CE" />

    <trace from="R5.pin1" to="L1.pin2" />
    <trace from="R5.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="U1.STAT" />

    <trace from="U1.SW1" to="L1.pin1" />
    <trace from="U1.SW2" to="L1.pin1" />
    <trace from="C3.pin1" to="L1.pin1" />
    <trace from="C3.pin2" to="U1.BTST" />
    <trace from="U1.REGN" to="C4.pin1" />
    <trace from="C4.pin1" to="R6.pin1" />
    <trace from="L1.pin2" to="C5.pin1" />
    <trace from="C5.pin1" to="C6.pin1" />
    <trace from="L1.pin2" to="U1.SYS1" />
    <trace from="L1.pin2" to="U1.SYS2" />

    <trace from="BT1.pin1" to="C7.pin1" />
    <trace from="C7.pin1" to="U1.BAT1" />
    <trace from="C7.pin1" to="U1.BAT2" />

    <trace from="SW1.pin1" to="U1.QON" />

    <trace from="R6.pin2" to="R7.pin1" />
    <trace from="R6.pin2" to="RT1.pin1" />
    <trace from="R6.pin2" to="U1.TS" />
  </subcircuit>
);

export default BatteryManagement_BQ25895;
