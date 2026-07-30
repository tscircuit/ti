import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802DatasheetApplicationCircuit } from "./create-TPS63802-datasheet-application-circuit";
import { measureEfficiencyPercent } from "./TPS63802-datasheet-measurements";

type TPS63802EfficiencyVsOutputCurrentFigureCircuitProps = SubcircuitProps & {
  figureName: string;
  inputVoltages: string[];
  mode: "pfm" | "pwm";
};

export const createTPS63802EfficiencyVsOutputCurrentFigureCircuit = ({
  figureName,
  inputVoltages,
  mode,
  ...props
}: TPS63802EfficiencyVsOutputCurrentFigureCircuitProps) => (
  // TI's official model omits quiescent-current behavior, so low-load
  // efficiency cannot reproduce the bench curves quantitatively.
  <TPS63802DatasheetApplicationCircuit
    {...props}
    loadCurrent="1mA"
    loadEnableTime="650us"
    mode={mode}
    probeInputCurrent
    probeInputVoltage
    probeLoadCurrent
  >
    <analog.transientsimulation
      name={figureName}
      startTime="673us"
      duration="696us"
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
        net="net.VIN_SOURCE"
        values={inputVoltages}
      />
      <analog.sweepparameter
        name="Output Current"
        parameterType="current"
        currentSourceRef=".I_LOAD"
        values={["1mA", "10mA", "100mA", "500mA", "1A", "2A"]}
      />
      <analog.measurement
        name="Efficiency"
        unit="%"
        measureFn={measureEfficiencyPercent}
      />
    </analog.transientsimulation>
  </TPS63802DatasheetApplicationCircuit>
);
