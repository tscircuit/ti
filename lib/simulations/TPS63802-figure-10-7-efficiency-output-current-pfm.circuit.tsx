import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802EfficiencyVersusOutputCurrent } from "./tps63802/TPS63802DatasheetMeasurements";

export const TPS63802Figure107EfficiencyOutputCurrentPfm = (
  props: SubcircuitProps,
) => (
  <TPS63802EfficiencyVersusOutputCurrent
    {...props}
    figure="10-7"
    mode="pfm"
    simulatedInputVoltagesV={[1.94, 3.32, 5.02]}
    reportedInputVoltagesV={[1.8, 3.3, 5]}
    simulatedOutputCurrentsA={[
      0.026, 0.022, 0.024, 0.034, 0.036, 0.0306, 0.12, 0.306, 0.75, 0.751, 1.02,
      2.04, 2.041,
    ]}
    reportedOutputCurrentsA={[
      0.0001, 0.0003, 0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1, 1.5, 2,
    ]}
  />
);

export default TPS63802Figure107EfficiencyOutputCurrentPfm;
