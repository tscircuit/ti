import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["C3_POS"],
  pin2: ["C3_NEG"],
  pin3: ["RIN1"],
  pin4: ["RIN2"],
  pin5: ["DOUT1"],
  pin6: ["DOUT2"],
  pin7: ["NC2"],
  pin8: ["NC1"],
  pin9: ["DIN2"],
  pin10: ["DIN1"],
  pin11: ["ROUT2"],
  pin12: ["ROUT1"],
  pin13: ["INVALID"],
  pin14: ["FORCEOFF"],
  pin15: ["FORCEON"],
  pin16: ["C1_NEG"],
  pin17: ["GND"],
  pin18: ["VL"],
  pin19: ["VCC"],
  pin20: ["V_POS"],
  pin21: ["C1_POS"],
  pin22: ["C2_POS"],
  pin23: ["C2_NEG"],
  pin24: ["V_NEG"],
  pin25: ["EP"],
} as const;

const pinAttributes = {
  pin7: { doNotConnect: true },
  pin8: { doNotConnect: true },
  pin17: { requiresGround: true },
  pin19: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin25: [...pinLabels["pin25"], "thermalpad"],
} as const;

export const TRS3122ERGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C473384"],
      }}
      manufacturerPartNumber="TRS3122ERGER"
      footprint="qfn24_thermalpad2.5mmx2.5mm_p0.4999mm_w4.5841mm_h4.5965mm_pw0.3mm_pl0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C473384.obj?uuid=f9f49049b1e946aebac8a4ca9e490364",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C473384.step?uuid=f9f49049b1e946aebac8a4ca9e490364",
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

export default TRS3122ERGER;
