import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["GND"],
  pin3: ["pin3"],
  pin4: ["DONE"],
  pin5: ["DRVn"],
  pin6: ["pin6"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
} as const;

export const TPL5111DDCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2870554"],
      }}
      manufacturerPartNumber="TPL5111DDCR"
      footprint="dfn6_p0.95mm_w3.6mm_pw0.55mm_pl1.2mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2870554.obj?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2870554.step?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000013410317, z: 0.050795 },
      }}
      {...props}
    />
  );
};

export default TPL5111DDCR;
