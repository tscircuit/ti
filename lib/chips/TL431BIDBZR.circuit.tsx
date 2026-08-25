import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: ["K", "CATHODE"],
  pin2: ["REF", "REFERENCE"],
  pin3: ["A", "ANODE"],
} as const;

/** TL431B adjustable shunt regulator in DBZ (SOT-23) package. */
export const TL431BIDBZR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="TL431BIDBZR"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tl431.pdf"
    footprint="sot23"
    pinLabels={pinLabels}
    {...props}
  />
);

export default TL431BIDBZR;
