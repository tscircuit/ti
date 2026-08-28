import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const packagePinLabels = {
  pin1: "OUT_A",
  pin2: "IN_MINUS_A",
  pin3: "IN_PLUS_A",
  pin4: "V_MINUS",
  pin5: "IN_PLUS_B",
  pin6: "IN_MINUS_B",
  pin7: "OUT_B",
  pin8: "V_PLUS",
} as const;

/** Datasheet-pinned physical TLV2316-Q1 VSSOP-8 package. */
export const TLV2316QDGKRQ1 = (props: ChipProps<typeof packagePinLabels>) => (
  <chip
    manufacturerPartNumber="TLV2316QDGKRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tlv2316-q1.pdf"
    footprint="kicad:Package_SO/VSSOP-8_3.0x3.0mm_P0.65mm"
    pinLabels={packagePinLabels}
    {...props}
  />
);

export default TLV2316QDGKRQ1;
