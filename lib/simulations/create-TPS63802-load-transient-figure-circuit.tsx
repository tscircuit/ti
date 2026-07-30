import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802DatasheetApplicationCircuit } from "./create-TPS63802-datasheet-application-circuit";

type TPS63802LoadTransientFigureCircuitProps = SubcircuitProps & {
  figureName: string;
  inputVoltage: string;
  mode: "pfm" | "pwm";
};

export const createTPS63802LoadTransientFigureCircuit = ({
  figureName,
  inputVoltage,
  mode,
  ...props
}: TPS63802LoadTransientFigureCircuitProps) => (
  <TPS63802DatasheetApplicationCircuit
    {...props}
    inputVoltage={inputVoltage}
    loadResistance="33Ω"
    loadCurrentWaveform={[
      { time: "0us", current: "0A" },
      { time: "750us", current: "0A" },
      { time: "751us", current: "900mA" },
      { time: "1250us", current: "900mA" },
      { time: "1251us", current: "0A" },
    ]}
    mode={mode}
    probeLoadCurrent
    loadCurrentGraphDisplay={{
      graphCenter: 1.8,
      graphCurrentPerDiv: "400mA",
      graphVerticalOffset: 0,
    }}
    outputVoltageGraphDisplay={{
      graphCenter: 3.1,
      graphVoltagePerDiv: "100mV",
      graphVerticalOffset: 0,
    }}
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
