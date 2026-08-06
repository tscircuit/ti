import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802SwitchingWaveforms } from "./tps63802/TPS63802DatasheetTransient";

export const TPS63802Figure1018SwitchingWaveformsPwmBoost = (
  props: SubcircuitProps,
) => (
  <TPS63802SwitchingWaveforms
    {...props}
    figure="Figure 10-18"
    operation="Boost"
    inputVoltage="2.3V"
    mode="pfm"
    displayMode="PWM"
    loadResistance="82.5Ω"
  />
);

export default TPS63802Figure1018SwitchingWaveformsPwmBoost;
