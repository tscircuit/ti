import type { SubcircuitProps } from "@tscircuit/props";
import { TPS61299X } from "../chips/TPS61299X.circuit.tsx";

export const BoostConverter_TPS61299X = (props: SubcircuitProps) => (
  <subcircuit {...props}>
    <TPS61299X
      name="U1"
      schX={0}
      schY={0}
      connections={{
        pin1: "net.VIN",
        pin2: "net.SW",
        pin3: "net.EN",
        pin4: "net.VOUT_5V",
        pin5: "net.VOUT_5V",
        pin6: "net.GND",
      }}
    />

    <schematictext schX={0} schY={-0.1} text="TPS61299X" fontSize={0.15} />

    <inductor
      name="L1"
      inductance="1uH"
      footprint="0603"
      schX={-2.5}
      schY={0.35}
      schOrientation="horizontal"
      connections={{
        pin1: "net.VIN",
        pin2: "net.SW",
      }}
    />

    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0603"
      schX={-3.5}
      schY={-0.2}
      schOrientation="vertical"
      connections={{
        pin1: "net.VIN",
        pin2: "net.GND",
      }}
    />

    <schematictext schX={-2.2} schY={-0.2} text="ON" fontSize={0.12} />
    <schematictext schX={-2.43} schY={-0.4} text="OFF" fontSize={0.12} />

    <schematicline
      x1={-2.03}
      y1={-0.3}
      x2={-2.3}
      y2={-0.3}
      strokeWidth={0.01}
    />
    <schematicline x1={-2.3} y1={-0.5} x2={-2.3} y2={-0.3} strokeWidth={0.01} />
    <schematicline
      x1={-2.3}
      y1={-0.5}
      x2={-2.57}
      y2={-0.5}
      strokeWidth={0.01}
    />

    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0603"
      schX={3.1}
      schY={-0.1}
      schOrientation="vertical"
      connections={{
        pin1: "net.VOUT_5V",
        pin2: "net.GND",
      }}
    />
  </subcircuit>
);

export const TPS61299XBoostConverter = BoostConverter_TPS61299X;

export default BoostConverter_TPS61299X;
