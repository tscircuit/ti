import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LoadTransient } from "./tps63802/TPS63802DatasheetTransient";

export const TPS63802Figure1025LoadTransientPwmBuckBoost = (
  props: SubcircuitProps,
) => (
  <TPS63802LoadTransient
    {...props}
    figure="Figure 10-25"
    operation="Buck-Boost"
    inputVoltage="3.3V"
    mode="pwm"
  />
);

export default TPS63802Figure1025LoadTransientPwmBuckBoost;
