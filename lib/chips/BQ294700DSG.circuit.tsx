import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "VDD",
  pin2: "V4",
  pin3: "V3",
  pin4: "V2",
  pin5: "V1",
  pin6: "VSS",
  pin7: "CD",
  pin8: "OUT",
  pin9: "PAD",
} as const;

export const BQ294700DSG = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="BQ294700DSG"
    footprint="dfn8_thermalpad0.9mmx1.6mm_p0.5mm_w2.8mm_pw0.25mm_pl0.6mm"
    pinLabels={pinLabels}
    {...props}
  />
);

export default BQ294700DSG;
