import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["EN"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["FB"],
  pin6: ["PG"],
  pin7: ["SW"],
  pin8: ["GND"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin8: { requiresGround: true },
} as const;

export const TPS628502QDRLRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3193229"],
      }}
      manufacturerPartNumber="TPS628502QDRLRQ1"
      footprint="soic_p0.5001mm_w1.9604mm_pw0.28mm_pl0.68mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3193229.obj?uuid=36a9e7915d7846da9e342bb5ad15102b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3193229.step?uuid=36a9e7915d7846da9e342bb5ad15102b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.0022879000000165517, z: -0.135 },
      }}
      {...props}
    />
  );
};

export default TPS628502QDRLRQ1;
