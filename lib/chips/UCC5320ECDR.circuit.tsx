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

export const UCC5320ECDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C882786"],
      }}
      manufacturerPartNumber="UCC5320ECDR"
      footprint="soic8_pillpads_w7.5898mm_pw0.588mm_pl2.045mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882786.obj?uuid=609550b54721441492dc8db43c2597ce",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882786.step?uuid=609550b54721441492dc8db43c2597ce",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: -0.15 },
      }}
      {...props}
    />
  );
};

export default UCC5320ECDR;
