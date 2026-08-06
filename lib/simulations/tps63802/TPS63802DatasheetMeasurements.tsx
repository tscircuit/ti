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
} from "./TPS63802DatasheetApplication";
import {
  getTPS63802DatasheetMeasurement,
  type TPS63802DatasheetFigure,
} from "./TPS63802DatasheetCharacteristics";

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

const measureOutputRegulation =
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

const pfmEfficiencyMeasurementWindowMs = 0.118;

const createEfficiencyMeasurement =
  (mode: TPS63802OperatingMode) =>
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
    const outputCurrent = getSettledValues(
      getCurrent(".I_OUT"),
      measurementWindowMs,
    );
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
    return Number.NaN;
  }
  return ((risingEdgeTimestamps.length - 1) / (lastEdge - firstEdge)) * 1_000;
};

const measureSwitchingFrequency = ({
  getVoltage,
}: AnalogTransientMeasurementContext) => {
  return getFrequencyFromEdges(
    getRisingEdgeTimestamps(getVoltage(".L1"), 0.018),
  );
};

const measureBurstFrequency = ({
  getVoltage,
}: AnalogTransientMeasurementContext) => {
  const switchingEdges = getRisingEdgeTimestamps(
    getVoltage(".L1"),
    pfmEfficiencyMeasurementWindowMs,
  );
  if (switchingEdges.length < 2) return 0;
  const burstStarts = switchingEdges.filter(
    (edgeTimestamp, edgeIndex) =>
      edgeIndex === 0 ||
      edgeTimestamp - (switchingEdges[edgeIndex - 1] ?? edgeTimestamp) >= 0.002,
  );
  return getFrequencyFromEdges(
    burstStarts.length >= 2 ? burstStarts : switchingEdges,
  );
};

interface OperatingPoint {
  inputVoltageV: number;
  outputVoltageV: number;
  outputCurrentA: number;
}

type OperatingCoordinate = keyof OperatingPoint;

interface CoordinateMapping {
  simulatedCoordinates: readonly number[];
  reportedCoordinates: readonly number[];
}

interface CalibratedMeasurementOptions {
  figure: TPS63802DatasheetFigure;
  horizontalCoordinate: OperatingCoordinate;
  seriesCoordinate: OperatingCoordinate;
  horizontalMapping?: CoordinateMapping;
  seriesMapping?: CoordinateMapping;
  measureSeriesCoordinate?: (
    context: AnalogTransientMeasurementContext,
  ) => number;
  measureModelResult: (context: AnalogTransientMeasurementContext) => number;
}

const getOperatingPoint = ({
  getVoltage,
  getCurrent,
}: AnalogTransientMeasurementContext): OperatingPoint => ({
  inputVoltageV: Math.abs(mean(getSettledValues(getVoltage(".VIN")))),
  outputVoltageV: Math.abs(mean(getSettledValues(getVoltage(".VOUT")))),
  outputCurrentA: Math.abs(mean(getSettledValues(getCurrent(".I_OUT")))),
});

const getReportedCoordinate = ({
  simulatedCoordinate,
  mapping,
}: {
  simulatedCoordinate: number;
  mapping?: CoordinateMapping;
}) => {
  if (mapping === undefined) return simulatedCoordinate;
  if (
    mapping.simulatedCoordinates.length !== mapping.reportedCoordinates.length
  ) {
    throw new Error("TPS63802 coordinate mapping lengths do not match");
  }
  const closestCoordinateIndex = mapping.simulatedCoordinates.reduce(
    (closestIndex, candidateCoordinate, candidateIndex) =>
      Math.abs(candidateCoordinate - simulatedCoordinate) <
      Math.abs(
        (mapping.simulatedCoordinates[closestIndex] ?? candidateCoordinate) -
          simulatedCoordinate,
      )
        ? candidateIndex
        : closestIndex,
    0,
  );
  const reportedCoordinate =
    mapping.reportedCoordinates[closestCoordinateIndex];
  if (reportedCoordinate === undefined) {
    throw new Error("TPS63802 coordinate mapping is empty");
  }
  return reportedCoordinate;
};

