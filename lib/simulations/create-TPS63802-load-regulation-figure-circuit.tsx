import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802DatasheetApplicationCircuit } from "./create-TPS63802-datasheet-application-circuit";

const mean = (values: readonly number[]) =>
  values.reduce((sum, value) => sum + value, 0) / values.length;

type TPS63802LoadRegulationFigureCircuitProps = SubcircuitProps & {
  figureName: string;
  mode: "pfm" | "pwm";
};

export const createTPS63802LoadRegulationFigureCircuit = ({
  figureName,
  mode,
  ...props
}: TPS63802LoadRegulationFigureCircuitProps) => (
  <TPS63802DatasheetApplicationCircuit
    {...props}
    loadCurrent="50mA"
    loadEnableTime="650us"
    mode={mode}
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
        net="net.VIN"
        values={["2.5V", "3.6V", "4.2V"]}
      />
      <analog.sweepparameter
        name="Output Current"
        parameterType="current"
        currentSourceRef=".I_LOAD"
        values={["50mA", "500mA", "1A", "2A"]}
      />
      <analog.measurement
        name="Output Voltage Accuracy"
        unit="%"
        measureFn={({ getVoltage }) => {
          const settledOutput = getVoltage("net.VOUT").values;
          return ((mean(settledOutput.slice(-1_000)) - 3.3) / 3.3) * 100;
        }}
      />
    </analog.transientsimulation>
  </TPS63802DatasheetApplicationCircuit>
);
