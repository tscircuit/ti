import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["IN"],
  pin3: ["OUT"],
  pin4: ["NC2"],
  pin5: ["NC1"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin4: { doNotConnect: true },
  pin5: { doNotConnect: true },
} as const;

export const TLV70450DBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C91672"],
      }}
      manufacturerPartNumber="TLV70450DBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91672.obj?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91672.step?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0,
          y: -0.000012700000070253736,
          z: -0.049083,
        },
      }}
      {...props}
    />
  );
};

export default TLV70450DBVR;
