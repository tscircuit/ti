import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LoadRegulationFigureCircuit } from "./create-TPS63802-load-regulation-figure-circuit";

export const TPS63802Figure1011LoadRegulationPwmOnlyCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802LoadRegulationFigureCircuit({
    ...props,
    figureName: "Figure 10-11. Load Regulation (PWM Only)",
    mode: "pwm",
  });

export default TPS63802Figure1011LoadRegulationPwmOnlyCircuit;
