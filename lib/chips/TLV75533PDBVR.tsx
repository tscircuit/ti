import type { ChipProps } from "@tscircuit/props";
import "tscircuit";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: "IN",
  pin2: "GND",
  pin3: "EN",
  pin4: "NC",
  pin5: "OUT",
} as const;

/** TLV755P 3.3 V fixed-output regulator in the 5-pin SOT-23 package. */
export const TLV75533PDBVR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    {...getTiSchematicLayout(pinLabels)}
    manufacturerPartNumber="TLV75533PDBVR"
    supplierPartNumbers={{ jlcpcb: ["C404027"] }}
    footprint="sot25_w2.6mm_pl1.1mm_pin1location(rightside,bottom)"
    pinLabels={pinLabels}
    {...props}
  />
);

export default TLV75533PDBVR;
