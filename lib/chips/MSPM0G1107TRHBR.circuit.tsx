import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["PA1"],
  pin3: ["NRST"],
  pin4: ["VDD"],
  pin5: ["VSS"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["PA8"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["PA11"],
  pin16: ["pin16"],
  pin17: ["PA13"],
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

export const MSPM0G1107TRHBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C33740407"],
      }}
      manufacturerPartNumber="MSPM0G1107TRHBR"
      footprint="qfn32_thermalpad3.45mmx3.45mm_p0.4999mm_h5.6798mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33740407.obj?uuid=7a88cc0a02294e34af83983009a3c50c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33740407.step?uuid=7a88cc0a02294e34af83983009a3c50c",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000025400000140507473,
          y: -0.0001269999999067295,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default MSPM0G1107TRHBR;
