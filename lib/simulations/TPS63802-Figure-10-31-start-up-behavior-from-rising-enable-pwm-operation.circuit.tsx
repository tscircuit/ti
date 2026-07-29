import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802StartupFigureCircuit } from "./create-TPS63802-startup-figure-circuit";

export const TPS63802Figure1031StartupFromRisingEnablePwmCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802StartupFigureCircuit({
    ...props,
    figureName:
      "Figure 10-31. Start-up Behavior from Rising Enable, PWM Operation",
    mode: "pwm",
  });

export default TPS63802Figure1031StartupFromRisingEnablePwmCircuit;
