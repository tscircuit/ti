import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND", "1"],
  pin2: ["GD2", "2"],
  pin3: ["VCC", "3"],
  pin4: ["SUFG", "4"],
  pin5: ["SUFS", "5"],
  pin6: ["AGND", "6"],
  pin7: ["MD_SEL", "PS_ON", "7"],
  pin8: ["VBULK", "8"],
  pin9: ["AC2", "9"],
  pin10: ["AC1", "10"],
  pin11: ["LLC_CS", "11"],
  pin12: ["FB", "12"],
  pin13: ["PFC_CS", "13"],
  pin14: ["GD1", "14"],
  pin15: ["AC_DET", "15"],
  pin16: ["PFC_GD", "16"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "output",
  pin3: "power",
  pin4: "output",
  pin5: "input",
  pin6: "ground",
  pin7: "control",
  pin8: "input",
  pin9: "input",
  pin10: "input",
  pin11: "control",
  pin12: "input",
  pin13: "control",
  pin14: "output",
  pin15: "output",
  pin16: "output",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin3: { requiresPower: true },
  pin6: { requiresGround: true },
} as const;

export const UCC29950DR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing D0016A; donor AM26C31IDR (JLCPCB C34923)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="UCC29950DR"
      footprint="soic16_pillpads_w7.4421mm_pw0.602mm_pl1.971mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default UCC29950DR;
