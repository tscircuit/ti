import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "FB",
  pin2: "COMP",
  pin3: "PGND",
  pin4: "SW",
  pin5: "VOUT",
  pin6: "EN",
  pin7: "VIN",
  pin8: "BST",
  pin9: "SW",
  pin10: "AGND",
  pin11: "VCC",
} as const;

export const TPS61288RQQR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="TPS61288RQQR"
    footprint="qfn11_w3mm_h2.5mm_p0.5mm_pw0.3mm_pl0.7mm"
    pinLabels={pinLabels}
    {...props}
  />
);

export default TPS61288RQQR;
