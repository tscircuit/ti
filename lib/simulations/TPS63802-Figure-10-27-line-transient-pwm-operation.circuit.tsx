import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LineTransientFigureCircuit } from "./create-TPS63802-line-transient-figure-circuit";

export const TPS63802Figure1027LineTransientPwmOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802LineTransientFigureCircuit({
    ...props,
    figureName: "Figure 10-27. Line Transient, PWM Operation",
    inputVoltageHigh: "4.2V",
    inputVoltageLow: "2.2V",
    loadResistance: "6.6Ω",
  });

export default TPS63802Figure1027LineTransientPwmOperationCircuit;
