import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NO"],
  pin2: ["COM"],
  pin3: ["GND"],
  pin4: ["IN"],
  pin5: ["V_POS"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
} as const;

export const TS5A3166QDCKRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2673130"],
      }}
      manufacturerPartNumber="TS5A3166QDCKRQ1"
      footprint="dfn6_missing(5)_p0.65mm_w3.0502mm_pw0.35mm_pl0.85mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2673130.obj?uuid=bf34fed377a64201a7f6265c34f66c0f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2673130.step?uuid=bf34fed377a64201a7f6265c34f66c0f",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999842880061, y: 0, z: -0.53 },
      }}
      {...props}
    />
  );
};

export default TS5A3166QDCKRQ1;
