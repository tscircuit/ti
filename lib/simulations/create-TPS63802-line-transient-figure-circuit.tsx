import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802DatasheetApplicationCircuit } from "./create-TPS63802-datasheet-application-circuit";

type TPS63802LineTransientFigureCircuitProps = SubcircuitProps & {
  figureName: string;
  inputVoltageHigh: string;
  inputVoltageLow: string;
  loadResistance: string;
};

export const createTPS63802LineTransientFigureCircuit = ({
  figureName,
  inputVoltageHigh,
  inputVoltageLow,
  loadResistance,
  ...props
}: TPS63802LineTransientFigureCircuitProps) => {
  const inputVoltageCenter =
    (Number.parseFloat(inputVoltageLow) + Number.parseFloat(inputVoltageHigh)) /
    2;

  return (
    <TPS63802DatasheetApplicationCircuit
      {...props}
      inputVoltage={inputVoltageLow}
      inputVoltageGraphDisplay={{
        graphCenter: inputVoltageCenter,
        graphVoltagePerDiv: "500mV",
      }}
      inputVoltageWaveform={[
        { time: "0us", voltage: inputVoltageLow },
        { time: "750us", voltage: inputVoltageLow },
        { time: "751us", voltage: inputVoltageHigh },
        { time: "1250us", voltage: inputVoltageHigh },
        { time: "1251us", voltage: inputVoltageLow },
      ]}
      loadResistance={loadResistance}
      mode="pwm"
      probeInputVoltage
    >
      <analog.transientsimulation
        name={figureName}
        startTime="550us"
        duration="1550us"
        timePerStep="10ns"
        spiceEngine="ngspice"
        graphIndependentAxes
        spiceOptions={{
          method: "gear",
          reltol: 0.01,
          abstol: "1n",
          vntol: "1u",
        }}
      />
    </TPS63802DatasheetApplicationCircuit>
  );
};
