import type { MosfetProps } from "@tscircuit/props";
import "tscircuit";

/** SQ4850EY 60-V automotive N-channel MOSFET in the PowerPAK SO-8 package. */
export const SQ4850EY = (
  props: Omit<MosfetProps, "channelType" | "mosfetMode">,
) => (
  <mosfet
    channelType="n"
    mosfetMode="enhancement"
    symbolDrainSide="right"
    symbolSourceSide="left"
    symbolGateSide="bottom"
    manufacturerPartNumber="SQ4850EY"
    datasheetUrl="https://www.vishay.com/docs/62970/sq4850ey.pdf"
    {...props}
  />
);

export default SQ4850EY;
