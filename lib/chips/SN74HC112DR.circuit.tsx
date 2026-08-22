import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1CLK"],
  pin2: ["1K"],
  pin3: ["1J"],
  pin4: ["1PRE"],
  pin5: ["1Q1"],
  pin6: ["1Q2"],
  pin7: ["2Q1"],
  pin8: ["GND"],
  pin9: ["2Q2"],
  pin10: ["2PRE"],
  pin11: ["2J"],
  pin12: ["2K"],
  pin13: ["2CLK"],
  pin14: ["2CLR"],
  pin15: ["1CLR"],
  pin16: ["VCC"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const SN74HC112DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2652821"],
      }}
      manufacturerPartNumber="SN74HC112DR"
      footprint="soic16_pillpads_w7.4421mm_pw0.602mm_pl1.971mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2652821.obj?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2652821.step?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: 0.000575 },
      }}
      {...props}
    />
  );
};

export default SN74HC112DR;
