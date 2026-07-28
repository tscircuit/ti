import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LineTransient } from "./tps63802/TPS63802DatasheetTransient.circuit";

export const TPS63802Figure1027LineTransientPwm500ma = (
  props: SubcircuitProps,
) => (
  <TPS63802LineTransient
    {...props}
    figure="Figure 10-27"
    initialInputVoltage="2.2V"
    steppedInputVoltage="4.2V"
    loadCurrent="500mA"
  />
);

export default TPS63802Figure1027LineTransientPwm500ma;
