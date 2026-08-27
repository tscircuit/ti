import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const TLV1805QDBVRQ1_PIN_LABELS = {
  pin1: "OUT",
  pin2: "V_MINUS",
  pin3: "IN_MINUS",
  pin4: "IN_PLUS",
  pin5: ["SHDN", "SD"],
  pin6: "V_PLUS",
} as const;

/** TLV1805-Q1 DBV pinout, verified against TI datasheet SNOSD52B. */
export const TLV1805QDBVRQ1 = (
  props: ChipProps<typeof TLV1805QDBVRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="TLV1805QDBVRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tlv1805-q1.pdf"
    footprint="sot23_6"
    pinLabels={TLV1805QDBVRQ1_PIN_LABELS}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: [5, 3, 4] },
      rightSide: { direction: "top-to-bottom", pins: [1] },
      topSide: { direction: "left-to-right", pins: [6] },
      bottomSide: { direction: "left-to-right", pins: [2] },
    }}
    {...props}
  />
);

export default TLV1805QDBVRQ1;
