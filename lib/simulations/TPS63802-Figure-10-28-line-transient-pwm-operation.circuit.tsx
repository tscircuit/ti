import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LineTransientFigureCircuit } from "./create-TPS63802-line-transient-figure-circuit";

export const TPS63802Figure1028LineTransientPwmOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802LineTransientFigureCircuit({
    ...props,
    figureName: "Figure 10-28. Line Transient, PWM Operation",
    inputVoltageHigh: "4.2V",
    inputVoltageLow: "2.2V",
    loadResistance: "3.3Ω",
  });

export default TPS63802Figure1028LineTransientPwmOperationCircuit;
