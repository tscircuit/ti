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

export const LM5164DDAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C477928"],
      }}
      manufacturerPartNumber="LM5164DDAR"
      footprint="soic8_thermalpad2.5mmx3.2mm_pillpads_w7.6mm_pl1.6mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C477928.obj?uuid=3936dbd423424b148317d27cdee29b93",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C477928.step?uuid=3936dbd423424b148317d27cdee29b93",
        pcbRotationOffset: 270,
        modelOriginPosition: {
          x: -0.00006349999999599731,
          y: -0.00008889999999439624,
          z: -0.049425,
        },
      }}
      {...props}
    />
  );
};

export default LM5164DDAR;
