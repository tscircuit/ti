import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["R", "1"],
  pin2: ["RE_N", "2"],
  pin3: ["DE", "3"],
  pin4: ["D", "4"],
  pin5: ["GND", "5"],
  pin6: ["A", "6"],
  pin7: ["B", "7"],
  pin8: ["VCC", "8"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "input",
  pin3: "input",
  pin4: "input",
  pin5: "ground",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "power",
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const SN65HVD96DR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing D0008A; donor LM393BIDR (JLCPCB C2865059)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="SN65HVD96DR"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default SN65HVD96DR;
