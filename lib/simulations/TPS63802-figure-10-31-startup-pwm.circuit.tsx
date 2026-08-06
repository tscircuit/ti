import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802Startup } from "./tps63802/TPS63802DatasheetTransient";

export const TPS63802Figure1031StartupPwm = (props: SubcircuitProps) => (
  <TPS63802Startup {...props} figure="Figure 10-31" mode="pwm" />
);

export default TPS63802Figure1031StartupPwm;
