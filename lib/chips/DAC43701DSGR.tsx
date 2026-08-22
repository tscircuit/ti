import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPI", "1"],
  pin2: ["SCL", "2"],
  pin3: ["SDA", "3"],
  pin4: ["CAP", "4"],
  pin5: ["AGND", "5"],
  pin6: ["VDD", "6"],
  pin7: ["FB", "7"],
  pin8: ["OUT", "8"],
  pin9: ["EP", "9"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "control",
  pin3: "bidirectional",
  pin4: "input",
  pin5: "ground",
  pin6: "power",
  pin7: "input",
  pin8: "output",
  pin9: "ground",
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin6: { requiresPower: true },
  pin9: { requiresGround: true },
} as const;

export const DAC43701DSGR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DSG0008A; donor TPS61021ADSGR (JLCPCB C193037)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="DAC43701DSGR"
      footprint="dfn8_thermalpad0.9mmx1.6mm_p0.5001mm_w2.4209mm_pw0.25mm_pl0.521mm"
      {...props}
    />
  );
};

export default DAC43701DSGR;
