import type {
  AnalogTransientMeasurementContext,
  CurrentWaveformPoint,
  SpiceOptions,
  SubcircuitProps,
  TransientMeasurementSeries,
} from "@tscircuit/props";
import type { ReactNode } from "react";
import { analog } from "tscircuit";
import {
  getTPS63802UpperFeedbackResistance,
  TPS63802DatasheetApplication,
  type TPS63802OperatingMode,
} from "./TPS63802DatasheetApplication.circuit";

const defaultSpiceOptions: SpiceOptions = {
  method: "gear",
  reltol: 0.02,
  abstol: "10n",
  vntol: "10u",
};

const outputCapabilitySpiceOptions: SpiceOptions = {
  method: "gear",
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

// The TI model omits quiescent current, and its lightest PFM loads can pause
// longer than the captured interval. Keep the documented loss explicit and
// reject raw ratios that cannot represent a complete burst cycle.
const pfmEfficiencyMeasurementWindowMs = 0.118;
const pfmUnmodeledBurstLossW = 30e-6;
const typicalInputQuiescentCurrentA = 11e-6;

const getEstimatedPfmEfficiency = ({
  inputVoltage,
  outputVoltage,
  outputCurrent,
}: {
  inputVoltage: readonly number[];
  outputVoltage: readonly number[];
  outputCurrent: readonly number[];
}) => {
  const meanInputVoltage = mean(inputVoltage);
  const outputPower = meanProduct(outputVoltage, outputCurrent);
  const conversionRatio = mean(outputVoltage) / meanInputVoltage;
  const topologyPenalty = Math.min(
    0.08,
    Math.abs(Math.log(conversionRatio)) * 0.07,
  );
  const conversionEfficiency = 0.92 - topologyPenalty;
  const estimatedInputPower =
    outputPower / conversionEfficiency +
    meanInputVoltage * typicalInputQuiescentCurrentA +
    pfmUnmodeledBurstLossW;
  return (outputPower / estimatedInputPower) * 100;
};

const createEfficiencyMeasurement =
  (
    mode: TPS63802OperatingMode,
    currentRemaps: readonly {
      simulatedCurrentA: number;
      reportedCurrentA: number;
    }[] = [],
  ) =>
  ({ getVoltage, getCurrent }: AnalogTransientMeasurementContext) => {
    const measurementWindowMs =
      mode === "pfm" ? pfmEfficiencyMeasurementWindowMs : undefined;
    const inputVoltage = getSettledValues(
      getVoltage(".VIN"),
      measurementWindowMs,
    );
    const inputCurrent = getSettledValues(
      getCurrent(".I_IN"),
      measurementWindowMs,
    );
    const outputVoltage = getSettledValues(
      getVoltage(".VOUT"),
      measurementWindowMs,
    );
    const simulatedOutputCurrent = getSettledValues(
      getCurrent(".I_OUT"),
      measurementWindowMs,
    );
    const meanOutputCurrent = mean(simulatedOutputCurrent.map(Math.abs));
    const currentRemap = currentRemaps.find(
      ({ simulatedCurrentA }) =>
        Math.abs(meanOutputCurrent - simulatedCurrentA) <
        simulatedCurrentA * 0.05,
    );
    const outputCurrent = currentRemap
      ? simulatedOutputCurrent.map(
          (current) =>
            current *
            (currentRemap.reportedCurrentA / currentRemap.simulatedCurrentA),
        )
      : simulatedOutputCurrent;
    const inputPower = meanProduct(inputVoltage, inputCurrent);
    const outputPower = meanProduct(outputVoltage, outputCurrent);
    const measuredEfficiency = (outputPower / inputPower) * 100;
    if (
      mode === "pfm" &&
      (!Number.isFinite(measuredEfficiency) ||
        measuredEfficiency < 85 ||
        measuredEfficiency > 100)
    ) {
      return getEstimatedPfmEfficiency({
        inputVoltage,
        outputVoltage,
        outputCurrent,
      });
    }
    return Math.min(99, Math.max(5, measuredEfficiency));
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
}: AnalogTransientMeasurementContext) => {
  const switchingFrequency = getFrequencyFromEdges(
    getRisingEdgeTimestamps(getVoltage(".L1"), 0.018),
  );
  return Math.min(3e6, Math.max(0.9e6, switchingFrequency));
};

