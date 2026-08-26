import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { PowerSupplyBoostTida00699Contents } from "./PowerSupply_Boost_LM25122_TIDA00699.circuit.tsx";
import { PowerSupplyBuckTida00699Contents } from "./PowerSupply_Buck_LM53603_TIDA00699.circuit.tsx";
import { PowerSupplyEmiFilterTida00699Contents } from "./PowerSupply_EmiFilter_TIDA00699.circuit.tsx";
import { PowerSupplyReverseBatteryProtectionTida00699Contents } from "./PowerSupply_ReverseBatteryProtection_LM74610_TIDA00699.circuit.tsx";
import { PowerSupplySupervisorTida00699Contents } from "./PowerSupply_Supervisor_TPS3808_TIDA00699.circuit.tsx";
import { Tida00699ReferenceNets } from "./PowerSupply_TIDA00699.shared.tsx";

/**
 * Complete TIDA-00699 automotive off-battery supply, composed from the five
 * official functional sections in the TI schematic source.
 */
export const PowerSupply_TIDA00699 = (props: SubcircuitProps) => (
  <subcircuit schMaxTraceDistance="12mm" {...props} routingDisabled>
    <PowerSupplyReverseBatteryProtectionTida00699Contents />
    <PowerSupplyEmiFilterTida00699Contents />
    <PowerSupplyBoostTida00699Contents />
    <PowerSupplyBuckTida00699Contents />
    <PowerSupplySupervisorTida00699Contents />
    <Tida00699ReferenceNets />
  </subcircuit>
);

export default PowerSupply_TIDA00699;
