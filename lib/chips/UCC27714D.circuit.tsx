import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "HI",
  pin2: "LI",
  pin3: "VSS",
  pin4: "NC_EN",
  pin5: "COM",
  pin6: "LO",
  pin7: "VDD",
  pin8: "NC_8",
  pin9: "NC_9",
  pin10: "NC_10",
  pin11: "HS",
  pin12: "HO",
  pin13: "HB",
  pin14: "NC_14",
} as const;

/** UCC27714 600-V high-side/low-side gate driver. */
export const UCC27714D = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="UCC27714D"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/ucc27714.pdf"
    footprint="soic14_p1.27mm_w6mm_pw0.6mm_pl1.9mm_pillpads"
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: [13, 12, 11, 7, 6, 5, 3] },
      rightSide: { direction: "top-to-bottom", pins: [1, 2, 4, 8, 9, 10, 14] },
    }}
    noConnect={["pin4", "pin8", "pin9", "pin10", "pin14"]}
    {...props}
  />
);

export default UCC27714D;
