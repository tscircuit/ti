import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["MODESELECT", "1"],
  pin2: ["CEXT", "2"],
  pin3: ["VDDA3V3", "3"],
  pin4: ["RD_M", "4"],
  pin5: ["RD_P", "5"],
  pin6: ["TD_M", "6"],
  pin7: ["TD_P", "7"],
  pin8: ["XO", "8"],
  pin9: ["XI", "50MHZIN", "9"],
  pin10: ["RBIAS", "10"],
  pin11: ["MDIO", "11"],
  pin12: ["MDC", "12"],
  pin13: ["RX_D3", "13"],
  pin14: ["RX_D2", "14"],
  pin15: ["RX_D1", "15"],
  pin16: ["RX_D0", "16"],
  pin17: ["VDDIO", "17"],
  pin18: ["RX_DV", "CRS_DV", "18"],
  pin19: ["RX_CLK", "50MHZ_RMII", "19"],
  pin20: ["RX_ER", "20"],
  pin21: ["PWRDN", "INT", "21"],
  pin22: ["TX_CLK", "22"],
  pin23: ["TX_EN", "23"],
  pin24: ["TX_D0", "24"],
  pin25: ["TX_D1", "25"],
  pin26: ["TX_D2", "26"],
  pin27: ["TX_D3", "27"],
  pin28: ["COL", "LED2", "TX_ER", "GPIO", "28"],
  pin29: ["CRS", "LED3", "29"],
  pin30: ["LED0", "30"],
  pin31: ["CLKOUT", "LED1", "31"],
  pin32: ["RST_N", "32"],
  pin33: ["THERMAL_PAD", "33"],
} as const;

const pinRoles = {
  pin1: "no-connect",
  pin2: "control",
  pin3: "power",
  pin4: "unknown",
  pin5: "unknown",
  pin6: "unknown",
  pin7: "unknown",
  pin8: "unknown",
  pin9: "unknown",
  pin10: "unknown",
  pin11: "bidirectional",
  pin12: "input",
  pin13: "output",
  pin14: "output",
  pin15: "output",
  pin16: "output",
  pin17: "power",
  pin18: "output",
  pin19: "output",
  pin20: "output",
  pin21: "bidirectional",
  pin22: "output",
  pin23: "control",
  pin24: "input",
  pin25: "input",
  pin26: "input",
  pin27: "input",
  pin28: "output",
  pin29: "output",
  pin30: "output",
  pin31: "output",
  pin32: "control",
  pin33: "ground",
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin3: { requiresPower: true },
  pin17: { requiresPower: true },
  pin33: { requiresGround: true },
} as const;

export const DP83826AERHBR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RHB0032M; donor DP83826IRHBR (JLCPCB C3225658)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="DP83826AERHBR"
      footprint="qfn32_thermalpad2.1mmx2.1mm_p0.4999mm_h5.6798mm_pw0.28mm_pl0.665mm"
      {...props}
    />
  );
};

export default DP83826AERHBR;
