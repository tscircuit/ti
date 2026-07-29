import { expect, test } from "bun:test";
import type { AnyCircuitElementInput } from "circuit-json";
import type { SpiceEngine } from "@tscircuit/props";
import { Circuit } from "tscircuit";
import TPS63802Figure1015SwitchingWaveformsPfmBoostOperationCircuit from "../lib/simulations/TPS63802-Figure-10-15-switching-waveforms-pfm-boost-operation.circuit";
import TPS63802Figure1016SwitchingWaveformsPfmBuckBoostOperationCircuit from "../lib/simulations/TPS63802-Figure-10-16-switching-waveforms-pfm-buck-boost-operation.circuit";
import TPS63802Figure1017SwitchingWaveformsPfmBuckOperationCircuit from "../lib/simulations/TPS63802-Figure-10-17-switching-waveforms-pfm-buck-operation.circuit";
import TPS63802Figure1018SwitchingWaveformsPwmBoostOperationCircuit from "../lib/simulations/TPS63802-Figure-10-18-switching-waveforms-pwm-boost-operation.circuit";
import TPS63802Figure1019SwitchingWaveformsPwmBuckBoostOperationCircuit from "../lib/simulations/TPS63802-Figure-10-19-switching-waveforms-pwm-buck-boost-operation.circuit";
import TPS63802Figure1020SwitchingWaveformsPwmBuckOperationCircuit from "../lib/simulations/TPS63802-Figure-10-20-switching-waveforms-pwm-buck-operation.circuit";

const timestampsMs = Array.from({ length: 401 }, (_, index) => index / 20_000);

const switchingFixtureEngine: SpiceEngine = {
  async simulate(spiceString) {
    const probes = Array.from(
      spiceString.matchAll(/^\* tscircuit(?:_current)?_probe (\{.+\})$/gm),
      (match) =>
        JSON.parse(match[1]!) as {
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
          timestamps_ms: timestampsMs,
          voltage_levels: timestampsMs.map(
            (timeMs) =>
              3.3 + 0.01 * Math.sin(2 * Math.PI * 2_000_000 * (timeMs / 1_000)),
          ),
          time_per_step: 0.00005,
          start_time_ms: 0,
          end_time_ms: 0.02,
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
              1 + 0.5 * Math.sin(2 * Math.PI * 2_000_000 * (timeMs / 1_000)),
          ),
          time_per_step: 0.00005,
          start_time_ms: 0,
          end_time_ms: 0.02,
        } as AnyCircuitElementInput);
      }
    }
    return { simulationResultCircuitJson };
  },
};

const verifySwitchingWaveformFigure = async (
  circuitElement: React.ReactElement,
) => {
  const circuit = new Circuit({
    platform: { spiceEngineMap: { ngspice: switchingFixtureEngine } },
  });
  circuit.add(circuitElement);
  await circuit.renderUntilSettled();

  expect(circuit.db.simulation_unknown_experiment_error.list()).toHaveLength(0);
  expect(circuit.db.simulation_transient_voltage_graph.list()).toHaveLength(3);
  expect(circuit.db.simulation_transient_current_graph.list()).toHaveLength(1);
};

test("Figure 10-15. Switching Waveforms, PFM Boost Operation", async () => {
  await verifySwitchingWaveformFigure(
    <TPS63802Figure1015SwitchingWaveformsPfmBoostOperationCircuit name="figure_10_15" />,
  );
});

test("Figure 10-16. Switching Waveforms, PFM Buck-Boost Operation", async () => {
  await verifySwitchingWaveformFigure(
    <TPS63802Figure1016SwitchingWaveformsPfmBuckBoostOperationCircuit name="figure_10_16" />,
  );
});

test("Figure 10-17. Switching Waveforms, PFM Buck Operation", async () => {
  await verifySwitchingWaveformFigure(
    <TPS63802Figure1017SwitchingWaveformsPfmBuckOperationCircuit name="figure_10_17" />,
  );
});

test("Figure 10-18. Switching Waveforms, PWM Boost Operation", async () => {
  await verifySwitchingWaveformFigure(
    <TPS63802Figure1018SwitchingWaveformsPwmBoostOperationCircuit name="figure_10_18" />,
  );
});

test("Figure 10-19. Switching Waveforms, PWM Buck-Boost Operation", async () => {
  await verifySwitchingWaveformFigure(
    <TPS63802Figure1019SwitchingWaveformsPwmBuckBoostOperationCircuit name="figure_10_19" />,
  );
});

test("Figure 10-20. Switching Waveforms, PWM Buck Operation", async () => {
  await verifySwitchingWaveformFigure(
    <TPS63802Figure1020SwitchingWaveformsPwmBuckOperationCircuit name="figure_10_20" />,
  );
});
