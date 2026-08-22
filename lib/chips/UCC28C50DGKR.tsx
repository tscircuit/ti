import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["COMP", "1"],
  pin2: ["FB", "2"],
  pin3: ["CS", "3"],
  pin4: ["RT", "CT", "4"],
  pin5: ["GND", "5"],
  pin6: ["OUT", "6"],
  pin7: ["VDD", "7"],
  pin8: ["VREF", "8"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "input",
  pin3: "control",
  pin4: "bidirectional",
  pin5: "ground",
  pin6: "output",
  pin7: "power",
  pin8: "output",
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin7: { requiresPower: true },
} as const;

export const UCC28C50DGKR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DGK0008A; donor OPA2188AIDGKR (JLCPCB C2865632)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="UCC28C50DGKR"
      footprint="dfn8_pillpads_p0.65mm_w5.8498mm_pw0.38mm_pl1.45mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default UCC28C50DGKR;
