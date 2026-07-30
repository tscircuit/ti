import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802SwitchingWaveformsFigureCircuit } from "./create-TPS63802-switching-waveforms-figure-circuit";

export const TPS63802Figure1017SwitchingWaveformsPfmBuckOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802SwitchingWaveformsFigureCircuit({
    ...props,
    duration: "704us",
    figureName: "Figure 10-17. Switching Waveforms, PFM Buck Operation",
    inputVoltage: "4.2V",
    startTime: "686us",
  });

export default TPS63802Figure1017SwitchingWaveformsPfmBuckOperationCircuit;
