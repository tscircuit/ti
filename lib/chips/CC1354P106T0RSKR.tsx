import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RF_P_2_4GHZ"],
  pin2: ["RF_N_2_4GHZ"],
  pin3: ["RF_P_SUB_1GHZ"],
  pin4: ["RF_N_SUB_1GHZ"],
  pin5: ["TX_20DBM_P"],
  pin6: ["TX_20DBM_N"],
  pin7: ["RX_TX"],
  pin8: ["X32K_Q1"],
  pin9: ["X32K_Q2"],
  pin10: ["DIO_34"],
  pin11: ["DIO_35"],
  pin12: ["DIO_3"],
  pin13: ["DIO_4"],
  pin14: ["DIO_5"],
  pin15: ["DIO_6"],
  pin16: ["DIO_7"],
  pin17: ["VDDS2"],
  pin18: ["DIO_8"],
  pin19: ["DIO_9"],
  pin20: ["DIO_10"],
  pin21: ["DIO_11"],
  pin22: ["DIO_36"],
  pin23: ["DIO_37"],
  pin24: ["DIO_38"],
  pin25: ["DIO_39"],
  pin26: ["DIO_12"],
  pin27: ["DIO_13"],
  pin28: ["DIO_14"],
  pin29: ["DIO_15"],
  pin30: ["VDDS3"],
  pin31: ["DCOUPL"],
  pin32: ["JTAG_TMSC"],
  pin33: ["JTAG_TCKC"],
  pin34: ["DIO_16"],
  pin35: ["DIO_17"],
  pin36: ["DIO_18"],
  pin37: ["DIO_19"],
  pin38: ["DIO_20"],
  pin39: ["DIO_21"],
  pin40: ["DIO_22"],
  pin41: ["DIO_40"],
  pin42: ["DIO_41"],
  pin43: ["DIO_42"],
  pin44: ["DIO_43"],
  pin45: ["DIO_44"],
  pin46: ["DIO_45"],
  pin47: ["DCDC_SW"],
  pin48: ["VDDS_DCDC"],
  pin49: ["RESET_N"],
  pin50: ["DIO_23"],
  pin51: ["DIO_24"],
  pin52: ["DIO_25"],
  pin53: ["DIO_26"],
  pin54: ["DIO_27"],
  pin55: ["DIO_28"],
  pin56: ["DIO_29"],
  pin57: ["DIO_30"],
  pin58: ["DIO_46"],
  pin59: ["DIO_47"],
  pin60: ["VDDS"],
  pin61: ["VDDR"],
  pin62: ["X48M_N"],
  pin63: ["X48M_P"],
  pin64: ["VDDR_RF"],
  pin65: ["EP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin65: [...pinLabels["pin65"], "thermalpad"],
} as const;

export const CC1354P106T0RSKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C22442559"],
      }}
      manufacturerPartNumber="CC1354P106T0RSKR"
      footprint="qfn64_thermalpad4.8mmx4.8mm_p0.4mm_h9mm_pw0.2mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22442559.obj?uuid=c6bc876e63684dcbb4e0a128d069d902",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22442559.step?uuid=c6bc876e63684dcbb4e0a128d069d902",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.05 },
      }}
      {...props}
    />
  );
};

export default CC1354P106T0RSKR;
