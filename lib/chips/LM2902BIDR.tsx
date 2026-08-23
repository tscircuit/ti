import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1OUT", "1"],
  pin2: ["1IN", "2", "1IN_2"],
  pin3: ["1IN", "3", "1IN_3"],
  pin4: ["VCC", "4", "VCC_4"],
  pin5: ["2IN", "5", "2IN_5"],
  pin6: ["2IN", "6", "2IN_6"],
  pin7: ["2OUT", "7"],
  pin8: ["3OUT", "8"],
  pin9: ["3IN", "9", "3IN_9"],
  pin10: ["3IN", "10", "3IN_10"],
  pin11: ["VCC", "11", "VCC_11"],
  pin12: ["4IN", "12", "4IN_12"],
  pin13: ["4IN", "13", "4IN_13"],
  pin14: ["4OUT", "14"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "input",
  pin3: "input",
  pin4: "power",
  pin5: "input",
  pin6: "input",
  pin7: "output",
  pin8: "output",
  pin9: "input",
  pin10: "input",
  pin11: "power",
  pin12: "input",
  pin13: "input",
  pin14: "output",
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin11: { requiresPower: true },
} as const;

export const LM2902BIDR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing D0014A; donor CD4069UBM96 (JLCPCB C93672)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="LM2902BIDR"
      footprint="soic14_pillpads_w7.276mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default LM2902BIDR;
