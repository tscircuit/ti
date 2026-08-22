import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["LAT"],
  pin2: ["OUT0"],
  pin3: ["OUT1"],
  pin4: ["OUT2"],
  pin5: ["OUT3"],
  pin6: ["OUT4"],
  pin7: ["OUT5"],
  pin8: ["OUT6"],
  pin9: ["OUT7"],
  pin10: ["OUT8"],
  pin11: ["OUT9"],
  pin12: ["OUT10"],
  pin13: ["OUT11"],
  pin14: ["OUT12"],
  pin15: ["OUT13"],
  pin16: ["OUT14"],
  pin17: ["OUT15"],
  pin18: ["BLANK"],
  pin19: ["SOUT"],
  pin20: ["IREF"],
  pin21: ["VCC"],
  pin22: ["GND"],
  pin23: ["SIN"],
  pin24: ["SCLK"],
  pin25: ["EP"],
} as const;

const pinAttributes = {
  pin21: { requiresPower: true },
  pin22: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin25: [...pinLabels["pin25"], "thermalpad"],
} as const;

export const TLC59283RGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C485815"],
      }}
      manufacturerPartNumber="TLC59283RGER"
      footprint="qfn24_thermalpad2.5mmx2.5mm_p0.4999mm_w4.5841mm_h4.5965mm_pw0.3mm_pl0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C485815.obj?uuid=f9f49049b1e946aebac8a4ca9e490364",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C485815.step?uuid=f9f49049b1e946aebac8a4ca9e490364",
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

export default TLC59283RGER;
