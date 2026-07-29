import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802EfficiencyVsInputVoltageFigureCircuit } from "./create-TPS63802-efficiency-vs-input-voltage-figure-circuit";

const inputVoltages = [
  "1.8V",
  "2.3V",
  "2.8V",
  "3.3V",
  "3.8V",
  "4.3V",
  "4.8V",
  "5.3V",
];

export const TPS63802Figure1010EfficiencyVsInputVoltagePwmOnlyCircuit = ({
  name,
  ...props
}: SubcircuitProps) => (
  <group name={name}>
    {createTPS63802EfficiencyVsInputVoltageFigureCircuit({
      ...props,
      name: `${name}_vo_1v8`,
      figureName: "Figure 10-10. Efficiency versus Input Voltage (PWM Only)",
      inputVoltages,
      mode: "pwm",
      outputVoltage: 1.8,
      seriesName: "VO = 1.8 V",
    })}
    {createTPS63802EfficiencyVsInputVoltageFigureCircuit({
      ...props,
      name: `${name}_vo_3v3`,
      figureName: "Figure 10-10. Efficiency versus Input Voltage (PWM Only)",
      inputVoltages,
      mode: "pwm",
      outputVoltage: 3.3,
      seriesName: "VO = 3.3 V",
    })}
    {createTPS63802EfficiencyVsInputVoltageFigureCircuit({
      ...props,
      name: `${name}_vo_5v2`,
      figureName: "Figure 10-10. Efficiency versus Input Voltage (PWM Only)",
      inputVoltages,
      mode: "pwm",
      outputVoltage: 5.2,
      seriesName: "VO = 5.2 V",
    })}
  </group>
);

export default TPS63802Figure1010EfficiencyVsInputVoltagePwmOnlyCircuit;
