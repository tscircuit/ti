import { sel } from "tscircuit";

import { HDC3022DEJR } from "./imports/HDC3022DEJR";

export default () => (
  <subcircuit>
    <chip
      name="U2"
      manufacturerPartNumber="MCU"
      footprint="pinrow5"
      pcbX={2.1}
      pcbY={-4.85}
      pcbRotation="180deg"
      schX={4.5}
      schY={0}
      schWidth={3.2}
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
        pin3: {
          topMargin: 0.25,
        },
      }}
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.SCL,
        pin3: sel.net.SDA,
        pin4: sel.net.ALERT,
        pin5: sel.net.GND,
      }}
    />

    <HDC3022DEJR
      name="U1"
      pcbX={0}
      pcbY={0}
      pcbRotation="0deg"
      schX={-2.1}
      schY={0}
      schWidth={3.2}
      schHeight={4.6}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "SCL", "SDA", "ALERT", "RESET", "ADDR", "ADDR1", "GND"],
        },
      }}
      schPinStyle={{
        VDD: {
          topMargin: 1.55,
        },
        SDA: {
          topMargin: 0.25,
        },
        RESET: {
          topMargin: 0.25,
        },
        ADDR: {
          topMargin: 0.45,
        },
        ADDR1: {
          topMargin: 0.25,
        },
      }}
      connections={{
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
        ALERT: sel.net.ALERT,
        VDD: sel.net.VDD,
        ADDR: sel.net.GND,
        ADDR1: sel.net.GND,
        GND: sel.net.GND,
        EP: sel.net.GND,
      }}
      noConnect={["RESET"]}
    />

    <resistor
      name="R1"
      resistance="5k"
      footprint="0402"
      pcbX={1.8}
      pcbY={2.9}
      pcbRotation="0deg"
      schX={0.7}
      schY={2.15}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.SCL,
      }}
    />
    <resistor
      name="R2"
      resistance="5k"
      footprint="0402"
      pcbX={-1.8}
      pcbY={2.9}
      pcbRotation="0deg"
      schX={1.5}
      schY={2.15}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.SDA,
      }}
    />
  </subcircuit>
);
