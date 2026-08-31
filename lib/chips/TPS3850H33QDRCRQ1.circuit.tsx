import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const TPS3850H33QDRCRQ1_PIN_LABELS = {
  pin1: "VDD",
  pin2: "CWD",
  pin3: "SET0",
  pin4: "CRST",
  pin5: "GND",
  pin6: "SET1",
  pin7: "WDI",
  pin8: ["WDO", "nWDO"],
  pin9: ["RESET", "nRESET"],
  pin10: "SENSE",
  pin11: ["PAD", "THERMAL_PAD"],
} as const;

/** TPS3850-Q1 DRC pinout, verified against TI datasheet SBVS264B. */
export const TPS3850H33QDRCRQ1 = (
  props: ChipProps<typeof TPS3850H33QDRCRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="TPS3850H33QDRCRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tps3850-q1.pdf"
    footprint="kicad:Package_SON/Texas_DRC0010J"
    pinLabels={TPS3850H33QDRCRQ1_PIN_LABELS}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: [1, 2, 3, 6, 4, 10] },
      rightSide: { direction: "top-to-bottom", pins: [9, 7, 8, 5, 11] },
    }}
    {...props}
  />
);

export default TPS3850H33QDRCRQ1;
