import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PUMP"],
  pin2: ["VDD"],
  pin3: ["FB"],
  pin4: ["GND2"],
  pin5: ["GND3"],
  pin6: ["GND1"],
  pin7: ["SW1"],
  pin8: ["SW2"],
  pin9: ["NC"],
  pin10: ["BST1"],
  pin11: ["BST2"],
  pin12: ["PVDD"],
  pin13: ["OUT_POS"],
  pin14: ["OUT_NEG"],
  pin15: ["REXT"],
  pin16: ["IN_NEG"],
  pin17: ["IN_POS"],
  pin18: ["SCL"],
  pin19: ["SDA"],
  pin20: ["REG"],
  pin21: ["EP"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin4: { requiresGround: true },
  pin5: { requiresGround: true },
  pin6: { requiresGround: true },
  pin9: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const DRV2667RGPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2150609"],
      }}
      manufacturerPartNumber="DRV2667RGPR"
      footprint="qfn20_thermalpad2mmx2mm_p0.4999mm_w4.84mm_h4.8398mm_pw0.3mm_pl0.78mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2150609.obj?uuid=0989a25c551a4d8691b24e6f64af09ca",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2150609.step?uuid=0989a25c551a4d8691b24e6f64af09ca",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default DRV2667RGPR;
