import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["HB"],
  pin3: ["HO"],
  pin4: ["HS"],
  pin5: ["HI"],
  pin6: ["LI"],
  pin7: ["VSS"],
  pin8: ["LO"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin7: { requiresGround: true },
} as const;

export const UCC27211DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2871979"],
      }}
      manufacturerPartNumber="UCC27211DR"
      footprint="dfn8_pillpads_w7.23mm_pw0.63mm_pl1.865mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871979.obj?uuid=a8bf75347d3a44d9bc6814f39c22bf07",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871979.step?uuid=a8bf75347d3a44d9bc6814f39c22bf07",
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

export default UCC27211DR;
