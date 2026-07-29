import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802DatasheetApplicationCircuit } from "./create-TPS63802-datasheet-application-circuit";
import { measureBurstFrequencyHz } from "./TPS63802-datasheet-measurements";

export const TPS63802Figure104InductorBurstFrequencyVsOutputCurrentCircuit = (
  props: SubcircuitProps,
) => (
  <TPS63802DatasheetApplicationCircuit
    {...props}
    loadCurrent="1mA"
    mode="pfm"
    outputVoltage={3.6}
    probeInductorCurrent
  >
    <analog.transientsimulation
      name="Figure 10-4. Typical Inductor Burst Frequency versus Output Current"
      startTime="700us"
      duration="1.7ms"
      timePerStep="5ns"
      spiceEngine="ngspice"
      spiceOptions={{
        method: "gear",
        reltol: 0.01,
        abstol: "1n",
        vntol: "1u",
      }}
    >
      <analog.sweepparameter
        name="Input Voltage"
        parameterType="voltage"
        net="net.VIN"
        values={["2.5V", "3.6V", "4.8V"]}
      />
      <analog.sweepparameter
        name="Output Current"
        parameterType="current"
        currentSourceRef=".I_LOAD"
        values={["1mA", "3mA", "10mA", "30mA", "100mA"]}
      />
      <analog.measurement
        name="PFM Burst Frequency"
        unit="Hz"
        measureFn={({ getCurrent }) =>
          measureBurstFrequencyHz(getCurrent(".I_L_PROBE"))
        }
      />
    </analog.transientsimulation>
  </TPS63802DatasheetApplicationCircuit>
);

export default TPS63802Figure104InductorBurstFrequencyVsOutputCurrentCircuit;
