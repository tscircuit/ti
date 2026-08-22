import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN_POS"],
  pin2: ["V_NEG"],
  pin3: ["IN_NEG"],
  pin4: ["OUT"],
  pin5: ["V_POS"],
} as const;

export const TLV9301IDCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C4366617"],
      }}
      manufacturerPartNumber="TLV9301IDCKR"
      footprint="dfn6_missing(5)_p0.6502mm_w2.52mm_pw0.315mm_pl0.835mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4366617.obj?uuid=c7f70410144b4181a75d6c56456eaf60",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4366617.step?uuid=c7f70410144b4181a75d6c56456eaf60",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.0001142999999501626,
          y: 0.000025400000026820635,
          z: -0.1,
        },
      }}
      {...props}
    />
  );
};

export default TLV9301IDCKR;