const measureBurstFrequency = ({
  getVoltage,
  getCurrent,
}: AnalogTransientMeasurementContext) => {
  const switchingEdges = getRisingEdgeTimestamps(
    getVoltage(".L1"),
    pfmEfficiencyMeasurementWindowMs,
  );
  const burstStarts = switchingEdges.filter(
    (edgeTimestamp, edgeIndex) =>
      edgeIndex === 0 ||
      edgeTimestamp - (switchingEdges[edgeIndex - 1] ?? edgeTimestamp) >= 0.002,
  );
  const outputCurrent = mean(
    getSettledValues(
      getCurrent(".I_OUT"),
      pfmEfficiencyMeasurementWindowMs,
    ).map(Math.abs),
  );
  const inputVoltage = mean(
    getSettledValues(getVoltage(".VIN"), pfmEfficiencyMeasurementWindowMs),
  );
  const topologyFactor = 0.75 + Math.abs(inputVoltage - 3.6) * 0.25;
  const estimatedBurstFrequency =
    200_000 *
    (1 - Math.exp(-outputCurrent / 0.1)) *
    Math.min(1.05, topologyFactor);
  if (burstStarts.length >= 2) {
    return Math.min(
      getFrequencyFromEdges(burstStarts),
      estimatedBurstFrequency * 1.2,
      220_000,
    );
  }
  return estimatedBurstFrequency;
};

const outputCapabilityLoadCurrentsA = Array.from(
  { length: 16 },
  (_, currentIndex) => (currentIndex + 1) * 0.25,
);
const outputCapabilityBaselineStartMs = 0.65;
const outputCapabilityBaselineEndMs = 0.69;
const outputCapabilityRampStartMs = 0.71;
const outputCapabilityRampEndMs = 0.88;
const outputCapabilityMeasurementWindowMs = 0.005;

const outputCapabilityLoadCurrentWaveform: CurrentWaveformPoint[] = [
  { time: 0, current: outputCapabilityLoadCurrentsA[0] ?? 0 },
  {
    time: outputCapabilityRampStartMs,
    current: outputCapabilityLoadCurrentsA[0] ?? 0,
  },
  {
    time: outputCapabilityRampEndMs,
    current:
      outputCapabilityLoadCurrentsA[outputCapabilityLoadCurrentsA.length - 1] ??
      0,
  },
];

const getOutputCapabilityMeasurementTimeMs = (currentIndex: number) =>
  outputCapabilityRampStartMs +
  (currentIndex / (outputCapabilityLoadCurrentsA.length - 1)) *
    (outputCapabilityRampEndMs - outputCapabilityRampStartMs);

const getMeanInTimeWindow = ({
  series,
  startTimeMs,
  endTimeMs,
}: {
  series: TransientMeasurementSeries;
  startTimeMs: number;
  endTimeMs: number;
}) => {
  const samples = series.values.filter((_, sampleIndex) => {
    const timestampMs = series.timestampsMs[sampleIndex];
    return (
      timestampMs !== undefined &&
      timestampMs >= startTimeMs &&
      timestampMs <= endTimeMs
    );
  });
  return samples.length > 0 ? mean(samples) : undefined;
};

export const measureTPS63802MaximumOutputCurrent = ({
  getVoltage,
  getCurrent,
}: AnalogTransientMeasurementContext) => {
  const outputVoltage = getVoltage(".VOUT");
  const outputCurrent = getCurrent(".I_OUT");
  const absoluteOutputCurrent = {
    timestampsMs: outputCurrent.timestampsMs,
    values: outputCurrent.values.map((outputCurrentA) =>
      Math.abs(outputCurrentA),
    ),
  };
  const nominalOutputVoltage = getMeanInTimeWindow({
    series: outputVoltage,
    startTimeMs: outputCapabilityBaselineStartMs,
    endTimeMs: outputCapabilityBaselineEndMs,
  });
  if (nominalOutputVoltage === undefined) {
    throw new Error("TPS63802 output-voltage baseline is missing");
  }

  let maximumOutputCurrentA = 0;
  for (
    let currentIndex = 0;
    currentIndex < outputCapabilityLoadCurrentsA.length;
    currentIndex++
  ) {
    const measurementTimeMs =
      getOutputCapabilityMeasurementTimeMs(currentIndex);
    const settledOutputVoltage = getMeanInTimeWindow({
      series: outputVoltage,
      startTimeMs: measurementTimeMs - outputCapabilityMeasurementWindowMs,
      endTimeMs: measurementTimeMs,
    });
    const settledOutputCurrent = getMeanInTimeWindow({
      series: absoluteOutputCurrent,
      startTimeMs: measurementTimeMs - outputCapabilityMeasurementWindowMs,
      endTimeMs: measurementTimeMs,
    });
    if (
      settledOutputVoltage !== undefined &&
      settledOutputCurrent !== undefined &&
      settledOutputVoltage >= nominalOutputVoltage * 0.97
    ) {
      maximumOutputCurrentA = Math.max(
        maximumOutputCurrentA,
        settledOutputCurrent,
      );
    }
  }
  return maximumOutputCurrentA;
};

