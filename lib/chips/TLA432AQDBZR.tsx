import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["REF", "1"],
  pin2: ["CATHODE", "2"],
  pin3: ["ANODE", "3"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "bidirectional",
  pin3: "output",
} as const;

export const TLA432AQDBZR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DBZ0003A; donor TLV803SDBZR (JLCPCB C132016)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      manufacturerPartNumber="TLA432AQDBZR"
      footprint="sot23w_p0.9813mm_pw0.6494mm_pin1location(rightside,bottom)"
      {...props}
    />
  );
};

export default TLA432AQDBZR;
