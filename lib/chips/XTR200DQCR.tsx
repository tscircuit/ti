import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["INPUT"],
  pin2: ["MODE"],
  pin3: ["EF"],
  pin4: ["OD"],
  pin5: ["VSP"],
  pin6: ["OUT"],
  pin7: ["IS"],
  pin8: ["VG"],
  pin9: ["GND"],
  pin10: ["SET"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin9: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin11: [...pinLabels["pin11"], "thermalpad"],
} as const;

export const XTR200DQCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C52091642"],
      }}
      manufacturerPartNumber="XTR200DQCR"
      footprint="dfn10_thermalpad0.84mmx2.4mm_p0.4999mm_w2.3602mm_pw0.28mm_pl0.505mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52091642.obj?uuid=08d389f8e1094f3b8f1a6959092392f0",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52091642.step?uuid=08d389f8e1094f3b8f1a6959092392f0",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default XTR200DQCR;
