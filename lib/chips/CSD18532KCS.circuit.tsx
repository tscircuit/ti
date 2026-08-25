import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: ["G", "GATE"],
  pin2: ["D", "DRAIN"],
  pin3: ["S", "SOURCE"],
} as const;

/** CSD18532KCS 60-V N-channel NexFET power MOSFET. */
export const CSD18532KCS = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="CSD18532KCS"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/csd18532kcs.pdf"
    footprint="to220"
    pinLabels={pinLabels}
    {...props}
  />
);

export default CSD18532KCS;
