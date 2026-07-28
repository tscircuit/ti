import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802Startup } from "./tps63802/TPS63802DatasheetTransient.circuit";

export const TPS63802Figure1030StartupPfm = (props: SubcircuitProps) => (
  <TPS63802Startup {...props} figure="Figure 10-30" mode="pfm" />
);

export default TPS63802Figure1030StartupPfm;
