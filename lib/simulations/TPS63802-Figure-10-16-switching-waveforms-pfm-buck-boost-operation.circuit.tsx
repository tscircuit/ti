import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802SwitchingWaveformsFigureCircuit } from "./create-TPS63802-switching-waveforms-figure-circuit";

export const TPS63802Figure1016SwitchingWaveformsPfmBuckBoostOperationCircuit =
  (props: SubcircuitProps) =>
    createTPS63802SwitchingWaveformsFigureCircuit({
      ...props,
      duration: "696us",
      figureName: "Figure 10-16. Switching Waveforms, PFM Buck-Boost Operation",
      inputVoltage: "3.3V",
      startTime: "673us",
    });

export default TPS63802Figure1016SwitchingWaveformsPfmBuckBoostOperationCircuit;
