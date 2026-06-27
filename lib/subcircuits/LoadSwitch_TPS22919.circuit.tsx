import { TPS22919 } from "../chips/TPS22919";
import type { SubcircuitProps } from "@tscircuit/props";

export const LoadSwitch_TPS22919 = (props: SubcircuitProps) => (
  <subcircuit width={100} height={100} {...props}>
    <TPS22919
      name="U1"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["IN", "ON", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["OUT", "QOD"],
        },
      }}
      schWidth="2mm"
      schHeight="3mm"
      schPinStyle={{
        IN: {
          marginTop: 0.1,
        },
        OUT: {
          marginTop: -0.6,
        },
        ON: {
          marginTop: 0.8,
        },
        GND: {
          marginTop: 0.8,
        },
        QOD: {
          marginTop: 1.1,
        },
      }}
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
    />

    <voltagesource
      name="V_IN"
      voltage="5V"
      schX={-4.8}
      connections={{ pin2: "U1.pin1", pin1: "net.GND" }}
      schY={0.4}
      pcbX={-18}
      pcbY={3}
      footprint="0402"
      schRotation={90}
    />

    <capacitor
      name="C_IN"
      footprint="0402"
      capacitance="1uF"
      polarized
      schOrientation="pos_top"
      connections={{ pos: "U1.pin1", pin2: "net.GND" }}
      schX={-3.3}
      schY={0.4}
      pcbX={-9}
      pcbY={2}
    />
    <schematictext schX={-1.6} schY={0.45} text="H" fontSize={0.22} />
    <schematictext schX={-1.8} schY={-0.45} text="L" fontSize={0.22} />
    <schematicpath
      strokeWidth={0.05}
      points={[
        { x: -2, y: -0.2 },
        { x: -1.7, y: -0.2 },
        { x: -1.7, y: 0.2 },
        { x: -1.4, y: 0.2 },
      ]}
    />

    <resistor
      name="R_QOD"
      footprint="0402"
      resistance="100k"
      connections={{ pin1: "U1.QOD", pin2: "U1.OUT" }}
      schX={2}
      schY={0.2}
      schRotation={90}
      pcbX={6}
      pcbY={1.5}
    />

    <capacitor
      name="C_L"
      footprint="0603"
      capacitance="10uF"
      schOrientation="pos_top"
      polarized
      connections={{ pos: "U1.OUT", pin2: "net.GND" }}
      schX={4}
      schY={0.4}
      schRotation={90}
      pcbX={12}
      pcbY={2}
    />

    <resistor
      name="R_L"
      footprint="0402"
      resistance="10k"
      connections={{ pin2: "U1.OUT", pin1: "net.GND" }}
      schX={5}
      schY={0.4}
      pcbX={16}
      pcbY={2}
      schRotation={90}
    />
    <netlabel net="GND" connection="U1.GND" schX={-1.5} schY={-1.45} />
  </subcircuit>
);

export default LoadSwitch_TPS22919;
