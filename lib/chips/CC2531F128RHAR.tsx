import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DGND_USB", "1"],
  pin2: ["USB_P", "2"],
  pin3: ["USB_N", "3"],
  pin4: ["DVDD_USB", "4"],
  pin5: ["P1_5", "5"],
  pin6: ["P1_4", "6"],
  pin7: ["P1_3", "7"],
  pin8: ["P1_2", "8"],
  pin9: ["P1_1", "9"],
  pin10: ["DVDD2", "10"],
  pin11: ["P1_0", "11"],
  pin12: ["P0_7", "12"],
  pin13: ["P0_6", "13"],
  pin14: ["P0_5", "14"],
  pin15: ["P0_4", "15"],
  pin16: ["P0_3", "16"],
  pin17: ["P0_2", "17"],
  pin18: ["P0_1", "18"],
  pin19: ["P0_0", "19"],
  pin20: ["RESET_N", "20"],
  pin21: ["AVDD5", "21"],
  pin22: ["XOSC_Q1", "22"],
  pin23: ["XOSC_Q2", "23"],
  pin24: ["AVDD3", "24"],
  pin25: ["RF_P", "25"],
  pin26: ["RF_N", "26"],
  pin27: ["AVDD2", "27"],
  pin28: ["AVDD1", "28"],
  pin29: ["AVDD4", "29"],
  pin30: ["RBIAS", "30"],
  pin31: ["AVDD6", "31"],
  pin32: ["P2_4", "32"],
  pin33: ["P2_3", "33"],
  pin34: ["P2_2", "34"],
  pin35: ["P2_1", "35"],
  pin36: ["P2_0", "36"],
  pin37: ["P1_7", "37"],
  pin38: ["P1_6", "38"],
  pin39: ["DVDD1", "39"],
  pin40: ["DCOUPL", "40"],
  pin41: ["GND", "41"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "bidirectional",
  pin3: "bidirectional",
  pin4: "power",
  pin5: "bidirectional",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "bidirectional",
  pin9: "bidirectional",
  pin10: "power",
  pin11: "bidirectional",
  pin12: "bidirectional",
  pin13: "bidirectional",
  pin14: "bidirectional",
  pin15: "bidirectional",
  pin16: "bidirectional",
  pin17: "bidirectional",
  pin18: "bidirectional",
  pin19: "bidirectional",
  pin20: "control",
  pin21: "power",
  pin22: "bidirectional",
  pin23: "bidirectional",
  pin24: "power",
  pin25: "bidirectional",
  pin26: "bidirectional",
  pin27: "power",
  pin28: "power",
  pin29: "power",
  pin30: "bidirectional",
  pin31: "power",
  pin32: "bidirectional",
  pin33: "bidirectional",
  pin34: "bidirectional",
  pin35: "bidirectional",
  pin36: "bidirectional",
  pin37: "bidirectional",
  pin38: "bidirectional",
  pin39: "power",
  pin40: "power",
  pin41: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin4: { requiresPower: true },
  pin10: { requiresPower: true },
  pin21: { requiresPower: true },
  pin24: { requiresPower: true },
  pin27: { requiresPower: true },
  pin28: { requiresPower: true },
  pin29: { requiresPower: true },
  pin31: { requiresPower: true },
  pin39: { requiresPower: true },
  pin40: { requiresPower: true },
  pin41: { requiresGround: true },
} as const;

export const CC2531F128RHAR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RHA0040H; donor CC2540F256RHAR (JLCPCB C22649)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="CC2531F128RHAR"
      footprint="qfn40_thermalpad4.6mmx4.6mm_p0.4999mm_pw0.28mm_pl0.8mm"
      {...props}
    />
  );
};

export default CC2531F128RHAR;
