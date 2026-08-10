import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { MSP430F5229IRGCR } from "../chips/MSP430F5229IRGCR.circuit.tsx";

const PinHeader1x02Footprint = () => (
  <footprint>
    <platedhole
      portHints={["pin1"]}
      pcbX={0}
      pcbY="-1.27mm"
      shape="circular_hole_with_rect_pad"
      holeDiameter="1mm"
      rectPadWidth="1.7mm"
      rectPadHeight="1.7mm"
    />
    <platedhole
      portHints={["pin2"]}
      pcbX={0}
      pcbY="1.27mm"
      shape="circle"
      holeDiameter="1mm"
      outerDiameter="1.7mm"
    />
    <silkscreenrect
      pcbX={0}
      pcbY={0}
      width="2.54mm"
      height="5.08mm"
      filled={false}
      strokeWidth="0.15mm"
    />
    <courtyardrect
      pcbX={0}
      pcbY={0}
      width="3.04mm"
      height="5.58mm"
      isFilled={false}
      hasStroke
      strokeWidth="0.05mm"
    />
  </footprint>
);

const PinHeader1x01Footprint = () => (
  <footprint>
    <platedhole
      portHints={["pin1"]}
      pcbX={0}
      pcbY={0}
      shape="circular_hole_with_rect_pad"
      holeDiameter="1mm"
      rectPadWidth="1.7mm"
      rectPadHeight="1.7mm"
    />
    <silkscreenrect
      pcbX={0}
      pcbY={0}
      width="2.54mm"
      height="2.54mm"
      filled={false}
      strokeWidth="0.15mm"
    />
    <courtyardrect
      pcbX={0}
      pcbY={0}
      width="3.04mm"
      height="3.04mm"
      isFilled={false}
      hasStroke
      strokeWidth="0.05mm"
    />
  </footprint>
);

