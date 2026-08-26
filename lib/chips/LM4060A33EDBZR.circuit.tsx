import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: ["CATHODE", "K"],
  pin2: ["ANODE", "A"],
  pin3: "DNC",
} as const;

/** 3.3 V precision shunt reference in TI's 3-pin DBZ SOT-23 package. */
export const LM4060A33EDBZR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="LM4060A33EDBZR"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lm4060.pdf"
    footprint="sot23_3"
    pinLabels={pinLabels}
    noConnect={["DNC"]}
    noSchematicRepresentation
    {...props}
  />
);

export default LM4060A33EDBZR;
