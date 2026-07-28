import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802SwitchingWaveforms } from "./tps63802/TPS63802DatasheetTransient.circuit";

export const TPS63802Figure1019SwitchingWaveformsPwmBuckBoost = (
  props: SubcircuitProps,
) => (
  <TPS63802SwitchingWaveforms
    {...props}
    figure="Figure 10-19"
    operation="Buck-Boost"
    inputVoltage="3.3V"
    mode="pfm"
    displayMode="PWM"
    loadResistance="82.5Ω"
  />
);

export default TPS63802Figure1019SwitchingWaveformsPwmBuckBoost;
