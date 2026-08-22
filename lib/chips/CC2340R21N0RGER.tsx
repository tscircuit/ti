import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ANT", "1"],
  pin2: ["VDDR", "2", "VDDR_2"],
  pin3: ["DIO8", "3"],
  pin4: ["DIO11", "4"],
  pin5: ["DIO12", "5"],
  pin6: ["DIO13", "6"],
  pin7: ["DIO16_SWDIO", "7"],
  pin8: ["DIO17_SWDCK", "8"],
  pin9: ["DIO20_A11", "9"],
  pin10: ["DIO21_A10", "10"],
  pin11: ["VDDS", "11", "VDDS_11"],
  pin12: ["DIO24_A7", "12"],
  pin13: ["RSTN", "13"],
  pin14: ["DIO3_X32P", "14"],
  pin15: ["DIO4_X32N", "15"],
  pin16: ["VDDD", "16"],
  pin17: ["DCDC", "17"],
  pin18: ["VDDS", "18", "VDDS_18"],
  pin19: ["DIO6_A1", "19"],
  pin20: ["VDDR", "20", "VDDR_20"],
  pin21: ["X48P", "21"],
  pin22: ["X48N", "22"],
  pin23: ["GND", "23"],
  pin24: ["VDDS", "24", "VDDS_24"],
  pin25: ["THERMAL_PAD", "25"],
} as const;

const pinRoles = {
  pin1: "unknown",
  pin2: "power",
  pin3: "bidirectional",
  pin4: "bidirectional",
  pin5: "bidirectional",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "bidirectional",
  pin9: "bidirectional",
  pin10: "bidirectional",
  pin11: "power",
  pin12: "bidirectional",
  pin13: "control",
  pin14: "bidirectional",
  pin15: "bidirectional",
  pin16: "power",
  pin17: "unknown",
  pin18: "power",
  pin19: "bidirectional",
  pin20: "power",
  pin21: "unknown",
  pin22: "unknown",
  pin23: "ground",
  pin24: "power",
  pin25: "ground",
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin11: { requiresPower: true },
  pin16: { requiresPower: true },
  pin18: { requiresPower: true },
  pin20: { requiresPower: true },
  pin23: { requiresGround: true },
  pin24: { requiresPower: true },
  pin25: { requiresGround: true },
} as const;

export const CC2340R21N0RGER = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RGE0024B; donor TPS65130RGER (JLCPCB C54989)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="CC2340R21N0RGER"
      footprint="qfn24_thermalpad2.7mmx2.7mm_p0.4999mm_w4.6083mm_h4.606mm_pw0.24mm_pl0.58mm"
      {...props}
    />
  );
};

export default CC2340R21N0RGER;
