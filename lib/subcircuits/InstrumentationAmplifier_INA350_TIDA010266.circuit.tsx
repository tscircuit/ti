import "tscircuit";
import { InstrumentationAmplifier_INA350 } from "./InstrumentationAmplifier_INA350.circuit.tsx";
import type { TIDA010266SectionedSubcircuitProps } from "../utils/tida010266/TIDA010266.types.ts";

/** TIDA-010266 U5/C13 external INA350 instrumentation-amplifier stage. */
export const InstrumentationAmplifier_INA350_TIDA010266 = (
  props: TIDA010266SectionedSubcircuitProps,
) => (
  <InstrumentationAmplifier_INA350
    {...props}
    chipName="U5"
    bypassCapacitorName="C13"
    gain="external"
    shutdown="external"
    renderInlineNetPorts
    schematicStyle="box"
    supplyNetName="V3_3"
  />
);

export default InstrumentationAmplifier_INA350_TIDA010266;
