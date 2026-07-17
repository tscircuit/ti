import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { BQ32002 } from "../chips/BQ32002.circuit.tsx";

export const BQ32002RtcSchematic = (props: SubcircuitProps) => (
  <subcircuit {...props}>
    <BQ32002
      name="U1"
      schX={0}
      schY={0}
      connections={{
        pin4: "net.GND",
        pin8: "net.VCC",
        pin5: "net.SDA",
        pin6: "net.SCL",
        pin7: "net.IRQ",
      }}
    />

    <schematictext schX={0} schY={0} text="BQ32002" fontSize={0.4} />
    <crystal
      name="Y1"
      frequency="32.768kHz"
      loadCapacitance="12pF"
      schX={-5}
      schY={1.0}
      schOrientation="vertical"
      connections={{
        pin1: "U1.pin1",
        pin2: "U1.pin2",
      }}
    />

    <battery name="BT1" voltage="3V" schX={-5} schY={-1.8} schRotation={-90} />
    <trace from="BT1.pin2" to="U1.pin3" />
    <trace from="BT1.pin1" to="net.GND" />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0603"
      schX={8.1}
      schY={0.9}
      schOrientation="vertical"
      connections={{
        pin1: "net.VCC",
        pin2: "net.GND",
      }}
    />

    <resistor
      name="R1"
      resistance="4.7k"
      footprint="0402"
      schX={3.8}
      schY={1}
      schOrientation="vertical"
      connections={{
        pin1: "net.VCC",
        pin2: "U1.pin7",
      }}
    />

    <resistor
      name="R2"
      resistance="4.7k"
      footprint="0402"
      schX={5.2}
      schY={1}
      schOrientation="vertical"
      connections={{
        pin1: "net.VCC",
        pin2: "U1.pin6",
      }}
    />

    <resistor
      name="R3"
      resistance="4.7k"
      footprint="0402"
      schX={6.6}
      schY={1}
      schOrientation="vertical"
      connections={{
        pin1: "net.VCC",
        pin2: "U1.pin5",
      }}
    />
  </subcircuit>
);

export default BQ32002RtcSchematic;
