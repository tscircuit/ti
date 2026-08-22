import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["P6_0_CB0_A0", "A1"],
  pin2: ["RST_NMI_SBWTDIO", "A2"],
  pin3: ["PJ_2_TMS", "A3"],
  pin4: ["TEST_SBWTCK", "A4"],
  pin5: ["AVSS2", "A5"],
  pin6: ["VUSB", "A6"],
  pin7: ["VBUS", "A7"],
  pin8: ["PU_1_DM", "A8"],
  pin9: ["PU_0_DP", "A9"],
  pin10: ["P6_2_CB2_A2", "B1"],
  pin11: ["P6_1_CB1_A1", "B2"],
  pin12: ["PJ_3_TCK", "B3"],
  pin13: ["P5_3_XT2OUT", "B4"],
  pin14: ["P5_2_XT2IN", "B5"],
  pin15: ["V18", "B6"],
  pin16: ["PUR", "B7"],
  pin17: ["VSSU", "B8", "VSSU_B8"],
  pin18: ["VSSU", "B9", "VSSU_B9"],
  pin19: ["P6_4_CB4_A4", "C1"],
  pin20: ["P6_3_CB3_A3", "C2"],
  pin21: ["PJ_1_TDI_TCLK", "C4"],
  pin22: ["PJ_0_TDO", "C5"],
  pin23: ["NC", "C6", "NC_C6"],
  pin24: ["P4_7_PM_NONE", "C7"],
  pin25: ["P4_6_PM_NONE", "C8"],
  pin26: ["P4_5_PM_UCA1RXD_PM_UCA1SOMI", "C9"],
  pin27: ["P6_6_CB6_A6", "D1"],
  pin28: ["P6_5_CB5_A5", "D2"],
  pin29: ["P6_7_CB7_A7", "D3"],
  pin30: ["NC", "D4", "NC_D4"],
  pin31: ["NC", "D5", "NC_D5"],
  pin32: ["NC", "D6", "NC_D6"],
  pin33: ["P4_4_PM_UCA1TXD_PM_UCA1SIMO", "D7"],
  pin34: ["P4_3_PM_UCB1CLK_PM_UCA1STE", "D8"],
  pin35: ["P4_2_PM_UCB1SOMI_PM_UCB1SCL", "D9"],
  pin36: ["P5_0_A8_VREF_VeREF_P", "E1"],
  pin37: ["P5_1_A9_VREF_VeREF_N", "E2"],
  pin38: ["NC", "E3", "NC_E3"],
  pin39: ["NC", "E4", "NC_E4"],
  pin40: ["NC", "E5", "NC_E5"],
  pin41: ["NC", "E6", "NC_E6"],
  pin42: ["P4_1_PM_UCB1SIMO_PM_UCB1SDA", "E7"],
  pin43: ["P4_0_PM_UCB1STE_PM_UCA1CLK", "E8"],
  pin44: ["DVCC2", "E9"],
  pin45: ["P5_4_XIN", "F1"],
  pin46: ["AVCC1", "F2"],
  pin47: ["NC", "F3", "NC_F3"],
  pin48: ["NC", "F4", "NC_F4"],
  pin49: ["NC", "F5", "NC_F5"],
  pin50: ["NC", "F6", "NC_F6"],
  pin51: ["NC", "F7", "NC_F7"],
  pin52: ["NC", "F8", "NC_F8"],
  pin53: ["DVSS2", "F9"],
  pin54: ["P5_5_XOUT", "G1"],
  pin55: ["AVSS1", "G2"],
  pin56: ["NC", "G3", "NC_G3"],
  pin57: ["P1_3_TA0_2", "G4"],
  pin58: ["P1_6_TA1CLK_CBOUT", "G5"],
  pin59: ["P2_1_TA1_2", "G6"],
  pin60: ["P3_4_UCA0RXD_UCA0SOMI", "G7"],
  pin61: ["P3_2_UCB0CLK_UCA0STE", "G8"],
  pin62: ["P3_3_UCA0TXD_UCA0SIMO", "G9"],
  pin63: ["DVCC1", "H1"],
  pin64: ["P1_0_TA0CLK_ACLK", "H2"],
  pin65: ["P1_1_TA0_0", "H3"],
  pin66: ["P1_4_TA0_3", "H4"],
  pin67: ["P1_7_TA1_0", "H5"],
  pin68: ["P2_3_TA2_0", "H6"],
  pin69: ["P2_7_UCB0STE_UCA0CLK", "H7"],
  pin70: ["P3_0_UCB0SIMO_UCB0SDA", "H8"],
  pin71: ["P3_1_UCB0SOMI_UCB0SCL", "H9"],
  pin72: ["DVSS1", "J1"],
  pin73: ["VCORE", "J2"],
  pin74: ["P1_2_TA0_1", "J3"],
  pin75: ["P1_5_TA0_4", "J4"],
  pin76: ["P2_0_TA1_1", "J5"],
  pin77: ["P2_2_TA2CLK_SMCLK", "J6"],
  pin78: ["P2_4_TA2_1", "J7"],
  pin79: ["P2_5_TA2_2", "J8"],
  pin80: ["P2_6_RTCCLK_DMAE0", "J9"],
} as const;

