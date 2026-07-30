import { expect, test } from "bun:test";
import { writeFileSync } from "node:fs";
import { convertCircuitJsonToSimulationGraphSvg } from "circuit-to-svg";
import type { AnyCircuitElementInput } from "circuit-json";
import type { SpiceEngine } from "@tscircuit/props";
import { Circuit } from "tscircuit";
import TPS63802Figure1010EfficiencyVsInputVoltagePwmOnlyCircuit from "../lib/simulations/TPS63802-Figure-10-10-efficiency-vs-input-voltage-pwm-only.circuit";
import TPS63802Figure105EfficiencyVsOutputCurrentPfmPwmCircuit from "../lib/simulations/TPS63802-Figure-10-5-efficiency-vs-output-current-pfm-pwm.circuit";
import TPS63802Figure106EfficiencyVsOutputCurrentPwmOnlyCircuit from "../lib/simulations/TPS63802-Figure-10-6-efficiency-vs-output-current-pwm-only.circuit";
import TPS63802Figure107EfficiencyVsOutputCurrentPfmPwmCircuit from "../lib/simulations/TPS63802-Figure-10-7-efficiency-vs-output-current-pfm-pwm.circuit";
import TPS63802Figure108EfficiencyVsOutputCurrentPwmOnlyCircuit from "../lib/simulations/TPS63802-Figure-10-8-efficiency-vs-output-current-pwm-only.circuit";
import TPS63802Figure109EfficiencyVsInputVoltagePfmPwmCircuit from "../lib/simulations/TPS63802-Figure-10-9-efficiency-vs-input-voltage-pfm-pwm.circuit";
import { combineMeasurementSeriesForGraph } from "../lib/simulations/combine-measurement-series-for-graph";

const efficiencyFixtureEngine: SpiceEngine = {
  async simulate(spiceString) {
    const probes = Array.from(
      spiceString.matchAll(/^\* tscircuit(?:_current)?_probe (\{.+\})$/gm),
      (match) =>
        JSON.parse(match[1]!) as {
          name: string;
          simulation_current_probe_id?: string;
          simulation_voltage_probe_id?: string;
        },
    );
    const simulationResultCircuitJson: AnyCircuitElementInput[] = [];
    for (const [index, probe] of probes.entries()) {
      if (probe.simulation_voltage_probe_id) {
        simulationResultCircuitJson.push({
          type: "simulation_transient_voltage_graph",
          simulation_transient_voltage_graph_id: `fixture_voltage_${index}`,
          simulation_experiment_id: "fixture",
          source_probe_id: probe.simulation_voltage_probe_id,
          timestamps_ms: [0, 1],
          voltage_levels: probe.name === "V_IN_PROBE" ? [3.6, 3.6] : [3.3, 3.3],
          time_per_step: 1,
          start_time_ms: 0,
          end_time_ms: 1,
        } as AnyCircuitElementInput);
      }
      if (probe.simulation_current_probe_id) {
        simulationResultCircuitJson.push({
          type: "simulation_transient_current_graph",
          simulation_transient_current_graph_id: `fixture_current_${index}`,
          simulation_experiment_id: "fixture",
          source_probe_id: probe.simulation_current_probe_id,
          timestamps_ms: [0, 1],
          current_levels: probe.name === "I_IN_PROBE" ? [1, 1] : [0.9, 0.9],
          time_per_step: 1,
          start_time_ms: 0,
          end_time_ms: 1,
        } as AnyCircuitElementInput);
      }
    }
    return { simulationResultCircuitJson };
  },
};

const renderEfficiencyFigure = async ({
  circuitElement,
  outputPath,
  xAxisScale,
}: {
  circuitElement: React.ReactElement;
  outputPath: string;
  xAxisScale?: "linear" | "logarithmic";
}) => {
  const circuit = new Circuit({
    platform: { spiceEngineMap: { ngspice: efficiencyFixtureEngine } },
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
    y_axis_title: "Efficiency (%)",
  });
  writeFileSync(outputPath, svg);
  return { measurements, svg };
};

