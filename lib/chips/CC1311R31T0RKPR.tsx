import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RF_P"],
  pin2: ["RF_N"],
  pin3: ["RX_TX"],
  pin4: ["X32K_Q1"],
  pin5: ["X32K_Q2"],
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
  pin16: ["VDDS3"],
  pin17: ["DCOUPL"],
  pin18: ["JTAG_TMSC"],
  pin19: ["JTAG_TCKC"],
  pin20: ["DIO_10"],
  pin21: ["DIO_11"],
  pin22: ["DIO_12"],
  pin23: ["DIO_13"],
  pin24: ["DIO_14"],
  pin25: ["DCDC_SW"],
  pin26: ["VDDS_DCDC"],
  pin27: ["RESET_N"],
  pin28: ["DIO_15"],
  pin29: ["DIO_16"],
  pin30: ["DIO_17"],
  pin31: ["DIO_18"],
  pin32: ["DIO_19"],
  pin33: ["DIO_20"],
  pin34: ["DIO_21"],
  pin35: ["DIO_22"],
  pin36: ["VDDS"],
  pin37: ["VDDR"],
  pin38: ["X48M_N"],
  pin39: ["X48M_P"],
  pin40: ["VDDR_RF"],
  pin41: ["EP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin41: [...pinLabels["pin41"], "thermalpad"],
} as const;

export const CC1311R31T0RKPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C5219891"],
      }}
      manufacturerPartNumber="CC1311R31T0RKPR"
      footprint="qfn40_thermalpad3.5mmx3.5mm_p0.4mm_h5.6801mm_pw0.2mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5219891.obj?uuid=285595c6b581499196ba48d4e1816433",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5219891.step?uuid=285595c6b581499196ba48d4e1816433",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.025 },
      }}
      {...props}
    />
  );
};

export default CC1311R31T0RKPR;
