import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LoadTransient } from "./tps63802/TPS63802DatasheetTransient";

export const TPS63802Figure1024LoadTransientPwmBoost = (
  props: SubcircuitProps,
) => (
  <TPS63802LoadTransient
    {...props}
    figure="Figure 10-24"
    operation="Boost"
    inputVoltage="2.5V"
    mode="pwm"
  />
);

export default TPS63802Figure1024LoadTransientPwmBoost;
