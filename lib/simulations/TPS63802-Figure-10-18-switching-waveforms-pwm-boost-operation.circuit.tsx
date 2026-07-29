import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802SwitchingWaveformsFigureCircuit } from "./create-TPS63802-switching-waveforms-figure-circuit";

export const TPS63802Figure1018SwitchingWaveformsPwmBoostOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802SwitchingWaveformsFigureCircuit({
    ...props,
    duration: "704us",
    figureName: "Figure 10-18. Switching Waveforms, PWM Boost Operation",
    inputVoltage: "2.3V",
    loadResistance: "1.65Ω",
    mode: "pwm",
    startTime: "686us",
  });

export default TPS63802Figure1018SwitchingWaveformsPwmBoostOperationCircuit;
