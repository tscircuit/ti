import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const CoaxialTestPort = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="COAXIAL-TEST-PORT"
    schWidth="3.5mm"
    schHeight="3.5mm"
    pinLabels={{
      pin1: "GND_1",
      pin2: "RF",
      pin3: "GND_2",
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [2],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [1, 3],
      },
    }}
    {...props}
  />
);

export default CoaxialTestPort;
