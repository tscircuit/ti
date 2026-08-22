import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["EN", "1"],
  pin2: ["VIN", "2"],
  pin3: ["CS", "3"],
  pin4: ["VOUT", "4"],
  pin5: ["GND", "5"],
} as const;

const pinRoles = {
  pin1: "control",
  pin2: "power",
  pin3: "control",
  pin4: "output",
  pin5: "ground",
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin5: { requiresGround: true },
} as const;

export const REF2125IDBVR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DBV0005A; donor TLV9001IDBVR (JLCPCB C398363)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="REF2125IDBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)"
      {...props}
    />
  );
};

export default REF2125IDBVR;
