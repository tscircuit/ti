import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CLKIN"],
  pin2: ["1G"],
  pin3: ["Y0"],
  pin4: ["GND1"],
  pin5: ["VDD1"],
  pin6: ["Y4"],
  pin7: ["GND2"],
  pin8: ["Y6"],
  pin9: ["Y7"],
  pin10: ["VDD3"],
  pin11: ["Y5"],
  pin12: ["GND3"],
  pin13: ["Y2"],
  pin14: ["VDD2"],
  pin15: ["Y3"],
  pin16: ["Y1"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin5: { requiresPower: true },
  pin7: { requiresGround: true },
  pin10: { requiresPower: true },
  pin12: { requiresGround: true },
  pin14: { requiresPower: true },
} as const;

export const LMK1C1108PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2868241"],
      }}
      manufacturerPartNumber="LMK1C1108PWR"
      footprint="dfn16_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868241.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868241.step?uuid=534f03d8fe164fbab551f91e5a792e30",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00012700000002041634, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default LMK1C1108PWR;
