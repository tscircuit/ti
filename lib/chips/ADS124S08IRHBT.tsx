import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["AINCOM"],
  pin2: ["AIN5"],
  pin3: ["AIN4"],
  pin4: ["AIN3"],
  pin5: ["AIN2"],
  pin6: ["AIN1"],
  pin7: ["AIN0"],
  pin8: ["pin8"],
  pin9: ["CS"],
  pin10: ["DIN"],
  pin11: ["SCLK"],
  pin12: ["pin12"],
  pin13: ["DRDY"],
  pin14: ["DGND"],
  pin15: ["IOVDD"],
  pin16: ["DVDD"],
  pin17: ["CLK"],
  pin18: ["RESET"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["REFOUT"],
  pin24: ["REFCOM"],
  pin25: ["NC"],
  pin26: ["AVDD"],
  pin27: ["AVSS"],
  pin28: ["AVSS_SW"],
  pin29: ["REFN0"],
  pin30: ["REFP0"],
  pin31: ["pin31"],
  pin32: ["pin32"],
  pin33: ["EP"],
} as const;

const pinAttributes = {
  pin25: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const ADS124S08IRHBT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2655452"],
      }}
      manufacturerPartNumber="ADS124S08IRHBT"
      footprint="qfn32_thermalpad2.1mmx2.1mm_p0.4999mm_h5.6798mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2655452.obj?uuid=cff7da3f491340dd9bd5f3aa3f19e9b5",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2655452.step?uuid=cff7da3f491340dd9bd5f3aa3f19e9b5",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -1 },
      }}
      {...props}
    />
  );
};

export default ADS124S08IRHBT;
