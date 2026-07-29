import type {
  AnalogTransientMeasurementContext,
  TransientMeasurementSeries,
} from "@tscircuit/props";

export const mean = (values: readonly number[]) =>
  values.reduce((sum, value) => sum + value, 0) / values.length;

export const meanAbsolute = (values: readonly number[]) =>
  values.reduce((sum, value) => sum + Math.abs(value), 0) / values.length;

export const measureEfficiencyPercent = ({
  getCurrent,
  getVoltage,
}: AnalogTransientMeasurementContext) => {
  const inputVoltage = getVoltage("net.VIN").values.slice(-1_000);
  const outputVoltage = getVoltage("net.VOUT").values.slice(-1_000);
  const inputCurrent = getCurrent(".I_IN_PROBE").values.slice(-1_000);
  const outputCurrent = getCurrent(".I_LOAD_PROBE").values.slice(-1_000);
  const sampleCount = Math.min(
    inputVoltage.length,
    outputVoltage.length,
    inputCurrent.length,
    outputCurrent.length,
  );
  const inputPowers = Array.from(
    { length: sampleCount },
    (_, index) => inputVoltage[index]! * inputCurrent[index]!,
  );
  const outputPowers = Array.from(
    { length: sampleCount },
    (_, index) => outputVoltage[index]! * outputCurrent[index]!,
  );
  return (meanAbsolute(outputPowers) / meanAbsolute(inputPowers)) * 100;
};

const getRange = (values: readonly number[]) => {
  let minimum = Number.POSITIVE_INFINITY;
  let maximum = Number.NEGATIVE_INFINITY;
  for (const value of values) {
    minimum = Math.min(minimum, value);
    maximum = Math.max(maximum, value);
  }
  return { minimum, maximum };
};

const getRisingCrossingTimesMs = (
  series: TransientMeasurementSeries,
  threshold: number,
) => {
  const crossingTimesMs: number[] = [];
  for (let index = 1; index < series.values.length; index++) {
    const previousValue = series.values[index - 1]!;
    const value = series.values[index]!;
    if (previousValue > threshold || value <= threshold) continue;

    const previousTimeMs = series.timestampsMs[index - 1]!;
    const timeMs = series.timestampsMs[index]!;
    const interpolation =
      value === previousValue
        ? 0
        : (threshold - previousValue) / (value - previousValue);
    crossingTimesMs.push(
      previousTimeMs + interpolation * (timeMs - previousTimeMs),
    );
  }
  return crossingTimesMs;
};

const median = (values: readonly number[]) => {
  const sortedValues = [...values].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedValues.length / 2);
  return sortedValues.length % 2 === 0
    ? (sortedValues[middleIndex - 1]! + sortedValues[middleIndex]!) / 2
    : sortedValues[middleIndex]!;
};

const frequencyFromCrossingTimes = (crossingTimesMs: readonly number[]) => {
  if (crossingTimesMs.length < 2) {
    throw new Error("At least two rising crossings are required");
  }
  const periodsMs = crossingTimesMs
    .slice(1)
    .map((timeMs, index) => timeMs - crossingTimesMs[index]!);
  return 1_000 / median(periodsMs);
};

export const measureSwitchingFrequencyHz = (
  series: TransientMeasurementSeries,
) => {
  const settledValues = series.values.slice(
    Math.floor(series.values.length / 2),
  );
  const settledTimestampsMs = series.timestampsMs.slice(
    Math.floor(series.timestampsMs.length / 2),
  );
  const threshold = mean(settledValues);
  return frequencyFromCrossingTimes(
    getRisingCrossingTimesMs(
      { values: settledValues, timestampsMs: settledTimestampsMs },
      threshold,
    ),
  );
};

export const measureBurstFrequencyHz = (series: TransientMeasurementSeries) => {
  const settledStartIndex = Math.floor(series.values.length / 2);
  const settledValues = series.values.slice(settledStartIndex);
  const settledSeries = {
    values: settledValues,
    timestampsMs: series.timestampsMs.slice(settledStartIndex),
  };
  const { minimum, maximum } = getRange(settledValues);
  const crossings = getRisingCrossingTimesMs(
    settledSeries,
    minimum + (maximum - minimum) * 0.5,
  );
  if (crossings.length < 2) {
    throw new Error("At least two inductor-current pulses are required");
  }

  const crossingIntervalsMs = crossings
    .slice(1)
    .map((timeMs, index) => timeMs - crossings[index]!);
  const switchingPeriodMs = Math.min(...crossingIntervalsMs);
  const burstGapThresholdMs = switchingPeriodMs * 2.5;
  const burstStarts = crossings.filter(
    (timeMs, index) =>
      index === 0 || timeMs - crossings[index - 1]! > burstGapThresholdMs,
  );

  return frequencyFromCrossingTimes(
    burstStarts.length >= 2 ? burstStarts : crossings,
  );
};
