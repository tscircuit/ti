import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  AutomotiveBatteryFrontEndReferenceNets,
  AutomotiveBatteryFrontEndSectionContents,
} from "./AutomotiveBatteryFrontEnd.shared.tsx";

export const AutomotivePowerInputEmiFilterContents = () => (
  <AutomotiveBatteryFrontEndSectionContents sectionName="emi_filter" />
);

/** TIDA-00699 protected-input EMI filter section. */
export const AutomotivePowerInputEmiFilter = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="12mm"
    {...props}
    routingDisabled
    schTraceAutoLabelEnabled={false}
  >
    <AutomotivePowerInputEmiFilterContents />
    <AutomotiveBatteryFrontEndReferenceNets />
  </subcircuit>
);

export default AutomotivePowerInputEmiFilter;
