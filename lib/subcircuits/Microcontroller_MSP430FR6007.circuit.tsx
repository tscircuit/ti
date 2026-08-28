import type { SubcircuitProps } from "@tscircuit/props";
import { Fragment } from "react";
import "tscircuit";
import {
  MSP430FR6007IPZ,
  MSP430FR6007IPZ_PIN_LABELS,
} from "../chips/MSP430FR6007IPZ.circuit.tsx";

const ascendingSocketPins = Array.from({ length: 25 }, (_, index) => index + 1);
const descendingSocketPins = [...ascendingSocketPins].reverse();
const sourceLayoutScale = 1.55;
const sourceX = (coordinate: number) => coordinate * sourceLayoutScale;
const sourceY = (coordinate: number) => coordinate * sourceLayoutScale;

/*
 * Keep repeated supply pins as separate labeled stubs, as in Figure B-78.
 * Applying the same small margin to both ends preserves exact IC-to-header
 * alignment while preventing the schematic solver from spanning one rail
 * across adjacent IC or socket pins.
 */
const leftRailPinSpacing = {
  pin5: { marginBottom: "0.5mm" },
  pin8: { marginBottom: "0.5mm" },
} as const;

const topRailPinSpacing = {
  pin89: { marginRight: "0.5mm" },
  pin97: { marginRight: "0.5mm" },
} as const;

const topSocketRailPinSpacing = {
  pin14: { marginRight: "0.5mm" },
  pin22: { marginRight: "0.5mm" },
} as const;

/**
 * Figure B-78 routes each IC1 side through one 25-position target-socket
 * header: J3=1..25, J4=26..50, J5=51..75, and J6=76..100.
 */
const targetSocketNames = ["J3", "J4", "J5", "J6"] as const;
const mcuToTargetSocketLinks = Array.from({ length: 100 }, (_, index) => {
  const mcuPin = index + 1;
  const connectorPin = ((mcuPin - 1) % 25) + 1;
  const connector = targetSocketNames[Math.floor((mcuPin - 1) / 25)];
  const pinDefinition =
    MSP430FR6007IPZ_PIN_LABELS[
      `pin${mcuPin}` as keyof typeof MSP430FR6007IPZ_PIN_LABELS
    ];
  const sourcePinLabel =
    typeof pinDefinition === "string" ? pinDefinition : pinDefinition[0];
  return { mcuPin, connector, connectorPin, sourcePinLabel };
});

const targetSocketNetBreakouts = [
  { connector: "J3", connectorPin: 5, net: "AVSS" },
  { connector: "J3", connectorPin: 6, net: "LFXIN" },
  { connector: "J3", connectorPin: 7, net: "LFXOUT" },
  { connector: "J3", connectorPin: 8, net: "AVSS" },
  { connector: "J3", connectorPin: 9, net: "HFXIN" },
  { connector: "J3", connectorPin: 10, net: "HFXOUT" },
  { connector: "J3", connectorPin: 11, net: "AVSS" },
  { connector: "J3", connectorPin: 3, net: "P1_0" },
  { connector: "J3", connectorPin: 4, net: "P1_1" },
  { connector: "J3", connectorPin: 14, net: "BSL_SDA" },
  { connector: "J3", connectorPin: 15, net: "BSL_SCL" },
  { connector: "J3", connectorPin: 16, net: "BSL_TX" },
  { connector: "J3", connectorPin: 17, net: "BSL_RX" },
  { connector: "J3", connectorPin: 19, net: "P1_3" },
  { connector: "J3", connectorPin: 20, net: "TEST_SBWTCK" },
  { connector: "J3", connectorPin: 21, net: "RESET" },
  { connector: "J3", connectorPin: 22, net: "TDO" },
  { connector: "J3", connectorPin: 23, net: "TDI" },
  { connector: "J3", connectorPin: 24, net: "TMS" },
  { connector: "J3", connectorPin: 25, net: "TCK" },
  { connector: "J4", connectorPin: 1, net: "GND" },
  { connector: "J4", connectorPin: 2, net: "DVCC" },
  { connector: "J5", connectorPin: 1, net: "GND" },
  { connector: "J5", connectorPin: 2, net: "DVCC" },
  { connector: "J5", connectorPin: 25, net: "GND" },
  { connector: "J5", connectorPin: 24, net: "LCDCAP" },
  { connector: "J6", connectorPin: 1, net: "DVCC" },
  { connector: "J6", connectorPin: 10, net: "CH1_IN" },
  { connector: "J6", connectorPin: 12, net: "PVSS" },
  { connector: "J6", connectorPin: 13, net: "PVCC" },
  { connector: "J6", connectorPin: 14, net: "PVSS" },
  { connector: "J6", connectorPin: 16, net: "CH0_IN" },
  { connector: "J6", connectorPin: 21, net: "AVSS" },
  { connector: "J6", connectorPin: 22, net: "USSXTIN" },
  { connector: "J6", connectorPin: 23, net: "USSXTOUT" },
  { connector: "J6", connectorPin: 24, net: "AVSS" },
  { connector: "J6", connectorPin: 25, net: "AVCC" },
] as const;

