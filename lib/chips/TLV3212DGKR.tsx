import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT1", "1"],
  pin2: ["IN1", "2", "IN1_2"],
  pin3: ["IN1", "3", "IN1_3"],
  pin4: ["V", "4", "V_4"],
  pin5: ["IN2", "5", "IN2_5"],
  pin6: ["IN2", "6", "IN2_6"],
  pin7: ["OUT2", "7"],
  pin8: ["V", "8", "V_8"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "input",
  pin3: "input",
  pin4: "unknown",
  pin5: "input",
  pin6: "input",
  pin7: "output",
  pin8: "unknown",
} as const;

export const TLV3212DGKR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DGK0008A; donor OPA2188AIDGKR (JLCPCB C2865632)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      manufacturerPartNumber="TLV3212DGKR"
      footprint="dfn8_pillpads_p0.65mm_w5.8498mm_pw0.38mm_pl1.45mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default TLV3212DGKR;
