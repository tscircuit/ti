import type { SubcircuitProps } from "@tscircuit/props";
import { BQ24074RGTR } from "../chips/BQ24074RGTR.circuit.tsx";

export const BatteryManagement_BQ24074 = (props: SubcircuitProps) => (
  <subcircuit {...props}>
    {/* Power-only USB-C sink. The connector exposes both cable orientations. */}
    <connector
      name="J1"
      displayName="USB-C Charging Input"
      manufacturerPartNumber="USB4125-GF-A"
      supplierPartNumbers={{ jlcpcb: ["C3151650"] }}
      shouldBeOnEdgeOfBoard
      footprint={
        <footprint>
          {/* GCT USB4125 recommended PCB layout, 1.00 mm shell stakes. */}
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.5mm"
            pcbY="-3.08mm"
            width="0.7mm"
            height="1.2mm"
            shape="rect"
            rectBorderRadius="0.175mm"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.52mm"
            pcbY="-3.08mm"
            width="0.76mm"
            height="1.2mm"
            shape="rect"
            rectBorderRadius="0.19mm"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="2.75mm"
            pcbY="-3.08mm"
            width="0.8mm"
            height="1.2mm"
            shape="rect"
            rectBorderRadius="0.2mm"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.5mm"
            pcbY="-3.08mm"
            width="0.7mm"
            height="1.2mm"
            shape="rect"
            rectBorderRadius="0.175mm"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.52mm"
            pcbY="-3.08mm"
            width="0.76mm"
            height="1.2mm"
            shape="rect"
            rectBorderRadius="0.19mm"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.75mm"
            pcbY="-3.08mm"
            width="0.8mm"
            height="1.2mm"
            shape="rect"
            rectBorderRadius="0.2mm"
          />

          {/* All four shell stakes share the grounded SHIELD terminal. */}
          <platedhole
            portHints={["pin7"]}
            pcbX="-4.32mm"
            pcbY="-3mm"
            shape="oval"
            outerWidth="1.1mm"
            outerHeight="1.7mm"
            holeWidth="0.6mm"
            holeHeight="1.2mm"
          />
          <platedhole
            portHints={["pin8"]}
            pcbX="-4.32mm"
            pcbY="0.8mm"
            shape="oval"
            outerWidth="1.1mm"
            outerHeight="1.7mm"
            holeWidth="0.6mm"
            holeHeight="1.2mm"
          />
          <platedhole
            portHints={["pin9"]}
            pcbX="4.32mm"
            pcbY="-3mm"
            shape="oval"
            outerWidth="1.1mm"
            outerHeight="1.7mm"
            holeWidth="0.6mm"
            holeHeight="1.2mm"
          />
          <platedhole
            portHints={["pin10"]}
            pcbX="4.32mm"
            pcbY="0.8mm"
            shape="oval"
            outerWidth="1.1mm"
            outerHeight="1.7mm"
            holeWidth="0.6mm"
            holeHeight="1.2mm"
          />
          <silkscreenline
            x1="-4.67mm"
            y1="-0.25mm"
            x2="-4.67mm"
            y2="-1.95mm"
            strokeWidth="0.12mm"
          />
          <silkscreenline
            x1="4.67mm"
            y1="-0.25mm"
            x2="4.67mm"
            y2="-1.95mm"
            strokeWidth="0.12mm"
          />
          <courtyardrect
            pcbX="0mm"
            pcbY="-0.225mm"
            width="10.74mm"
            height="8.25mm"
            isFilled={false}
            hasStroke
            strokeWidth="0.05mm"
          />
        </footprint>
      }
      pinLabels={{
        pin1: "CC1_A5",
        pin2: "VBUS_A9",
        pin3: "GND_A12",
        pin4: "CC2_B5",
        pin5: "VBUS_B9",
        pin6: "GND_B12",
        pin7: "SHIELD_1",
        pin8: "SHIELD_2",
        pin9: "SHIELD_3",
        pin10: "SHIELD_4",
      }}
      schX={-7}
      schY={1.35}
      schWidth="3.4mm"
      schHeight="4.2mm"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin2", "pin5", "pin3", "pin6"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["pin1", "pin4"],
        },
        topSide: {
          direction: "left-to-right",
          pins: ["pin7", "pin8", "pin9", "pin10"],
        },
      }}
      connections={{
        pin1: "net.USB_CC1",
        pin2: "net.IN",
        pin3: "net.GND",
        pin4: "net.USB_CC2",
        pin5: "net.IN",
        pin6: "net.GND",
        pin7: "net.GND",
        pin8: "net.GND",
        pin9: "net.GND",
        pin10: "net.GND",
      }}
    />

    {/* Independent Rd resistors advertise a USB-C sink in either orientation. */}
    {/* USB500 mode is the hard 500 mA input ceiling. The following values
        program a conservative 400 mA charge current and also keep the ILIM
        fallback at 500 mA if a later design deliberately selects adapter mode. */}
    <resistor
      name="R6"
      resistance="5.1k"
      tolerance="1%"
      footprint="0603"
      schX={-7.75}
      schY={-2.15}
      schOrientation="vertical"
      connections={{
        pin1: "net.USB_CC1",
        pin2: "net.GND",
      }}
    />
    <resistor
      name="R7"
      resistance="5.1k"
      tolerance="1%"
      footprint="0603"
      schX={-6.25}
      schY={-2.15}
      schOrientation="vertical"
      connections={{
        pin1: "net.USB_CC2",
        pin2: "net.GND",
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
        IN: "net.IN",
        VSS: "net.GND",
        TS: "net.TS",
        BAT: "net.BAT",
        BAT2: "net.BAT",
        N_PGOOD: "net.N_PGOOD_LED",
        N_CHG: "net.N_CHG_LED",
        OUT: "net.OUT",
        OUT2: "net.OUT",
        // With passive CC resistors only, use the guaranteed USB500 limit.
        EN2: "net.GND",
        EN1: "net.OUT",
        TMR: "net.TMR",
        N_CE: "net.GND",
        ITERM: "net.ITERM",
        ILIM: "net.ILIM",
        ISET: "net.ISET",
        EP: "net.GND",
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
        pin1: "net.IN",
        pin2: "net.GND",
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
        pin1: "net.OUT",
        pin2: "net.GND",
      }}
    />

    {/* Keyed 3-wire connection for a protected 1S pack with internal NTC. */}
    <connector
      name="J_BAT"
      displayName="Li-ion Battery + NTC Connector"
      manufacturerPartNumber="B3B-PH-K-S(LF)(SN)"
      supplierPartNumbers={{ jlcpcb: ["C131339"] }}
      footprint={
        <footprint>
          {/* JST-PH: 2.00 mm pitch, with a rectangular BAT+ pad. */}
          <platedhole
            portHints={["pin1"]}
            pcbX="-2mm"
            pcbY="0mm"
            shape="circular_hole_with_rect_pad"
            holeDiameter="0.8mm"
            rectPadWidth="1.5mm"
            rectPadHeight="1.5mm"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="0mm"
            shape="circle"
            holeDiameter="0.8mm"
            outerDiameter="1.5mm"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="2mm"
            pcbY="0mm"
            shape="circle"
            holeDiameter="0.8mm"
            outerDiameter="1.5mm"
          />
          <silkscreenrect
            pcbX={0}
            pcbY={0}
            width="7.9mm"
            height="4.5mm"
            filled={false}
            strokeWidth="0.15mm"
          />
          <silkscreentext
            text="+"
            pcbX="-2mm"
            pcbY="-1.45mm"
            fontSize="0.8mm"
          />
          <courtyardrect
            pcbX={0}
            pcbY={0}
            width="8.4mm"
            height="5mm"
            isFilled={false}
            hasStroke
            strokeWidth="0.05mm"
          />
        </footprint>
      }
      pinLabels={{
        pin1: "BAT_PLUS",
        pin2: "TEMP_NTC",
        pin3: "BAT_MINUS",
      }}
      schX={-5.3}
      schY={-5.0}
      schWidth="2.8mm"
      schHeight="2.4mm"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
      connections={{
        pin1: "net.BAT",
        pin2: "net.TS",
        pin3: "net.GND",
      }}
    />

    {/* The protected 1S cell is an off-board pack connected through J_BAT. */}
    <schematictext
      text="EXTERNAL PROTECTED 1S LI-ION PACK"
      schX={-9.2}
      schY={-4.35}
      fontSize={0.35}
    />

    {/* Pack-mounted Semitec NTC. The real footprint and sourcing metadata are
        retained for harness/pack documentation, but it is not placed on PCB. */}
    <resistor
      name="R_NTC_PACK"
      displayName="Battery-pack 10 kOhm NTC"
      manufacturerPartNumber="103AT-2"
      supplierPartNumbers={{ jlcpcb: ["C9900077565"] }}
      resistance="10k"
      tolerance="1%"
      doNotPlace
      footprint={
        <footprint>
          {/* JLCPCB package L3.6W2P2.54D0.5*0.5. */}
          <platedhole
            portHints={["pin1"]}
            pcbX="-1.27mm"
            pcbY={0}
            shape="circular_hole_with_rect_pad"
            holeDiameter="0.8mm"
            rectPadWidth="1.5mm"
            rectPadHeight="1.5mm"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="1.27mm"
            pcbY={0}
            shape="circle"
            holeDiameter="0.8mm"
            outerDiameter="1.5mm"
          />
          <silkscreenrect
            pcbX={0}
            pcbY={0}
            width="4.1mm"
            height="2.5mm"
            filled={false}
            strokeWidth="0.15mm"
          />
          <courtyardrect
            pcbX={0}
            pcbY={0}
            width="4.6mm"
            height="3mm"
            isFilled={false}
            hasStroke
            strokeWidth="0.05mm"
          />
        </footprint>
      }
      schX={-9.2}
      schY={-6.0}
      schOrientation="vertical"
      connections={{
        pin1: "net.TS",
        pin2: "net.GND",
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
        pin1: "net.BAT",
        pin2: "net.GND",
      }}
    />

    <resistor
      name="R1"
      displayName="40 mA charge termination"
      resistance="2.94k"
      footprint="0603"
      schX={-1.1}
      schY={-3.75}
      schRotation="270deg"
      connections={{
        pin1: "net.ITERM",
        pin2: "net.GND",
      }}
    />

    <resistor
      name="R2"
      displayName="500 mA adapter-mode input limit"
      resistance="3.09k"
      footprint="0603"
      schX={0}
      schY={-3.75}
      schRotation="270deg"
      connections={{
        pin1: "net.ILIM",
        pin2: "net.GND",
      }}
    />

    <resistor
      name="R3"
      displayName="400 mA fast-charge current"
      resistance="2.21k"
      footprint="0603"
      schX={1.1}
      schY={-3.75}
      schRotation="270deg"
      connections={{
        pin1: "net.ISET",
        pin2: "net.GND",
      }}
    />

    {/* 46.4 kOhm programs TI's nominal 6.25-hour fast-charge safety timer.
        Grounding TMR would disable both precharge and fast-charge timers. */}
    <resistor
      name="R8"
      displayName="6.25 hour safety timer"
      resistance="46.4k"
      tolerance="1%"
      footprint="0603"
      schX={2.2}
      schY={-3.75}
      schRotation="270deg"
      connections={{
        pin1: "net.TMR",
        pin2: "net.GND",
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
        pin1: "net.OUT",
        pin2: "net.N_PGOOD_LED_A",
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
        anode: "net.N_PGOOD_LED_A",
        cathode: "net.N_PGOOD_LED",
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
        pin1: "net.OUT",
        pin2: "net.N_CHG_LED_A",
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
        anode: "net.N_CHG_LED_A",
        cathode: "net.N_CHG_LED",
      }}
    />

    <trace from="U1.OUT" to="net.OUT" />
  </subcircuit>
);

export default BatteryManagement_BQ24074;