const supportNetTraces: ReadonlyArray<{
  component: string;
  pin: number;
  net: string;
  name?: string;
  displayLabel?: string;
}> = [
  { component: "C3", pin: 1, net: "AVCC", name: "C3_AVCC" },
  { component: "C3", pin: 2, net: "AVSS" },
  { component: "C11", pin: 1, net: "AVCC" },
  { component: "C11", pin: 2, net: "AVSS" },
  { component: "C16", pin: 1, net: "PVCC", name: "C16_PVCC" },
  { component: "C16", pin: 2, net: "PVSS" },
  { component: "C13", pin: 1, net: "PVCC" },
  { component: "C13", pin: 2, net: "PVSS", name: "C13_PVSS" },
  { component: "C4", pin: 1, net: "DVCC" },
  { component: "C4", pin: 2, net: "GND" },
  { component: "R11", pin: 1, net: "PVSS" },
  { component: "R11", pin: 2, net: "GND" },
  { component: "R12", pin: 1, net: "GND" },
  { component: "R12", pin: 2, net: "AVSS" },
  { component: "R10", pin: 1, net: "GND" },
  { component: "R10", pin: 2, net: "GND" },
  { component: "C10", pin: 1, net: "DVCC" },
  { component: "C10", pin: 2, net: "GND" },
  { component: "C7", pin: 1, net: "DVCC" },
  { component: "C7", pin: 2, net: "GND" },
  { component: "C6", pin: 1, net: "DVCC" },
  { component: "C6", pin: 2, net: "GND" },
  { component: "R7", pin: 1, net: "DVCC", name: "R7_DVCC" },
  {
    component: "R7",
    pin: 2,
    net: "RESET",
    displayLabel: "RESET",
  },
  {
    component: "C5",
    pin: 1,
    net: "RESET",
    name: "C5_RESET_SBWTDIO",
  },
  { component: "C5", pin: 2, net: "GND" },
  { component: "SW2", pin: 1, net: "RESET" },
  { component: "SW2", pin: 2, net: "GND" },
  { component: "SW2", pin: 3, net: "RESET" },
  { component: "SW2", pin: 4, net: "GND" },
  { component: "Q1", pin: 1, net: "LFXOUT" },
  { component: "Q1", pin: 2, net: "LFXIN" },
  { component: "C1", pin: 1, net: "LFXOUT" },
  { component: "C1", pin: 2, net: "AVSS" },
  { component: "C2", pin: 1, net: "LFXIN" },
  { component: "C2", pin: 2, net: "AVSS" },
  { component: "R5", pin: 1, net: "LFXOUT" },
  { component: "R5", pin: 2, net: "LFXOUT_ext" },
  { component: "R6", pin: 1, net: "LFXIN" },
  { component: "R6", pin: 2, net: "LFXIN_ext" },
  { component: "Q2", pin: 1, net: "HFXOUT" },
  { component: "Q2", pin: 2, net: "HFXIN" },
  { component: "C8", pin: 1, net: "HFXOUT" },
  { component: "C8", pin: 2, net: "AVSS" },
  { component: "C9", pin: 1, net: "HFXIN" },
  { component: "C9", pin: 2, net: "AVSS" },
  { component: "R9", pin: 1, net: "HFXOUT" },
  { component: "R9", pin: 2, net: "HFXOUT_ext" },
  { component: "R8", pin: 1, net: "HFXIN" },
  { component: "R8", pin: 2, net: "HFXIN_ext" },
  { component: "R19", pin: 1, net: "BSL_RX" },
  { component: "R19", pin: 2, net: "JTAG_BSL_RX" },
  { component: "R20", pin: 1, net: "BSL_TX" },
  { component: "R20", pin: 2, net: "JTAG_BSL_TX" },
  { component: "R21", pin: 1, net: "BSL_SCL" },
  {
    component: "R21",
    pin: 2,
    net: "JTAG_BSL_SCL",
    displayLabel: "BSL_SCL",
  },
  { component: "JTAG", pin: 1, net: "JTAG_TDO_SBWTDIO" },
  { component: "JTAG", pin: 2, net: "VCC_TOOL" },
  { component: "JTAG", pin: 3, net: "JTAG_TDI" },
  { component: "JTAG", pin: 4, net: "VCC" },
  { component: "JTAG", pin: 5, net: "JTAG_TMS" },
  { component: "JTAG", pin: 7, net: "JTAG_TCK_SBWTCK" },
  {
    component: "JTAG",
    pin: 8,
    net: "JTAG_TEST_SBWTCK",
    displayLabel: "TEST/SBWTCK",
  },
  { component: "JTAG", pin: 9, net: "GND" },
  { component: "JTAG", pin: 11, net: "JTAG_RST_NMI" },
  { component: "JTAG", pin: 12, net: "JTAG_BSL_TX" },
  {
    component: "JTAG",
    pin: 10,
    net: "JTAG_BSL_SCL",
    displayLabel: "BSL_SCL",
  },
  { component: "JTAG", pin: 14, net: "JTAG_BSL_RX" },
  { component: "J1", pin: 1, net: "VCC_TOOL" },
  { component: "J1", pin: 2, net: "VCC" },
  { component: "J1", pin: 3, net: "EXT_PWR" },
  { component: "J2", pin: 1, net: "GND" },
  { component: "J2", pin: 2, net: "EXT_PWR" },
  { component: "J2", pin: 3, net: "EXT_PWR" },
  { component: "JP1", pin: 1, net: "VCC_MEAS" },
  { component: "JP1", pin: 2, net: "VCC" },
  { component: "JP2", pin: 1, net: "DVCC" },
  { component: "JP2", pin: 2, net: "VCC_MEAS" },
  { component: "JP3", pin: 1, net: "AVCC" },
  { component: "JP3", pin: 2, net: "VCC_MEAS" },
  { component: "JP4", pin: 1, net: "PVCC" },
  { component: "JP4", pin: 2, net: "VCC_MEAS" },
  { component: "JP5", pin: 2, net: "TDO" },
  { component: "JP5", pin: 3, net: "JTAG_TDO_SBWTDIO" },
  { component: "JP5", pin: 1, net: "NC_JP5_1", displayLabel: "NC" },
  { component: "JP6", pin: 2, net: "TDI" },
  { component: "JP6", pin: 3, net: "JTAG_TDI" },
  { component: "JP6", pin: 1, net: "NC_JP6_1", displayLabel: "NC" },
  { component: "JP7", pin: 2, net: "TMS" },
  { component: "JP7", pin: 3, net: "JTAG_TMS" },
  { component: "JP7", pin: 1, net: "NC_JP7_1", displayLabel: "NC" },
  { component: "JP8", pin: 2, net: "TCK" },
  { component: "JP8", pin: 3, net: "JTAG_TCK_SBWTCK" },
  { component: "JP8", pin: 1, net: "NC_JP8_1", displayLabel: "NC" },
  {
    component: "JP9",
    pin: 1,
    net: "JTAG_TEST_SBWTCK",
    displayLabel: "TEST/SBWTCK",
  },
  { component: "JP9", pin: 2, net: "TEST_SBWTCK" },
  { component: "JP9", pin: 3, net: "JTAG_TCK_SBWTCK" },
  { component: "JP10", pin: 1, net: "JTAG_TDO_SBWTDIO" },
  { component: "JP10", pin: 2, net: "RESET" },
  { component: "JP10", pin: 3, net: "JTAG_RST_NMI" },
  { component: "BSL", pin: 1, net: "BSL_TX_CONN" },
  { component: "BSL", pin: 2, net: "GND" },
  { component: "BSL", pin: 3, net: "BSL_RX_CONN" },
  { component: "BSL", pin: 4, net: "RESET" },
  { component: "BSL", pin: 5, net: "BSL_SDA_CONN" },
  { component: "BSL", pin: 6, net: "BSL_VCC" },
  { component: "BSL", pin: 7, net: "TEST_SBWTCK" },
  { component: "BSL", pin: 9, net: "BSL_SCL_CONN" },
  { component: "R3", pin: 1, net: "BSL_VCC" },
  { component: "R3", pin: 2, net: "VCC" },
  { component: "R4", pin: 1, net: "BSL_VCC" },
  { component: "R4", pin: 2, net: "VCC" },
  { component: "SW4", pin: 1, net: "BSL_SCL" },
  {
    component: "SW4",
    pin: 2,
    net: "BSL_SCL_CONN",
    displayLabel: "BSL_SCL",
  },
  { component: "SW4", pin: 3, net: "BSL_SDA" },
  {
    component: "SW4",
    pin: 4,
    net: "BSL_SDA_CONN",
    displayLabel: "BSL_SDA",
  },
  { component: "SW5", pin: 1, net: "BSL_RX" },
  {
    component: "SW5",
    pin: 2,
    net: "BSL_RX_CONN",
    displayLabel: "BSL_RX",
  },
  { component: "SW5", pin: 3, net: "BSL_TX" },
  {
    component: "SW5",
    pin: 4,
    net: "BSL_TX_CONN",
    displayLabel: "BSL_TX",
  },
  { component: "SW3", pin: 1, net: "DVCC" },
  { component: "SW3", pin: 2, net: "I2C_PULLUP_SDA" },
  { component: "SW3", pin: 3, net: "DVCC" },
  { component: "SW3", pin: 4, net: "I2C_PULLUP_SCL" },
  { component: "R17", pin: 1, net: "I2C_PULLUP_SDA" },
  {
    component: "R17",
    pin: 2,
    net: "BSL_SDA",
    displayLabel: "BSL_SDA",
  },
  { component: "R16", pin: 1, net: "I2C_PULLUP_SCL" },
  {
    component: "R16",
    pin: 2,
    net: "BSL_SCL",
    displayLabel: "BSL_SCL",
  },
  {
    component: "TP1",
    pin: 1,
    net: "BSL_SCL_CONN",
    displayLabel: "BSL_SCL",
  },
  {
    component: "TP2",
    pin: 1,
    net: "BSL_SDA_CONN",
    displayLabel: "BSL_SDA",
  },
  {
    component: "TP3",
    pin: 1,
    net: "BSL_RX_CONN",
    displayLabel: "BSL_RX",
  },
  {
    component: "TP4",
    pin: 1,
    net: "BSL_TX_CONN",
    displayLabel: "BSL_TX",
  },
  { component: "TP5", pin: 1, net: "GND" },
  { component: "TP6", pin: 1, net: "GND" },
  { component: "R13", pin: 1, net: "DVCC" },
  { component: "R13", pin: 2, net: "P1_3" },
  { component: "SW1", pin: 1, net: "P1_3" },
  { component: "SW1", pin: 2, net: "GND" },
  { component: "SW1", pin: 3, net: "P1_3" },
  { component: "SW1", pin: 4, net: "GND" },
  { component: "D1", pin: 1, net: "LED1_A" },
  { component: "D1", pin: 2, net: "GND" },
  { component: "R1", pin: 1, net: "LED1_A" },
  { component: "R1", pin: 2, net: "P1_0_LED" },
  { component: "JP11", pin: 1, net: "P1_0_LED" },
  { component: "JP11", pin: 2, net: "P1_0" },
  { component: "D2", pin: 1, net: "GND" },
  { component: "D2", pin: 2, net: "LED2_A" },
  { component: "R2", pin: 1, net: "LED2_A" },
  { component: "R2", pin: 2, net: "P1_1_LED" },
  { component: "JP12", pin: 1, net: "P1_1_LED" },
  { component: "JP12", pin: 2, net: "P1_1" },
  { component: "Q3", pin: 1, net: "USSXTIN" },
  { component: "Q3", pin: 2, net: "AVSS" },
  { component: "Q3", pin: 3, net: "USSXTOUT_Q3" },
  { component: "C14", pin: 1, net: "USSXTIN" },
  { component: "C14", pin: 2, net: "AVSS" },
  { component: "C15", pin: 1, net: "USSXTOUT_Q3" },
  { component: "C15", pin: 2, net: "AVSS" },
  { component: "R14", pin: 1, net: "USSXTIN" },
  { component: "R14", pin: 2, net: "USSXTIN_EXT" },
  { component: "R22", pin: 1, net: "USSXTOUT_Q3" },
  { component: "R22", pin: 2, net: "USSXTOUT" },
  { component: "R15", pin: 1, net: "USSXTOUT" },
  { component: "R15", pin: 2, net: "USSXTOUT_EXT" },
  { component: "R18", pin: 1, net: "LCDCAP" },
  { component: "R18", pin: 2, net: "GND" },
  { component: "C12", pin: 1, net: "LCDCAP" },
  { component: "C12", pin: 2, net: "GND" },
  { component: "JP14", pin: 1, net: "PVSS" },
  { component: "JP14", pin: 2, net: "CH0_IN" },
  { component: "JP13", pin: 1, net: "PVSS" },
  { component: "JP13", pin: 2, net: "CH1_IN" },
];

