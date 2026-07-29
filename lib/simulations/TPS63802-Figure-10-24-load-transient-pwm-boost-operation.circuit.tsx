import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LoadTransientFigureCircuit } from "./create-TPS63802-load-transient-figure-circuit";

export const TPS63802Figure1024LoadTransientPwmBoostOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802LoadTransientFigureCircuit({
    ...props,
    figureName: "Figure 10-24. Load Transient, PWM Boost Operation",
    inputVoltage: "2.5V",
    mode: "pwm",
  });

export default TPS63802Figure1024LoadTransientPwmBoostOperationCircuit;
