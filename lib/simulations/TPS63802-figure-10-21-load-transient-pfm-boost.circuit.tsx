import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LoadTransient } from "./tps63802/TPS63802DatasheetTransient.circuit";

export const TPS63802Figure1021LoadTransientPfmBoost = (
  props: SubcircuitProps,
) => (
  <TPS63802LoadTransient
    {...props}
    figure="Figure 10-21"
    operation="Boost"
    inputVoltage="2.5V"
    mode="pfm"
  />
);

export default TPS63802Figure1021LoadTransientPfmBoost;
