import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

type GroundProps = {
  from: string;
  schX: number;
  schY: number;
  anchorSide?: "left" | "top" | "right" | "bottom";
};

const Ground = ({ from, schX, schY, anchorSide = "top" }: GroundProps) => (
  <netlabel
    net="SGND"
    connectsTo={from}
    schX={schX}
    schY={schY}
    anchorSide={anchorSide}
  />
);

/**
 * TIDA-01141 bi-directional high-side current and voltage sensing circuit.
 * Component values, connectivity, and placement follow TI's native Altium
 * design and the published TIDRP25 reference schematic (sheet 2 of 3).
 * @see https://www.ti.com/lit/pdf/TIDRP25
 */
export const TIDA01141_CurrentVoltageSense = (props: SubcircuitProps) => (
  <subcircuit
    {...props}
    schMaxTraceDistance="4mm"
    schTraceAutoLabelEnabled={false}
  >
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
    />
    <capacitor
      name="C5"
      capacitance="0.1uF"
      footprint="0603"
      schX={-11.5}
      schY={1.3}
      schRotation={-90}
    />
    <resistor
      name="R7"
      resistance={4.75}
      footprint="0603"
      schX={-8}
      schY={2}
      connections={{ pin2: ["C7.pin1", "U1.pin2"] }}
    />
    <resistor
      name="R9"
      resistance={4.75}
      footprint="0603"
      schX={-8}
      schY={1.1}
      connections={{ pin2: ["C7.pin2", "U1.pin3"] }}
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
    />
    <capacitor
      name="C9"
      capacitance="1000pF"
      footprint="0603"
      schX={-7}
      schY={0.2}
      schRotation={-90}
    />

    <netlabel
      net="LV_AUX_3_3V"
      connectsTo={["C6.pin1", "C5.pin1", "U1.pin5"]}
      schX={-12.1}
      schY={2.45}
      anchorSide="bottom"
    />
    <trace from="C6.pin2" to="C5.pin2" />
    <Ground from="C6.pin2" schX={-12.1} schY={0} />

    <netlabel
      net="IBAT_HS_POS"
      connectsTo="R7.pin1"
      schX={-8.8}
      schY={2}
      anchorSide="right"
    />
    <netlabel
      net="IBAT_HS_NEG"
      connectsTo="R9.pin1"
      schX={-8.8}
      schY={1.1}
      anchorSide="right"
    />

    <trace path={["C9.pin1", "U1.pin6", "U1.pin7"]} />
    <netlabel
      net="VREF"
      connectsTo="C9.pin1"
      schX={-7.7}
      schY={0.5}
      anchorSide="right"
    />
    <Ground from="C9.pin2" schX={-7} schY={-0.75} />

    <trace from="U1.pin1" to="U1.pin4" />
    <Ground from="U1.pin4" schX={-2.6} schY={-0.25} />
    <netlabel
      net="IBAT_HS"
      connectsTo="U1.pin8"
      schX={-1.75}
      schY={2}
      anchorSide="left"
    />

    {/* LM393 current-window comparator */}
    <resistor
      name="R5"
      resistance={1000}
      footprint="0805"
      schX={-0.1}
      schY={1.3}
      connections={{
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
    />
    <resistor
      name="R10"
      resistance={1000}
      footprint="0603"
      schX={2.05}
      schY={1}
      schRotation={-90}
    />
    <resistor
      name="R11"
      resistance={10000}
      footprint="0603"
      schX={3.35}
      schY={2.6}
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
      connections={{ pin1: ["U2A.pin2", "net.LTV"] }}
    />
    <resistor
      name="R12"
      resistance={3320000}
      footprint="0603"
      schX={4.8}
      schY={2.3}
    />
    <capacitor name="C1" capacitance="1uF" footprint="0603" schX={6} schY={4} />

    <netlabel
      net="IBAT_HS"
      connectsTo="R5.pin1"
      schX={-1}
      schY={1.3}
      anchorSide="right"
    />
    <trace from="C8.pin2" to="R10.pin2" />
    <Ground from="C8.pin2" schX={0.75} schY={0.05} />

    <Ground from="C3.pin2" schX={2.4} schY={2.1} />
    <trace from="R12.pin2" to="U2A.pin4" />

    <netlabel
      net="LV_AUX_3_3V"
      connectsTo={["U2A.pin5", "C1.pin1"]}
      schX={4.8}
      schY={4}
      anchorSide="bottom"
    />
    <Ground from="C1.pin2" schX={6.7} schY={3.7} />
    <Ground from="U2A.pin3" schX={4.8} schY={1.95} />

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
      schY={-0.75}
      schRotation={-90}
    />
    <resistor
      name="R13"
      resistance={10000}
      footprint="0603"
      schX={3.5}
      schY={-0.17}
      connections={{
        pin2: ["U2B.pin1", "R14.pin1"],
      }}
    />
    <resistor
      name="R14"
      resistance={3320000}
      footprint="0603"
      schX={4.8}
      schY={-0.95}
    />
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint="0603"
      schX={6}
      schY={0.7}
    />

    <netlabel
      net="HTV"
      connectsTo={["C10.pin1", "R13.pin1"]}
      schX={1.7}
      schY={-0.17}
      anchorSide="right"
    />
    <Ground from="C10.pin2" schX={2.4} schY={-1.4} />
    <trace from="R14.pin2" to="U2B.pin4" />

    <netlabel
      net="LV_AUX_3_3V"
      connectsTo={["U2B.pin5", "C4.pin1"]}
      schX={4.8}
      schY={0.7}
      anchorSide="bottom"
    />
    <Ground from="C4.pin2" schX={6.7} schY={0.15} />
    <Ground from="U2B.pin3" schX={4.8} schY={-1.4} />

    <resistor
      name="R15"
      resistance={3320}
      footprint="0603"
      schX={7.4}
      schY={2.7}
      schRotation={-90}
    />
    <netlabel
      net="LV_AUX_3_3V"
      connectsTo="R15.pin1"
      schX={7.4}
      schY={3.55}
      anchorSide="bottom"
    />
    <netlabel
      net="IBAT_ALERT"
      connectsTo={["U2A.pin4", "U2B.pin4", "R15.pin2"]}
      schX={8.6}
      schY={1.3}
      anchorSide="left"
    />

    {/* Precision reference and voltage thresholds */}
    <resistor
      name="R1"
      resistance={5110}
      footprint="0603"
      schX={-3.8}
      schY={-3.5}
      schRotation={-90}
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
    <netlabel
      net="LV_AUX_3_3V"
      connectsTo="R1.pin1"
      schX={-3.8}
      schY={-2.75}
      anchorSide="bottom"
    />
    <trace from="R1.pin2" to="U3_SYMBOL.pin2" />
    <netlabel
      net="VREF"
      connectsTo="R1.pin2"
      schX={-3.1}
      schY={-4.45}
      anchorSide="left"
    />
    <Ground from="U3_SYMBOL.pin1" schX={-3.8} schY={-6.1} />

    <resistor
      name="R2"
      resistance={24300}
      footprint="0603"
      schX={-0.6}
      schY={-3.5}
      schRotation={-90}
    />
    <resistor
      name="R3"
      resistance={14300}
      footprint="0603"
      schX={-0.6}
      schY={-4.8}
      schRotation={-90}
    />
    <resistor
      name="R4"
      resistance={4120}
      footprint="0603"
      schX={-0.6}
      schY={-6.1}
      schRotation={-90}
    />
    <netlabel
      net="LV_AUX_3_3V"
      connectsTo="R2.pin1"
      schX={-0.6}
      schY={-2.75}
      anchorSide="bottom"
    />
    <trace from="R2.pin2" to="R3.pin1" />
    <netlabel
      net="HTV"
      connectsTo="R2.pin2"
      schX={0.2}
      schY={-4.15}
      anchorSide="left"
    />
    <trace from="R3.pin2" to="R4.pin1" />
    <netlabel
      net="LTV"
      connectsTo="R3.pin2"
      schX={0.2}
      schY={-5.45}
      anchorSide="left"
    />
    <Ground from="R4.pin2" schX={-0.6} schY={-7.2} />

    {/* Six-pin interface connector, matching TIDA-01141 sheet 2 */}
    <pinheader
      name="J1"
      pinCount={6}
      manufacturerPartNumber="TSW-106-08-G-S-RA"
      footprint="pinrow6_p2.54mm"
      schX={5.25}
      schY={-5.45}
      schFacingDirection="left"
    />
    <Ground from="J1.pin1" schX={3.45} schY={-4.95} anchorSide="right" />
    <netlabel
      net="IBAT_HS_POS"
      connectsTo="J1.pin2"
      schX={3.75}
      schY={-5.15}
      anchorSide="right"
    />
    <netlabel
      net="IBAT_HS_NEG"
      connectsTo="J1.pin3"
      schX={3.75}
      schY={-5.35}
      anchorSide="right"
    />
    <netlabel
      net="LV_AUX_3_3V"
      connectsTo="J1.pin4"
      schX={3.75}
      schY={-5.55}
      anchorSide="right"
    />
    <netlabel
      net="IBAT_HS"
      connectsTo="J1.pin5"
      schX={3.75}
      schY={-5.75}
      anchorSide="right"
    />
    <netlabel
      net="IBAT_ALERT"
      connectsTo="J1.pin6"
      schX={3.75}
      schY={-5.95}
      anchorSide="right"
    />
  </subcircuit>
);

export default TIDA01141_CurrentVoltageSense;
