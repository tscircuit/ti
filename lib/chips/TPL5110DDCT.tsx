import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["GND"],
  pin3: ["pin3"],
  pin4: ["DONE"],
  pin5: ["DRV"],
  pin6: ["pin6"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
} as const;

export const TPL5110DDCT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C125830"],
      }}
      manufacturerPartNumber="TPL5110DDCT"
      footprint="dfn6_p0.95mm_w3.2mm_pw0.532mm_pl0.8mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C125830.obj?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C125830.step?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: -0.0001269999999067295,
          y: -0.000012699999956566899,
          z: 0.050795,
        },
      }}
      {...props}
    />
  );
};

export default TPL5110DDCT;
