import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import {
  TPS63802DatasheetApplication,
  type TPS63802OperatingMode,
} from "./TPS63802DatasheetApplication";

const spiceOptions = {
  method: "gear" as const,
  reltol: 0.01,
  abstol: "1n",
  vntol: "1u",
};

interface SwitchingWaveformsProps extends SubcircuitProps {
  figure: string;
  operation: "Boost" | "Buck-Boost" | "Buck";
  inputVoltage: string;
  mode: TPS63802OperatingMode;
  displayMode?: "PFM" | "PWM";
  loadResistance: string;
}

export const TPS63802SwitchingWaveforms = ({
  figure,
  operation,
  inputVoltage,
  mode,
  displayMode,
  loadResistance,
  ...subcircuitProps
}: SwitchingWaveformsProps) => (
  <TPS63802DatasheetApplication
    {...subcircuitProps}
    inputVoltage={inputVoltage}
    inputVoltageWaveform={[
      { time: "0us", voltage: "0V" },
      { time: "100us", voltage: inputVoltage },
    ]}
    mode={mode}
    loadResistance={loadResistance}
    probeSet="switching"
  >
    {displayMode === "PWM" && (
      <>
        <resistor
          name="R_DYNAMIC_LOAD_1"
          resistance="3.4375Ω"
          schX={9.5}
          schY={-1.5}
          schOrientation="vertical"
        />
        <resistor
          name="R_DYNAMIC_LOAD_2"
          resistance="3.3Ω"
          schX={12.5}
          schY={-1.5}
          schOrientation="vertical"
        />
        <switch
          name="SW_DYNAMIC_LOAD_1"
          simStartOpen
          simCloseAt="700us"
          schX={9.5}
          schY={0.5}
        />
        <switch
          name="SW_DYNAMIC_LOAD_2"
          simStartOpen
          simCloseAt="780us"
          schX={12.5}
          schY={0.5}
        />
        <trace from="net.VOUT" to=".SW_DYNAMIC_LOAD_1 > .pin1" />
        <trace
          from=".SW_DYNAMIC_LOAD_1 > .pin2"
          to=".R_DYNAMIC_LOAD_1 > .pin1"
        />
        <trace from=".R_DYNAMIC_LOAD_1 > .pin2" to="net.GND" />
        <trace from="net.VOUT" to=".SW_DYNAMIC_LOAD_2 > .pin1" />
        <trace
          from=".SW_DYNAMIC_LOAD_2 > .pin2"
          to=".R_DYNAMIC_LOAD_2 > .pin1"
        />
        <trace from=".R_DYNAMIC_LOAD_2 > .pin2" to="net.GND" />
      </>
    )}
    <analog.transientsimulation
      name={`${figure}. Switching Waveforms, ${displayMode ?? (mode === "pfm" ? "PFM" : "PWM")} ${operation} Operation`}
      duration={displayMode === "PWM" ? "900us" : "704us"}
      startTime={displayMode === "PWM" ? "882us" : "686us"}
      timePerStep="5ns"
      spiceEngine="ngspice"
      graphIndependentAxes
      spiceOptions={spiceOptions}
    />
  </TPS63802DatasheetApplication>
);

interface LoadTransientProps extends SubcircuitProps {
  figure: string;
  operation: "Boost" | "Buck-Boost" | "Buck";
  inputVoltage: string;
  mode: TPS63802OperatingMode;
}

export const TPS63802LoadTransient = ({
  figure,
  operation,
  inputVoltage,
  mode,
  ...subcircuitProps
}: LoadTransientProps) => (
  <TPS63802DatasheetApplication
    {...subcircuitProps}
    inputVoltage={inputVoltage}
    mode={mode}
    loadResistance="33Ω"
    probeSet="load-transient"
  >
    <currentsource
      name="I_DYNAMIC_LOAD"
      current="0A"
      schX={9.5}
      schY={-1.5}
      currentWaveform={[
        { time: "0us", current: "0A" },
        { time: "650us", current: "0A" },
        { time: "651us", current: "900mA" },
        { time: "1150us", current: "900mA" },
        { time: "1151us", current: "0A" },
        { time: "1450us", current: "0A" },
      ]}
    />
    <trace from="net.LOAD_INPUT" to=".I_DYNAMIC_LOAD > .pos" />
    <trace from=".I_DYNAMIC_LOAD > .neg" to="net.GND" />
    <analog.transientsimulation
      name={`${figure}. Load Transient, ${mode === "pfm" ? "PFM/PWM" : "PWM"} ${operation} Operation`}
      duration="1450us"
      startTime="450us"
      timePerStep="10ns"
      spiceEngine="ngspice"
      graphIndependentAxes
      spiceOptions={spiceOptions}
    />
  </TPS63802DatasheetApplication>
);

interface LineTransientProps extends SubcircuitProps {
  figure: string;
  initialInputVoltage: string;
  steppedInputVoltage: string;
  loadCurrent: string;
  loadConnectAt?: string;
}

export const TPS63802LineTransient = ({
  figure,
  initialInputVoltage,
  steppedInputVoltage,
  loadCurrent,
  loadConnectAt = "400us",
  ...subcircuitProps
}: LineTransientProps) => (
  <TPS63802DatasheetApplication
    {...subcircuitProps}
    inputVoltage={initialInputVoltage}
    inputVoltageWaveform={[
      { time: "0us", voltage: initialInputVoltage },
      { time: "800us", voltage: initialInputVoltage },
      { time: "801us", voltage: steppedInputVoltage },
      { time: "3800us", voltage: steppedInputVoltage },
      { time: "3801us", voltage: initialInputVoltage },
      { time: "4900us", voltage: initialInputVoltage },
    ]}
    mode="pwm"
    loadCurrent={loadCurrent}
    loadConnectAt={loadConnectAt}
    probeSet="line-transient"
  >
    <analog.transientsimulation
      name={`${figure}. Line Transient, PWM Operation`}
      duration="4900us"
      startTime="300us"
      timePerStep="20ns"
      spiceEngine="ngspice"
      graphIndependentAxes
      spiceOptions={spiceOptions}
    />
  </TPS63802DatasheetApplication>
);

interface StartupProps extends SubcircuitProps {
  figure: string;
  mode: TPS63802OperatingMode;
}

export const TPS63802Startup = ({
  figure,
  mode,
  ...subcircuitProps
}: StartupProps) => (
  <TPS63802DatasheetApplication
    {...subcircuitProps}
    inputVoltage="4.2V"
    enableWaveform={[
      { time: "0us", voltage: "0V" },
      { time: "0.01us", voltage: "4.2V" },
      { time: "900us", voltage: "4.2V" },
    ]}
    mode={mode}
    loadResistance="330Ω"
    probeSet="startup"
  >
    <analog.transientsimulation
      name={`${figure}. Start-up Behavior from Rising Enable, ${mode === "pfm" ? "PFM" : "PWM"} Operation`}
      duration="900us"
      timePerStep="5ns"
      spiceEngine="ngspice"
      graphIndependentAxes
      spiceOptions={spiceOptions}
    />
  </TPS63802DatasheetApplication>
);
