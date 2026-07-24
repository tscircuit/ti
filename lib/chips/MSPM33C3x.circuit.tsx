import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const MSPM33C3x = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="MSPM33C3x_MCU"
    footprint="qfn48_thermalpad4.1mmx4.1mm_p0.4999mm_h7.9998mm_pw0.28mm_pl0.785mm"
    schWidth="3mm"
    schHeight="4mm"
    pinLabels={{
      pin4: "NRST",
      pin6: "VDD",
      pin34: "SWDIO",
      pin35: "SWCLK",
      pin48: "VCORE",
      pin49: ["VSS", "thermalpad"],
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [6, 49, 48, 4],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [34, 35],
      },
    }}
    schPinStyle={{
      pin6: { marginBottom: 0.4 },
      pin49: { marginBottom: 0.4 },
      pin48: { marginBottom: 1.3 },
      pin34: { marginBottom: 0.4 },
      pin35: { marginBottom: -2 },
    }}
    {...props}
  />
);

export default MSPM33C3x;
