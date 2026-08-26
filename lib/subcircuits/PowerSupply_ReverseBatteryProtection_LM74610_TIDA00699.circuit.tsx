import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  Tida00699ReferenceNets,
  Tida00699ReferenceSectionContents,
} from "./PowerSupply_TIDA00699.shared.tsx";

export const PowerSupplyReverseBatteryProtectionTida00699Contents = () => (
  <Tida00699ReferenceSectionContents sectionName="reverse_battery_protection" />
);

/** TIDA-00699 transient and reverse-polarity protection section. */
export const PowerSupply_ReverseBatteryProtection_LM74610_TIDA00699 = (
  props: SubcircuitProps,
) => (
  <subcircuit schMaxTraceDistance="12mm" {...props} routingDisabled>
    <PowerSupplyReverseBatteryProtectionTida00699Contents />
    <Tida00699ReferenceNets />
  </subcircuit>
);

export default PowerSupply_ReverseBatteryProtection_LM74610_TIDA00699;
