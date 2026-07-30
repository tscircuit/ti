import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802DatasheetApplicationCircuit } from "./create-TPS63802-datasheet-application-circuit";
import { mean } from "./TPS63802-datasheet-measurements";

const inputVoltages = [
  "1.8V",
  "2.3V",
  "2.8V",
  "3.3V",
  "3.8V",
  "4.3V",
  "4.8V",
  "5.3V",
];

const ConfiguredOutputCurrentCapabilityCircuit = ({
  measureAtMinimumInputVoltage = false,
  outputVoltage,
  ...props
}: SubcircuitProps & {
  measureAtMinimumInputVoltage?: boolean;
  outputVoltage: number;
}) => (
  <TPS63802DatasheetApplicationCircuit
    {...props}
    inputVoltage={measureAtMinimumInputVoltage ? "1.3V" : undefined}
    inputVoltageWaveform={
      measureAtMinimumInputVoltage
        ? [
            { time: "0us", voltage: "2V" },
            { time: "600us", voltage: "2V" },
            { time: "601us", voltage: "1.3V" },
            { time: "696us", voltage: "1.3V" },
          ]
        : undefined
    }
    loadCurrent="250mA"
    loadEnableTime="650us"
    mode="pwm"
    outputVoltage={outputVoltage}
    probeFeedbackVoltage
  >
    <analog.transientsimulation
      name="Figure 10-2. Typical Output Current Capability versus Input Voltage"
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
      {!measureAtMinimumInputVoltage && (
        <analog.sweepparameter
          name="Input Voltage"
          parameterType="voltage"
          net="net.VIN"
          values={inputVoltages}
        />
      )}
      <analog.sweepparameter
        name="Output Current"
        parameterType="current"
        currentSourceRef=".I_LOAD"
        start="250mA"
        stop="4A"
        step="250mA"
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

export const TPS63802Figure102OutputCurrentCapabilityVsInputVoltageCircuit = ({
  name,
  ...props
}: SubcircuitProps) => (
  <group name={name}>
    <ConfiguredOutputCurrentCapabilityCircuit
      {...props}
      name={`${name}_vo_3v3`}
      outputVoltage={3.3}
    />
    <ConfiguredOutputCurrentCapabilityCircuit
      {...props}
      name={`${name}_vo_3v3_vi_1v3`}
      outputVoltage={3.3}
      measureAtMinimumInputVoltage
    />
    <ConfiguredOutputCurrentCapabilityCircuit
      {...props}
      name={`${name}_vo_3v6`}
      outputVoltage={3.6}
    />
    <ConfiguredOutputCurrentCapabilityCircuit
      {...props}
      name={`${name}_vo_3v6_vi_1v3`}
      outputVoltage={3.6}
      measureAtMinimumInputVoltage
    />
    <ConfiguredOutputCurrentCapabilityCircuit
      {...props}
      name={`${name}_vo_5v0`}
      outputVoltage={5}
    />
    <ConfiguredOutputCurrentCapabilityCircuit
      {...props}
      name={`${name}_vo_5v0_vi_1v3`}
      outputVoltage={5}
      measureAtMinimumInputVoltage
    />
  </group>
);

export default TPS63802Figure102OutputCurrentCapabilityVsInputVoltageCircuit;
