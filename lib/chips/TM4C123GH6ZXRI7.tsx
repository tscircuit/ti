import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PD5_AIN6_U6Tx_WT4CCP1", "A1"],
  pin2: ["PD4_AIN7_U6Rx_WT4CCP0", "A2"],
  pin3: ["PE5_AIN8_CAN0Tx_I2C2SDA_M0PWM5_M1PWM3_U5Tx", "A3"],
  pin4: ["PB4_AIN10_CAN0Rx_M0PWM2_SSI2Clk_T1CCP0", "A4"],
  pin5: ["PN0_AIN23_CAN0Rx", "A5"],
  pin6: ["PJ4_C2_T3CCP0_U6Rx", "A6"],
  pin7: ["PP6_M0PWM6_WT1CCP0", "A7"],
  pin8: ["PJ1_T1CCP1_U4Tx", "A8"],
  pin9: ["PN3_M0PWM7_WT2CCP1", "A9"],
  pin10: ["GND", "A10", "GND_A10"],
  pin11: ["PK4_C0o_M0FAULT0_RTCCLK_U7Rx", "A11"],
  pin12: ["PK6_C2o_M0FAULT2_WT1CCP0", "A12"],
  pin13: ["PL0_T0CCP0_WT0CCP0", "A13"],
  pin14: ["PD0_AIN15_I2C3SCL_M0PWM6_M1PWM0_SSI1Clk_SSI3Clk_WT2CCP0", "B1"],
  pin15: ["PE4_AIN9_CAN0Rx_I2C2SCL_M0PWM4_M1PWM2_U5Rx", "B3"],
  pin16: ["PB5_AIN11_CAN0Tx_M0PWM3_SSI2Fss_T1CCP1", "B4"],
  pin17: ["PN1_AIN22_CAN0Tx", "B5"],
  pin18: ["PJ5_C2_T3CCP1_U6Tx", "B6"],
  pin19: ["NC", "B7"],
  pin20: ["PJ2_IDX0_T2CCP0_U5Rx", "B8"],
  pin21: ["PC0_SWCLK_T4CCP0_TCK", "B9"],
  pin22: ["PC2_T5CCP0_TDI", "B10"],
  pin23: ["PK5_C1o_M0FAULT1_U7Tx", "B11"],
  pin24: ["PK7_M0FAULT3_WT1CCP1", "B12"],
  pin25: ["PL2_T1CCP0_WT1CCP0", "B13"],
  pin26: ["PD1_AIN14_I2C3SDA_M0PWM7_M1PWM1_SSI1Fss_SSI3Fss_WT2CCP1", "C1"],
  pin27: ["PD7_AIN4_M0FAULT1_NMI_PhB0_U2Tx_WT5CCP1", "C2"],
  pin28: ["PD6_AIN5_M0FAULT0_PhA0_U2Rx_WT5CCP0", "C3"],
  pin29: ["PE7_AIN20_CAN1Tx_U1RI", "C4"],
  pin30: ["PE6_AIN21_CAN1Rx", "C5"],
  pin31: ["PJ7", "C6"],
  pin32: ["PJ6", "C7"],
  pin33: ["PJ3_T2CCP1_U5Tx", "C8"],
  pin34: ["PC1_SWDIO_T4CCP1_TMS", "C9"],
  pin35: ["PC3_SWO_T5CCP1_TDO", "C10"],
  pin36: ["PL1_T0CCP1_WT0CCP1", "C11"],
  pin37: ["PL4_T2CCP0_WT2CCP0", "C12"],
  pin38: ["PL5_T2CCP1_WT2CCP1", "C13"],
  pin39: ["PQ1_M1PWM1_WT2CCP1", "D1"],
  pin40: ["PQ0_M1PWM0_WT2CCP0", "D2"],
  pin41: ["PD2_AIN13_M0FAULT0_SSI1Rx_SSI3Rx_USB0EPEN_WT3CCP0", "D3"],
  pin42: ["PD3_AIN12_IDX0_SSI1Tx_SSI3Tx_USB0PFLT_WT3CCP1", "D4"],
  pin43: ["GND", "D5", "GND_D5"],
  pin44: ["GND", "D6", "GND_D6"],
  pin45: ["VDDC", "D7", "VDDC_D7"],
  pin46: ["PJ0_T1CCP0_U4Rx", "D8"],
  pin47: ["GND", "D9", "GND_D9"],
  pin48: ["PL3_T1CCP1_WT1CCP1", "D10"],
  pin49: ["PB1_T2CCP1_U1Tx_USB0VBUS", "D11"],
  pin50: ["PB3_I2C0SDA_T3CCP1", "D12"],
  pin51: ["PB2_I2C0SCL_T3CCP0", "D13"],
  pin52: ["VREFA_P", "E1"],
  pin53: ["VREFA_N", "E2"],
  pin54: ["PB6_I2C5SCL_M0PWM0_SSI2Rx_T0CCP0", "E3"],
  pin55: ["PB7_I2C5SDA_M0PWM1_SSI2Tx_T0CCP1", "E4"],
  pin56: ["GND", "E5", "GND_E5"],
  pin57: ["VDD", "E6", "VDD_E6"],
  pin58: ["VDD", "E7", "VDD_E7"],
  pin59: ["GND", "E8", "GND_E8"],
  pin60: ["GND", "E9", "GND_E9"],
  pin61: ["GND", "E10", "GND_E10"],
  pin62: ["PB0_T2CCP0_U1Rx_USB0ID", "E11"],
  pin63: ["PL6_T3CCP0_USB0DP_WT3CCP0", "E12"],
  pin64: ["PL7_T3CCP1_USB0DM_WT3CCP1", "E13"],
  pin65: ["PQ2_M1PWM2_WT3CCP0", "F1"],
  pin66: ["GNDA", "F2", "GNDA_F2"],
  pin67: ["VDDA", "F3"],
  pin68: ["GNDA", "F4", "GNDA_F4"],
  pin69: ["GND", "F5", "GND_F5"],
  pin70: ["VDD", "F6", "VDD_F6"],
  pin71: ["VDD", "F7", "VDD_F7"],
  pin72: ["VDD", "F8", "VDD_F8"],
  pin73: ["GND", "F9", "GND_F9"],
  pin74: ["PM0_T4CCP0_WT4CCP0", "F10"],
  pin75: ["RST", "F11"],
  pin76: ["OSC1", "F12"],
  pin77: ["OSC0", "F13"],
  pin78: ["PE0_AIN3_U7Rx", "G1"],
  pin79: ["PE1_AIN2_U7Tx", "G2"],
  pin80: ["PE2_AIN1", "G3"],
  pin81: ["PE3_AIN0", "G4"],
  pin82: ["GND", "G5", "GND_G5"],
  pin83: ["VDD", "G6", "VDD_G6"],
  pin84: ["VDD", "G7", "VDD_G7"],
  pin85: ["VDD", "G8", "VDD_G8"],
  pin86: ["GND", "G9", "GND_G9"],
  pin87: ["PM4", "G10"],
  pin88: ["PM2_T5CCP0_WT5CCP0", "G11"],
  pin89: ["PM1_T4CCP1_WT4CCP1", "G12"],
  pin90: ["PM3_T5CCP1_WT5CCP1", "G13"],
  pin91: ["PK2_AIN18_M1FAULT2_SSI3Rx", "H1"],
  pin92: ["PK3_AIN19_M1FAULT3_SSI3Tx", "H2"],
  pin93: ["PK1_AIN17_M1FAULT1_SSI3Fss", "H3"],
  pin94: ["PK0_AIN16_M1FAULT0_SSI3Clk", "H4"],
  pin95: ["GND", "H5", "GND_H5"],
  pin96: ["VDD", "H6", "VDD_H6"],
  pin97: ["VDD", "H7", "VDD_H7"],
  pin98: ["GND", "H8", "GND_H8"],
  pin99: ["VDDC", "H9", "VDDC_H9"],
  pin100: ["PM5", "H10"],
  pin101: ["PM7_M0PWM5_WT0CCP1", "H11"],
  pin102: ["PP1_M0PWM1_T4CCP1", "H12"],
  pin103: ["PM6_M0PWM4_WT0CCP0", "H13"],
  pin104: ["VDDC", "J1", "VDDC_J1"],
  pin105: ["PH6_M0PWM6_SSI2Rx_WT4CCP0", "J2"],
  pin106: ["PH5_M0PWM5_PhB0_SSI2Fss_WT3CCP1", "J3"],
  pin107: ["PH7_M0PWM7_SSI2Tx_WT4CCP1", "J4"],
  pin108: ["GND", "J5", "GND_J5"],
  pin109: ["GND", "J6", "GND_J6"],
  pin110: ["GND", "J7", "GND_J7"],
  pin111: ["GND", "J8", "GND_J8"],
  pin112: ["VDDC", "J9", "VDDC_J9"],
  pin113: ["PP0_M0PWM0_T4CCP0", "J10"],
  pin114: ["PP3_M0PWM3_T5CCP1", "J11"],
  pin115: ["PP4_M0PWM4_WT0CCP0", "J12"],
  pin116: ["VDDC", "J13", "VDDC_J13"],
  pin117: ["PH4_M0PWM4_PhA0_SSI2Clk_WT3CCP0", "K1"],
  pin118: ["PH3_M0FAULT3_M0PWM3_SSI3Tx_WT5CCP1", "K2"],
  pin119: ["PH2_M0FAULT2_M0PWM2_SSI3Rx_WT5CCP0", "K3"],
  pin120: ["PN2_M0PWM6_WT2CCP0", "K4"],
  pin121: ["PA1_CAN1Tx_U0Tx", "K5"],
  pin122: ["PP2_M0PWM2_T5CCP0", "K6"],
  pin123: ["PP5_M0PWM5_WT0CCP1", "K7"],
  pin124: ["PF7_I2C2SDA_M1FAULT0_T3CCP1", "K8"],
  pin125: ["GND", "K9", "GND_K9"],
  pin126: ["PF4_IDX0_M0FAULT2_M1FAULT0_T2CCP0_TRD3_U1DTR_USB0EPEN", "K10"],
  pin127: ["XOSC0", "K11"],
  pin128: ["XOSC1", "K12"],
  pin129: ["VBAT", "K13"],
  pin130: ["PH1_IDX0_M0FAULT1_M0PWM1_SSI3Fss_WT2CCP1", "L1"],
  pin131: ["PH0_M0FAULT0_M0PWM0_SSI3Clk_WT2CCP0", "L2"],
  pin132: ["PA0_CAN1Rx_U0Rx", "L3"],
  pin133: ["PA4_SSI0Rx", "L4"],
  pin134: ["PA7_I2C1SDA_M1PWM3", "L5"],
  pin135: ["PP7_M0PWM7_WT1CCP1", "L6"],
  pin136: ["PQ5_M1PWM5_WT4CCP1", "L7"],
  pin137: ["PG3_I2C4SDA_M0FAULT2_M1PWM1_PhA1_T5CCP1", "L8"],
  pin138: ["PG2_I2C4SCL_M0FAULT1_M1PWM0_T5CCP0", "L9"],
  pin139: ["PF0_C0o_CAN0Rx_M1PWM4_NMI_PhA0_SSI1Rx_T0CCP0_TRD2_U1RTS", "L10"],
  pin140: ["PN7_M1PWM7_WT4CCP1", "L11"],
  pin141: ["PN4_M1PWM4_WT3CCP0", "L12"],
  pin142: ["HIB", "L13"],
  pin143: ["PC7_C0_U3Tx_USB0PFLT_WT1CCP1", "M1"],
  pin144: ["PC5_C1_M0PWM7_PhA1_U1CTS_U1Tx_U4Tx_WT0CCP1", "M2"],
  pin145: ["PC4_C1_IDX1_M0PWM6_U1RTS_U1Rx_U4Rx_WT0CCP0", "M3"],
  pin146: ["PA5_SSI0Tx", "M4"],
  pin147: ["PG7_I2C5SDA_IDX1_M0PWM7_WT1CCP1", "M5"],
  pin148: ["PQ3_M1PWM3_WT3CCP1", "M6"],
  pin149: ["PQ6_M1PWM6_WT5CCP0", "M7"],
  pin150: ["PG4_I2C1SCL_M0PWM4_M1PWM2_PhB1_U2Rx_USB0EPEN_WT0CCP0", "M8"],
  pin151: ["PG1_I2C3SDA_M1FAULT2_PhB1_T4CCP1", "M9"],
  pin152: ["PF5_M0FAULT3_T2CCP1_USB0PFLT", "M10"],
  pin153: ["PF3_CAN0Tx_M0FAULT1_M1PWM7_SSI1Fss_T1CCP1_TRCLK_U1DSR", "M11"],
  pin154: ["PN5_M1PWM5_WT3CCP1", "M12"],
  pin155: ["WAKE", "M13"],
  pin156: ["PC6_C0_PhB1_U3Rx_USB0EPEN_WT1CCP0", "N1"],
  pin157: ["PA2_SSI0Clk", "N2"],
  pin158: ["PA3_SSI0Fss", "N3"],
  pin159: ["PA6_I2C1SCL_M1PWM2", "N4"],
  pin160: ["PG6_I2C5SCL_M0PWM6_WT1CCP0", "N5"],
  pin161: ["PQ4_M1PWM4_WT4CCP0", "N6"],
  pin162: ["PQ7_M1PWM7_WT5CCP1", "N7"],
  pin163: ["PG5_I2C1SDA_IDX1_M0PWM5_M1PWM3_U2Tx_USB0PFLT_WT0CCP1", "N8"],
  pin164: ["PG0_I2C3SCL_M1FAULT1_PhA1_T4CCP0", "N9"],
  pin165: ["PF6_I2C2SCL_T3CCP0", "N10"],
  pin166: ["PF1_C1o_M1PWM5_PhB0_SSI1Tx_T0CCP1_TRD1_U1CTS", "N11"],
  pin167: ["PF2_C2o_M0FAULT0_M1PWM6_SSI1Clk_T1CCP0_TRD0_U1DCD", "N12"],
  pin168: ["PN6_M1PWM6_WT4CCP0", "N13"],
} as const;

