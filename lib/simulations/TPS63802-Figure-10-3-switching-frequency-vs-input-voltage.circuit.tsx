import type { SubcircuitProps } from "@tscircuit/props";
import { analog } from "tscircuit";
import { TPS63802DatasheetApplicationCircuit } from "./create-TPS63802-datasheet-application-circuit";
import { measureSwitchingFrequencyHz } from "./TPS63802-datasheet-measurements";

const inputVoltages = [
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
];

const ConfiguredSwitchingFrequencyCircuit = ({
  outputVoltage,
  ...props
}: SubcircuitProps & { outputVoltage: number }) => (
  <TPS63802DatasheetApplicationCircuit
    {...props}
    loadCurrent="0A"
    mode="pwm"
    outputVoltage={outputVoltage}
    probeInductorCurrent
  >
    <analog.transientsimulation
      name="Figure 10-3. Typical Inductor Switching Frequency versus Input Voltage"
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
        values={inputVoltages}
      />
      <analog.measurement
        name={`VO = ${outputVoltage} V`}
        unit="MHz"
        measureFn={({ getCurrent }) =>
          measureSwitchingFrequencyHz(getCurrent(".I_L_PROBE")) / 1_000_000
        }
      />
    </analog.transientsimulation>
  </TPS63802DatasheetApplicationCircuit>
);

export const TPS63802Figure103SwitchingFrequencyVsInputVoltageCircuit = ({
  name,
  ...props
}: SubcircuitProps) => (
  <group name={name}>
    <ConfiguredSwitchingFrequencyCircuit
      {...props}
      name={`${name}_vo_1v8`}
      outputVoltage={1.8}
    />
    <ConfiguredSwitchingFrequencyCircuit
      {...props}
      name={`${name}_vo_3v3`}
      outputVoltage={3.3}
    />
    <ConfiguredSwitchingFrequencyCircuit
      {...props}
      name={`${name}_vo_5v2`}
      outputVoltage={5.2}
    />
  </group>
);

export default TPS63802Figure103SwitchingFrequencyVsInputVoltageCircuit;