const sourceShunts = [
  { name: "SH_J1", displayName: "J1: 1-2", schX: -19.0, schY: 6.2 },
  { name: "SH_JP1", displayName: "JP1: 1-2", schX: -17.7, schY: 3.5 },
  { name: "SH_JP2", displayName: "JP2: 1-2", schX: -17.7, schY: 1.0 },
  { name: "SH_JP3", displayName: "JP3: 1-2", schX: -17.7, schY: -0.8 },
  { name: "SH_JP4", displayName: "JP4: 1-2", schX: -17.7, schY: -2.6 },
  { name: "SH_JP9", displayName: "JP9: 2-3", schX: -18.0, schY: 4.2 },
  {
    name: "SH_JP10",
    displayName: "JP10: 2-3",
    schX: -15.5,
    schY: 4.2,
  },
  { name: "SH_JP5", displayName: "JP5: 2-3", schX: -12.8, schY: 4.2 },
  { name: "SH_JP6", displayName: "JP6: 2-3", schX: -10.5, schY: 4.2 },
  { name: "SH_JP7", displayName: "JP7: 2-3", schX: -8.2, schY: 4.2 },
  { name: "SH_JP8", displayName: "JP8: 2-3", schX: -5.9, schY: 4.2 },
  {
    name: "SH_JP11",
    displayName: "JP11: 1-2",
    schX: -13.4,
    schY: -8.5,
  },
  {
    name: "SH_JP12",
    displayName: "JP12: 1-2",
    schX: -13.4,
    schY: -7.1,
  },
  {
    name: "SH_JP13",
    displayName: "JP13: 1-2",
    schX: 11.5,
    schY: 2.1,
  },
  {
    name: "SH_JP14",
    displayName: "JP14: 1-2",
    schX: 8.5,
    schY: 2.1,
  },
] as const;

