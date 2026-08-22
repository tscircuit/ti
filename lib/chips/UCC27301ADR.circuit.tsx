import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["HB"],
  pin3: ["HO"],
  pin4: ["HS"],
  pin5: ["HI"],
  pin6: ["LI"],
  pin7: ["VSS"],
  pin8: ["LO"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin7: { requiresGround: true },
} as const;

export const UCC27301ADR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C41558418"],
      }}
      manufacturerPartNumber="UCC27301ADR"
      footprint="soic8_pillpads_w7mm_pw0.61mm_pl1.6mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default UCC27301ADR;
