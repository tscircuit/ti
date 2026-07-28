import type { AnyCircuitElement } from "tscircuit";

type SimulationMeasurementResult = Extract<
  AnyCircuitElement,
  { type: "simulation_measurement_result" }
>;
type SimulationParameterSweep = Extract<
  AnyCircuitElement,
  { type: "simulation_parameter_sweep" }
>;

const findSweepByName = (
  circuitJson: readonly AnyCircuitElement[],
  simulationExperimentId: string,
  name: string,
) => {
  const sweep = circuitJson.find(
    (element): element is SimulationParameterSweep =>
      element.type === "simulation_parameter_sweep" &&
      element.simulation_experiment_id === simulationExperimentId &&
      element.name === name,
  );
  if (!sweep) {
    throw new Error(`TPS63802 ${name} sweep result is missing`);
  }
  return sweep;
};

const getDisplayValue = (sweep: SimulationParameterSweep, sweepIndex: number) =>
  sweep.display_parameter_values?.[sweepIndex] ??
  sweep.parameter_values[sweepIndex];

/**
 * Converts the Figure 10-2 load sweep into the datasheet's maximum-current
 * envelope. This is ordinary result processing: the simulation API records
 * every operating point, then this helper selects the largest load that
 * remains within the allowed output-voltage drop.
 */
export const reduceTPS63802OutputCurrentCapabilityResult = (
  circuitJson: readonly AnyCircuitElement[],
  maximumOutputVoltageDropPercent = 3,
): AnyCircuitElement[] => {
  const settledOutputVoltageResult = circuitJson.find(
    (element): element is SimulationMeasurementResult =>
      element.type === "simulation_measurement_result" &&
      element.name === "Settled Output Voltage",
  );
  if (!settledOutputVoltageResult) {
    throw new Error("TPS63802 settled-output-voltage result is missing");
  }

  const experimentId = settledOutputVoltageResult.simulation_experiment_id;
  const outputVoltageSweep = findSweepByName(
    circuitJson,
    experimentId,
    "Output Voltage",
  );
  const inputVoltageSweep = findSweepByName(
    circuitJson,
    experimentId,
    "Input Voltage",
  );
  const outputCurrentSweep = findSweepByName(
    circuitJson,
    experimentId,
    "Output Current",
  );
  const coordinateSets =
    settledOutputVoltageResult.simulation_parameter_sweep_coordinate_sets;
  if (!coordinateSets) {
    throw new Error(
      "TPS63802 output-current capability coordinates are missing",
    );
  }

  const measurementValues: number[] = [];
  const reducedCoordinateSets: NonNullable<
    SimulationMeasurementResult["simulation_parameter_sweep_coordinate_sets"]
  > = [];

  for (
    let outputVoltageIndex = 0;
    outputVoltageIndex < outputVoltageSweep.parameter_values.length;
    outputVoltageIndex += 1
  ) {
    const nominalOutputVoltage = getDisplayValue(
      outputVoltageSweep,
      outputVoltageIndex,
    );
    if (nominalOutputVoltage === undefined) continue;

    for (
      let inputVoltageIndex = 0;
      inputVoltageIndex < inputVoltageSweep.parameter_values.length;
      inputVoltageIndex += 1
    ) {
      let maximumOutputCurrent = 0;
      for (const [
        measurementIndex,
        coordinateSet,
      ] of coordinateSets.entries()) {
        const outputVoltageCoordinate = coordinateSet.find(
          (coordinate) =>
            coordinate.simulation_parameter_sweep_id ===
              outputVoltageSweep.simulation_parameter_sweep_id &&
            coordinate.sweep_index === outputVoltageIndex,
        );
        const inputVoltageCoordinate = coordinateSet.find(
          (coordinate) =>
            coordinate.simulation_parameter_sweep_id ===
              inputVoltageSweep.simulation_parameter_sweep_id &&
            coordinate.sweep_index === inputVoltageIndex,
        );
        const outputCurrentCoordinate = coordinateSet.find(
          (coordinate) =>
            coordinate.simulation_parameter_sweep_id ===
            outputCurrentSweep.simulation_parameter_sweep_id,
        );
        if (
          !outputVoltageCoordinate ||
          !inputVoltageCoordinate ||
          !outputCurrentCoordinate
        ) {
          continue;
        }

        const settledOutputVoltage =
          settledOutputVoltageResult.measurement_values[measurementIndex];
        if (
          settledOutputVoltage !== undefined &&
          settledOutputVoltage >=
            nominalOutputVoltage * (1 - maximumOutputVoltageDropPercent / 100)
        ) {
          maximumOutputCurrent = Math.max(
            maximumOutputCurrent,
            outputCurrentCoordinate.parameter_value,
          );
        }
      }

      measurementValues.push(maximumOutputCurrent);
      reducedCoordinateSets.push([
        {
          simulation_parameter_sweep_id:
            outputVoltageSweep.simulation_parameter_sweep_id,
          sweep_index: outputVoltageIndex,
          parameter_value:
            outputVoltageSweep.parameter_values[outputVoltageIndex] ?? 0,
          parameter_unit: outputVoltageSweep.parameter_unit,
        },
        {
          simulation_parameter_sweep_id:
            inputVoltageSweep.simulation_parameter_sweep_id,
          sweep_index: inputVoltageIndex,
          parameter_value:
            inputVoltageSweep.parameter_values[inputVoltageIndex] ?? 0,
          parameter_unit: inputVoltageSweep.parameter_unit,
        },
      ]);
    }
  }

  const maximumCurrentResult: SimulationMeasurementResult = {
    type: "simulation_measurement_result",
    simulation_measurement_result_id: `${settledOutputVoltageResult.simulation_measurement_result_id}_maximum_current`,
    simulation_experiment_id: experimentId,
    name: "Maximum Output Current",
    measurement_values: measurementValues,
    measurement_unit: "A",
    simulation_parameter_sweep_coordinate_sets: reducedCoordinateSets,
  };

  return [
    ...circuitJson.filter((element) => element !== settledOutputVoltageResult),
    maximumCurrentResult,
  ];
};
