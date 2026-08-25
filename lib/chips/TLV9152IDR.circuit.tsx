import type { OpAmpProps } from "@tscircuit/props";
import "tscircuit";

export const TLV9152IDR = (props: OpAmpProps) => (
  <opamp
    manufacturerPartNumber="TLV9152IDR"
    symbolName="opamp_with_power"
    {...props}
  />
);

export default TLV9152IDR;
