import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["pin2"],
  pin3: ["IN_POS"],
  pin4: ["V_NEG"],
  pin5: ["V_POS"],
} as const;

export const TLV333IDBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C473369"],
      }}
      manufacturerPartNumber="TLV333IDBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.2001mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C473369.obj?uuid=de83a77687e64788a98e316d865b3813",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C473369.step?uuid=de83a77687e64788a98e316d865b3813",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.75 },
      }}
      {...props}
    />
  );
};

export default TLV333IDBVR;