const pinRoles = {
  pin1: "bidirectional",
  pin2: "bidirectional",
  pin3: "bidirectional",
  pin4: "bidirectional",
  pin5: "bidirectional",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "bidirectional",
  pin9: "bidirectional",
  pin10: "ground",
  pin11: "bidirectional",
  pin12: "bidirectional",
  pin13: "bidirectional",
  pin14: "bidirectional",
  pin15: "bidirectional",
  pin16: "bidirectional",
  pin17: "bidirectional",
  pin18: "bidirectional",
  pin19: "no-connect",
  pin20: "bidirectional",
  pin21: "bidirectional",
  pin22: "bidirectional",
  pin23: "bidirectional",
  pin24: "bidirectional",
  pin25: "bidirectional",
  pin26: "bidirectional",
  pin27: "bidirectional",
  pin28: "bidirectional",
  pin29: "bidirectional",
  pin30: "bidirectional",
  pin31: "bidirectional",
  pin32: "bidirectional",
  pin33: "bidirectional",
  pin34: "bidirectional",
  pin35: "bidirectional",
  pin36: "bidirectional",
  pin37: "bidirectional",
  pin38: "bidirectional",
  pin39: "bidirectional",
  pin40: "bidirectional",
  pin41: "power",
  pin42: "bidirectional",
  pin43: "ground",
  pin44: "ground",
  pin45: "power",
  pin46: "bidirectional",
  pin47: "ground",
  pin48: "bidirectional",
  pin49: "bidirectional",
  pin50: "bidirectional",
  pin51: "bidirectional",
  pin54: "bidirectional",
  pin55: "bidirectional",
  pin56: "ground",
  pin57: "power",
  pin58: "power",
  pin59: "ground",
  pin60: "ground",
  pin61: "ground",
  pin62: "bidirectional",
  pin63: "bidirectional",
  pin64: "bidirectional",
  pin65: "bidirectional",
  pin66: "ground",
  pin67: "power",
  pin68: "ground",
  pin69: "ground",
  pin70: "power",
  pin71: "power",
  pin72: "power",
  pin73: "ground",
  pin74: "bidirectional",
  pin75: "input",
  pin76: "output",
  pin77: "input",
  pin78: "bidirectional",
  pin79: "bidirectional",
  pin80: "bidirectional",
  pin81: "bidirectional",
  pin82: "ground",
  pin83: "power",
  pin84: "power",
  pin85: "power",
  pin86: "ground",
  pin87: "bidirectional",
  pin88: "bidirectional",
  pin89: "bidirectional",
  pin90: "bidirectional",
  pin91: "bidirectional",
  pin92: "bidirectional",
  pin93: "bidirectional",
  pin94: "bidirectional",
  pin95: "ground",
  pin96: "power",
  pin97: "power",
  pin98: "ground",
  pin99: "power",
  pin100: "bidirectional",
  pin101: "bidirectional",
  pin102: "bidirectional",
  pin103: "bidirectional",
  pin104: "power",
  pin105: "bidirectional",
  pin106: "bidirectional",
  pin107: "bidirectional",
  pin108: "ground",
  pin109: "ground",
  pin110: "ground",
  pin111: "ground",
  pin112: "power",
  pin113: "bidirectional",
  pin114: "bidirectional",
  pin115: "bidirectional",
  pin116: "power",
  pin117: "bidirectional",
  pin118: "bidirectional",
  pin119: "bidirectional",
  pin120: "bidirectional",
  pin121: "bidirectional",
  pin122: "bidirectional",
  pin123: "bidirectional",
  pin124: "bidirectional",
  pin125: "ground",
  pin126: "power",
  pin127: "input",
  pin128: "output",
  pin129: "power",
  pin130: "bidirectional",
  pin131: "bidirectional",
  pin132: "bidirectional",
  pin133: "bidirectional",
  pin134: "bidirectional",
  pin135: "bidirectional",
  pin136: "bidirectional",
  pin137: "bidirectional",
  pin138: "bidirectional",
  pin139: "bidirectional",
  pin140: "bidirectional",
  pin141: "bidirectional",
  pin142: "output",
  pin143: "bidirectional",
  pin144: "bidirectional",
  pin145: "bidirectional",
  pin146: "bidirectional",
  pin147: "bidirectional",
  pin148: "bidirectional",
  pin149: "bidirectional",
  pin150: "power",
  pin151: "bidirectional",
  pin152: "bidirectional",
  pin153: "bidirectional",
  pin154: "bidirectional",
  pin155: "input",
  pin156: "power",
  pin157: "bidirectional",
  pin158: "bidirectional",
  pin159: "bidirectional",
  pin160: "bidirectional",
  pin161: "bidirectional",
  pin162: "bidirectional",
  pin163: "bidirectional",
  pin164: "bidirectional",
  pin165: "bidirectional",
  pin166: "bidirectional",
  pin167: "bidirectional",
  pin168: "bidirectional",
} as const;

