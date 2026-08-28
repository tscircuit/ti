import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  AutomotiveBatteryFrontEndReferenceNets,
  AutomotiveBatteryFrontEndSectionContents,
} from "./AutomotiveBatteryFrontEnd.shared.tsx";

export const ReverseBatteryProtectionLm74610Q1Contents = () => (
  <AutomotiveBatteryFrontEndSectionContents sectionName="reverse_battery_protection" />
);

/** TIDA-00699 transient and reverse-polarity protection section. */
export const ReverseBatteryProtection_LM74610Q1 = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="12mm"
    {...props}
    routingDisabled
    schTraceAutoLabelEnabled={false}
  >
    <ReverseBatteryProtectionLm74610Q1Contents />
    <AutomotiveBatteryFrontEndReferenceNets />
  </subcircuit>
);

export default ReverseBatteryProtection_LM74610Q1;
