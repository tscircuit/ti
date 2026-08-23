import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["SS"],
  pin3: ["COMP"],
  pin4: ["FB"],
  pin5: ["ISNS_NEG"],
  pin6: ["ISNS_POS"],
  pin7: ["VIN"],
  pin8: ["LDRV"],
  pin9: ["PGND"],
  pin10: ["VCC"],
  pin11: ["BOOT"],
  pin12: ["SW"],
  pin13: ["HDRV"],
  pin14: ["PGOOD"],
  pin15: ["EN"],
  pin16: ["AGND"],
  pin17: ["EP"],
} as const;

const pinAttributes = {
  pin7: { requiresPower: true },
  pin9: { requiresGround: true },
  pin10: { requiresPower: true },
  pin16: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const TPS43061RTET = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C544914"],
      }}
      manufacturerPartNumber="TPS43061RTET"
      footprint="qfn16_thermalpad0.8mmx1.2mm_p0.5004mm_pw0.28mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C544914.obj?uuid=08ca848e7eab4e9ca37eebf3083552a1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C544914.step?uuid=08ca848e7eab4e9ca37eebf3083552a1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999999199463, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default TPS43061RTET;
