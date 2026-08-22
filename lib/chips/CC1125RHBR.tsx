import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD_GUARD"],
  pin2: ["RESET_N"],
  pin3: ["GPIO3"],
  pin4: ["GPIO2"],
  pin5: ["DVDD1"],
  pin6: ["DCPL"],
  pin7: ["SI"],
  pin8: ["SCLK"],
  pin9: ["pin9"],
  pin10: ["GPIO0"],
  pin11: ["CSn"],
  pin12: ["DVDD2"],
  pin13: ["AVDD_IF"],
  pin14: ["RBIAS"],
  pin15: ["AVDD_RF"],
  pin16: ["pin16"],
  pin17: ["PA"],
  pin18: ["TRX_SW"],
  pin19: ["LNA_P"],
  pin20: ["LNA_N"],
  pin21: ["DCPL_VCO"],
  pin22: ["AVDD_SYNTH1"],
  pin23: ["LPF0"],
  pin24: ["LPF1"],
  pin25: ["AVDD_PFD_CHP"],
  pin26: ["DCPL_PFD_CHP"],
  pin27: ["AVDD_SYNTH2"],
  pin28: ["AVDD_XOSC"],
  pin29: ["DCPL_XOSC"],
  pin30: ["XOSC_Q1"],
  pin31: ["XOSC_Q2"],
  pin32: ["EXT_XOSC"],
  pin33: ["EXP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const CC1125RHBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C133234"],
      }}
      manufacturerPartNumber="CC1125RHBR"
      footprint="qfn32_thermalpad3.45mmx3.45mm_p0.4999mm_h5.6798mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C133234.obj?uuid=8b11b4b75acf4c5eaea11a6ae95d6a9c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C133234.step?uuid=8b11b4b75acf4c5eaea11a6ae95d6a9c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default CC1125RHBR;
