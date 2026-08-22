import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
} as const;

export const DRV5013AGQLPG = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1497674"],
      }}
      manufacturerPartNumber="DRV5013AGQLPG"
      footprint="to92s_h1mm_od1mm_id0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1497674.obj?uuid=90177d32aa5143f9b8528e26116a8122",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1497674.step?uuid=90177d32aa5143f9b8528e26116a8122",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999956566899,
          y: 0.1350060999999505,
          z: -4.850006,
        },
      }}
      {...props}
    />
  );
};

export default DRV5013AGQLPG;
