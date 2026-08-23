import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["C1_NEG"],
  pin2: ["C2_POS"],
  pin3: ["C2_NEG"],
  pin4: ["V_NEG"],
  pin5: ["DOUT2"],
  pin6: ["RIN2"],
  pin7: ["ROUT2"],
  pin8: ["DIN2"],
  pin9: ["DIN1"],
  pin10: ["ROUT1"],
  pin11: ["RIN1"],
  pin12: ["DOUT1"],
  pin13: ["GND"],
  pin14: ["VCC"],
  pin15: ["V_POS"],
  pin16: ["C1_POS"],
  pin17: ["EP"],
} as const;

const pinAttributes = {
  pin13: { requiresGround: true },
  pin14: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const TRS3232EIRGTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3202092"],
      }}
      manufacturerPartNumber="TRS3232EIRGTR"
      footprint="qfn16_thermalpad1.5mmx1.5mm_pillpads_p0.4999mm_pw0.28mm_pl0.8mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3202092.obj?uuid=243fc526849b42f9a1a9c3b1825c83b9",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3202092.step?uuid=243fc526849b42f9a1a9c3b1825c83b9",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TRS3232EIRGTR;
