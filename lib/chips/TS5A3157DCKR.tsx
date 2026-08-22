import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NO"],
  pin2: ["GND"],
  pin3: ["NC"],
  pin4: ["COM"],
  pin5: ["V_POS"],
  pin6: ["IN"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin3: { doNotConnect: true },
} as const;

export const TS5A3157DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C91307"],
      }}
      manufacturerPartNumber="TS5A3157DCKR"
      footprint="dfn6_p0.65mm_w2.7321mm_pw0.315mm_pl0.841mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91307.obj?uuid=7a0f6368eaad4f179b3263108385ad41",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91307.step?uuid=7a0f6368eaad4f179b3263108385ad41",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: -0.1 },
      }}
      {...props}
    />
  );
};

export default TS5A3157DCKR;
