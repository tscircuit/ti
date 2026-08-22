import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VN"],
  pin2: ["VP"],
} as const;

export const LMT01LPG = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C363276"],
      }}
      manufacturerPartNumber="LMT01LPG"
      footprint="axial_od1.05mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C363276.obj?uuid=8a59a7885b554204a41ec7a483c87201",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C363276.step?uuid=8a59a7885b554204a41ec7a483c87201",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0,
          y: 0.19487259999993511,
          z: -3.890010000000001,
        },
      }}
      {...props}
    />
  );
};

export default LMT01LPG;
