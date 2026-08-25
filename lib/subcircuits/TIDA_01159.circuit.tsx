import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

const ucc21520PinLabels = {
  pin1: ["INA"],
  pin2: ["INB"],
  pin3: ["VCCI", "VCCI3"],
  pin4: ["GND"],
  pin5: ["DISABLE"],
  pin6: ["DT"],
  pin7: ["NC", "NC7"],
  pin8: ["VCCI", "VCCI8"],
  pin9: ["VSS2"],
  pin10: ["OUTB"],
  pin11: ["VDD2"],
  pin12: ["NC", "NC12"],
  pin13: ["NC", "NC13"],
  pin14: ["VSS1"],
  pin15: ["OUTA"],
  pin16: ["VDD1"],
} as const;

/**
 * TIDA-01159 compact reinforced-isolated half-bridge gate-drive reference.
 *
 * This is the complete populated circuit on sheet 2 of TI schematic TIDRP15.
 * The empty drawing border, PCB, assembly, and mechanical files are omitted.
 * Component values, manufacturer part numbers, signal names, pin assignments,
 * and relative placement follow TI revision E1.
 *
 * Reference design: https://www.ti.com/tool/TIDA-01159
 */
export const TIDA_01159 = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="4mm"
    schTraceAutoLabelEnabled={false}
    routingDisabled
    {...props}
  >
    <schematictext
      text="TIDA-01159 — COMPACT ISOLATED GATE DRIVE"
      schX={-12.8}
      schY={7.2}
      anchor="left"
      fontSize={0.42}
    />

    <chip
      name="U1"
      manufacturerPartNumber="UCC21520DW"
      footprint="soic16_wide"
      pinLabels={ucc21520PinLabels}
      schX={-4.1}
      schY={3.6}
      schWidth={4.5}
      schHeight={5.5}
      noConnect={["pin5", "pin7", "pin12", "pin13"]}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 5, 6, 7, 3, 8, 4],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [16, 15, 14, 13, 12, 11, 10, 9],
        },
      }}
      connections={{
        pin1: "net.HV_HS_PWM",
        pin2: "net.HV_LS_PWM",
        pin3: "net.LV_AUX_5V",
        pin4: "net.SGND",
        pin6: "net.DT_SET",
        pin8: "net.LV_AUX_5V",
        pin9: "net.HV_SNODE",
        pin10: "net.OUTB",
        pin11: "net.BOOTSTRAP_VDD",
        pin14: "net.HV_GND",
        pin15: "net.OUTA",
        pin16: "net.AUX_12V",
      }}
    />

    <resistor
      name="R1"
      resistance="100"
      footprint="0603"
      schX={-10.6}
      schY={5.7}
      connections={{ pin1: "net.HV_HS_PWM_IN", pin2: "net.HV_HS_PWM" }}
    />
    <resistor
      name="R2"
      resistance="100"
      footprint="0603"
      schX={-10.6}
      schY={5.1}
      connections={{ pin1: "net.HV_LS_PWM_IN", pin2: "net.HV_LS_PWM" }}
    />
    <capacitor
      name="C5"
      capacitance="22pF"
      footprint="0603"
      schX={-9.2}
      schY={6.2}
      schOrientation="vertical"
      connections={{ pin1: "net.HV_HS_PWM", pin2: "net.SGND" }}
    />
    <capacitor
      name="C6"
      capacitance="22pF"
      footprint="0603"
      schX={-9.2}
      schY={4.4}
      schOrientation="vertical"
      connections={{ pin1: "net.HV_LS_PWM", pin2: "net.SGND" }}
    />
    <resistor
      name="R4"
      resistance="11k"
      tolerance="1%"
      footprint="0603"
      schX={-7.9}
      schY={4.2}
      connections={{ pin1: "net.DT_SET", pin2: "net.SGND" }}
    />

    <capacitor
      name="C3"
      capacitance="2.2uF"
      footprint="0603"
      schX={-11.5}
      schY={2.1}
      schOrientation="vertical"
      connections={{ pin1: "net.LV_AUX_5V", pin2: "net.SGND" }}
    />
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint="0603"
      schX={-10.2}
      schY={2.1}
      schOrientation="vertical"
      connections={{ pin1: "net.LV_AUX_5V", pin2: "net.SGND" }}
    />

    <resistor
      name="R5"
      resistance="0"
      footprint="0805"
      schX={-0.55}
      schY={5}
      connections={{ pin1: "net.OUTA", pin2: "net.GD_LS" }}
    />
    <capacitor
      name="C2"
      capacitance="0.22uF"
      footprint="1206"
      schX={3.05}
      schY={5}
      schOrientation="vertical"
      connections={{ pin1: "net.AUX_12V", pin2: "net.HV_GND" }}
    />
    <diode
      name="D1"
      manufacturerPartNumber="UFM15PL-TP"
      footprint="sod123"
      schX={3.95}
      schY={3.35}
      schRotation={180}
      connections={{ anode: "net.AUX_12V", cathode: "net.BOOTSTRAP_VDD" }}
    />
    <capacitor
      name="C1"
      capacitance="0.22uF"
      footprint="1206"
      schX={3}
      schY={2.5}
      schOrientation="vertical"
      connections={{ pin1: "net.BOOTSTRAP_VDD", pin2: "net.HV_SNODE" }}
    />
    <resistor
      name="R3"
      resistance="0"
      footprint="0805"
      schX={-0.55}
      schY={1.4}
      connections={{ pin1: "net.OUTB", pin2: "net.GD_HS" }}
    />

    <chip
      name="J1"
      manufacturerPartNumber="61300421021"
      footprint="pinrow4_p2.54mm"
      pinLabels={{
        pin1: ["HV_HS_PWM"],
        pin2: ["HV_LS_PWM"],
        pin3: ["LV_AUX_5V"],
        pin4: ["SGND"],
      }}
      schX={10.45}
      schY={3.85}
      schWidth={1.7}
      schHeight={1.5}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 3] },
        rightSide: { direction: "top-to-bottom", pins: [2, 4] },
      }}
      connections={{
        pin1: "net.HV_HS_PWM_IN",
        pin2: "net.HV_LS_PWM_IN",
        pin3: "net.LV_AUX_5V",
        pin4: "net.SGND",
      }}
    />
    <chip
      name="J2"
      manufacturerPartNumber="TSW-102-08-G-S-RA"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: ["HV_SNODE"], pin2: ["GD_HS"] }}
      schX={10}
      schY={2.05}
      schWidth={1.5}
      schHeight={1.2}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
      }}
      connections={{ pin1: "net.HV_SNODE", pin2: "net.GD_HS" }}
    />
    <chip
      name="J3"
      manufacturerPartNumber="TSW-103-08-G-S-RA"
      footprint="pinrow3_p2.54mm"
      pinLabels={{
        pin1: ["HV_GND"],
        pin2: ["GD_LS"],
        pin3: ["HV_AUX_12V"],
      }}
      schX={10}
      schY={0.4}
      schWidth={1.8}
      schHeight={1.5}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2, 3] },
      }}
      connections={{
        pin1: "net.HV_GND",
        pin2: "net.GD_LS",
        pin3: "net.HV_AUX_12V",
      }}
    />

    <chip
      name="U2"
      manufacturerPartNumber="SN6505BDBVR"
      footprint="sot23_6"
      pinLabels={{
        pin1: ["D1"],
        pin2: ["VCC"],
        pin3: ["D2"],
        pin4: ["GND"],
        pin5: ["EN"],
        pin6: ["CLK"],
      }}
      schX={-3.85}
      schY={-2.75}
      schWidth={3.2}
      schHeight={2.6}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2, 5, 6] },
        rightSide: { direction: "top-to-bottom", pins: [1, 3, 4] },
      }}
      connections={{
        pin1: "net.T1_PRIMARY_TOP",
        pin2: "net.LV_AUX_5V",
        pin3: "net.T1_PRIMARY_BOTTOM",
        pin4: "net.SGND",
        pin5: "net.LV_AUX_5V",
        pin6: "net.SGND",
      }}
    />
    <capacitor
      name="C7"
      capacitance="10uF"
      footprint="0805"
      schX={-6.4}
      schY={-2.6}
      schOrientation="vertical"
      connections={{ pin1: "net.LV_AUX_5V", pin2: "net.SGND" }}
    />

    <chip
      name="T1"
      displayName="38uH"
      manufacturerPartNumber="750343341"
      footprint="pinrow6"
      pinLabels={{
        pin1: ["PRI_TOP"],
        pin2: ["PRI_CT"],
        pin3: ["PRI_BOTTOM"],
        pin4: ["SEC_BOTTOM"],
        pin5: ["SEC_CT"],
        pin6: ["SEC_TOP"],
      }}
      schX={0.9}
      schY={-2.5}
      schWidth={2.1}
      schHeight={3.1}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2, 3] },
        rightSide: { direction: "bottom-to-top", pins: [4, 5, 6] },
      }}
      connections={{
        pin1: "net.T1_PRIMARY_TOP",
        pin2: "net.LV_AUX_5V",
        pin3: "net.T1_PRIMARY_BOTTOM",
        pin4: "net.T1_SECONDARY_BOTTOM",
        pin5: "net.HV_GND",
        pin6: "net.T1_SECONDARY_TOP",
      }}
    />
    <diode
      name="D2"
      manufacturerPartNumber="1N5819HW-7-F"
      footprint="sod123"
      schX={3}
      schY={-1.2}
      connections={{ anode: "net.T1_SECONDARY_TOP", cathode: "net.RECT_AUX" }}
    />
    <diode
      name="D3"
      manufacturerPartNumber="1N5819HW-7-F"
      footprint="sod123"
      schX={3}
      schY={-3.2}
      connections={{
        anode: "net.T1_SECONDARY_BOTTOM",
        cathode: "net.RECT_AUX",
      }}
    />
    <resistor
      name="R6"
      resistance="0"
      footprint="0603"
      schX={5.95}
      schY={-1.4}
      connections={{ pin1: "net.RECT_AUX", pin2: "net.AUX_12V" }}
    />
    <capacitor
      name="C8"
      capacitance="0.1uF"
      footprint="0603"
      schX={5.85}
      schY={-3.1}
      schOrientation="vertical"
      connections={{ pin1: "net.RECT_AUX", pin2: "net.HV_GND" }}
    />
    <capacitor
      name="C9"
      capacitance="10uF"
      footprint="0805"
      schX={4.95}
      schY={-4.1}
      schOrientation="vertical"
      connections={{ pin1: "net.RECT_AUX", pin2: "net.HV_GND" }}
    />
    <resistor
      name="R7"
      resistance="0"
      footprint="0603"
      schX={8.1}
      schY={-0.95}
      schOrientation="vertical"
      connections={{ pin1: "net.AUX_12V", pin2: "net.HV_AUX_12V" }}
    />

    <port
      name="LV_AUX_5V"
      direction="left"
      schX={-13}
      schY={1.75}
      connectsTo="net.LV_AUX_5V"
    />
    <port
      name="HV_HS_PWM"
      direction="left"
      schX={-13}
      schY={5.7}
      connectsTo="net.HV_HS_PWM_IN"
    />
    <port
      name="HV_LS_PWM"
      direction="left"
      schX={-13}
      schY={5.1}
      connectsTo="net.HV_LS_PWM_IN"
    />
    <port
      name="HV_SNODE"
      direction="right"
      schX={12}
      schY={2.35}
      connectsTo="net.HV_SNODE"
    />
    <port
      name="GD_HS"
      direction="right"
      schX={12}
      schY={1.75}
      connectsTo="net.GD_HS"
    />
    <port
      name="HV_GND"
      direction="right"
      schX={12}
      schY={0.75}
      connectsTo="net.HV_GND"
    />
    <port
      name="GD_LS"
      direction="right"
      schX={12}
      schY={0.35}
      connectsTo="net.GD_LS"
    />
    <port
      name="HV_AUX_12V"
      direction="right"
      schX={12}
      schY={-0.05}
      connectsTo="net.HV_AUX_12V"
    />
    <port
      name="SGND"
      direction="left"
      schX={-13}
      schY={-3.8}
      connectsTo="net.SGND"
    />
  </subcircuit>
);

export default TIDA_01159;
