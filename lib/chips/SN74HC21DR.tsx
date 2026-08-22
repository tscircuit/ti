import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["1B"],
  pin3: ["pin3"],
  pin4: ["1C"],
  pin5: ["1D"],
  pin6: ["1Y"],
  pin7: ["GND"],
  pin8: ["2Y"],
  pin9: ["2A"],
  pin10: ["2B"],
  pin11: ["NC"],
  pin12: ["2C"],
  pin13: ["2D"],
  pin14: ["VCC"],
} as const;

const pinAttributes = {
  pin7: { requiresGround: true },
  pin11: { doNotConnect: true },
  pin14: { requiresPower: true },
} as const;

export const SN74HC21DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C75398"],
      }}
      manufacturerPartNumber="SN74HC21DR"
      footprint="soic14_pillpads_w7.276mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C75398.obj?uuid=265efcdb862f47cf9eef6843d570fde7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C75398.step?uuid=265efcdb862f47cf9eef6843d570fde7",
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

export default SN74HC21DR;
