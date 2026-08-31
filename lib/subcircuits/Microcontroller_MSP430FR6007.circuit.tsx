import type { SubcircuitProps } from "@tscircuit/props";
import { Fragment } from "react";
import "tscircuit";
import {
  MSP430FR6007IPZ,
  MSP430FR6007IPZ_PIN_LABELS,
} from "../chips/MSP430FR6007IPZ.circuit.tsx";

const ascendingSocketPins = Array.from({ length: 25 }, (_, index) => index + 1);
const descendingSocketPins = [...ascendingSocketPins].reverse();

type MSP430FR6007LayoutVariant = "single-sheet" | "multi-sheet";

type MSP430FR6007ReferenceLayoutProps = SubcircuitProps & {
  layoutVariant: MSP430FR6007LayoutVariant;
};

/*
 * Figure B-78's raster centers are too tight for tscircuit's native symbol and
 * font metrics. The single-sheet view therefore enlarges the support-block
 * center spacing while retaining the verified 1:1 IC1/J3-J6 core spacing.
 * This preserves the source ordering while preventing overlaps without
 * relaxing the direct-trace limit. It does not claim unavailable CAD
 * coordinates. The multi-sheet view uses the measured 1:1 normalized centers.
 */
const singleSheetCenterScale = 1.35;

const twoPinJumperSize = {
  schWidth: "0.45mm",
  schHeight: "0.65mm",
} as const;

const threePinJumperSize = {
  schWidth: "0.55mm",
  schHeight: "1mm",
} as const;

/*
 * Figure B-78 names the removable 3M9580-ND shunts SH-J1 and SH-JP1 through
 * SH-JP14 separately from the headers they populate. Figure B-79 and Table
 * B-40 define their installed electrical state. Figure B-78 draws each
 * removable shunt as a separate assembly block rather than wiring that block
 * back to its header. Preserve that visual convention with separate native
 * <jumper> components, and apply the documented bridge to the selected pins on
 * the actual header. No custom schematic graphics are used.
 */
const installedShunts = {
  J1: { refdes: "SH-J1", pins: [[1, 2]] },
  JP1: { refdes: "SH-JP1", pins: [[1, 2]] },
  JP2: { refdes: "SH-JP2", pins: [[1, 2]] },
  JP3: { refdes: "SH-JP3", pins: [[1, 2]] },
  JP4: { refdes: "SH-JP4", pins: [[1, 2]] },
  JP5: { refdes: "SH-JP5", pins: [[2, 3]] },
  JP6: { refdes: "SH-JP6", pins: [[2, 3]] },
  JP7: { refdes: "SH-JP7", pins: [[2, 3]] },
  JP8: { refdes: "SH-JP8", pins: [[2, 3]] },
  JP9: { refdes: "SH-JP9", pins: [[2, 3]] },
  JP10: { refdes: "SH-JP10", pins: [[2, 3]] },
  JP11: { refdes: "SH-JP11", pins: [[1, 2]] },
  JP12: { refdes: "SH-JP12", pins: [[1, 2]] },
  JP13: { refdes: "SH-JP13", pins: [[1, 2]] },
  JP14: { refdes: "SH-JP14", pins: [[1, 2]] },
} satisfies Record<string, { refdes: string; pins: number[][] }>;

const shuntPartNumber = "3M9580-ND";

const sheetNames = {
  mcuSocket: "mcu_socket",
  programmingDebug: "programming_debug",
  powerUser: "power_user",
  clocksChannels: "clocks_channels",
} as const;

const programmingDebugComponents = new Set([
  "BSL",
  "C5",
  "JTAG",
  "JP5",
  "JP6",
  "JP7",
  "JP8",
  "JP9",
  "JP10",
  "SH-JP5",
  "SH-JP6",
  "SH-JP7",
  "SH-JP8",
  "SH-JP9",
  "SH-JP10",
  "R3",
  "R4",
  "R7",
  "R16",
  "R17",
  "R19",
  "R20",
  "R21",
  "SW2",
  "SW3",
  "SW4",
  "SW5",
  "TP1",
  "TP2",
  "TP3",
  "TP4",
]);

const clocksChannelsComponents = new Set([
  "C1",
  "C2",
  "C8",
  "C9",
  "C12",
  "C14",
  "C15",
  "JP13",
  "JP14",
  "SH-JP13",
  "SH-JP14",
  "Q1",
  "Q2",
  "Q3",
  "R5",
  "R6",
  "R8",
  "R9",
  "R14",
  "R15",
  "R18",
  "R22",
]);

const supportSheetForComponent = (component: string) => {
  if (programmingDebugComponents.has(component)) {
    return sheetNames.programmingDebug;
  }
  if (clocksChannelsComponents.has(component)) {
    return sheetNames.clocksChannels;
  }
  return sheetNames.powerUser;
};

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

