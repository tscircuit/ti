import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LineTransient } from "./tps63802/TPS63802DatasheetTransient.circuit";

export const TPS63802Figure1028LineTransientPwm1a = (
  props: SubcircuitProps,
) => (
  <TPS63802LineTransient
    {...props}
    figure="Figure 10-28"
    initialInputVoltage="2.2V"
    steppedInputVoltage="4.2V"
    loadCurrent="1A"
  />
);

export default TPS63802Figure1028LineTransientPwm1a;
