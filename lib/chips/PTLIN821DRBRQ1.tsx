import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RXD", "1"],
  pin2: ["EN", "2"],
  pin3: ["WAKE", "3"],
  pin4: ["TXD", "4"],
  pin5: ["GND", "5"],
  pin6: ["LIN", "6"],
  pin7: ["VSUP", "7"],
  pin8: ["INH", "8"],
  pin9: ["THERMAL_PAD", "9"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "control",
  pin3: "control",
  pin4: "output",
  pin5: "ground",
  pin6: "unknown",
  pin7: "power",
  pin8: "input",
  pin9: "ground",
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin7: { requiresPower: true },
  pin9: { requiresGround: true },
} as const;

export const PTLIN821DRBRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DRB0008J; donor TCAN1044AVDRBRQ1 (JLCPCB C3234119)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="PTLIN821DRBRQ1"
      footprint="dfn8_thermalpad1.6mmx2.4mm_pillpads_p0.65mm_w3.8301mm_pw0.35mm_pl0.84mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default PTLIN821DRBRQ1;
