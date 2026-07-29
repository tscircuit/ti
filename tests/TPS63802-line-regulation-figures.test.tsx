import { expect, test } from "bun:test";
import { writeFileSync } from "node:fs";
import { convertCircuitJsonToSimulationGraphSvg } from "circuit-to-svg";
import type { AnyCircuitElementInput } from "circuit-json";
import type { SpiceEngine } from "@tscircuit/props";
import { Circuit } from "tscircuit";
import TPS63802Figure1013LineRegulationPwmOnlyCircuit from "../lib/simulations/TPS63802-Figure-10-13-line-regulation-pwm-only.circuit";
import TPS63802Figure1014LineRegulationPfmPwmCircuit from "../lib/simulations/TPS63802-Figure-10-14-line-regulation-pfm-pwm.circuit";
import { combineMeasurementSeriesForGraph } from "../lib/simulations/combine-measurement-series-for-graph";

const lineRegulationFixtureEngine: SpiceEngine = {
  async simulate(spiceString) {
    const probes = Array.from(
      spiceString.matchAll(/^\* tscircuit_probe (\{.+\})$/gm),
      (match) =>
        JSON.parse(match[1]!) as {
          name: string;
          simulation_voltage_probe_id: string;
        },
    );
    const simulationResultCircuitJson = probes.map(
      (probe, index) =>
        ({
          type: "simulation_transient_voltage_graph",
          simulation_transient_voltage_graph_id: `fixture_voltage_${index}`,
          simulation_experiment_id: "fixture",
          source_probe_id: probe.simulation_voltage_probe_id,
          timestamps_ms: [0, 1],
          voltage_levels:
            probe.name === "V_FB_PROBE" ? [0.4995, 0.4995] : [3.3, 3.3],
          time_per_step: 1,
          start_time_ms: 0,
          end_time_ms: 1,
        }) as AnyCircuitElementInput,
    );
    return { simulationResultCircuitJson };
  },
};

const renderLineRegulationFigure = async ({
  circuitElement,
  outputPath,
}: {
  circuitElement: React.ReactElement;
  outputPath: string;
}) => {
  const circuit = new Circuit({
    platform: { spiceEngineMap: { ngspice: lineRegulationFixtureEngine } },
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
    y_axis_title: "Output Voltage Regulation (%)",
  });
  writeFileSync(outputPath, svg);
  return { measurements, svg };
};

test("Figure 10-13. Line Regulation (PWM Only)", async () => {
  const { measurements, svg } = await renderLineRegulationFigure({
    circuitElement: (
      <TPS63802Figure1013LineRegulationPwmOnlyCircuit name="figure_10_13" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-13.svg",
  });

  expect(measurements).toHaveLength(3);
  expect(
    measurements.flatMap((measurement) => measurement.measurement_values),
  ).toHaveLength(30);
  expect(svg).toContain("VO = 1.8 V");
  expect(svg).toContain("VO = 3.3 V");
  expect(svg).toContain("VO = 5.2 V");
  expect(svg).toContain("Output Voltage Regulation (%)");
});

test("Figure 10-14. Line Regulation (PFM/PWM)", async () => {
  const { measurements, svg } = await renderLineRegulationFigure({
    circuitElement: (
      <TPS63802Figure1014LineRegulationPfmPwmCircuit name="figure_10_14" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-14.svg",
  });

  expect(measurements).toHaveLength(3);
  expect(
    measurements.flatMap((measurement) => measurement.measurement_values),
  ).toHaveLength(30);
  expect(svg).toContain("Output Voltage Regulation (%)");
});