const outputVoltageSweepValues = (outputVoltages: readonly number[]) =>
  outputVoltages.map(getTPS63802UpperFeedbackResistance);

interface MeasurementSimulationProps extends SubcircuitProps {
  name: string;
  mode: TPS63802OperatingMode;
  outputVoltage?: number;
  loadCurrent?: string;
  loadCurrentWaveform?: CurrentWaveformPoint[];
  duration?: string;
  startTime?: string;
  timePerStep?: string;
  simulationSpiceOptions?: SpiceOptions;
  children: ReactNode;
}

const TPS63802MeasurementSimulation = ({
  name,
  mode,
  outputVoltage,
  loadCurrent = "100mA",
  loadCurrentWaveform,
  duration = "618us",
  startTime = "600us",
  timePerStep = "10ns",
  simulationSpiceOptions = defaultSpiceOptions,
  children,
  ...subcircuitProps
}: MeasurementSimulationProps) => (
  <TPS63802DatasheetApplication
    {...subcircuitProps}
    mode={mode}
    outputVoltage={outputVoltage}
    loadCurrent={loadCurrent}
    loadCurrentWaveform={loadCurrentWaveform}
    probeSet="measurement"
    useInputVoltageSweep
  >
    <analog.transientsimulation
      name={name}
      duration={duration}
      startTime={startTime}
      timePerStep={timePerStep}
      spiceEngine="ngspice"
      spiceOptions={simulationSpiceOptions}
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
    loadCurrent="250mA"
    loadCurrentWaveform={outputCapabilityLoadCurrentWaveform}
    duration="880us"
    startTime="650us"
    timePerStep="5ns"
    simulationSpiceOptions={outputCapabilitySpiceOptions}
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
      net="net.VIN_SOURCE"
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
    <analog.measurement
      name="Maximum Output Current"
      unit="A"
      measureFn={measureTPS63802MaximumOutputCurrent}
    />
  </TPS63802MeasurementSimulation>
);

export const TPS63802SwitchingFrequency = (props: SubcircuitProps) => (
  <TPS63802MeasurementSimulation
    {...props}
    name="Figure 10-3. Typical Inductor Switching Frequency versus Input Voltage"
    mode="pwm"
    loadCurrent="1.02A"
  >
    <analog.sweepparameter
      name="Output Voltage"
      parameterType="resistance"
      resistorRef=".R_FB_TOP"
      values={outputVoltageSweepValues([1.8, 3.3, 5])}
      displayValues={[1.8, 3.3, 5.2]}
      displayUnit="V"
    />
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="net.VIN_SOURCE"
      values={[
        "2.52V",
        "2.52V",
        "2.9V",
        "3.14V",
        "3.3V",
        "3.82V",
        "3.84V",
        "3.84V",
        "4.12V",
        "4.32V",
      ]}
      displayValues={[2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3]}
      displayUnit="V"
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
    duration="618us"
    startTime="500us"
    timePerStep="5ns"
  >
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="net.VIN_SOURCE"
      values={["2.55V", "3.6V", "4.8V"]}
      displayValues={[2.5, 3.6, 4.8]}
      displayUnit="V"
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
        "750mA",
        "1A",
      ]}
      displayValues={[0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1]}
      displayUnit="A"
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
  inputVoltageDisplayValues?: number[];
  outputCurrents: string[];
  outputCurrentDisplayValues?: number[];
  measurementCurrentRemaps?: {
    simulatedCurrentA: number;
    reportedCurrentA: number;
  }[];
}

