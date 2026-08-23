import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["COMP"],
  pin2: ["ENR"],
  pin3: ["EN"],
  pin4: ["FB1"],
  pin5: ["FB4"],
  pin6: ["BASE"],
  pin7: ["VIN"],
  pin8: ["SW2"],
  pin9: ["SW1"],
  pin10: ["PGND2"],
  pin11: ["PGND1"],
  pin12: ["SUP"],
  pin13: ["PG"],
  pin14: ["GND2"],
  pin15: ["FB3"],
  pin16: ["OUT3"],
  pin17: ["C2_POS"],
  pin18: ["pin18"],
  pin19: ["C1_POS"],
  pin20: ["C1_NEG"],
  pin21: ["DRV"],
  pin22: ["GND1"],
  pin23: ["REF"],
  pin24: ["FB2"],
  pin25: ["EP"],
} as const;

const pinAttributes = {
  pin7: { requiresPower: true },
  pin10: { requiresGround: true },
  pin11: { requiresGround: true },
  pin14: { requiresGround: true },
  pin22: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin25: [...pinLabels["pin25"], "thermalpad"],
} as const;

export const TPS65145RGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C914108"],
      }}
      manufacturerPartNumber="TPS65145RGER"
      footprint="qfn24_thermalpad2.5mmx2.5mm_p0.4999mm_w4.5841mm_h4.5965mm_pw0.3mm_pl0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C914108.obj?uuid=f9f49049b1e946aebac8a4ca9e490364",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C914108.step?uuid=f9f49049b1e946aebac8a4ca9e490364",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999842880061,
          y: 0.000012699999956566899,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TPS65145RGER;
