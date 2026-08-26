import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const LM74202QPWPRQ1_PIN_LABELS = {
  pin1: ["IN1", "IN"],
  pin2: "IN2",
  pin3: "UVLO",
  pin4: "NC1",
  pin5: "OVP",
  pin6: "MODE",
  pin7: "SHDN",
  pin8: "RTN",
  pin9: "GND",
  pin10: "IMON",
  pin11: "ILIM",
  pin12: "DVDT",
  pin13: "NC2",
  pin14: "FLT",
  pin15: ["OUT1", "OUT"],
  pin16: "OUT2",
  pin17: ["PAD", "thermalpad"],
} as const;

/** Automotive ideal-diode controller in the 16-pin PWP PowerPAD package. */
export const LM74202QPWPRQ1 = (
  props: ChipProps<typeof LM74202QPWPRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="LM74202QPWPRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lm74202-q1.pdf"
    footprint="tssop16_p0.65mm_w4.4mm_thermalpad3mmx3mm"
    schWidth="4.2mm"
    schHeight="6.4mm"
    pinLabels={LM74202QPWPRQ1_PIN_LABELS}
    pinAttributes={{
      IN1: { requiresPower: true },
      IN2: { requiresPower: true },
      UVLO: { requiresPower: true },
      OVP: { requiresPower: true },
      MODE: { requiresPower: true },
      SHDN: { requiresPower: true },
      IMON: { providesPower: true },
      ILIM: { requiresPower: true, providesPower: true },
      DVDT: { requiresPower: true, providesPower: true },
      FLT: { providesPower: true },
      OUT1: { providesPower: true },
      OUT2: { providesPower: true },
      RTN: { requiresGround: true },
      GND: { requiresGround: true },
      PAD: { requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 2, 3, 5, 12, 6, 8],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [16, 15, 14, 7, 10, 11],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [4, 9, 17, 13],
      },
    }}
    noConnect={["pin4", "pin13"]}
    {...props}
  />
);

export const LM74202Q1 = LM74202QPWPRQ1;

export default LM74202QPWPRQ1;
