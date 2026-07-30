import { expect, test } from "bun:test";
import type { AnyCircuitElementInput } from "circuit-json";
import type { SpiceEngine } from "@tscircuit/props";
import { Circuit } from "tscircuit";
import Figure102 from "../lib/simulations/TPS63802-Figure-10-2-output-current-capability-vs-input-voltage.circuit";

const outputCapabilityFixtureEngine: SpiceEngine = {
  async simulate(spiceString) {
    const probes = Array.from(
      spiceString.matchAll(/^\* tscircuit_probe (\{.+\})$/gm),
      (match) =>
        JSON.parse(match[1]!) as {
          name: string;
          simulation_voltage_probe_id: string;
        },
    );
    return {
      simulationResultCircuitJson: probes.map(
        (probe, index) =>
          ({
            type: "simulation_transient_voltage_graph",
            simulation_transient_voltage_graph_id: `fixture_voltage_${index}`,
            simulation_experiment_id: "fixture",
            source_probe_id: probe.simulation_voltage_probe_id,
            timestamps_ms: [0, 1],
            voltage_levels:
              probe.name === "V_FB_PROBE" ? [0.5, 0.5] : [3.3, 3.3],
            time_per_step: 1,
            start_time_ms: 0,
            end_time_ms: 1,
          }) as AnyCircuitElementInput,
      ),
    };
  },
};

test("Figure 10-2. Typical Output Current Capability versus Input Voltage", async () => {
  const circuit = new Circuit({
    platform: { spiceEngineMap: { ngspice: outputCapabilityFixtureEngine } },
  });
  circuit.add(<Figure102 name="figure_10_2" />);
  await circuit.renderUntilSettled();

  expect(circuit.db.simulation_unknown_experiment_error.list()).toHaveLength(0);
  const measurements = circuit.db.simulation_measurement_result.list();
  expect(measurements).toHaveLength(6);
  for (const measurement of measurements) {
    expect([16, 128]).toContain(measurement.measurement_values.length);
    expect([1, 2]).toContain(
      measurement.simulation_parameter_sweep_coordinate_sets?.[0]?.length ?? 0,
    );
  }
}, 120_000);
