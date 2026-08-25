import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "SW_1",
  pin2: "SW_2",
  pin3: "CBOOT",
  pin4: "VCC",
  pin5: "BIAS",
  pin6: "SYNC",
  pin7: "FPWM",
  pin8: "RESET",
  pin9: "FB",
  pin10: "AGND",
  pin11: "EN",
  pin12: "VIN_1",
  pin13: "VIN_2",
  pin14: "NC",
  pin15: "PGND_1",
  pin16: "PGND_2",
  pin17: "PAD",
} as const;

/** LM53603-Q1 3-A automotive buck regulator in the PWP HTSSOP-16 package. */
export const LM536035QPWPRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="LM536035QPWPRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lm53603-q1.pdf"
    footprint="soic16_p0.65mm_w5.9mm_pw0.45mm_pl1.4mm_thermalpad2.48mmx3.37mm"
    schWidth="4.8mm"
    schHeight="5.8mm"
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [12, 13, 11, 6, 7, 5, 9],
      },
      rightSide: {
        direction: "bottom-to-top",
        pins: [1, 2, 3, 4, 8],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [10, 15, 16, 17],
      },
    }}
    noConnect={["pin14"]}
    {...props}
  />
);

export default LM536035QPWPRQ1;
