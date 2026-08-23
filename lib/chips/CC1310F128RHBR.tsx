import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RF_P"],
  pin2: ["RF_N"],
  pin3: ["RX_TX"],
  pin4: ["X32K_Q1"],
  pin5: ["X32K_Q2"],
  pin6: ["DIO_0"],
  pin7: ["DIO_1"],
  pin8: ["DIO_2"],
  pin9: ["DIO_3"],
  pin10: ["DIO_4"],
  pin11: ["VDDS2"],
  pin12: ["DCOUPL"],
  pin13: ["JTAG_TMSC"],
  pin14: ["JTAG_TCKC"],
  pin15: ["DIO_5"],
  pin16: ["DIO_6"],
  pin17: ["DCDC_SW"],
  pin18: ["VDDS_DCDC"],
  pin19: ["RESET_N"],
  pin20: ["DIO_7"],
  pin21: ["DIO_8"],
  pin22: ["DIO_9"],
  pin23: ["DIO_10"],
  pin24: ["DIO_11"],
  pin25: ["DIO_12"],
  pin26: ["DIO_13"],
  pin27: ["DIO_14"],
  pin28: ["VDDS"],
  pin29: ["VDDR"],
  pin30: ["X24M_P"],
  pin31: ["X24M_N"],
  pin32: ["VDDR_RF"],
  pin33: ["EP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const CC1310F128RHBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C69860"],
      }}
      manufacturerPartNumber="CC1310F128RHBR"
      footprint="qfn32_thermalpad3.5mmx3.5mm_p0.4999mm_h5.6798mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C69860.obj?uuid=5adfeada1ad649a799027e41dc9e81f9",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C69860.step?uuid=5adfeada1ad649a799027e41dc9e81f9",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999956566899, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default CC1310F128RHBR;
