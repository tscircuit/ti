import type { SubcircuitProps } from "@tscircuit/props";
import { Fragment } from "react";
import "tscircuit";
import {
  MSP430FR6007IPZ,
  MSP430FR6007IPZ_PIN_LABELS,
} from "../chips/MSP430FR6007IPZ.circuit.tsx";

const ascendingSocketPins = Array.from({ length: 25 }, (_, index) => index + 1);
const descendingSocketPins = [...ascendingSocketPins].reverse();

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
  { connector: "J3", connectorPin: 16, net: "BSL_TX" },
  { connector: "J3", connectorPin: 17, net: "BSL_RX" },
  { connector: "J3", connectorPin: 20, net: "TEST_SBWTCK" },
  { connector: "J3", connectorPin: 21, net: "RESET_SBWTDIO" },
  { connector: "J3", connectorPin: 22, net: "TDO" },
  { connector: "J3", connectorPin: 23, net: "TDI" },
  { connector: "J3", connectorPin: 24, net: "TMS" },
  { connector: "J3", connectorPin: 25, net: "TCK" },
  { connector: "J4", connectorPin: 1, net: "GND" },
  { connector: "J4", connectorPin: 2, net: "DVCC" },
  { connector: "J5", connectorPin: 1, net: "GND" },
  { connector: "J5", connectorPin: 2, net: "DVCC" },
  { connector: "J5", connectorPin: 25, net: "GND" },
  { connector: "J6", connectorPin: 1, net: "DVCC" },
  { connector: "J6", connectorPin: 12, net: "PVSS" },
  { connector: "J6", connectorPin: 13, net: "PVCC" },
  { connector: "J6", connectorPin: 14, net: "PVSS" },
  { connector: "J6", connectorPin: 21, net: "AVSS" },
  { connector: "J6", connectorPin: 24, net: "AVSS" },
  { connector: "J6", connectorPin: 25, net: "AVCC" },
] as const;

const supportNetTraces: ReadonlyArray<{
  component: string;
  pin: number;
  net: string;
  name?: string;
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
  { component: "C10", pin: 1, net: "DVCC" },
  { component: "C10", pin: 2, net: "GND" },
  { component: "C7", pin: 1, net: "DVCC" },
  { component: "C7", pin: 2, net: "GND" },
  { component: "C6", pin: 1, net: "DVCC" },
  { component: "C6", pin: 2, net: "GND" },
  { component: "R7", pin: 1, net: "DVCC", name: "R7_DVCC" },
  { component: "R7", pin: 2, net: "RESET_SBWTDIO" },
  {
    component: "C5",
    pin: 1,
    net: "RESET_SBWTDIO",
    name: "C5_RESET_SBWTDIO",
  },
  { component: "C5", pin: 2, net: "GND" },
  { component: "SW2", pin: 1, net: "RESET_SBWTDIO" },
  { component: "SW2", pin: 2, net: "GND" },
  { component: "SW2", pin: 3, net: "RESET_SBWTDIO" },
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
  { component: "JTAG", pin: 1, net: "TDO" },
  { component: "JTAG", pin: 2, net: "DVCC" },
  { component: "JTAG", pin: 3, net: "TDI" },
  { component: "JTAG", pin: 4, net: "DVCC" },
  { component: "JTAG", pin: 5, net: "TMS" },
  { component: "JTAG", pin: 7, net: "TCK" },
  { component: "JTAG", pin: 8, net: "TEST_SBWTCK" },
  { component: "JTAG", pin: 9, net: "GND" },
  { component: "JTAG", pin: 11, net: "RESET_SBWTDIO" },
  { component: "JTAG", pin: 12, net: "JTAG_BSL_TX" },
  { component: "JTAG", pin: 14, net: "JTAG_BSL_RX" },
];

