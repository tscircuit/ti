import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["RESET"],
  pin3: ["VDD"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin3: { requiresPower: true },
} as const;

export const TLV803SDBZR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C132016"],
      }}
      manufacturerPartNumber="TLV803SDBZR"
      footprint="sot23w_p0.9813mm_pw0.6494mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C132016.obj?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C132016.step?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0.000012700000070253736,
          y: -0.000012699999956566899,
          z: 0.050795,
        },
      }}
      {...props}
    />
  );
};

export default TLV803SDBZR;