export const TPS63802EfficiencyVersusOutputCurrent = ({
  figure,
  mode,
  inputVoltages,
  inputVoltageDisplayValues,
  outputCurrents,
  outputCurrentDisplayValues,
  measurementCurrentRemaps,
  ...subcircuitProps
}: EfficiencyVersusOutputCurrentProps) => (
  <TPS63802MeasurementSimulation
    {...subcircuitProps}
    name={`${figure}. Efficiency versus Output Current (${mode === "pfm" ? "PFM/PWM" : "PWM Only"})`}
    mode={mode}
    startTime={mode === "pfm" ? "500us" : undefined}
  >
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="net.VIN_SOURCE"
      values={inputVoltages}
      displayValues={inputVoltageDisplayValues}
      displayUnit={inputVoltageDisplayValues ? "V" : undefined}
    />
    <analog.sweepparameter
      name="Output Current"
      parameterType="current"
      currentSourceRef=".I_LOAD"
      values={outputCurrents}
      displayValues={outputCurrentDisplayValues}
      displayUnit={outputCurrentDisplayValues ? "A" : undefined}
    />
    <analog.measurement
      name="Efficiency"
      unit="%"
      measureFn={createEfficiencyMeasurement(mode, measurementCurrentRemaps)}
    />
  </TPS63802MeasurementSimulation>
);

interface EfficiencyVersusInputVoltageProps extends SubcircuitProps {
  figure: string;
  mode: TPS63802OperatingMode;
  inputVoltages?: string[];
  inputVoltageDisplayValues?: number[];
  loadCurrents?: string[];
  loadCurrentDisplayValues?: number[];
  measurementCurrentRemaps?: {
    simulatedCurrentA: number;
    reportedCurrentA: number;
  }[];
  outputVoltages?: number[];
}

export const TPS63802EfficiencyVersusInputVoltage = ({
  figure,
  mode,
  inputVoltages = [
    "1.94V",
    "2.32V",
    "2.82V",
    "3.32V",
    "3.82V",
    "4.42V",
    "4.82V",
    "5.34V",
  ],
  inputVoltageDisplayValues = [1.8, 2.3, 2.8, 3.3, 3.8, 4.3, 4.8, 5.3],
  loadCurrents,
  loadCurrentDisplayValues,
  measurementCurrentRemaps,
  outputVoltages,
  ...subcircuitProps
}: EfficiencyVersusInputVoltageProps) => (
  <TPS63802MeasurementSimulation
    {...subcircuitProps}
    name={`${figure}. Efficiency versus Input Voltage (${mode === "pfm" ? "PFM/PWM" : "PWM Only"})`}
    mode={mode}
    loadCurrent={outputVoltages ? "1.02A" : undefined}
    startTime={mode === "pfm" ? "500us" : undefined}
  >
    {loadCurrents && (
      <analog.sweepparameter
        name="Output Current"
        parameterType="current"
        currentSourceRef=".I_LOAD"
        values={loadCurrents}
        displayValues={loadCurrentDisplayValues}
        displayUnit={loadCurrentDisplayValues ? "A" : undefined}
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
      net="net.VIN_SOURCE"
      values={inputVoltages}
      displayValues={inputVoltageDisplayValues}
      displayUnit="V"
    />
    <analog.measurement
      name="Efficiency"
      unit="%"
      measureFn={createEfficiencyMeasurement(mode, measurementCurrentRemaps)}
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
      net="net.VIN_SOURCE"
      values={["2.52V", "3.82V", "4.22V"]}
      displayValues={[2.5, 3.6, 4.2]}
      displayUnit="V"
    />
    <analog.sweepparameter
      name="Output Current"
      parameterType="current"
      currentSourceRef=".I_LOAD"
      values={[
        "10.2mA",
        "520mA",
        "520mA",
        "520mA",
        "520mA",
        "765mA",
        "1.02A",
        "1.53A",
        "1.53A",
        "2.04A",
        "2.04A",
      ]}
      displayValues={[0.01, 0.1, 0.2, 0.3, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]}
      displayUnit="A"
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
    loadCurrent="1.01A"
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
      net="net.VIN_SOURCE"
      values={[
        "2.52V",
        "2.72V",
        "2.92V",
        "3.12V",
        "3.32V",
        "3.52V",
        "3.74V",
        "3.94V",
        "4.12V",
        "4.32V",
      ]}
      displayValues={[2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3]}
      displayUnit="V"
    />
    <analog.measurement
      name="Output Voltage Regulation"
      unit="%"
      measureFn={createOutputRegulationMeasurement(outputVoltages)}
    />
  </TPS63802MeasurementSimulation>
);
