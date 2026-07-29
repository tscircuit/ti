import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LoadTransientFigureCircuit } from "./create-TPS63802-load-transient-figure-circuit";

export const TPS63802Figure1021LoadTransientPfmPwmBoostOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802LoadTransientFigureCircuit({
    ...props,
    figureName: "Figure 10-21. Load Transient, PFM/PWM Boost Operation",
    inputVoltage: "2.5V",
    mode: "pfm",
  });

export default TPS63802Figure1021LoadTransientPfmPwmBoostOperationCircuit;
