import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802DatasheetApplicationCircuit } from "./create-TPS63802-datasheet-application-circuit";

type TPS63802StartupFigureCircuitProps = SubcircuitProps & {
  figureName: string;
  mode: "pfm" | "pwm";
};

export const createTPS63802StartupFigureCircuit = ({
  figureName,
  mode,
  ...props
}: TPS63802StartupFigureCircuitProps) => (
  // The figures specify VI = 4.2 V. Their "100 mΩ resistive load" annotation
  // would demand 33 A at 3.3 V and cannot describe the plotted startup, so use
  // the 10 mA load specified by Table 10-7.
  <TPS63802DatasheetApplicationCircuit
    {...props}
    enableVoltageWaveform={[
      { time: "0us", voltage: "0V" },
      { time: "300us", voltage: "0V" },
      { time: "301us", voltage: "4.2V" },
      { time: "1101us", voltage: "4.2V" },
    ]}
    enableVoltageGraphDisplay={{
      graphCenter: 2.1,
      graphVoltagePerDiv: "2V",
    }}
    inductorCurrentGraphDisplay={{
      graphCenter: 1.5,
      graphCurrentPerDiv: "3A",
    }}
    inputVoltage="4.2V"
    loadResistance="330Ω"
    mode={mode}
    outputVoltageGraphDisplay={{
      graphCenter: 1.65,
      graphVoltagePerDiv: "2V",
    }}
    powerGoodVoltageGraphDisplay={{
      graphCenter: 2.1,
      graphVoltagePerDiv: "2V",
    }}
    probeEnableVoltage
    probeInductorCurrent
    probePowerGoodVoltage
  >
    <analog.transientsimulation
      name={figureName}
      startTime="301us"
      duration="1101us"
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
