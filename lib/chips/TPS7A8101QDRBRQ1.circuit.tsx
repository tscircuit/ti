import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "OUT1",
  pin2: "OUT2",
  pin3: ["FB_SNS", "FB", "SNS"],
  pin4: "GND",
  pin5: "EN",
  pin6: "NR",
  pin7: "IN1",
  pin8: "IN2",
  pin9: ["EP", "PAD", "thermalpad"],
} as const;

/** Automotive 1 A adjustable LDO in TI's 8-pin DRB SON package. */
export const TPS7A8101QDRBRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="TPS7A8101QDRBRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tps7a8101-q1.pdf"
    footprint="son8_w3mm_h3mm_p0.65mm_pl0.7mm_pw0.3mm_ep_epw1.6mm_eph2.4mm"
    pinLabels={pinLabels}
    pinAttributes={{
      IN1: { requiresPower: true },
      IN2: { requiresPower: true },
      GND: { requiresGround: true },
      EP: { requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [8, 7, 6, 5],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [1, 2, 3, 4],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [9],
      },
    }}
    {...props}
  />
);

export default TPS7A8101QDRBRQ1;
