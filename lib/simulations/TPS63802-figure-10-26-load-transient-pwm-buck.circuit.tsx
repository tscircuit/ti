import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LoadTransient } from "./tps63802/TPS63802DatasheetTransient.circuit";

export const TPS63802Figure1026LoadTransientPwmBuck = (
  props: SubcircuitProps,
) => (
  <TPS63802LoadTransient
    {...props}
    figure="Figure 10-26"
    operation="Buck"
    inputVoltage="5V"
    mode="pwm"
  />
);

export default TPS63802Figure1026LoadTransientPwmBuck;
