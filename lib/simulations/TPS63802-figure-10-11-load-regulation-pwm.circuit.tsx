import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LoadRegulation } from "./tps63802/TPS63802DatasheetMeasurements";

export const TPS63802Figure1011LoadRegulationPwm = (props: SubcircuitProps) => (
  <TPS63802LoadRegulation {...props} figure="10-11" mode="pwm" />
);

export default TPS63802Figure1011LoadRegulationPwm;