const targetSocketNetBreakouts: ReadonlyArray<{
  connector: (typeof targetSocketNames)[number];
  connectorPin: number;
  net: string;
  traceName?: string;
  displayLabel?: string;
}> = [
  { connector: "J3", connectorPin: 5, net: "AVSS" },
  { connector: "J3", connectorPin: 6, net: "LFXIN" },
  { connector: "J3", connectorPin: 7, net: "LFXOUT" },
  { connector: "J3", connectorPin: 8, net: "AVSS" },
  { connector: "J3", connectorPin: 9, net: "HFXIN" },
  { connector: "J3", connectorPin: 10, net: "HFXOUT" },
  { connector: "J3", connectorPin: 11, net: "AVSS" },
  { connector: "J3", connectorPin: 3, net: "P1_0" },
  { connector: "J3", connectorPin: 4, net: "P1_1" },
  {
    connector: "J3",
    connectorPin: 14,
    net: "BSL_SDA",
    traceName: "J3_PIN14_BSL_SDA",
    displayLabel: "BSL_SDA",
  },
  { connector: "J3", connectorPin: 15, net: "BSL_SCL" },
  {
    connector: "J3",
    connectorPin: 16,
    net: "BSL_TX",
    traceName: "J3_PIN16_BSL_TX",
    displayLabel: "BSL_TX",
  },
  { connector: "J3", connectorPin: 17, net: "BSL_RX" },
  { connector: "J3", connectorPin: 19, net: "P1_3" },
  {
    connector: "J3",
    connectorPin: 20,
    net: "TEST_SBWTCK",
    displayLabel: "TEST/SBWTCK",
  },
  { connector: "J3", connectorPin: 21, net: "RESET" },
  { connector: "J3", connectorPin: 22, net: "TDO" },
  { connector: "J3", connectorPin: 23, net: "TDI" },
  { connector: "J3", connectorPin: 24, net: "TMS" },
  { connector: "J3", connectorPin: 25, net: "TCK" },
  { connector: "J4", connectorPin: 1, net: "DVSS" },
  { connector: "J4", connectorPin: 2, net: "DVCC" },
  { connector: "J5", connectorPin: 1, net: "DVSS" },
  { connector: "J5", connectorPin: 2, net: "DVCC" },
  { connector: "J5", connectorPin: 25, net: "DVSS" },
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
];

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
  { component: "C4", pin: 2, net: "DVSS" },
  { component: "R11", pin: 1, net: "GND" },
  { component: "R11", pin: 2, net: "PVSS" },
  { component: "R12", pin: 1, net: "GND" },
  { component: "R12", pin: 2, net: "AVSS" },
  { component: "R10", pin: 1, net: "GND" },
  { component: "R10", pin: 2, net: "DVSS" },
  { component: "C10", pin: 1, net: "DVCC" },
  { component: "C10", pin: 2, net: "DVSS" },
  { component: "C7", pin: 1, net: "DVCC" },
  { component: "C7", pin: 2, net: "DVSS" },
  { component: "C6", pin: 1, net: "DVCC" },
  { component: "C6", pin: 2, net: "DVSS" },
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
  { component: "C5", pin: 2, net: "DVSS" },
  { component: "SW2", pin: 1, net: "RESET" },
  { component: "SW2", pin: 2, net: "DVSS" },
  { component: "SW2", pin: 3, net: "RESET" },
  { component: "SW2", pin: 4, net: "DVSS" },
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
  { component: "R19", pin: 1, net: "BSL_RX", displayLabel: "BSL_RX" },
  {
    component: "R20",
    pin: 1,
    net: "BSL_TX",
    displayLabel: "BSL_TX",
  },
  { component: "R21", pin: 1, net: "BSL_SCL", displayLabel: "BSL_SCL" },
  { component: "JTAG", pin: 1, net: "JTAG_TDO_SBWTDIO" },
  { component: "JTAG", pin: 2, net: "INT", displayLabel: "INT" },
  { component: "JTAG", pin: 3, net: "JTAG_TDI" },
  { component: "JTAG", pin: 4, net: "VCC", displayLabel: "VCC" },
  { component: "JTAG", pin: 5, net: "JTAG_TMS" },
  { component: "JTAG", pin: 7, net: "JTAG_TCK_SBWTCK" },
  {
    component: "JTAG",
    pin: 8,
    net: "JTAG_TEST_SBWTCK",
    displayLabel: "TEST/SBWTCK",
  },
  { component: "JTAG", pin: 9, net: "GND", displayLabel: "GND" },
  { component: "JTAG", pin: 11, net: "JTAG_RST_NMI" },
  { component: "J1", pin: 1, net: "INT", displayLabel: "INT" },
  { component: "J1", pin: 2, net: "VCC" },
  { component: "J1", pin: 3, net: "EXT_PWR", displayLabel: "EXT_PWR" },
  { component: "J2", pin: 1, net: "VCC" },
  { component: "J2", pin: 2, net: "EXT_PWR" },
  { component: "J2", pin: 3, net: "GND" },
  { component: "JP1", pin: 1, net: "VCC" },
  { component: "JP1", pin: 2, net: "VCC_MEAS" },
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
    pin: 3,
    net: "JTAG_TEST_SBWTCK",
    displayLabel: "TEST/SBWTCK",
  },
  { component: "JP9", pin: 2, net: "TEST_SBWTCK" },
  { component: "JP9", pin: 1, net: "JTAG_TCK_SBWTCK" },
  { component: "JP10", pin: 1, net: "JTAG_TDO_SBWTDIO" },
  { component: "JP10", pin: 2, net: "RESET" },
  { component: "JP10", pin: 3, net: "JTAG_RST_NMI" },
  { component: "BSL", pin: 1, net: "BSL_TX_CONN" },
  { component: "BSL", pin: 2, net: "GND" },
  { component: "BSL", pin: 3, net: "BSL_RX_CONN" },
  { component: "BSL", pin: 4, net: "RESET" },
  { component: "BSL", pin: 6, net: "BSL_TOOL_VCC" },
  { component: "BSL", pin: 7, net: "TEST_SBWTCK" },
  { component: "BSL", pin: 8, net: "BSL_TARGET_VCC" },
  { component: "BSL", pin: 9, net: "BSL_SCL_CONN" },
  { component: "R3", pin: 1, net: "BSL_TOOL_VCC" },
  { component: "R3", pin: 2, net: "VCC" },
  { component: "R4", pin: 1, net: "BSL_TARGET_VCC" },
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
    net: "BSL_TX_CONN",
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
    net: "BSL_TX_CONN",
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
  { component: "TP5", pin: 1, net: "DVSS" },
  { component: "TP6", pin: 1, net: "GND" },
  { component: "R13", pin: 1, net: "DVCC" },
  { component: "R13", pin: 2, net: "P1_3" },
  { component: "SW1", pin: 1, net: "P1_3" },
  { component: "SW1", pin: 2, net: "DVSS" },
  { component: "SW1", pin: 3, net: "P1_3" },
  { component: "SW1", pin: 4, net: "DVSS" },
  { component: "D1", pin: 1, net: "LED1_A" },
  { component: "D1", pin: 2, net: "DVSS" },
  { component: "R1", pin: 1, net: "LED1_A" },
  { component: "R1", pin: 2, net: "P1_0_LED" },
  { component: "JP11", pin: 1, net: "P1_0_LED" },
  { component: "JP11", pin: 2, net: "P1_0" },
  { component: "D2", pin: 1, net: "DVSS" },
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
  { component: "R18", pin: 2, net: "DVSS" },
  { component: "C12", pin: 1, net: "LCDCAP" },
  { component: "C12", pin: 2, net: "DVSS" },
  { component: "JP14", pin: 1, net: "PVSS" },
  { component: "JP14", pin: 2, net: "CH0_IN" },
  { component: "JP13", pin: 1, net: "PVSS" },
  { component: "JP13", pin: 2, net: "CH1_IN" },
];

