import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const Header2x10 = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="HEADER-2X10"
    schWidth="1.5mm"
    schHeight="2.2mm"
    pinLabels={{
      pin1: "PIN_1",
      pin2: "PIN_2",
      pin3: "PIN_3",
      pin4: "PIN_4",
      pin5: "PIN_5",
      pin6: "PIN_6",
      pin7: "PIN_7",
      pin8: "PIN_8",
      pin9: "PIN_9",
      pin10: "PIN_10",
      pin11: "PIN_11",
      pin12: "PIN_12",
      pin13: "PIN_13",
      pin14: "PIN_14",
      pin15: "PIN_15",
      pin16: "PIN_16",
      pin17: "PIN_17",
      pin18: "PIN_18",
      pin19: "PIN_19",
      pin20: "PIN_20",
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      },
    }}
    {...props}
  />
);

export default Header2x10;
