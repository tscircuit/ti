import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1OE"],
  pin2: ["1A"],
  pin3: ["2Y"],
  pin4: ["GND"],
  pin5: ["2A"],
  pin6: ["1Y"],
  pin7: ["2OE"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const SN74LVC2G125DCU3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2871792"],
      }}
      manufacturerPartNumber="SN74LVC2G125DCU3"
      footprint="dfn8_pillpads_p0.5001mm_w3.7102mm_pw0.28mm_pl0.905mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871792.obj?uuid=714a6271b466408e99a25b85bfe66811",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871792.step?uuid=714a6271b466408e99a25b85bfe66811",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default SN74LVC2G125DCU3;
