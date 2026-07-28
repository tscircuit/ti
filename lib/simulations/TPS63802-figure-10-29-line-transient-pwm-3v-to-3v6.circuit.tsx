import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LineTransient } from "./tps63802/TPS63802DatasheetTransient.circuit";

export const TPS63802Figure1029LineTransientPwm3vTo3v6 = (
  props: SubcircuitProps,
) => (
  <TPS63802LineTransient
    {...props}
    figure="Figure 10-29"
    initialInputVoltage="3V"
    steppedInputVoltage="3.6V"
    loadCurrent="500mA"
  />
);

export default TPS63802Figure1029LineTransientPwm3vTo3v6;
