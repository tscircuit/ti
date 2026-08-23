import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["D_POS"],
  pin2: ["D_NEG"],
  pin3: ["ID"],
  pin4: ["GND"],
  pin5: ["NC"],
  pin6: ["VBUS"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin5: { doNotConnect: true },
} as const;

export const TPD4S012DRYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C96506"],
      }}
      manufacturerPartNumber="TPD4S012DRYR"
      footprint="dfn6_p0.4999mm_w1.2901mm_pw0.3mm_pl0.52mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C96506.obj?uuid=2346d6f8ebbb4b80ae9c898969964250",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C96506.step?uuid=2346d6f8ebbb4b80ae9c898969964250",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.00012700000002041634, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPD4S012DRYR;
