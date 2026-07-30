import type { SubcircuitProps } from "@tscircuit/props";
import { createTPS63802LoadTransientFigureCircuit } from "./create-TPS63802-load-transient-figure-circuit";

export const TPS63802Figure1026LoadTransientPwmBuckOperationCircuit = (
  props: SubcircuitProps,
) =>
  createTPS63802LoadTransientFigureCircuit({
    ...props,
    figureName: "Figure 10-26. Load Transient, PWM Buck Operation",
    // Figure 10-26 is annotated VI = 5 V; Table 10-7 says 4.2 V.
    inputVoltage: "5V",
    mode: "pwm",
  });

export default TPS63802Figure1026LoadTransientPwmBuckOperationCircuit;
