import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["EN"],
  pin2: ["DIN1"],
  pin3: ["DIN2"],
  pin4: ["VCC"],
  pin5: ["GND"],
  pin6: ["DIN3"],
  pin7: ["DIN4"],
  pin8: ["pin8"],
  pin9: ["DOUT4_NEG"],
  pin10: ["DOUT4_POS"],
  pin11: ["DOUT3_POS"],
  pin12: ["DOUT3_NEG"],
  pin13: ["DOUT2_NEG"],
  pin14: ["DOUT2_POS"],
  pin15: ["DOUT1_POS"],
  pin16: ["DOUT1_NEG"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin5: { requiresGround: true },
} as const;

export const DS90LV047ATMX_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C206491"],
      }}
      manufacturerPartNumber="DS90LV047ATMX/NOPB"
      footprint="soic16_pillpads_w7.4421mm_pw0.602mm_pl1.971mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C206491.obj?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C206491.step?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: 0.000575 },
      }}
      {...props}
    />
  );
};

export default DS90LV047ATMX_NOPB;
