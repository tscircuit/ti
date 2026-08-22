import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["C1_POS"],
  pin2: ["V_POS"],
  pin3: ["C1_NEG"],
  pin4: ["C2_POS"],
  pin5: ["C2_NEG"],
  pin6: ["V_NEG"],
  pin7: ["DIN1"],
  pin8: ["DIN2"],
  pin9: ["DIN3"],
  pin10: ["ROUT2"],
  pin11: ["ROUT1"],
  pin12: ["VL"],
  pin13: ["RIN2"],
  pin14: ["RIN1"],
  pin15: ["DOUT3"],
  pin16: ["DOUT2"],
  pin17: ["DOUT1"],
  pin18: ["GND"],
  pin19: ["VCC"],
  pin20: ["PWRDOWN"],
} as const;

const pinAttributes = {
  pin18: { requiresGround: true },
  pin19: { requiresPower: true },
} as const;

export const TRS3386ECPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2671125"],
      }}
      manufacturerPartNumber="TRS3386ECPWR"
      footprint="dfn20_pillpads_p0.65mm_w7.4839mm_pw0.364mm_pl1.742mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2671125.obj?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2671125.step?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default TRS3386ECPWR;
