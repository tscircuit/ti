import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const OscillatorCrystal4 = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="CRYSTAL-4PIN-13.56MHZ"
    schWidth="1.5mm"
    schHeight="1mm"
    pinLabels={{
      pin1: "OSC_OUT",
      pin2: "GND_1",
      pin3: "OSC_IN",
      pin4: "GND_2",
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 3],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [2, 4],
      },
    }}
    {...props}
  />
);

export default OscillatorCrystal4;
