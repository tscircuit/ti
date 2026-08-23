import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD1", "1"],
  pin2: ["INP", "2"],
  pin3: ["INN", "3"],
  pin4: ["GND1", "4"],
  pin5: ["GND2", "5"],
  pin6: ["OUTN", "6"],
  pin7: ["OUTP", "7"],
  pin8: ["VDD2", "8"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "input",
  pin3: "input",
  pin4: "ground",
  pin5: "ground",
  pin6: "output",
  pin7: "output",
  pin8: "power",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
  pin5: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const AMC0300DDWVR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DWV0008A; donor UCC5390ECDWVR (JLCPCB C882869)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="AMC0300DDWVR"
      footprint="soic_w12.9002mm_pw0.7mm_pl2mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default AMC0300DDWVR;
