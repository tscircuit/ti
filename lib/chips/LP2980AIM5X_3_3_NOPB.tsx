import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN"],
  pin2: ["GND"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["OUT"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const LP2980AIM5X_3_3_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2871053"],
      }}
      manufacturerPartNumber="LP2980AIM5X-3.3/NOPB"
      footprint="dfn6_missing(5)_p0.95mm_w3.2001mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871053.obj?uuid=8c971aea3af54c53b74baeb1f489d393",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871053.step?uuid=8c971aea3af54c53b74baeb1f489d393",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012699999956566899,
          y: 0.00006349999989652133,
          z: -0.7,
        },
      }}
      {...props}
    />
  );
};

export default LP2980AIM5X_3_3_NOPB;
