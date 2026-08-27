import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

/**
 * TIDA-01141 bi-directional high-side current and voltage sensing circuit.
 * Component values and connectivity follow TI's native Altium design and the
 * published TIDRP25 reference schematic (sheet 2 of 3). The comparator
 * feedback placement is adapted to the released symbol's fixed input order so
 * independent nets remain visually distinct without manual trace hints.
 * @see https://www.ti.com/lit/pdf/TIDRP25
 */
export const CurrentVoltageSense_TIDA01141 = (props: SubcircuitProps) => (
  <subcircuit {...props} schMaxTraceDistance="4mm">
    <net name="SGND" isGroundNet />
    <net name="LV_AUX_3_3V" isPowerNet />
    <net name="IBAT_HS_POS" />
    <net name="IBAT_HS_NEG" />
    <net name="IBAT_HS" />
    <net name="IBAT_ALERT" />
    <net name="VREF" />
    <net name="HTV" />
    <net name="LTV" />

    {/* INA240 current-sense signal path */}
    <capacitor
      name="C6"
      capacitance="1uF"
      footprint="0603"
      schX={-12.7}
      schY={1.3}
      schRotation={-90}
      connections={{ pin1: "net.LV_AUX_3_3V", pin2: "net.SGND" }}
    />
    <capacitor
      name="C5"
      capacitance="0.1uF"
      footprint="0603"
      schX={-11.5}
      schY={1.3}
      schRotation={-90}
      connections={{ pin1: "net.LV_AUX_3_3V", pin2: "net.SGND" }}
    />
    <resistor
      name="R7"
      resistance={4.75}
      footprint="0603"
      schX={-8}
      schY={2}
      connections={{
        pin1: "net.IBAT_HS_POS",
        pin2: ["C7.pin1", "U1.pin2"],
      }}
    />
    <resistor
      name="R9"
      resistance={4.75}
      footprint="0603"
      schX={-8}
      schY={1.1}
      connections={{
        pin1: "net.IBAT_HS_NEG",
        pin2: ["C7.pin2", "U1.pin3"],
      }}
    />
    <capacitor
      name="C7"
      capacitance="0.01uF"
      footprint="0603"
      schX={-7.1}
      schY={1.55}
      schRotation={-90}
    />
    <chip
      name="U1"
      manufacturerPartNumber="INA240A2PW"
      footprint="tssop8_p0.65mm"
      schX={-4.1}
      schY={1.3}
      schWidth="3.2mm"
      schHeight="3.4mm"
      pinLabels={{
        pin1: "GND",
        pin2: "IN_POS",
        pin3: "IN_NEG",
        pin4: "GND",
        pin5: "VS",
        pin6: "REF2",
        pin7: "REF1",
        pin8: "OUT",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [5, 2, 3, 7, 6] },
        rightSide: { direction: "top-to-bottom", pins: [8, 1, 4] },
      }}
      schPinStyle={{
        pin2: { marginTop: 0.3 },
        pin3: { marginTop: 0.3 },
        pin7: { marginTop: 0.3 },
        pin6: { marginTop: 0.3 },
        pin1: { marginTop: 0.75 },
        pin4: { marginTop: 0.3 },
      }}
      connections={{
        pin1: "net.SGND",
        pin4: "net.SGND",
        pin5: "net.LV_AUX_3_3V",
        pin6: "net.VREF",
        pin7: "net.VREF",
        pin8: "net.IBAT_HS",
      }}
    />
    <capacitor
      name="C9"
      capacitance="1000pF"
      footprint="0603"
      schX={-7}
      schY={0.2}
      schRotation={-90}
      connections={{ pin1: "net.VREF", pin2: "net.SGND" }}
    />

    {/* LM393 current-window comparator */}
    <resistor
      name="R5"
      resistance={1000}
      footprint="0805"
      schX={-0.1}
      schY={1.3}
      connections={{
        pin1: "net.IBAT_HS",
        pin2: ["C8.pin1", "R10.pin1", "R11.pin2", "U2B.pin2"],
      }}
    />
    <capacitor
      name="C8"
      capacitance="1000pF"
      footprint="0603"
      schX={1.15}
      schY={1}
      schRotation={-90}
      connections={{ pin2: "net.SGND" }}
    />
    <resistor
      name="R10"
      resistance={1000}
      footprint="0603"
      schX={2.05}
      schY={1}
      schRotation={-90}
      connections={{ pin2: "net.SGND" }}
    />
    <resistor
      name="R11"
      resistance={10000}
      footprint="0603"
      schX={3.35}
      schY={2.2}
      schRotation={-90}
      connections={{ pin1: ["U2A.pin1", "R12.pin1"] }}
    />
    <chip
      name="U2"
      manufacturerPartNumber="LM393AD"
      footprint="soic8"
      noSchematicRepresentation
      pinLabels={{
        pin1: "OUTA",
        pin2: "INA_NEG",
        pin3: "INA_POS",
        pin4: "GND",
        pin5: "INB_POS",
        pin6: "INB_NEG",
        pin7: "OUTB",
        pin8: "VCC",
        // Separate display ports keep the two LM393 units' shared rails
        // independently routable while pins 8 and 4 remain the package pins.
        pin9: "VCC_DISPLAY_B",
        pin10: "GND_DISPLAY_B",
      }}
    />
    <schematicsymbol
      name="U2A"
      displayName="U2A"
      chipRef=".U2"
      symbolName="opamp_with_power"
      schX={4.8}
      schY={3}
      connections={{
        inp1: ".U2 > .pin3",
        inp2: ".U2 > .pin2",
        out: ".U2 > .pin1",
        "V+": ".U2 > .pin8",
        "V-": ".U2 > .pin4",
      }}
    />
    <capacitor
      name="C3"
      capacitance="1000pF"
      footprint="0603"
      schX={2.4}
      schY={2.56}
      schRotation={-90}
      connections={{
        pin1: ["U2A.pin2", "net.LTV"],
        pin2: "net.SGND",
      }}
    />
    <resistor
      name="R12"
      resistance={3320000}
      footprint="0603"
      schX={5.9}
      schY={3.85}
    />
    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0603"
      schX={7}
      schY={4.55}
      connections={{ pin1: "net.LV_AUX_3_3V", pin2: "net.SGND" }}
    />
    <trace from="R12.pin2" to="U2A.pin4" />
    <trace from="U2A.pin5" to="net.LV_AUX_3_3V" />
    <trace from="U2A.pin3" to="net.SGND" />

    <schematicsymbol
      name="U2B"
      displayName="U2B"
      chipRef=".U2"
      symbolName="opamp_with_power"
      schX={4.8}
      schY={-0.3}
      connections={{
        inp1: ".U2 > .pin5",
        inp2: ".U2 > .pin6",
        out: ".U2 > .pin7",
        "V+": ".U2 > .pin9",
        "V-": ".U2 > .pin10",
      }}
    />
    <capacitor
      name="C10"
      capacitance="1000pF"
      footprint="0603"
      schX={2.4}
      schY={-0.55}
      schRotation={-90}
      connections={{ pin1: "net.HTV", pin2: "net.SGND" }}
    />
    <resistor
      name="R13"
      resistance={10000}
      footprint="0603"
      schX={3.5}
      schY={0.15}
      connections={{
        pin1: "net.HTV",
        pin2: ["U2B.pin1", "R14.pin1"],
      }}
    />
    <resistor
      name="R14"
      resistance={3320000}
      footprint="0603"
      schX={5.9}
      schY={0.55}
    />
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint="0603"
      schX={7}
      schY={1.8}
      connections={{ pin1: "net.LV_AUX_3_3V", pin2: "net.SGND" }}
    />
    <trace from="R14.pin2" to="U2B.pin4" />
    <trace from="U2B.pin5" to="net.LV_AUX_3_3V" />
    <trace from="U2B.pin3" to="net.SGND" />

    <resistor
      name="R15"
      resistance={3320}
      footprint="0603"
      schX={8.5}
      schY={2.7}
      schRotation={-90}
      connections={{
        pin1: "net.LV_AUX_3_3V",
        pin2: "net.IBAT_ALERT",
      }}
    />
    <trace from="U2A.pin4" to="net.IBAT_ALERT" />
    <trace from="U2B.pin4" to="net.IBAT_ALERT" />

    {/* Precision reference and voltage thresholds */}
    <resistor
      name="R1"
      resistance={5110}
      footprint="0603"
      schX={-3.8}
      schY={-3.5}
      schRotation={-90}
      connections={{
        pin1: "net.LV_AUX_3_3V",
        pin2: ["U3_SYMBOL.pin2", "net.VREF"],
      }}
    />
    <chip
      name="U3"
      manufacturerPartNumber="LM4040D30IDBZR"
      footprint="sot23"
      noSchematicRepresentation
      pinLabels={{ pin1: "CATHODE", pin2: "ANODE", pin3: "NC" }}
    />
    <schematicsymbol
      name="U3_SYMBOL"
      displayName="U3"
      chipRef=".U3"
      symbolName="zener_diode_vert"
      schX={-3.8}
      schY={-5.25}
      connections={{
        pin1: ".U3 > .pin2",
        pin2: ".U3 > .pin1",
      }}
    />
    <trace from="U3_SYMBOL.pin1" to="net.SGND" />

    <resistor
      name="R2"
      resistance={24300}
      footprint="0603"
      schX={-0.6}
      schY={-3.5}
      schRotation={-90}
      connections={{
        pin1: "net.LV_AUX_3_3V",
        pin2: ["R3.pin1", "net.HTV"],
      }}
    />
    <resistor
      name="R3"
      resistance={14300}
      footprint="0603"
      schX={-0.6}
      schY={-4.8}
      schRotation={-90}
      connections={{ pin2: ["R4.pin1", "net.LTV"] }}
    />
    <resistor
      name="R4"
      resistance={4120}
      footprint="0603"
      schX={-0.6}
      schY={-6.1}
      schRotation={-90}
      connections={{ pin2: "net.SGND" }}
    />

    {/* Six-pin interface connector, matching TIDA-01141 sheet 2 */}
    <pinheader
      name="J1"
      pinCount={6}
      manufacturerPartNumber="TSW-106-08-G-S-RA"
      footprint="pinrow6_p2.54mm"
      schX={5.25}
      schY={-5.45}
      schFacingDirection="left"
      connections={{
        pin1: "net.SGND",
        pin2: "net.IBAT_HS_POS",
        pin3: "net.IBAT_HS_NEG",
        pin4: "net.LV_AUX_3_3V",
        pin5: "net.IBAT_HS",
        pin6: "net.IBAT_ALERT",
      }}
    />
  </subcircuit>
);

export default CurrentVoltageSense_TIDA01141;
