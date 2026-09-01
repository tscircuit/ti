import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

import { MSPM0G5187SPMR } from "../chips/MSPM0G5187SPMR.circuit.tsx";
import { MSPM0G51x7BasicApplication } from "../utils/MSPM0G51x7BasicApplication.circuit.tsx";

export const Microcontroller_MSPM0G5187 = (props: SubcircuitProps) => (
  <MSPM0G51x7BasicApplication Chip={MSPM0G5187SPMR} {...props} />
);

export default Microcontroller_MSPM0G5187;
