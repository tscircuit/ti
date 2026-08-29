import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "IN1",
  pin2: "IN2",
  pin3: "OUT1",
  pin4: "OUT2",
  pin5: "FB",
  pin6: "GND",
  pin7: "NC",
  pin8: "EN",
  pin9: ["EP", "PAD", "thermalpad"],
} as const;

/** Adjustable 1 A low-noise LDO in TI's 8-pin DRB VSON package. */
export const TPS79601DRBR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="TPS79601DRBR"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tps796.pdf"
    footprint="son8_w3mm_h3mm_p0.65mm_pl0.7mm_pw0.3mm_ep_epw1.6mm_eph2.4mm"
    pinLabels={pinLabels}
    pinAttributes={{
      IN1: { requiresPower: true },
      IN2: { requiresPower: true },
      GND: { requiresGround: true },
      EP: { requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: [1, 2, 3, 4] },
      rightSide: { direction: "top-to-bottom", pins: [8, 7, 6, 5] },
      bottomSide: { direction: "left-to-right", pins: [9] },
    }}
    {...props}
  />
);

export default TPS79601DRBR;
