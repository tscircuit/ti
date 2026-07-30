import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802SwitchingWaveformsFigureCircuit } from "./create-TPS63802-switching-waveforms-figure-circuit";

export const TPS63802Figure1019SwitchingWaveformsPwmBuckBoostOperationCircuit =
  (props: SubcircuitProps) =>
    createTPS63802SwitchingWaveformsFigureCircuit({
      ...props,
      duration: "696us",
      figureName: "Figure 10-19. Switching Waveforms, PWM Buck-Boost Operation",
      inductorCurrentCenter: 4.4,
      inputVoltage: "3.3V",
      loadCurrent: "2A",
      mode: "pwm",
      outputVoltageCenter: 3.24,
      startTime: "678us",
    });

export default TPS63802Figure1019SwitchingWaveformsPwmBuckBoostOperationCircuit;
