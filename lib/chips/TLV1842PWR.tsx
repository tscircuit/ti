import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT1"],
  pin2: ["IN1_NEG"],
  pin3: ["IN1_POS"],
  pin4: ["V_NEG"],
  pin5: ["IN2_POS"],
  pin6: ["IN2_NEG"],
  pin7: ["OUT2"],
  pin8: ["V_POS"],
} as const;

export const TLV1842PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C30105621"],
      }}
      manufacturerPartNumber="TLV1842PWR"
      footprint="dfn8_pillpads_p0.65mm_w7.3082mm_pw0.353mm_pl1.454mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C30105621.obj?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C30105621.step?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TLV1842PWR;
