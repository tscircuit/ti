import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802AnalysisTestBench } from "./TPS63802-analysis-test-bench";

export const TPS63802RatedLoadDcOperatingPointCircuit = (
  props: SubcircuitProps,
) => (
  <TPS63802AnalysisTestBench
    {...props}
    inputVoltage="3.6V"
    loadResistance="3.3"
    mode="pwm"
  >
    <analog.dcoperatingpointsimulation
      name="TPS63802 3.6 V Input, 1 A Load Operating Point"
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

export default TPS63802RatedLoadDcOperatingPointCircuit;
