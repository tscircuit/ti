import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VG1"],
  pin2: ["PGND"],
  pin3: ["REG"],
  pin4: ["VD1"],
  pin5: ["VSS"],
  pin6: ["VD2"],
  pin7: ["VDD"],
  pin8: ["VG2"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { requiresGround: true },
  pin7: { requiresPower: true },
} as const;

export const UCC24624DT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2862170"],
      }}
      manufacturerPartNumber="UCC24624DT"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862170.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862170.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default UCC24624DT;
