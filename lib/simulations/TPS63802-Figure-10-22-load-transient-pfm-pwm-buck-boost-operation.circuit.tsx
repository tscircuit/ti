import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LoadTransientFigureCircuit } from "./create-TPS63802-load-transient-figure-circuit";

export const TPS63802Figure1022LoadTransientPfmPwmBuckBoostOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802LoadTransientFigureCircuit({
    ...props,
    figureName: "Figure 10-22. Load Transient, PFM/PWM Buck-Boost Operation",
    inputVoltage: "3.3V",
    mode: "pfm",
  });

export default TPS63802Figure1022LoadTransientPfmPwmBuckBoostOperationCircuit;
