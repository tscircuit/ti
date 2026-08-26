import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  Tida00699ReferenceNets,
  Tida00699ReferenceSectionContents,
} from "./PowerSupply_TIDA00699.shared.tsx";

export const PowerSupplyBoostTida00699Contents = () => (
  <Tida00699ReferenceSectionContents sectionName="boost_regulator" />
);

/** TIDA-00699 9-V wide-input boost section. */
export const PowerSupply_Boost_LM25122_TIDA00699 = (props: SubcircuitProps) => (
  <subcircuit schMaxTraceDistance="12mm" {...props} routingDisabled>
    <PowerSupplyBoostTida00699Contents />
    <Tida00699ReferenceNets />
  </subcircuit>
);

export default PowerSupply_Boost_LM25122_TIDA00699;
