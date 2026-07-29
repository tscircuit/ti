import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802EfficiencyVsOutputCurrentFigureCircuit } from "./create-TPS63802-efficiency-vs-output-current-figure-circuit";

export const TPS63802Figure105EfficiencyVsOutputCurrentPfmPwmCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802EfficiencyVsOutputCurrentFigureCircuit({
    ...props,
    figureName: "Figure 10-5. Efficiency vs Output Current (PFM/PWM)",
    inputVoltages: ["2.5V", "3.6V", "4.2V"],
    mode: "pfm",
  });

export default TPS63802Figure105EfficiencyVsOutputCurrentPfmPwmCircuit;
