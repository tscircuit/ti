import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OE1"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["A3"],
  pin5: ["A4"],
  pin6: ["A5"],
  pin7: ["A6"],
  pin8: ["A7"],
  pin9: ["A8"],
  pin10: ["GND"],
  pin11: ["Y8"],
  pin12: ["Y7"],
  pin13: ["Y6"],
  pin14: ["Y5"],
  pin15: ["Y4"],
  pin16: ["Y3"],
  pin17: ["Y2"],
  pin18: ["Y1"],
  pin19: ["OE2"],
  pin20: ["VCC"],
} as const;

const pinAttributes = {
  pin10: { requiresGround: true },
  pin20: { requiresPower: true },
} as const;

export const SN74LV541ADBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2676078"],
      }}
      manufacturerPartNumber="SN74LV541ADBR"
      footprint="dfn20_pillpads_p0.65mm_w9.064mm_pw0.364mm_pl2.082mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2676078.obj?uuid=43c69bf81c4c4a608578551fedd76316",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2676078.step?uuid=43c69bf81c4c4a608578551fedd76316",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0.025 },
      }}
      {...props}
    />
  );
};

export default SN74LV541ADBR;