const pinRoles = {
  pin1: "bidirectional",
  pin2: "bidirectional",
  pin3: "bidirectional",
  pin4: "input",
  pin5: "ground",
  pin7: "power",
  pin8: "bidirectional",
  pin9: "bidirectional",
  pin10: "bidirectional",
  pin11: "bidirectional",
  pin12: "bidirectional",
  pin13: "bidirectional",
  pin14: "bidirectional",
  pin16: "bidirectional",
  pin17: "ground",
  pin18: "ground",
  pin19: "bidirectional",
  pin20: "bidirectional",
  pin21: "bidirectional",
  pin22: "bidirectional",
  pin23: "no-connect",
  pin24: "bidirectional",
  pin25: "bidirectional",
  pin26: "bidirectional",
  pin27: "bidirectional",
  pin28: "bidirectional",
  pin29: "bidirectional",
  pin30: "no-connect",
  pin31: "no-connect",
  pin32: "no-connect",
  pin33: "bidirectional",
  pin34: "bidirectional",
  pin35: "bidirectional",
  pin36: "bidirectional",
  pin37: "bidirectional",
  pin38: "no-connect",
  pin39: "no-connect",
  pin40: "no-connect",
  pin41: "no-connect",
  pin42: "bidirectional",
  pin43: "bidirectional",
  pin44: "power",
  pin45: "bidirectional",
  pin46: "power",
  pin47: "no-connect",
  pin48: "no-connect",
  pin49: "no-connect",
  pin50: "no-connect",
  pin51: "no-connect",
  pin52: "no-connect",
  pin53: "ground",
  pin54: "bidirectional",
  pin55: "ground",
  pin56: "no-connect",
  pin57: "bidirectional",
  pin58: "bidirectional",
  pin59: "bidirectional",
  pin60: "bidirectional",
  pin61: "bidirectional",
  pin62: "bidirectional",
  pin63: "power",
  pin64: "bidirectional",
  pin65: "bidirectional",
  pin66: "bidirectional",
  pin67: "bidirectional",
  pin68: "bidirectional",
  pin69: "bidirectional",
  pin70: "bidirectional",
  pin71: "bidirectional",
  pin72: "ground",
  pin73: "power",
  pin74: "bidirectional",
  pin75: "bidirectional",
  pin76: "bidirectional",
  pin77: "bidirectional",
  pin78: "bidirectional",
  pin79: "bidirectional",
  pin80: "bidirectional",
} as const;

const pinAttributes = {
  pin5: {
    requiresGround: true,
  },
  pin7: {
    requiresPower: true,
  },
  pin17: {
    requiresGround: true,
  },
  pin18: {
    requiresGround: true,
  },
  pin23: {
    doNotConnect: true,
  },
  pin30: {
    doNotConnect: true,
  },
  pin31: {
    doNotConnect: true,
  },
  pin32: {
    doNotConnect: true,
  },
  pin38: {
    doNotConnect: true,
  },
  pin39: {
    doNotConnect: true,
  },
  pin40: {
    doNotConnect: true,
  },
  pin41: {
    doNotConnect: true,
  },
  pin44: {
    requiresPower: true,
  },
  pin46: {
    requiresPower: true,
  },
  pin47: {
    doNotConnect: true,
  },
  pin48: {
    doNotConnect: true,
  },
  pin49: {
    doNotConnect: true,
  },
  pin50: {
    doNotConnect: true,
  },
  pin51: {
    doNotConnect: true,
  },
  pin52: {
    doNotConnect: true,
  },
  pin53: {
    requiresGround: true,
  },
  pin55: {
    requiresGround: true,
  },
  pin56: {
    doNotConnect: true,
  },
  pin63: {
    requiresPower: true,
  },
  pin72: {
    requiresGround: true,
  },
  pin73: {
    requiresPower: true,
  },
} as const;