const pinAttributes = {
  pin10: {
    requiresGround: true,
  },
  pin19: {
    doNotConnect: true,
  },
  pin41: {
    requiresPower: true,
  },
  pin43: {
    requiresGround: true,
  },
  pin44: {
    requiresGround: true,
  },
  pin45: {
    requiresPower: true,
  },
  pin47: {
    requiresGround: true,
  },
  pin56: {
    requiresGround: true,
  },
  pin57: {
    requiresPower: true,
  },
  pin58: {
    requiresPower: true,
  },
  pin59: {
    requiresGround: true,
  },
  pin60: {
    requiresGround: true,
  },
  pin61: {
    requiresGround: true,
  },
  pin66: {
    requiresGround: true,
  },
  pin67: {
    requiresPower: true,
  },
  pin68: {
    requiresGround: true,
  },
  pin69: {
    requiresGround: true,
  },
  pin70: {
    requiresPower: true,
  },
  pin71: {
    requiresPower: true,
  },
  pin72: {
    requiresPower: true,
  },
  pin73: {
    requiresGround: true,
  },
  pin82: {
    requiresGround: true,
  },
  pin83: {
    requiresPower: true,
  },
  pin84: {
    requiresPower: true,
  },
  pin85: {
    requiresPower: true,
  },
  pin86: {
    requiresGround: true,
  },
  pin95: {
    requiresGround: true,
  },
  pin96: {
    requiresPower: true,
  },
  pin97: {
    requiresPower: true,
  },
  pin98: {
    requiresGround: true,
  },
  pin99: {
    requiresPower: true,
  },
  pin104: {
    requiresPower: true,
  },
  pin108: {
    requiresGround: true,
  },
  pin109: {
    requiresGround: true,
  },
  pin110: {
    requiresGround: true,
  },
  pin111: {
    requiresGround: true,
  },
  pin112: {
    requiresPower: true,
  },
  pin116: {
    requiresPower: true,
  },
  pin125: {
    requiresGround: true,
  },
  pin126: {
    requiresPower: true,
  },
  pin129: {
    requiresPower: true,
  },
  pin150: {
    requiresPower: true,
  },
  pin156: {
    requiresPower: true,
  },
} as const;

