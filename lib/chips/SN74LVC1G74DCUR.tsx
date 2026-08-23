import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CLK"],
  pin2: ["D"],
  pin3: ["Q1"],
  pin4: ["GND"],
  pin5: ["Q2"],
  pin6: ["CLR"],
  pin7: ["PRE"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const SN74LVC1G74DCUR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C70285"],
      }}
      manufacturerPartNumber="SN74LVC1G74DCUR"
      footprint="soic_p0.5001mm_w3.4mm_pw0.26mm_pl0.7mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C70285.obj?uuid=8d74239684c249c491a8d7817d4618b2",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C70285.step?uuid=8d74239684c249c491a8d7817d4618b2",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00008890000015071564,
          y: 0.00010160000010728254,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default SN74LVC1G74DCUR;
