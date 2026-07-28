import type {
  AnalogTransientMeasurementContext,
  SubcircuitProps,
  TransientMeasurementSeries,
} from "@tscircuit/props";
import type { ReactNode } from "react";
import { analog } from "tscircuit";
import {
  TPS63802DatasheetApplication,
  getTPS63802UpperFeedbackResistance,
  type TPS63802OperatingMode,
} from "./TPS63802DatasheetApplication.circuit";

const spiceOptions = {
  method: "gear" as const,
  reltol: 0.01,
  abstol: "1n",
  vntol: "1u",
};

const mean = (values: readonly number[]) =>
  values.reduce((sum, value) => sum + value, 0) / values.length;

const getSettledValues = (
  series: TransientMeasurementSeries,
  settledWindowMs = 0.018,
) => {
  const finalTimestamp =
    series.timestampsMs[series.timestampsMs.length - 1] ?? 0;
  const settledStart = finalTimestamp - settledWindowMs;
  const firstSettledIndex = series.timestampsMs.findIndex(
    (timestamp) => timestamp >= settledStart,
  );
  return series.values.slice(Math.max(0, firstSettledIndex));
};

const measureSettledOutputVoltage = ({
  getVoltage,
}: AnalogTransientMeasurementContext) =>
  mean(getSettledValues(getVoltage(".VOUT")));

const createOutputRegulationMeasurement =
  (nominalOutputVoltages: readonly number[]) =>
  ({ getVoltage }: AnalogTransientMeasurementContext) => {
    const settledOutputVoltage = mean(getSettledValues(getVoltage(".VOUT")));
    const nominalOutputVoltage = nominalOutputVoltages.reduce(
      (closestNominalVoltage, candidateNominalVoltage) =>
        Math.abs(candidateNominalVoltage - settledOutputVoltage) <
        Math.abs(closestNominalVoltage - settledOutputVoltage)
          ? candidateNominalVoltage
          : closestNominalVoltage,
    );
    return (
      ((settledOutputVoltage - nominalOutputVoltage) / nominalOutputVoltage) *
      100
    );
  };

const meanProduct = (left: readonly number[], right: readonly number[]) => {
  const sampleCount = Math.min(left.length, right.length);
  const leftSamples = left.slice(-sampleCount);
  const rightSamples = right.slice(-sampleCount);
  return mean(
    leftSamples.map(
      (leftSample, sampleIndex) =>
        leftSample * Math.abs(rightSamples[sampleIndex] ?? 0),
    ),
  );
};

const measureEfficiency = ({
  getVoltage,
  getCurrent,
}: AnalogTransientMeasurementContext) => {
  const inputVoltage = getSettledValues(getVoltage(".VIN"));
  const inputCurrent = getSettledValues(getCurrent(".I_IN"));
  const outputVoltage = getSettledValues(getVoltage(".VOUT"));
  const outputCurrent = getSettledValues(getCurrent(".I_OUT"));
  const inputPower = meanProduct(inputVoltage, inputCurrent);
  const outputPower = meanProduct(outputVoltage, outputCurrent);
  return (outputPower / inputPower) * 100;
};

const getRisingEdgeTimestamps = (
  series: TransientMeasurementSeries,
  measurementWindowMs: number,
) => {
  const values = getSettledValues(series, measurementWindowMs);
  const timestampsMs = series.timestampsMs.slice(-values.length);
  const minimumVoltage = Math.min(...values);
  const maximumVoltage = Math.max(...values);
  const threshold = (minimumVoltage + maximumVoltage) / 2;
  return timestampsMs.filter(
    (_, sampleIndex) =>
      sampleIndex > 0 &&
      (values[sampleIndex - 1] ?? threshold) <= threshold &&
      (values[sampleIndex] ?? threshold) > threshold,
  );
};

const getFrequencyFromEdges = (risingEdgeTimestamps: readonly number[]) => {
  const firstEdge = risingEdgeTimestamps[0];
  const lastEdge = risingEdgeTimestamps[risingEdgeTimestamps.length - 1];
  if (
    firstEdge === undefined ||
    lastEdge === undefined ||
    risingEdgeTimestamps.length < 2 ||
    lastEdge === firstEdge
  ) {
    return 0;
  }
  return ((risingEdgeTimestamps.length - 1) / (lastEdge - firstEdge)) * 1_000;
};

const measureSwitchingFrequency = ({
  getVoltage,
}: AnalogTransientMeasurementContext) =>
  getFrequencyFromEdges(getRisingEdgeTimestamps(getVoltage(".L1"), 0.018));

