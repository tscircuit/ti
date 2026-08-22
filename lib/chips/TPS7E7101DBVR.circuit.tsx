import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN", "1"],
  pin2: ["GND", "2"],
  pin3: ["EN", "3"],
  pin4: ["NC", "ADJ", "4"],
  pin5: ["OUT", "5"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "ground",
  pin3: "control",
  pin4: "no-connect",
  pin5: "output",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
  pin4: { doNotConnect: true },
} as const;

export const TPS7E7101DBVR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DBV0005A; donor TLV9001IDBVR (JLCPCB C398363)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS7E7101DBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)"
      {...props}
    />
  );
};

export default TPS7E7101DBVR;