/**
 * MSP430FR6007 minimum-system section extracted from TI's MSP-TS430PZ100E
 * target socket module. The board supports this exact MCU but supplies it as
 * a socketed target rather than documenting it as a Window Module design.
 * The source assigns no motor-driver, pinch, position, thermal, CAN, or LIN
 * functions to MCU GPIOs, so this subcircuit intentionally does not invent
 * those interface names. J3-J6 are retained because Figure B-78 places them
 * between all four sides of IC1 and the target-board circuitry. Board-only
 * power-selection/current-measurement headers, LEDs, the user button, LCD
 * bias parts, and the optional USS sensing oscillator remain outside this
 * minimum-system extract.
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
 * The one-sheet drawing applies a uniform +6.4 mm rendered-X translation to
 * every local center so the complete extract fits inside the native frame;
 * all source-relative component offsets remain unchanged except C10, whose
 * native symbol needs 0.4 mm additional left clearance to preserve the
 * verified IC1.pin26-to-J4.pin1 route.
 * The native render keeps IC1, J3-J6, and the retained target-board
 * minimum-system support circuitry together on one sheet, as in Figure B-78.
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

    <schematicsheet
      name="msp430fr6007_target_board"
      displayName="MSP430FR6007 Target Board"
      sheetIndex={1}
    >
      <group name="figure_b78_one_sheet_layout" schX={6.4}>
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
          {/* Target-board AVCC bypass network. */}
          <capacitor
            name="C3"
            capacitance="1uF"
            footprint="0805"
            schX={-14.1}
            schY={2.1}
            schOrientation="vertical"
          />
          <capacitor
            name="C11"
            capacitance="0.1uF"
            footprint="0805"
            schX={-13.2}
            schY={3.4}
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
            schX={-14.1}
            schY={0.5}
            schOrientation="vertical"
          />
          <capacitor
            name="C13"
            capacitance="0.1uF"
            footprint="0805"
            schX={-13.2}
            schY={0.5}
            schOrientation="vertical"
          />

          {/* The two physical DVCC bypass locations retained from the board. */}
          <capacitor
            name="C4"
            capacitance="0.1uF"
            footprint="0805"
            schX={-4.0}
            schY={-6.3}
            schOrientation="vertical"
          />

          {/* Source star-ground links: PVSS--R11--GND--R12--AVSS. */}
          <resistor
            name="R11"
            resistance="0"
            footprint="0805"
            schX={-19.0}
            schY={-5.5}
          />
          <resistor
            name="R12"
            resistance="0"
            footprint="0805"
            schX={-19.0}
            schY={-6.5}
          />
          {/* Native-symbol clearance shift documented in coordinate provenance. */}
          <capacitor
            name="C10"
            capacitance="0.1uF"
            footprint="0805"
            schX={-3.4}
            schY={-6.3}
            schOrientation="vertical"
          />
          <capacitor
            name="C7"
            capacitance="1uF"
            footprint="0805"
            schX={6.4}
            schY={-6.2}
            schOrientation="vertical"
          />
          <capacitor
            name="C6"
            capacitance="0.1uF"
            footprint="0805"
            schX={7.4}
            schY={-6.2}
            schOrientation="vertical"
          />

          {/* Reset pull-up, filter, and pushbutton from Figure B-78. */}
          <resistor
            name="R7"
            resistance="47k"
            footprint="0805"
            schX={-11.6}
            schY={7.8}
            schOrientation="vertical"
          />
          <capacitor
            name="C5"
            capacitance="1100pF"
            footprint="0805"
            schX={-11.5}
            schY={6.6}
            schOrientation="vertical"
          />
          <pushbutton
            name="SW2"
            displayName="RESET"
            manufacturerPartNumber="EVQ-11L05R"
            footprint="smdpushbutton"
            schX={-12.6}
            schY={7.5}
          />

          {/* Optional low-frequency crystal population from the socket board. */}
          <crystal
            name="Q1"
            manufacturerPartNumber="MS3V-T1R"
            frequency="32.768kHz"
            loadCapacitance="12.5pF"
            pinVariant="two_pin"
            doNotPlace
            schX={-11.0}
            schY={2.7}
          />
          <capacitor
            name="C1"
            capacitance="12pF"
            footprint="0805"
            doNotPlace
            schX={-12.3}
            schY={3.2}
            schOrientation="vertical"
          />
          <capacitor
            name="C2"
            capacitance="12pF"
            footprint="0805"
            doNotPlace
            schX={-12.3}
            schY={2.2}
            schOrientation="vertical"
          />
          <resistor
            name="R5"
            resistance="0"
            footprint="0603"
            doNotPlace
            schX={-9.5}
            schY={3.2}
          />
          <resistor
            name="R6"
            resistance="0"
            footprint="0603"
            doNotPlace
            schX={-9.5}
            schY={2.2}
          />

          {/* Optional HFXT population; all five parts are DNP in the source BOM. */}
          <crystal
            name="Q2"
            manufacturerPartNumber="MS3V-T1R"
            frequency="32.768kHz"
            loadCapacitance="12.5pF"
            pinVariant="two_pin"
            doNotPlace
            schX={-11.0}
            schY={-0.4}
          />
          <capacitor
            name="C8"
            capacitance="22pF"
            footprint="0805"
            doNotPlace
            schX={-12.3}
            schY={0.1}
            schOrientation="vertical"
          />
          <capacitor
            name="C9"
            capacitance="22pF"
            footprint="0805"
            doNotPlace
            schX={-12.3}
            schY={-0.9}
            schOrientation="vertical"
          />
          <resistor
            name="R9"
            resistance="0"
            footprint="0603"
            doNotPlace
            schX={-9.5}
            schY={0.1}
          />
          <resistor
            name="R8"
            resistance="0"
            footprint="0603"
            doNotPlace
            schX={-9.5}
            schY={-0.9}
          />

          {/* UART BSL paths retained on the source JTAG header. */}
          <resistor
            name="R19"
            resistance="0"
            footprint="0805"
            schX={-20.3}
            schY={10.5}
          />
          <resistor
            name="R20"
            resistance="0"
            footprint="0805"
            schX={-20.3}
            schY={9.9}
          />

          {/*
           * 14-pin MSP JTAG connector resolved to the board's documented four-wire
           * configuration (JP5-JP10 at pins 2-3). The physical selector headers and
           * shunts are board UI, so the extracted module preserves their selected
           * connectivity without importing those configuration-only components.
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
              pin10: "NC_10",
              pin11: "RST",
              pin12: "BSL_TX",
              pin13: "NC_13",
              pin14: "BSL_RX",
            }}
            noConnect={["NC_6", "NC_10", "NC_13"]}
            schX={-17.7}
            schY={9.7}
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
          {supportNetTraces.map(({ component, pin, net, name }) => (
            <Fragment key={`${component}-pin${pin}-${net}`}>
              <trace
                name={name ?? `${component}_PIN${pin}_${net}`}
                from={`${component}.pin${pin}`}
                to={`net.${net}`}
                schDisplayLabel={net}
              />
            </Fragment>
          ))}
        </group>
      </group>
    </schematicsheet>

    <port name="AVCC" direction="left" connectsTo="net.AVCC" />
    <port name="DVCC" direction="left" connectsTo="net.DVCC" />
    <port name="PVCC" direction="left" connectsTo="net.PVCC" />
    <port name="GND" direction="left" connectsTo="net.GND" />
    <port name="RESET" direction="left" connectsTo="net.RESET_SBWTDIO" />
    <port name="BSL_TX" direction="left" connectsTo="net.BSL_TX" />
    <port name="BSL_RX" direction="left" connectsTo="net.BSL_RX" />
    <port name="TEST" direction="right" connectsTo="net.TEST_SBWTCK" />
    <port name="TDO" direction="right" connectsTo="net.TDO" />
    <port name="TDI" direction="right" connectsTo="net.TDI" />
    <port name="TMS" direction="right" connectsTo="net.TMS" />
    <port name="TCK" direction="right" connectsTo="net.TCK" />
  </subcircuit>
);

export default Microcontroller_MSP430FR6007;
