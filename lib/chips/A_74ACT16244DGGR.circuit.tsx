import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1OE", "1"],
  pin2: ["1Y1", "2"],
  pin3: ["1Y2", "3"],
  pin4: ["GND", "4", "GND_4"],
  pin5: ["1Y3", "5"],
  pin6: ["1Y4", "6"],
  pin7: ["VCC", "7", "VCC_7"],
  pin8: ["2Y1", "8"],
  pin9: ["2Y2", "9"],
  pin10: ["GND", "10", "GND_10"],
  pin11: ["2Y3", "11"],
  pin12: ["2Y4", "12"],
  pin13: ["3Y1", "13"],
  pin14: ["3Y2", "14"],
  pin15: ["GND", "15", "GND_15"],
  pin16: ["3Y3", "16"],
  pin17: ["3Y4", "17"],
  pin18: ["VCC", "18", "VCC_18"],
  pin19: ["4Y1", "19"],
  pin20: ["4Y2", "20"],
  pin21: ["GND", "21", "GND_21"],
  pin22: ["4Y3", "22"],
  pin23: ["4Y4", "23"],
  pin24: ["4OE", "24"],
  pin25: ["3OE", "25"],
  pin26: ["4A4", "26"],
  pin27: ["4A3", "27"],
  pin28: ["GND", "28", "GND_28"],
  pin29: ["4A2", "29"],
  pin30: ["4A1", "30"],
  pin31: ["VCC", "31", "VCC_31"],
  pin32: ["3A4", "32"],
  pin33: ["3A3", "33"],
  pin34: ["GND", "34", "GND_34"],
  pin35: ["3A2", "35"],
  pin36: ["3A1", "36"],
  pin37: ["2A4", "37"],
  pin38: ["2A3", "38"],
  pin39: ["GND", "39", "GND_39"],
  pin40: ["2A2", "40"],
  pin41: ["2A1", "41"],
  pin42: ["VCC", "42", "VCC_42"],
  pin43: ["1A4", "43"],
  pin44: ["1A3", "44"],
  pin45: ["GND", "45", "GND_45"],
  pin46: ["1A2", "46"],
  pin47: ["1A1", "47"],
  pin48: ["2OE", "48"],
} as const;

const pinRoles = {
  pin1: "unknown",
  pin2: "unknown",
  pin3: "unknown",
  pin4: "ground",
  pin5: "unknown",
  pin6: "unknown",
  pin7: "power",
  pin8: "unknown",
  pin9: "unknown",
  pin10: "ground",
  pin11: "unknown",
  pin12: "unknown",
  pin13: "unknown",
  pin14: "unknown",
  pin15: "ground",
  pin16: "unknown",
  pin17: "unknown",
  pin18: "power",
  pin19: "unknown",
  pin20: "unknown",
  pin21: "ground",
  pin22: "unknown",
  pin23: "unknown",
  pin24: "unknown",
  pin25: "unknown",
  pin26: "unknown",
  pin27: "unknown",
  pin28: "ground",
  pin29: "unknown",
  pin30: "unknown",
  pin31: "power",
  pin32: "unknown",
  pin33: "unknown",
  pin34: "ground",
  pin35: "unknown",
  pin36: "unknown",
  pin37: "unknown",
  pin38: "unknown",
  pin39: "ground",
  pin40: "unknown",
  pin41: "unknown",
  pin42: "power",
  pin43: "unknown",
  pin44: "unknown",
  pin45: "ground",
  pin46: "unknown",
  pin47: "unknown",
  pin48: "unknown",
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin7: { requiresPower: true },
  pin10: { requiresGround: true },
  pin15: { requiresGround: true },
  pin18: { requiresPower: true },
  pin21: { requiresGround: true },
  pin28: { requiresGround: true },
  pin31: { requiresPower: true },
  pin34: { requiresGround: true },
  pin39: { requiresGround: true },
  pin42: { requiresPower: true },
  pin45: { requiresGround: true },
} as const;

export const A_74ACT16244DGGR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DGG0048A; donor MSP430FR4133IG48R (JLCPCB C2053877)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="74ACT16244DGGR"
      footprint="dfn48_p0.4999mm_w9.1498mm_pw0.28mm_pl1.5499mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default A_74ACT16244DGGR;
