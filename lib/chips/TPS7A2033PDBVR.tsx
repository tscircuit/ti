import type { ChipProps } from "@tscircuit/props";
import "tscircuit";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: "VIN",
  pin2: "GND",
  pin3: "VEN",
  pin4: "NC",
  pin5: "VOUT",
} as const;

/** TPS7A20 3.3 V fixed-output regulator in the 5-pin SOT-23 package. */
export const TPS7A2033PDBVR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    {...getTiSchematicLayout(pinLabels)}
    manufacturerPartNumber="TPS7A2033PDBVR"
    supplierPartNumbers={{ jlcpcb: ["C2862740"] }}
    footprint="sot25_w1.5mm_pw0.6mm_pl1.1mm_pin1location(rightside,bottom)"
    pinLabels={pinLabels}
    {...props}
  />
);

export default TPS7A2033PDBVR;
