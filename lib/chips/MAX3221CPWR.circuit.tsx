import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["EN"],
  pin2: ["C1_POS"],
  pin3: ["V_POS"],
  pin4: ["C1_NEG"],
  pin5: ["C2_POS"],
  pin6: ["C2_NEG"],
  pin7: ["V_NEG"],
  pin8: ["RIN"],
  pin9: ["ROUT"],
  pin10: ["INVALID"],
  pin11: ["DIN"],
  pin12: ["FORCEON"],
  pin13: ["DOUT"],
  pin14: ["GND"],
  pin15: ["VCC"],
  pin16: ["FORCEOFF"],
} as const;

const pinAttributes = {
  pin14: { requiresGround: true },
  pin15: { requiresPower: true },
} as const;

export const MAX3221CPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C109444"],
      }}
      manufacturerPartNumber="MAX3221CPWR"
      footprint="dfn16_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C109444.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C109444.step?uuid=534f03d8fe164fbab551f91e5a792e30",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00012700000002041634, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default MAX3221CPWR;
