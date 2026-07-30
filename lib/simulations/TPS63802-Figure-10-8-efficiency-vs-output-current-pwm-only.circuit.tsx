import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802EfficiencyVsOutputCurrentFigureCircuit } from "./create-TPS63802-efficiency-vs-output-current-figure-circuit";

export const TPS63802Figure108EfficiencyVsOutputCurrentPwmOnlyCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802EfficiencyVsOutputCurrentFigureCircuit({
    ...props,
    figureName: "Figure 10-8. Efficiency vs Output Current (PWM Only)",
    inputVoltages: ["1.8V", "3.3V", "5V"],
    mode: "pwm",
  });

export default TPS63802Figure108EfficiencyVsOutputCurrentPwmOnlyCircuit;
