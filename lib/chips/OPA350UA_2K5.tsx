import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC1"],
  pin2: ["IN_N"],
  pin3: ["IN_P"],
  pin4: ["V_NEG"],
  pin5: ["NC3"],
  pin6: ["OUTPUT"],
  pin7: ["V_POS"],
  pin8: ["NC2"],
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin5: { doNotConnect: true },
  pin8: { doNotConnect: true },
} as const;

export const OPA350UA_2K5 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C13388"],
      }}
      manufacturerPartNumber="OPA350UA/2K5"
      footprint="soic8_pillpads_w7.3604mm_pw0.5684mm_pl1.9502mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C13388.obj?uuid=7abc64c95a1a4a04a4ef38f9097c870b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C13388.step?uuid=7abc64c95a1a4a04a4ef38f9097c870b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default OPA350UA_2K5;
