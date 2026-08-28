import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { AutomotivePowerInputEmiFilterContents } from "./AutomotivePowerInputEmiFilter.circuit.tsx";
import { BoostConverterLm25122Q1Contents } from "./BoostConverter_LM25122Q1.circuit.tsx";
import { BuckConverterLm53603Q1Contents } from "./BuckConverter_LM53603Q1.circuit.tsx";
import { AutomotiveBatteryFrontEndReferenceNets } from "./AutomotiveBatteryFrontEnd.shared.tsx";
import { ReverseBatteryProtectionLm74610Q1Contents } from "./ReverseBatteryProtection_LM74610Q1.circuit.tsx";
import { VoltageSupervisorTps3808Q1Contents } from "./VoltageSupervisor_TPS3808Q1.circuit.tsx";

/**
 * Complete TIDA-00699 automotive off-battery supply, composed from the five
 * official functional sections in the TI schematic source.
 */
export const AutomotiveBatteryFrontEnd = (props: SubcircuitProps) => (
  <subcircuit
    schMaxTraceDistance="12mm"
    {...props}
    routingDisabled
    schTraceAutoLabelEnabled={false}
  >
    <ReverseBatteryProtectionLm74610Q1Contents />
    <AutomotivePowerInputEmiFilterContents />
    <BoostConverterLm25122Q1Contents />
    <BuckConverterLm53603Q1Contents />
    <VoltageSupervisorTps3808Q1Contents />
    <AutomotiveBatteryFrontEndReferenceNets />
  </subcircuit>
);

export default AutomotiveBatteryFrontEnd;
