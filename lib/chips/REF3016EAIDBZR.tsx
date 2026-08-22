import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN"],
  pin2: ["OUT"],
  pin3: ["GND"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
} as const;

export const REF3016EAIDBZR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C54120489"],
      }}
      manufacturerPartNumber="REF3016EAIDBZR"
      footprint="sot23w_p1.104mm_pw0.5176mm_pl1.0656mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C54120489.obj?uuid=cefd4596db214da394d9632b2b88f8f2",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C54120489.step?uuid=cefd4596db214da394d9632b2b88f8f2",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default REF3016EAIDBZR;
