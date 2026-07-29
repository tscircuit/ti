import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LoadTransientFigureCircuit } from "./create-TPS63802-load-transient-figure-circuit";

export const TPS63802Figure1025LoadTransientPwmBuckBoostOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802LoadTransientFigureCircuit({
    ...props,
    figureName: "Figure 10-25. Load Transient, PWM Buck-Boost Operation",
    inputVoltage: "3.3V",
    mode: "pwm",
  });

export default TPS63802Figure1025LoadTransientPwmBuckBoostOperationCircuit;
