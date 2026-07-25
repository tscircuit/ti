import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802AnalysisTestBench } from "./TPS63802-analysis-test-bench";

export const TPS63802SmallSignalAcSweepCircuit = (props: SubcircuitProps) => (
  <TPS63802AnalysisTestBench
    {...props}
    inputVoltage="3.6V"
    feedbackAcMagnitude="1mV"
    loadResistance="3.3"
    mode="pwm"
  >
    <analog.acsweepsimulation
      name="TPS63802 Small-Signal Control-Loop Response"
      sweepType="decade"
      samplesPerInterval={20}
      startFrequency="10Hz"
      stopFrequency="1MHz"
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

export default TPS63802SmallSignalAcSweepCircuit;
