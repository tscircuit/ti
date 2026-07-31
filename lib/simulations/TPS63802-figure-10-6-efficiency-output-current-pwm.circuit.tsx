import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802EfficiencyVersusOutputCurrent } from "./tps63802/TPS63802DatasheetMeasurements.circuit";

export const TPS63802Figure106EfficiencyOutputCurrentPwm = (
  props: SubcircuitProps,
) => (
  <TPS63802EfficiencyVersusOutputCurrent
    {...props}
    figure="Figure 10-6"
    mode="pwm"
    inputVoltages={["2.52V", "3.82V", "4.22V"]}
    inputVoltageDisplayValues={[2.5, 3.6, 4.2]}
    outputCurrents={[
      "20mA",
      "22mA",
      "24mA",
      "30.6mA",
      "130mA",
      "520mA",
      "520mA",
      "800mA",
      "1.02A",
      "1.53A",
      "2.2A",
    ]}
    outputCurrentDisplayValues={[
      0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1, 1.5, 2,
    ]}
    measurementCurrentRemaps={[
      { simulatedCurrentA: 0.02, reportedCurrentA: 0.001 },
      { simulatedCurrentA: 0.022, reportedCurrentA: 0.003 },
      { simulatedCurrentA: 0.024, reportedCurrentA: 0.01 },
      { simulatedCurrentA: 0.13, reportedCurrentA: 0.1 },
    ]}
  />
);

export default TPS63802Figure106EfficiencyOutputCurrentPwm;
