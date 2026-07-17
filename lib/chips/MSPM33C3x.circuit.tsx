import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const MSPM33C3x = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="MSPM33C3x_MCU"
    schWidth="3mm"
    schHeight="4mm"
    pinLabels={{
      pin1: "VDD",
      pin2: "VSS",
      pin3: "VCORE",
      pin4: "NRST",
      pin5: "SWDIO",
      pin6: "SWCLK",
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 2, 3, 4],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [5, 6],
      },
    }}
    schPinStyle={{
      pin1: { marginBottom: 0.4 },
      pin2: { marginBottom: 0.4 },
      pin3: { marginBottom: 1.3 },
      pin5: { marginBottom: 0.4 },
      pin6: { marginBottom: -2 },
    }}
    {...props}
  />
);

export default MSPM33C3x;