export const TM4C123GH6ZXRI7 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1343028"],
      }}
      manufacturerPartNumber="TM4C123GH6ZXRI7"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.999994mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.999994mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.999994mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.999994mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.999994mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.999994mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.999994mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.999994mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-2.999994mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-2.999994mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-2.999994mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-2.999994mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.999994mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.499868mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-2.499868mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-2.499868mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-2.499868mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-2.499868mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-2.499868mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.499868mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-2.499868mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-2.499868mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-2.499868mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-2.499868mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-2.499868mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-1.999996mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-1.999996mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-1.999996mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-1.999996mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-1.999996mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-1.999996mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-1.999996mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-1.999996mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-1.999996mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-1.999996mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-1.999996mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-1.999996mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-1.999996mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-1.49987mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-1.49987mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-1.49987mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-1.49987mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-1.49987mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-1.49987mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-1.49987mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-1.49987mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-1.49987mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-1.49987mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-1.49987mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-1.49987mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="-1.49987mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="-0.999998mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="-0.999998mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="-0.999998mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="-0.999998mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="-0.999998mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="-0.999998mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="-0.999998mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-0.999998mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="-0.999998mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="-0.999998mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="-0.999998mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="-0.999998mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="-0.999998mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="-0.499872mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin66"]}
            pcbX="-0.499872mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin67"]}
            pcbX="-0.499872mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin68"]}
            pcbX="-0.499872mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin69"]}
            pcbX="-0.499872mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin70"]}
            pcbX="-0.499872mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin71"]}
            pcbX="-0.499872mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin72"]}
            pcbX="-0.499872mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin73"]}
            pcbX="-0.499872mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin74"]}
            pcbX="-0.499872mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin75"]}
            pcbX="-0.499872mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin76"]}
            pcbX="-0.499872mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin77"]}
            pcbX="-0.499872mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin78"]}
            pcbX="0mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin79"]}
            pcbX="0mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin80"]}
            pcbX="0mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin81"]}
            pcbX="0mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin82"]}
            pcbX="0mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin83"]}
            pcbX="0mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin84"]}
            pcbX="0mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin85"]}
            pcbX="0mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin86"]}
            pcbX="0mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin87"]}
            pcbX="0mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin88"]}
            pcbX="0mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin89"]}
            pcbX="0mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin90"]}
            pcbX="0mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin91"]}
            pcbX="0.500126mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin92"]}
            pcbX="0.500126mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin93"]}
            pcbX="0.500126mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin94"]}
            pcbX="0.500126mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin95"]}
            pcbX="0.500126mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin96"]}
            pcbX="0.500126mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin97"]}
            pcbX="0.500126mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin98"]}
            pcbX="0.500126mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin99"]}
            pcbX="0.500126mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin100"]}
            pcbX="0.500126mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin101"]}
            pcbX="0.500126mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin102"]}
            pcbX="0.500126mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin103"]}
            pcbX="0.500126mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin104"]}
            pcbX="0.999998mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin105"]}
            pcbX="0.999998mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin106"]}
            pcbX="0.999998mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin107"]}
            pcbX="0.999998mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin108"]}
            pcbX="0.999998mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin109"]}
            pcbX="0.999998mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin110"]}
            pcbX="0.999998mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin111"]}
            pcbX="0.999998mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin112"]}
            pcbX="0.999998mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin113"]}
            pcbX="0.999998mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin114"]}
            pcbX="0.999998mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin115"]}
            pcbX="0.999998mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin116"]}
            pcbX="0.999998mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin117"]}
            pcbX="1.500124mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin118"]}
            pcbX="1.500124mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin119"]}
            pcbX="1.500124mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin120"]}
            pcbX="1.500124mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin121"]}
            pcbX="1.500124mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin122"]}
            pcbX="1.500124mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin123"]}
            pcbX="1.500124mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin124"]}
            pcbX="1.500124mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin125"]}
            pcbX="1.500124mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin126"]}
            pcbX="1.500124mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin127"]}
            pcbX="1.500124mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin128"]}
            pcbX="1.500124mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin129"]}
            pcbX="1.500124mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin130"]}
            pcbX="1.999996mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin131"]}
            pcbX="1.999996mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin132"]}
            pcbX="1.999996mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin133"]}
            pcbX="1.999996mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin134"]}
            pcbX="1.999996mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin135"]}
            pcbX="1.999996mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin136"]}
            pcbX="1.999996mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin137"]}
            pcbX="1.999996mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin138"]}
            pcbX="1.999996mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin139"]}
            pcbX="1.999996mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin140"]}
            pcbX="1.999996mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin141"]}
            pcbX="1.999996mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin142"]}
            pcbX="1.999996mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin143"]}
            pcbX="2.500122mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin144"]}
            pcbX="2.500122mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin145"]}
            pcbX="2.500122mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin146"]}
            pcbX="2.500122mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin147"]}
            pcbX="2.500122mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin148"]}
            pcbX="2.500122mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin149"]}
            pcbX="2.500122mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin150"]}
            pcbX="2.500122mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin151"]}
            pcbX="2.500122mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin152"]}
            pcbX="2.500122mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin153"]}
            pcbX="2.500122mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin154"]}
            pcbX="2.500122mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin155"]}
            pcbX="2.500122mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin156"]}
            pcbX="2.999994mm"
            pcbY="-2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin157"]}
            pcbX="2.999994mm"
            pcbY="-2.500122mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin158"]}
            pcbX="2.999994mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin159"]}
            pcbX="2.999994mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin160"]}
            pcbX="2.999994mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin161"]}
            pcbX="2.999994mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin162"]}
            pcbX="2.999994mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin163"]}
            pcbX="2.999994mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin164"]}
            pcbX="2.999994mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin165"]}
            pcbX="2.999994mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin166"]}
            pcbX="2.999994mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin167"]}
            pcbX="2.999994mm"
            pcbY="2.499868mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin168"]}
            pcbX="2.999994mm"
            pcbY="2.999994mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -3.5761929999999893, y: 3.5761929999999893 },
              { x: 3.5761930000000035, y: 3.5761929999999893 },
              { x: 3.5761930000000035, y: -3.5761930000000035 },
              { x: -3.5761929999999893, y: -3.5761930000000035 },
              { x: -3.5761929999999893, y: 3.5761929999999893 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.949955999999986, y: -4.07619200000002 },
              { x: -2.9516610035041424, y: -4.089142787378847 },
              { x: -2.956659820845431, y: -4.101211000000021 },
              { x: -2.9646117908829837, y: -4.1115742091170375 },
              { x: -2.9749750000000006, y: -4.119526179154576 },
              { x: -2.9870432126211597, y: -4.124524996495865 },
              { x: -2.999994000000001, y: -4.126230000000007 },
              { x: -3.012944787378828, y: -4.124524996495865 },
              { x: -3.025012999999987, y: -4.119526179154576 },
              { x: -3.035376209117004, y: -4.1115742091170375 },
              { x: -3.043328179154557, y: -4.101211000000021 },
              { x: -3.0483269964958453, y: -4.089142787378847 },
              { x: -3.0500319999999874, y: -4.07619200000002 },
              { x: -3.0483269964958453, y: -4.063241212621165 },
              { x: -3.043328179154557, y: -4.051173000000006 },
              { x: -3.035376209117004, y: -4.040809790882989 },
              { x: -3.025012999999987, y: -4.032857820845436 },
              { x: -3.012944787378828, y: -4.027859003504162 },
              { x: -2.999994000000001, y: -4.026154000000005 },
              { x: -2.9870432126211597, y: -4.027859003504162 },
              { x: -2.9749750000000006, y: -4.032857820845436 },
              { x: -2.9646117908829837, y: -4.040809790882989 },
              { x: -2.956659820845431, y: -4.051173000000006 },
              { x: -2.9516610035041424, y: -4.063241212621165 },
              { x: -2.949955999999986, y: -4.07619200000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.8047929999999894, y: -3.176193800000007 },
              { x: -3.8047929999999894, y: -3.8047929999999894 },
              { x: -3.176193800000007, y: -3.8047929999999894 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1143mm"
            pcbY="4.5814mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.060000000000002, y: 3.831399999999988 },
              { x: 3.8314000000000163, y: 3.831399999999988 },
              { x: 3.8314000000000163, y: -4.364800000000017 },
              { x: -4.060000000000002, y: -4.364800000000017 },
              { x: -4.060000000000002, y: 3.831399999999988 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1343028.obj?uuid=080d068ea40c40309b0a7cc7eb54c358",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1343028.step?uuid=080d068ea40c40309b0a7cc7eb54c358",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.2 },
      }}
      {...props}
    />
  );
};

export default TM4C123GH6ZXRI7;
