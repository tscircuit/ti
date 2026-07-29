import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LoadRegulationFigureCircuit } from "./create-TPS63802-load-regulation-figure-circuit";

export const TPS63802Figure1012LoadRegulationPfmPwmCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802LoadRegulationFigureCircuit({
    ...props,
    figureName: "Figure 10-12. Load Regulation (PFM/PWM)",
    mode: "pfm",
  });

export default TPS63802Figure1012LoadRegulationPfmPwmCircuit;
