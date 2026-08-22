import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1", "1"],
  pin2: ["GND1", "2", "GND1_2"],
  pin3: ["INA", "3"],
  pin4: ["INB", "4"],
  pin5: ["INC", "5"],
  pin6: ["IND", "6"],
  pin7: ["NC", "7"],
  pin8: ["GND1", "8", "GND1_8"],
  pin9: ["GND2", "9", "GND2_9"],
  pin10: ["EN2", "10"],
  pin11: ["OUTD", "11"],
  pin12: ["OUTC", "12"],
  pin13: ["OUTB", "13"],
  pin14: ["OUTA", "14"],
  pin15: ["GND2", "15", "GND2_15"],
  pin16: ["VCC2", "16"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "ground",
  pin3: "input",
  pin4: "input",
  pin5: "input",
  pin6: "input",
  pin7: "no-connect",
  pin8: "ground",
  pin9: "ground",
  pin10: "output",
  pin11: "output",
  pin12: "output",
  pin13: "output",
  pin14: "output",
  pin15: "ground",
  pin16: "power",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
  pin7: { doNotConnect: true },
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
  pin15: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const ISO6440DBQRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DBQ0016A; donor ISO7760DBQR (JLCPCB C2868628)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="ISO6440DBQRQ1"
      footprint="dfn16_pillpads_p0.635mm_w7.1244mm_pw0.3556mm_pl1.8148mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default ISO6440DBQRQ1;
