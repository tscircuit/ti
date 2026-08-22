import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["VIN"],
  pin3: ["pin3"],
  pin4: ["RON"],
  pin5: ["FB"],
  pin6: ["PGOOD"],
  pin7: ["BST"],
  pin8: ["SW"],
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const LM5163DDAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2873264"],
      }}
      manufacturerPartNumber="LM5163DDAR"
      footprint="dfn8_thermalpad1.9mmx2.6mm_pillpads_w7.3448mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2873264.obj?uuid=55c485ae55f94eb8b0db8ca7148898d7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2873264.step?uuid=55c485ae55f94eb8b0db8ca7148898d7",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: -0.000025399999913133797,
          z: -0.95,
        },
      }}
      {...props}
    />
  );
};

export default LM5163DDAR;
