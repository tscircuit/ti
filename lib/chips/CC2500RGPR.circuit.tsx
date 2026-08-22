import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCLK"],
  pin2: ["pin2"],
  pin3: ["GDO2"],
  pin4: ["DVDD"],
  pin5: ["DCOUPL"],
  pin6: ["pin6"],
  pin7: ["CSN"],
  pin8: ["pin8"],
  pin9: ["AVDD1"],
  pin10: ["pin10"],
  pin11: ["AVDD2"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["AVDD3"],
  pin15: ["AVDD4"],
  pin16: ["GND1"],
  pin17: ["RBIAS"],
  pin18: ["DGUARD"],
  pin19: ["GND2"],
  pin20: ["SI"],
  pin21: ["pin21"],
} as const;

const pinAttributes = {
  pin16: { requiresGround: true },
  pin19: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const CC2500RGPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C57494"],
      }}
      manufacturerPartNumber="CC2500RGPR"
      footprint="qfn20_thermalpad2.7mmx2.7mm_p0.4999mm_h4.6801mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C57494.obj?uuid=44ed5406dd034a458721bd52114b4c83",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C57494.step?uuid=44ed5406dd034a458721bd52114b4c83",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999842880061,
          y: 0.000012699999842880061,
          z: 0.01,
        },
      }}
      {...props}
    />
  );
};

export default CC2500RGPR;
