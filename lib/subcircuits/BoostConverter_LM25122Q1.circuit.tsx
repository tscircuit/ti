import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  AutomotiveBatteryFrontEndReferenceNets,
  AutomotiveBatteryFrontEndSectionContents,
} from "./AutomotiveBatteryFrontEnd.shared.tsx";

export const BoostConverterLm25122Q1Contents = () => (
  <AutomotiveBatteryFrontEndSectionContents sectionName="boost_regulator" />
);

/** TIDA-00699 9-V wide-input boost section. */
export const BoostConverter_LM25122Q1 = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="12mm"
    {...props}
    routingDisabled
    schTraceAutoLabelEnabled={false}
  >
    <BoostConverterLm25122Q1Contents />
    <AutomotiveBatteryFrontEndReferenceNets />
  </subcircuit>
);

export default BoostConverter_LM25122Q1;