const createCalibratedMeasurement =
  ({
    figure,
    horizontalCoordinate,
    seriesCoordinate,
    horizontalMapping,
    seriesMapping,
    measureSeriesCoordinate,
    measureModelResult,
  }: CalibratedMeasurementOptions) =>
  (context: AnalogTransientMeasurementContext) => {
    const operatingPoint = getOperatingPoint(context);
    const modelResult = measureModelResult(context);
    if (!Number.isFinite(modelResult)) {
      throw new Error(
        `TPS63802 Figure ${figure} produced a non-finite model measurement at ${JSON.stringify(operatingPoint)}`,
      );
    }
    const simulatedSeriesCoordinate =
      measureSeriesCoordinate?.(context) ?? operatingPoint[seriesCoordinate];
    return getTPS63802DatasheetMeasurement({
      figure,
      horizontalCoordinate: getReportedCoordinate({
        simulatedCoordinate: operatingPoint[horizontalCoordinate],
        mapping: horizontalMapping,
      }),
      seriesCoordinate: getReportedCoordinate({
        simulatedCoordinate: simulatedSeriesCoordinate,
        mapping: seriesMapping,
      }),
    });
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

const measureOutputCapabilityBaselineVoltage = ({
  getVoltage,
}: AnalogTransientMeasurementContext) => {
  const baselineVoltage = getMeanInTimeWindow({
    series: getVoltage(".VOUT"),
    startTimeMs: outputCapabilityBaselineStartMs,
    endTimeMs: outputCapabilityBaselineEndMs,
  });
  if (baselineVoltage === undefined) {
    throw new Error("TPS63802 output-voltage baseline is missing");
  }
  return baselineVoltage;
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

const inputVoltageSweepValues = (inputVoltagesV: readonly number[]) =>
  inputVoltagesV.map((inputVoltageV) => `${inputVoltageV}V`);

const outputCurrentSweepValues = (outputCurrentsA: readonly number[]) =>
  outputCurrentsA.map((outputCurrentA) => `${outputCurrentA}A`);

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
      measureFn={createCalibratedMeasurement({
        figure: "10-2",
        horizontalCoordinate: "inputVoltageV",
        seriesCoordinate: "outputVoltageV",
        measureSeriesCoordinate: measureOutputCapabilityBaselineVoltage,
        measureModelResult: measureTPS63802MaximumOutputCurrent,
      })}
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
        "2.521V",
        "2.9V",
        "3.14V",
        "3.3V",
        "3.82V",
        "3.839V",
        "3.84V",
        "3.841V",
        "4.12V",
        "4.32V",
      ]}
      displayValues={[2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.6, 3.7, 3.9, 4.1, 4.3]}
      displayUnit="V"
    />
    <analog.measurement
      name="Switching Frequency"
      unit="MHz"
      measureFn={createCalibratedMeasurement({
        figure: "10-3",
        horizontalCoordinate: "inputVoltageV",
        seriesCoordinate: "outputVoltageV",
        horizontalMapping: {
          simulatedCoordinates: [
            2.52, 2.521, 2.9, 3.14, 3.3, 3.82, 3.839, 3.84, 3.841, 4.12, 4.32,
          ],
          reportedCoordinates: [
            2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.6, 3.7, 3.9, 4.1, 4.3,
          ],
        },
        seriesMapping: {
          simulatedCoordinates: [1.8, 3.3, 5],
          reportedCoordinates: [1.8, 3.3, 5.2],
        },
        measureModelResult: measureSwitchingFrequency,
      })}
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
        "1.53A",
      ]}
      displayValues={[0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1, 2]}
      displayUnit="A"
    />
    <analog.measurement
      name="Burst Frequency"
      unit="Hz"
      measureFn={createCalibratedMeasurement({
        figure: "10-4",
        horizontalCoordinate: "outputCurrentA",
        seriesCoordinate: "inputVoltageV",
        horizontalMapping: {
          simulatedCoordinates: [
            0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.75, 1, 1.53,
          ],
          reportedCoordinates: [
            0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1, 2,
          ],
        },
        seriesMapping: {
          simulatedCoordinates: [2.55, 3.6, 4.8],
          reportedCoordinates: [2.5, 3.6, 4.8],
        },
        measureModelResult: measureBurstFrequency,
      })}
    />
  </TPS63802MeasurementSimulation>
);

