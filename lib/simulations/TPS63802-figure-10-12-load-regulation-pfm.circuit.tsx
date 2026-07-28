import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802LoadRegulation } from "./tps63802/TPS63802DatasheetMeasurements.circuit";

export const TPS63802Figure1012LoadRegulationPfm = (props: SubcircuitProps) => (
  <TPS63802LoadRegulation {...props} figure="Figure 10-12" mode="pfm" />
);

export default TPS63802Figure1012LoadRegulationPfm;
