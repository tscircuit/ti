import type { SubcircuitProps } from "@tscircuit/props";
import { TXB0104 } from "../chips/TXB0104.circuit.tsx";

export const LevelShifter_TXB0104 = (props: SubcircuitProps) => (
  <subcircuit {...props}>
    <TXB0104
      name="U1"
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
      connections={{
        pin7: "net.GND",
        pin1: "net.V1_8",
        pin14: "net.V3_3",
        pin2: "net.A1",
        pin3: "net.A2",
        pin4: "net.A3",
        pin5: "net.A4",
        pin13: "net.B1",
        pin12: "net.B2",
        pin11: "net.B3",
        pin10: "net.B4",
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
      schY={0.5}
      pcbX={11}
      pcbY={5}
      connections={{ pin1: "net.GND", pin2: "U1.pin8" }}
    />
  </subcircuit>
);

export default LevelShifter_TXB0104;