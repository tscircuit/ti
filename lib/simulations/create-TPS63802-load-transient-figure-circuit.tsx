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
      { time: "1150us", current: "900mA" },
      { time: "1151us", current: "0A" },
    ]}
    mode={mode}
    probeLoadCurrent
  >
    <analog.transientsimulation
      name={figureName}
      startTime="650us"
      duration="1450us"
      timePerStep="5ns"
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
