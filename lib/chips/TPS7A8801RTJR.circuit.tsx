import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: ["IN1", "IN1_1"],
  pin2: ["IN1", "IN1_2"],
  pin3: ["GND", "GND1"],
  pin4: ["IN2", "IN2_1"],
  pin5: ["IN2", "IN2_2"],
  pin6: "EN2",
  pin7: "NR_SS2",
  pin8: "SS_CTRL2",
  pin9: "PG2",
  pin10: "FB2",
  pin11: ["OUT2", "OUT2_1"],
  pin12: ["OUT2", "OUT2_2"],
  pin13: ["GND", "GND2"],
  pin14: ["OUT1", "OUT1_1"],
  pin15: ["OUT1", "OUT1_2"],
  pin16: "FB1",
  pin17: "PG1",
  pin18: "SS_CTRL1",
  pin19: "NR_SS1",
  pin20: "EN1",
  pin21: ["EP", "PAD", "thermalpad"],
} as const;

/** Dual 1 A adjustable LDO in TI's 20-pin RTJ WQFN package. */
export const TPS7A8801RTJR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="TPS7A8801RTJR"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tps7a88.pdf"
    footprint="qfn20_w4mm_h4mm_p0.5mm_pw0.28mm_pl0.75mm_thermalpad2.65mmx2.65mm"
    pinLabels={pinLabels}
    pinAttributes={{
      IN1_1: { requiresPower: true },
      IN1_2: { requiresPower: true },
      IN2_1: { requiresPower: true },
      IN2_2: { requiresPower: true },
      GND1: { requiresGround: true },
      GND2: { requiresGround: true },
      EP: { requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 2, 3, 4, 5],
      },
      topSide: {
        direction: "left-to-right",
        pins: [20, 19, 18, 17, 16],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [15, 14, 13, 12, 11, 21],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [6, 7, 8, 9, 10],
      },
    }}
    {...props}
  />
);

export default TPS7A8801RTJR;
