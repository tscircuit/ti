import { sel } from "tscircuit";

import { HDC2080DMBR } from "./imports/HDC2080DMBR";

export default () => (
  <subcircuit>
    <chip
      name="U2"
      manufacturerPartNumber="MCU"
      footprint="pinrow5"
      schX={4.5}
      schY={0}
      schWidth={2.6}
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
        pin2: {
          topMargin: 0.25,
        },
        pin5: {
          topMargin: 0.65,
        },
      }}
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.SCL,
        pin3: sel.net.SDA,
        pin4: sel.net.DRDY_INT,
        pin5: sel.net.GND,
      }}
    />

    <HDC2080DMBR
      name="U1"
      schX={-2.1}
      schY={0}
      schWidth={3.2}
      schHeight={4.0}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "SCL", "SDA", "DRDY_INT", "ADDR", "GND"],
        },
      }}
      schPinStyle={{
        SCL: {
          topMargin: 0.25,
        },
        DRDY_INT: {
          topMargin: 0.25,
        },
        ADDR: {
          topMargin: 0.45,
        },
        GND: {
          topMargin: 0.45,
        },
      }}
      connections={{
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
        DRDY_INT: sel.net.DRDY_INT,
        VDD: sel.net.VDD,
        ADDR: sel.net.GND,
        GND: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="10k"
      footprint="0402"
      schX={0.7}
      schY={1.3}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.SCL,
      }}
    />
    <resistor
      name="R2"
      resistance="10k"
      footprint="0402"
      schX={1.5}
      schY={1.3}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.SDA,
      }}
    />
  </subcircuit>
);
