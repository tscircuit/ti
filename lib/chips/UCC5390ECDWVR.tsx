import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1"],
  pin2: ["IN_POS"],
  pin3: ["IN_NEG"],
  pin4: ["GND1"],
  pin5: ["VCC2"],
  pin6: ["OUT"],
  pin7: ["GND2"],
  pin8: ["VEE2"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
  pin5: { requiresPower: true },
  pin7: { requiresGround: true },
} as const;

export const UCC5390ECDWVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C882869"],
      }}
      manufacturerPartNumber="UCC5390ECDWVR"
      footprint="soic_w12.9002mm_pw0.7mm_pl2mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882869.obj?uuid=3051e21de70541f0b411376247814d35",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882869.step?uuid=3051e21de70541f0b411376247814d35",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999842880061,
          y: -0.000012699999842880061,
          z: -1.265,
        },
      }}
      {...props}
    />
  );
};

export default UCC5390ECDWVR;
