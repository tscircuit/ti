import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND3"],
  pin2: ["GND2"],
  pin3: ["GND1"],
  pin4: ["IPK"],
  pin5: ["VS"],
  pin6: ["VDD"],
  pin8: ["DRAIN"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin3: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin8: [...pinLabels["pin8"], "pin7"],
} as const;

export const UCC28911DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2865344"],
      }}
      manufacturerPartNumber="UCC28911DR"
      footprint="dfn8_missing(7)_pillpads_w7.5898mm_pw0.588mm_pl2.045mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865344.obj?uuid=308dcec2614149658d04f24c794ad660",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865344.step?uuid=308dcec2614149658d04f24c794ad660",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00011429999983647576,
          y: 0.00010160000010728254,
          z: -0.925,
        },
      }}
      {...props}
    />
  );
};

export default UCC28911DR;