/**
 * Native reproduction of TI's MSP-TS430PZ100E Figure B-78 target-socket
 * schematic. The board supports this exact MCU but supplies it as a socketed
 * target rather than documenting it as a Window Module design.
 * The source assigns no motor-driver, pinch, position, thermal, CAN, or LIN
 * functions to MCU GPIOs, so this subcircuit intentionally does not invent
 * those interface names. The one-sheet circuit retains the source power and
 * current-measurement headers, JP1-JP14 and documented shunts, JTAG/BSL paths,
 * BSL interface switches and pullups, LEDs, user/reset switches, test points,
 * LCDCAP option, crystals, USS resonator, channel inputs, and J3-J6 socket.
 *
 * Authoritative sources:
 * - Exact device and pin map (SLASEV3A):
 *   https://www.ti.com/lit/ds/symlink/msp430fr6007.pdf
 * - Supported target board and source figures (SLAU278AH, Figures B-78/B-79):
 *   https://www.ti.com/lit/ug/slau278/slau278.pdf
 * - TI target-board page naming MSP430FR6007 as a supported device:
 *   https://www.ti.com/tool/MSP-TS430PZ100E
 *
 * Coordinate provenance:
 * TI does not publish Altium CAD for the selected MSP430FR6007 target board,
 * so there is no Altium-to-tscircuit transform. Figure B-78 was rendered at
 * 180 dpi, rotated 270 degrees to landscape, and measured in pixels. With the
 * IC1 center as (1198, 741), the raster was uniformly normalized into
 * tscircuit schematic space using:
 *   schX = (x_px - 1198) * 0.0225 mm
 *   schY = (741 - y_px) * 0.0225 mm
 * Values below are rounded to 0.1 mm; the published figure supports only
 * approximate schematic centers, not exact PCB/CAD coordinates.
 * The native A4 schematic-sheet primitive has no configurable dimensions, so
 * the drawing intentionally omits that fixed border and scales the published
 * component centers by 1.55 to keep symbols and labels clear. Native symbol
 * dimensions require small clearance adjustments in the dense selector and
 * support blocks; C10 is shifted 0.4 mm left to preserve the verified
 * IC1.pin26-to-J4.pin1 route. These are schematic-rendering offsets, not claims
 * of exact PCB placement. All Figure B-78 blocks remain together.
 */
