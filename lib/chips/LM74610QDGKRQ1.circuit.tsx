import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCAPL"],
  pin2: ["Gate_Pull_Down"],
  pin3: ["NC1"],
  pin4: ["Anode"],
  pin5: ["NC2"],
  pin6: ["Gate_Drive"],
  pin7: ["VCAPH"],
  pin8: ["Cathode"],
} as const;

const pinAttributes = {
  pin3: { doNotConnect: true },
  pin5: { doNotConnect: true },
} as const;

export const LM74610QDGKRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2649431"],
      }}
      manufacturerPartNumber="LM74610QDGKRQ1"
      footprint="dfn8_pillpads_p0.65mm_w5.9241mm_pw0.364mm_pl1.662mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2649431.obj?uuid=745f4a63f92f44b78c4ba3925feaa542",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2649431.step?uuid=745f4a63f92f44b78c4ba3925feaa542",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0,
          z: -0.149083,
        },
      }}
      {...props}
    />
  );
};

export default LM74610QDGKRQ1;
