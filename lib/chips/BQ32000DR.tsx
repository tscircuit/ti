import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OSCI"],
  pin2: ["OSCO"],
  pin3: ["VBACK"],
  pin4: ["GND"],
  pin5: ["SDA"],
  pin6: ["SCL"],
  pin7: ["IRQ"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const BQ32000DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C52495"],
      }}
      manufacturerPartNumber="BQ32000DR"
      footprint="dfn8_pillpads_w7.23mm_pw0.63mm_pl1.865mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52495.obj?uuid=a8bf75347d3a44d9bc6814f39c22bf07",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52495.step?uuid=a8bf75347d3a44d9bc6814f39c22bf07",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.0099948999999242,
          y: -0.06982459999994717,
          z: -0.8,
        },
      }}
      {...props}
    />
  );
};

export default BQ32000DR;
