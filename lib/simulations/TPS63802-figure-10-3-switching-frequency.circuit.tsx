import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802SwitchingFrequency } from "./tps63802/TPS63802DatasheetMeasurements";

export const TPS63802Figure103SwitchingFrequency = (props: SubcircuitProps) => (
  <TPS63802SwitchingFrequency {...props} />
);

export default TPS63802Figure103SwitchingFrequency;
