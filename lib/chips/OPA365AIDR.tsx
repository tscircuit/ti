import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC3"],
  pin2: ["IN_N"],
  pin3: ["IN_P"],
  pin4: ["V_NEG"],
  pin5: ["NC1"],
  pin6: ["VOUT"],
  pin7: ["V_POS"],
  pin8: ["NC2"],
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin5: { doNotConnect: true },
  pin8: { doNotConnect: true },
} as const;

export const OPA365AIDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C543070"],
      }}
      manufacturerPartNumber="OPA365AIDR"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C543070.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C543070.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default OPA365AIDR;
