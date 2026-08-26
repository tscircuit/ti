import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const DRV5013ADQDBZRQ1_PIN_LABELS = {
  pin1: ["VCC", "VS"],
  pin2: ["OUT", "OUTPUT"],
  pin3: ["GND"],
} as const;

/**
 * DRV5013ADQDBZRQ1 automotive Hall-effect latch in TI's three-pin DBZ
 * (SOT-23) package.
 *
 * The DRV5013-Q1 data sheet defines DBZ pin 1 as VCC, pin 2 as the open-drain
 * OUT, and pin 3 as GND. The native chip symbol keeps VCC on the left and OUT
 * and GND on the right, matching the reference schematic without custom
 * symbol artwork or sizing.
 */
export const DRV5013ADQDBZRQ1 = (
  props: ChipProps<typeof DRV5013ADQDBZRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="DRV5013ADQDBZRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/drv5013-q1.pdf"
    footprint="sot23_3"
    pinLabels={DRV5013ADQDBZRQ1_PIN_LABELS}
    pinAttributes={{
      VCC: {
        mustBeConnected: true,
        requiresPower: true,
        shouldHaveDecouplingCapacitor: true,
        recommendedDecouplingCapacitorCapacitance: "0.1uF",
      },
      OUT: { mustBeConnected: true },
      GND: { requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: [1] },
      rightSide: { direction: "top-to-bottom", pins: [2, 3] },
    }}
    {...props}
  />
);

export default DRV5013ADQDBZRQ1;
