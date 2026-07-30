import { expect, test } from "bun:test";
import { writeFileSync } from "node:fs";
import { convertCircuitJsonToSimulationGraphSvg } from "circuit-to-svg";
import type { AnyCircuitElementInput } from "circuit-json";
import type { SpiceEngine } from "@tscircuit/props";
import { Circuit } from "tscircuit";
import TPS63802Figure103SwitchingFrequencyVsInputVoltageCircuit from "../lib/simulations/TPS63802-Figure-10-3-switching-frequency-vs-input-voltage.circuit";
import TPS63802Figure104InductorBurstFrequencyVsOutputCurrentCircuit from "../lib/simulations/TPS63802-Figure-10-4-inductor-burst-frequency-vs-output-current.circuit";
import { combineMeasurementSeriesForGraph } from "../lib/simulations/combine-measurement-series-for-graph";

const createFrequencyFixtureEngine = ({
  frequencyHz,
  sampleCount,
  timePerStepMs,
}: {
  frequencyHz: number;
  sampleCount: number;
  timePerStepMs: number;
}): SpiceEngine => ({
  async simulate(spiceString) {
    const probes = Array.from(
      spiceString.matchAll(/^\* tscircuit(?:_current)?_probe (\{.+\})$/gm),
      (match) =>
        JSON.parse(match[1]!) as {
          simulation_current_probe_id?: string;
          simulation_voltage_probe_id?: string;
        },
    );
    const timestampsMs = Array.from(
      { length: sampleCount },
      (_, index) => index * timePerStepMs,
    );

    const simulationResultCircuitJson: AnyCircuitElementInput[] = [];
    for (const [index, probe] of probes.entries()) {
      if (probe.simulation_voltage_probe_id) {
        simulationResultCircuitJson.push({
          type: "simulation_transient_voltage_graph",
          simulation_transient_voltage_graph_id: `fixture_voltage_${index}`,
          simulation_experiment_id: "fixture",
          source_probe_id: probe.simulation_voltage_probe_id,
          timestamps_ms: timestampsMs,
          voltage_levels: timestampsMs.map(() => 3.3),
          time_per_step: timePerStepMs,
          start_time_ms: timestampsMs[0]!,
          end_time_ms: timestampsMs.at(-1)!,
        } as AnyCircuitElementInput);
      }
      if (probe.simulation_current_probe_id) {
        simulationResultCircuitJson.push({
          type: "simulation_transient_current_graph",
          simulation_transient_current_graph_id: `fixture_current_${index}`,
          simulation_experiment_id: "fixture",
          source_probe_id: probe.simulation_current_probe_id,
          timestamps_ms: timestampsMs,
          current_levels: timestampsMs.map(
            (timeMs) =>
              1 + 0.5 * Math.sin(2 * Math.PI * frequencyHz * (timeMs / 1_000)),
          ),
          time_per_step: timePerStepMs,
          start_time_ms: timestampsMs[0]!,
          end_time_ms: timestampsMs.at(-1)!,
        } as AnyCircuitElementInput);
      }
    }
    return { simulationResultCircuitJson };
  },
});

const renderFigure = async ({
  circuitElement,
  fixtureEngine,
  outputPath,
  xAxisScale,
}: {
  circuitElement: React.ReactElement;
  fixtureEngine: SpiceEngine;
  outputPath: string;
  xAxisScale?: "linear" | "logarithmic";
}) => {
  const circuit = new Circuit({
    platform: { spiceEngineMap: { ngspice: fixtureEngine } },
  });
  circuit.add(circuitElement);
  await circuit.renderUntilSettled();

  expect(circuit.db.simulation_unknown_experiment_error.list()).toHaveLength(0);
  const measurements = circuit.db.simulation_measurement_result.list();
  const { combinedResults, simulationExperimentId } =
    combineMeasurementSeriesForGraph(measurements);
  const svg = convertCircuitJsonToSimulationGraphSvg({
    circuitJson: [...circuit.getCircuitJson(), ...combinedResults],
    simulation_experiment_id: simulationExperimentId,
    simulation_result_ids: combinedResults.map(
      (result) => result.simulation_measurement_result_id,
    ),
    x_axis_scale: xAxisScale,
    y_axis_title:
      combinedResults[0]?.measurement_unit === "MHz"
        ? "Switching Frequency (MHz)"
        : "PFM Burst Frequency (Hz)",
  });
  writeFileSync(outputPath, svg);
  return { measurements, svg };
};

test("Figure 10-3. Typical Inductor Switching Frequency versus Input Voltage", async () => {
  const { measurements, svg } = await renderFigure({
    circuitElement: (
      <TPS63802Figure103SwitchingFrequencyVsInputVoltageCircuit name="figure_10_3" />
    ),
    fixtureEngine: createFrequencyFixtureEngine({
      frequencyHz: 2_000_000,
      sampleCount: 1_001,
      timePerStepMs: 0.00002,
    }),
    outputPath: "/tmp/TPS63802-Figure-10-3.svg",
  });

  expect(measurements).toHaveLength(3);
  expect(
    measurements.flatMap((measurement) => measurement.measurement_values),
  ).toHaveLength(30);
  expect(measurements[0]?.measurement_values[0]).toBeCloseTo(2, 6);
  expect(svg).toContain("Input Voltage (V)");
  expect(svg).toContain("Switching Frequency (MHz)");
});

test("Figure 10-4. Typical Inductor Burst Frequency versus Output Current", async () => {
  const { measurements, svg } = await renderFigure({
    circuitElement: (
      <TPS63802Figure104InductorBurstFrequencyVsOutputCurrentCircuit name="figure_10_4" />
    ),
    fixtureEngine: createFrequencyFixtureEngine({
      frequencyHz: 50_000,
      sampleCount: 1_001,
      timePerStepMs: 0.0002,
    }),
    outputPath: "/tmp/TPS63802-Figure-10-4.svg",
    xAxisScale: "logarithmic",
  });

  expect(measurements).toHaveLength(1);
  expect(measurements[0]?.measurement_values).toHaveLength(15);
  expect(measurements[0]?.measurement_values[0]).toBeCloseTo(50_000, -1);
  expect(svg).toContain("Output Current (A)");
  expect(svg).toContain("PFM Burst Frequency (Hz)");
});
