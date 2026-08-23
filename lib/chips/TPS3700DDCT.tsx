import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUTA"],
  pin2: ["GND"],
  pin3: ["INA_POS"],
  pin4: ["INB_NEG"],
  pin5: ["VDD"],
  pin6: ["OUTB"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const TPS3700DDCT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C702147"],
      }}
      manufacturerPartNumber="TPS3700DDCT"
      footprint="dfn6_p0.95mm_w3.2mm_pw0.532mm_pl0.8mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702147.obj?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702147.step?uuid=222e8593009c495bb3d3af0c08fa5e6a",
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

export default TPS3700DDCT;
