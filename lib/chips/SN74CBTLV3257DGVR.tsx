import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S"],
  pin2: ["1B1"],
  pin3: ["1B2"],
  pin4: ["1A"],
  pin5: ["2B1"],
  pin6: ["2B2"],
  pin7: ["2A"],
  pin8: ["GND"],
  pin9: ["3A"],
  pin10: ["3B2"],
  pin11: ["3B1"],
  pin12: ["4A"],
  pin13: ["4B2"],
  pin14: ["4B1"],
  pin15: ["O"],
  pin16: ["VCC"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const SN74CBTLV3257DGVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2674501"],
      }}
      manufacturerPartNumber="SN74CBTLV3257DGVR"
      footprint="dfn16_pillpads_p0.4mm_w7.3741mm_pw0.2mm_pl1.687mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default SN74CBTLV3257DGVR;