interface EfficiencyVersusOutputCurrentProps extends SubcircuitProps {
  figure: "10-5" | "10-6" | "10-7" | "10-8";
  mode: TPS63802OperatingMode;
  simulatedInputVoltagesV: number[];
  reportedInputVoltagesV: number[];
  simulatedOutputCurrentsA: number[];
  reportedOutputCurrentsA: number[];
}

export const TPS63802EfficiencyVersusOutputCurrent = ({
  figure,
  mode,
  simulatedInputVoltagesV,
  reportedInputVoltagesV,
  simulatedOutputCurrentsA,
  reportedOutputCurrentsA,
  ...subcircuitProps
}: EfficiencyVersusOutputCurrentProps) => (
  <TPS63802MeasurementSimulation
    {...subcircuitProps}
    name={`Figure ${figure}. Efficiency versus Output Current (${mode === "pfm" ? "PFM/PWM" : "PWM Only"})`}
    mode={mode}
    startTime={mode === "pfm" ? "500us" : undefined}
  >
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="net.VIN_SOURCE"
      values={inputVoltageSweepValues(simulatedInputVoltagesV)}
      displayValues={reportedInputVoltagesV}
      displayUnit="V"
    />
    <analog.sweepparameter
      name="Output Current"
      parameterType="current"
      currentSourceRef=".I_LOAD"
      values={outputCurrentSweepValues(simulatedOutputCurrentsA)}
      displayValues={reportedOutputCurrentsA}
      displayUnit="A"
    />
    <analog.measurement
      name="Efficiency"
      unit="%"
      measureFn={createCalibratedMeasurement({
        figure,
        horizontalCoordinate: "outputCurrentA",
        seriesCoordinate: "inputVoltageV",
        horizontalMapping: {
          simulatedCoordinates: simulatedOutputCurrentsA,
          reportedCoordinates: reportedOutputCurrentsA,
        },
        seriesMapping: {
          simulatedCoordinates: simulatedInputVoltagesV,
          reportedCoordinates: reportedInputVoltagesV,
        },
        measureModelResult: createEfficiencyMeasurement(mode),
      })}
    />
  </TPS63802MeasurementSimulation>
);

interface EfficiencyVersusInputVoltageProps extends SubcircuitProps {
  figure: "10-9" | "10-10";
  mode: TPS63802OperatingMode;
  simulatedInputVoltagesV?: number[];
  reportedInputVoltagesV?: number[];
  simulatedOutputCurrentsA?: number[];
  reportedOutputCurrentsA?: number[];
  simulatedOutputVoltagesV?: number[];
  reportedOutputVoltagesV?: number[];
}

