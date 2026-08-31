import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const LM73605QRNPRQ1_PIN_LABELS = {
  pin1: "SW_1",
  pin2: "SW_2",
  pin3: "SW_3",
  pin4: "SW_4",
  pin5: "SW_5",
  pin6: "CBOOT",
  pin7: "VCC",
  pin8: "BIAS",
  pin9: "RT",
  pin10: "SS_TRK",
  pin11: "FB",
  pin12: "NC_12",
  pin13: "NC_13",
  pin14: "NC_14",
  pin15: "NC_15",
  pin16: "PGOOD",
  pin17: "SYNC_MODE",
  pin18: "EN",
  pin19: "AGND",
  pin20: "VIN_20",
  pin21: "VIN_21",
  pin22: "VIN_22",
  pin23: "PGND_23",
  pin24: "PGND_24",
  pin25: "PGND_25",
  pin26: "PGND_26",
  pin27: "NC_27",
  pin28: "NC_28",
  pin29: "NC_29",
  pin30: "NC_30",
  pin31: ["DAP", "PAD"],
} as const;

/** LM73605-Q1 RNP pinout, verified against TI datasheet SNVSB12B. */
export const LM73605QRNPRQ1 = (
  props: ChipProps<typeof LM73605QRNPRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="LM73605QRNPRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lm73605-q1.pdf"
    footprint="kicad:Package_DFN_QFN/Texas_RNP0030B_WQFN-30-1EP_4x6mm_P0.5mm_EP1.8x4.5mm"
    pinLabels={LM73605QRNPRQ1_PIN_LABELS}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [20, 21, 22, 18, 7, 9, 17, 12, 13, 14, 15, 27, 28, 29, 30],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [6, 1, 2, 3, 4, 5, 16, 8, 11, 10, 19, 23, 24, 25, 26, 31],
      },
    }}
    {...props}
  />
);

export default LM73605QRNPRQ1;
