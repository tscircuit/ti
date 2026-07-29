import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802StartupFigureCircuit } from "./create-TPS63802-startup-figure-circuit";

export const TPS63802Figure1030StartupFromRisingEnablePfmCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802StartupFigureCircuit({
    ...props,
    figureName:
      "Figure 10-30. Start-up Behavior from Rising Enable, PFM Operation",
    mode: "pfm",
  });

export default TPS63802Figure1030StartupFromRisingEnablePfmCircuit;
