import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802EfficiencyVsInputVoltageFigureCircuit } from "./create-TPS63802-efficiency-vs-input-voltage-figure-circuit";

export const TPS63802Figure109EfficiencyVsInputVoltagePfmPwmCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802EfficiencyVsInputVoltageFigureCircuit({
    ...props,
    figureName: "Figure 10-9. Efficiency versus Input Voltage (PFM/PWM)",
    inputVoltages: [
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
    ],
    loadCurrentValues: ["100uA", "10mA", "100mA", "1A", "1.5A"],
    mode: "pfm",
  });

export default TPS63802Figure109EfficiencyVsInputVoltagePfmPwmCircuit;
