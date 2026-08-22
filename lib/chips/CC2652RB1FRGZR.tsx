import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RF_P"],
  pin2: ["RF_N"],
  pin3: ["X32K_Q1"],
  pin4: ["X32K_Q2"],
  pin5: ["DIO_0"],
  pin6: ["DIO_1"],
  pin7: ["DIO_2"],
  pin8: ["DIO_3"],
  pin9: ["DIO_4"],
  pin10: ["DIO_5"],
  pin11: ["DIO_6"],
  pin12: ["DIO_7"],
  pin13: ["VDDS2"],
  pin14: ["DIO_8"],
  pin15: ["DIO_9"],
  pin16: ["DIO_10"],
  pin17: ["DIO_11"],
  pin18: ["DIO_12"],
  pin19: ["DIO_13"],
  pin20: ["DIO_14"],
  pin21: ["DIO_15"],
  pin22: ["VDDS3"],
  pin23: ["DCOUPL"],
  pin24: ["JTAG_TMSC"],
  pin25: ["JTAG_TCKC"],
  pin26: ["DIO_16"],
  pin27: ["DIO_17"],
  pin28: ["DIO_18"],
  pin29: ["DIO_19"],
  pin30: ["DIO_20"],
  pin31: ["DIO_21"],
  pin32: ["DIO_22"],
  pin33: ["DCDC_SW"],
  pin34: ["VDDS_DCDC"],
  pin35: ["RESET_N"],
  pin36: ["DIO_23"],
  pin37: ["DIO_24"],
  pin38: ["DIO_25"],
  pin39: ["DIO_26"],
  pin40: ["DIO_27"],
  pin41: ["DIO_28"],
  pin42: ["DIO_29"],
  pin43: ["DIO_30"],
  pin44: ["VDDS"],
  pin45: ["VDDR"],
  pin46: ["X48M_N"],
  pin47: ["X48M_P"],
  pin48: ["VDDR_RF"],
  pin49: ["EP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin49: [...pinLabels["pin49"], "thermalpad"],
} as const;

export const CC2652RB1FRGZR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1856293"],
      }}
      manufacturerPartNumber="CC2652RB1FRGZR"
      footprint="qfn48_thermalpad5.15mmx5.15mm_pillpads_p0.4999mm_h7.8051mm_pw0.28mm_pl0.7902mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1856293.obj?uuid=2ca5091c441a42c9938a9afa5eb4b100",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1856293.step?uuid=2ca5091c441a42c9938a9afa5eb4b100",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.05 },
      }}
      {...props}
    />
  );
};

export default CC2652RB1FRGZR;
