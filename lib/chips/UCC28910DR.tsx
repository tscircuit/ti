import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["GND2"],
  pin3: ["GND3"],
  pin4: ["IPK"],
  pin5: ["VS"],
  pin6: ["VDD"],
  pin7: ["DRAIN"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin3: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const UCC28910DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C527701"],
      }}
      manufacturerPartNumber="UCC28910DR"
      footprint="dfn8_missing(7)_pillpads_w7.5898mm_pw0.588mm_pl2.045mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C527701.obj?uuid=d42cf3ed84a44d1faaa72d42da020447",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C527701.step?uuid=d42cf3ed84a44d1faaa72d42da020447",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0.000012700000070253736,
          z: 0.050575,
        },
      }}
      {...props}
    />
  );
};

export default UCC28910DR;
