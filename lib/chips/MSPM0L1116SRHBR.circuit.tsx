import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PA0"],
  pin2: ["PA1"],
  pin3: ["NRST"],
  pin4: ["VDD"],
  pin5: ["VSS"],
  pin6: ["PA2"],
  pin7: ["PA3"],
  pin8: ["PA4"],
  pin9: ["PA5"],
  pin10: ["PA6"],
  pin11: ["PA7"],
  pin12: ["PA8"],
  pin13: ["PA9"],
  pin14: ["PA10"],
  pin15: ["PA11"],
  pin16: ["PA12"],
  pin17: ["PA13"],
  pin18: ["PA14"],
  pin19: ["PA15"],
  pin20: ["PA16"],
  pin21: ["PA17"],
  pin22: ["PA18"],
  pin23: ["PA19"],
  pin24: ["PA20"],
  pin25: ["PA21"],
  pin26: ["PA22"],
  pin27: ["PA23"],
  pin28: ["PA24"],
  pin29: ["PA25"],
  pin30: ["PA26"],
  pin31: ["PA27"],
  pin32: ["VCORE"],
  pin33: ["EP"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin5: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const MSPM0L1116SRHBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C52269261"],
      }}
      manufacturerPartNumber="MSPM0L1116SRHBR"
      footprint="qfn32_thermalpad3.5mmx3.5mm_p0.4999mm_h5.6798mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52269261.obj?uuid=dc6d706a074f4772a31a7b2ff02612ff",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52269261.step?uuid=dc6d706a074f4772a31a7b2ff02612ff",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999956566899,
          y: -0.000012700000070253736,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default MSPM0L1116SRHBR;
