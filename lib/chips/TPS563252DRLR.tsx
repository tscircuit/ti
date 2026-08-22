import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["SW"],
  pin3: ["GND"],
  pin4: ["PG"],
  pin5: ["EN"],
  pin6: ["FB"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin3: { requiresGround: true },
} as const;

export const TPS563252DRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C19188399"],
      }}
      manufacturerPartNumber="TPS563252DRLR"
      footprint="dfn6_p0.4999mm_w1.9602mm_pw0.28mm_pl0.68mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19188399.obj?uuid=069fc0617071490c9eb00ae8845441bf",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19188399.step?uuid=069fc0617071490c9eb00ae8845441bf",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00005080000005364127,
          y: 0.0001015999999935957,
          z: -0.55,
        },
      }}
      {...props}
    />
  );
};

export default TPS563252DRLR;
