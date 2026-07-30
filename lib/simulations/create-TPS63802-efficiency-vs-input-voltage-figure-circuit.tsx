import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802DatasheetApplicationCircuit } from "./create-TPS63802-datasheet-application-circuit";
import { measureEfficiencyPercent } from "./TPS63802-datasheet-measurements";

type TPS63802EfficiencyVsInputVoltageFigureCircuitProps = SubcircuitProps & {
  figureName: string;
  inputVoltages: string[];
  loadCurrentValues?: string[];
  mode: "pfm" | "pwm";
  outputVoltage?: number;
  seriesName?: string;
};

export const createTPS63802EfficiencyVsInputVoltageFigureCircuit = ({
  figureName,
  inputVoltages,
  loadCurrentValues,
  mode,
  outputVoltage = 3.3,
  seriesName,
  ...props
}: TPS63802EfficiencyVsInputVoltageFigureCircuitProps) => (
  // TI's official model omits quiescent-current behavior, so low-load
  // efficiency cannot reproduce the bench curves quantitatively.
  <TPS63802DatasheetApplicationCircuit
    {...props}
    loadCurrent={loadCurrentValues?.[0] ?? "1A"}
    loadEnableTime="650us"
    mode={mode}
    outputVoltage={outputVoltage}
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
      {loadCurrentValues && (
        <analog.sweepparameter
          name="Output Current"
          parameterType="current"
          currentSourceRef=".I_LOAD"
          values={loadCurrentValues}
        />
      )}
      <analog.sweepparameter
        name="Input Voltage"
        parameterType="voltage"
        net="net.VIN_SOURCE"
        values={inputVoltages}
      />
      <analog.measurement
        name={seriesName ?? "Efficiency"}
        unit="%"
        measureFn={measureEfficiencyPercent}
      />
    </analog.transientsimulation>
  </TPS63802DatasheetApplicationCircuit>
);
