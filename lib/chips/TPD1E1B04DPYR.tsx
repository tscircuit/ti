import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["C"],
  pin2: ["A"],
} as const;

export const TPD1E1B04DPYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C779408"],
      }}
      manufacturerPartNumber="TPD1E1B04DPYR"
      footprint="res_p1mm_pw0.6mm_ph0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C779408.obj?uuid=f6b37c6d5ddb4dd6a33fc5b67c867f96",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C779408.step?uuid=f6b37c6d5ddb4dd6a33fc5b67c867f96",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00005080000005364127,
          y: -0.00007619999996677507,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TPD1E1B04DPYR;
