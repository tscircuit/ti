import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["pin32"],
  pin33: ["pin33"],
  pin34: ["pin34"],
  pin35: ["pin35"],
  pin36: ["DVSS"],
  pin37: ["DVCC"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["AVSS1"],
  pin42: ["pin42"],
  pin43: ["pin43"],
  pin44: ["AVSS2"],
  pin45: ["pin45"],
  pin46: ["pin46"],
  pin47: ["AVSS3"],
  pin48: ["AVCC"],
  pin49: ["EP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin49: [...pinLabels["pin49"], "thermalpad"],
} as const;

export const MSP430FR5869IRGZR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2053792"],
      }}
      manufacturerPartNumber="MSP430FR5869IRGZR"
      footprint="qfn48_thermalpad4.1mmx4.1mm_p0.4999mm_h7.9998mm_pw0.28mm_pl0.785mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2053792.obj?uuid=99e2e98faab349e7a106b12aaf816c8b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2053792.step?uuid=99e2e98faab349e7a106b12aaf816c8b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.05 },
      }}
      {...props}
    />
  );
};

export default MSP430FR5869IRGZR;
