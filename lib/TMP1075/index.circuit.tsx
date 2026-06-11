import { sel } from "tscircuit";

import { TMP1075DSGR } from "./imports/TMP1075DSGR";

export default () => (
  <subcircuit>
    <chip
      name="U2"
      manufacturerPartNumber="Two-Wire Host Controller"
      footprint="pinrow3"
      pcbX={0}
      pcbY={5}
      schX={-4.8}
      schY={0}
      schWidth={2.9}
      schHeight={4.9}
      pinLabels={{
        pin1: "SDA",
        pin2: "SCL",
        pin3: "ALERT",
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
      schPinStyle={{
        pin2: {
          topMargin: 0.45,
        },
        pin3: {
          topMargin: 0.75,
        },
      }}
      connections={{
        pin1: sel.net.SDA,
        pin2: sel.net.SCL,
        pin3: sel.net.ALERT,
      }}
    />

    <TMP1075DSGR
      name="U1"
      pcbX={0}
      pcbY={0}
      schX={1.7}
      schY={0}
      schWidth={3.4}
      schHeight={4.7}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["SDA", "SCL", "ALERT", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["V_PLUS", "A0", "A1", "A2"],
        },
      }}
      schPinStyle={{
        SCL: {
          topMargin: 0.45,
        },
        ALERT: {
          topMargin: 0.75,
        },
        GND: {
          topMargin: 0.75,
        },
        A0: {
          topMargin: 0.45,
        },
        A1: {
          topMargin: 0.55,
        },
        A2: {
          topMargin: 0.55,
        },
      }}
      connections={{
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
        ALERT: sel.net.ALERT,
        GND: sel.net.GND,
        V_PLUS: sel.net.VDD,
        A0: sel.net.GND,
        A1: sel.net.GND,
        A2: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="5k"
      footprint="0402"
      pcbX={-3}
      pcbY={2.4}
      schX={-2.6}
      schY={2.0}
      pcbRotation={180}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.SDA,
      }}
    />
    <resistor
      name="R2"
      resistance="5k"
      footprint="0402"
      pcbX={0}
      pcbY={2.4}
      schX={-1.7}
      schY={2.0}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.SCL,
      }}
    />
    <resistor
      name="R3"
      resistance="5k"
      footprint="0402"
      pcbX={3}
      pcbY={2.4}
      schX={-0.8}
      schY={2.0}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.ALERT,
      }}
    />
    <capacitor
      name="C1"
      capacitance="0.01uF"
      footprint="0402"
      pcbX={3.6}
      pcbY={1}
      schX={4.25}
      schY={1.1}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.GND,
      }}
    />
  </subcircuit>
);
