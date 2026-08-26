import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  MSP430FR6007IPZ,
  MSP430FR6007IPZ_PIN_LABELS,
} from "../chips/MSP430FR6007IPZ.circuit.tsx";

const connectedPins = new Set([
  5, 6, 7, 8, 9, 10, 11, 16, 17, 20, 21, 22, 23, 24, 25, 26, 27, 51, 52, 75, 76,
  87, 88, 89, 96, 99, 100,
]);

const noConnectPins = Array.from({ length: 100 }, (_, index) => index + 1)
  .filter((pin) => !connectedPins.has(pin))
  .map((pin) => `pin${pin}`) as Array<keyof typeof MSP430FR6007IPZ_PIN_LABELS>;

/**
 * MSP430FR6007 minimum-system section extracted from TI's MSP-TS430PZ100E
 * target socket module. The board supports this exact MCU but supplies it as
 * a socketed target rather than documenting it as a Window Module design.
 * The source assigns no motor-driver, pinch, position, thermal, CAN, or LIN
 * functions to MCU GPIOs, so this subcircuit intentionally does not invent
 * those interface names. Board-only power-selection/current-measurement
 * headers, GPIO breakout headers, LEDs, the user button, LCD bias parts, and
 * the optional USS sensing oscillator are outside this minimum-system extract.
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
 */
