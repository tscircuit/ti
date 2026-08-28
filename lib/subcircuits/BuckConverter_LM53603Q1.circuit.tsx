import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  AutomotiveBatteryFrontEndReferenceNets,
  AutomotiveBatteryFrontEndSectionContents,
} from "./AutomotiveBatteryFrontEnd.shared.tsx";

export const BuckConverterLm53603Q1Contents = () => (
  <AutomotiveBatteryFrontEndSectionContents sectionName="buck_regulator" />
);

/** TIDA-00699 5-V wide-input buck section. */
export const BuckConverter_LM53603Q1 = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="12mm"
    {...props}
    routingDisabled
    schTraceAutoLabelEnabled={false}
  >
    <BuckConverterLm53603Q1Contents />
    <AutomotiveBatteryFrontEndReferenceNets />
  </subcircuit>
);

export default BuckConverter_LM53603Q1;
