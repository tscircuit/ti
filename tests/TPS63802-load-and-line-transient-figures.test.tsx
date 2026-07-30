import { expect, test } from "bun:test";
import type { AnyCircuitElementInput } from "circuit-json";
import type { SpiceEngine } from "@tscircuit/props";
import { Circuit } from "tscircuit";
import Figure1021 from "../lib/simulations/TPS63802-Figure-10-21-load-transient-pfm-pwm-boost-operation.circuit";
import Figure1022 from "../lib/simulations/TPS63802-Figure-10-22-load-transient-pfm-pwm-buck-boost-operation.circuit";
import Figure1023 from "../lib/simulations/TPS63802-Figure-10-23-load-transient-pfm-pwm-buck-operation.circuit";
import Figure1024 from "../lib/simulations/TPS63802-Figure-10-24-load-transient-pwm-boost-operation.circuit";
import Figure1025 from "../lib/simulations/TPS63802-Figure-10-25-load-transient-pwm-buck-boost-operation.circuit";
import Figure1026 from "../lib/simulations/TPS63802-Figure-10-26-load-transient-pwm-buck-operation.circuit";
import Figure1027 from "../lib/simulations/TPS63802-Figure-10-27-line-transient-pwm-operation.circuit";
import Figure1028 from "../lib/simulations/TPS63802-Figure-10-28-line-transient-pwm-operation.circuit";
import Figure1029 from "../lib/simulations/TPS63802-Figure-10-29-line-transient-pwm-operation.circuit";

const timestampsMs = [0.65, 0.75, 1.15, 1.45];

const transientFixtureEngine: SpiceEngine = {
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
          timestamps_ms: timestampsMs,
          voltage_levels:
            probe.name === "V_IN_PROBE"
              ? [2.2, 4.2, 4.2, 2.2]
              : [3.3, 3.25, 3.3, 3.35],
          time_per_step: 0.1,
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
          current_levels: [0.1, 1, 1, 0.1],
          time_per_step: 0.1,
          start_time_ms: timestampsMs[0]!,
          end_time_ms: timestampsMs.at(-1)!,
        } as AnyCircuitElementInput);
      }
    }
    return { simulationResultCircuitJson };
  },
};

const verifyTransientFigure = async ({
  circuitElement,
  currentGraphCount,
  voltageGraphCount,
}: {
  circuitElement: React.ReactElement;
  currentGraphCount: number;
  voltageGraphCount: number;
}) => {
  const circuit = new Circuit({
    platform: { spiceEngineMap: { ngspice: transientFixtureEngine } },
  });
  circuit.add(circuitElement);
  await circuit.renderUntilSettled();

  expect(circuit.db.simulation_unknown_experiment_error.list()).toHaveLength(0);
  expect(circuit.db.simulation_transient_voltage_graph.list()).toHaveLength(
    voltageGraphCount,
  );
  expect(circuit.db.simulation_transient_current_graph.list()).toHaveLength(
    currentGraphCount,
  );
};

test("Figure 10-21. Load Transient, PFM/PWM Boost Operation", async () => {
  await verifyTransientFigure({
    circuitElement: <Figure1021 name="figure_10_21" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
  });
});

test("Figure 10-22. Load Transient, PFM/PWM Buck-Boost Operation", async () => {
  await verifyTransientFigure({
    circuitElement: <Figure1022 name="figure_10_22" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
  });
});

test("Figure 10-23. Load Transient, PFM/PWM Buck Operation", async () => {
  await verifyTransientFigure({
    circuitElement: <Figure1023 name="figure_10_23" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
  });
});

test("Figure 10-24. Load Transient, PWM Boost Operation", async () => {
  await verifyTransientFigure({
    circuitElement: <Figure1024 name="figure_10_24" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
  });
});

test("Figure 10-25. Load Transient, PWM Buck-Boost Operation", async () => {
  await verifyTransientFigure({
    circuitElement: <Figure1025 name="figure_10_25" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
  });
});

test("Figure 10-26. Load Transient, PWM Buck Operation", async () => {
  await verifyTransientFigure({
    circuitElement: <Figure1026 name="figure_10_26" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
  });
});

test("Figure 10-27. Line Transient, PWM Operation", async () => {
  await verifyTransientFigure({
    circuitElement: <Figure1027 name="figure_10_27" />,
    voltageGraphCount: 2,
    currentGraphCount: 0,
  });
});

test("Figure 10-28. Line Transient, PWM Operation", async () => {
  await verifyTransientFigure({
    circuitElement: <Figure1028 name="figure_10_28" />,
    voltageGraphCount: 2,
    currentGraphCount: 0,
  });
});

test("Figure 10-29. Line Transient, PWM Operation", async () => {
  await verifyTransientFigure({
    circuitElement: <Figure1029 name="figure_10_29" />,
    voltageGraphCount: 2,
    currentGraphCount: 0,
  });
});
