import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802EfficiencyVersusInputVoltage } from "./tps63802/TPS63802DatasheetMeasurements";

export const TPS63802Figure109EfficiencyInputVoltagePfm = (
  props: SubcircuitProps,
) => (
  <TPS63802EfficiencyVersusInputVoltage
    {...props}
    figure="10-9"
    mode="pfm"
    simulatedInputVoltagesV={[
      2.52, 2.72, 2.92, 3.14, 3.32, 3.94, 3.941, 3.942, 4.12, 4.32,
    ]}
    reportedInputVoltagesV={[2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.2]}
    simulatedOutputCurrentsA={[0.02, 0.0102, 0.0103, 0.0104, 0.0105]}
    reportedOutputCurrentsA={[0.0001, 0.01, 0.1, 1, 1.5]}
  />
);

export default TPS63802Figure109EfficiencyInputVoltagePfm;
