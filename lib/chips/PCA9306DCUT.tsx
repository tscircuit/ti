import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["VREF1"],
  pin3: ["SCL1"],
  pin4: ["SDA1"],
  pin5: ["SDA2"],
  pin6: ["SCL2"],
  pin7: ["VREF2"],
  pin8: ["EN"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
} as const;

export const PCA9306DCUT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C353162"],
      }}
      manufacturerPartNumber="PCA9306DCUT"
      footprint="dfn8_pillpads_p0.5001mm_w3.7102mm_pw0.28mm_pl0.905mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C353162.obj?uuid=9489031459cb451a8eda05cc51104796",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C353162.step?uuid=9489031459cb451a8eda05cc51104796",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: -0.000038099999983387534, y: 0, z: -0.535 },
      }}
      {...props}
    />
  );
};

export default PCA9306DCUT;
