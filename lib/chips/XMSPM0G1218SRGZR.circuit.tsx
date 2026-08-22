import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["TIMA0_C0", "1", "TIMA0_C0_1"],
  pin2: ["TIMA_FAL2", "2"],
  pin3: ["UC0_SDA_TX", "3", "UC0_SDA_TX_3"],
  pin4: ["NRST", "4"],
  pin5: ["UC0_SCL_RX", "5", "UC0_SCL_RX_5"],
  pin6: ["VDD", "6"],
  pin7: ["VSS", "7"],
  pin8: ["TIMA0_C3N", "8", "TIMA0_C3N_8"],
  pin9: ["TIMA0_C1", "9"],
  pin10: ["TIMA0_C1N", "10", "TIMA0_C1N_10"],
  pin11: ["UC5_SDA_TX", "11"],
  pin12: ["TIMG0_C1", "12", "TIMG0_C1_12"],
  pin13: ["TIMA0_C2", "13"],
  pin14: ["TIMA0_C3", "14", "TIMA0_C3_14"],
  pin15: ["TIMA0_C3N", "15", "TIMA0_C3N_15"],
  pin16: ["TIMA0_C0", "16", "TIMA0_C0_16"],
  pin17: ["TIMA0_C0N", "17", "TIMA0_C0N_17"],
  pin18: ["CLK_OUT", "18", "CLK_OUT_18"],
  pin19: ["COMP0_OUT", "19"],
  pin20: ["TIMG8_C0", "20"],
  pin21: ["UC4_POCI_RTS", "21", "UC4_POCI_RTS_21"],
  pin22: ["UC4_PICO_TX", "22"],
  pin23: ["UC4_SCLK_RX", "23", "UC4_SCLK_RX_23"],
  pin24: ["UC4_POCI_RTS", "24", "UC4_POCI_RTS_24"],
  pin25: ["UC0_SDA_TX", "25", "UC0_SDA_TX_25"],
  pin26: ["UC0_SCL_RX", "26", "UC0_SCL_RX_26"],
  pin27: ["FCC_IN", "27"],
  pin28: ["TIMG0_C1", "28", "TIMG0_C1_28"],
  pin29: ["UC9_TX", "29"],
  pin30: ["TIMG8_IDX", "30"],
  pin31: ["TIMA0_C2N", "31", "TIMA0_C2N_31"],
  pin32: ["TIMA0_C3", "32", "TIMA0_C3_32"],
  pin33: ["TIMA0_C3N", "33", "TIMA0_C3N_33"],
  pin34: ["UC4_POCI_RTS", "34", "UC4_POCI_RTS_34"],
  pin35: ["UC4_SCLK_RX", "35", "UC4_SCLK_RX_35"],
  pin36: ["UC0_SCL_RX", "36", "UC0_SCL_RX_36"],
  pin37: ["TIMA0_C2N", "37", "TIMA0_C2N_37"],
  pin38: ["TIMG8_C1", "38"],
  pin39: ["TIMA0_C0", "39", "TIMA0_C0_39"],
  pin40: ["TIMA0_C0N", "40", "TIMA0_C0N_40"],
  pin41: ["TIMA_FAL1", "41"],
  pin42: ["TIMA0_C1N", "42", "TIMA0_C1N_42"],
  pin43: ["TIMA0_C3", "43", "TIMA0_C3_43"],
  pin44: ["TIMA0_C3N", "44", "TIMA0_C3N_44"],
  pin45: ["TIMA0_C1N", "45", "TIMA0_C1N_45"],
  pin46: ["TIMA_FAL0", "46"],
  pin47: ["CLK_OUT", "47", "CLK_OUT_47"],
  pin48: ["VCORE", "48"],
  pin49: ["QFN_PAD", "THERMAL_PAD", "49"],
} as const;

const pinRoles = {
  pin1: "unknown",
  pin2: "unknown",
  pin3: "bidirectional",
  pin4: "unknown",
  pin5: "control",
  pin6: "power",
  pin7: "ground",
  pin8: "unknown",
  pin9: "unknown",
  pin10: "unknown",
  pin11: "bidirectional",
  pin12: "unknown",
  pin13: "unknown",
  pin14: "unknown",
  pin15: "unknown",
  pin16: "unknown",
  pin17: "unknown",
  pin18: "control",
  pin19: "output",
  pin20: "unknown",
  pin21: "unknown",
  pin22: "output",
  pin23: "control",
  pin24: "unknown",
  pin25: "bidirectional",
  pin26: "control",
  pin27: "input",
  pin28: "unknown",
  pin29: "output",
  pin30: "unknown",
  pin31: "unknown",
  pin32: "unknown",
  pin33: "unknown",
  pin34: "unknown",
  pin35: "control",
  pin36: "control",
  pin37: "unknown",
  pin38: "unknown",
  pin39: "unknown",
  pin40: "unknown",
  pin41: "unknown",
  pin42: "unknown",
  pin43: "unknown",
  pin44: "unknown",
  pin45: "unknown",
  pin46: "unknown",
  pin47: "control",
  pin48: "unknown",
  pin49: "ground",
} as const;

const pinAttributes = {
  pin6: { requiresPower: true },
  pin7: { requiresGround: true },
  pin49: { requiresGround: true },
} as const;

export const XMSPM0G1218SRGZR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RGZ0048B; donor DP83867CRRGZR (JLCPCB C544766)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="XMSPM0G1218SRGZR"
      footprint="qfn48_thermalpad4.1mmx4.1mm_pillpads_p0.5004mm_h7.9995mm_pw0.28mm_pl0.85mm_pin1location(bottomside,left)"
      {...props}
    />
  );
};

export default XMSPM0G1218SRGZR;
