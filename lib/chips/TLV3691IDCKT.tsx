import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN_POS"],
  pin2: ["GND"],
  pin3: ["IN_NEG"],
  pin4: ["OUT"],
  pin5: ["VCC"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const TLV3691IDCKT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2865450"],
      }}
      manufacturerPartNumber="TLV3691IDCKT"
      footprint="dfn6_missing(5)_p0.65mm_w3.1001mm_pw0.4mm_pl0.9mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865450.obj?uuid=57a52c7c59524d2a8f4328bf1d262d36",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865450.step?uuid=57a52c7c59524d2a8f4328bf1d262d36",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999842880061,
          y: 0.00005080000005364127,
          z: -0.58,
        },
      }}
      {...props}
    />
  );
};

export default TLV3691IDCKT;
