import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import {
  AutomotiveBatteryFrontEndReferenceNets,
  AutomotiveBatteryFrontEndSectionContents,
} from "./AutomotiveBatteryFrontEnd.shared.tsx";

export const VoltageSupervisorTps3808Q1Contents = () => (
  <AutomotiveBatteryFrontEndSectionContents sectionName="supervisor_and_header" />
);

/** TIDA-00699 supply supervisor, shutdown diode, and control-header section. */
export const VoltageSupervisor_TPS3808Q1 = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="12mm"
    {...props}
    routingDisabled
    schTraceAutoLabelEnabled={false}
  >
    <VoltageSupervisorTps3808Q1Contents />
    <AutomotiveBatteryFrontEndReferenceNets />
  </subcircuit>
);

export default VoltageSupervisor_TPS3808Q1;
