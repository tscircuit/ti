import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802EfficiencyVsOutputCurrentFigureCircuit } from "./create-TPS63802-efficiency-vs-output-current-figure-circuit";

export const TPS63802Figure106EfficiencyVsOutputCurrentPwmOnlyCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802EfficiencyVsOutputCurrentFigureCircuit({
    ...props,
    figureName: "Figure 10-6. Efficiency vs Output Current (PWM Only)",
    inputVoltages: ["2.5V", "3.6V", "4.2V"],
    mode: "pwm",
  });

export default TPS63802Figure106EfficiencyVsOutputCurrentPwmOnlyCircuit;
