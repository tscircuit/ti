import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IO", "1", "IO_1"],
  pin2: ["IO", "2", "IO_2"],
} as const;

const pinRoles = {
  pin1: "bidirectional",
  pin2: "bidirectional",
} as const;

export const TPD1E0B04DPLT = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DPL0002A; official source https://www.ti.com/lit/gpn/TPD1E0B04
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      manufacturerPartNumber="TPD1E0B04DPLT"
      footprint="0201"
      {...props}
    />
  );
};

export default TPD1E0B04DPLT;