const directSupportEndpoints = new Set([
  "BSL.pin6",
  "BSL.pin8",
  "R3.pin1",
  "R4.pin1",
  "D2.pin2",
  "R2.pin1",
]);

// Figure B-79's populated shunts make each pair below one electrical net.
// Keep the source-side names as trace display labels while using one canonical
// connectivity name per installed pair. This prevents the schematic renderer
// from replacing the native named trace stubs with tag-shaped alias labels.
const installedShuntCanonicalNet = new Map<string, string>([
  ["INT", "VCC"],
  ["JTAG_TDO_SBWTDIO", "TDO"],
  ["JTAG_TDI", "TDI"],
  ["JTAG_TMS", "TMS"],
  ["JTAG_TCK_SBWTCK", "TCK"],
  ["JTAG_TEST_SBWTCK", "TEST_SBWTCK"],
  ["JTAG_RST_NMI", "RESET"],
  ["P1_0_LED", "P1_0"],
  ["P1_1_LED", "P1_1"],
]);

const canonicalNet = (net: string) =>
  installedShuntCanonicalNet.get(net) ?? net;

/**
 * Native reproduction of TI's MSP-TS430PZ100E Figure B-78 target-socket
 * schematic. The board supports this exact MCU but supplies it as a socketed
 * target rather than documenting it as a Window Module design.
 * The source assigns no motor-driver, pinch, position, thermal, CAN, or LIN
 * functions to MCU GPIOs, so this subcircuit intentionally does not invent
 * those interface names. Both layout variants retain the source power and
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
 * The default circuit uses one 500 mm by 330 mm sheet and scales surrounding
 * measured centers by 1.35 so native symbols and font rendering remain clear.
 * The IC1/J3-J6 core remains at its verified 1:1 normalized spacing so every
 * explicit socket trace stays direct and no same-chip-pin routes are created.
 * The companion multi-sheet circuit separates the source into four functional
 * views and uses page-local translations plus small clearance shifts. These
 * are schematic-rendering transforms, not claims of exact PCB placement or an
 * Altium coordinate transform.
 */
