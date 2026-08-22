import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["GND2"],
  pin3: ["OUT"],
  pin4: ["VDD1"],
  pin5: ["VDD2"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin4: { requiresPower: true },
  pin5: { requiresPower: true },
} as const;

export const LMT86QDCKRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2878895"],
      }}
      manufacturerPartNumber="LMT86QDCKRQ1"
      footprint="dfn6_missing(5)_p0.65mm_w3.0502mm_pw0.35mm_pl0.85mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2878895.obj?uuid=bf34fed377a64201a7f6265c34f66c0f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2878895.step?uuid=bf34fed377a64201a7f6265c34f66c0f",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999842880061, y: 0, z: -0.53 },
      }}
      {...props}
    />
  );
};

export default LMT86QDCKRQ1;
