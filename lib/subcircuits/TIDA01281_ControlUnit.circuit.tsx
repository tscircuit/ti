import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

/** TIDA-01281 C2000 isolated control and communications unit.
 * Source placement and connectivity were extracted from TI's native Altium sheet (TIDRPC0 sheet 2).
 * @see https://www.ti.com/lit/pdf/TIDRPC0
 */
export const TIDA01281_ControlUnit = (props: SubcircuitProps) => (
  <subcircuit
    {...props}
    routingDisabled
    schMaxTraceDistance="100mm"
    schTraceAutoLabelEnabled={false}
  >
    <schematictext
      text="TIDA-01281 C2000 isolated control and communications unit"
      schX={0}
      schY={14.285}
      fontSize={0.7}
    />
    <resistor
      name="R16"
      schX={-4.18}
      schY={2.145}
      resistance="4.70k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R14"
      schX={-3.96}
      schY={3.465}
      resistance="4.70k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C18"
      schX={12.1}
      schY={-0.825}
      capacitance="15pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C17"
      schX={12.1}
      schY={0.495}
      capacitance="15pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="U2"
      schX={-11.22}
      schY={1.705}
      manufacturerPartNumber="ISO1050DUB"
      footprint="pinrow8_p2.54mm"
      pinLabels={{
        pin1: "VCC1",
        pin2: "RXD",
        pin3: "TXD",
        pin4: "GND1",
        pin5: "GND2",
        pin6: "CANL",
        pin7: "CANH",
        pin8: "VCC2",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [3, 2, 1, 8] },
        rightSide: { direction: "top-to-bottom", pins: [7, 6, 4, 5] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="U3"
      schX={-10.78}
      schY={-2.695}
      manufacturerPartNumber="ISO1541DR"
      footprint="pinrow8_p2.54mm"
      pinLabels={{
        pin1: "VCC1",
        pin2: "SDA1",
        pin3: "SCL1",
        pin4: "GND1",
        pin5: "GND2",
        pin6: "SCL2",
        pin7: "SDA2",
        pin8: "VCC2",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2, 3, 4] },
        rightSide: { direction: "top-to-bottom", pins: [8, 7, 6, 5] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <capacitor
      name="C25"
      schX={-13.2}
      schY={-10.285}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C24"
      schX={-14.3}
      schY={-10.285}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="U6"
      schX={-10.78}
      schY={-8.525}
      manufacturerPartNumber="ISO3082DW"
      footprint="pinrow16_p2.54mm"
      pinLabels={{
        pin1: "VCC1",
        pin2: "GND1",
        pin3: "R",
        pin4: "R_E_",
        pin5: "DE",
        pin6: "D",
        pin7: "GND1",
        pin8: "GND1",
        pin9: "GND2",
        pin10: "GND2",
        pin11: "NC",
        pin12: "A",
        pin13: "B",
        pin14: "NC",
        pin15: "GND2",
        pin16: "VCC2",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [6, 5, 3, 4, 1, 16] },
        rightSide: {
          direction: "top-to-bottom",
          pins: [12, 13, 11, 14, 2, 7, 8, 9, 10, 15],
        },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="RV1"
      schX={-2.86}
      schY={-6.545}
      manufacturerPartNumber="MOV-10D201K"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2, 1] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="RV2"
      schX={-2.86}
      schY={-8.525}
      manufacturerPartNumber="MOV-10D201K"
      footprint="pinrow2_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2, 1] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="U5"
      schX={-5.06}
      schY={-5.885}
      manufacturerPartNumber="TBU-CA065-200-WH"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin1: "Line_In_Out", pin2: "NU", pin3: "Line_Out_In" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
        rightSide: { direction: "top-to-bottom", pins: [3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="U7"
      schX={-5.06}
      schY={-9.405}
      manufacturerPartNumber="TBU-CA065-200-WH"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin1: "Line_In_Out", pin2: "NU", pin3: "Line_Out_In" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
        rightSide: { direction: "top-to-bottom", pins: [3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="D3"
      schX={-5.61}
      schY={-7.315}
      manufacturerPartNumber="CDSOT23-SM712"
      footprint="sot23"
      pinLabels={{ pin1: "1", pin3: "3", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2] },
        rightSide: { direction: "top-to-bottom", pins: [3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R24"
      schX={-7.7}
      schY={-7.315}
      resistance="10.0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R27"
      schX={-7.7}
      schY={-7.535}
      resistance="10.0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C19"
      schX={-15.84}
      schY={-2.585}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C20"
      schX={-5.94}
      schY={-2.805}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R21"
      schX={-8.14}
      schY={-1.815}
      resistance="4.70k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R22"
      schX={-7.48}
      schY={-1.815}
      resistance="4.70k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R19"
      schX={-13.86}
      schY={-1.815}
      resistance="4.70k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R20"
      schX={-13.2}
      schY={-1.815}
      resistance="4.70k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C15"
      schX={-14.52}
      schY={0.935}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C16"
      schX={-13.42}
      schY={0.935}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R15"
      schX={-13.42}
      schY={2.145}
      resistance="100ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R17"
      schX={-13.42}
      schY={1.925}
      resistance="100ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <chip
      name="D1"
      schX={-9.46}
      schY={3.135}
      manufacturerPartNumber="CDSOT23-SM712"
      footprint="sot23"
      pinLabels={{ pin1: "1", pin3: "3", pin2: "2" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2] },
        rightSide: { direction: "top-to-bottom", pins: [1] },
        topSide: { direction: "left-to-right", pins: [3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R1"
      schX={10.12}
      schY={10.285}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R4"
      schX={10.12}
      schY={9.845}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R6"
      schX={10.12}
      schY={9.405}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R9"
      schX={10.12}
      schY={8.525}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R10"
      schX={10.12}
      schY={8.085}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R8"
      schX={10.12}
      schY={8.965}
      resistance="0ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R2"
      schX={-8.14}
      schY={10.065}
      resistance="1.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R3"
      schX={-8.14}
      schY={9.845}
      resistance="1.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R5"
      schX={-8.14}
      schY={9.625}
      resistance="1.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R7"
      schX={-8.14}
      schY={9.185}
      resistance="1.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R11"
      schX={-8.14}
      schY={7.425}
      resistance="1.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C6"
      schX={-4.73}
      schY={5.335}
      capacitance="0.01uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C5"
      schX={-5.39}
      schY={5.335}
      capacitance="0.01uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C4"
      schX={-6.05}
      schY={5.335}
      capacitance="0.01uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C7"
      schX={-4.07}
      schY={5.335}
      capacitance="0.01uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C10"
      schX={-6.71}
      schY={5.335}
      capacitance="1000pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R12"
      schX={-8.14}
      schY={7.205}
      resistance="1.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C9"
      schX={-7.37}
      schY={5.335}
      capacitance="1000pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="U4"
      schX={7.7}
      schY={-7.095}
      manufacturerPartNumber="SN6505BDBVR"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin1: "D1",
        pin3: "D2",
        pin2: "VCC",
        pin4: "GND",
        pin5: "EN",
        pin6: "CLK",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [3, 2, 1] },
        rightSide: { direction: "top-to-bottom", pins: [6, 5, 4] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <diode
      name="D2"
      schX={13.75}
      schY={-5.995}
      manufacturerPartNumber="1N5819HW-7-F"
      footprint="pinrow2_p2.54mm"
      variant="schottky"
      schOrientation="horizontal"
    />
    <diode
      name="D4"
      schX={13.75}
      schY={-7.755}
      manufacturerPartNumber="1N5819HW-7-F"
      footprint="pinrow2_p2.54mm"
      variant="schottky"
      schOrientation="horizontal"
    />
    <resistor
      name="R13"
      schX={-8.14}
      schY={6.765}
      resistance="1.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <chip
      name="U1A"
      schX={2.42}
      schY={5.225}
      manufacturerPartNumber="TMS320F28035PAGTR"
      footprint="pinrow64_p2.54mm"
      pinLabels={{
        pin29: "VDDIO",
        pin57: "VDDIO",
        pin16: "VDDA",
        pin5: "VDD",
        pin43: "VDD",
        pin59: "VDD",
        pin6: "VSS",
        pin28: "VSS",
        pin42: "VSS",
        pin58: "VSS",
        pin17: "VSSA_VREFLO",
        pin7: "_XRS",
        pin8: "_TRST",
        pin9: "ADCINA7",
        pin10: "ADCINA6_COMP3A_AIO6",
        pin11: "ADCINA4_COMP2A_AIO4",
        pin12: "ADCINA3",
        pin13: "ADCINA2_COMP1A_AIO2",
        pin14: "ADCINA1",
        pin15: "ADCINA0_VREFHI",
        pin18: "ADCINB0",
        pin19: "ADCINB1",
        pin20: "ADCINB2_COMP1B_AIO10",
        pin21: "ADCINB3",
        pin22: "ADCINB4_COMP2B_AIO12",
        pin23: "ADCINB6_COMP3B_AIO14",
        pin24: "ADCINB7",
        pin30: "TEST2",
        pin40: "X2",
        pin41: "X1",
        pin60: "_VREGENZ",
        pin1: "GPIO22_EQEP1S_LINTXA",
        pin2: "GPIO32_SDAA_EPWMSYNCI_A_D_C_S_O_C_A_O_",
        pin3: "GPIO33_SCLA_EPWMSYNCO_A_D_C_S_O_C_B_O_",
        pin4: "GPIO23_EQEP1I_LINRXA",
        pin25: "GPIO31_CANTXA",
        pin26: "GPIO30_CANRXA",
        pin32: "GPIO28_SCIRXDA_SDAA_T_Z_2_",
        pin33: "GPIO18_SPICLKA_LINTXA_XCLKOUT",
        pin34: "GPIO17_SPISOMIA_T_Z_3_",
        pin35: "GPIO8_EPWM5A_A_D_C_S_O_C_A_O_",
        pin36: "GPIO16_SPISIMOA_T_Z_2_",
        pin37: "GPIO12_T_Z_1__SCITXDA",
        pin38: "GPIO7_EPWM4B_SCIRXDA",
        pin39: "GPIO6_EPWM4A_EPWMSYNCI_EPWMSYNCO",
        pin44: "GPIO19_XCLKIN_S_P_I_S_T_E_A__LINRXA_ECAP1",
        pin45: "GPIO38_TCK_XCLKIN",
        pin46: "GPIO37_TDO",
        pin47: "GPIO35_TDI",
        pin48: "GPIO36_TMS",
        pin49: "GPIO11_EPWM6B_LINRXA_HRCAP2",
        pin50: "GPIO5_EPWM3B_SPSIMOA_ECAP1",
        pin51: "GPIO4_EPWM3A",
        pin52: "GPIO10_EPWM6A_A_D_C_S_O_C_B_O_",
        pin53: "GPIO3_EPWM2B_SPISOMIA_COMP2OUT",
        pin54: "GPIO2_EPWM2A",
        pin55: "GPIO1_EPWM1B_COMP1OUT",
        pin56: "GPIO0_EPWM1A",
        pin61: "GPIO34_COMP2OUT_COMP3OUT",
        pin62: "GPIO20_EQEP1A_COMP1OUT",
        pin63: "GPIO21_EQEP1B_COMP2OUT",
        pin64: "GPIO24_ECAP1",
        pin27: "GPIO29_SCITXDA_SCLA_T_Z_3_",
        pin31: "GPIO9_EPWM5B_LINTXA_HRCAP1",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            29, 57, 16, 5, 43, 59, 7, 60, 30, 8, 47, 48, 46, 45, 41, 40, 6, 28,
            42, 58, 17, 2, 3, 61,
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            15, 14, 13, 12, 11, 10, 9, 18, 19, 20, 21, 22, 23, 24, 56, 55, 54,
            53, 51, 50, 39, 38, 35, 31, 52, 49, 37, 36, 34, 33, 44, 62, 63, 1,
            4, 64, 32, 27, 26, 25,
          ],
        },
      }}
      schWidth="2.86mm"
      schHeight="7.15mm"
    />
    <chip
      name="J1"
      schX={-12.87}
      schY={7.205}
      manufacturerPartNumber="TSW-128-09-G-S-RE"
      footprint="pinrow24_p2.54mm"
      pinLabels={{
        pin5: "5",
        pin4: "4",
        pin1: "1",
        pin2: "2",
        pin3: "3",
        pin6: "6",
        pin7: "7",
        pin8: "8",
        pin9: "9",
        pin10: "10",
        pin11: "11",
        pin12: "12",
        pin13: "13",
        pin14: "14",
        pin15: "15",
        pin16: "16",
        pin17: "17",
        pin18: "18",
        pin19: "19",
        pin20: "20",
        pin21: "21",
        pin22: "22",
        pin23: "23",
        pin24: "24",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ],
        },
      }}
      schWidth="2.5mm"
      schHeight="3.289mm"
    />
    <resistor
      name="R30"
      schX={-1.21}
      schY={-6.765}
      resistance="60.4ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R31"
      schX={-1.21}
      schY={-8.415}
      resistance="60.4ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C27"
      schX={-2.09}
      schY={-8.085}
      capacitance="4700pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R25"
      schX={-6.05}
      schY={1.155}
      resistance="60.4ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R29"
      schX={-6.05}
      schY={0.055}
      resistance="60.4ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C26"
      schX={-6.38}
      schY={0.055}
      capacitance="4700pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R33"
      schX={9.35}
      schY={3.905}
      resistance="4.7k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R32"
      schX={10.01}
      schY={6.875}
      resistance="4.7k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R34"
      schX={10.23}
      schY={2.145}
      resistance="10.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <chip
      name="J3"
      schX={15.29}
      schY={-3.135}
      manufacturerPartNumber="TSW-107-07-G-D"
      footprint="pinrow14_p2.54mm"
      pinLabels={{
        pin1: "1",
        pin2: "2",
        pin3: "3",
        pin4: "4",
        pin5: "5",
        pin6: "6",
        pin7: "7",
        pin8: "8",
        pin9: "9",
        pin10: "10",
        pin11: "11",
        pin12: "12",
        pin13: "13",
        pin14: "14",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 3, 5, 7, 9, 11, 13] },
        rightSide: {
          direction: "top-to-bottom",
          pins: [2, 4, 6, 8, 10, 12, 14],
        },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R18"
      schX={14.3}
      schY={-1.925}
      resistance="10.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <inductor
      name="L1"
      schX={0.44}
      schY={-1.375}
      inductance="120 ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <chip
      name="U1B"
      schX={4.84}
      schY={-1.375}
      manufacturerPartNumber="TMS320F28035PAGTR"
      footprint="pinrow2_p2.54mm"
      pinLabels={{}}
      schPinArrangement={{}}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R35"
      schX={10.67}
      schY={6.875}
      resistance="4.7k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R36"
      schX={11.33}
      schY={6.875}
      resistance="4.7k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <resistor
      name="R23"
      schX={-13.86}
      schY={-7.315}
      resistance="100ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R26"
      schX={-13.86}
      schY={-7.535}
      resistance="100ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R37"
      schX={-13.86}
      schY={-8.195}
      resistance="100ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R28"
      schX={-13.86}
      schY={-7.975}
      resistance="100ohm"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R38"
      schX={-2.75}
      schY={1.265}
      resistance="10.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="D5"
      schX={15.62}
      schY={4.565}
      manufacturerPartNumber="SMLP36RGB2W3"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin1: "A",
        pin6: "6",
        pin2: "2",
        pin5: "5",
        pin3: "3",
        pin4: "4",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2, 3] },
        rightSide: { direction: "top-to-bottom", pins: [6, 5, 4] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <resistor
      name="R39"
      schX={13.97}
      schY={5.225}
      resistance="1.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R40"
      schX={13.97}
      schY={4.565}
      resistance="1.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <resistor
      name="R41"
      schX={13.97}
      schY={3.905}
      resistance="1.0k"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <testpoint
      name="TP2"
      schX={7.59}
      schY={6.765}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <testpoint
      name="TP1"
      schX={7.59}
      schY={7.645}
      footprintVariant="through_hole"
      holeDiameter="1mm"
      padDiameter="2mm"
    />
    <capacitor
      name="C14"
      schX={1.76}
      schY={-10.175}
      capacitance="100pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C28"
      schX={5.5}
      schY={-10.175}
      capacitance="100pF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <diode
      name="D6"
      schX={3.74}
      schY={-8.635}
      manufacturerPartNumber="CMDSH2-3 TR"
      footprint="sod-323"
      variant="standard"
      schOrientation="horizontal"
    />
    <chip
      name="T1"
      schX={11.77}
      schY={-6.875}
      manufacturerPartNumber="760390013"
      footprint="pinrow6_p2.54mm"
      pinLabels={{
        pin1: "1",
        pin2: "2",
        pin5: "5",
        pin6: "6",
        pin4: "4",
        pin3: "3",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2, 3] },
        rightSide: { direction: "top-to-bottom", pins: [6, 5, 4] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <capacitor
      name="C21"
      schX={5.28}
      schY={-6.985}
      capacitance="10uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C23"
      schX={15.07}
      schY={-8.305}
      capacitance="10uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C22"
      schX={15.84}
      schY={-7.425}
      capacitance="0.1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C30"
      schX={6.6}
      schY={-10.175}
      capacitance="10uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C29"
      schX={0.66}
      schY={-10.175}
      capacitance="10uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <chip
      name="J2"
      schX={-4.95}
      schY={0.055}
      manufacturerPartNumber="HTSW-103-07-G-S"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2", pin3: "3" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [3] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="J4"
      schX={-3.52}
      schY={-3.245}
      manufacturerPartNumber="HTSW-103-07-G-S"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2", pin3: "3" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [3] },
        bottomSide: { direction: "left-to-right", pins: [2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="J5"
      schX={1.1}
      schY={-7.205}
      manufacturerPartNumber="HTSW-103-07-G-S"
      footprint="pinrow3_p2.54mm"
      pinLabels={{ pin1: "1", pin2: "2", pin3: "3" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1] },
        rightSide: { direction: "top-to-bottom", pins: [3] },
        topSide: { direction: "left-to-right", pins: [2] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="U11"
      schX={3.74}
      schY={-10.175}
      manufacturerPartNumber="TLV1117-33CDRJR"
      footprint="pinrow9_p2.54mm"
      pinLabels={{
        pin2: "VIN",
        pin5: "VOUT",
        pin6: "VOUT",
        pin7: "VOUT",
        pin8: "NC",
        pin3: "VIN",
        pin4: "VIN",
        pin1: "GND",
        pin9: "VOUT",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2, 3, 4, 8] },
        rightSide: { direction: "top-to-bottom", pins: [5, 6, 7, 9] },
        bottomSide: { direction: "left-to-right", pins: [1] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <chip
      name="Y1"
      schX={11}
      schY={-0.385}
      manufacturerPartNumber="7B-20.000MEEQ-T"
      footprint="pinrow4_p2.54mm"
      pinLabels={{ pin1: "1", pin3: "3", pin4: "GND", pin2: "GND" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [2, 4] },
        rightSide: { direction: "top-to-bottom", pins: [1, 3] },
      }}
      schWidth="2.5mm"
      schHeight="2mm"
    />
    <capacitor
      name="C1"
      schX={1.43}
      schY={-0.275}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C2"
      schX={1.43}
      schY={-0.715}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C3"
      schX={1.43}
      schY={-1.155}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="horizontal"
    />
    <capacitor
      name="C13"
      schX={2.42}
      schY={-2.585}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C12"
      schX={1.76}
      schY={-2.585}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C11"
      schX={1.1}
      schY={-2.585}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <capacitor
      name="C8"
      schX={-3.41}
      schY={5.335}
      capacitance="1uF"
      footprint="pinrow2_p2.54mm"
      schOrientation="vertical"
    />
    <trace from="R16.pin1" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="R14.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="R14.pin2" to="net.TRST" schDisplayLabel="TRST" />
    <trace from="C18.pin1" to="Y1.pin3" />
    <trace from="C18.pin1" to="net.X2" schDisplayLabel="X2" />
    <trace from="C18.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C17.pin1" to="Y1.pin1" />
    <trace from="C17.pin1" to="net.X1" schDisplayLabel="X1" />
    <trace from="C17.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="U2.pin1" to="C15.pin1" />
    <trace from="U2.pin1" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="U2.pin2" to="R17.pin1" />
    <trace from="U2.pin3" to="R15.pin1" />
    <trace from="U2.pin4" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="U2.pin5" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="U2.pin6" to="R29.pin1" />
    <trace from="U2.pin7" to="D1.pin2" />
    <trace from="U2.pin7" to="R25.pin2" />
    <trace from="U2.pin8" to="C16.pin1" />
    <trace from="U2.pin8" to="net.COMM_5V" schDisplayLabel="COMM_5V" />
    <trace from="U3.pin1" to="R20.pin2" />
    <trace from="R20.pin2" to="R19.pin2" />
    <trace from="R19.pin2" to="C19.pin1" />
    <trace from="U3.pin1" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="U3.pin2" to="R20.pin1" />
    <trace from="U3.pin2" to="net.I2C_SDA" schDisplayLabel="I2C_SDA" />
    <trace from="U3.pin3" to="R19.pin1" />
    <trace from="U3.pin3" to="net.I2C_SCL" schDisplayLabel="I2C_SCL" />
    <trace from="U3.pin4" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="U3.pin5" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="U3.pin6" to="R22.pin1" />
    <trace from="R22.pin1" to="J4.pin1" />
    <trace from="U3.pin7" to="R21.pin1" />
    <trace from="U3.pin8" to="R21.pin2" />
    <trace from="R21.pin2" to="R22.pin2" />
    <trace from="R22.pin2" to="C20.pin1" />
    <trace from="U3.pin8" to="net.COMM_5V" schDisplayLabel="COMM_5V" />
    <trace from="C25.pin1" to="U6.pin16" />
    <trace from="C25.pin1" to="net.COMM_5V" schDisplayLabel="COMM_5V" />
    <trace from="C25.pin2" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="C24.pin1" to="U6.pin1" />
    <trace from="C24.pin1" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="C24.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="U6.pin2" to="U6.pin7" />
    <trace from="U6.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="U6.pin3" to="R28.pin2" />
    <trace from="U6.pin4" to="R37.pin2" />
    <trace from="U6.pin5" to="R26.pin2" />
    <trace from="U6.pin6" to="R23.pin2" />
    <trace from="U6.pin9" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="U6.pin12" to="R24.pin2" />
    <trace from="U6.pin13" to="R27.pin2" />
    <trace from="RV1.pin1" to="RV2.pin2" />
    <trace from="RV1.pin2" to="U5.pin3" />
    <trace from="RV1.pin2" to="J5.pin1" />
    <trace from="RV2.pin1" to="U7.pin3" />
    <trace from="U5.pin1" to="R24.pin1" />
    <trace from="U7.pin1" to="R27.pin1" />
    <trace from="D3.pin3" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="C19.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C20.pin2" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="C15.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C16.pin2" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="R15.pin2" to="net.CAN_TX" schDisplayLabel="CAN_TX" />
    <trace from="R17.pin2" to="net.CAN_RX" schDisplayLabel="CAN_RX" />
    <trace from="D1.pin3" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="R1.pin1" to="net.LV_PH2_PWM" schDisplayLabel="LV_PH2_PWM" />
    <trace from="R4.pin1" to="net.LV_PH1_PWM" schDisplayLabel="LV_PH1_PWM" />
    <trace from="R6.pin1" to="net.HV_PH1_PWM" schDisplayLabel="HV_PH1_PWM" />
    <trace from="R9.pin1" to="net.HV_PH2_PWM" schDisplayLabel="HV_PH2_PWM" />
    <trace from="R10.pin1" to="net.CLAMP_PWM" schDisplayLabel="CLAMP_PWM" />
    <trace
      from="R8.pin1"
      to="net.FLYBOOST_PWM"
      schDisplayLabel="FLYBOOST_PWM"
    />
    <trace from="R2.pin2" to="net.IBAT_LS" schDisplayLabel="IBAT_LS" />
    <trace from="R3.pin2" to="net.IBUS" schDisplayLabel="IBUS" />
    <trace from="R5.pin2" to="net.TEMP1" schDisplayLabel="TEMP1" />
    <trace from="R7.pin2" to="net.VBUS_S" schDisplayLabel="VBUS_S" />
    <trace from="R11.pin2" to="net.VBAT_S" schDisplayLabel="VBAT_S" />
    <trace from="C5.pin2" to="C9.pin2" />
    <trace from="C5.pin2" to="C8.pin2" />
    <trace from="C5.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="R12.pin2" to="net.IBAT_HS" schDisplayLabel="IBAT_HS" />
    <trace from="U4.pin3" to="C21.pin1" />
    <trace from="U4.pin3" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="U4.pin4" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="U4.pin5" to="T1.pin1" />
    <trace from="U4.pin6" to="T1.pin3" />
    <trace from="D2.pin1" to="T1.pin6" />
    <trace from="D2.pin2" to="D4.pin2" />
    <trace from="D4.pin2" to="C23.pin2" />
    <trace from="C23.pin2" to="C22.pin1" />
    <trace from="D2.pin2" to="net.COMM_5V" schDisplayLabel="COMM_5V" />
    <trace from="D4.pin1" to="T1.pin4" />
    <trace from="R13.pin2" to="net.VBOOST_S" schDisplayLabel="VBOOST_S" />
    <trace from="J1.pin5" to="J1.pin3" />
    <trace from="J1.pin5" to="J1.pin13" />
    <trace from="J1.pin13" to="J1.pin17" />
    <trace from="J1.pin17" to="J1.pin21" />
    <trace from="J1.pin5" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="J1.pin4" to="net.IBAT_LS" schDisplayLabel="IBAT_LS" />
    <trace from="J1.pin1" to="net.VBAT_S" schDisplayLabel="VBAT_S" />
    <trace from="J1.pin2" to="net.VBOOST_S" schDisplayLabel="VBOOST_S" />
    <trace from="J1.pin6" to="net.LV_PH2_PWM" schDisplayLabel="LV_PH2_PWM" />
    <trace from="J1.pin7" to="net.LV_PH1_PWM" schDisplayLabel="LV_PH1_PWM" />
    <trace from="J1.pin8" to="net.LV_AUX_3V3" schDisplayLabel="LV_AUX_3V3" />
    <trace from="J1.pin9" to="net.CLAMP_PWM" schDisplayLabel="CLAMP_PWM" />
    <trace from="J1.pin10" to="net.TEMP1" schDisplayLabel="TEMP1" />
    <trace from="J1.pin12" to="net.IBAT_HS" schDisplayLabel="IBAT_HS" />
    <trace from="J1.pin14" to="net.IBAT_ALERT" schDisplayLabel="IBAT_ALERT" />
    <trace from="J1.pin15" to="net.LV_AUX_3V3" schDisplayLabel="LV_AUX_3V3" />
    <trace from="J1.pin16" to="net.IBUS" schDisplayLabel="IBUS" />
    <trace from="J1.pin18" to="net.VBUS_S" schDisplayLabel="VBUS_S" />
    <trace from="J1.pin20" to="net.TEMP2" schDisplayLabel="TEMP2" />
    <trace
      from="J1.pin22"
      to="net.FLYBOOST_PWM"
      schDisplayLabel="FLYBOOST_PWM"
    />
    <trace from="J1.pin23" to="net.HV_PH1_PWM" schDisplayLabel="HV_PH1_PWM" />
    <trace from="J1.pin24" to="net.HV_PH2_PWM" schDisplayLabel="HV_PH2_PWM" />
    <trace from="R30.pin1" to="R31.pin2" />
    <trace from="C27.pin1" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="R25.pin1" to="R29.pin2" />
    <trace from="C26.pin1" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="R33.pin1" to="net.CAN_TX" schDisplayLabel="CAN_TX" />
    <trace from="R33.pin2" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="R32.pin1" to="net.RS485_TX" schDisplayLabel="RS485_TX" />
    <trace from="R32.pin2" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="R34.pin1" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="J3.pin1" to="net.TMS" schDisplayLabel="TMS" />
    <trace from="J3.pin2" to="net.TRST" schDisplayLabel="TRST" />
    <trace from="J3.pin3" to="net.TDI" schDisplayLabel="TDI" />
    <trace from="J3.pin4" to="J3.pin8" />
    <trace from="J3.pin8" to="J3.pin10" />
    <trace from="J3.pin10" to="J3.pin12" />
    <trace from="J3.pin4" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="J3.pin5" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="J3.pin7" to="net.TDO" schDisplayLabel="TDO" />
    <trace from="J3.pin9" to="net.TCK" schDisplayLabel="TCK" />
    <trace from="R18.pin1" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="L1.pin1" to="C11.pin2" />
    <trace from="L1.pin2" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="R35.pin1" to="net.RS485_DE" schDisplayLabel="RS485_DE" />
    <trace from="R36.pin1" to="net.RS485_REn" schDisplayLabel="RS485_REn" />
    <trace from="R23.pin1" to="net.RS485_TX" schDisplayLabel="RS485_TX" />
    <trace from="R26.pin1" to="net.RS485_REn" schDisplayLabel="RS485_REn" />
    <trace from="R37.pin1" to="net.RS485_DE" schDisplayLabel="RS485_DE" />
    <trace from="R28.pin1" to="net.RS485_RX" schDisplayLabel="RS485_RX" />
    <trace from="R38.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="D5.pin1" to="R39.pin1" />
    <trace from="D5.pin6" to="D5.pin5" />
    <trace from="D5.pin5" to="D5.pin4" />
    <trace from="D5.pin6" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="D5.pin2" to="R40.pin1" />
    <trace from="D5.pin3" to="R41.pin1" />
    <trace from="R39.pin2" to="net.LED1" schDisplayLabel="LED1" />
    <trace from="R40.pin2" to="net.LED2" schDisplayLabel="LED2" />
    <trace from="R41.pin2" to="net.LED3" schDisplayLabel="LED3" />
    <trace from="C14.pin1" to="C29.pin2" />
    <trace from="C14.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C28.pin1" to="C30.pin2" />
    <trace from="C28.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="T1.pin2" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="T1.pin5" to="C22.pin2" />
    <trace from="T1.pin5" to="net.COMM_GND" schDisplayLabel="COMM_GND" />
    <trace from="C21.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C30.pin1" to="U11.pin5" />
    <trace from="C30.pin1" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="C29.pin1" to="U11.pin2" />
    <trace from="C29.pin1" to="net.LV_AUX_3V3" schDisplayLabel="LV_AUX_3V3" />
    <trace from="U11.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="Y1.pin4" to="Y1.pin2" />
    <trace from="Y1.pin4" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C1.pin2" to="C2.pin2" />
    <trace from="C2.pin2" to="C3.pin2" />
    <trace from="C1.pin2" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C13.pin1" to="C12.pin1" />
    <trace from="C13.pin1" to="net.SGND" schDisplayLabel="SGND" />
    <trace from="C12.pin2" to="net.VDD" schDisplayLabel="VDD" />
    <trace from="C11.pin1" to="net.SGND" schDisplayLabel="SGND" />
  </subcircuit>
);

export default TIDA01281_ControlUnit;
