import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: ["CATHODE", "K"],
  pin2: ["REF", "REFERENCE"],
  pin3: ["ANODE", "A", "GND"],
} as const;

/** ATL431LI B-grade shunt reference in the DBZ 3-pin SOT-23 package. */
export const ATL431LIBIDBZR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="ATL431LIBIDBZR"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/atl431li.pdf"
    footprint="sot23_3"
    pinLabels={pinLabels}
    pinAttributes={{
      pin1: { mustBeConnected: true },
      pin2: { mustBeConnected: true },
      pin3: { requiresGround: true, mustBeConnected: true },
    }}
    schWidth="2.6mm"
    schHeight="2.2mm"
    schPinArrangement={{
      topSide: { direction: "left-to-right", pins: ["CATHODE"] },
      leftSide: { direction: "top-to-bottom", pins: ["REF"] },
      bottomSide: { direction: "left-to-right", pins: ["ANODE"] },
    }}
    schPinStyle={{ REF: { marginTop: 0.35 } }}
    {...props}
  />
);

export default ATL431LIBIDBZR;
