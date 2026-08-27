import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  Tida00699ReferenceNets,
  Tida00699ReferenceSectionContents,
} from "./PowerSupply_TIDA00699.shared.tsx";

export const PowerSupplyBuckTida00699Contents = () => (
  <Tida00699ReferenceSectionContents sectionName="buck_regulator" />
);

/** TIDA-00699 5-V wide-input buck section. */
export const PowerSupply_Buck_LM53603_TIDA00699 = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="12mm"
    {...props}
    routingDisabled
    schTraceAutoLabelEnabled={false}
  >
    <PowerSupplyBuckTida00699Contents />
    <Tida00699ReferenceNets />
  </subcircuit>
);

export default PowerSupply_Buck_LM53603_TIDA00699;
