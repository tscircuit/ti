import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PB", "1"],
  pin2: ["GND", "2"],
  pin3: ["VDD", "3"],
  pin4: ["SPT", "4"],
  pin5: ["LPT", "5"],
  pin6: ["RESET", "6"],
  pin7: ["INT", "7"],
  pin8: ["KILL", "8"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "ground",
  pin3: "power",
  pin4: "unknown",
  pin5: "output",
  pin6: "output",
  pin7: "output",
  pin8: "input",
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin3: { requiresPower: true },
} as const;

export const TPS3424A11C13ADRLR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DRL0008A; donor TPS631000DRLR (JLCPCB C5219190)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS3424A11C13ADRLR"
      footprint="soic_p0.5001mm_w1.9602mm_pw0.28mm_pl0.68mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default TPS3424A11C13ADRLR;
