import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LineRegulation } from "./tps63802/TPS63802DatasheetMeasurements.circuit";

export const TPS63802Figure1013LineRegulationPwm = (props: SubcircuitProps) => (
  <TPS63802LineRegulation {...props} figure="Figure 10-13" mode="pwm" />
);

export default TPS63802Figure1013LineRegulationPwm;
