import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["HI", "1"],
  pin2: ["LI", "2"],
  pin3: ["VSS", "3"],
  pin4: ["EN", "NC", "4"],
  pin5: ["COM", "5"],
  pin6: ["LO", "6"],
  pin7: ["VDD", "7"],
  pin8: ["NC", "8", "NC_8"],
  pin9: ["NC", "9", "NC_9"],
  pin10: ["NC", "10", "NC_10"],
  pin11: ["HS", "11"],
  pin12: ["HO", "12"],
  pin13: ["HB", "13"],
  pin14: ["NC", "14", "NC_14"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "input",
  pin3: "ground",
  pin4: "no-connect",
  pin5: "unknown",
  pin6: "output",
  pin7: "power",
  pin8: "no-connect",
  pin9: "no-connect",
  pin10: "no-connect",
  pin11: "unknown",
  pin12: "output",
  pin13: "input",
  pin14: "no-connect",
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin4: { doNotConnect: true },
  pin7: { requiresPower: true },
  pin8: { doNotConnect: true },
  pin9: { doNotConnect: true },
  pin10: { doNotConnect: true },
  pin14: { doNotConnect: true },
} as const;

export const UCC27735DR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing D0014A; donor CD4069UBM96 (JLCPCB C93672)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="UCC27735DR"
      footprint="soic14_pillpads_w7.276mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default UCC27735DR;
