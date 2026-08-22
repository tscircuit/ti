import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["V", "1"],
  pin2: ["R1", "2"],
  pin3: ["I", "O1", "3", "I_3"],
  pin4: ["ALERT1", "4"],
  pin5: ["GND", "5"],
  pin6: ["ALERT2", "6"],
  pin7: ["I", "O2", "7", "I_7"],
  pin8: ["R2", "8"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "input",
  pin3: "bidirectional",
  pin4: "output",
  pin5: "ground",
  pin6: "output",
  pin7: "bidirectional",
  pin8: "input",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin5: { requiresGround: true },
} as const;

export const TMP107BIDR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing D0008A; donor LM393BIDR (JLCPCB C2865059)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TMP107BIDR"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default TMP107BIDR;
