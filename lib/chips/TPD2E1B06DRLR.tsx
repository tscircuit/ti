import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IOA1"],
  pin2: ["IOB1"],
  pin3: ["NC2"],
  pin4: ["IOB2"],
  pin5: ["IOA2"],
  pin6: ["NC1"],
} as const;

const pinAttributes = {
  pin3: { doNotConnect: true },
  pin6: { doNotConnect: true },
} as const;

export const TPD2E1B06DRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1974127"],
      }}
      manufacturerPartNumber="TPD2E1B06DRLR"
      footprint="dfn6_p0.4999mm_w1.7999mm_pw0.25mm_pl0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1974127.obj?uuid=2f83ac3d23f34d74addd6042b9238491",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1974127.step?uuid=2f83ac3d23f34d74addd6042b9238491",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.01998979999999051, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPD2E1B06DRLR;
