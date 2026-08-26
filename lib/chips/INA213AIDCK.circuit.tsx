import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "REF",
  pin2: "GND",
  pin3: ["V_PLUS", "VS"],
  pin4: ["IN_PLUS", "INP"],
  pin5: ["IN_MINUS", "INN"],
  pin6: "OUT",
} as const;

/** INA213 50-V/V current-shunt monitor in DCK (SC70-6) package. */
export const INA213AIDCK = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="INA213AIDCK"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/ina213.pdf"
    footprint="sot23_6_w2mm_h2.1mm_p0.65mm_pl0.9mm_pw0.45mm"
    pinLabels={pinLabels}
    {...props}
  />
);

export default INA213AIDCK;
