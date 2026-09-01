import type { ChipProps } from "@tscircuit/props";

import {
  MSPM0G5117SPMR,
  MSPM0G5117SPMR_PIN_LABELS,
} from "./MSPM0G5117SPMR.circuit.tsx";

/**
 * MSPM0G5187 and MSPM0G5117 share the same 64-pin PM package pinout.
 *
 * Source: MSPM0G5187 data sheet, Figure 6-1.
 * https://www.ti.com/lit/ds/symlink/mspm0g5187.pdf
 */
export const MSPM0G5187SPMR_PIN_LABELS = MSPM0G5117SPMR_PIN_LABELS;

export const MSPM0G5187SPMR = (
  props: ChipProps<typeof MSPM0G5187SPMR_PIN_LABELS>,
) => (
  <MSPM0G5117SPMR
    manufacturerPartNumber="MSPM0G5187SPMR"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/mspm0g5187.pdf"
    {...props}
  />
);
