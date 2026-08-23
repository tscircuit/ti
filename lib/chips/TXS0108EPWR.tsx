import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["A1"],
  pin2: ["VCCA"],
  pin3: ["A2"],
  pin4: ["A3"],
  pin5: ["A4"],
  pin6: ["A5"],
  pin7: ["A6"],
  pin8: ["A7"],
  pin9: ["A8"],
  pin10: ["OE"],
  pin11: ["GND"],
  pin12: ["B8"],
  pin13: ["B7"],
  pin14: ["B6"],
  pin15: ["B5"],
  pin16: ["B4"],
  pin17: ["B3"],
  pin18: ["B2"],
  pin19: ["VCCB"],
  pin20: ["B1"],
} as const;

const pinAttributes = {
  pin11: { requiresGround: true },
} as const;

export const TXS0108EPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C17206"],
      }}
      manufacturerPartNumber="TXS0108EPWR"
      footprint="dfn20_pillpads_p0.65mm_w7.4839mm_pw0.364mm_pl1.742mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C17206.obj?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C17206.step?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default TXS0108EPWR;
