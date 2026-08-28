import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "PGND",
  pin2: "SW",
  pin3: "VIN",
  pin4: "CC",
  pin5: "AGND",
  pin6: "FB",
  pin7: "EN",
  pin8: "INACT",
  pin9: "VOUT",
} as const;

export const TPS61236RWLR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="TPS61236RWLR"
    footprint="qfn9_w2.5mm_h2.5mm_p0.5mm_pw0.3mm_pl0.7mm"
    pinLabels={pinLabels}
    {...props}
  />
);

export default TPS61236RWLR;
