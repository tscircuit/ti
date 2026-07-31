import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802EfficiencyVersusOutputCurrent } from "./tps63802/TPS63802DatasheetMeasurements";

export const TPS63802Figure108EfficiencyOutputCurrentPwm = (
  props: SubcircuitProps,
) => (
  <TPS63802EfficiencyVersusOutputCurrent
    {...props}
    figure="10-8"
    mode="pwm"
    simulatedInputVoltagesV={[1.94, 3.32, 5.02]}
    reportedInputVoltagesV={[1.8, 3.3, 5]}
    simulatedOutputCurrentsA={[
      0.026, 0.022, 0.024, 0.0306, 0.12, 0.306, 1.02, 1.021, 1.022, 1.53, 2.04,
    ]}
    reportedOutputCurrentsA={[
      0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1, 1.5, 2,
    ]}
  />
);

export default TPS63802Figure108EfficiencyOutputCurrentPwm;
