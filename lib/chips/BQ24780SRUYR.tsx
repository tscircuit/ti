import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ACN"],
  pin2: ["ACP"],
  pin3: ["CMSRC"],
  pin4: ["ACDRV"],
  pin5: ["ACOK"],
  pin6: ["ACDET"],
  pin7: ["IADP"],
  pin8: ["IDCHG"],
  pin9: ["PMON"],
  pin10: ["PROCHOT"],
  pin11: ["SDA"],
  pin12: ["SCL"],
  pin13: ["CMPIN"],
  pin14: ["CMPOUT"],
  pin15: ["BATPRES"],
  pin16: ["TB_STAT"],
  pin17: ["BATSRC"],
  pin18: ["BATDRV"],
  pin19: ["SRN"],
  pin20: ["SRP"],
  pin21: ["ILIM"],
  pin22: ["GND"],
  pin23: ["LODRV"],
  pin24: ["REGN"],
  pin25: ["BTST"],
  pin26: ["HIDRV"],
  pin27: ["PHASE"],
  pin28: ["VCC"],
  pin29: ["EP"],
} as const;

const pinAttributes = {
  pin22: { requiresGround: true },
  pin28: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin29: [...pinLabels["pin29"], "thermalpad"],
} as const;

export const BQ24780SRUYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C882400"],
      }}
      manufacturerPartNumber="BQ24780SRUYR"
      footprint="qfn28_thermalpad_p0.4mm_h5mm_pw0.2mm_pl0.8mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882400.obj?uuid=64fa241800284841a77944f7bacc5a9d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882400.step?uuid=64fa241800284841a77944f7bacc5a9d",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default BQ24780SRUYR;
