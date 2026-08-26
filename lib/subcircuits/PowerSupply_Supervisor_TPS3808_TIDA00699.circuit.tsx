import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  Tida00699ReferenceNets,
  Tida00699ReferenceSectionContents,
} from "./PowerSupply_TIDA00699.shared.tsx";

export const PowerSupplySupervisorTida00699Contents = () => (
  <Tida00699ReferenceSectionContents sectionName="supervisor_and_header" />
);

/** TIDA-00699 supply supervisor, shutdown diode, and control-header section. */
export const PowerSupply_Supervisor_TPS3808_TIDA00699 = (
  props: SubcircuitProps,
) => (
  <subcircuit schMaxTraceDistance="12mm" {...props} routingDisabled>
    <PowerSupplySupervisorTida00699Contents />
    <Tida00699ReferenceNets />
  </subcircuit>
);

export default PowerSupply_Supervisor_TPS3808_TIDA00699;
