import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["ADDR"],
  pin3: ["GND"],
  pin4: ["SCL"],
  pin5: ["INT"],
  pin6: ["SDA"],
  pin7: ["PAD"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin3: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin7: [...pinLabels["pin7"], "thermalpad"],
} as const;

export const OPT3002DNPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2871271"],
      }}
      manufacturerPartNumber="OPT3002DNPR"
      footprint="dfn6_thermalpad0.65mmx1.3mm_p0.65mm_w2.4199mm_pw0.336mm_pl0.585mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871271.obj?uuid=e23afacfb49a43a3a48197f34f640d8a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871271.step?uuid=e23afacfb49a43a3a48197f34f640d8a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default OPT3002DNPR;
