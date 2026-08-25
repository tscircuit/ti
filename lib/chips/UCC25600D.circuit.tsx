import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "DT",
  pin2: "RT",
  pin3: "OC",
  pin4: "SS",
  pin5: "GD2",
  pin6: "GND",
  pin7: "VCC",
  pin8: "GD1",
} as const;

/** UCC25600 8-pin high-performance resonant-mode controller. */
export const UCC25600D = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="UCC25600D"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/ucc25600.pdf"
    footprint="soic8_p1.27mm_w6mm_pw0.6mm_pl1.9mm_pillpads"
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: [8, 5, 7, 6] },
      rightSide: { direction: "top-to-bottom", pins: [1, 2, 3, 4] },
    }}
    {...props}
  />
);

export default UCC25600D;
