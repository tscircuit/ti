import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["CE"],
  pin3: ["STAT"],
  pin4: ["TS"],
  pin5: ["PG"],
  pin6: ["VREF"],
  pin7: ["ISET"],
  pin8: ["VFB"],
  pin9: ["SRN"],
  pin10: ["SRP"],
  pin11: ["GND"],
  pin12: ["REGN"],
  pin13: ["LODRV"],
  pin14: ["PH"],
  pin15: ["HIDRV"],
  pin16: ["BTST"],
  pin17: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin11: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const BQ24600RVAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C157568"],
      }}
      manufacturerPartNumber="BQ24600RVAR"
      footprint="qfn16_thermalpad2.14mmx2.14mm_p0.5001mm_h4.1802mm_pw0.28mm_pl0.665mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C157568.obj?uuid=0248695823ff4ca7a70eb2f6fde20dd2",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C157568.step?uuid=0248695823ff4ca7a70eb2f6fde20dd2",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default BQ24600RVAR;
