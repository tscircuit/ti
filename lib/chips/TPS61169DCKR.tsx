import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SW"],
  pin2: ["GND"],
  pin3: ["FB"],
  pin4: ["CTRL"],
  pin5: ["VIN"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const TPS61169DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C71045"],
      }}
      manufacturerPartNumber="TPS61169DCKR"
      footprint="dfn6_missing(5)_p0.65mm_w3.1001mm_pw0.4mm_pl0.9mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C71045.obj?uuid=2a221d464efb4ebcb99e4ea11aff9052",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C71045.step?uuid=2a221d464efb4ebcb99e4ea11aff9052",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0.000012699999842880061,
          y: 0.00005080000005364127,
          z: -0.1,
        },
      }}
      {...props}
    />
  );
};

export default TPS61169DCKR;
