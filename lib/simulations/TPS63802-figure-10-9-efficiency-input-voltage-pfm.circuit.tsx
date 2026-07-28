import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802EfficiencyVersusInputVoltage } from "./tps63802/TPS63802DatasheetMeasurements.circuit";

export const TPS63802Figure109EfficiencyInputVoltagePfm = (
  props: SubcircuitProps,
) => (
  <TPS63802EfficiencyVersusInputVoltage
    {...props}
    figure="Figure 10-9"
    mode="pfm"
    inputVoltages={[
      "2.5V",
      "2.7V",
      "2.9V",
      "3.1V",
      "3.3V",
      "3.5V",
      "3.7V",
      "3.9V",
      "4.1V",
      "4.2V",
    ]}
    loadCurrents={["100uA", "10mA", "100mA", "1A", "1.5A"]}
  />
);

export default TPS63802Figure109EfficiencyInputVoltagePfm;
