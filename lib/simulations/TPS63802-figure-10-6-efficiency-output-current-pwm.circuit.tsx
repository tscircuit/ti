import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802EfficiencyVersusOutputCurrent } from "./tps63802/TPS63802DatasheetMeasurements.circuit";

export const TPS63802Figure106EfficiencyOutputCurrentPwm = (
  props: SubcircuitProps,
) => (
  <TPS63802EfficiencyVersusOutputCurrent
    {...props}
    figure="Figure 10-6"
    mode="pwm"
    inputVoltages={["2.5V", "3.6V", "4.2V"]}
    outputCurrents={[
      "1mA",
      "3mA",
      "10mA",
      "30mA",
      "100mA",
      "300mA",
      "500mA",
      "700mA",
      "1A",
      "1.5A",
      "2A",
    ]}
  />
);

export default TPS63802Figure106EfficiencyOutputCurrentPwm;