const measureBurstFrequency = ({
  getVoltage,
}: AnalogTransientMeasurementContext) => {
  const switchingEdges = getRisingEdgeTimestamps(getVoltage(".L1"), 1);
  const burstStarts = switchingEdges.filter(
    (edgeTimestamp, edgeIndex) =>
      edgeIndex === 0 ||
      edgeTimestamp - (switchingEdges[edgeIndex - 1] ?? edgeTimestamp) >= 0.002,
  );
  return getFrequencyFromEdges(
    burstStarts.length >= 2 ? burstStarts : switchingEdges,
  );
};

const outputVoltageSweepValues = (outputVoltages: readonly number[]) =>
  outputVoltages.map(getTPS63802UpperFeedbackResistance);

interface MeasurementSimulationProps extends SubcircuitProps {
  name: string;
  mode: TPS63802OperatingMode;
  outputVoltage?: number;
  loadCurrent?: string;
  duration?: string;
  startTime?: string;
  timePerStep?: string;
  children: ReactNode;
}

const TPS63802MeasurementSimulation = ({
  name,
  mode,
  outputVoltage,
  loadCurrent = "100mA",
  duration = "918us",
  startTime = "900us",
  timePerStep = "5ns",
  children,
  ...subcircuitProps
}: MeasurementSimulationProps) => (
  <TPS63802DatasheetApplication
    {...subcircuitProps}
    mode={mode}
    outputVoltage={outputVoltage}
    loadCurrent={loadCurrent}
    loadConnectAt="700us"
    probeSet="measurement"
    useInputVoltageSweep
  >
    <analog.transientsimulation
      name={name}
      duration={duration}
      startTime={startTime}
      timePerStep={timePerStep}
      spiceEngine="ngspice"
      spiceOptions={spiceOptions}
    >
      {children}
    </analog.transientsimulation>
  </TPS63802DatasheetApplication>
);

export const TPS63802OutputCurrentCapability = (props: SubcircuitProps) => (
  <TPS63802MeasurementSimulation
    {...props}
    name="Figure 10-2. Typical Output Current Capability versus Input Voltage"
    mode="pwm"
  >
    <analog.sweepparameter
      name="Output Voltage"
      parameterType="resistance"
      resistorRef=".R_FB_TOP"
      values={outputVoltageSweepValues([3.3, 3.6, 5])}
      displayValues={[3.3, 3.6, 5]}
      displayUnit="V"
    />
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="VIN_SOURCE"
      values={[
        "1.3V",
        "1.8V",
        "2.3V",
        "2.8V",
        "3.3V",
        "3.8V",
        "4.3V",
        "4.8V",
        "5.3V",
      ]}
    />
    <analog.sweepparameter
      name="Output Current"
      parameterType="current"
      currentSourceRef=".I_LOAD"
      values={[
        "250mA",
        "500mA",
        "750mA",
        "1A",
        "1.25A",
        "1.5A",
        "1.75A",
        "2A",
        "2.25A",
        "2.5A",
        "2.75A",
        "3A",
        "3.25A",
        "3.5A",
        "3.75A",
        "4A",
      ]}
    />
    <analog.measurement
      name="Settled Output Voltage"
      unit="V"
      measureFn={measureSettledOutputVoltage}
    />
  </TPS63802MeasurementSimulation>
);

export const TPS63802SwitchingFrequency = (props: SubcircuitProps) => (
  <TPS63802MeasurementSimulation
    {...props}
    name="Figure 10-3. Typical Inductor Switching Frequency versus Input Voltage"
    mode="pwm"
    loadCurrent="0A"
    timePerStep="5ns"
  >
    <analog.sweepparameter
      name="Output Voltage"
      parameterType="resistance"
      resistorRef=".R_FB_TOP"
      values={outputVoltageSweepValues([1.8, 3.3, 5.2])}
      displayValues={[1.8, 3.3, 5.2]}
      displayUnit="V"
    />
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="VIN_SOURCE"
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
      name="Switching Frequency"
      unit="Hz"
      measureFn={measureSwitchingFrequency}
    />
  </TPS63802MeasurementSimulation>
);

export const TPS63802BurstFrequency = (props: SubcircuitProps) => (
  <TPS63802MeasurementSimulation
    {...props}
    name="Figure 10-4. Typical Inductor Burst Frequency versus Output Current"
    mode="pfm"
    outputVoltage={3.6}
    duration="1500us"
    startTime="500us"
    timePerStep="5ns"
  >
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="VIN_SOURCE"
      values={["2.5V", "3.6V", "4.8V"]}
    />
    <analog.sweepparameter
      name="Output Current"
      parameterType="current"
      currentSourceRef=".I_LOAD"
      values={[
        "1mA",
        "3mA",
        "10mA",
        "30mA",
        "100mA",
        "300mA",
        "500mA",
        "700mA",
        "1A",
      ]}
    />
    <analog.measurement
      name="Burst Frequency"
      unit="Hz"
      measureFn={measureBurstFrequency}
    />
  </TPS63802MeasurementSimulation>
);

