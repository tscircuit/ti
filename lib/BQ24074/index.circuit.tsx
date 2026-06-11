import { sel } from "tscircuit";
import type { SubcircuitProps } from "@tscircuit/props";
import { BQ24074RGTR } from "./imports/BQ24074RGTR";

export default (props: SubcircuitProps) => (
  <subcircuit width={100} height={100} {...props}>
    <chip
      name="J1"
      footprint="pinrow2"
      manufacturerPartNumber="Adapter"
      pinLabels={{
        pin1: "DC_PLUS",
        pin2: "GND",
      }}
      schX={-5.5}
      schY={1.35}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2"],
        },
      }}
      connections={{
        pin1: sel.net.IN,
        pin2: sel.net.GND,
      }}
    />

    <BQ24074RGTR
      name="U1"
      schX={0}
      schY={0}
      schWidth={3.1}
      schHeight={4.3}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["IN", "VSS", "TS", "BAT"],
        },
        topSide: {
          direction: "left-to-right",
          pins: ["N_PGOOD", "N_CHG"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["OUT", "EN2", "EN1", "TMR", "N_CE"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["ITERM", "ILIM", "ISET"],
        },
      }}
      schPinStyle={{
        TS: {
          topMargin: 1.2,
        },
        N_CHG: {
          leftMargin: 0.7,
        },
        EN2: {
          topMargin: 0.9,
        },
        ILIM: {
          leftMargin: 0.45,
        },
        ISET: {
          leftMargin: 0.45,
        },
      }}
      connections={{
        IN: sel.net.IN,
        VSS: sel.net.GND,
        TS: sel.net.TS,
        BAT: sel.net.BAT,
        BAT2: sel.net.BAT,
        N_PGOOD: sel.net.N_PGOOD_LED,
        N_CHG: sel.net.N_CHG_LED,
        OUT: sel.net.OUT,
        OUT2: sel.net.OUT,
        EN2: sel.net.OUT,
        EN1: sel.net.GND,
        TMR: sel.net.GND,
        N_CE: sel.net.GND,
        ITERM: sel.net.ITERM,
        ILIM: sel.net.ILIM,
        ISET: sel.net.ISET,
        EP: sel.net.GND,
      }}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0603"
      schX={-2.75}
      schY={0.75}
      schRotation="270deg"
      connections={{
        pin1: sel.net.IN,
        pin2: sel.net.GND,
      }}
    />

    <capacitor
      name="C2"
      capacitance="4.7uF"
      footprint="0603"
      schX={3.2}
      schY={0.6}
      schRotation="270deg"
      connections={{
        pin1: sel.net.OUT,
        pin2: sel.net.GND,
      }}
    />

    <chip
      name="BT1"
      footprint="pinrow3"
      manufacturerPartNumber="Battery Pack"
      pinLabels={{
        pin1: "TEMP",
        pin2: "PACK_PLUS",
        pin3: "PACK_MINUS",
      }}
      schX={-6.0}
      schY={-2.9}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
      connections={{
        pin1: sel.net.TS,
        pin2: sel.net.BAT,
        pin3: sel.net.GND,
      }}
    />

    <capacitor
      name="C3"
      capacitance="4.7uF"
      footprint="0603"
      schX={-2.35}
      schY={-2.7}
      schRotation="270deg"
      connections={{
        pin1: sel.net.BAT,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="4.12k"
      footprint="0603"
      schX={-1.1}
      schY={-3.75}
      schRotation="270deg"
      connections={{
        pin1: sel.net.ITERM,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R2"
      resistance="1.18k"
      footprint="0603"
      schX={0}
      schY={-3.75}
      schRotation="270deg"
      connections={{
        pin1: sel.net.ILIM,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R3"
      resistance="1.13k"
      footprint="0603"
      schX={1.1}
      schY={-3.75}
      schRotation="270deg"
      connections={{
        pin1: sel.net.ISET,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R4"
      resistance="1.5k"
      footprint="0603"
      schX={-0.8}
      schY={6.35}
      schRotation="270deg"
      connections={{
        pin1: sel.net.OUT,
        pin2: sel.net.N_PGOOD_LED_A,
      }}
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      schX={-0.8}
      schY={4.4}
      schRotation="270deg"
      connections={{
        anode: sel.net.N_PGOOD_LED_A,
        cathode: sel.net.N_PGOOD_LED,
      }}
    />

    <resistor
      name="R5"
      resistance="1.5k"
      footprint="0603"
      schX={0.8}
      schY={6.35}
      schRotation="270deg"
      connections={{
        pin1: sel.net.OUT,
        pin2: sel.net.N_CHG_LED_A,
      }}
    />
    <led
      name="D2"
      color="red"
      footprint="0603"
      schX={0.8}
      schY={4.4}
      schRotation="270deg"
      connections={{
        anode: sel.net.N_CHG_LED_A,
        cathode: sel.net.N_CHG_LED,
      }}
    />

    <schematicbox
      schX={6.3}
      schY={-0.15}
      width={2.9}
      height={6.3}
      title="SYSTEM"
      titleInside
      titleAlignment="top_center"
      titleFontSize={0.35}
      strokeStyle="dashed"
    />
    <netlabel net="OUT" schX={4.75} schY={0.8} anchorSide="right" />
    <schematicline x1={4.75} y1={0.8} x2={4.85} y2={0.8} strokeWidth={0.03} />
  </subcircuit>
);
