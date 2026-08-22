import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["READY"],
  pin2: ["C1_POS"],
  pin3: ["V_POS"],
  pin4: ["pin4"],
  pin5: ["C2_POS"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["DOUT2"],
  pin9: ["RIN2"],
  pin10: ["ROUT2"],
  pin11: ["INVALID"],
  pin12: ["DIN2"],
  pin13: ["DIN1"],
  pin14: ["FORCEON"],
  pin15: ["ROUT1"],
  pin16: ["RIN1"],
  pin17: ["DOUT1"],
  pin18: ["GND"],
  pin19: ["VCC"],
  pin20: ["FORCEOFF"],
} as const;

const pinAttributes = {
  pin18: { requiresGround: true },
  pin19: { requiresPower: true },
} as const;

export const TRS3318EIPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2671389"],
      }}
      manufacturerPartNumber="TRS3318EIPWR"
      footprint="dfn20_pillpads_p0.65mm_w7.4839mm_pw0.364mm_pl1.742mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2671389.obj?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2671389.step?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default TRS3318EIPWR;
