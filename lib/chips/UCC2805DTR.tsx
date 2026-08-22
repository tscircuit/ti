import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["COMP"],
  pin2: ["FB"],
  pin3: ["CS"],
  pin4: ["RC"],
  pin5: ["GND"],
  pin6: ["OUT"],
  pin7: ["VCC"],
  pin8: ["REF"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin7: { requiresPower: true },
} as const;

export const UCC2805DTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C702415"],
      }}
      manufacturerPartNumber="UCC2805DTR"
      footprint="soic8_pillpads_w6.9998mm_pl1.52mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702415.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702415.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default UCC2805DTR;
