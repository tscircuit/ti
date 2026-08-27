import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const SQJ461EP_PIN_LABELS = {
  pin1: "S_1",
  pin2: "S_2",
  pin3: "S_3",
  pin4: "G",
  pin5: "D",
} as const;

/**
 * SQJ461EP P-channel MOSFET package record used by the TIDA-050008 BOM.
 * The released Altium symbol exposes pins 1-3 (source), 4 (gate), and a
 * single combined drain terminal numbered 5, exactly as reproduced here.
 */
export const SQJ461EP = (props: ChipProps<typeof SQJ461EP_PIN_LABELS>) => (
  <chip
    manufacturerPartNumber="SQJ461EP"
    footprint="kicad:Package_SO/PowerPAK_SO-8L_Single"
    internallyConnectedPins={[[1, 2, 3]]}
    pinLabels={SQJ461EP_PIN_LABELS}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: [5] },
      rightSide: { direction: "top-to-bottom", pins: [1, 2, 3] },
      topSide: { direction: "left-to-right", pins: [4] },
    }}
    {...props}
  />
);

export default SQJ461EP;
