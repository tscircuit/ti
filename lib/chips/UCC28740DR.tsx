import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["VS"],
  pin3: ["FB"],
  pin4: ["GND"],
  pin5: ["CS"],
  pin6: ["DRV"],
  pin7: ["HV"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
} as const;

export const UCC28740DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C182073"],
      }}
      manufacturerPartNumber="UCC28740DR"
      footprint="dfn8_missing(7)_pillpads_w7.5898mm_pw0.588mm_pl2.045mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C182073.obj?uuid=d42cf3ed84a44d1faaa72d42da020447",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C182073.step?uuid=d42cf3ed84a44d1faaa72d42da020447",
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

export default UCC28740DR;
