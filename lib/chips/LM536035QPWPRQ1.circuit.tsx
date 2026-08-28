import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: ["SW", "SW_1"],
  pin2: ["SW", "SW_2"],
  pin3: "CBOOT",
  pin4: "VCC",
  pin5: "BIAS",
  pin6: "SYNC",
  pin7: "FPWM",
  pin8: "RESET",
  pin9: "FB",
  pin10: "AGND",
  pin11: "EN",
  pin12: ["VIN", "VIN_1"],
  pin13: ["VIN", "VIN_2"],
  pin14: "NC",
  pin15: ["PGND", "PGND_1"],
  pin16: ["PGND", "PGND_2"],
  pin17: "PAD",
} as const;

/** LM53603-Q1 3-A automotive buck regulator in the PWP HTSSOP-16 package. */
export const LM536035QPWPRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="LM536035QPWPRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lm53603-q1.pdf"
    footprint="soic16_p0.65mm_w5.9mm_pw0.45mm_pl1.4mm_thermalpad2.48mmx3.37mm"
    schWidth="3.0707mm"
    schHeight="4.6061mm"
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [12, 13, 11, 8, 4, 7, 6, 14],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [3, 1, 2, 9, 5, 10, 15, 16, 17],
      },
    }}
    noConnect={["pin14"]}
    {...props}
  />
);

export default LM536035QPWPRQ1;