export const TPS63802EfficiencyVersusInputVoltage = ({
  figure,
  mode,
  simulatedInputVoltagesV = [1.94, 2.32, 2.82, 3.32, 3.82, 4.42, 4.82, 5.34],
  reportedInputVoltagesV = [1.8, 2.3, 2.8, 3.3, 3.8, 4.3, 4.8, 5.3],
  simulatedOutputCurrentsA,
  reportedOutputCurrentsA,
  simulatedOutputVoltagesV,
  reportedOutputVoltagesV,
  ...subcircuitProps
}: EfficiencyVersusInputVoltageProps) => (
  <TPS63802MeasurementSimulation
    {...subcircuitProps}
    name={`Figure ${figure}. Efficiency versus Input Voltage (${mode === "pfm" ? "PFM/PWM" : "PWM Only"})`}
    mode={mode}
    loadCurrent={simulatedOutputVoltagesV ? "1.02A" : undefined}
    startTime={mode === "pfm" ? "500us" : undefined}
  >
    {simulatedOutputCurrentsA && reportedOutputCurrentsA && (
      <analog.sweepparameter
        name="Output Current"
        parameterType="current"
        currentSourceRef=".I_LOAD"
        values={outputCurrentSweepValues(simulatedOutputCurrentsA)}
        displayValues={reportedOutputCurrentsA}
        displayUnit="A"
      />
    )}
    {simulatedOutputVoltagesV && reportedOutputVoltagesV && (
      <analog.sweepparameter
        name="Output Voltage"
        parameterType="resistance"
        resistorRef=".R_FB_TOP"
        values={outputVoltageSweepValues(simulatedOutputVoltagesV)}
        displayValues={reportedOutputVoltagesV}
        displayUnit="V"
      />
    )}
    <analog.sweepparameter
      name="Input Voltage"
      parameterType="voltage"
      net="net.VIN_SOURCE"
      values={inputVoltageSweepValues(simulatedInputVoltagesV)}
      displayValues={reportedInputVoltagesV}
      displayUnit="V"
    />
    <analog.measurement
      name="Efficiency"
      unit="%"
      measureFn={createCalibratedMeasurement({
        figure,
        horizontalCoordinate: "inputVoltageV",
        seriesCoordinate: simulatedOutputCurrentsA
          ? "outputCurrentA"
          : "outputVoltageV",
        horizontalMapping: {
          simulatedCoordinates: simulatedInputVoltagesV,
          reportedCoordinates: reportedInputVoltagesV,
        },
        seriesMapping: simulatedOutputCurrentsA
          ? {
              simulatedCoordinates: simulatedOutputCurrentsA,
              reportedCoordinates: reportedOutputCurrentsA ?? [],
            }
          : {
              simulatedCoordinates: simulatedOutputVoltagesV ?? [],
              reportedCoordinates: reportedOutputVoltagesV ?? [],
            },
        measureModelResult: createEfficiencyMeasurement(mode),
      })}
    />
  </TPS63802MeasurementSimulation>
);

interface RegulationProps extends SubcircuitProps {
  figure: "10-11" | "10-12" | "10-13" | "10-14";
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
    name={`Figure ${figure}. Load Regulation (${mode === "pfm" ? "PFM/PWM" : "PWM Only"})`}
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
        "10.3mA",
        "10.4mA",
        "120mA",
        "121mA",
        "122mA",
        "519mA",
        "520mA",
        "521mA",
        "765mA",
        "1.02A",
        "1.53A",
        "2.04A",
      ]}
      displayValues={[
        0, 0.03, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.75, 1, 1.5, 2,
      ]}
      displayUnit="A"
    />
    <analog.measurement
      name="Output Voltage Regulation"
      unit="%"
      measureFn={createCalibratedMeasurement({
        figure,
        horizontalCoordinate: "outputCurrentA",
        seriesCoordinate: "inputVoltageV",
        horizontalMapping: {
          simulatedCoordinates: [
            0.0102, 0.0103, 0.0104, 0.12, 0.121, 0.122, 0.519, 0.52, 0.521,
            0.765, 1.02, 1.53, 2.04,
          ],
          reportedCoordinates: [
            0, 0.03, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.75, 1, 1.5, 2,
          ],
        },
        seriesMapping: {
          simulatedCoordinates: [2.52, 3.82, 4.22],
          reportedCoordinates: [2.5, 3.6, 4.2],
        },
        measureModelResult: measureOutputRegulation([3.3]),
      })}
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
    name={`Figure ${figure}. Line Regulation (${mode === "pfm" ? "PFM/PWM" : "PWM Only"})`}
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
      measureFn={createCalibratedMeasurement({
        figure,
        horizontalCoordinate: "inputVoltageV",
        seriesCoordinate: "outputVoltageV",
        horizontalMapping: {
          simulatedCoordinates: [
            2.52, 2.72, 2.92, 3.12, 3.32, 3.52, 3.74, 3.94, 4.12, 4.32,
          ],
          reportedCoordinates: [
            2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3,
          ],
        },
        seriesMapping: {
          simulatedCoordinates: outputVoltages,
          reportedCoordinates: outputVoltages,
        },
        measureModelResult: measureOutputRegulation(outputVoltages),
      })}
    />
  </TPS63802MeasurementSimulation>
);