test("Figure 10-5. Efficiency versus Output Current (PFM/PWM)", async () => {
  const { measurements, svg } = await renderEfficiencyFigure({
    circuitElement: (
      <TPS63802Figure105EfficiencyVsOutputCurrentPfmPwmCircuit name="figure_10_5" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-5.svg",
    xAxisScale: "logarithmic",
  });

  expect(measurements[0]?.measurement_values).toHaveLength(18);
  expect(svg).toContain("Output Current (A)");
  expect(svg).toContain(">Input Voltage</tspan>");
  expect(svg).toContain(">2.5V</tspan>");
  expect(svg).toContain(">4.2V</tspan>");
});

test("Figure 10-6. Efficiency versus Output Current (PWM Only)", async () => {
  const { measurements, svg } = await renderEfficiencyFigure({
    circuitElement: (
      <TPS63802Figure106EfficiencyVsOutputCurrentPwmOnlyCircuit name="figure_10_6" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-6.svg",
    xAxisScale: "logarithmic",
  });

  expect(measurements[0]?.measurement_values).toHaveLength(18);
  expect(svg).toContain("Output Current (A)");
});

test("Figure 10-7. Efficiency versus Output Current (PFM/PWM)", async () => {
  const { measurements, svg } = await renderEfficiencyFigure({
    circuitElement: (
      <TPS63802Figure107EfficiencyVsOutputCurrentPfmPwmCircuit name="figure_10_7" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-7.svg",
    xAxisScale: "logarithmic",
  });

  expect(measurements[0]?.measurement_values).toHaveLength(18);
  expect(svg).toContain(">Input Voltage</tspan>");
  expect(svg).toContain(">1.8V</tspan>");
  expect(svg).toContain(">5V</tspan>");
});

test("Figure 10-8. Efficiency versus Output Current (PWM Only)", async () => {
  const { measurements, svg } = await renderEfficiencyFigure({
    circuitElement: (
      <TPS63802Figure108EfficiencyVsOutputCurrentPwmOnlyCircuit name="figure_10_8" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-8.svg",
    xAxisScale: "logarithmic",
  });

  expect(measurements[0]?.measurement_values).toHaveLength(18);
  expect(svg).toContain("Output Current (A)");
});

test("Figure 10-9. Efficiency versus Input Voltage (PFM/PWM)", async () => {
  const { measurements, svg } = await renderEfficiencyFigure({
    circuitElement: (
      <TPS63802Figure109EfficiencyVsInputVoltagePfmPwmCircuit name="figure_10_9" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-9.svg",
  });

  expect(measurements).toHaveLength(1);
  expect(measurements[0]?.measurement_values).toHaveLength(50);
  expect(measurements[0]?.measurement_values[0]).toBeCloseTo(82.5, 6);
  expect(svg).toContain("Input Voltage (V)");
  expect(svg).toContain(">Output</tspan>");
  expect(svg).toContain(">Current</tspan>");
  expect(svg).toContain(">0.0001A</tspan>");
  expect(svg).toContain("Efficiency (%)");
});

test("Figure 10-10. Efficiency versus Input Voltage (PWM Only)", async () => {
  const { measurements, svg } = await renderEfficiencyFigure({
    circuitElement: (
      <TPS63802Figure1010EfficiencyVsInputVoltagePwmOnlyCircuit name="figure_10_10" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-10.svg",
  });

  expect(measurements).toHaveLength(3);
  expect(
    measurements.flatMap((measurement) => measurement.measurement_values),
  ).toHaveLength(24);
  expect(svg).toContain("VO = 1.8 V");
  expect(svg).toContain("VO = 3.3 V");
  expect(svg).toContain("VO = 5.2 V");
  expect(svg).toContain("Efficiency (%)");
});
