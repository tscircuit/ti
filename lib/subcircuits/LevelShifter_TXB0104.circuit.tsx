import type { SubcircuitProps } from "@tscircuit/props";
import { TXB0104 } from "../chips/TXB0104.circuit.tsx";

const pinLabelschip1 = {
  pin1: "1_8V",
  pin2: "NC1",
  pin3: "GND",
  pin4: "OE",
  pin5: "NC2",
  pin6: "B4",
  pin7: "B3",
  pin8: "B2",
  pin9: "B1",
} as const;

const pinLabelschip2 = {
  pin1: "3V",
  pin2: "NC1",
  pin3: "GND",
  pin5: "NC2",
  pin6: "A4",
  pin7: "A3",
  pin8: "A2",
  pin9: "A1",
} as const;

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
        pin1: "U2.pin1",
        pin14: "U3.pin1",
        pin8: "U2.pin4",
        pin2: "U2.pin9",
        pin3: "U2.pin8",
        pin4: "U2.pin7",
        pin5: "U2.pin6",
        pin13: "U3.pin9",
        pin12: "U3.pin8",
        pin11: "U3.pin7",
        pin10: "U3.pin6",
      }}
    />

    <chip
      name="U2"
      footprint="tssop14"
      manufacturerPartNumber="System Controller"
      pinLabels={pinLabelschip1}
      pinAttributes={{
        B1: {
          requiresPower: true,
        },
        B2: {
          requiresPower: true,
        },
        B3: {
          requiresPower: true,
        },
        B4: {
          requiresPower: true,
        },
        VCCB: {
          requiresPower: true,
        },
        GND: {
          requiresGround: true,
        },
        OE: {
          mustBeConnected: true,
        },
      }}
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: ["1_8V"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["OE", "B1", "B2", "B3", "B4"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["GND"],
        },
      }}
      schPinStyle={{
        OE: {
          marginBottom: 0.63,
        },
        B1: {
          marginTop: 0.21,
        },
      }}
      schWidth={2}
      schHeight={3}
      schX={-4}
      schY={0}
      pcbX={-4}
      pcbY={0}
      connections={{ pin3: "net.GND", pin1: "C2.pin1" }}
    />

    <chip
      name="U3"
      footprint="tssop14"
      manufacturerPartNumber="System"
      pinLabels={pinLabelschip2}
      pinAttributes={{
        A1: {
          requiresPower: true,
        },
        A2: {
          requiresPower: true,
        },
        A3: {
          requiresPower: true,
        },
        A4: {
          requiresPower: true,
        },
        VCCB: {
          requiresPower: true,
        },
        GND: {
          requiresGround: true,
        },
      }}
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: ["3V"],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: ["A1", "A2", "A3", "A4"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["GND"],
        },
      }}
      schPinStyle={{
        A4: {
          marginBottom: -1,
        },
      }}
      schWidth={2}
      schHeight={3}
      schX={4}
      schY={0}
      pcbX={4}
      pcbY={0}
      connections={{ pin3: "net.GND", pin1: "C1.pin1" }}
    />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0402"
      schOrientation="vertical"
      schX={6}
      schY={1.5}
      pcbX={11}
      pcbY={2}
      connections={{ pin2: "net.GND", pin1: "net.V3_3" }}
    />

    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0402"
      schOrientation="vertical"
      schX={-6}
      schY={1.5}
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
      connections={{ pin1: "net.GND", pin2: "U2.pin4" }}
    />
  </subcircuit>
);

export default LevelShifter_TXB0104;
