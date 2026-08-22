import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["MON3", "1"],
  pin2: ["MON6", "2"],
  pin3: ["MON4", "3"],
  pin4: ["MON5", "4"],
  pin5: ["ACT", "5"],
  pin6: ["GND", "6", "GND_6"],
  pin7: ["SLEEP", "7"],
  pin8: ["VDD", "8"],
  pin9: ["SYNC", "9"],
  pin10: ["MON2", "10"],
  pin11: ["RS_1", "2", "11"],
  pin12: ["MON1", "12"],
  pin13: ["NIRQ", "13"],
  pin14: ["ADDR", "14"],
  pin15: ["SDA", "15"],
  pin16: ["SCL", "16"],
  pin17: ["GND", "17", "GND_17"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "input",
  pin3: "input",
  pin4: "input",
  pin5: "input",
  pin6: "ground",
  pin7: "control",
  pin8: "power",
  pin9: "bidirectional",
  pin10: "input",
  pin11: "input",
  pin12: "input",
  pin13: "output",
  pin14: "control",
  pin15: "bidirectional",
  pin16: "control",
  pin17: "ground",
} as const;

const pinAttributes = {
  pin6: { requiresGround: true },
  pin8: { requiresPower: true },
  pin17: { requiresGround: true },
} as const;

export const TPS389006007RTER = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RTE0016C; donor TLA2528IRTER (JLCPCB C2866175)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS389006007RTER"
      footprint="qfn16_thermalpad1.7mmx1.7mm_p0.4999mm_pw0.28mm_pl0.8mm"
      {...props}
    />
  );
};

export default TPS389006007RTER;
