import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["P1_0", "TA0_1", "DMAE0", "RTCCLK", "A0", "C0", "VREF", "VEREF", "1"],
  pin2: ["P1_1", "TA0_2", "TA1CLK", "COUT", "A1", "C1", "VREF", "VEREF", "2"],
  pin3: ["P1_2", "TA1_1", "TA0CLK", "COUT", "A2", "C2", "3"],
  pin4: ["P3_0", "A12", "C12", "4"],
  pin5: ["P3_1", "A13", "C13", "5"],
  pin6: ["P3_2", "A14", "C14", "6"],
  pin7: ["P3_3", "A15", "C15", "7"],
  pin8: ["P4_7", "8"],
  pin9: ["P1_3", "TA1_2", "UCB0STE", "A3", "C3", "9"],
  pin10: ["P1_4", "TB0_1", "UCA0STE", "A4", "C4", "10"],
  pin11: ["P1_5", "TB0_2", "UCA0CLK", "A5", "C5", "11"],
  pin12: ["PJ_0", "TDO", "TB0OUTH", "SMCLK", "SRSCG1", "C6", "12"],
  pin13: ["PJ_1", "TDI", "TCLK", "MCLK", "SRSCG0", "C7", "13"],
  pin14: ["PJ_2", "TMS", "ACLK", "SROSCOFF", "C8", "14"],
  pin15: ["PJ_3", "TCK", "SRCPUOFF", "C9", "15"],
  pin16: ["P4_0", "A8", "16"],
  pin17: ["P4_1", "A9", "17"],
  pin18: ["P4_2", "A10", "18"],
  pin19: ["P4_3", "A11", "19"],
  pin20: ["P2_5", "TB0_0", "UCA1TXD", "UCA1SIMO", "20"],
  pin21: ["P2_6", "TB0_1", "UCA1RXD", "UCA1SOMI", "21"],
  pin22: ["TEST", "SBWTCK", "22"],
  pin23: ["RST", "NMI", "SBWTDIO", "23"],
  pin24: ["P2_0", "TB0_6", "UCA0TXD", "UCA0SIMO", "TB0CLK", "ACLK", "24"],
  pin25: ["P2_1", "TB0_0", "UCA0RXD", "UCA0SOMI", "25"],
  pin26: ["P2_2", "TB0_2", "UCB0CLK", "26"],
  pin27: ["P3_4", "TB0_3", "SMCLK", "27"],
  pin28: ["P3_5", "TB0_4", "COUT", "28"],
  pin29: ["P3_6", "TB0_5", "29"],
  pin30: ["P3_7", "TB0_6", "30"],
  pin31: ["P1_6", "TB0_3", "UCB0SIMO", "UCB0SDA", "TA0_0", "31"],
  pin32: ["P1_7", "TB0_4", "UCB0SOMI", "UCB0SCL", "TA1_0", "32"],
  pin33: ["P4_4", "TB0_5", "33"],
  pin34: ["P4_5", "34"],
  pin35: ["P4_6", "35"],
  pin36: ["DVSS", "36"],
  pin37: ["DVCC", "37"],
  pin38: ["P2_7", "38"],
  pin39: ["P2_3", "TA0_0", "UCA1STE", "A6", "C10", "39"],
  pin40: ["P2_4", "TA1_0", "UCA1CLK", "A7", "C11", "40"],
  pin41: ["AVSS", "41", "AVSS_41"],
  pin42: ["PJ_6", "HFXIN", "42"],
  pin43: ["PJ_7", "HFXOUT", "43"],
  pin44: ["AVSS", "44", "AVSS_44"],
  pin45: ["PJ_4", "LFXIN", "45"],
  pin46: ["PJ_5", "LFXOUT", "46"],
  pin47: ["AVSS", "47", "AVSS_47"],
  pin48: ["AVCC", "48"],
  pin49: ["QFN_PAD", "PAD"],
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
  pin10: "bidirectional",
  pin11: "bidirectional",
  pin12: "bidirectional",
  pin13: "bidirectional",
  pin14: "bidirectional",
  pin15: "bidirectional",
  pin16: "bidirectional",
  pin17: "bidirectional",
  pin18: "bidirectional",
  pin19: "bidirectional",
  pin20: "bidirectional",
  pin21: "bidirectional",
  pin22: "control",
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
  pin36: "ground",
  pin37: "power",
  pin38: "bidirectional",
  pin39: "bidirectional",
  pin40: "bidirectional",
  pin41: "ground",
  pin42: "bidirectional",
  pin43: "bidirectional",
  pin44: "ground",
  pin45: "bidirectional",
  pin46: "bidirectional",
  pin47: "ground",
  pin48: "power",
  pin49: "ground",
} as const;

const pinAttributes = {
  pin36: { requiresGround: true },
  pin37: { requiresPower: true },
  pin41: { requiresGround: true },
  pin44: { requiresGround: true },
  pin47: { requiresGround: true },
  pin48: { requiresPower: true },
  pin49: { requiresGround: true },
} as const;

export const MSP430FR5969IRGZR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RGZ0048B; donor DP83867CRRGZR (JLCPCB C544766)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="MSP430FR5969IRGZR"
      footprint="qfn48_thermalpad4.1mmx4.1mm_pillpads_p0.5004mm_h7.9995mm_pw0.28mm_pl0.85mm_pin1location(bottomside,left)"
      {...props}
    />
  );
};

export default MSP430FR5969IRGZR;
