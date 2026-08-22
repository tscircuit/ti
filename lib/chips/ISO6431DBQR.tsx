import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1", "1"],
  pin2: ["GND1", "2", "GND1_2"],
  pin3: ["INA", "3"],
  pin4: ["NC", "4", "NC_4"],
  pin5: ["OUTC", "5"],
  pin6: ["NC", "6", "NC_6"],
  pin7: ["EN1", "7"],
  pin8: ["GND1", "8", "GND1_8"],
  pin9: ["GND2", "9", "GND2_9"],
  pin10: ["EN2", "10"],
  pin11: ["NC", "11", "NC_11"],
  pin12: ["INC", "12"],
  pin13: ["NC", "13", "NC_13"],
  pin14: ["OUTA", "14"],
  pin15: ["GND2", "15", "GND2_15"],
  pin16: ["NC", "16", "NC_16"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "ground",
  pin3: "input",
  pin4: "no-connect",
  pin5: "output",
  pin6: "no-connect",
  pin7: "output",
  pin8: "ground",
  pin9: "ground",
  pin10: "output",
  pin11: "no-connect",
  pin12: "input",
  pin13: "no-connect",
  pin14: "output",
  pin15: "ground",
  pin16: "no-connect",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
  pin4: { doNotConnect: true },
  pin6: { doNotConnect: true },
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
  pin11: { doNotConnect: true },
  pin13: { doNotConnect: true },
  pin15: { requiresGround: true },
  pin16: { doNotConnect: true },
} as const;

export const ISO6431DBQR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DBQ0016A; donor ISO7760DBQR (JLCPCB C2868628)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="ISO6431DBQR"
      footprint="dfn16_pillpads_p0.635mm_w7.1244mm_pw0.3556mm_pl1.8148mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default ISO6431DBQR;
