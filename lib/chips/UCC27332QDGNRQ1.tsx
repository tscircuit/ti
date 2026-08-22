import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD", "1", "VDD_1"],
  pin2: ["IN", "2"],
  pin3: ["EN", "3"],
  pin4: ["GND", "4", "GND_4"],
  pin5: ["GND", "5", "GND_5"],
  pin6: ["OUT", "6", "OUT_6"],
  pin7: ["OUT", "7", "OUT_7"],
  pin8: ["VDD", "8", "VDD_8"],
  pin9: ["THERMAL_PAD"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "input",
  pin3: "control",
  pin4: "ground",
  pin5: "ground",
  pin6: "output",
  pin7: "output",
  pin8: "power",
  pin9: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
  pin5: { requiresGround: true },
  pin8: { requiresPower: true },
  pin9: { requiresGround: true },
} as const;

export const UCC27332QDGNRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DGN0008H; donor UCC27624DGNR (JLCPCB C6581862)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="UCC27332QDGNRQ1"
      footprint="vssop8_thermalpad1.5mmx1.8mm_pw0.364mm_pl1.43mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default UCC27332QDGNRQ1;
