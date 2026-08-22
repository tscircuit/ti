import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["R"],
  pin2: ["RE"],
  pin3: ["DE"],
  pin4: ["D"],
  pin5: ["GND"],
  pin6: ["A"],
  pin7: ["B"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const THVD2450DGKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3246171"],
      }}
      manufacturerPartNumber="THVD2450DGKR"
      footprint="dfn8_pillpads_p0.65mm_w5.8498mm_pw0.38mm_pl1.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3246171.obj?uuid=745f4a63f92f44b78c4ba3925feaa542",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3246171.step?uuid=745f4a63f92f44b78c4ba3925feaa542",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0,
          z: -0.149083,
        },
      }}
      {...props}
    />
  );
};

export default THVD2450DGKR;
