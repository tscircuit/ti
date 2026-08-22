import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT1"],
  pin2: ["IN1_N"],
  pin3: ["IN1_P"],
  pin4: ["V_NEG"],
  pin5: ["IN2_P"],
  pin6: ["IN2_N"],
  pin7: ["OUT2"],
  pin8: ["V_POS"],
} as const;

export const LM393PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C7956"],
      }}
      manufacturerPartNumber="LM393PWR"
      footprint="dfn8_pillpads_p0.65mm_w7.3082mm_pw0.353mm_pl1.454mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C7956.obj?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C7956.step?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default LM393PWR;
