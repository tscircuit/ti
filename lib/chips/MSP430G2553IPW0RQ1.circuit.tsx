import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const MSP430G2553IPW0RQ1_PIN_LABELS = {
  pin1: "DVCC",
  pin2: ["P1_0", "TA0CLK", "ACLK", "A0", "CA0"],
  pin3: ["P1_1", "TA0_0", "UCA0RXD", "UCA0SOMI", "A1", "CA1"],
  pin4: ["P1_2", "TA0_1", "UCA0TXD", "UCA0SIMO", "A2", "CA2"],
  pin5: ["P1_3", "ADC10CLK", "CAOUT", "VREF_N", "VEREF_N", "A3", "CA3"],
  pin6: [
    "P1_4",
    "SMCLK",
    "UCB0STE",
    "UCA0CLK",
    "VREF_P",
    "VEREF_P",
    "A4",
    "CA4",
    "TCK",
  ],
  pin7: ["P1_5", "TA0_0", "UCB0CLK", "UCA0STE", "A5", "CA5", "TMS"],
  pin8: ["P2_0", "TA1_0"],
  pin9: ["P2_1", "TA1_1"],
  pin10: ["P2_2", "TA1_1"],
  pin11: ["P2_3", "TA1_0"],
  pin12: ["P2_4", "TA1_2"],
  pin13: ["P2_5", "TA1_2"],
  pin14: ["P1_6", "TA0_1", "UCB0SOMI", "UCB0SCL", "A6", "CA6", "TDI", "TCLK"],
  pin15: ["P1_7", "CAOUT", "UCB0SIMO", "UCB0SDA", "A7", "CA7", "TDO", "TDI"],
  pin16: ["RST_NMI_SBWTDIO", "RESET", "SBWTDIO"],
  pin17: ["TEST_SBWTCK", "TEST", "SBWTCK"],
  pin18: ["P2_7", "XOUT"],
  pin19: ["P2_6", "XIN", "TA0_1"],
  pin20: "DVSS",
} as const;

const bidirectionalPin = {
  requiresPower: true,
  providesPower: true,
} as const;

/** Automotive MSP430G2553-Q1 in the 20-pin PW TSSOP package. */
export const MSP430G2553IPW0RQ1 = (
  props: ChipProps<typeof MSP430G2553IPW0RQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="MSP430G2553IPW0RQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/msp430g2553-q1.pdf"
    footprint="tssop20"
    pinLabels={MSP430G2553IPW0RQ1_PIN_LABELS}
    pinAttributes={{
      DVCC: {
        mustBeConnected: true,
        requiresPower: true,
        shouldHaveDecouplingCapacitor: true,
        recommendedDecouplingCapacitorCapacitance: "0.1uF",
      },
      P1_0: bidirectionalPin,
      P1_1: bidirectionalPin,
      P1_2: bidirectionalPin,
      P1_3: bidirectionalPin,
      P1_4: bidirectionalPin,
      P1_5: bidirectionalPin,
      P2_0: bidirectionalPin,
      P2_1: bidirectionalPin,
      P2_2: bidirectionalPin,
      P2_3: bidirectionalPin,
      P2_4: bidirectionalPin,
      P2_5: bidirectionalPin,
      P1_6: bidirectionalPin,
      P1_7: bidirectionalPin,
      RST_NMI_SBWTDIO: { requiresPower: true },
      TEST_SBWTCK: { requiresPower: true },
      P2_7: bidirectionalPin,
      P2_6: bidirectionalPin,
      DVSS: { requiresGround: true },
    }}
    schWidth="5mm"
    schHeight="7mm"
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11],
      },
    }}
    {...props}
  />
);

export const MSP430G2553Q1 = MSP430G2553IPW0RQ1;

export default MSP430G2553IPW0RQ1;
