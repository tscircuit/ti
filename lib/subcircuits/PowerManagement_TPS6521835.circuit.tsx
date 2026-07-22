import type { SubcircuitProps } from "@tscircuit/props";

import "tscircuit";

import { TPS6521835 } from "../chips/TPS6521835.circuit.tsx";

export const TPS6521835SimplifiedSchematic = (props: SubcircuitProps) => (
  <subcircuit {...props}>
    <TPS6521835
      name="U1"
      schX={0}
      schY={0}
      connections={{
        pin6: "net.IN_LS3",
        pin15: "net.DCDC4_OUT",
        pin16: "net.PFI",
        pin18: "net.IN_nCC",
        pin19: "net.PGOOD_BU",
        pin21: "net.DCDC5_OUT",
        pin22: "net.DCDC6_OUT",
        pin27: "net.IN_BU",
        pin29: "net.NC",

        pin28: "net.NC",

        pin31: "net.IN_LS1",
        pin32: "net.IN_LS2",
        pin34: "net.GPO2",
        pin35: "net.INT_LDO",
        pin36: "net.IN_BIAS",
        pin38: "net.L3_SW",
        pin39: "net.DCDC3_OUT",
        pin41: "net.DCDC2_OUT",
        pin44: "net.PB",
        pin46: "net.PWR_EN",
        pin47: "net.DCDC1_OUT",
        pin48: "net.L1_SW",
      }}
    />

    <schematictext schX={0} schY={0} text="TPS6521835" fontSize={0.68} />

    <capacitor
      name="C_INT_LDO"
      capacitance="1uF"
      footprint="0402"
      schX={-4}
      schY={5.5}
      schOrientation="vertical"
      connections={{ pin2: "net.GND", pin1: "net.INT_LDO" }}
    />
    <resistor
      name="R_GPO2"
      resistance="100k"
      footprint="0402"
      schX={-2.7}
      schY={5.5}
      schOrientation="vertical"
      connections={{ pin1: "net.VIO", pin2: "U1.pin34" }}
    />

    <capacitor
      name="C_LS2"
      capacitance="10uF"
      footprint="0603"
      schX={-1.8}
      schY={5.5}
      schOrientation="vertical"
      connections={{ pin1: "U1.pin33", pin2: "net.GND" }}
    />

    <capacitor
      name="C_LS1"
      capacitance="10uF"
      footprint="0603"
      schX={0.9}
      schY={5.5}
      schOrientation="vertical"
      connections={{ pin1: "U1.pin30", pin2: "net.GND" }}
    />

    <capacitor
      name="C_IN_BU"
      capacitance="4.7uF"
      footprint="0603"
      schX={2}
      schY={5.5}
      schOrientation="vertical"
      connections={{ pin1: "net.IN_BU", pin2: "net.GND" }}
    />

    <resistor
      name="R_GPIO3"
      resistance="100k"
      footprint="0402"
      schX={1.84}
      schY={4.2}
      schOrientation="vertical"
      connections={{ pin1: "net.VIO", pin2: "U1.pin26" }}
    />

    <resistor
      name="R_CC"
      resistance="10ohm"
      footprint="0402"
      schX={3}
      schY={6.25}
      schOrientation="vertical"
      connections={{ pin2: "U1.pin25" }}
    />
    <battery name="BT1" voltage="3V" schX={4.2} schY={6.45} schRotation={270} />
    <trace from=".BT1 .pin2" to="net.GND" />
    <trace from=".BT1 .pin2" to=".R_CC .pin1" />

    <capacitor
      name="C_CC"
      capacitance="4.7uF"
      footprint="0603"
      schX={4.2}
      schY={4.65}
      schOrientation="vertical"
      connections={{ pin1: "net.CC", pin2: "net.GND" }}
    />

    {/* Left side: DCDC3, nWAKEUP, DCDC2, PB, nINT, PWR_EN and DCDC1 */}
    <capacitor
      name="C_IN_DCDC3"
      capacitance="4.7uF"
      footprint="0603"
      schX={-5.5}
      schY={5.7}
      schOrientation="vertical"
      connections={{ pin2: "U1.pin37", pin1: "net.GND" }}
    />

    <inductor
      name="L_DCDC3"
      inductance="1.5uH"
      schX={-6.9}
      schY={2.5}
      schOrientation="horizontal"
      connections={{ pin2: "net.L3_SW", pin1: "net.DCDC3_OUT" }}
    />
    <capacitor
      name="C_DCDC3"
      capacitance="10uF"
      footprint="0603"
      schX={-7.9}
      schY={3.4}
      schOrientation="vertical"
      connections={{ pin2: "net.DCDC3_OUT", pin1: "net.GND" }}
    />

    <resistor
      name="R_nWAKEUP"
      resistance="100k"
      footprint="0402"
      schX={-7.9}
      schY={1.45}
      connections={{ pin2: "U1.pin40", pin1: "net.VDD" }}
    />

    <inductor
      name="L_DCDC2"
      inductance="1.5uH"
      schX={-6.2}
      schY={0.25}
      schOrientation="horizontal"
      connections={{ pin2: "U1.pin42", pin1: "net.DCDC2_OUT" }}
    />
    <capacitor
      name="C_DCDC2"
      capacitance="10uF"
      footprint="0603"
      schX={-9.75}
      schY={1}
      schOrientation="vertical"
      connections={{ pin2: "net.DCDC2_OUT", pin1: "net.GND" }}
    />

    <capacitor
      name="C_IN_DCDC2"
      capacitance="4.7uF"
      footprint="0603"
      schX={-10.2}
      schY={-0.9}
      schOrientation="vertical"
      connections={{ pin1: "U1.pin43", pin2: "net.GND" }}
    />

    <pushbutton
      name="SW_PB"
      schX={-8}
      schY={-1}
      connections={{ pin2: "net.PB", pin1: "net.GND" }}
    />
    <resistor
      name="R_PB"
      resistance="100k"
      footprint="0402"
      schX={-6}
      schY={-0.8}
      connections={{ pin2: "net.PB", pin1: "net.IN_BIAS" }}
    />

    <resistor
      name="R_nINT"
      resistance="100k"
      footprint="0402"
      schX={-10.2}
      schY={-2.1}
      connections={{ pin1: "net.VIO", pin2: "U1.pin45" }}
    />

    <resistor
      name="R_PWR_EN"
      resistance="100k"
      footprint="0402"
      schX={-10.2}
      schY={-3}
      connections={{ pin2: "net.PWR_EN", pin1: "net.GND" }}
    />

    <inductor
      name="L_DCDC1"
      inductance="1.5uH"
      schX={-6}
      schY={-3}
      schOrientation="horizontal"
      connections={{ pin2: "net.L1_SW", pin1: "net.DCDC1_OUT" }}
    />
    <capacitor
      name="C_DCDC1"
      capacitance="10uF"
      footprint="0603"
      schX={-8}
      schY={-4.75}
      schOrientation="vertical"
      connections={{ pin1: "net.DCDC1_OUT", pin2: "net.GND" }}
    />

    {/* Right side: backup converters, control pins and DCDC4 */}
    <capacitor
      name="C_SYS_BU"
      capacitance="1uF"
      footprint="0402"
      schX={5}
      schY={3.2}
      schOrientation="vertical"
      connections={{ pin2: "U1.pin24", pin1: "net.GND" }}
    />

    <inductor
      name="L_DCDC6"
      inductance="10uH"
      schX={6.5}
      schY={1.75}
      schOrientation="horizontal"
      connections={{ pin1: "U1.pin23", pin2: "net.IN_DCDC6" }}
    />
    <capacitor
      name="C_DCDC6"
      capacitance="22uF"
      footprint="0805"
      schX={8}
      schY={1.2}
      schOrientation="vertical"
      connections={{ pin2: "net.GND", pin1: "net.IN_DCDC6" }}
    />

    <inductor
      name="L_DCDC5"
      inductance="1.5uH"
      schX={5.5}
      schY={0.55}
      schOrientation="horizontal"
      connections={{ pin1: "U1.20", pin2: "net.IN_DCDC5" }}
    />
    <capacitor
      name="C_DCDC5"
      capacitance="22uF"
      footprint="0805"
      schX={8}
      schY={-0.2}
      schOrientation="vertical"
      connections={{ pin2: "net.GND", pin1: "net.IN_DCDC5" }}
    />

    <resistor
      name="R_DC34_SEL"
      resistance="0ohm"
      footprint="0402"
      schX={5.5}
      schY={-0.6}
      connections={{ pin1: "U1.pin17", pin2: "net.GND" }}
    />

    <resistor
      name="R_PFI_TOP"
      resistance="100k"
      footprint="0402"
      schX={9.6}
      schY={-1.2}
      connections={{ pin1: "net.PFI", pin2: "net.GND" }}
    />
    <resistor
      name="R_PFI_BOTTOM"
      resistance="100k"
      footprint="0402"
      schX={9.6}
      schY={-2.0}
      connections={{ pin1: "net.PFI", pin2: "net.GND" }}
    />

    <capacitor
      name="C_DCDC4_HF"
      capacitance="100nF"
      footprint="0402"
      schX={5.1}
      schY={-2.4}
      schOrientation="vertical"
      connections={{ pin1: "net.DCDC4_OUT", pin2: "net.GND" }}
    />
    <capacitor
      name="C_DCDC4"
      capacitance="47uF"
      footprint="1206"
      schX={6.45}
      schY={-2.4}
      schOrientation="vertical"
      connections={{ pin1: "net.DCDC4_OUT", pin2: "net.GND" }}
    />

    <inductor
      name="L_DCDC4"
      inductance="1.5uH"
      schX={4.2}
      schY={-2.2}
      schOrientation="vertical"
      connections={{ pin1: "U1.pin14", pin2: "U1.pin13" }}
    />

    <capacitor
      name="C_IN_DCDC1"
      capacitance="4.7uF"
      footprint="0603"
      schX={-5.5}
      schY={-6.3}
      schOrientation="vertical"
      connections={{ pin1: "U1.pin1", pin2: "net.GND" }}
    />

    <resistor
      name="R_SDA"
      resistance="100k"
      footprint="0402"
      schX={-3.4}
      schY={-6.7}
      schOrientation="vertical"
      connections={{ pin2: "net.VIO", pin1: "U1.pin2" }}
    />

    <resistor
      name="R_SCL"
      resistance="100k"
      footprint="0402"
      schX={-2.2}
      schY={-7.3}
      schOrientation="vertical"
      connections={{ pin2: "net.VIO", pin1: "U1.pin3" }}
    />

    <capacitor
      name="C_LDO1"
      capacitance="10uF"
      footprint="0603"
      schX={-1.1}
      schY={-9.5}
      schOrientation="vertical"
      connections={{ pin1: "U1.pin4", pin2: "net.GND" }}
    />

    <capacitor
      name="C_IN_LDO1"
      capacitance="4.7uF"
      footprint="0603"
      schX={-0.6}
      schY={-7.6}
      schOrientation="vertical"
      connections={{ pin1: "U1.pin5", pin2: "net.GND" }}
    />

    <capacitor
      name="C_LS3"
      capacitance="10uF"
      footprint="0603"
      schX={-0.1}
      schY={-6.0}
      schOrientation="vertical"
      connections={{ pin1: "U1.pin7", pin2: "net.GND" }}
    />

    <resistor
      name="R_PGOOD"
      resistance="100k"
      footprint="0402"
      schX={0.7}
      schY={-9}
      schOrientation="vertical"
      connections={{ pin2: "net.VIO", pin1: "U1.pin8" }}
    />

    <resistor
      name="R_AC_DET"
      resistance="100k"
      footprint="0402"
      schX={1.2}
      schY={-6.5}
      schOrientation="vertical"
      connections={{ pin1: "U1.pin9", pin2: "net.IN_BIAS" }}
    />

    <resistor
      name="R_nPFO"
      resistance="100k"
      footprint="0402"
      schX={1.7}
      schY={-5.3}
      schOrientation="vertical"
      connections={{ pin2: "net.VIO", pin1: "U1.pin10" }}
    />

    <resistor
      name="R_GPIO1"
      resistance="100k"
      footprint="0402"
      schX={2.1}
      schY={-4}
      schOrientation="vertical"
      connections={{ pin2: "net.VIO", pin1: "U1.pin11" }}
    />

    <capacitor
      name="C_IN_DCDC4"
      capacitance="4.7uF"
      footprint="0603"
      schX={3.25}
      schY={-4.0}
      schOrientation="vertical"
      connections={{ pin1: "U1.pin12", pin2: "net.GND" }}
    />
  </subcircuit>
);

export default TPS6521835SimplifiedSchematic;
