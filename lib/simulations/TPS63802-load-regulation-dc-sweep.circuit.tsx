import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802AnalysisTestBench } from "./TPS63802-analysis-test-bench";

export const TPS63802LoadRegulationDcSweepCircuit = (
  props: SubcircuitProps,
) => (
  <TPS63802AnalysisTestBench
    {...props}
    inputVoltage="3.6V"
    loadCurrent="0.1A"
    mode="pwm"
  >
    <analog.dcsweepsimulation
      name="TPS63802 Load Regulation (Datasheet Figure 10-11)"
      sweepSource=".I_LOAD"
      sweepStart="0.1A"
      sweepStop="2A"
      sweepStep="0.1A"
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

export default TPS63802LoadRegulationDcSweepCircuit;
