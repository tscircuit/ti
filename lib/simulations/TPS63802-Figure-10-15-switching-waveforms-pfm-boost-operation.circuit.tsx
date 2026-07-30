import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802SwitchingWaveformsFigureCircuit } from "./create-TPS63802-switching-waveforms-figure-circuit";

export const TPS63802Figure1015SwitchingWaveformsPfmBoostOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802SwitchingWaveformsFigureCircuit({
    ...props,
    duration: "704us",
    figureName: "Figure 10-15. Switching Waveforms, PFM Boost Operation",
    inputVoltage: "2.3V",
    startTime: "686us",
  });

export default TPS63802Figure1015SwitchingWaveformsPfmBoostOperationCircuit;
