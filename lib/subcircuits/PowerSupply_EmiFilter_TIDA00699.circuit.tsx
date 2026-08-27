import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  Tida00699ReferenceNets,
  Tida00699ReferenceSectionContents,
} from "./PowerSupply_TIDA00699.shared.tsx";

export const PowerSupplyEmiFilterTida00699Contents = () => (
  <Tida00699ReferenceSectionContents sectionName="emi_filter" />
);

/** TIDA-00699 protected-input EMI filter section. */
export const PowerSupply_EmiFilter_TIDA00699 = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="12mm"
    {...props}
    routingDisabled
    schTraceAutoLabelEnabled={false}
  >
    <PowerSupplyEmiFilterTida00699Contents />
    <Tida00699ReferenceNets />
  </subcircuit>
);

export default PowerSupply_EmiFilter_TIDA00699;
