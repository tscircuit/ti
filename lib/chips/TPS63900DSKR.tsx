import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["EN"],
  pin2: ["SEL"],
  pin3: ["CFG1"],
  pin4: ["CFG2"],
  pin5: ["CFG3"],
  pin6: ["VOUT"],
  pin7: ["LX2"],
  pin8: ["GND"],
  pin9: ["LX1"],
  pin10: ["VIN"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin10: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin11: [...pinLabels["pin11"], "thermalpad"],
} as const;

export const TPS63900DSKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1518762"],
      }}
      manufacturerPartNumber="TPS63900DSKR"
      footprint="dfn10_thermalpad1.2mmx2mm_p0.4999mm_w2.9802mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1518762.obj?uuid=af5700a4f06e4e2f891418cb4d2a81cc",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1518762.step?uuid=af5700a4f06e4e2f891418cb4d2a81cc",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0.00006350000001020817,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TPS63900DSKR;
