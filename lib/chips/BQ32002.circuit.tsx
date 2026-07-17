import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const BQ32002 = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="BQ32002D"
    schWidth="3mm"
    schHeight="4mm"
    pinLabels={{
      pin1: "OSCI",
      pin2: "OSCO",
      pin3: "VBACK",
      pin4: "GND",
      pin5: "SDA",
      pin6: "SCL",
      pin7: "IRQ",
      pin8: "VCC",
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 2, 3, 4],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [8, 7, 6, 5],
      },
    }}
    schPinStyle={{
      pin1: { marginBottom: 0.8 },
      pin2: { marginBottom: 0.8 },
      pin3: { marginBottom: 0.8 },
      pin8: { marginBottom: 2 },
      pin7: { marginBottom: 0.2 },
      pin6: { marginBottom: 0.2 },
    }}
    {...props}
  />
);

export default BQ32002;
