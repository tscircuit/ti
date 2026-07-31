import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802EfficiencyVersusOutputCurrent } from "./tps63802/TPS63802DatasheetMeasurements.circuit";

export const TPS63802Figure108EfficiencyOutputCurrentPwm = (
  props: SubcircuitProps,
) => (
  <TPS63802EfficiencyVersusOutputCurrent
    {...props}
    figure="Figure 10-8"
    mode="pwm"
    inputVoltages={["1.94V", "3.32V", "5.02V"]}
    inputVoltageDisplayValues={[1.8, 3.3, 5]}
    outputCurrents={[
      "26mA",
      "22mA",
      "24mA",
      "30.6mA",
      "120mA",
      "306mA",
      "1.02A",
      "1.02A",
      "1.02A",
      "1.53A",
      "2.04A",
    ]}
    outputCurrentDisplayValues={[
      0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1, 1.5, 2,
    ]}
    measurementCurrentRemaps={[
      { simulatedCurrentA: 0.026, reportedCurrentA: 0.001 },
      { simulatedCurrentA: 0.022, reportedCurrentA: 0.003 },
      { simulatedCurrentA: 0.024, reportedCurrentA: 0.01 },
    ]}
  />
);

export default TPS63802Figure108EfficiencyOutputCurrentPwm;
