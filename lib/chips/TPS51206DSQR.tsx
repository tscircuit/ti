import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDDQSNS"],
  pin2: ["VLDOIN"],
  pin3: ["VTT"],
  pin4: ["PGND"],
  pin5: ["VTTSNS"],
  pin6: ["VTTREF"],
  pin7: ["S3"],
  pin8: ["GND"],
  pin9: ["S5"],
  pin10: ["VDD"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresGround: true },
  pin10: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin11: [...pinLabels["pin11"], "thermalpad"],
} as const;

export const TPS51206DSQR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C88038"],
      }}
      manufacturerPartNumber="TPS51206DSQR"
      footprint="dfn10_thermalpad0.9mmx1.5mm_p0.4mm_w2.6mm_pw0.2mm_pl0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C88038.obj?uuid=d3834a0f96384a6caaea40e2753c5e77",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C88038.step?uuid=d3834a0f96384a6caaea40e2753c5e77",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0, y: 0.000012700000013410317, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS51206DSQR;
