import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DGND_BUS"],
  pin2: ["USB_P"],
  pin3: ["USB_N"],
  pin4: ["DVDD_USB"],
  pin5: ["P1_5"],
  pin6: ["P1_4"],
  pin7: ["P1_3"],
  pin8: ["P1_2"],
  pin9: ["P1_1"],
  pin10: ["DVDD2"],
  pin11: ["P1_0"],
  pin12: ["P0_7"],
  pin13: ["P0_6"],
  pin14: ["P0_5"],
  pin15: ["P0_4"],
  pin16: ["P0_3"],
  pin17: ["P0_2"],
  pin18: ["P0_1"],
  pin19: ["P0_0"],
  pin20: ["RESET_N"],
  pin21: ["AVDD5"],
  pin22: ["XOSC_Q1"],
  pin23: ["XOSC_Q2"],
  pin24: ["AVDD3"],
  pin25: ["RF_P"],
  pin26: ["RF_N"],
  pin27: ["AVDD2"],
  pin28: ["AVDD1"],
  pin29: ["AVDD4"],
  pin30: ["R_BIAS"],
  pin31: ["AVDD6"],
  pin32: ["pin32"],
  pin33: ["pin33"],
  pin34: ["P2_2"],
  pin35: ["P2_1"],
  pin36: ["P2_0"],
  pin37: ["P1_7"],
  pin38: ["P1_6"],
  pin39: ["DVDD1"],
  pin40: ["DCOUPL"],
  pin41: ["pin41"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin41: [...pinLabels["pin41"], "thermalpad"],
} as const;

export const CC2540F256RHAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C22649"],
      }}
      manufacturerPartNumber="CC2540F256RHAR"
      footprint="qfn40_thermalpad4.6mmx4.6mm_p0.4999mm_pw0.28mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22649.obj?uuid=9c7dcadb820d4d49b8b80f27caa6b9a5",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22649.step?uuid=9c7dcadb820d4d49b8b80f27caa6b9a5",
        pcbRotationOffset: 270,
        modelOriginPosition: {
          x: -0.00005079999999679785,
          y: -0.00005079999999679785,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default CC2540F256RHAR;
