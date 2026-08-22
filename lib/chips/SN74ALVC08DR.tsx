import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["1B"],
  pin3: ["1Y"],
  pin4: ["2A"],
  pin5: ["2B"],
  pin6: ["2Y"],
  pin7: ["GND"],
  pin8: ["3Y"],
  pin9: ["3A"],
  pin10: ["3B"],
  pin11: ["4Y"],
  pin12: ["4A"],
  pin13: ["4B"],
  pin14: ["VCC"],
} as const;

const pinAttributes = {
  pin7: { requiresGround: true },
  pin14: { requiresPower: true },
} as const;

export const SN74ALVC08DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2868761"],
      }}
      manufacturerPartNumber="SN74ALVC08DR"
      footprint="soic14_pillpads_w7.276mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868761.obj?uuid=265efcdb862f47cf9eef6843d570fde7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868761.step?uuid=265efcdb862f47cf9eef6843d570fde7",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0,
          y: -0.000025399999913133797,
          z: -0.099425,
        },
      }}
      {...props}
    />
  );
};

export default SN74ALVC08DR;
