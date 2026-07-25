import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802AnalysisTestBench } from "./TPS63802-analysis-test-bench";

export const TPS63802LineRegulationDcSweepCircuit = (
  props: SubcircuitProps,
) => (
  <TPS63802AnalysisTestBench
    {...props}
    inputVoltage="3.6V"
    loadResistance="3.3"
    mode="pwm"
  >
    <analog.dcsweepsimulation
      name="TPS63802 Line Regulation, 1 A Load (Datasheet Figure 10-13)"
      sweepSource=".V_IN"
      sweepStart="2.5V"
      sweepStop="4.3V"
      sweepStep="0.1V"
      spiceEngine="ngspice"
      graphIndependentAxes
      spiceOptions={{
        reltol: 0.01,
        abstol: "1n",
        vntol: "1u",
      }}
    />
  </TPS63802AnalysisTestBench>
);

export default TPS63802LineRegulationDcSweepCircuit;
