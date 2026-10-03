import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

import { MSPM0G5117SPMR } from "../chips/MSPM0G5117SPMR.circuit.tsx";
import { MSPM0G51x7BasicApplication } from "../utils/MSPM0G51x7BasicApplication.circuit.tsx";

export const Microcontroller_MSPM0G5117 = (props: SubcircuitProps) => (
  <MSPM0G51x7BasicApplication Chip={MSPM0G5117SPMR} {...props} />
);

export default Microcontroller_MSPM0G5117;
