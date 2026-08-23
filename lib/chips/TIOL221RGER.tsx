import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CS", "PP", "1"],
  pin2: ["RX1", "2"],
  pin3: ["EN1", "3"],
  pin4: ["TX1", "4"],
  pin5: ["V5IN", "5"],
  pin6: ["ILIM_ADJ1", "6"],
  pin7: ["ILIM_ADJ2", "7"],
  pin8: ["CQ", "8"],
  pin9: ["LP", "9"],
  pin10: ["LM", "10"],
  pin11: ["DO", "11"],
  pin12: ["DI", "12"],
  pin13: ["VOUT", "13"],
  pin14: ["RESET", "14"],
  pin15: ["RX2", "15"],
  pin16: ["VSEL", "16"],
  pin17: ["TX2", "17"],
  pin18: ["WU", "18"],
  pin19: ["EN2", "19"],
  pin20: ["INT", "NFLT1", "20"],
  pin21: ["SDO", "NFLT2", "21"],
  pin22: ["SCK", "22"],
  pin23: ["SPI", "PIN", "23"],
  pin24: ["SDI", "NPN", "24"],
  pin25: ["THERMAL_PAD"],
} as const;

const pinRoles = {
  pin1: "control",
  pin2: "output",
  pin3: "control",
  pin4: "input",
  pin5: "unknown",
  pin6: "control",
  pin7: "control",
  pin8: "bidirectional",
  pin9: "power",
  pin10: "ground",
  pin11: "output",
  pin12: "input",
  pin13: "output",
  pin14: "output",
  pin15: "output",
  pin16: "input",
  pin17: "input",
  pin18: "output",
  pin19: "control",
  pin20: "output",
  pin21: "output",
  pin22: "control",
  pin23: "input",
  pin24: "input",
  pin25: "ground",
} as const;

const pinAttributes = {
  pin9: { requiresPower: true },
  pin10: { requiresGround: true },
  pin25: { requiresGround: true },
} as const;

export const TIOL221RGER = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RGE0024H; donor TPS26632RGET (JLCPCB C2862529)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TIOL221RGER"
      footprint="qfn24_thermalpad2.7mmx2.7mm_p0.4999mm_h4.6562mm_pw0.28mm_pl0.633mm"
      {...props}
    />
  );
};

export default TIOL221RGER;