export const MSP430F5528IZXHR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2873415"],
      }}
      manufacturerPartNumber="MSP430F5528IZXHR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.999996mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.999996mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.999996mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.999996mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.999996mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.999996mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.999996mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.999996mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.999996mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.49987mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.49987mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.49987mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.49987mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.49987mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.49987mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.49987mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-1.49987mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-1.49987mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-0.999998mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-0.999998mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-0.999998mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-0.999998mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.999998mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-0.999998mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-0.999998mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-0.999998mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-0.499872mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-0.499872mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-0.499872mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-0.499872mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-0.499872mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-0.499872mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-0.499872mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-0.499872mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-0.499872mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="0mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="0mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="0mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="0mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="0mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="0mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="0mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="0mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="0mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="0.500126mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="0.500126mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="0.500126mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="0.500126mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="0.500126mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="0.500126mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="0.500126mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="0.500126mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="0.500126mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="0.999998mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="0.999998mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="0.999998mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="0.999998mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="0.999998mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="0.999998mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="0.999998mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="0.999998mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="0.999998mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="1.500124mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="1.500124mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="1.500124mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin66"]}
            pcbX="1.500124mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin67"]}
            pcbX="1.500124mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin68"]}
            pcbX="1.500124mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin69"]}
            pcbX="1.500124mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin70"]}
            pcbX="1.500124mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin71"]}
            pcbX="1.500124mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin72"]}
            pcbX="1.999996mm"
            pcbY="-1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin73"]}
            pcbX="1.999996mm"
            pcbY="-1.500124mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin74"]}
            pcbX="1.999996mm"
            pcbY="-0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin75"]}
            pcbX="1.999996mm"
            pcbY="-0.500126mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin76"]}
            pcbX="1.999996mm"
            pcbY="-0mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin77"]}
            pcbX="1.999996mm"
            pcbY="0.499872mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin78"]}
            pcbX="1.999996mm"
            pcbY="0.999998mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin79"]}
            pcbX="1.999996mm"
            pcbY="1.49987mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin80"]}
            pcbX="1.999996mm"
            pcbY="1.999996mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -2.5761949999999985, y: 2.5761949999999842 },
              { x: 2.5761949999999985, y: 2.5761949999999842 },
              { x: 2.5761949999999985, y: -2.5761949999999985 },
              { x: -2.5761949999999985, y: -2.5761949999999985 },
              { x: -2.5761949999999985, y: 2.5761949999999842 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.9499580000000094, y: -3.076194000000001 },
              { x: -1.9516630035041658, y: -3.0891447873788422 },
              { x: -1.9566618208454258, y: -3.1012130000000013 },
              { x: -1.9646137908829928, y: -3.1115762091170325 },
              { x: -1.9749770000000098, y: -3.1195281791545852 },
              { x: -1.9870452126211688, y: -3.1245269964958595 },
              { x: -1.99999600000001, y: -3.1262320000000017 },
              { x: -2.012946787378837, y: -3.1245269964958595 },
              { x: -2.0250149999999962, y: -3.1195281791545852 },
              { x: -2.035378209117013, y: -3.1115762091170325 },
              { x: -2.043330179154566, y: -3.1012130000000013 },
              { x: -2.0483289964958544, y: -3.0891447873788422 },
              { x: -2.0500339999999966, y: -3.076194000000001 },
              { x: -2.0483289964958544, y: -3.063243212621174 },
              { x: -2.043330179154566, y: -3.051175000000015 },
              { x: -2.035378209117013, y: -3.040811790882998 },
              { x: -2.0250149999999962, y: -3.032859820845431 },
              { x: -2.012946787378837, y: -3.0278610035041567 },
              { x: -1.99999600000001, y: -3.0261560000000003 },
              { x: -1.9870452126211688, y: -3.0278610035041567 },
              { x: -1.9749770000000098, y: -3.032859820845431 },
              { x: -1.9646137908829928, y: -3.040811790882998 },
              { x: -1.9566618208454258, y: -3.051175000000015 },
              { x: -1.9516630035041658, y: -3.063243212621174 },
              { x: -1.9499580000000094, y: -3.076194000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.8047949999999986, y: -2.1761958000000163 },
              { x: -2.8047949999999986, y: -2.804795000000013 },
              { x: -2.176195800000002, y: -2.804795000000013 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1016mm"
            pcbY="3.5654mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.043999999999997, y: 2.815399999999997 },
              { x: 2.8408000000000015, y: 2.815399999999997 },
              { x: 2.8408000000000015, y: -3.3996000000000066 },
              { x: -3.043999999999997, y: -3.3996000000000066 },
              { x: -3.043999999999997, y: 2.815399999999997 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2873415.obj?uuid=c3ddfd1ad1b4455789e04c5c325d5570",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2873415.step?uuid=c3ddfd1ad1b4455789e04c5c325d5570",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.3 },
      }}
      {...props}
    />
  );
};

export default MSP430F5528IZXHR;
