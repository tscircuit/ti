import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["RIN1_POS"],
  pin3: ["RIN2_POS"],
  pin4: ["RIN2_NEG"],
  pin5: ["RIN3_NEG"],
  pin6: ["RIN3_POS"],
  pin7: ["RIN4_POS"],
  pin8: ["RIN4_NEG"],
  pin9: ["pin9"],
  pin10: ["ROUT4"],
  pin11: ["ROUT3"],
  pin12: ["GND"],
  pin13: ["VCC"],
  pin14: ["ROUT2"],
  pin15: ["ROUT1"],
  pin16: ["EN"],
} as const;

const pinAttributes = {
  pin12: { requiresGround: true },
  pin13: { requiresPower: true },
} as const;

export const DS90LV048ATMX_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2671025"],
      }}
      manufacturerPartNumber="DS90LV048ATMX/NOPB"
      footprint="soic16_pillpads_w7.4421mm_pw0.602mm_pl1.971mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2671025.obj?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2671025.step?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: 0.000575 },
      }}
      {...props}
    />
  );
};

export default DS90LV048ATMX_NOPB;
