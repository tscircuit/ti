import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCLK"],
  pin2: ["pin2"],
  pin3: ["GDO2"],
  pin4: ["DVDD"],
  pin5: ["DCOUPL"],
  pin6: ["pin6"],
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

export const CC1101RGPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C29953"],
      }}
      manufacturerPartNumber="CC1101RGPR"
      footprint="qfn20_thermalpad2.4mmx2.4mm_pillpads_p0.4999mm_h5mm_pw0.28mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C29953.obj?uuid=944af057ae8c4b3488c42a326ffe13e4",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C29953.step?uuid=944af057ae8c4b3488c42a326ffe13e4",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000038099999983387534,
          y: 0.00005079999993995443,
          z: 0.01,
        },
      }}
      {...props}
    />
  );
};

export default CC1101RGPR;
