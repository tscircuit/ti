import type { MosfetProps } from "@tscircuit/props";
import "tscircuit";

/** CSD18531Q5A 60-V N-channel NexFET in the SON 5-mm x 6-mm package. */
export const CSD18531Q5A = (
  props: Omit<MosfetProps, "channelType" | "mosfetMode">,
) => (
  <mosfet
    channelType="n"
    mosfetMode="enhancement"
    manufacturerPartNumber="CSD18531Q5A"
    supplierPartNumbers={{
      digikey: ["296-30573-1-ND"],
      mouser: ["595-CSD18531Q5A"],
    }}
    datasheetUrl="https://www.ti.com/lit/ds/symlink/csd18531q5a.pdf"
    {...props}
  />
);

export default CSD18531Q5A;
