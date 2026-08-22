import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ACN"],
  pin2: ["ACP"],
  pin3: ["CMSRC"],
  pin4: ["ACDRV"],
  pin5: ["ACOK"],
  pin6: ["ACDET"],
  pin7: ["IOUT"],
  pin8: ["SDA"],
  pin9: ["SCL"],
  pin10: ["ILIM"],
  pin11: ["BATDRV"],
  pin12: ["SRN"],
  pin13: ["SRP"],
  pin14: ["GND"],
  pin15: ["LODRV"],
  pin16: ["REGN"],
  pin17: ["BTST"],
  pin18: ["HIDRV"],
  pin19: ["PHASE"],
  pin20: ["VCC"],
  pin21: ["EP"],
} as const;

const pinAttributes = {
  pin14: { requiresGround: true },
  pin20: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const BQ24725ARGRR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C97041"],
      }}
      manufacturerPartNumber="BQ24725ARGRR"
      footprint="qfn20_thermalpad2.05mmx2.05mm_p0.4999mm_w4.5019mm_h4.5014mm_pw0.28mm_pl0.8mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C97041.obj?uuid=9e3f3df176be46c59724c74fc1b1dc60",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C97041.step?uuid=9e3f3df176be46c59724c74fc1b1dc60",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.03 },
      }}
      {...props}
    />
  );
};

export default BQ24725ARGRR;
