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
  // Table 10-7 specifies VI = 2.2 V and IO = 10 mA. The annotations under
  // Figures 10-30/10-31 instead say 4.2 V and 100 mΩ, which would demand 33 A
  // at 3.3 V and cannot describe the plotted startup. Follow the table.
  <TPS63802DatasheetApplicationCircuit
    {...props}
    enableVoltageWaveform={[
      { time: "0us", voltage: "0V" },
      { time: "300us", voltage: "0V" },
      { time: "301us", voltage: "2.2V" },
      { time: "900us", voltage: "2.2V" },
    ]}
    inputVoltage="2.2V"
    loadResistance="330Ω"
    mode={mode}
    probeEnableVoltage
    probeInductorCurrent
    probePowerGoodVoltage
  >
    <analog.transientsimulation
      name={figureName}
      duration="900us"
      timePerStep="5ns"
      spiceEngine="ngspice"
      spiceOptions={{
        method: "gear",
        reltol: 0.01,
        abstol: "1n",
        vntol: "1u",
      }}
    />
  </TPS63802DatasheetApplicationCircuit>
);
