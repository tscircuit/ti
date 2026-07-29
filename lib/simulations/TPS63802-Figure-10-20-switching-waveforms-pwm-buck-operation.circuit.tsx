import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802SwitchingWaveformsFigureCircuit } from "./create-TPS63802-switching-waveforms-figure-circuit";

export const TPS63802Figure1020SwitchingWaveformsPwmBuckOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802SwitchingWaveformsFigureCircuit({
    ...props,
    duration: "704us",
    figureName: "Figure 10-20. Switching Waveforms, PWM Buck Operation",
    inputVoltage: "4.2V",
    loadResistance: "1.65Ω",
    mode: "pwm",
    startTime: "686us",
  });

export default TPS63802Figure1020SwitchingWaveformsPwmBuckOperationCircuit;
