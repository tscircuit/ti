import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["HI", "1"],
  pin2: ["LI", "2"],
  pin3: ["COM", "3"],
  pin4: ["LO", "4"],
  pin5: ["VDD", "5"],
  pin6: ["HS", "6"],
  pin7: ["HO", "7"],
  pin8: ["HB", "8"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "input",
  pin3: "unknown",
  pin4: "output",
  pin5: "power",
  pin6: "unknown",
  pin7: "output",
  pin8: "input",
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
} as const;

export const UCC27734DR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing D0008B; donor UCC5350SBDR (JLCPCB C2878307)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="UCC27734DR"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default UCC27734DR;
