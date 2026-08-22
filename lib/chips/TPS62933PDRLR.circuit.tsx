import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RT"],
  pin2: ["EN"],
  pin3: ["VIN"],
  pin4: ["GND"],
  pin5: ["SW"],
  pin6: ["BST"],
  pin7: ["PG"],
  pin8: ["FB"],
} as const;

const pinAttributes = {
  pin3: { requiresPower: true },
  pin4: { requiresGround: true },
} as const;

export const TPS62933PDRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5219254"],
      }}
      manufacturerPartNumber="TPS62933PDRLR"
      footprint="soic_p0.5001mm_w1.9602mm_pw0.28mm_pl0.68mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5219254.obj?uuid=9c40631a05ef402783341361e9d41aff",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5219254.step?uuid=9c40631a05ef402783341361e9d41aff",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999984988608, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default TPS62933PDRLR;
