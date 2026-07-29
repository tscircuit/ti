import { expect, test } from "bun:test";
import { writeFileSync } from "node:fs";
import { convertCircuitJsonToSimulationGraphSvg } from "circuit-to-svg";
import { Circuit } from "tscircuit";
import TPS63802Figure1021LoadTransientPfmPwmBoostOperationCircuit from "../lib/simulations/TPS63802-Figure-10-21-load-transient-pfm-pwm-boost-operation.circuit";
import TPS63802Figure1027LineTransientPwmOperationCircuit from "../lib/simulations/TPS63802-Figure-10-27-line-transient-pwm-operation.circuit";
import { createCdnNgspiceSpiceEngine } from "../lib/spice/create-encrypted-pspice-ngspice-engine";

const datasheetSimulationTest =
  process.env.RUN_TPS63802_DATASHEET_SIMULATIONS === "1" ? test : test.skip;

const renderSimulationFigure = async ({
  circuitElement,
  outputPath,
}: {
  circuitElement: React.ReactElement;
  outputPath: string;
}) => {
  const circuit = new Circuit({
    platform: {
      spiceEngineMap: {
        ngspice: {
          async simulate(spiceString) {
            writeFileSync(`${outputPath}.spice`, spiceString);
            return createCdnNgspiceSpiceEngine().simulate(spiceString);
          },
        },
      },
    },
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
  return circuit;
};

datasheetSimulationTest(
  "Figure 10-21. Load Transient, PFM/PWM Boost Operation",
  async () => {
    const circuit = await renderSimulationFigure({
      circuitElement: (
        <TPS63802Figure1021LoadTransientPfmPwmBoostOperationCircuit name="figure_10_21" />
      ),
      outputPath: "/tmp/TPS63802-Figure-10-21.svg",
    });

    expect(circuit.db.simulation_transient_voltage_graph.list()).toHaveLength(
      1,
    );
    expect(circuit.db.simulation_transient_current_graph.list()).toHaveLength(
      1,
    );
  },
  2_000_000,
);

datasheetSimulationTest(
  "Figure 10-27. Line Transient, PWM Operation",
  async () => {
    const circuit = await renderSimulationFigure({
      circuitElement: (
        <TPS63802Figure1027LineTransientPwmOperationCircuit name="figure_10_27" />
      ),
      outputPath: "/tmp/TPS63802-Figure-10-27.svg",
    });

    expect(circuit.db.simulation_transient_voltage_graph.list()).toHaveLength(
      2,
    );
    expect(circuit.db.simulation_transient_current_graph.list()).toHaveLength(
      0,
    );
  },
  2_000_000,
);
