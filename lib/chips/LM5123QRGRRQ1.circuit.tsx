import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CSP"],
  pin2: ["CSN"],
  pin3: ["pin3"],
  pin4: ["PGOOD"],
  pin5: ["HO"],
  pin6: ["SW"],
  pin7: ["HB"],
  pin8: ["BIAS"],
  pin9: ["VCC"],
  pin10: ["PGND"],
  pin11: ["LO"],
  pin12: ["MODE"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["RT"],
  pin16: ["pin16"],
  pin17: ["SS"],
  pin18: ["TRK"],
  pin19: ["AGND"],
  pin20: ["COMP"],
  pin21: ["GND"],
} as const;

const pinAttributes = {
  pin9: { requiresPower: true },
  pin10: { requiresGround: true },
  pin19: { requiresGround: true },
  pin21: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const LM5123QRGRRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3188675"],
      }}
      manufacturerPartNumber="LM5123QRGRRQ1"
      footprint="qfn20_thermalpad2.05mmx2.05mm_p0.4999mm_w4.5019mm_h4.5014mm_pw0.28mm_pl0.8mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3188675.obj?uuid=8499483871a04dce8962a3345fdf0799",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3188675.step?uuid=8499483871a04dce8962a3345fdf0799",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.00002539999979944696,
          y: 0.0001524000001609238,
          z: -0.03,
        },
      }}
      {...props}
    />
  );
};

export default LM5123QRGRRQ1;
