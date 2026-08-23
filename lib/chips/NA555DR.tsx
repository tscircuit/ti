import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["TRIG"],
  pin3: ["OUT"],
  pin4: ["RESET"],
  pin5: ["CONT"],
  pin6: ["THRES"],
  pin7: ["DISCH"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const NA555DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C128415"],
      }}
      manufacturerPartNumber="NA555DR"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C128415.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C128415.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default NA555DR;
