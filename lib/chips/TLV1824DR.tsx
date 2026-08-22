import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT2", "1"],
  pin2: ["OUT1", "2"],
  pin3: ["V", "3", "V_3"],
  pin4: ["IN1", "4", "IN1_4"],
  pin5: ["IN1", "5", "IN1_5"],
  pin6: ["IN2", "6", "IN2_6"],
  pin7: ["IN2", "7", "IN2_7"],
  pin8: ["IN3", "8", "IN3_8"],
  pin9: ["IN3", "9", "IN3_9"],
  pin10: ["IN4", "10", "IN4_10"],
  pin11: ["IN4", "11", "IN4_11"],
  pin12: ["V", "12", "V_12"],
  pin13: ["OUT4", "13"],
  pin14: ["OUT3", "14"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "output",
  pin3: "unknown",
  pin4: "input",
  pin5: "input",
  pin6: "input",
  pin7: "input",
  pin8: "input",
  pin9: "input",
  pin10: "input",
  pin11: "input",
  pin12: "unknown",
  pin13: "output",
  pin14: "output",
} as const;

export const TLV1824DR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing D0014A; donor CD4069UBM96 (JLCPCB C93672)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      manufacturerPartNumber="TLV1824DR"
      footprint="soic14_pillpads_w7.276mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default TLV1824DR;
