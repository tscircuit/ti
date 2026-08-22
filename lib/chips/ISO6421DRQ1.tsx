import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1", "1"],
  pin2: ["OUTA", "2"],
  pin3: ["INB", "3"],
  pin4: ["GND1", "4"],
  pin5: ["GND2", "5"],
  pin6: ["OUTB", "6"],
  pin7: ["INA", "7"],
  pin8: ["VCC2", "8"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "output",
  pin3: "input",
  pin4: "ground",
  pin5: "ground",
  pin6: "output",
  pin7: "input",
  pin8: "power",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
  pin5: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const ISO6421DRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing D0008B; donor UCC5350SBDR (JLCPCB C2878307)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="ISO6421DRQ1"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default ISO6421DRQ1;
