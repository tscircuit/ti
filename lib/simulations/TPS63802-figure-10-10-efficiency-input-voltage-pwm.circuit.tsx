import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802EfficiencyVersusInputVoltage } from "./tps63802/TPS63802DatasheetMeasurements.circuit";

export const TPS63802Figure1010EfficiencyInputVoltagePwm = (
  props: SubcircuitProps,
) => (
  <TPS63802EfficiencyVersusInputVoltage
    {...props}
    figure="Figure 10-10"
    mode="pwm"
    outputVoltages={[1.8, 3.3, 5.2]}
  />
);

export default TPS63802Figure1010EfficiencyInputVoltagePwm;
