import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

/**
 * Simplified three-pin application symbol matching the TI TMP1827
 * multi-drop schematic. The physical package contains additional pins.
 */
export const TMP1827 = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="TMP1827NGRR"
    supplierPartNumbers={{ jlcpcb: ["C22364248"] }}
    footprint="dfn8_thermalpad1.1mmx1.8mm_p0.5001mm_w2.9198mm_pw0.28mm_pl0.585mm"
    schWidth="2mm"
    schHeight="2mm"
    pinLabels={{
      pin1: "VDD",
      pin2: ["ONEWIRE_SDQ", "SDQ"],
      pin3: "ADDR",
      pin4: "GND",
      pin5: "IO3",
      pin6: "IO0",
      pin7: "IO1",
      pin8: ["IO2_ALERT", "ALERT"],
      pin9: ["EP", "thermalpad"],
    }}
    schPinArrangement={{
      topSide: {
        direction: "left-to-right",
        pins: [2],
      },
      rightSide: {
        direction: "left-to-right",
        pins: [1],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [4],
      },
    }}
    schPinStyle={{
      pin1: { marginBottom: 1 },
    }}
    {...props}
  />
);

export default TMP1827;
