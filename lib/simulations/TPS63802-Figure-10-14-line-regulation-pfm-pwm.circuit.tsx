import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LineRegulationFigureCircuit } from "./create-TPS63802-line-regulation-figure-circuit";

export const TPS63802Figure1014LineRegulationPfmPwmCircuit = ({
  name,
  ...props
}: SubcircuitProps) => (
  <group name={name}>
    {createTPS63802LineRegulationFigureCircuit({
      ...props,
      name: `${name}_vo_1v8`,
      figureName: "Figure 10-14. Line Regulation (PFM/PWM)",
      mode: "pfm",
      outputVoltage: 1.8,
    })}
    {createTPS63802LineRegulationFigureCircuit({
      ...props,
      name: `${name}_vo_3v3`,
      figureName: "Figure 10-14. Line Regulation (PFM/PWM)",
      mode: "pfm",
      outputVoltage: 3.3,
    })}
    {createTPS63802LineRegulationFigureCircuit({
      ...props,
      name: `${name}_vo_5v2`,
      figureName: "Figure 10-14. Line Regulation (PFM/PWM)",
      mode: "pfm",
      outputVoltage: 5.2,
    })}
  </group>
);

export default TPS63802Figure1014LineRegulationPfmPwmCircuit;
