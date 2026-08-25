import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "SYNC",
  pin2: "EN_TOFF",
  pin3: "TON",
  pin4: "VCC",
  pin5: "GATE",
  pin6: "GND",
  pin7: "VS",
  pin8: "VD",
} as const;

/** UCC24610 synchronous-rectifier controller. */
export const UCC24610D = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="UCC24610D"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/ucc24610.pdf"
    footprint="soic8_p1.27mm_w6mm_pw0.6mm_pl1.9mm_pillpads"
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: [8, 7, 6, 5] },
      rightSide: { direction: "top-to-bottom", pins: [1, 2, 3, 4] },
    }}
    noConnect={["pin1"]}
    {...props}
  />
);

export default UCC24610D;
