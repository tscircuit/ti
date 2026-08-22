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

export const TLV77133PDBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C33722526"],
      }}
      manufacturerPartNumber="TLV77133PDBVR"
      footprint="dfn6_missing(5)_p0.952mm_w3.688mm_pw0.7mm_pl1.1mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33722526.obj?uuid=c7fdf6dae3ca4abaabd1bafd2d31350d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33722526.step?uuid=c7fdf6dae3ca4abaabd1bafd2d31350d",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: 0.0001142999999501626, z: 0.050795 },
      }}
      {...props}
    />
  );
};

export default TLV77133PDBVR;