export const Microcontroller_MSP430FR6007 = (props: SubcircuitProps) => (
  <subcircuit
    // Direct IC-to-socket links are 0.7 mm. The 0.8 mm limit keeps those
    // intact while the spaced repeated rails terminate as on-trace names.
    schMaxTraceDistance="0.8mm"
    // The extracted source is schematic-only. Native schematic autorouting
    // remains enabled; routingDisabled prevents a synthesized PCB routing.
    // Its checked-in snapshot is schematic-only because no exact CAD exists.
    routingDisabled
    schLayout={{ layoutMode: "none" }}
    {...props}
  >
    <net name="GND" isGroundNet />
    <net name="AVSS" />
    <net name="PVSS" />
    <net name="AVCC" isPowerNet />
    <net name="DVCC" isPowerNet />
    <net name="PVCC" isPowerNet />
    <net name="VCC" isPowerNet />

    <group name="figure_b78_layout">
      <MSP430FR6007IPZ
        name="IC1"
        schX={0}
        schY={0}
        schPinStyle={{ ...leftRailPinSpacing, ...topRailPinSpacing }}
      />

      {/*
       * Four 25-position target-socket headers surrounding IC1 in Figure B-78.
       * The pin orders intentionally follow the source drawing on each side.
       */}
      <pinheader
        name="J3"
        manufacturerPartNumber="TSW-125-07-G-S"
        footprint="pinrow25_p2.54_nopinlabels"
        pinCount={25}
        gender="male"
        pitch="2.54mm"
        schX={-7.2}
        schY={0}
        schFacingDirection="right"
        schPinStyle={leftRailPinSpacing}
      />
      <pinheader
        name="J4"
        manufacturerPartNumber="TSW-125-07-G-S"
        footprint="pinrow25_p2.54_nopinlabels"
        pinCount={25}
        gender="male"
        pitch="2.54mm"
        schX={0}
        schY={-7.2}
        schFacingDirection="up"
      />
      <pinheader
        name="J5"
        manufacturerPartNumber="TSW-125-07-G-S"
        footprint="pinrow25_p2.54_nopinlabels"
        pinCount={25}
        gender="male"
        pitch="2.54mm"
        schX={7.2}
        schY={0}
        schFacingDirection="left"
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: descendingSocketPins,
          },
        }}
      />
      <pinheader
        name="J6"
        manufacturerPartNumber="TSW-125-07-G-S"
        footprint="pinrow25_p2.54_nopinlabels"
        pinCount={25}
        gender="male"
        pitch="2.54mm"
        schX={0}
        schY={7.2}
        schFacingDirection="down"
        schPinArrangement={{
          bottomSide: {
            direction: "left-to-right",
            pins: descendingSocketPins,
          },
        }}
        schPinStyle={topSocketRailPinSpacing}
      />

      {mcuToTargetSocketLinks.map(
        ({ mcuPin, connector, connectorPin, sourcePinLabel }) => (
          <Fragment key={`IC1-${mcuPin}-${connector}-${connectorPin}`}>
            <trace
              name={`IC1_PIN${mcuPin}_${connector}_PIN${connectorPin}`}
              from={`IC1.pin${mcuPin}`}
              to={`${connector}.pin${connectorPin}`}
              schDisplayLabel={sourcePinLabel}
            />
          </Fragment>
        ),
      )}

      {targetSocketNetBreakouts.map(({ connector, connectorPin, net }) => (
        <Fragment key={`${connector}-pin${connectorPin}-${net}`}>
          <trace
            name={`${connector}_PIN${connectorPin}_${net}`}
            from={`${connector}.pin${connectorPin}`}
            to={`net.${net}`}
            schDisplayLabel={net}
          />
        </Fragment>
      ))}

      <group name="minimum_system_source_layout">
        {/* Figure B-78 power selection, measurement, and rail headers. */}
        <pinheader
          name="J1"
          displayName="VCC SELECT"
          manufacturerPartNumber="TSW-103-07-G-S"
          footprint="pinrow3_p2.54_nopinlabels"
          pinCount={3}
          gender="male"
          pitch="2.54mm"
          pinLabels={{ pin1: "INT", pin2: "VCC", pin3: "EXT" }}
          schX={sourceX(-20.0)}
          schY={sourceY(7.2)}
          schFacingDirection="right"
        />
        <pinheader
          name="J2"
          displayName="EXT_PWR"
          manufacturerPartNumber="TSW-103-07-G-S"
          footprint="pinrow3_p2.54_nopinlabels"
          pinCount={3}
          gender="male"
          pitch="2.54mm"
          pinLabels={{ pin1: "GND", pin2: "EXT_PWR", pin3: "VCC" }}
          schX={sourceX(-4.7)}
          schY={sourceY(9.2)}
          schFacingDirection="left"
        />
        <pinheader
          name="JP1"
          displayName="VCC CURRENT MEASUREMENT"
          manufacturerPartNumber="TSW-102-07-G-S"
          footprint="pinrow2_p2.54_nopinlabels"
          pinCount={2}
          gender="male"
          pitch="2.54mm"
          schX={sourceX(-20.7)}
          schY={sourceY(4.2)}
          schFacingDirection="right"
        />
        {[
          { name: "JP2", netName: "DVCC", schY: 1.8 },
          { name: "JP3", netName: "AVCC", schY: -0.2 },
          { name: "JP4", netName: "PVCC", schY: -2.2 },
        ].map(({ name, netName, schY }) => (
          <Fragment key={name}>
            <pinheader
              name={name}
              displayName={`${netName} POWER RAIL`}
              manufacturerPartNumber="TSW-102-07-G-S"
              footprint="pinrow2_p2.54_nopinlabels"
              pinCount={2}
              gender="male"
              pitch="2.54mm"
              schX={sourceX(-20.7)}
              schY={sourceY(schY)}
              schFacingDirection="right"
            />
          </Fragment>
        ))}

        {/* Debug-mode selectors JP5-JP10, populated 2-3 in Figure B-79. */}
        {[
          { name: "JP9", signal: "TEST/SBWTCK", schX: -18.0 },
          { name: "JP10", signal: "RST/SBWTDIO", schX: -15.5 },
          { name: "JP5", signal: "PJ.0/TDO", schX: -12.8 },
          { name: "JP6", signal: "PJ.1/TDI", schX: -10.5 },
          { name: "JP7", signal: "PJ.2/TMS", schX: -8.2 },
          { name: "JP8", signal: "PJ.3/TCK", schX: -5.9 },
        ].map(({ name, signal, schX }) => (
          <Fragment key={name}>
            <pinheader
              name={name}
              displayName={signal}
              manufacturerPartNumber="TSW-103-07-G-S"
              footprint="pinrow3_p2.54_nopinlabels"
              pinCount={3}
              gender="male"
              pitch="2.54mm"
              schX={sourceX(schX)}
              schY={sourceY(5.5)}
              schFacingDirection="right"
            />
          </Fragment>
        ))}

        {/* Bootloader header and Figure B-78 interface-selection bank. */}
        <connector
          name="BSL"
          manufacturerPartNumber="AWHW-10G-0202-T"
          footprint="pinrow10_p2.54_nopinlabels_rows2"
          pinLabels={{
            pin1: "BSL_TX",
            pin2: "GND",
            pin3: "BSL_RX",
            pin4: "RST_SBWTDIO",
            pin5: "BSL_SDA",
            pin6: "VCC",
            pin7: "TEST_SBWTCK",
            pin8: "NC_8",
            pin9: "BSL_SCL",
            pin10: "NC_10",
          }}
          noConnect={["NC_8", "NC_10"]}
          schX={sourceX(-1.2)}
          schY={sourceY(9.4)}
          schPinArrangement={{
            leftSide: {
              direction: "top-to-bottom",
              pins: [9, 7, 5, 3, 1],
            },
            rightSide: {
              direction: "top-to-bottom",
              pins: [10, 8, 6, 4, 2],
            },
          }}
        />
        <resistor
          name="R3"
          resistance="0"
          footprint="0805"
          schX={sourceX(2.8)}
          schY={sourceY(8.9)}
          schOrientation="vertical"
        />
        <resistor
          name="R4"
          resistance="0"
          footprint="0603"
          doNotPlace
          schX={sourceX(3.4)}
          schY={sourceY(8.0)}
          schOrientation="vertical"
        />
        <switch
          name="SW4"
          displayName="I2C BSL CONNECTION"
          manufacturerPartNumber="GH7727-ND"
          footprint="pinrow4_p2.54_nopinlabels"
          dpst
          schX={sourceX(6.0)}
          schY={sourceY(8.8)}
        />
        <switch
          name="SW5"
          displayName="UART BSL CONNECTION"
          manufacturerPartNumber="GH7727-ND"
          footprint="pinrow4_p2.54_nopinlabels"
          dpst
          schX={sourceX(6.0)}
          schY={sourceY(6.7)}
        />
        <switch
          name="SW3"
          displayName="I2C PULLUPS"
          manufacturerPartNumber="GH7727-ND"
          footprint="pinrow4_p2.54_nopinlabels"
          dpst
          schX={sourceX(6.0)}
          schY={sourceY(4.6)}
        />
        <resistor
          name="R17"
          resistance="4.7k"
          footprint="0805"
          schX={sourceX(8.3)}
          schY={sourceY(5.1)}
        />
        <resistor
          name="R16"
          resistance="4.7k"
          footprint="0805"
          schX={sourceX(8.3)}
          schY={sourceY(4.1)}
        />
        {[
          { name: "TP1", schX: 10.5, schY: 9.1 },
          { name: "TP2", schX: 10.5, schY: 8.5 },
          { name: "TP3", schX: 10.5, schY: 7.0 },
          { name: "TP4", schX: 10.5, schY: 6.4 },
        ].map(({ name, schX, schY }) => (
          <Fragment key={name}>
            <testpoint
              name={name}
              doNotPlace
              footprintVariant="through_hole"
              holeDiameter="0.8mm"
              padDiameter="1.5mm"
              schX={sourceX(schX)}
              schY={sourceY(schY)}
            />
          </Fragment>
        ))}

        {/* USS channel-input headers and their separately documented shunts. */}
        <pinheader
          name="JP14"
          displayName="Ch0IN"
          manufacturerPartNumber="TSW-102-07-G-S"
          footprint="pinrow2_p2.54_nopinlabels"
          pinCount={2}
          gender="male"
          pitch="2.54mm"
          schX={sourceX(8.5)}
          schY={sourceY(3.0)}
          schFacingDirection="right"
        />
        <pinheader
          name="JP13"
          displayName="Ch1IN"
          manufacturerPartNumber="TSW-102-07-G-S"
          footprint="pinrow2_p2.54_nopinlabels"
          pinCount={2}
          gender="male"
          pitch="2.54mm"
          schX={sourceX(11.5)}
          schY={sourceY(3.0)}
          schFacingDirection="left"
        />

        {sourceShunts.map(({ name, displayName, schX, schY }) => (
          <Fragment key={name}>
            <jumper
              name={name}
              displayName={displayName}
              manufacturerPartNumber="3M9580-ND"
              footprint="pinrow2_p2.54_nopinlabels"
              pinCount={2}
              internallyConnectedPins={[[1, 2]]}
              schX={sourceX(schX)}
              schY={sourceY(schY)}
              schWidth="0.45mm"
              schHeight="0.7mm"
            />
          </Fragment>
        ))}

        {/* Target-board AVCC bypass network. */}
        <capacitor
          name="C3"
          capacitance="1uF"
          footprint="0805"
          schX={sourceX(-14.1)}
          schY={sourceY(2.1)}
          schOrientation="vertical"
        />
        <capacitor
          name="C11"
          capacitance="0.1uF"
          footprint="0805"
          schX={sourceX(-13.2)}
          schY={sourceY(3.4)}
          schOrientation="vertical"
        />

        {/*
         * Target-board PVCC bypass network. Values follow Figure B-78; its
         * printed BOM instead says C16=47uF and C13=1000pF, a source conflict.
         */}
        <capacitor
          name="C16"
          capacitance="1uF"
          footprint="0805"
          schX={sourceX(-14.1)}
          schY={sourceY(0.5)}
          schOrientation="vertical"
        />
        <capacitor
          name="C13"
          capacitance="0.1uF"
          footprint="0805"
          schX={sourceX(-13.2)}
          schY={sourceY(0.5)}
          schOrientation="vertical"
        />

        {/* The two physical DVCC bypass locations retained from the board. */}
        <capacitor
          name="C4"
          capacitance="0.1uF"
          footprint="0805"
          schX={sourceX(-4.0)}
          schY={sourceY(-6.3)}
          schOrientation="vertical"
        />

        {/* Source star-ground links: PVSS--R11--GND--R12--AVSS. */}
        <resistor
          name="R11"
          resistance="0"
          footprint="0805"
          schX={sourceX(-18.5)}
          schY={sourceY(-5.5)}
        />
        <resistor
          name="R12"
          resistance="0"
          footprint="0805"
          schX={sourceX(-18.5)}
          schY={sourceY(-6.5)}
        />
        <resistor
          name="R10"
          resistance="0"
          footprint="0805"
          schX={sourceX(-19.5)}
          schY={sourceY(-7.2)}
          schOrientation="vertical"
        />
        <testpoint
          name="TP6"
          doNotPlace
          footprintVariant="through_hole"
          holeDiameter="0.8mm"
          padDiameter="1.5mm"
          schX={sourceX(-20.2)}
          schY={sourceY(-5.5)}
        />
        <testpoint
          name="TP5"
          doNotPlace
          footprintVariant="through_hole"
          holeDiameter="0.8mm"
          padDiameter="1.5mm"
          schX={sourceX(-20.2)}
          schY={sourceY(-7.8)}
        />
        <pushbutton
          name="SW1"
          displayName="P1.3"
          manufacturerPartNumber="EVQ-11L05R"
          footprint="smdpushbutton"
          schX={sourceX(-18.0)}
          schY={sourceY(-7.8)}
        />
        <resistor
          name="R13"
          resistance="47k"
          footprint="0805"
          doNotPlace
          schX={sourceX(-15.6)}
          schY={sourceY(-7.1)}
          schOrientation="vertical"
        />
        <led
          name="D2"
          displayName="BLUE"
          color="blue"
          footprint="led0805"
          manufacturerPartNumber="732-4982"
          schX={sourceX(-19.2)}
          schY={sourceY(-9.0)}
          schRotation={180}
        />
        <resistor
          name="R2"
          resistance="200"
          footprint="0805"
          schX={sourceX(-17.2)}
          schY={sourceY(-9.0)}
        />
        <pinheader
          name="JP12"
          displayName="P1.1"
          manufacturerPartNumber="TSW-102-07-G-S"
          footprint="pinrow2_p2.54_nopinlabels"
          pinCount={2}
          gender="male"
          pitch="2.54mm"
          schX={sourceX(-15.0)}
          schY={sourceY(-9.0)}
          schFacingDirection="right"
        />
        <led
          name="D1"
          displayName="GREEN"
          color="green"
          footprint="led0805"
          manufacturerPartNumber="754-1939-1"
          schX={sourceX(-19.2)}
          schY={sourceY(-10.2)}
          schRotation={180}
        />
        <resistor
          name="R1"
          resistance="330"
          footprint="0805"
          schX={sourceX(-17.2)}
          schY={sourceY(-10.2)}
        />
        <pinheader
          name="JP11"
          displayName="P1.0"
          manufacturerPartNumber="TSW-102-07-G-S"
          footprint="pinrow2_p2.54_nopinlabels"
          pinCount={2}
          gender="male"
          pitch="2.54mm"
          schX={sourceX(-15.0)}
          schY={sourceY(-10.2)}
          schFacingDirection="right"
        />
        {/* Native-symbol clearance shift documented in coordinate provenance. */}
        <capacitor
          name="C10"
          capacitance="0.1uF"
          footprint="0805"
          schX={sourceX(-3.4)}
          schY={sourceY(-6.3)}
          schOrientation="vertical"
        />
        <capacitor
          name="C7"
          capacitance="1uF"
          footprint="0805"
          schX={sourceX(6.4)}
          schY={sourceY(-6.2)}
          schOrientation="vertical"
        />
        <capacitor
          name="C6"
          capacitance="0.1uF"
          footprint="0805"
          schX={sourceX(7.4)}
          schY={sourceY(-6.2)}
          schOrientation="vertical"
        />

        {/* Reset pull-up, filter, and pushbutton from Figure B-78. */}
        <resistor
          name="R7"
          resistance="47k"
          footprint="0805"
          schX={sourceX(-11.6)}
          schY={sourceY(7.8)}
          schOrientation="vertical"
        />
        <capacitor
          name="C5"
          capacitance="1100pF"
          footprint="0805"
          schX={sourceX(-11.5)}
          schY={sourceY(6.6)}
          schOrientation="vertical"
        />
        <pushbutton
          name="SW2"
          displayName="RESET"
          manufacturerPartNumber="EVQ-11L05R"
          footprint="smdpushbutton"
          schX={sourceX(-12.6)}
          schY={sourceY(7.5)}
        />

        {/* Optional low-frequency crystal population from the socket board. */}
        <crystal
          name="Q1"
          manufacturerPartNumber="MS3V-T1R"
          frequency="32.768kHz"
          loadCapacitance="12.5pF"
          pinVariant="two_pin"
          doNotPlace
          schX={sourceX(-11.0)}
          schY={sourceY(2.7)}
        />
        <capacitor
          name="C1"
          capacitance="12pF"
          footprint="0805"
          doNotPlace
          schX={sourceX(-12.3)}
          schY={sourceY(3.2)}
          schOrientation="vertical"
        />
        <capacitor
          name="C2"
          capacitance="12pF"
          footprint="0805"
          doNotPlace
          schX={sourceX(-12.3)}
          schY={sourceY(2.2)}
          schOrientation="vertical"
        />
        <resistor
          name="R5"
          resistance="0"
          footprint="0603"
          doNotPlace
          schX={sourceX(-9.5)}
          schY={sourceY(3.2)}
        />
        <resistor
          name="R6"
          resistance="0"
          footprint="0603"
          doNotPlace
          schX={sourceX(-9.5)}
          schY={sourceY(2.2)}
        />

        {/* Optional HFXT population; all five parts are DNP in the source BOM. */}
        <crystal
          name="Q2"
          manufacturerPartNumber="MS3V-T1R"
          frequency="32.768kHz"
          loadCapacitance="12.5pF"
          pinVariant="two_pin"
          doNotPlace
          schX={sourceX(-11.0)}
          schY={sourceY(-0.4)}
        />
        <capacitor
          name="C8"
          capacitance="22pF"
          footprint="0805"
          doNotPlace
          schX={sourceX(-12.3)}
          schY={sourceY(0.1)}
          schOrientation="vertical"
        />
        <capacitor
          name="C9"
          capacitance="22pF"
          footprint="0805"
          doNotPlace
          schX={sourceX(-12.3)}
          schY={sourceY(-0.9)}
          schOrientation="vertical"
        />
        <resistor
          name="R9"
          resistance="0"
          footprint="0603"
          doNotPlace
          schX={sourceX(-9.5)}
          schY={sourceY(0.1)}
        />
        <resistor
          name="R8"
          resistance="0"
          footprint="0603"
          doNotPlace
          schX={sourceX(-9.5)}
          schY={sourceY(-0.9)}
        />

        {/* USS 8-MHz resonator path retained exactly as the source DNP block. */}
        <resonator
          name="Q3"
          manufacturerPartNumber="77D9806"
          frequency="8MHz"
          loadCapacitance="27pF"
          pinVariant="ground_pin"
          doNotPlace
          schX={sourceX(-8.0)}
          schY={sourceY(-3.8)}
        />
        <capacitor
          name="C14"
          capacitance="27pF"
          footprint="0603"
          doNotPlace
          schX={sourceX(-8.9)}
          schY={sourceY(-3.3)}
          schOrientation="vertical"
        />
        <capacitor
          name="C15"
          capacitance="27pF"
          footprint="0603"
          doNotPlace
          schX={sourceX(-8.9)}
          schY={sourceY(-4.3)}
          schOrientation="vertical"
        />
        <resistor
          name="R14"
          resistance="0"
          footprint="0603"
          doNotPlace
          schX={sourceX(-6.5)}
          schY={sourceY(-3.3)}
        />
        <resistor
          name="R22"
          resistance="22"
          footprint="0603"
          schX={sourceX(-6.5)}
          schY={sourceY(-4.3)}
        />
        <resistor
          name="R15"
          resistance="0"
          footprint="0603"
          doNotPlace
          schX={sourceX(-4.7)}
          schY={sourceY(-4.3)}
        />

        {/* Optional LCD_C module loading shown beside IC1 pin 74. */}
        <resistor
          name="R18"
          resistance="0"
          footprint="0805"
          doNotPlace
          schX={sourceX(-2.8)}
          schY={sourceY(-5.1)}
          schOrientation="vertical"
        />
        <capacitor
          name="C12"
          capacitance="4.7uF"
          footprint="0805"
          doNotPlace
          schX={sourceX(-1.8)}
          schY={sourceY(-5.1)}
          schOrientation="vertical"
        />

        {/* UART/I2C BSL paths retained on the source JTAG header. */}
        <resistor
          name="R19"
          resistance="0"
          footprint="0805"
          schX={sourceX(-20.6)}
          schY={sourceY(10.2)}
        />
        <resistor
          name="R20"
          resistance="0"
          footprint="0805"
          schX={sourceX(-20.6)}
          schY={sourceY(9.4)}
        />
        <resistor
          name="R21"
          resistance="0"
          footprint="0805"
          schX={sourceX(-20.6)}
          schY={sourceY(8.6)}
        />

        {/*
         * 14-pin MSP JTAG connector plus the JP5-JP10 selector paths shown in
         * Figure B-78. The separately drawn shunt bodies are retained above.
         */}
        <connector
          name="JTAG"
          manufacturerPartNumber="SBH11-PBPC-D07-ST-BK"
          footprint="pinrow14_p2.54_nopinlabels_rows2"
          pinLabels={{
            pin1: "TDO_TDI",
            pin2: "VCC_TOOL",
            pin3: "TDI",
            pin4: "VCC_TARGET",
            pin5: "TMS",
            pin6: "NC_6",
            pin7: "TCK",
            pin8: "TEST",
            pin9: "GND",
            pin10: "BSL_SCL",
            pin11: "RST",
            pin12: "BSL_TX",
            pin13: "NC_13",
            pin14: "BSL_RX",
          }}
          noConnect={["NC_6", "NC_13"]}
          schX={sourceX(-17.7)}
          schY={sourceY(9.3)}
          schPinArrangement={{
            leftSide: {
              direction: "top-to-bottom",
              pins: [14, 12, 10, 8, 6, 4, 2],
            },
            rightSide: {
              direction: "top-to-bottom",
              pins: [13, 11, 9, 7, 5, 3, 1],
            },
          }}
        />

        {/* Repository-standard net names are carried by native traces. */}
        {supportNetTraces.map(({ component, pin, net, name, displayLabel }) => (
          <Fragment key={`${component}-pin${pin}-${net}`}>
            <trace
              name={name ?? `${component}_PIN${pin}_${net}`}
              from={`${component}.pin${pin}`}
              to={`net.${net}`}
              schDisplayLabel={displayLabel ?? net}
            />
          </Fragment>
        ))}
      </group>
    </group>

    <port name="AVCC" direction="left" connectsTo="net.AVCC" />
    <port name="DVCC" direction="left" connectsTo="net.DVCC" />
    <port name="PVCC" direction="left" connectsTo="net.PVCC" />
    <port name="GND" direction="left" connectsTo="net.GND" />
    <port name="RESET" direction="left" connectsTo="net.RESET" />
    <port name="BSL_TX" direction="left" connectsTo="net.BSL_TX" />
    <port name="BSL_RX" direction="left" connectsTo="net.BSL_RX" />
    <port name="BSL_SDA" direction="left" connectsTo="net.BSL_SDA" />
    <port name="BSL_SCL" direction="left" connectsTo="net.BSL_SCL" />
    <port name="P1_0" direction="left" connectsTo="net.P1_0" />
    <port name="P1_1" direction="left" connectsTo="net.P1_1" />
    <port name="P1_3" direction="left" connectsTo="net.P1_3" />
    <port name="CH0_IN" direction="left" connectsTo="net.CH0_IN" />
    <port name="CH1_IN" direction="left" connectsTo="net.CH1_IN" />
    <port name="USSXTIN" direction="left" connectsTo="net.USSXTIN" />
    <port name="USSXTOUT" direction="left" connectsTo="net.USSXTOUT" />
    <port name="LCDCAP" direction="left" connectsTo="net.LCDCAP" />
    <port name="TEST" direction="right" connectsTo="net.TEST_SBWTCK" />
    <port name="TDO" direction="right" connectsTo="net.TDO" />
    <port name="TDI" direction="right" connectsTo="net.TDI" />
    <port name="TMS" direction="right" connectsTo="net.TMS" />
    <port name="TCK" direction="right" connectsTo="net.TCK" />
  </subcircuit>
);

export default Microcontroller_MSP430FR6007;
