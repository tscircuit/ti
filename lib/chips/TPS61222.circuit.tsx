import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const TPS61222 = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="TPS61222DCKT"
    schWidth="1.5mm"
    schHeight="1mm"
    pinLabels={{
      pin1: "VIN",
      pin2: "FB",
      pin3: "GND",
      pin4: "VOUT",
      pin5: "L",
      pin6: "EN",
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [4, 2],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [5, 1, 6, 3],
      },
    }}
    schPinStyle={{
      pin4: { marginBottom: 0.45 },
    }}
    {...props}
  />
);

export default TPS61222;
