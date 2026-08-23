import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["SDA"],
  pin3: ["CLKIN"],
  pin4: ["ADDR"],
  pin5: ["INTB"],
  pin6: ["SD"],
  pin7: ["VDD"],
  pin8: ["GND"],
  pin9: ["IN0A"],
  pin10: ["IN0B"],
  pin11: ["IN1A"],
  pin12: ["IN1B"],
  pin13: ["IN2A"],
  pin14: ["IN2B"],
  pin15: ["IN3A"],
  pin16: ["IN3B"],
  pin17: ["EP"],
} as const;

const pinAttributes = {
  pin7: { requiresPower: true },
  pin8: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const LDC1314RGHR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2667027"],
      }}
      manufacturerPartNumber="LDC1314RGHR"
      footprint="qfn16_thermalpad2.4mmx2.4mm_p0.5001mm_h4.6801mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2667027.obj?uuid=17f7da16c3ae425fa0beb8c4680747e6",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2667027.step?uuid=17f7da16c3ae425fa0beb8c4680747e6",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012700000013410317,
          y: -0.000012699999999199463,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default LDC1314RGHR;
