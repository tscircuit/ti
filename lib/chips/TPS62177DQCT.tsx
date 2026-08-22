import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PGND"],
  pin2: ["VIN"],
  pin3: ["EN"],
  pin4: ["NC"],
  pin5: ["FB"],
  pin6: ["AGND"],
  pin7: ["PG"],
  pin8: ["SLEEP"],
  pin9: ["SW"],
  pin10: ["VOS"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresPower: true },
  pin4: { doNotConnect: true },
  pin6: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin11: [...pinLabels["pin11"], "thermalpad"],
} as const;

export const TPS62177DQCT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C128616"],
      }}
      manufacturerPartNumber="TPS62177DQCT"
      footprint="dfn10_thermalpad0.85mmx2.4003mm_p0.508mm_w2.733mm_pw0.254mm_pl0.701mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C128616.obj?uuid=57b568ebb87444ba88a3be35f5df6e54",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C128616.step?uuid=57b568ebb87444ba88a3be35f5df6e54",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012699999999199463,
          y: -0.0007619999999946003,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TPS62177DQCT;
