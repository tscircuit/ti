import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802SwitchingWaveforms } from "./tps63802/TPS63802DatasheetTransient.circuit";

export const TPS63802Figure1017SwitchingWaveformsPfmBuck = (
  props: SubcircuitProps,
) => (
  <TPS63802SwitchingWaveforms
    {...props}
    figure="Figure 10-17"
    operation="Buck"
    inputVoltage="4.2V"
    mode="pfm"
    loadResistance="82.5Ω"
  />
);

export default TPS63802Figure1017SwitchingWaveformsPfmBuck;