export const Microcontroller_MSP430FR6007 = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="40mm"
    // The extracted source is schematic-only. Native schematic autorouting
    // remains enabled; routingDisabled prevents a synthesized PCB routing.
    // Its checked-in snapshot is schematic-only because no exact CAD exists.
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />
    <net name="AVSS" />
    <net name="PVSS" />
    <net name="AVCC" isPowerNet />
    <net name="DVCC" isPowerNet />
    <net name="PVCC" isPowerNet />

    <MSP430FR6007IPZ
      name="IC1"
      schX={0}
      schY={0}
      noConnect={noConnectPins}
      connections={{
        AVSS1: "net.AVSS",
        AVSS2: "net.AVSS",
        AVSS3: "net.AVSS",
        AVSS4: "net.AVSS",
        AVSS5: "net.AVSS",
        DVSS1: "net.GND",
        DVSS2: "net.GND",
        DVSS3: "net.GND",
        PVSS1: "net.PVSS",
        PVSS2: "net.PVSS",
        AVCC1: "net.AVCC",
        DVCC1: "net.DVCC",
        DVCC2: "net.DVCC",
        DVCC3: "net.DVCC",
        PVCC: "net.PVCC",
        LFXIN: "net.LFXIN",
        LFXOUT: "net.LFXOUT",
        HFXIN: "net.HFXIN",
        HFXOUT: "net.HFXOUT",
        BSLTX: "net.BSL_TX",
        BSLRX: "net.BSL_RX",
        TEST: "net.TEST_SBWTCK",
        RST_NMI_SBWTDIO: "net.RESET_SBWTDIO",
        TDO: "net.TDO",
        TDI: "net.TDI",
        TMS: "net.TMS",
        TCK: "net.TCK",
      }}
    />

    {/* Target-board AVCC bypass network. */}
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0805"
      schX={-14.1}
      schY={2.1}
      schOrientation="vertical"
      connections={{ pin1: "net.AVCC", pin2: "net.AVSS" }}
    />
    <capacitor
      name="C11"
      capacitance="0.1uF"
      footprint="0805"
      schX={-13.2}
      schY={3.4}
      schOrientation="vertical"
      connections={{ pin1: "net.AVCC", pin2: "net.AVSS" }}
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
      connections={{ pin1: "net.PVCC", pin2: "net.PVSS" }}
    />
    <capacitor
      name="C13"
      capacitance="0.1uF"
      footprint="0805"
      schX={-13.2}
      schY={0.5}
      schOrientation="vertical"
      connections={{ pin1: "net.PVCC", pin2: "net.PVSS" }}
    />

    {/* The two physical DVCC bypass locations retained from the board. */}
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint="0805"
      schX={-4.0}
      schY={-6.3}
      schOrientation="vertical"
      connections={{ pin1: "net.DVCC", pin2: "net.GND" }}
    />

    {/* Source star-ground links: PVSS--R11--GND--R12--AVSS. */}
    <resistor
      name="R11"
      resistance="0"
      footprint="0805"
      schX={-19.0}
      schY={-5.5}
      connections={{ pin1: "net.PVSS", pin2: "net.GND" }}
    />
    <resistor
      name="R12"
      resistance="0"
      footprint="0805"
      schX={-19.0}
      schY={-6.5}
      connections={{ pin1: "net.GND", pin2: "net.AVSS" }}
    />
    <capacitor
      name="C10"
      capacitance="0.1uF"
      footprint="0805"
      schX={-3.0}
      schY={-6.3}
      schOrientation="vertical"
      connections={{ pin1: "net.DVCC", pin2: "net.GND" }}
    />
    <capacitor
      name="C7"
      capacitance="1uF"
      footprint="0805"
      schX={6.4}
      schY={-6.2}
      schOrientation="vertical"
      connections={{ pin1: "net.DVCC", pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      capacitance="0.1uF"
      footprint="0805"
      schX={7.4}
      schY={-6.2}
      schOrientation="vertical"
      connections={{ pin1: "net.DVCC", pin2: "net.GND" }}
    />

    {/* Reset pull-up, filter, and pushbutton from Figure B-78. */}
    <resistor
      name="R7"
      resistance="47k"
      footprint="0805"
      schX={-11.6}
      schY={7.8}
      schOrientation="vertical"
      connections={{ pin1: "net.DVCC", pin2: "net.RESET_SBWTDIO" }}
    />
    <capacitor
      name="C5"
      capacitance="1100pF"
      footprint="0805"
      schX={-11.5}
      schY={6.6}
      schOrientation="vertical"
      connections={{ pin1: "net.RESET_SBWTDIO", pin2: "net.GND" }}
    />
    <pushbutton
      name="SW2"
      displayName="RESET"
      manufacturerPartNumber="EVQ-11L05R"
      footprint="smdpushbutton"
      schX={-12.6}
      schY={7.5}
      connections={{
        pin1: "net.RESET_SBWTDIO",
        pin2: "net.GND",
        pin3: "net.RESET_SBWTDIO",
        pin4: "net.GND",
      }}
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
      connections={{ pin1: "net.LFXOUT", pin2: "net.LFXIN" }}
    />
    <capacitor
      name="C1"
      capacitance="12pF"
      footprint="0805"
      doNotPlace
      schX={-12.3}
      schY={3.2}
      schOrientation="vertical"
      connections={{ pin1: "net.LFXOUT", pin2: "net.AVSS" }}
    />
    <capacitor
      name="C2"
      capacitance="12pF"
      footprint="0805"
      doNotPlace
      schX={-12.3}
      schY={2.2}
      schOrientation="vertical"
      connections={{ pin1: "net.LFXIN", pin2: "net.AVSS" }}
    />
    <resistor
      name="R5"
      resistance="0"
      footprint="0603"
      doNotPlace
      schX={-9.5}
      schY={3.2}
      connections={{ pin1: "net.LFXOUT", pin2: "net.LFXOUT_ext" }}
    />
    <resistor
      name="R6"
      resistance="0"
      footprint="0603"
      doNotPlace
      schX={-9.5}
      schY={2.2}
      connections={{ pin1: "net.LFXIN", pin2: "net.LFXIN_ext" }}
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
      connections={{ pin1: "net.HFXOUT", pin2: "net.HFXIN" }}
    />
    <capacitor
      name="C8"
      capacitance="22pF"
      footprint="0805"
      doNotPlace
      schX={-12.3}
      schY={0.1}
      schOrientation="vertical"
      connections={{ pin1: "net.HFXOUT", pin2: "net.AVSS" }}
    />
    <capacitor
      name="C9"
      capacitance="22pF"
      footprint="0805"
      doNotPlace
      schX={-12.3}
      schY={-0.9}
      schOrientation="vertical"
      connections={{ pin1: "net.HFXIN", pin2: "net.AVSS" }}
    />
    <resistor
      name="R9"
      resistance="0"
      footprint="0603"
      doNotPlace
      schX={-9.5}
      schY={0.1}
      connections={{ pin1: "net.HFXOUT", pin2: "net.HFXOUT_ext" }}
    />
    <resistor
      name="R8"
      resistance="0"
      footprint="0603"
      doNotPlace
      schX={-9.5}
      schY={-0.9}
      connections={{ pin1: "net.HFXIN", pin2: "net.HFXIN_ext" }}
    />

    {/* UART BSL paths retained on the source JTAG header. */}
    <resistor
      name="R19"
      resistance="0"
      footprint="0805"
      schX={-20.3}
      schY={10.5}
      connections={{ pin1: "net.BSL_RX", pin2: "net.JTAG_BSL_RX" }}
    />
    <resistor
      name="R20"
      resistance="0"
      footprint="0805"
      schX={-20.3}
      schY={9.9}
      connections={{ pin1: "net.BSL_TX", pin2: "net.JTAG_BSL_TX" }}
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
      connections={{
        pin1: "net.TDO",
        pin2: "net.DVCC",
        pin3: "net.TDI",
        pin4: "net.DVCC",
        pin5: "net.TMS",
        pin7: "net.TCK",
        pin8: "net.TEST_SBWTCK",
        pin9: "net.GND",
        pin11: "net.RESET_SBWTDIO",
        pin12: "net.JTAG_BSL_TX",
        pin14: "net.JTAG_BSL_RX",
      }}
    />

    {/* Repository-standard labels are attached to actual connected pins. */}
    <netlabel net="AVCC" connectsTo="C3.pin1" schX={-15.0} schY={2.6} />
    <netlabel net="DVCC" connectsTo="R7.pin1" schX={-11.6} schY={8.7} />
    <netlabel net="PVCC" connectsTo="C16.pin1" schX={-15.0} schY={1.0} />
    <netlabel
      net="PVSS"
      connectsTo="C13.pin2"
      schX={-13.2}
      schY={-0.4}
      anchorSide="top"
    />
    <netlabel
      net="RESET_SBWTDIO"
      connectsTo="C5.pin1"
      schX={-10.6}
      schY={6.9}
      anchorSide="left"
    />

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
