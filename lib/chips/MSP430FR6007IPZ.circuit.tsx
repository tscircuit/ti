import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

/**
 * Complete MSP430FR6007 PZ (100-pin LQFP) pin map.
 *
 * Source: MSP430FR6007/MSP430FR6005 data sheet, SLASEV3A,
 * Figure 7-1 and Table 7-1.
 * https://www.ti.com/lit/ds/symlink/msp430fr6007.pdf
 *
 * Dots in TI port/timer names are encoded as underscores because tscircuit
 * pin labels must be selector-safe (for example, P2.2 becomes P2_2).
 */
export const MSP430FR6007IPZ_PIN_LABELS = {
  pin1: ["P2_2", "COUT", "UCA0CLK", "A14", "C14"],
  pin2: ["P2_3", "TA0_0", "UCA0STE", "A15", "C15"],
  pin3: ["P1_0", "UCA1CLK", "TA1_0", "A0", "C0", "VREF_N", "VEREF_N"],
  pin4: ["P1_1", "UCA1STE", "TA4_0", "A1", "C1", "VREF_P", "VEREF_P"],
  pin5: ["AVSS2", "AVSS"],
  pin6: ["PJ_4", "LFXIN"],
  pin7: ["PJ_5", "LFXOUT"],
  pin8: ["AVSS3", "AVSS"],
  pin9: ["PJ_6", "HFXIN"],
  pin10: ["PJ_7", "HFXOUT"],
  pin11: ["AVSS4", "AVSS"],
  pin12: ["P1_4", "TB0_4", "UCB0STE", "A2", "C2"],
  pin13: ["P1_5", "TB0_5", "UCB0CLK", "A3", "C3"],
  pin14: ["P1_6", "UCB0SIMO", "UCB0SDA", "A4", "C4"],
  pin15: ["P1_7", "USSTRG", "UCB0SOMI", "UCB0SCL", "A5", "C5"],
  pin16: ["P2_0", "UCA0SIMO", "UCA0TXD", "A6", "C6", "BSLTX"],
  pin17: ["P2_1", "UCA0SOMI", "UCA0RXD", "A7", "C7", "BSLRX"],
  pin18: ["P1_2", "UCA1SIMO", "UCA1TXD", "A8", "C8"],
  pin19: ["P1_3", "UCA1SOMI", "UCA1RXD", "A9", "C9"],
  pin20: ["TEST", "SBWTCK"],
  pin21: ["RST_NMI_SBWTDIO", "RST", "NMI", "SBWTDIO"],
  pin22: ["PJ_0", "TDO", "ACLK", "SRSCG1", "DMAE0", "C10"],
  pin23: ["PJ_1", "TDI", "TCLK", "SMCLK", "SRSCG0", "TA4CLK", "C11"],
  pin24: ["PJ_2", "TMS", "MCLK", "SROSCOFF", "TB0OUTH", "C12"],
  pin25: ["PJ_3", "TCK", "RTCCLK", "SRCPUOFF", "TB0_6", "C13"],
  pin26: ["DVSS1", "DVSS"],
  pin27: ["DVCC1", "DVCC"],
  pin28: ["P2_4", "TA0CLK", "TB0CLK", "TA1CLK", "LCDS32"],
  pin29: ["P2_5", "TA4_0", "LCDS31"],
  pin30: ["P2_6", "TA4_1", "LCDS30"],
  pin31: ["P3_0", "TB0_0", "LCDS29"],
  pin32: ["P3_1", "TB0_1", "LCDS28"],
  pin33: ["P3_2", "TB0_2", "LCDS27"],
  pin34: ["P3_3", "TB0_3", "LCDS26"],
  pin35: ["P3_4", "TB0OUTH", "LCDS25"],
  pin36: ["P3_5", "TB0_4", "LCDS24"],
  pin37: ["P3_6", "TB0_5", "LCDS23"],
  pin38: ["P3_7", "TB0_6", "LCDS22"],
  pin39: ["P2_7", "TA0_0", "LCDS21"],
  pin40: ["P9_0", "TA1_0", "LCDS20"],
  pin41: ["P9_1", "SMCLK", "LCDS19"],
  pin42: ["P9_2", "MCLK", "LCDS18"],
  pin43: ["P9_3", "ACLK", "LCDS17"],
  pin44: ["P4_0", "RTCCLK", "LCDS16"],
  pin45: ["P4_1", "UCA0CLK", "LCDS15"],
  pin46: ["P4_2", "UCA0STE", "LCDS14"],
  pin47: ["P4_3", "UCA0SIMO", "UCA0TXD", "LCDS13"],
  pin48: ["P4_4", "UCA0SOMI", "UCA0RXD", "LCDS12"],
  pin49: ["P4_5", "TA0CLK", "TA1CLK", "LCDS11"],
  pin50: ["P4_6", "TB0CLK", "TA4CLK", "LCDS10"],
  pin51: ["DVSS2", "DVSS"],
  pin52: ["DVCC2", "DVCC"],
  pin53: ["P4_7", "DMAE0", "LCDS9"],
  pin54: ["P5_0", "UCA2SIMO", "UCA2TXD", "LCDS8"],
  pin55: ["P5_1", "UCA2SOMI", "UCA2RXD", "LCDS7"],
  pin56: ["P5_2", "UCA2CLK", "LCDS6"],
  pin57: ["P5_3", "UCA2STE", "LCDS5"],
  pin58: ["P5_4", "UCB1CLK", "LCDS4"],
  pin59: ["P5_5", "TA0CLK", "UCB1SIMO", "UCB1SDA", "LCDS3"],
  pin60: ["P5_6", "UCB1SOMI", "UCB1SCL", "LCDS2"],
  pin61: ["P5_7", "UCB1STE", "LCDS1"],
  pin62: ["P6_0", "COUT", "LCDS0"],
  pin63: ["P6_4", "COM0"],
  pin64: ["P6_5", "COM1"],
  pin65: ["P6_6", "COM2", "LCDS38"],
  pin66: ["P6_7", "COM3", "LCDS37"],
  pin67: ["P7_0", "UCA2SIMO", "UCA2TXD", "ACLK", "COM4", "LCDS36"],
  pin68: ["P7_1", "UCA2SOMI", "UCA2RXD", "SMCLK", "COM5", "LCDS35"],
  pin69: ["P7_2", "UCA2CLK", "TB0_0", "COM6", "LCDS34"],
  pin70: ["P7_3", "UCA2STE", "TB0_1", "COM7", "LCDS33"],
  pin71: ["P6_1", "R03"],
  pin72: ["P6_2", "R13", "LCDREF"],
  pin73: ["P6_3", "R23"],
  pin74: ["R33", "LCDCAP"],
  pin75: ["DVSS3", "DVSS"],
  pin76: ["DVCC3", "DVCC"],
  pin77: ["P7_4", "TA0_1"],
  pin78: ["P7_5", "TA1_1"],
  pin79: ["P8_0", "UCA3STE", "TB0_2", "DMAE0"],
  pin80: ["P8_1", "UCA3CLK", "TB0_3", "TB0OUTH"],
  pin81: ["P8_2", "UCA3SOMI", "UCA3RXD", "MCLK"],
  pin82: ["P8_3", "UCA3SIMO", "UCA3TXD", "RTCCLK"],
  pin83: ["P7_6", "TA4_1", "DMAE0", "COUT"],
  pin84: ["P7_7", "TA0_2", "TB0OUTH", "COUT"],
  pin85: "CH1_IN",
  pin86: "CH1_OUT",
  pin87: ["PVSS1", "PVSS"],
  pin88: "PVCC",
  pin89: ["PVSS2", "PVSS"],
  pin90: "CH0_OUT",
  pin91: "CH0_IN",
  pin92: ["P8_4", "UCB1CLK", "TA1_2", "A10"],
  pin93: ["P8_5", "UCB1SIMO", "UCB1SDA", "A11"],
  pin94: ["P8_6", "UCB1SOMI", "UCB1SCL", "A12"],
  pin95: ["P8_7", "UCB1STE", "USSXT_BOUT", "A13"],
  pin96: ["AVSS5", "AVSS"],
  pin97: "USSXTIN",
  pin98: "USSXTOUT",
  pin99: ["AVSS1", "AVSS"],
  pin100: ["AVCC1", "AVCC"],
} as const;

/** MSP430FR6007 in TI's 100-pin PZ LQFP package. */
export const MSP430FR6007IPZ = (
  props: ChipProps<typeof MSP430FR6007IPZ_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="MSP430FR6007IPZ"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/msp430fr6007.pdf"
    footprint="lqfp100_w14mm_h14mm_p0.5mm_pw0.3mm_pl1.5mm"
    pinLabels={MSP430FR6007IPZ_PIN_LABELS}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: Array.from({ length: 25 }, (_, index) => index + 1),
      },
      bottomSide: {
        direction: "left-to-right",
        pins: Array.from({ length: 25 }, (_, index) => index + 26),
      },
      rightSide: {
        direction: "bottom-to-top",
        pins: Array.from({ length: 25 }, (_, index) => index + 51),
      },
      topSide: {
        direction: "right-to-left",
        pins: Array.from({ length: 25 }, (_, index) => index + 76),
      },
    }}
    schWidth="11mm"
    schHeight="11mm"
    {...props}
  />
);

export default MSP430FR6007IPZ;