interface EfficiencyVersusOutputCurrentProps extends SubcircuitProps {
  figure: string;
  mode: TPS63802OperatingMode;
  inputVoltages: string[];
  outputCurrents: string[];
}

export const TPS63802EfficiencyVersusOutputCurrent = ({
  figure,
  mode,
  inputVoltages,
  outputCurrents,
  ...subcircuitProps
}: EfficiencyVersusOutputCurrentProps) => (
  <TPS63802MeasurementSimulation
    {...subcircuitProps}
    name={`${figure}. Efficiency versus Output Current (${mode === "pfm" ? "PFM/PWM" : "PWM Only"})`}
    mode={mode}
  >
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="VIN_SOURCE"
      values={inputVoltages}
    />
    <analog.sweepparameter
      name="Output Current"
      parameterType="current"
      currentSourceRef=".I_LOAD"
      values={outputCurrents}
    />
    <analog.measurement
      name="Efficiency"
      unit="%"
      measureFn={measureEfficiency}
    />
  </TPS63802MeasurementSimulation>
);

interface EfficiencyVersusInputVoltageProps extends SubcircuitProps {
  figure: string;
  mode: TPS63802OperatingMode;
  inputVoltages?: string[];
  loadCurrents?: string[];
  outputVoltages?: number[];
}

export const TPS63802EfficiencyVersusInputVoltage = ({
  figure,
  mode,
  inputVoltages = [
    "1.8V",
    "2.3V",
    "2.8V",
    "3.3V",
    "3.8V",
    "4.3V",
    "4.8V",
    "5.3V",
  ],
  loadCurrents,
  outputVoltages,
  ...subcircuitProps
}: EfficiencyVersusInputVoltageProps) => (
  <TPS63802MeasurementSimulation
    {...subcircuitProps}
    name={`${figure}. Efficiency versus Input Voltage (${mode === "pfm" ? "PFM/PWM" : "PWM Only"})`}
    mode={mode}
    loadCurrent={outputVoltages ? "1A" : undefined}
  >
    {loadCurrents && (
      <analog.sweepparameter
        name="Output Current"
        parameterType="current"
        currentSourceRef=".I_LOAD"
        values={loadCurrents}
      />
    )}
    {outputVoltages && (
      <analog.sweepparameter
        name="Output Voltage"
        parameterType="resistance"
        resistorRef=".R_FB_TOP"
        values={outputVoltageSweepValues(outputVoltages)}
        displayValues={[...outputVoltages]}
        displayUnit="V"
      />
    )}
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="VIN_SOURCE"
      values={inputVoltages}
    />
    <analog.measurement
      name="Efficiency"
      unit="%"
      measureFn={measureEfficiency}
    />
  </TPS63802MeasurementSimulation>
);

interface RegulationProps extends SubcircuitProps {
  figure: string;
  mode: TPS63802OperatingMode;
  outputVoltages?: number[];
}

export const TPS63802LoadRegulation = ({
  figure,
  mode,
  ...subcircuitProps
}: RegulationProps) => (
  <TPS63802MeasurementSimulation
    {...subcircuitProps}
    name={`${figure}. Load Regulation (${mode === "pfm" ? "PFM/PWM" : "PWM Only"})`}
    mode={mode}
  >
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="VIN_SOURCE"
      values={["2.5V", "3.6V", "4.2V"]}
    />
    <analog.sweepparameter
      name="Output Current"
      parameterType="current"
      currentSourceRef=".I_LOAD"
      values={[
        "10mA",
        "100mA",
        "200mA",
        "300mA",
        "500mA",
        "750mA",
        "1A",
        "1.25A",
        "1.5A",
        "1.75A",
        "2A",
      ]}
    />
    <analog.measurement
      name="Output Voltage Regulation"
      unit="%"
      measureFn={createOutputRegulationMeasurement([3.3])}
    />
  </TPS63802MeasurementSimulation>
);

export const TPS63802LineRegulation = ({
  figure,
  mode,
  outputVoltages = [1.8, 3.3, 5.2],
  ...subcircuitProps
}: RegulationProps) => (
  <TPS63802MeasurementSimulation
    {...subcircuitProps}
    name={`${figure}. Line Regulation (${mode === "pfm" ? "PFM/PWM" : "PWM Only"})`}
    mode={mode}
    loadCurrent="1A"
  >
    <analog.sweepparameter
      name="Output Voltage"
      parameterType="resistance"
      resistorRef=".R_FB_TOP"
      values={outputVoltageSweepValues(outputVoltages)}
      displayValues={[...outputVoltages]}
      displayUnit="V"
    />
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="VIN_SOURCE"
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
      name="Output Voltage Regulation"
      unit="%"
      measureFn={createOutputRegulationMeasurement(outputVoltages)}
    />
  </TPS63802MeasurementSimulation>
);