export const BluetoothAudioHost_MSP430F5229 = (props: SubcircuitProps) => (
  <subcircuit {...props} schTraceAutoLabelEnabled schMaxTraceDistance="3mm">
    {/* Reference-design page frame and title block */}

    <MSP430F5229IRGCR
      name="U10"
      displayName=""
      schX={-4.8}
      schY={0.2}
      connections={{
        pin1: "net.CB0",
        pin2: "net.CB1",
        pin3: "net.CB2",
        pin11: "net.VCC_5229",
        pin12: "net.XIN_32K",
        pin13: "net.XOUT_32K",
        pin14: "net.GND",
        pin15: "net.VCC_5229",
        pin16: "net.GND",
        pin17: "net.VCORE",
        pin18: "net.MSP_MCLK_3V3",
        pin19: "net.LED1",
        pin20: "net.LED2",
        pin21: "net.LED3",
        pin22: "net.HCI_RTS_1V8_CC",
        pin23: "net.HCI_CTS_1V8_CC",
        pin24: "net.CBOUT",
        pin25: "net.nSHUTDOWN_1V8_CC",
        pin26: "net.AUDIO_nRESET_1V8_5229",
        pin34: "net.I2C_SDA_1V8_5229",
        pin35: "net.I2C_SCL_1V8_5229",
        pin37: "net.HCI_RX_1V8_CC",
        pin38: "net.HCI_TX_1V8_CC",
        pin39: "net.GND",
        pin40: "net.DVIO_1V8_5229",

        pin56: "net.MSP430_RESET",
        pin59: "net.TEST_SBWTCK_5229",
        pin60: "net.TDO_5229",
        pin61: "net.TDI_5229",
        pin62: "net.TMS_5229",
        pin63: "net.TCK_5229",
        pin64: "net.nRST_SBWTDIO_5229",
        pin65: "net.GND",
      }}
      noConnect={[
        "pin4",
        "pin5",
        "pin6",
        "pin7",
        "pin8",
        "pin9",
        "pin10",
        "pin27",
        "pin29",
        "pin33",
        "pin36",
        "pin41",
        "pin42",
        "pin43",
        "pin44",
        "pin47",
        "pin48",
        "pin49",
        "pin50",
        "pin51",
        "pin52",
        "pin53",
        "pin54",
        "pin55",
        "pin57",
        "pin58",
      ]}
    />

    {/* 32.768 kHz clock */}
    <crystal
      name="Y2"
      manufacturerPartNumber="ABS07-32.768KHZ-T"
      supplierPartNumbers={{ jlcpcb: ["C130253"] }}
      footprint={
        <footprint>
          {/* Abracon ABS07 3.2 mm x 1.5 mm recommended land pattern. */}
          <smtpad
            portHints={["pin1"]}
            pcbX="1.25mm"
            pcbY={0}
            width="1mm"
            height="1.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.25mm"
            pcbY={0}
            width="1mm"
            height="1.8mm"
            shape="rect"
          />
          <silkscreenrect
            pcbX={0}
            pcbY={0}
            width="3.4mm"
            height="1.7mm"
            filled={false}
            strokeWidth="0.1mm"
          />
          <courtyardrect
            pcbX={0}
            pcbY={0}
            width="4mm"
            height="2.4mm"
            isFilled={false}
            hasStroke
            strokeWidth="0.05mm"
          />
        </footprint>
      }
      frequency="32.768kHz"
      loadCapacitance={0}
      schX={-14.0}
      schY={0.4}
      schOrientation="vertical"
      connections={{
        pin1: "net.XIN_32K",
        pin2: "net.XOUT_32K",
      }}
    />

    <capacitor
      name="C47"
      capacitance="12pF"
      maxVoltageRating="50V"
      footprint="0402"
      schX={-11.6}
      schY={1.5}
      schOrientation="vertical"
      connections={{
        pin1: "net.XIN_32K",
        pin2: "net.GND",
      }}
    />

    <capacitor
      name="C46"
      capacitance="12pF"
      maxVoltageRating="50V"
      footprint="0402"
      schX={-14.0}
      schY={-1.6}
      schOrientation="vertical"
      connections={{
        pin1: "net.XOUT_32K",
        pin2: "net.GND",
      }}
    />

    {/* MSP430 reset button */}
    <resistor
      name="R12"
      resistance="47k"
      footprint="0402"
      schX={-3.5}
      schY={9.5}
      schOrientation="vertical"
      connections={{
        pin1: "net.DVIO_1V8_5229",
        pin2: "net.MSP430_RESET",
      }}
    />

    <capacitor
      name="C44"
      capacitance="2.2nF"
      footprint="0402"
      schX={-1.8}
      schY={8.1}
      schOrientation="vertical"
      connections={{
        pin1: "net.MSP430_RESET",
        pin2: "net.GND",
      }}
    />

    <pushbutton
      name="S1"
      displayName="MSP430 RESET"
      manufacturerPartNumber="EVQ11A05R"
      footprint={
        <footprint>
          {/* Panasonic EVQ11 PWB pattern: two 1 mm holes, 5 mm apart. */}
          <platedhole
            portHints={["pin1"]}
            pcbX="-2.5mm"
            pcbY={0}
            shape="circular_hole_with_rect_pad"
            holeDiameter="1mm"
            rectPadWidth="1.7mm"
            rectPadHeight="1.7mm"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="2.5mm"
            pcbY={0}
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <silkscreencircle
            pcbX={0}
            pcbY={0}
            radius="3.2mm"
            isOutline
            strokeWidth="0.15mm"
          />
          <courtyardcircle pcbX={0} pcbY={0} radius="3.5mm" />
        </footprint>
      }
      schX={0.2}
      schY={8.8}
      connections={{
        pin1: "net.MSP430_RESET",
        pin2: "net.GND",
      }}
    />

    {/* SBW/JTAG reset pull-up */}
    <resistor
      name="R28"
      resistance="47k"
      footprint="0402"
      schX={7.7}
      schY={0.0}
      connections={{
        pin1: "net.nRST_SBWTDIO_5229",
        pin2: "net.VCC_5229",
      }}
    />

    <capacitor
      name="C43"
      capacitance="2.2nF"
      footprint="0402"
      schX={6.2}
      schY={-1.0}
      schOrientation="vertical"
      connections={{
        pin1: "net.nRST_SBWTDIO_5229",
        pin2: "net.GND",
      }}
    />

    {/* TI MSP-FET 14-pin, 4-wire JTAG programming/debug connector. */}
    <connector
      name="J2"
      displayName="MSP-FET JTAG Programming/Debug"
      manufacturerPartNumber="5103308-2"
      shouldBeOnEdgeOfBoard
      footprint={
        <footprint>
          {/* TE 5103308-2: 2 x 7 positions on a 2.54 mm grid. */}
          <platedhole
            portHints={["pin1"]}
            pcbX="-7.62mm"
            pcbY="1.27mm"
            shape="circular_hole_with_rect_pad"
            holeDiameter="1mm"
            rectPadWidth="1.7mm"
            rectPadHeight="1.7mm"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="-7.62mm"
            pcbY="-1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="-5.08mm"
            pcbY="1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="-5.08mm"
            pcbY="-1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="-2.54mm"
            pcbY="1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="-2.54mm"
            pcbY="-1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin7"]}
            pcbX="0mm"
            pcbY="1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="-1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin9"]}
            pcbX="2.54mm"
            pcbY="1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin10"]}
            pcbX="2.54mm"
            pcbY="-1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin11"]}
            pcbX="5.08mm"
            pcbY="1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin12"]}
            pcbX="5.08mm"
            pcbY="-1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin13"]}
            pcbX="7.62mm"
            pcbY="1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <platedhole
            portHints={["pin14"]}
            pcbX="7.62mm"
            pcbY="-1.27mm"
            shape="circle"
            holeDiameter="1mm"
            outerDiameter="1.7mm"
          />
          <silkscreenrect
            pcbX={0}
            pcbY={0}
            width="25.4mm"
            height="10.16mm"
            filled={false}
            strokeWidth="0.15mm"
          />
          <silkscreentext
            text="1"
            pcbX="-10.8mm"
            pcbY="2.7mm"
            fontSize="0.8mm"
          />
          <courtyardrect
            pcbX={0}
            pcbY={0}
            width="25.9mm"
            height="10.66mm"
            isFilled={false}
            hasStroke
            strokeWidth="0.05mm"
          />
        </footprint>
      }
      schX={8.0}
      schY={8.0}
      schWidth="2.8mm"
      schHeight="5.2mm"
      pinLabels={{
        pin1: "TDO",
        pin2: "VCC_TOOL",
        pin3: "TDI",
        pin4: "VCC_TARGET",
        pin5: "TMS",
        pin6: "NC",
        pin7: "TCK",
        pin8: "TEST",
        pin9: "GND",
        pin10: "NC_UART_CTS",
        pin11: "nRST",
        pin12: "NC_UART_TXD",
        pin13: "NC_UART_RTS",
        pin14: "NC_UART_RXD",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: [2, 4, 6, 8, 10, 12, 14],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [1, 3, 5, 7, 9, 11, 13],
        },
      }}
      schPinStyle={{
        pin1: { marginBottom: 0.2 },
        pin2: { marginBottom: 0.2 },
        pin3: { marginBottom: 0.2 },
        pin4: { marginBottom: 0.2 },
        pin5: { marginBottom: 0.2 },
        pin6: { marginBottom: 0.2 },
        pin7: { marginBottom: 0.2 },
        pin8: { marginBottom: 0.2 },
        pin9: { marginBottom: 0.2 },
        pin10: { marginBottom: 0.2 },
        pin11: { marginBottom: 0.2 },
        pin12: { marginBottom: 0.2 },
        pin13: { marginBottom: 0.2 },
        pin14: { marginBottom: 0.2 },
      }}
      noConnect={["pin6", "pin10", "pin12", "pin13", "pin14"]}
      connections={{
        pin1: "net.TDO_5229",
        pin2: "net.JTAG_PWR_3V3",
        pin3: "net.TDI_5229",
        pin4: "net.JTAG_SENSE",
        pin5: "net.TMS_5229",
        pin7: "net.TCK_5229",
        pin8: "net.TEST_SBWTCK_5229",
        pin9: "net.GND",
        pin11: "net.nRST_SBWTDIO_5229",
      }}
    />

    <pinheader
      name="J6"
      footprint={<PinHeader1x02Footprint />}
      displayName="JTAG SENSE"
      manufacturerPartNumber="3-644456-2"
      supplierPartNumbers={{ jlcpcb: ["C90288"] }}
      pinCount={2}
      gender="male"
      pitch="2.54mm"
      schX={2.0}
      schY={6.8}
      pinLabels={["VCC_5229", "JTAG_SENSE"]}
      connections={{
        pin1: "net.VCC_5229",
        pin2: "net.JTAG_SENSE",
      }}
    />

    {/* 1.8 V and source selection */}
    <chip
      name="J5"
      footprint={<PinHeader1x02Footprint />}
      displayName="1.8 V Rail Jumper"
      manufacturerPartNumber="3-644456-2"
      supplierPartNumbers={{ jlcpcb: ["C90288"] }}
      schX={3}
      schY={0}
      connections={{
        pin1: "net.VDD_1V8_LDO",
        pin2: "net.DVIO_1V8_5229",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2],
        },
      }}
    />

    <chip
      name="S3"
      footprint={
        <footprint>
          {/* C&K JS202011CQN straight DPDT through-hole pattern. */}
          <platedhole
            portHints={["pin1"]}
            pcbX="-2.5mm"
            pcbY="-1.65mm"
            shape="circular_hole_with_rect_pad"
            holeDiameter="0.9mm"
            rectPadWidth="1.4mm"
            rectPadHeight="1.4mm"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX={0}
            pcbY="-1.65mm"
            shape="circle"
            holeDiameter="0.9mm"
            outerDiameter="1.4mm"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="2.5mm"
            pcbY="-1.65mm"
            shape="circle"
            holeDiameter="0.9mm"
            outerDiameter="1.4mm"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="2.5mm"
            pcbY="1.65mm"
            shape="circle"
            holeDiameter="0.9mm"
            outerDiameter="1.4mm"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX={0}
            pcbY="1.65mm"
            shape="circle"
            holeDiameter="0.9mm"
            outerDiameter="1.4mm"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="-2.5mm"
            pcbY="1.65mm"
            shape="circle"
            holeDiameter="0.9mm"
            outerDiameter="1.4mm"
          />
          <silkscreenrect
            pcbX={0}
            pcbY={0}
            width="9mm"
            height="3.3mm"
            filled={false}
            strokeWidth="0.15mm"
          />
          <courtyardrect
            pcbX={0}
            pcbY={0}
            width="9.5mm"
            height="4mm"
            isFilled={false}
            hasStroke
            strokeWidth="0.05mm"
          />
        </footprint>
      }
      displayName="FET / LDO Power Select"
      manufacturerPartNumber="JS202011CQN"
      supplierPartNumbers={{ jlcpcb: ["C221663"] }}
      schX={8.2}
      schY={3.5}
      schWidth="1.5mm"
      schHeight="1.5mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [2],
        },
        topSide: {
          direction: "left-to-right",
          pins: [1],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: [3],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [4, 5, 6],
        },
      }}
      connections={{
        pin1: "net.VDD_2V8_LDO",
        pin2: "net.VCC_5229",
        pin3: "net.JTAG_PWR_3V3",
      }}
      noConnect={["pin4", "pin5", "pin6"]}
    />

    {/* Debug and clock headers */}
    <chip
      name="J15"
      footprint={<PinHeader1x02Footprint />}
      displayName="Debug UART"
      manufacturerPartNumber="3-644456-2"
      supplierPartNumbers={{ jlcpcb: ["C90288"] }}
      schX={2.0}
      schY={2.2}
      connections={{
        pin1: "U10.pin46",
        pin2: "U10.pin45",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2],
        },
      }}
    />

    <chip
      name="J17"
      footprint={<PinHeader1x01Footprint />}
      displayName="SMCLK"
      manufacturerPartNumber="5-146868-1"
      schX={-3.25}
      schY={-8}
      connections={{
        pin1: "U10.pin28",
      }}
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: [1],
        },
      }}
    />

    {/* Scan switch, DNI in source design */}
    <chip
      name="S4"
      displayName="ScanSW DNI"
      manufacturerPartNumber="TPC1133GLFG"
      doNotPlace
      schX={-1.8}
      schY={-7}
      schWidth="1.5mm"
      schHeight="1.5mm"
      pinLabels={{
        pin1: "S1",
        pin2: "S2",
        pin3: "S3",
        pin4: "S0",
      }}
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: [2, 3],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: [4, 1],
        },
      }}
      schPinStyle={{
        pin1: { marginRight: 0.2 },
        pin2: { marginRight: 0.2 },
        pin3: { marginRight: 0.2 },
        pin4: { marginRight: 0.2 },
      }}
      connections={{
        pin1: "net.DVIO_1V8_5229",
        pin2: "U10.pin31",
        pin3: "U10.pin32",
        pin4: "U10.pin30",
      }}
    />

    {/* Slow clock level divider */}
    <resistor
      name="R10"
      resistance="10k"
      footprint="0402"
      schX={-4.8}
      schY={-7.7}
      schOrientation="vertical"
      connections={{
        pin1: "net.MSP_MCLK_3V3",
        pin2: "net.SLOW_CLK_1V8_CC",
      }}
    />

    <resistor
      name="R11"
      resistance="18k"
      footprint="0402"
      schX={-5.7}
      schY={-8.9}
      schOrientation="vertical"
      connections={{
        pin1: "net.SLOW_CLK_1V8_CC",
        pin2: "net.GND",
      }}
    />

    {/* Status LEDs */}
    <resistor
      name="R6"
      resistance="470ohm"
      footprint="0402"
      schX={0.3}
      schY={-7.8}
      schOrientation="vertical"
      connections={{
        pin1: "net.LED1",
        pin2: "net.LED1_A",
      }}
    />

    <led
      name="D2"
      displayName="YLW"
      color="yellow"
      footprint="led0603"
      schX={0.3}
      schY={-9.0}
      schOrientation="vertical"
      connections={{
        anode: "net.LED1_A",
        cathode: "net.GND",
      }}
    />

    <resistor
      name="R7"
      resistance="470ohm"
      footprint="0402"
      schX={2.3}
      schY={-7.8}
      schOrientation="vertical"
      connections={{
        pin1: "net.LED2",
        pin2: "net.LED2_A",
      }}
    />

    <led
      name="D3"
      displayName="RED"
      color="red"
      footprint="led0603"
      schX={2.3}
      schY={-9.0}
      schOrientation="vertical"
      connections={{
        anode: "net.LED2_A",
        cathode: "net.GND",
      }}
    />

    <resistor
      name="R15"
      resistance="470ohm"
      footprint="0402"
      schX={4.3}
      schY={-7.8}
      schOrientation="vertical"
      connections={{
        pin1: "net.LED3",
        pin2: "net.LED3_A",
      }}
    />

    <led
      name="D5"
      displayName="GRN"
      color="green"
      footprint="led0603"
      schX={4.3}
      schY={-9.0}
      schOrientation="vertical"
      connections={{
        anode: "net.LED3_A",
        cathode: "net.GND",
      }}
    />

    {/* Capacitive-touch electrodes and feedback resistors */}
    <testpoint
      name="PAD1"
      doNotPlace
      displayName="PREVIOUS / VOL_UP"
      schX={8.0}
      schY={-3.6}
      connections={{
        pin1: "net.CB0",
      }}
    />

    <testpoint
      name="PAD2"
      doNotPlace
      displayName="NEXT / VOL_DOWN"
      schX={8.0}
      schY={-4.8}
      connections={{
        pin1: "net.CB1",
      }}
    />

    <testpoint
      name="PAD3"
      displayName="PAUSE_PLAY - DNI"
      doNotPlace
      schX={8.0}
      schY={-6.0}
      connections={{
        pin1: "net.CB2",
      }}
    />

    <resistor
      name="R31"
      resistance="75k"
      footprint="0402"
      schX={11.7}
      schY={-5.8}
      connections={{
        pin1: "net.CB0",
        pin2: "net.CBOUT",
      }}
    />

    <resistor
      name="R32"
      resistance="75k"
      footprint="0402"
      schX={11.7}
      schY={-6.8}
      connections={{
        pin1: "net.CB1",
        pin2: "net.CBOUT",
      }}
    />

    <resistor
      name="R33"
      resistance="75k"
      footprint="0402"
      schX={11.7}
      schY={-7.8}
      connections={{
        pin1: "net.CB2",
        pin2: "net.CBOUT",
      }}
    />

    {/* Supply decoupling */}
    <capacitor
      name="C37"
      capacitance="10uF"
      footprint="0402"
      schX={-15.3}
      schY={-8.9}
      schOrientation="vertical"
      connections={{
        pin1: "net.DVIO_1V8_5229",
        pin2: "net.GND",
      }}
    />

    <capacitor
      name="C39"
      capacitance="1uF"
      maxVoltageRating="6.3V"
      footprint="0402"
      schX={-12.5}
      schY={-8.9}
      schOrientation="vertical"
      connections={{
        pin1: "net.VCC_5229",
        pin2: "net.GND",
      }}
    />

    <capacitor
      name="C41"
      capacitance="470nF"
      maxVoltageRating="6.3V"
      footprint="0402"
      schX={-9.7}
      schY={-8.9}
      schOrientation="vertical"
      connections={{
        pin1: "net.VCORE",
        pin2: "net.GND",
      }}
    />
  </subcircuit>
);

export default BluetoothAudioHost_MSP430F5229;
