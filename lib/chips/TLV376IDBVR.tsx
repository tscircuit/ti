import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["Out"],
  pin2: ["pin2"],
  pin3: ["In_P"],
  pin4: ["pin4"],
  pin5: ["V_POS"],
} as const;

export const TLV376IDBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C882772"],
      }}
      manufacturerPartNumber="TLV376IDBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.2001mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882772.obj?uuid=8c971aea3af54c53b74baeb1f489d393",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882772.step?uuid=8c971aea3af54c53b74baeb1f489d393",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012699999956566899,
          y: 0.00006349999989652133,
          z: -0.7,
        },
      }}
      {...props}
    />
  );
};

export default TLV376IDBVR;
