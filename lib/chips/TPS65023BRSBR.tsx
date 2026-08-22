import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DEFDCDC3"],
  pin2: ["VDCDC3"],
  pin3: ["PGND3"],
  pin4: ["L3"],
  pin5: ["VINDCDC3"],
  pin6: ["VINDCDC1"],
  pin7: ["L1"],
  pin8: ["PGND1"],
  pin9: ["VDCDC1"],
  pin10: ["DEFDCDC1"],
  pin11: ["HOT_RESET"],
  pin12: ["DEFLDO1"],
  pin13: ["DEFLDO2"],
  pin14: ["VSYSIN"],
  pin15: ["VBACKUP"],
  pin16: ["VRTC"],
  pin17: ["AGND2"],
  pin18: ["VLDO2"],
  pin19: ["VINLDO"],
  pin20: ["VLDO1"],
  pin21: ["LOWBAT"],
  pin22: ["LDO_EN"],
  pin23: ["DCDC3_EN"],
  pin24: ["DCDC2_EN"],
  pin25: ["DCDC1_EN"],
  pin26: ["TRESPWRON"],
  pin27: ["RESPWRON"],
  pin28: ["INT"],
  pin29: ["SDAT"],
  pin30: ["SCLK"],
  pin31: ["PWRFAIL"],
  pin32: ["DEFDCDC2"],
  pin33: ["VDCDC2"],
  pin34: ["PGND2"],
  pin35: ["L2"],
  pin36: ["VINDCDC2"],
  pin37: ["VCC"],
  pin38: ["PWRFAIL_SNS"],
  pin39: ["LOWBAT_SNS"],
  pin40: ["AGND1"],
  pin41: ["EP"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin8: { requiresGround: true },
  pin17: { requiresGround: true },
  pin34: { requiresGround: true },
  pin37: { requiresPower: true },
  pin40: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin41: [...pinLabels["pin41"], "thermalpad"],
} as const;

export const TPS65023BRSBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C544654"],
      }}
      manufacturerPartNumber="TPS65023BRSBR"
      footprint="qfn40_thermalpad3.5mmx3.5mm_pillpads_p0.4mm_h6mm_pw0.2mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C544654.obj?uuid=b901130a495244eea090c05494d14d2c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C544654.step?uuid=b901130a495244eea090c05494d14d2c",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00012699999999910005,
          y: -0.00012700000000620548,
          z: -0.01,
        },
      }}
      {...props}
    />
  );
};

export default TPS65023BRSBR;
