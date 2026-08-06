import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802EfficiencyVersusOutputCurrent } from "./tps63802/TPS63802DatasheetMeasurements";

export const TPS63802Figure106EfficiencyOutputCurrentPwm = (
  props: SubcircuitProps,
) => (
  <TPS63802EfficiencyVersusOutputCurrent
    {...props}
    figure="10-6"
    mode="pwm"
    simulatedInputVoltagesV={[2.52, 3.82, 4.22]}
    reportedInputVoltagesV={[2.5, 3.6, 4.2]}
    simulatedOutputCurrentsA={[
      0.02, 0.022, 0.024, 0.0306, 0.13, 0.52, 0.521, 0.8, 1.02, 1.53, 2.2,
    ]}
    reportedOutputCurrentsA={[
      0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1, 1.5, 2,
    ]}
  />
);

export default TPS63802Figure106EfficiencyOutputCurrentPwm;
