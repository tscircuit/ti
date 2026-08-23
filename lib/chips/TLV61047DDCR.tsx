import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SW", "1"],
  pin2: ["GND", "2"],
  pin3: ["FB", "3"],
  pin4: ["EN", "4"],
  pin5: ["VIN", "5"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "ground",
  pin3: "input",
  pin4: "control",
  pin5: "power",
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const TLV61047DDCR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DDC0005A; donor TPS78233DDCR (JLCPCB C14878)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TLV61047DDCR"
      footprint="dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)"
      {...props}
    />
  );
};

export default TLV61047DDCR;
