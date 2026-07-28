import { expect, test } from "bun:test";
import { reduceTPS63802OutputCurrentCapabilityResult } from "../lib/simulations/tps63802/reduce-output-current-capability-result";

const outputVoltageSweepId = "simulation_parameter_sweep_output_voltage";
const inputVoltageSweepId = "simulation_parameter_sweep_input_voltage";
const outputCurrentSweepId = "simulation_parameter_sweep_output_current";

const circuitJson = [
  {
    type: "simulation_parameter_sweep",
    simulation_parameter_sweep_id: outputVoltageSweepId,
    simulation_experiment_id: "simulation_experiment_figure_10_2",
    name: "Output Voltage",
    parameter_type: "resistance",
    resistor_source_component_id: "source_component_rfb",
    parameter_values: [511_000],
    parameter_unit: "Ω",
    display_parameter_values: [3.3],
    display_parameter_unit: "V",
  },
  {
    type: "simulation_parameter_sweep",
    simulation_parameter_sweep_id: inputVoltageSweepId,
    simulation_experiment_id: "simulation_experiment_figure_10_2",
    name: "Input Voltage",
    parameter_type: "voltage",
    source_net_id: "source_net_vin",
    parameter_values: [2.5, 3.6],
    parameter_unit: "V",
  },
  {
    type: "simulation_parameter_sweep",
    simulation_parameter_sweep_id: outputCurrentSweepId,
    simulation_experiment_id: "simulation_experiment_figure_10_2",
    name: "Output Current",
    parameter_type: "current",
    current_source_component_id: "source_component_load",
    parameter_values: [1, 2, 3],
    parameter_unit: "A",
  },
  {
    type: "simulation_measurement_result",
    simulation_measurement_result_id:
      "simulation_measurement_result_settled_output",
    simulation_experiment_id: "simulation_experiment_figure_10_2",
    name: "Settled Output Voltage",
    measurement_values: [3.3, 3.25, 2.8, 3.3, 3.28, 3.25],
    measurement_unit: "V",
    simulation_parameter_sweep_coordinate_sets: [0, 1].flatMap(
      (inputVoltageIndex) =>
        [0, 1, 2].map((outputCurrentIndex) => [
          {
            simulation_parameter_sweep_id: outputVoltageSweepId,
            sweep_index: 0,
            parameter_value: 511_000,
            parameter_unit: "Ω",
          },
          {
            simulation_parameter_sweep_id: inputVoltageSweepId,
            sweep_index: inputVoltageIndex,
            parameter_value: [2.5, 3.6][inputVoltageIndex] ?? 0,
            parameter_unit: "V",
          },
          {
            simulation_parameter_sweep_id: outputCurrentSweepId,
            sweep_index: outputCurrentIndex,
            parameter_value: [1, 2, 3][outputCurrentIndex] ?? 0,
            parameter_unit: "A",
          },
        ]),
    ),
  },
];

test("reduces the Figure 10-2 operating-point grid to maximum current", () => {
  const reducedCircuitJson =
    reduceTPS63802OutputCurrentCapabilityResult(circuitJson);
  const maximumCurrentResult = reducedCircuitJson.find(
    (element) =>
      element.type === "simulation_measurement_result" &&
      element.name === "Maximum Output Current",
  );

  expect(maximumCurrentResult).toMatchObject({
    measurement_values: [2, 3],
    measurement_unit: "A",
  });
  expect(
    maximumCurrentResult?.type === "simulation_measurement_result"
      ? maximumCurrentResult.simulation_parameter_sweep_coordinate_sets?.map(
          (coordinateSet) =>
            coordinateSet.map(({ parameter_value }) => parameter_value),
        )
      : undefined,
  ).toEqual([
    [511_000, 2.5],
    [511_000, 3.6],
  ]);
});