export const MSP430FR6007ReferenceLayout = ({
  layoutVariant,
  ...props
}: MSP430FR6007ReferenceLayoutProps) => {
  const isMultiSheet = layoutVariant === "multi-sheet";
  const centerScale = isMultiSheet ? 1 : singleSheetCenterScale;
  const layoutX = (coordinate: number) => coordinate * centerScale;
  const layoutY = (coordinate: number) => coordinate * centerScale;
  const sheetFor = (multiSheetName: string) =>
    isMultiSheet ? multiSheetName : "reference_full";
  const pageOffset = (multiSheetOffset: number) =>
    isMultiSheet ? multiSheetOffset : 0;

  return (
    <subcircuit
      // Direct IC-to-socket links are 0.7 mm. The 0.8 mm limit keeps those
      // intact while repeated on-trace rail names cannot join adjacent pins.
      schMaxTraceDistance="0.8mm"
      // The extracted source is schematic-only. Native schematic autorouting
      // remains enabled; routingDisabled prevents a synthesized PCB routing.
      // Its checked-in snapshot is schematic-only because no exact CAD exists.
      routingDisabled
      schLayout={{ layoutMode: "none" }}
      {...props}
    >
      <net name="GND" isGroundNet />
      <net name="DVSS" isGroundNet={!isMultiSheet} />
      <net name="AVSS" />
      <net name="PVSS" isGroundNet={!isMultiSheet} />
      <net name="AVCC" isPowerNet />
      <net name="DVCC" isPowerNet />
      <net name="PVCC" isPowerNet />
      <net name="VCC" isPowerNet />

      {isMultiSheet ? (
        <>
          <schematicsheet
            name={sheetNames.mcuSocket}
            displayName="MCU and Target Socket"
            sheetIndex={0}
          />
          <schematicsheet
            name={sheetNames.programmingDebug}
            displayName="Programming, Debug, and BSL"
            sheetIndex={1}
          />
          <schematicsheet
            name={sheetNames.powerUser}
            displayName="Power and User Circuitry"
            sheetIndex={2}
          />
          <schematicsheet
            name={sheetNames.clocksChannels}
            displayName="Clocks, USS, LCDCAP, and Channels"
            sheetIndex={3}
          />
        </>
      ) : (
        <schematicsheet
          name="reference_full"
          displayName="MSP-TS430PZ100E Figure B-78"
          sheetIndex={0}
          sheetWidth="500mm"
          sheetHeight="330mm"
        />
      )}

      <group name="figure_b78_layout" schX={isMultiSheet ? 0 : 7}>
        <group
          name="mcu_socket_layout"
          schSheetName={sheetFor(sheetNames.mcuSocket)}
        >
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

          {targetSocketNetBreakouts.map(
            ({ connector, connectorPin, net, traceName, displayLabel }) => (
              <Fragment key={`${connector}-pin${connectorPin}-${net}`}>
                <trace
                  name={traceName ?? `${connector}_PIN${connectorPin}_${net}`}
                  from={`${connector}.pin${connectorPin}`}
                  to={`net.${canonicalNet(net)}`}
                  schDisplayLabel={displayLabel ?? net}
                />
              </Fragment>
            ),
          )}
        </group>

        <group name="minimum_system_source_layout">
          <group
            name="power_selection_layout"
            schSheetName={sheetFor(sheetNames.powerUser)}
            schX={pageOffset(7)}
            schY={pageOffset(-1)}
          >
            {/* Figure B-78 power selection, measurement, and rail headers. */}
            <jumper
              name="J1"
              manufacturerPartNumber="TSW-103-07-G-S"
              footprint="pinrow3_p2.54_nopinlabels"
              pinCount={3}
              internallyConnectedPins={installedShunts.J1.pins}
              pinLabels={{ pin1: "INT", pin2: "VCC", pin3: "EXT" }}
              schX={layoutX(isMultiSheet ? -20.0 : -21.0)}
              schY={layoutY(isMultiSheet ? 7.2 : 8.2)}
              schDirection="right"
              {...threePinJumperSize}
            />
            <jumper
              name="SH-J1"
              displayName="J1:1-2"
              manufacturerPartNumber={shuntPartNumber}
              pinCount={2}
              internallyConnectedPins={[[1, 2]]}
              schX={layoutX(isMultiSheet ? -22.2 : -18.8)}
              schY={layoutY(isMultiSheet ? 5.8 : 7.5)}
              schDirection="right"
              {...twoPinJumperSize}
            />
            <pinheader
              name="J2"
              displayName="EXT_PWR"
              manufacturerPartNumber="TSW-103-07-G-S"
              footprint="pinrow3_p2.54_nopinlabels"
              pinCount={3}
              gender="male"
              pitch="2.54mm"
              pinLabels={{ pin1: "VCC", pin2: "EXT_PWR", pin3: "GND" }}
              schX={layoutX(-4.7)}
              schY={layoutY(9.2)}
              schFacingDirection="left"
              schWidth="0.6mm"
              schHeight="1.2mm"
            />
            <jumper
              name="JP1"
              manufacturerPartNumber="TSW-102-07-G-S"
              footprint="pinrow2_p2.54_nopinlabels"
              pinCount={2}
              internallyConnectedPins={installedShunts.JP1.pins}
              schX={layoutX(isMultiSheet ? -20.7 : -23.8)}
              schY={layoutY(4.2)}
              schDirection="right"
              {...twoPinJumperSize}
            />
            <jumper
              name="SH-JP1"
              displayName="JP1:1-2"
              manufacturerPartNumber={shuntPartNumber}
              pinCount={2}
              internallyConnectedPins={[[1, 2]]}
              schX={layoutX(isMultiSheet ? -17.2 : -21.3)}
              schY={layoutY(4.2)}
              schDirection="right"
              {...twoPinJumperSize}
            />
            {[
              { name: "JP2", schY: 1.8 },
              { name: "JP3", schY: -0.2 },
              { name: "JP4", schY: -2.2 },
            ].map(({ name, schY }) => (
              <Fragment key={name}>
                <jumper
                  name={name}
                  manufacturerPartNumber="TSW-102-07-G-S"
                  footprint="pinrow2_p2.54_nopinlabels"
                  pinCount={2}
                  internallyConnectedPins={
                    installedShunts[name as keyof typeof installedShunts].pins
                  }
                  schX={layoutX(isMultiSheet ? -20.7 : -23.8)}
                  schY={layoutY(schY)}
                  schDirection="right"
                  {...twoPinJumperSize}
                />
                <jumper
                  name={
                    installedShunts[name as keyof typeof installedShunts].refdes
                  }
                  displayName={`${name}:1-2`}
                  manufacturerPartNumber={shuntPartNumber}
                  pinCount={2}
                  internallyConnectedPins={[[1, 2]]}
                  schX={layoutX(isMultiSheet ? -18.2 : -21.3)}
                  schY={layoutY(schY)}
                  schDirection="right"
                  {...twoPinJumperSize}
                />
              </Fragment>
            ))}
          </group>

          <group
            name="programming_selectors_and_bsl_layout"
            schSheetName={sheetFor(sheetNames.programmingDebug)}
            schX={pageOffset(3)}
            schY={pageOffset(-4.5)}
          >
            {/* Debug-mode selectors JP5-JP10, populated 2-3 in Figure B-79. */}
            {(isMultiSheet
              ? [
                  { name: "JP9", schX: -17.0 },
                  { name: "JP10", schX: -13.0 },
                  { name: "JP5", schX: -9.0 },
                  { name: "JP6", schX: -5.0 },
                  { name: "JP7", schX: -1.0 },
                  { name: "JP8", schX: 3.0 },
                ]
              : [
                  { name: "JP9", schX: -18.0 },
                  { name: "JP10", schX: -15.5 },
                  { name: "JP5", schX: -12.8 },
                  { name: "JP6", schX: -10.5 },
                  { name: "JP7", schX: -8.2 },
                  { name: "JP8", schX: -5.9 },
                ]
            ).map(({ name, schX }) => (
              <Fragment key={name}>
                <jumper
                  name={name}
                  manufacturerPartNumber="TSW-103-07-G-S"
                  footprint="pinrow3_p2.54_nopinlabels"
                  pinCount={3}
                  internallyConnectedPins={
                    installedShunts[name as keyof typeof installedShunts].pins
                  }
                  schX={layoutX(schX)}
                  schY={layoutY(isMultiSheet ? 3.5 : 5.5)}
                  schDirection="right"
                  {...threePinJumperSize}
                />
                <jumper
                  name={
                    installedShunts[name as keyof typeof installedShunts].refdes
                  }
                  displayName={`${name}:2-3`}
                  manufacturerPartNumber={shuntPartNumber}
                  pinCount={2}
                  internallyConnectedPins={[[1, 2]]}
                  schX={layoutX(schX)}
                  schY={layoutY(isMultiSheet ? 1.8 : 4.1)}
                  schDirection="right"
                  {...twoPinJumperSize}
                />
              </Fragment>
            ))}

            {/* Bootloader header and Figure B-78 interface-selection bank. */}
            <connector
              name="BSL"
              manufacturerPartNumber="AWHW-10G-0202-T"
              footprint="pinrow10_p2.54_nopinlabels_rows2"
              noConnect={["pin5", "pin10"]}
              schX={layoutX(-1.2)}
              schY={layoutY(9.4)}
              schWidth="1.8mm"
              schHeight="2.8mm"
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
              schX={layoutX(2.8)}
              schY={layoutY(8.9)}
              schOrientation="vertical"
            />
            <resistor
              name="R4"
              resistance="0"
              footprint="0603"
              doNotPlace
              schX={layoutX(3.4)}
              schY={layoutY(8.0)}
              schOrientation="vertical"
            />
            <switch
              name="SW4"
              displayName="I2C BSL CONNECTION"
              manufacturerPartNumber="GH7727-ND"
              footprint="pinrow4_p2.54_nopinlabels"
              dpst
              schX={layoutX(6.0)}
              schY={layoutY(8.8)}
            />
            <switch
              name="SW5"
              displayName="UART BSL CONNECTION"
              manufacturerPartNumber="GH7727-ND"
              footprint="pinrow4_p2.54_nopinlabels"
              dpst
              schX={layoutX(6.0)}
              schY={layoutY(6.7)}
            />
            <switch
              name="SW3"
              displayName="I2C PULLUPS"
              manufacturerPartNumber="GH7727-ND"
              footprint="pinrow4_p2.54_nopinlabels"
              dpst
              schX={layoutX(6.0)}
              schY={layoutY(4.6)}
            />
            <resistor
              name="R17"
              resistance="4.7k"
              footprint="0805"
              schX={layoutX(8.3)}
              schY={layoutY(5.1)}
            />
            <resistor
              name="R16"
              resistance="4.7k"
              footprint="0805"
              schX={layoutX(8.3)}
              schY={layoutY(4.1)}
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
                  schX={layoutX(schX)}
                  schY={layoutY(schY)}
                />
              </Fragment>
            ))}
          </group>

          <group
            name="channel_header_layout"
            schSheetName={sheetFor(sheetNames.clocksChannels)}
          >
            {/* USS channel-input headers and documented shunts. */}
            <jumper
              name="JP14"
              manufacturerPartNumber="TSW-102-07-G-S"
              footprint="pinrow2_p2.54_nopinlabels"
              pinCount={2}
              internallyConnectedPins={installedShunts.JP14.pins}
              schX={layoutX(8.5)}
              schY={layoutY(3.0)}
              schDirection="right"
              {...twoPinJumperSize}
            />
            <jumper
              name="JP13"
              manufacturerPartNumber="TSW-102-07-G-S"
              footprint="pinrow2_p2.54_nopinlabels"
              pinCount={2}
              internallyConnectedPins={installedShunts.JP13.pins}
              schX={layoutX(11.5)}
              schY={layoutY(3.0)}
              schDirection="left"
              {...twoPinJumperSize}
            />
            {[
              { header: "JP14", shunt: "SH-JP14", schX: 8.5 },
              { header: "JP13", shunt: "SH-JP13", schX: 11.5 },
            ].map(({ header, shunt, schX }) => (
              <jumper
                key={shunt}
                name={shunt}
                displayName={`${header}:1-2`}
                manufacturerPartNumber={shuntPartNumber}
                pinCount={2}
                internallyConnectedPins={[[1, 2]]}
                schX={layoutX(schX)}
                schY={layoutY(1.7)}
                schDirection="right"
                {...twoPinJumperSize}
              />
            ))}
          </group>

          <group
            name="power_and_user_layout"
            schSheetName={sheetFor(sheetNames.powerUser)}
            schX={pageOffset(7)}
            schY={pageOffset(1)}
          >
            {/* Target-board AVCC bypass network. */}
            <capacitor
              name="C3"
              capacitance="1uF"
              footprint="0805"
              schX={layoutX(-14.1)}
              schY={layoutY(2.1)}
              schOrientation="vertical"
            />
            <capacitor
              name="C11"
              capacitance="0.1uF"
              footprint="0805"
              schX={layoutX(-13.2)}
              schY={layoutY(3.4)}
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
              schX={layoutX(-14.1)}
              schY={layoutY(0.5)}
              schOrientation="vertical"
            />
            <capacitor
              name="C13"
              capacitance="0.1uF"
              footprint="0805"
              schX={layoutX(-13.2)}
              schY={layoutY(0.5)}
              schOrientation="vertical"
            />

            {/* The two physical DVCC bypass locations retained from the board. */}
            <capacitor
              name="C4"
              capacitance="0.1uF"
              footprint="0805"
              schX={layoutX(isMultiSheet ? -4.0 : -5.8)}
              schY={layoutY(-6.3)}
              schOrientation="vertical"
            />

            {/* Source star-ground links: PVSS--R11--GND--R12--AVSS. */}
            <resistor
              name="R11"
              resistance="0"
              footprint="0805"
              schX={layoutX(-18.5)}
              schY={layoutY(-5.5)}
            />
            <resistor
              name="R12"
              resistance="0"
              footprint="0805"
              schX={layoutX(-18.5)}
              schY={layoutY(-6.5)}
            />
            <resistor
              name="R10"
              resistance="0"
              footprint="0805"
              schX={layoutX(-19.5)}
              schY={layoutY(-7.2)}
              schOrientation="vertical"
            />
            <testpoint
              name="TP6"
              doNotPlace
              footprintVariant="through_hole"
              holeDiameter="0.8mm"
              padDiameter="1.5mm"
              schX={layoutX(-20.2)}
              schY={layoutY(-5.5)}
            />
            <testpoint
              name="TP5"
              doNotPlace
              footprintVariant="through_hole"
              holeDiameter="0.8mm"
              padDiameter="1.5mm"
              schX={layoutX(-20.2)}
              schY={layoutY(-7.8)}
            />
            <pushbutton
              name="SW1"
              displayName="P1.3"
              manufacturerPartNumber="EVQ-11L05R"
              footprint="smdpushbutton"
              schX={layoutX(-18.0)}
              schY={layoutY(-7.8)}
            />
            <resistor
              name="R13"
              resistance="47k"
              footprint="0805"
              doNotPlace
              schX={layoutX(-15.6)}
              schY={layoutY(-7.1)}
              schOrientation="vertical"
            />
            <led
              name="D2"
              displayName="BLUE"
              color="blue"
              footprint="led0805"
              manufacturerPartNumber="732-4982"
              schX={layoutX(-19.2)}
              schY={layoutY(-9.0)}
              schRotation={180}
            />
            <resistor
              name="R2"
              resistance="200"
              footprint="0805"
              schX={layoutX(-17.2)}
              schY={layoutY(-9.0)}
            />
            <jumper
              name="JP12"
              manufacturerPartNumber="TSW-102-07-G-S"
              footprint="pinrow2_p2.54_nopinlabels"
              pinCount={2}
              internallyConnectedPins={installedShunts.JP12.pins}
              schX={layoutX(-15.0)}
              schY={layoutY(-9.0)}
              schDirection="right"
              {...twoPinJumperSize}
            />
            <jumper
              name="SH-JP12"
              displayName="JP12:1-2"
              manufacturerPartNumber={shuntPartNumber}
              pinCount={2}
              internallyConnectedPins={[[1, 2]]}
              schX={layoutX(isMultiSheet ? -11.5 : -13.2)}
              schY={layoutY(-9.0)}
              schDirection="right"
              {...twoPinJumperSize}
            />
            <led
              name="D1"
              displayName="GREEN"
              color="green"
              footprint="led0805"
              manufacturerPartNumber="754-1939-1"
              schX={layoutX(-19.2)}
              schY={layoutY(-10.2)}
              schRotation={180}
            />
            <resistor
              name="R1"
              resistance="330"
              footprint="0805"
              schX={layoutX(-17.2)}
              schY={layoutY(-10.2)}
            />
            <jumper
              name="JP11"
              manufacturerPartNumber="TSW-102-07-G-S"
              footprint="pinrow2_p2.54_nopinlabels"
              pinCount={2}
              internallyConnectedPins={installedShunts.JP11.pins}
              schX={layoutX(-15.0)}
              schY={layoutY(-10.2)}
              schDirection="right"
              {...twoPinJumperSize}
            />
            <jumper
              name="SH-JP11"
              displayName="JP11:1-2"
              manufacturerPartNumber={shuntPartNumber}
              pinCount={2}
              internallyConnectedPins={[[1, 2]]}
              schX={layoutX(isMultiSheet ? -11.5 : -13.2)}
              schY={layoutY(-10.2)}
              schDirection="right"
              {...twoPinJumperSize}
            />
            {/* Native-symbol clearance shift documented in coordinate provenance. */}
            <capacitor
              name="C10"
              capacitance="0.1uF"
              footprint="0805"
              schX={layoutX(isMultiSheet ? -2.8 : -3.5)}
              schY={layoutY(-6.3)}
              schOrientation="vertical"
            />
            <capacitor
              name="C7"
              capacitance="1uF"
              footprint="0805"
              schX={layoutX(6.4)}
              schY={layoutY(-6.2)}
              schOrientation="vertical"
            />
            <capacitor
              name="C6"
              capacitance="0.1uF"
              footprint="0805"
              schX={layoutX(7.4)}
              schY={layoutY(-6.2)}
              schOrientation="vertical"
            />
          </group>

          <group
            name="reset_layout"
            schSheetName={sheetFor(sheetNames.programmingDebug)}
            schX={pageOffset(4)}
            schY={pageOffset(-11.7)}
          >
            {/* Reset pull-up, filter, and pushbutton from Figure B-78. */}
            <resistor
              name="R7"
              resistance="47k"
              footprint="0805"
              schX={layoutX(-11.6)}
              schY={layoutY(7.8)}
              schOrientation="vertical"
            />
            <capacitor
              name="C5"
              capacitance="1100pF"
              footprint="0805"
              schX={layoutX(-11.5)}
              schY={layoutY(6.6)}
              schOrientation="vertical"
            />
            <pushbutton
              name="SW2"
              displayName="RESET"
              manufacturerPartNumber="EVQ-11L05R"
              footprint="smdpushbutton"
              schX={layoutX(-12.6)}
              schY={layoutY(7.5)}
            />
          </group>

          <group
            name="clocks_uss_lcdcap_layout"
            schSheetName={sheetFor(sheetNames.clocksChannels)}
          >
            {/* Optional low-frequency crystal population from the socket board. */}
            <crystal
              name="Q1"
              manufacturerPartNumber="MS3V-T1R"
              frequency="32.768kHz"
              loadCapacitance="12.5pF"
              pinVariant="two_pin"
              doNotPlace
              schX={layoutX(-11.0)}
              schY={layoutY(2.7)}
            />
            <capacitor
              name="C1"
              capacitance="12pF"
              footprint="0805"
              doNotPlace
              schX={layoutX(-12.3)}
              schY={layoutY(3.5)}
              schOrientation="vertical"
            />
            <capacitor
              name="C2"
              capacitance="12pF"
              footprint="0805"
              doNotPlace
              schX={layoutX(-12.3)}
              schY={layoutY(1.9)}
              schOrientation="vertical"
            />
            <resistor
              name="R5"
              resistance="0"
              footprint="0603"
              doNotPlace
              schX={layoutX(-9.5)}
              schY={layoutY(3.5)}
            />
            <resistor
              name="R6"
              resistance="0"
              footprint="0603"
              doNotPlace
              schX={layoutX(-9.5)}
              schY={layoutY(1.9)}
            />

            {/* Optional HFXT population; all five parts are DNP in the source BOM. */}
            <crystal
              name="Q2"
              manufacturerPartNumber="MS3V-T1R"
              frequency="32.768kHz"
              loadCapacitance="12.5pF"
              pinVariant="two_pin"
              doNotPlace
              schX={layoutX(-11.0)}
              schY={layoutY(-0.4)}
            />
            <capacitor
              name="C8"
              capacitance="22pF"
              footprint="0805"
              doNotPlace
              schX={layoutX(-12.3)}
              schY={layoutY(0.4)}
              schOrientation="vertical"
            />
            <capacitor
              name="C9"
              capacitance="22pF"
              footprint="0805"
              doNotPlace
              schX={layoutX(-12.3)}
              schY={layoutY(-1.2)}
              schOrientation="vertical"
            />
            <resistor
              name="R9"
              resistance="0"
              footprint="0603"
              doNotPlace
              schX={layoutX(-9.5)}
              schY={layoutY(0.4)}
            />
            <resistor
              name="R8"
              resistance="0"
              footprint="0603"
              doNotPlace
              schX={layoutX(-9.5)}
              schY={layoutY(-1.2)}
            />

            {/* USS 8-MHz resonator path retained exactly as the source DNP block. */}
            <group name="uss_resonator_layout" schX={isMultiSheet ? 0 : -4}>
              <resonator
                name="Q3"
                manufacturerPartNumber="77D9806"
                frequency="8MHz"
                loadCapacitance="27pF"
                pinVariant="ground_pin"
                doNotPlace
                schX={layoutX(-8.0)}
                schY={layoutY(-3.8)}
              />
              <capacitor
                name="C14"
                capacitance="27pF"
                footprint="0603"
                doNotPlace
                schX={layoutX(-10.0)}
                schY={layoutY(-3.0)}
                schOrientation="vertical"
              />
              <capacitor
                name="C15"
                capacitance="27pF"
                footprint="0603"
                doNotPlace
                schX={layoutX(-10.0)}
                schY={layoutY(-4.6)}
                schOrientation="vertical"
              />
              <resistor
                name="R14"
                resistance="0"
                footprint="0603"
                doNotPlace
                schX={layoutX(-6.0)}
                schY={layoutY(-3.0)}
              />
              <resistor
                name="R22"
                resistance="22"
                footprint="0603"
                schX={layoutX(-6.0)}
                schY={layoutY(-4.6)}
              />
              <resistor
                name="R15"
                resistance="0"
                footprint="0603"
                doNotPlace
                schX={layoutX(-4.2)}
                schY={layoutY(-4.6)}
              />
            </group>

            {/* Optional LCD_C module loading shown beside IC1 pin 74. */}
            <resistor
              name="R18"
              resistance="0"
              footprint="0805"
              doNotPlace
              schX={layoutX(isMultiSheet ? -2.8 : -5.0)}
              schY={layoutY(-5.1)}
              schOrientation="vertical"
            />
            <capacitor
              name="C12"
              capacitance="4.7uF"
              footprint="0805"
              doNotPlace
              schX={layoutX(isMultiSheet ? -1.8 : -4.0)}
              schY={layoutY(-5.1)}
              schOrientation="vertical"
            />
          </group>

          <group
            name="jtag_layout"
            schSheetName={sheetFor(sheetNames.programmingDebug)}
            schX={pageOffset(9.7)}
            schY={pageOffset(-4.5)}
          >
            {/* UART/I2C BSL paths retained on the source JTAG header. */}
            <resistor
              name="R19"
              resistance="0"
              footprint="0805"
              symbolName="resistor"
              schSize="xs"
              schX={layoutX(-21.5)}
              schY={layoutY(9.3) + 1.1}
            />
            <resistor
              name="R20"
              resistance="0"
              footprint="0805"
              symbolName="resistor"
              schSize="xs"
              schX={layoutX(-21.5)}
              schY={layoutY(9.3) + 0.4}
            />
            <resistor
              name="R21"
              resistance="0"
              footprint="0805"
              symbolName="resistor"
              schSize="xs"
              schX={layoutX(-21.5)}
              schY={layoutY(9.3) - 0.3}
            />

            {/*
             * 14-pin MSP JTAG connector and the direct R19/R20/R21 paths from
             * Figure B-78. JP5-JP10 carry the documented installed shunt state.
             */}
            <connector
              name="JTAG"
              manufacturerPartNumber="SBH11-PBPC-D07-ST-BK"
              footprint="pinrow14_p2.54_nopinlabels_rows2"
              noConnect={["pin6", "pin13"]}
              schX={layoutX(-17.7)}
              schY={layoutY(9.3)}
              schWidth="1.8mm"
              schHeight="2.8mm"
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
            <trace
              name="R19_JTAG_BSL_RX"
              from="R19.pin2"
              to="JTAG.pin14"
              schDisplayLabel="BSL_RX"
            />
            <trace
              name="R20_JTAG_BSL_TX"
              from="R20.pin2"
              to="JTAG.pin12"
              schDisplayLabel="BSL_TX"
            />
            <trace
              name="R21_JTAG_BSL_SCL"
              from="R21.pin2"
              to="JTAG.pin10"
              schDisplayLabel="BSL_SCL"
            />
          </group>

          <trace
            name="BSL_PIN6_R3_PIN1_BSL_TOOL_VCC"
            from="BSL.pin6"
            to="R3.pin1"
            schDisplayLabel="BSL_TOOL_VCC"
          />
          <trace
            name="BSL_PIN8_R4_PIN1_BSL_TARGET_VCC"
            from="BSL.pin8"
            to="R4.pin1"
            schDisplayLabel="BSL_TARGET_VCC"
          />
          <trace
            name="D2_PIN2_R2_PIN1_LED2_A"
            from="D2.pin2"
            to="R2.pin1"
            schDisplayLabel="LED2_A"
          />

          {/*
           * Figure B-79/Table B-40 installed-shunt connectivity is applied on
           * each header. The separately named 3M9580-ND assembly blocks remain
           * visually detached exactly as Figure B-78 draws them.
           */}
          {/* Repository-standard net names are carried by native traces. */}
          {[
            sheetNames.programmingDebug,
            sheetNames.powerUser,
            sheetNames.clocksChannels,
          ].map((sheetName) => (
            <group
              key={`${sheetName}_trace_layout`}
              name={`${sheetName}_trace_layout`}
              schSheetName={sheetFor(sheetName)}
            >
              {supportNetTraces
                .filter(
                  ({ component, pin }) =>
                    supportSheetForComponent(component) === sheetName &&
                    !directSupportEndpoints.has(`${component}.pin${pin}`),
                )
                .map(({ component, pin, net, name, displayLabel }) => (
                  <Fragment key={`${component}-pin${pin}-${net}`}>
                    <trace
                      name={name ?? `${component}_PIN${pin}_${net}`}
                      from={`${component}.pin${pin}`}
                      to={`net.${canonicalNet(net)}`}
                      schDisplayLabel={displayLabel ?? net}
                    />
                  </Fragment>
                ))}
            </group>
          ))}
        </group>
      </group>

      <port name="AVCC" direction="left" connectsTo="net.AVCC" />
      <port name="DVCC" direction="left" connectsTo="net.DVCC" />
      <port name="PVCC" direction="left" connectsTo="net.PVCC" />
      <port name="GND" direction="left" connectsTo="net.GND" />
      <port name="DVSS" direction="left" connectsTo="net.DVSS" />
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
};

export const Microcontroller_MSP430FR6007 = (props: SubcircuitProps) => (
  <MSP430FR6007ReferenceLayout layoutVariant="single-sheet" {...props} />
);

export default Microcontroller_MSP430FR6007;
