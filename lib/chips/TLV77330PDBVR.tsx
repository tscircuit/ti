import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["pin4"],
  pin5: ["OUT"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const TLV77330PDBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C47347617"],
      }}
      manufacturerPartNumber="TLV77330PDBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.5mm_pl1.2mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C47347617.obj?uuid=e48ab5c5731245f9b3b344006662e381",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C47347617.step?uuid=e48ab5c5731245f9b3b344006662e381",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00005079999993995443,
          y: -0.000025399999913133797,
          z: -0.95,
        },
      }}
      {...props}
    />
  );
};

export default TLV77330PDBVR;
