import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SBWTDIO", "1"],
  pin2: ["SBWTCK", "2"],
  pin3: ["A4", "3"],
  pin4: ["A5", "4"],
  pin5: ["A6", "5"],
  pin6: ["A7", "6"],
  pin7: ["A0", "7"],
  pin8: ["A1", "8"],
  pin9: ["A2", "9"],
  pin10: ["A3", "10"],
  pin11: ["SYNC", "11"],
  pin12: ["CAP0_2", "12"],
  pin13: ["CAP0_3", "13"],
  pin14: ["CAP1_2", "14"],
  pin15: ["CAP1_3", "15"],
  pin16: ["VREG", "16"],
  pin17: ["CAP2_0", "17"],
  pin18: ["CAP2_1", "18"],
  pin19: ["CAP3_0", "19"],
  pin20: ["CAP3_1", "20"],
  pin21: ["XOUT", "21"],
  pin22: ["XIN", "22"],
  pin23: ["DVSS", "23"],
  pin24: ["DVCC", "24"],
  pin25: ["VQFN_THERMAL_PAD", "PAD"],
} as const;

const pinRoles = {
  pin1: "bidirectional",
  pin2: "input",
  pin3: "input",
  pin4: "input",
  pin5: "input",
  pin6: "input",
  pin7: "input",
  pin8: "input",
  pin9: "input",
  pin10: "input",
  pin11: "control",
  pin12: "bidirectional",
  pin13: "bidirectional",
  pin14: "bidirectional",
  pin15: "bidirectional",
  pin16: "output",
  pin17: "bidirectional",
  pin18: "bidirectional",
  pin19: "bidirectional",
  pin20: "bidirectional",
  pin21: "output",
  pin22: "input",
  pin23: "power",
  pin24: "power",
  pin25: "ground",
} as const;

const pinAttributes = {
  pin23: { requiresPower: true },
  pin24: { requiresPower: true },
  pin25: { requiresGround: true },
} as const;

export const MSP430FR2532IRGER = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RGE0024H; donor TPS26632RGET (JLCPCB C2862529)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="MSP430FR2532IRGER"
      footprint="qfn24_thermalpad2.7mmx2.7mm_p0.4999mm_h4.6562mm_pw0.28mm_pl0.633mm"
      {...props}
    />
  );
};

export default MSP430FR2532IRGER;
