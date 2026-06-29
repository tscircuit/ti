import type { SubcircuitProps } from "@tscircuit/props";
import { HDC2080DMBR } from "../chips/HDC2080DMBR";

export const EnvironmentalSensor_HDC2080 = (props: SubcircuitProps) => (
  <subcircuit width={100} height={100}>
    <chip
      name={props.name || "U2"}
      manufacturerPartNumber="MCU"
      footprint="pinrow5"
      schX={4.5}
      schY={0}
      schWidth={2.6}
      schHeight={4.6}
      pinLabels={{
        pin1: "VDD",
        pin2: "SCL",
        pin3: "SDA",
        pin4: "GPIO",
        pin5: "GND",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5"],
        },
      }}
      schPinStyle={{
        pin2: {
          topMargin: 0.25,
        },
        pin5: {
          topMargin: 0.65,
        },
      }}
      connections={{
        pin1: "net.VDD",
        pin2: "net.SCL",
        pin3: "net.SDA",
        pin4: "net.DRDY_INT",
        pin5: "net.GND",
      }}
    />

    <HDC2080DMBR
      name="U1"
      schX={-2.1}
      schY={0}
      schWidth={3.2}
      schHeight={4.0}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "SCL", "SDA", "DRDY_INT", "ADDR", "GND"],
        },
      }}
      schPinStyle={{
        SCL: {
          topMargin: 0.25,
        },
        DRDY_INT: {
          topMargin: 0.25,
        },
        ADDR: {
          topMargin: 0.45,
        },
        GND: {
          topMargin: 0.45,
        },
      }}
      connections={{
        SDA: "net.SDA",
        SCL: "net.SCL",
        DRDY_INT: "net.DRDY_INT",
        VDD: "net.VDD",
        ADDR: "net.GND",
        GND: "net.GND",
      }}
    />

    <resistor
      name="R1"
      resistance="10k"
      footprint="0402"
      schX={0.7}
      schY={1.3}
      schRotation="270deg"
      connections={{
        pin1: "net.VDD",
        pin2: "net.SCL",
      }}
    />
    <resistor
      name="R2"
      resistance="10k"
      footprint="0402"
      schX={1.5}
      schY={1.3}
      schRotation="270deg"
      connections={{
        pin1: "net.VDD",
        pin2: "net.SDA",
      }}
    />
  </subcircuit>
);

export default EnvironmentalSensor_HDC2080;
