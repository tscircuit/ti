import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VEE21"],
  pin2: ["DESAT"],
  pin3: ["GND2"],
  pin4: ["OUTH"],
  pin5: ["VCC2"],
  pin6: ["OUTL"],
  pin7: ["CLAMP"],
  pin8: ["VEE22"],
  pin9: ["GND12"],
  pin10: ["IN_POS"],
  pin11: ["IN_NEG"],
  pin12: ["RDY"],
  pin13: ["FLT"],
  pin14: ["RST"],
  pin15: ["VCC1"],
  pin16: ["GND11"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin5: { requiresPower: true },
  pin9: { requiresGround: true },
  pin15: { requiresPower: true },
  pin16: { requiresGround: true },
} as const;

export const ISO5452DWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2866808"],
      }}
      manufacturerPartNumber="ISO5452DWR"
      footprint="soic16_pillpads_w11.9011mm_pw0.574mm_pl2.4005mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2866808.obj?uuid=5eab397ba6c7470199f8f0425efad579",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2866808.step?uuid=5eab397ba6c7470199f8f0425efad579",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.049425 },
      }}
      {...props}
    />
  );
};

export default ISO5452DWR;
