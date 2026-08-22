import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["TXD"],
  pin2: ["GND"],
  pin3: ["VCC"],
  pin4: ["RXD"],
  pin5: ["pin5"],
  pin6: ["CANL"],
  pin7: ["CANH"],
  pin8: ["S"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin3: { requiresPower: true },
} as const;

export const TCAN1057AVDRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3235000"],
      }}
      manufacturerPartNumber="TCAN1057AVDRQ1"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3235000.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3235000.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TCAN1057AVDRQ1;
