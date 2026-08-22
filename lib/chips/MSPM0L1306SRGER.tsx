import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PA1"],
  pin2: ["NRST"],
  pin3: ["VDD"],
  pin4: ["VSS"],
  pin5: ["pin5"],
  pin6: ["PA3"],
  pin7: ["PA4"],
  pin8: ["PA9"],
  pin9: ["PA10"],
  pin10: ["PA11"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["PA17"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["VCORE"],
  pin24: ["PA0"],
  pin25: ["EP"],
} as const;

const pinAttributes = {
  pin3: { requiresPower: true },
  pin4: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin25: [...pinLabels["pin25"], "thermalpad"],
} as const;

export const MSPM0L1306SRGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C19189323"],
      }}
      manufacturerPartNumber="MSPM0L1306SRGER"
      footprint="qfn24_thermalpad2.45mmx2.45mm_p0.4999mm_w4.5998mm_h4.6001mm_pl0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19189323.obj?uuid=d7837941ee5a48928cbbb5a65ba7a879",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19189323.step?uuid=d7837941ee5a48928cbbb5a65ba7a879",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000025400000026820635, z: 0 },
      }}
      {...props}
    />
  );
};

export default MSPM0L1306SRGER;
