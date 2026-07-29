import { expect, test } from "bun:test";
import { writeFileSync } from "node:fs";
import { convertCircuitJsonToSimulationGraphSvg } from "circuit-to-svg";
import type { AnyCircuitElementInput } from "circuit-json";
import type { SpiceEngine } from "@tscircuit/props";
import { Circuit } from "tscircuit";
import TPS63802Figure1030StartupFromRisingEnablePfmCircuit from "../lib/simulations/TPS63802-Figure-10-30-start-up-behavior-from-rising-enable-pfm-operation.circuit";
import TPS63802Figure1031StartupFromRisingEnablePwmCircuit from "../lib/simulations/TPS63802-Figure-10-31-start-up-behavior-from-rising-enable-pwm-operation.circuit";

const timestampsMs = Array.from({ length: 901 }, (_, index) => index / 1_000);

const startupFixtureEngine: SpiceEngine = {
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
        const voltageLevels = timestampsMs.map((timeMs) => {
          if (probe.name === "V_ENABLE_PROBE") return timeMs < 0.301 ? 0 : 2.2;
          if (probe.name === "V_POWER_GOOD_PROBE")
            return timeMs < 0.52 ? 0 : 2.2;
          if (timeMs < 0.301) return 0;
          return Math.min(3.3, ((timeMs - 0.301) / 0.2) * 3.3);
        });
        simulationResultCircuitJson.push({
          type: "simulation_transient_voltage_graph",
          simulation_transient_voltage_graph_id: `fixture_voltage_${index}`,
          simulation_experiment_id: "fixture",
          source_probe_id: probe.simulation_voltage_probe_id,
          timestamps_ms: timestampsMs,
          voltage_levels: voltageLevels,
          time_per_step: 0.001,
          start_time_ms: 0,
          end_time_ms: 0.9,
        } as AnyCircuitElementInput);
      }
      if (probe.simulation_current_probe_id) {
        simulationResultCircuitJson.push({
          type: "simulation_transient_current_graph",
          simulation_transient_current_graph_id: `fixture_current_${index}`,
          simulation_experiment_id: "fixture",
          source_probe_id: probe.simulation_current_probe_id,
          timestamps_ms: timestampsMs,
          current_levels: timestampsMs.map((timeMs) =>
            timeMs < 0.301
              ? 0
              : 0.4 + 0.2 * Math.sin(2 * Math.PI * 20_000 * (timeMs / 1_000)),
          ),
          time_per_step: 0.001,
          start_time_ms: 0,
          end_time_ms: 0.9,
        } as AnyCircuitElementInput);
      }
    }
    return { simulationResultCircuitJson };
  },
};

const renderStartupFigure = async ({
  circuitElement,
  outputPath,
}: {
  circuitElement: React.ReactElement;
  outputPath: string;
}) => {
  const circuit = new Circuit({
    platform: { spiceEngineMap: { ngspice: startupFixtureEngine } },
  });
  circuit.add(circuitElement);
  await circuit.renderUntilSettled();

  expect(circuit.db.simulation_unknown_experiment_error.list()).toHaveLength(0);
  const experiment = circuit.db.simulation_experiment.list()[0]!;
  const svg = convertCircuitJsonToSimulationGraphSvg({
    circuitJson: circuit.getCircuitJson(),
    simulation_experiment_id: experiment.simulation_experiment_id,
  });
  writeFileSync(outputPath, svg);
  return { circuit, svg };
};

test("Figure 10-30. Start-up Behavior from Rising Enable, PFM Operation", async () => {
  const { circuit, svg } = await renderStartupFigure({
    circuitElement: (
      <TPS63802Figure1030StartupFromRisingEnablePfmCircuit name="figure_10_30" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-30.svg",
  });

  expect(circuit.db.simulation_transient_voltage_graph.list()).toHaveLength(3);
  expect(circuit.db.simulation_transient_current_graph.list()).toHaveLength(1);
  expect(svg).toContain("Figure 10-30.");
  expect(svg).toContain(">EN<");
  expect(svg).toContain(">PG<");
  expect(svg).toContain(">IL<");
});

test("Figure 10-31. Start-up Behavior from Rising Enable, PWM Operation", async () => {
  const { circuit, svg } = await renderStartupFigure({
    circuitElement: (
      <TPS63802Figure1031StartupFromRisingEnablePwmCircuit name="figure_10_31" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-31.svg",
  });

  expect(circuit.db.simulation_transient_voltage_graph.list()).toHaveLength(3);
  expect(circuit.db.simulation_transient_current_graph.list()).toHaveLength(1);
  expect(svg).toContain("Figure 10-31.");
});
