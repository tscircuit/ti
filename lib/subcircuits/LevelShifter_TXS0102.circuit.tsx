import type { SubcircuitProps } from "@tscircuit/props";
import { TXS0102 } from "../chips/TXS0102.circuit.tsx";

export const LevelShifter_TXS0102 = (props: SubcircuitProps) => (
  <subcircuit {...props}>
    <TXS0102
      name="U1"
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
      connections={{
        pin1: "net.B2",
        pin2: "net.GND",
        pin3: "net.V1_8",
        pin4: "net.A2",
        pin5: "net.A1",
        pin7: "net.V3_3",
        pin8: "net.B1",
      }}
    />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0402"
      schOrientation="vertical"
      schX={3}
      schY={2}
      pcbX={11}
      pcbY={2}
      connections={{ pin2: "net.GND", pin1: "net.V3_3" }}
    />

    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0402"
      schOrientation="vertical"
      schX={4}
      schY={2}
      pcbX={11}
      pcbY={-1}
      connections={{ pin2: "net.GND", pin1: "C1.pin1" }}
    />

    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0402"
      schOrientation="vertical"
      schX={-3}
      schY={2}
      pcbX={7}
      pcbY={-9}
      connections={{ pin2: "net.GND", pin1: "net.V1_8" }}
    />

    <resistor
      name="R1"
      resistance="47k"
      footprint="0402"
      schRotation={90}
      schX={-1.8}
      schY={0}
      pcbX={11}
      pcbY={5}
      connections={{ pin1: "net.GND", pin2: "U1.OE" }}
    />
  </subcircuit>
);

export default LevelShifter_TXS0102;
