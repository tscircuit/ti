import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SYS"],
  pin2: ["BAT"],
  pin3: ["STAT2"],
  pin4: ["CE"],
  pin5: ["GND"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["ISET"],
  pin9: ["STAT1"],
  pin10: ["IN"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin11: [...pinLabels["pin11"], "thermalpad"],
} as const;

export const BQ25185DLHR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C19725033"],
      }}
      manufacturerPartNumber="BQ25185DLHR"
      footprint="dfn10_thermalpad0.9mmx1.5mm_p0.4mm_w2.6001mm_pw0.2mm_pl0.5mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19725033.obj?uuid=84b6971711e948be84ed2f33439ec745",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19725033.step?uuid=84b6971711e948be84ed2f33439ec745",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.00007619999996677507,
          y: -0.005038100000210766,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default BQ25185DLHR;
