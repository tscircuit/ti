import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "OUT",
  pin2: "NC",
  pin3: "GND",
  pin4: "EN",
  pin5: "GND",
  pin6: "IN",
  pin7: "EP",
} as const;

export const TPS78230DRVR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="TPS78230DRVR"
    footprint="dfn6_thermalpad1.1mmx1.6mm_p0.65mm_w2.8mm_pw0.3mm_pl0.6mm"
    pinLabels={pinLabels}
    {...props}
  />
);

export default TPS78230DRVR;
