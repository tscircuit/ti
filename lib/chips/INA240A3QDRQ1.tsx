import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN_NEG"],
  pin2: ["GND"],
  pin3: ["REF2"],
  pin4: ["NC"],
  pin5: ["OUT"],
  pin6: ["VS"],
  pin7: ["REF1"],
  pin8: ["IN_POS"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin4: { doNotConnect: true },
} as const;

export const INA240A3QDRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1512996"],
      }}
      manufacturerPartNumber="INA240A3QDRQ1"
      footprint="soic8_pillpads_w6.9998mm_pl1.52mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1512996.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1512996.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default INA240A3QDRQ1;
