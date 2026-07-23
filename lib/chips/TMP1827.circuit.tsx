import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

/**
 * Simplified three-pin application symbol matching the TI TMP1827
 * multi-drop schematic. The physical package contains additional pins.
 */
export const TMP1827 = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="TMP1827"
    schWidth="2mm"
    schHeight="2mm"
    pinLabels={{
      pin1: ["ONEWIRE_SDQ", "SDQ"],
      pin2: "VDD",
      pin3: "GND",
    }}
    schPinArrangement={{
      topSide: {
        direction: "left-to-right",
        pins: [1],
      },
      rightSide: {
        direction: "left-to-right",
        pins: [2],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [3],
      },
    }}
    schPinStyle={{
      pin2: { marginBottom: 1 },
    }}
    {...props}
  />
);

export default TMP1827;
