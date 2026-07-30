import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802SwitchingWaveformsFigureCircuit } from "./create-TPS63802-switching-waveforms-figure-circuit";

export const TPS63802Figure1018SwitchingWaveformsPwmBoostOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802SwitchingWaveformsFigureCircuit({
    ...props,
    duration: "704us",
    figureName: "Figure 10-18. Switching Waveforms, PWM Boost Operation",
    inductorCurrentCenter: 4.4,
    inputVoltage: "2.3V",
    l1Center: -1.02,
    loadCurrent: "2A",
    mode: "pwm",
    outputVoltageCenter: 3.23,
    startTime: "686us",
  });

export default TPS63802Figure1018SwitchingWaveformsPwmBoostOperationCircuit;
