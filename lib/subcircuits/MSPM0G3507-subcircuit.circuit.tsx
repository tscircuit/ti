import type { SubcircuitProps } from "@tscircuit/props";
import { MSPM0G3507SPMR } from "../chips/MSPM0G3507SPMR";

export const Microcontroller_MSPM0G3507 = (props: SubcircuitProps) => (
  <subcircuit width={100} height={100} {...props}>
    <MSPM0G3507SPMR
      name="U1"
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
      connections={{
        VDD: "C2.pin1",
        VSS: "C2.pin2",
        NRST: "net.NRST",
        ROSC: "R2.pin1",
        PA0: "net.PA0",
        PA1: "net.PA1",
        SWDIO: "net.SWDIO",
        SWCLK: "net.SWCLK",
      }}
    />

    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0805"
      schOrientation="vertical"
      schX={-2.6}
      schY={1.3}
      pcbX={11}
      pcbY={-1}
      connections={{ pin1: ["U1.VDD", "R1.pin2"], pin2: ["U1.VSS", "net.GND"] }}
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0402"
      schOrientation="vertical"
      schX={-1.8}
      schY={1.3}
      pcbX={11}
      pcbY={2}
      connections={{ pin1: "C1.pin1" }}
    />

    <capacitor
      name="C3"
      capacitance="0.47uF"
      footprint="0402"
      schOrientation="vertical"
      schX={-2.1}
      schY={-0.6}
      pcbX={7}
      pcbY={-9}
      connections={{ pin1: "U1.VCORE", pin2: "net.GND" }}
    />

    <resistor
      name="R1"
      resistance="47k"
      footprint="0402"
      schRotation={90}
      schX={-3.3}
      schY={0.1}
      pcbX={11}
      pcbY={5}
      connections={{ pin1: "U1.NRST", pin2: "net.VDD" }}
    />
    <capacitor
      name="C4"
      capacitance="10nF"
      footprint="0402"
      schOrientation="vertical"
      schX={-3.3}
      schY={-1.7}
      pcbX={11}
      pcbY={7}
      connections={{ pin1: "R1.pin1", pin2: "net.GND" }}
    />

    <resistor
      name="R2"
      resistance="100k"
      footprint="0402"
      schX={2.3}
      schY={2.05}
      pcbX={11}
      pcbY={-4}
      connections={{ pin1: "U1.ROSC", pin2: "net.GND" }}
    />

    <resistor
      name="R3"
      resistance="4.7k"
      footprint="0402"
      schRotation={90}
      schX={4.7}
      schY={0.6}
      pcbX={-9}
      pcbY={6}
      connections={{ pin1: "U1.PA1", pin2: "net.VDD" }}
    />
    <resistor
      name="R4"
      resistance="4.7k"
      footprint="0402"
      schRotation={90}
      schX={3.8}
      schY={0.6}
      pcbX={-11}
      pcbY={6}
      connections={{ pin1: "U1.PA0", pin2: "net.VDD" }}
    />

    <pinheader
      name="J1"
      pinCount={2}
      gender="female"
      pitch="2.54mm"
      schPinStyle={{
        SWDIO: {
          marginTop: 0.1,
          marginBottom: 0.2,
        },
      }}
      schFacingDirection="left"
      schX={3.6}
      schY={-2.1}
      pcbX={-18}
      pcbY={0}
      showSilkscreenPinLabels
      pinLabels={["SWDIO", "SWCLK"]}
      connections={{
        pin1: "U1.SWDIO",
        pin2: "U1.SWCLK",
      }}
    />
  </subcircuit>
);

export default Microcontroller_MSPM0G3507;
