import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCLK"],
  pin2: ["pin2"],
  pin3: ["GDO2"],
  pin4: ["DVDD"],
  pin5: ["DCOUPL"],
  pin6: ["GDO0"],
  pin7: ["CSn"],
  pin8: ["XOSC_Q1"],
  pin9: ["AVDD1"],
  pin10: ["XOSC_Q2"],
  pin11: ["AVDD2"],
  pin12: ["RF_P"],
  pin13: ["RF_N"],
  pin14: ["AVDD3"],
  pin15: ["AVDD4"],
  pin16: ["GND1"],
  pin17: ["RBIAS"],
  pin18: ["DGUARD"],
  pin19: ["GND2"],
  pin20: ["SI"],
  pin21: ["EP"],
} as const;

const pinAttributes = {
  pin16: { requiresGround: true },
  pin19: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const CC113LRGPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C374064"],
      }}
      manufacturerPartNumber="CC113LRGPR"
      footprint="qfn20_thermalpad2.5mmx2.5mm_p0.4999mm_h5mm_pw0.28mm_pl0.8mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C374064.obj?uuid=44ed5406dd034a458721bd52114b4c83",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C374064.step?uuid=44ed5406dd034a458721bd52114b4c83",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0.000012700000070253736,
          z: 0.01,
        },
      }}
      {...props}
    />
  );
};

export default CC113LRGPR;
