import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN", "1", "IN_1"],
  pin2: ["GND", "2"],
  pin3: ["A1", "3"],
  pin4: ["A2", "4"],
  pin5: ["OUT", "5"],
  pin6: ["VS", "6"],
  pin7: ["OFFSET", "7"],
  pin8: ["IN", "8", "IN_8"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "ground",
  pin3: "output",
  pin4: "input",
  pin5: "output",
  pin6: "power",
  pin7: "input",
  pin8: "input",
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const LMP8601MA_NOPB = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing D0008A; donor LM393BIDR (JLCPCB C2865059)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="LMP8601MA/NOPB"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default LMP8601MA_NOPB;
