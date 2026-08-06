import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LoadTransient } from "./tps63802/TPS63802DatasheetTransient";

export const TPS63802Figure1023LoadTransientPfmBuck = (
  props: SubcircuitProps,
) => (
  <TPS63802LoadTransient
    {...props}
    figure="Figure 10-23"
    operation="Buck"
    inputVoltage="5V"
    mode="pfm"
  />
);

export default TPS63802Figure1023LoadTransientPfmBuck;
