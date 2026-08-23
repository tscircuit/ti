import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VS_P"],
  pin2: ["VO"],
  pin3: ["GND"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
} as const;

export const LM62CIM3_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2877909"],
      }}
      manufacturerPartNumber="LM62CIM3/NOPB"
      footprint="sot23w_p0.9813mm_pw0.6494mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2877909.obj?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2877909.step?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0.000012700000070253736,
          y: -0.000012699999956566899,
          z: 0.050795,
        },
      }}
      {...props}
    />
  );
};

export default LM62CIM3_NOPB;
