import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IO", "1"],
  pin2: ["GND", "2"],
} as const;

const pinRoles = {
  pin1: "bidirectional",
  pin2: "ground",
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const ESD751DYAR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DYA0002A; donor TPD1E10B06DYAR (JLCPCB C3712135)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="ESD751DYAR"
      footprint="res_p1.4999mm_pw0.6mm_ph0.4mm"
      {...props}
    />
  );
};

export default ESD751DYAR;
