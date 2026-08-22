import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["1B"],
  pin3: ["2Y"],
  pin4: ["GND"],
  pin5: ["2A"],
  pin6: ["2B"],
  pin7: ["1Y"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const SN74LVC2G08DCUR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C91875"],
      }}
      manufacturerPartNumber="SN74LVC2G08DCUR"
      footprint="dfn8_pillpads_p0.5001mm_w3.8498mm_pw0.25mm_pl0.75mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91875.obj?uuid=714a6271b466408e99a25b85bfe66811",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91875.step?uuid=714a6271b466408e99a25b85bfe66811",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: -0.00013970000009067007,
          y: -0.00007619999996677507,
          z: -0.149083,
        },
      }}
      {...props}
    />
  );
};

export default SN74LVC2G08DCUR;
