import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN_NEG"],
  pin2: ["GND"],
  pin3: ["A1"],
  pin4: ["A2"],
  pin5: ["OUT"],
  pin6: ["VS"],
  pin7: ["OFFSET"],
  pin8: ["IN_POS"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const LMP8601QMAX_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C88028"],
      }}
      manufacturerPartNumber="LMP8601QMAX/NOPB"
      footprint="dfn8_pillpads_w7.23mm_pw0.63mm_pl1.865mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C88028.obj?uuid=a8bf75347d3a44d9bc6814f39c22bf07",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C88028.step?uuid=a8bf75347d3a44d9bc6814f39c22bf07",
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

export default LMP8601QMAX_NOPB;
