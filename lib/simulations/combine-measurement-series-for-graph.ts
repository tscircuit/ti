import type { SimulationMeasurementResult } from "circuit-json";

export const combineMeasurementSeriesForGraph = (
  measurementResults: SimulationMeasurementResult[],
) => {
  const firstResult = measurementResults[0];
  if (!firstResult) {
    throw new Error("At least one measurement result is required");
  }

  const simulationExperimentId = firstResult.simulation_experiment_id;
  const combinedResults = measurementResults.map((result, index) => ({
    ...result,
    simulation_measurement_result_id: `${result.simulation_measurement_result_id}_combined_${index}`,
    simulation_experiment_id: simulationExperimentId,
  }));

  return {
    simulationExperimentId,
    combinedResults,
  };
};
