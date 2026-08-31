import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "IN_PLUS",
  pin2: "V_MINUS",
  pin3: "IN_MINUS",
  pin4: "OUT",
  pin5: "V_PLUS",
} as const;

/**
 * LMV7275-Q1 open-drain comparator in the five-pin DCK (SC70) package.
 *
 * Its schematic representation is supplied by a native schematicsymbol
 * projection so the physical comparator pin mapping remains authoritative.
 */
export const LMV7275IDCKRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="LMV7275IDCKRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lmv7275-q1.pdf"
    footprint="kicad:Package_SO/SC-70-5"
    pinLabels={pinLabels}
    {...props}
  />
);

export default LMV7275IDCKRQ1;
