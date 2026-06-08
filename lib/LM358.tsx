import type { ChipProps } from "tscircuit"

const pinLabels = {
  pin1: ["OUT_A"],
  pin2: ["IN_A_NEG"],
  pin3: ["IN_A_POS"],
  pin4: ["V_NEG"],
  pin5: ["IN_B_POS"],
  pin6: ["IN_B_NEG"],
  pin7: ["OUT_B"],
  pin8: ["V_POS"],
} as const

export const LM358 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    {...props}
    manufacturerPartNumber="LM358"
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 2, 3],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [5, 6, 7],
      },
      topSide: {
        direction: "left-to-right",
        pins: [8],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [4],
      },
    }}
    footprint="ti:LM358"
  />
)
