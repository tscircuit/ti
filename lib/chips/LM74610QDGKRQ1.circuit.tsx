import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "VCAPL",
  pin2: "GATE_PULL_DOWN",
  pin3: "NC_1",
  pin4: "ANODE",
  pin5: "NC_2",
  pin6: "GATE_DRIVE",
  pin7: "VCAPH",
  pin8: "CATHODE",
} as const;

/** LM74610-Q1 smart-diode controller in the DGK VSSOP-8 package. */
export const LM74610QDGKRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="LM74610QDGKRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lm74610-q1.pdf"
    footprint="soic8_p0.65mm_w4.45mm_pw0.45mm_pl1.35mm"
    schWidth="3.4mm"
    schHeight="2.6mm"
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [7, 1, 4, 8],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [6, 2, 3, 5],
      },
    }}
    noConnect={["pin3", "pin5"]}
    {...props}
  />
);

export default LM74610QDGKRQ1;
