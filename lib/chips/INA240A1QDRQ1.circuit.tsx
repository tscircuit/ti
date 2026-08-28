import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "IN_MINUS",
  pin2: "GND",
  pin3: "REF2",
  pin4: "NC",
  pin5: "OUT",
  pin6: "VS",
  pin7: "REF1",
  pin8: "IN_PLUS",
} as const;

/**
 * INA240A1-Q1 SOIC-8 used by TIDA-01421.
 *
 * Pin numbers are verified against the INA240-Q1 D-package table. Its
 * schematic box uses the native chip renderer and an explicit pin arrangement
 * matching the U2 unit in TIDA-01421 Schematic.SchDoc.
 */
export const INA240A1QDRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="INA240A1QDRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/ina240-q1.pdf"
    footprint="kicad:Package_SO/SOIC-8_3.9x4.9mm_P1.27mm"
    pinLabels={pinLabels}
    schWidth={3}
    schHeight={2.4}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VS", "IN_PLUS", "IN_MINUS", "NC"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT", "REF1", "REF2", "GND"],
      },
    }}
    {...props}
  />
);

export default INA240A1QDRQ1;
