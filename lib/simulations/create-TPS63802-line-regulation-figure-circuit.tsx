import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802DatasheetApplicationCircuit } from "./create-TPS63802-datasheet-application-circuit";
import { mean } from "./TPS63802-datasheet-measurements";

type TPS63802LineRegulationFigureCircuitProps = SubcircuitProps & {
  figureName: string;
  mode: "pfm" | "pwm";
  outputVoltage: number;
};

export const createTPS63802LineRegulationFigureCircuit = ({
  figureName,
  mode,
  outputVoltage,
  ...props
}: TPS63802LineRegulationFigureCircuitProps) => (
  <TPS63802DatasheetApplicationCircuit
    {...props}
    loadCurrent="1A"
    loadEnableTime="650us"
    mode={mode}
    outputVoltage={outputVoltage}
    probeFeedbackVoltage
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
        values={[
          "2.5V",
          "2.7V",
          "2.9V",
          "3.1V",
          "3.3V",
          "3.5V",
          "3.7V",
          "3.9V",
          "4.1V",
          "4.3V",
        ]}
      />
      <analog.measurement
        name={`VO = ${outputVoltage} V`}
        unit="%"
        measureFn={({ getVoltage }) =>
          ((mean(getVoltage(".V_FB_PROBE").values.slice(-1_000)) - 0.5) / 0.5) *
          100
        }
      />
    </analog.transientsimulation>
  </TPS63802DatasheetApplicationCircuit>
);
