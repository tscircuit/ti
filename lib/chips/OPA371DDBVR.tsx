import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT", "1"],
  pin2: ["V", "2", "V_2"],
  pin3: ["IN", "3", "IN_3"],
  pin4: ["IN", "4", "IN_4"],
  pin5: ["V", "5", "V_5"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "input",
  pin3: "input",
  pin4: "input",
  pin5: "input",
} as const;

export const OPA371DDBVR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DBV0005A; donor TLV9001IDBVR (JLCPCB C398363)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      manufacturerPartNumber="OPA371DDBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)"
      {...props}
    />
  );
};

export default OPA371DDBVR;
