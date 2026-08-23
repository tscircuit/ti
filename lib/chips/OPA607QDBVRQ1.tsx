import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["VS_NEG"],
  pin3: ["IN_P"],
  pin4: ["IN_N"],
  pin5: ["VS_POS"],
} as const;

export const OPA607QDBVRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C4366361"],
      }}
      manufacturerPartNumber="OPA607QDBVRQ1"
      footprint="dfn6_missing(5)_p0.95mm_w3.6999mm_pl1.1mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4366361.obj?uuid=ba304048957a4ddf80723501e9ecd54e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4366361.step?uuid=ba304048957a4ddf80723501e9ecd54e",
        pcbRotationOffset: 270,
        modelOriginPosition: {
          x: 0.00011430000017753628,
          y: -0.000025400000140507473,
          z: -0.75,
        },
      }}
      {...props}
    />
  );
};

export default OPA607QDBVRQ1;
