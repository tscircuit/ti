import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IO1"],
  pin2: ["IO2"],
  pin3: ["NC"],
} as const;

const pinAttributes = {
  pin3: { doNotConnect: true },
} as const;

export const TSM24CADBZR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C37061920"],
      }}
      manufacturerPartNumber="TSM24CADBZR"
      footprint="sot23w_p0.9813mm_pl1.2487mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C37061920.obj?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C37061920.step?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
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

export default TSM24CADBZR;
