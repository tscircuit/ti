import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LoadTransientFigureCircuit } from "./create-TPS63802-load-transient-figure-circuit";

export const TPS63802Figure1023LoadTransientPfmPwmBuckOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802LoadTransientFigureCircuit({
    ...props,
    figureName: "Figure 10-23. Load Transient, PFM/PWM Buck Operation",
    inputVoltage: "5V",
    mode: "pfm",
  });

export default TPS63802Figure1023LoadTransientPfmPwmBuckOperationCircuit;
