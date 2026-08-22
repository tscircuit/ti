import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT", "1"],
  pin2: ["GND", "2"],
  pin3: ["IN", "3", "IN_3"],
  pin4: ["IN", "4", "IN_4"],
  pin5: ["VCC", "5"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "ground",
  pin3: "input",
  pin4: "input",
  pin5: "power",
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const TL391LVDBVR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DBV0005A; donor TLV9001IDBVR (JLCPCB C398363)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TL391LVDBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)"
      {...props}
    />
  );
};

export default TL391LVDBVR;
