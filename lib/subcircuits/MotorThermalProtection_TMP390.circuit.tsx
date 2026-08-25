import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TMP390AQDRLRQ1 } from "../chips/TMP390AQDRLRQ1.circuit.tsx";

export const TMP390_FIGURE_8_3_DEFAULTS = {
  hotTripCelsius: 90,
  hotResetCelsius: 80,
  coldTripCelsius: -25,
  coldResetCelsius: -15,
  hysteresisCelsius: 10,
  rSetAOhms: 78_700,
  rSetBOhms: 215_000,
  outputPullupOhms: 10_000,
  bypassCapacitanceFarads: 0.1e-6,
  sensorSupplyVolts: 3,
  outputPullupSupplyVolts: 3.3,
} as const;

/**
 * Datasheet-derived TMP390-Q1 motor thermal-protection circuit.
 *
 * This is not an exact TI Window Module reference design: TI attaches no
 * schematic/CAD source to that subsystem. Topology and relative placement are
 * derived from TMP390-Q1 datasheet Figure 8-1, using the user-provided
 * 1084 x 602 px capture. Values are from datasheet Figure 8-3:
 * https://www.ti.com/lit/ds/symlink/tmp390-q1.pdf
 *
 * - R1/RSETA = 78.7 kOhm selects a +90 C hot trip (Table 7-1).
 * - R2/RSETB = 215 kOhm selects a -25 C cold trip and 10 C hysteresis
 *   (Table 7-2).
 * - OUTA resets at +80 C; OUTB resets at -15 C.
 * - R3/R4 = 10 kOhm pull-ups and C1 = 0.1 uF.
 *
 * Coordinate transform from the attached Figure 8-1 capture:
 *   schX = (sourcePixelX - 573) * 0.020 mm
 *   schY = (389 - sourcePixelY) * 0.020 mm
 * The source origin is the TMP39x block center at (573, 389) px. Source
 * centers used are C1 (154,376), R1 (274,456), R2 (321,475), R3 (791,290),
 * R4 (859,290), VDD (573,197), VDDIO (824,198), GND (575,549), OUTA
 * (1000,351), and OUTB (1000,427). Refdes are implementation-defined because
 * Figure 8-1 supplies functional labels but no component designators.
 */
export const MotorThermalProtection_TMP390 = (props: SubcircuitProps) => (
  <subcircuit
    routingDisabled
    schAutoLayoutEnabled={false}
    schTraceAutoLabelEnabled={false}
    schMaxTraceDistance="15mm"
    autorouterEffortLevel="10x"
    {...props}
  >
    <net name="VDD" isPowerNet />
    <net name="VDDIO" isPowerNet />
    <net name="GND" isGroundNet />
    <net name="OUTA" />
    <net name="OUTB" />

    <TMP390AQDRLRQ1
      name="U1"
      schX={0}
      schY={0}
      connections={{
        VDD: "net.VDD",
        GND: "net.GND",
        OUTA: "net.OUTA",
        OUTB: "net.OUTB",
      }}
    />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      schX={-8.38}
      schY={0.26}
      schOrientation="vertical"
      connections={{ pin1: "net.VDD", pin2: "net.GND" }}
    />

    <resistor
      name="R1"
      resistance="78.7kohm"
      tolerance="1%"
      schX={-5.98}
      schY={-1.34}
      schOrientation="vertical"
      connections={{ pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      resistance="215kohm"
      tolerance="1%"
      schX={-5.04}
      schY={-1.72}
      schOrientation="vertical"
      connections={{ pin2: "net.GND" }}
    />

    <resistor
      name="R3"
      resistance="10kohm"
      schX={4.36}
      schY={1.98}
      schOrientation="vertical"
      connections={{ pin1: "net.VDDIO", pin2: "net.OUTA" }}
    />
    <resistor
      name="R4"
      resistance="10kohm"
      schX={5.72}
      schY={1.98}
      schOrientation="vertical"
      connections={{ pin1: "net.VDDIO", pin2: "net.OUTB" }}
    />

    <port name="VDD" direction="up" schX={0} schY={3.84} connectsTo="net.VDD" />
    <port
      name="VDDIO"
      direction="up"
      schX={5.02}
      schY={3.82}
      connectsTo="net.VDDIO"
    />
    <port
      name="GND"
      direction="down"
      schX={0.04}
      schY={-3.2}
      connectsTo="net.GND"
    />
    <port
      name="OUTA"
      direction="right"
      schX={8.54}
      schY={0.76}
      connectsTo="net.OUTA"
    />
    <port
      name="OUTB"
      direction="right"
      schX={8.54}
      schY={-0.76}
      connectsTo="net.OUTB"
    />
    <trace from="U1.SETA" to="R1.pin1" />
    <trace from="U1.SETB" to="R2.pin1" />
    <netlabel
      net="OUTA"
      connectsTo="R3.pin2"
      schX={8.54}
      schY={0.76}
      anchorSide="left"
    />
    <netlabel
      net="OUTB"
      connectsTo="R4.pin2"
      schX={8.54}
      schY={-0.76}
      anchorSide="left"
    />
  </subcircuit>
);

export default MotorThermalProtection_TMP390;
