import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

/** TIDA-01141 isolated current and voltage sense.
 * Source placement and connectivity were extracted from TI's native Altium sheet (TIDRP25 sheet 2).
 * @see https://www.ti.com/lit/pdf/TIDRP25
 */
export const TIDA01141_CurrentVoltageSense = (props: SubcircuitProps) => (
  <subcircuit
    {...props}
    routingDisabled
    schMaxTraceDistance="100mm"
    schTraceAutoLabelEnabled={false}
  >
    <schematictext
      text="TIDA-01141 isolated current and voltage sense"
      schX={0}
      schY={9.5}
      fontSize={0.7}
    />
    <chip
      name="U2A"
      schX={6.5}
      schY={4.375}
      manufacturerPartNumber="LM393AD"
      footprint="pinrow5_p2.54mm"
      pinLabels={{
        pin2: "IN-",
        pin3: "IN+",
        pin1: "OUT",
        pin4: "V-",
        pin8: "V+",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [3, 2] },
        rightSide: { direction: "top-to-bottom", pins: [1] },
        topSide: { direction: "left-to-right", pins: [8] },
        bottomSide: { direction: "left-to-right", pins: [4] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="U1"
      schX={-3.875}
      schY={1.5}
      manufacturerPartNumber="INA240A2PW"
      footprint="pinrow8_p2.54mm"
      pinLabels={{
        pin1: "GND",
        pin2: "IN+",
        pin3: "IN-",
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
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="U3"
      schX={-3.875}
      schY={-4.75}
      manufacturerPartNumber="LM4040D30IDBZR"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin1: "CATHODE", pin2: "ANODE", pin3: "NC" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [3] },
        rightSide: { direction: "top-to-bottom", pins: [1, 2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <capacitor
      name="C4"
      schX={7.375}
      schY={1.625}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <chip
      name="U2B"
      schX={6.5}
      schY={0.375}
      manufacturerPartNumber="LM393AD"
      footprint="pinrow5_p2.54mm"
      pinLabels={{
        pin5: "IN+",
        pin6: "IN-",
        pin7: "OUT",
        pin4: "V-",
        pin8: "V+",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [5, 6] },
        rightSide: { direction: "top-to-bottom", pins: [7] },
        topSide: { direction: "left-to-right", pins: [8] },
        bottomSide: { direction: "left-to-right", pins: [4] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="J1"
      schX={8.375}
      schY={-4.5}
      manufacturerPartNumber="TSW-106-08-G-S-RA"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin5: "5",
        pin4: "4",
        pin1: "1",
        pin2: "2",
        pin3: "3",
        pin6: "6",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2, 3, 4, 5, 6] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <capacitor
      name="C8"
      schX={3.875}
      schY={1.75}
      capacitance="1000pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C1"
      schX={7.25}
      schY={5.5}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C5"
      schX={-9.5}
      schY={1.75}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C6"
      schX={-10.625}
      schY={1.75}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C7"
      schX={-5.875}
      schY={1.625}
      capacitance="0.01uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R7"
      schX={-6.625}
      schY={2.125}
      resistance="4.75ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R9"
      schX={-6.625}
      schY={1.125}
      resistance="4.75ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C9"
      schX={-6.625}
      schY={0.5}
      capacitance="1000pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C3"
      schX={3.875}
      schY={4.25}
      capacitance="1000pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C10"
      schX={3.875}
      schY={-0.25}
      capacitance="1000pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R10"
      schX={4.375}
      schY={1.75}
      resistance="1.00k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R11"
      schX={5.375}
      schY={3.125}
      resistance="10.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R12"
      schX={7.375}
      schY={3.75}
      resistance="3.32Meg"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R14"
      schX={7.375}
      schY={-0.25}
      resistance="3.32Meg"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R13"
      schX={4.875}
      schY={0.125}
      resistance="10.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R15"
      schX={10.625}
      schY={3.875}
      resistance="3.32k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R1"
      schX={-3.625}
      schY={-3}
      resistance="5.11k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R2"
      schX={-1.125}
      schY={-3}
      resistance="24.3k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R3"
      schX={-1.125}
      schY={-4.25}
      resistance="14.3k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R4"
      schX={-1.125}
      schY={-5.5}
      resistance="4.12k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R5"
      schX={2.625}
      schY={2.375}
      resistance="1.00k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <trace from="U2A.pin2" to="R11.pin1" />
    <trace from="R11.pin1" to="R12.pin2" />
    <trace from="U2A.pin3" to="C3.pin2" />
    <trace from="U2A.pin3" to="net.LTV" schDisplayLabel="LTV" />
    <trace from="U2A.pin1" to="R12.pin1" />
    <trace from="R12.pin1" to="R15.pin2" />
    <trace from="R12.pin1" to="U2B.pin7" />
    <trace from="U2B.pin7" to="R14.pin1" />
    <trace from="U2A.pin1" to="net.IBAT_ALERT" schDisplayLabel="IBAT_ALERT" />
    <trace from="U2A.pin4" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="U2A.pin8" to="C1.pin2" />
    <trace from="U2A.pin8" to="net.LV_AUX_3_3V" schDisplayLabel="LV_AUX_3.3V" />
    <trace from="U1.pin1" to="U1.pin4" />
    <trace from="U1.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="U1.pin2" to="C7.pin1" />
    <trace from="C7.pin1" to="R7.pin1" />
    <trace from="U1.pin3" to="C7.pin2" />
    <trace from="C7.pin2" to="R9.pin1" />
    <trace from="U1.pin5" to="C5.pin1" />
    <trace from="C5.pin1" to="C6.pin2" />
    <trace from="U1.pin5" to="net.LV_AUX_3_3V" schDisplayLabel="LV_AUX_3.3V" />
    <trace from="U1.pin6" to="U1.pin7" />
    <trace from="U1.pin7" to="C9.pin2" />
    <trace from="U1.pin6" to="net.VREF" schDisplayLabel="VREF" />
    <trace from="U1.pin8" to="net.IBAT_HS" schDisplayLabel="IBAT_HS" />
    <trace from="U3.pin1" to="R1.pin2" />
    <trace from="U3.pin1" to="net.VREF" schDisplayLabel="VREF" />
    <trace from="U3.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C4.pin1" to="U2B.pin8" />
    <trace from="C4.pin1" to="net.LV_AUX_3_3V" schDisplayLabel="LV_AUX_3.3V" />
    <trace from="C4.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="U2B.pin5" to="R11.pin2" />
    <trace from="R11.pin2" to="R10.pin2" />
    <trace from="R10.pin2" to="C8.pin2" />
    <trace from="C8.pin2" to="R5.pin1" />
    <trace from="U2B.pin6" to="R13.pin2" />
    <trace from="U2B.pin6" to="R14.pin2" />
    <trace from="U2B.pin4" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="J1.pin5" to="net.IBAT_HS" schDisplayLabel="IBAT_HS" />
    <trace from="J1.pin4" to="net.LV_AUX_3_3V" schDisplayLabel="LV_AUX_3.3V" />
    <trace from="J1.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="J1.pin2" to="net.IBAT_HS_" schDisplayLabel="IBAT_HS+" />
    <trace from="J1.pin3" to="net.IBAT_HS_" schDisplayLabel="IBAT_HS-" />
    <trace from="J1.pin6" to="net.IBAT_ALERT" schDisplayLabel="IBAT_ALERT" />
    <trace from="C8.pin1" to="R10.pin1" />
    <trace from="C8.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C1.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C5.pin2" to="C6.pin1" />
    <trace from="C5.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="R7.pin2" to="net.IBAT_HS_" schDisplayLabel="IBAT_HS+" />
    <trace from="R9.pin2" to="net.IBAT_HS_" schDisplayLabel="IBAT_HS-" />
    <trace from="C9.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C3.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C10.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C10.pin2" to="R13.pin1" />
    <trace from="C10.pin2" to="net.HTV" schDisplayLabel="HTV" />
    <trace from="R15.pin1" to="net.LV_AUX_3_3V" schDisplayLabel="LV_AUX_3.3V" />
    <trace from="R1.pin1" to="net.LV_AUX_3_3V" schDisplayLabel="LV_AUX_3.3V" />
    <trace from="R2.pin1" to="net.LV_AUX_3_3V" schDisplayLabel="LV_AUX_3.3V" />
    <trace from="R2.pin2" to="R3.pin1" />
    <trace from="R2.pin2" to="net.HTV" schDisplayLabel="HTV" />
    <trace from="R3.pin2" to="R4.pin1" />
    <trace from="R3.pin2" to="net.LTV" schDisplayLabel="LTV" />
    <trace from="R4.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="R5.pin2" to="net.IBAT_HS" schDisplayLabel="IBAT_HS" />
  </subcircuit>
);

export default TIDA01141_CurrentVoltageSense;
