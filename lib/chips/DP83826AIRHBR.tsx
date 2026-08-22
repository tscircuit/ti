import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ModeSelect"],
  pin2: ["CEXT"],
  pin3: ["VDDA3V3"],
  pin4: ["RD_M"],
  pin5: ["RD_P"],
  pin6: ["TD_M"],
  pin7: ["TD_P"],
  pin8: ["XO"],
  pin9: ["pin9"],
  pin10: ["RBIAS"],
  pin11: ["MDIO"],
  pin12: ["MDC"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["VDDIO"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["TX_EN"],
  pin24: ["TX_D0"],
  pin25: ["TX_D1"],
  pin26: ["TX_D2"],
  pin27: ["TX_D23"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["RST_N"],
  pin33: ["EP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const DP83826AIRHBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C48705357"],
      }}
      manufacturerPartNumber="DP83826AIRHBR"
      footprint="qfn32_thermalpad2.1mmx2.1mm_p0.4999mm_h5.6798mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C48705357.obj?uuid=7685e4f639cd4b5f892184cbf2992268",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C48705357.step?uuid=7685e4f639cd4b5f892184cbf2992268",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00012700000002041634,
          y: -0.000025399999913133797,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default DP83826AIRHBR;
