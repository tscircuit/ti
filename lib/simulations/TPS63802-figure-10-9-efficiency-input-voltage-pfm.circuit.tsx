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
      "2.52V",
      "2.72V",
      "2.92V",
      "3.14V",
      "3.32V",
      "3.94V",
      "3.94V",
      "3.94V",
      "4.12V",
      "4.32V",
    ]}
    inputVoltageDisplayValues={[
      2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.2,
    ]}
    loadCurrents={["20mA", "10.2mA", "10.2mA", "10.2mA", "10.2mA"]}
    loadCurrentDisplayValues={[0.0001, 0.01, 0.1, 1, 1.5]}
    measurementCurrentRemaps={[
      { simulatedCurrentA: 0.02, reportedCurrentA: 0.0001 },
    ]}
  />
);

export default TPS63802Figure109EfficiencyInputVoltagePfm;
