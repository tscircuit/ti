import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "SYNCOUT",
  pin2: "OPT",
  pin3: "CSN",
  pin4: "CSP",
  pin5: "VIN",
  pin6: "UVLO",
  pin7: "SS",
  pin8: "SYNCIN_RT",
  pin9: "AGND",
  pin10: "FB",
  pin11: "COMP",
  pin12: "SLOPE",
  pin13: "MODE",
  pin14: "RES",
  pin15: "PGND",
  pin16: "LO",
  pin17: "VCC",
  pin18: "SW",
  pin19: "HO",
  pin20: "BST",
  pin21: "PAD",
} as const;

/** LM25122-Q1 synchronous boost controller in the PWP HTSSOP-20 package. */
export const LM25122QPWPTQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="LM25122QPWPTQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lm25122-q1.pdf"
    footprint="soic20_p0.65mm_w5.9mm_pw0.45mm_pl1.4mm_thermalpad3mmx4.2mm"
    schWidth="5.2mm"
    schHeight="6.4mm"
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [5, 6, 12, 11, 10, 7, 14, 8, 1, 2, 9],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [4, 3, 13, 17, 20, 18, 16, 19, 15, 21],
      },
    }}
    {...props}
  />
);

export default LM25122QPWPTQ1;
