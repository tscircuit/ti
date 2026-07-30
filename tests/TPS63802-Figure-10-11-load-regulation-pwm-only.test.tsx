import { expect, test } from "bun:test";
import { writeFileSync } from "node:fs";
import { convertCircuitJsonToSimulationGraphSvg } from "circuit-to-svg";
import type { SpiceEngine } from "@tscircuit/props";
import { Circuit } from "tscircuit";
import { TPS63802Figure1011LoadRegulationPwmOnlyCircuit } from "../lib/simulations/TPS63802-Figure-10-11-load-regulation-pwm-only.circuit";
import { TPS63802Figure1012LoadRegulationPfmPwmCircuit } from "../lib/simulations/TPS63802-Figure-10-12-load-regulation-pfm-pwm.circuit";
import { createCdnNgspiceSpiceEngine } from "../lib/spice/create-encrypted-pspice-ngspice-engine";

const fixtureEngine: SpiceEngine = {
  async simulate(spiceString) {
    const probeMetadata = spiceString.match(
      /^\* tscircuit_probe (\{.+\})$/m,
    )?.[1];
    if (!probeMetadata) throw new Error("VOUT probe metadata is missing");
    const probe = JSON.parse(probeMetadata) as {
      simulation_voltage_probe_id: string;
    };
    return {
      simulationResultCircuitJson: [
        {
          type: "simulation_transient_voltage_graph",
          simulation_transient_voltage_graph_id: "fixture_vout",
          simulation_experiment_id: "fixture",
          source_probe_id: probe.simulation_voltage_probe_id,
          timestamps_ms: [673, 696],
          voltage_levels: [3.3, 3.3],
          time_per_step: 23,
          start_time_ms: 673,
          end_time_ms: 696,
        },
      ],
    };
  },
};

const renderLoadRegulationFigure = async ({
  circuitElement,
  outputPath,
}: {
  circuitElement: React.ReactElement;
  outputPath: string;
}) => {
  const spiceEngine =
    process.env.RUN_TPS63802_DATASHEET_SIMULATIONS === "1"
      ? createCdnNgspiceSpiceEngine()
      : fixtureEngine;
  const circuit = new Circuit({
    platform: {
      spiceEngineMap: {
        ngspice: spiceEngine,
      },
    },
  });
  circuit.add(circuitElement);

  await circuit.renderUntilSettled();

  expect(circuit.db.simulation_unknown_experiment_error.list()).toHaveLength(0);
  const measurement = circuit.db.simulation_measurement_result.list()[0];
  expect(measurement?.measurement_values).toHaveLength(12);

  const experiment = circuit.db.simulation_experiment.list()[0]!;
  const svg = convertCircuitJsonToSimulationGraphSvg({
    circuitJson: circuit.getCircuitJson(),
    simulation_experiment_id: experiment.simulation_experiment_id,
    simulation_result_ids: [measurement!.simulation_measurement_result_id],
  });

  writeFileSync(outputPath, svg);
  expect(svg).toContain("Output Current (A)");
  expect(svg).toContain("Output Voltage Accuracy (%)");
};

test("Figure 10-11. Load Regulation (PWM Only)", async () => {
  await renderLoadRegulationFigure({
    circuitElement: (
      <TPS63802Figure1011LoadRegulationPwmOnlyCircuit name="figure_10_11" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-11.svg",
  });
}, 1_000_000);

test("Figure 10-12. Load Regulation (PFM/PWM)", async () => {
  await renderLoadRegulationFigure({
    circuitElement: (
      <TPS63802Figure1012LoadRegulationPfmPwmCircuit name="figure_10_12" />
    ),
    outputPath: "/tmp/TPS63802-Figure-10-12.svg",
  });
}, 1_000_000);
