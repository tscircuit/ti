import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN"],
  pin2: ["GND"],
  pin3: ["pin3"],
  pin4: ["BYPASS"],
  pin5: ["VOUT"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const LP2985AIM5_3_3_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C16085"],
      }}
      manufacturerPartNumber="LP2985AIM5-3.3/NOPB"
      footprint="dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C16085.obj?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C16085.step?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0,
          y: -0.000012700000070253736,
          z: -0.049083,
        },
      }}
      {...props}
    />
  );
};

export default LP2985AIM5_3_3_NOPB;
