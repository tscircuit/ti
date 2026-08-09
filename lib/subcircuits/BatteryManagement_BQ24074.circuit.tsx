import type { SubcircuitProps } from "@tscircuit/props";
import { BQ24074RGTR } from "../chips/BQ24074RGTR.circuit.tsx";

export const BatteryManagement_BQ24074 = (props: SubcircuitProps) => (
  <subcircuit width={100} height={100} {...props}>
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
        TMR: "net.GND",
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
        pin1: "net.TS",
        pin2: "net.BAT",
        pin3: "net.GND",
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
      resistance="4.12k"
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
      resistance="1.18k"
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
      resistance="1.13k"
      footprint="0603"
      schX={1.1}
      schY={-3.75}
      schRotation="270deg"
      connections={{
        pin1: "net.ISET",
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
