import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { MSPM33C3x } from "../chips/MSPM33C3x.circuit";

export const Microcontroller_MSPM33C3x = (props: SubcircuitProps) => (
  <subcircuit {...props}>
    <MSPM33C3x
      name="U1"
      schX={0}
      schY={0}
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
        pin4: "net.NRST",

        pin5: "net.SWDIO",
        pin6: "net.SWCLK",
      }}
    />

    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0603"
      schX={-5.5}
      schY={1.0}
      schOrientation="vertical"
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
      }}
    />

    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0402"
      schX={-3.9}
      schY={1.0}
      schOrientation="vertical"
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
      }}
    />

    <capacitor
      name="C3"
      capacitance="2.2uF"
      footprint="0603"
      schX={-2.7}
      schY={-0.3}
      schOrientation="vertical"
      connections={{
        pin1: "U1.pin3",
        pin2: "net.GND",
      }}
    />

    <resistor
      name="R1"
      resistance="47k"
      footprint="0402"
      schX={-6.3}
      schY={0.0}
      schOrientation="vertical"
      connections={{
        pin1: "net.V3_3",
        pin2: "net.NRST",
      }}
    />

    <capacitor
      name="C4"
      capacitance="10nF"
      footprint="0402"
      schX={-6.3}
      schY={-3}
      schOrientation="vertical"
      connections={{
        pin1: "net.NRST",
        pin2: "net.GND",
      }}
    />
  </subcircuit>
);

export default Microcontroller_MSPM33C3x;
