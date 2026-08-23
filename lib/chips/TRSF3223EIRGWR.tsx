import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["C1_POS"],
  pin2: ["C1_NEG"],
  pin3: ["C2_POS"],
  pin4: ["C2_NEG"],
  pin5: ["V_NEG"],
  pin6: ["DOUT2"],
  pin7: ["RIN2"],
  pin8: ["ROUT2"],
  pin9: ["INVALID"],
  pin10: ["DIN2"],
  pin11: ["DIN1"],
  pin12: ["FORCEON"],
  pin13: ["ROUT1"],
  pin14: ["RIN1"],
  pin15: ["DOUT1"],
  pin16: ["GND"],
  pin17: ["VCC"],
  pin18: ["FORCEOFF"],
  pin19: ["EN"],
  pin20: ["V_POS"],
  pin21: ["EP"],
} as const;

const pinAttributes = {
  pin16: { requiresGround: true },
  pin17: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const TRSF3223EIRGWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2864231"],
      }}
      manufacturerPartNumber="TRSF3223EIRGWR"
      footprint="qfn20_thermalpad2.6mmx2.6mm_pillpads_p0.65mm_h6.224mm_pw0.364mm_pl1.087mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864231.obj?uuid=5af36ef73d31478ba668e2e117bbda9a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864231.step?uuid=5af36ef73d31478ba668e2e117bbda9a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.03 },
      }}
      {...props}
    />
  );
};

export default TRSF3223EIRGWR;
