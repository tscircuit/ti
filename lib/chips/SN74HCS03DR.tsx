import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A", "1"],
  pin2: ["1B", "2"],
  pin3: ["1Y", "3"],
  pin4: ["2A", "4"],
  pin5: ["2B", "5"],
  pin6: ["2Y", "6"],
  pin7: ["GND", "7"],
  pin8: ["3Y", "8"],
  pin9: ["3A", "9"],
  pin10: ["3B", "10"],
  pin11: ["4Y", "11"],
  pin12: ["4A", "12"],
  pin13: ["4B", "13"],
  pin14: ["VCC", "14"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "input",
  pin3: "output",
  pin4: "input",
  pin5: "input",
  pin6: "output",
  pin7: "ground",
  pin8: "output",
  pin9: "input",
  pin10: "input",
  pin11: "output",
  pin12: "input",
  pin13: "input",
  pin14: "power",
} as const;

const pinAttributes = {
  pin7: { requiresGround: true },
  pin14: { requiresPower: true },
} as const;

export const SN74HCS03DR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing D0014A; donor CD4069UBM96 (JLCPCB C93672)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="SN74HCS03DR"
      footprint="soic14_pillpads_w7.276mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default SN74HCS03DR;
