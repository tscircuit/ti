import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["K"],
  pin2: ["A"],
} as const;

export const TPD1E04U04DPYT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1973531"],
      }}
      manufacturerPartNumber="TPD1E04U04DPYT"
      footprint="res_p0.7mm_pw0.4mm_ph0.7mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1973531.obj?uuid=a0892bf8c7334ec99e98e842d5af3936",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1973531.step?uuid=a0892bf8c7334ec99e98e842d5af3936",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -0.0002540000000408327, y: 0, z: -0.01 },
      }}
      {...props}
    />
  );
};

export default TPD1E04U04DPYT;
