import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["A3"],
  pin5: ["A4"],
  pin6: ["A5"],
  pin7: ["A6"],
  pin8: ["A7"],
  pin9: ["A8"],
  pin10: ["GND"],
  pin11: ["B8"],
  pin12: ["B7"],
  pin13: ["B6"],
  pin14: ["B5"],
  pin15: ["B4"],
  pin16: ["B3"],
  pin17: ["B2"],
  pin18: ["B1"],
  pin19: ["OE"],
  pin20: ["VCC"],
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin10: { requiresGround: true },
  pin20: { requiresPower: true },
} as const;

export const SN74CB3Q3245DGVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2674534"],
      }}
      manufacturerPartNumber="SN74CB3Q3245DGVR"
      footprint="dfn20_pillpads_p0.4001mm_w7.3741mm_pw0.224mm_pl1.687mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2674534.obj?uuid=7d6c70f175ad4a0da0fa9e38a71ef69e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2674534.step?uuid=7d6c70f175ad4a0da0fa9e38a71ef69e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: 0.01 },
      }}
      {...props}
    />
  );
};

export default SN74CB3Q3245DGVR;
