import { expect, test } from "bun:test";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import {
  convertCircuitJsonToSchematicSimulationSvg,
  convertCircuitJsonToSimulationGraphSvg,
} from "circuit-to-svg";
import { Circuit } from "tscircuit";
import Figure102 from "../lib/simulations/TPS63802-figure-10-2-output-current-capability.circuit";
import Figure103 from "../lib/simulations/TPS63802-figure-10-3-switching-frequency.circuit";
import Figure104 from "../lib/simulations/TPS63802-figure-10-4-burst-frequency.circuit";
import Figure105 from "../lib/simulations/TPS63802-figure-10-5-efficiency-output-current-pfm.circuit";
import Figure106 from "../lib/simulations/TPS63802-figure-10-6-efficiency-output-current-pwm.circuit";
import Figure107 from "../lib/simulations/TPS63802-figure-10-7-efficiency-output-current-pfm.circuit";
import Figure108 from "../lib/simulations/TPS63802-figure-10-8-efficiency-output-current-pwm.circuit";
import Figure109 from "../lib/simulations/TPS63802-figure-10-9-efficiency-input-voltage-pfm.circuit";
import Figure1010 from "../lib/simulations/TPS63802-figure-10-10-efficiency-input-voltage-pwm.circuit";
import Figure1011 from "../lib/simulations/TPS63802-figure-10-11-load-regulation-pwm.circuit";
import Figure1012 from "../lib/simulations/TPS63802-figure-10-12-load-regulation-pfm.circuit";
import Figure1013 from "../lib/simulations/TPS63802-figure-10-13-line-regulation-pwm.circuit";
import Figure1014 from "../lib/simulations/TPS63802-figure-10-14-line-regulation-pfm.circuit";
import { createNativeNgspiceEngine } from "./helpers/create-native-ngspice-engine";

const datasheetSimulationTest =
  process.env.RUN_TPS63802_DATASHEET_SIMULATIONS === "1" ? test : test.skip;
const updateSnapshots = process.env.UPDATE_TPS63802_DATASHEET_SNAPSHOTS === "1";
const useSimulationCache =
  process.env.CACHE_TPS63802_DATASHEET_SIMULATIONS === "1";
const snapshotDirectory = resolve(
  import.meta.dir,
  "../lib/simulations/__snapshots__",
);

const blackRedGray = ["#111111", "#ff1f1f", "#b7b7b7"];
const figures = [
  {
    name: "Figure 10-2. Typical Output Current Capability versus Input Voltage",
    slug: "TPS63802-figure-10-2-output-current-capability",
    element: <Figure102 name="figure_10_2" />,
    expectedValueCount: 27,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 1.3,
      x_axis_max: 5.55,
      x_axis_tick_values: [1.3, 1.8, 2.3, 2.8, 3.3, 3.8, 4.3, 4.8, 5.3],
      y_axis_min: 0,
      y_axis_max: 4.5,
      y_axis_tick_values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    },
  },
  {
    name: "Figure 10-3. Typical Inductor Switching Frequency versus Input Voltage",
    slug: "TPS63802-figure-10-3-switching-frequency",
    element: <Figure103 name="figure_10_3" />,
    expectedValueCount: 33,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 2.5,
      x_axis_max: 4.3,
      x_axis_tick_values: [2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3],
      y_axis_min: 0.5,
      y_axis_max: 3,
      y_axis_tick_values: [0.5, 1, 1.5, 2, 2.5, 3],
    },
  },
  {
    name: "Figure 10-4. Typical Inductor Burst Frequency versus Output Current",
    slug: "TPS63802-figure-10-4-burst-frequency",
    element: <Figure104 name="figure_10_4" />,
    expectedValueCount: 30,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 0.001,
      x_axis_max: 2,
      y_axis_min: 1_000,
      y_axis_max: 1_000_000,
    },
  },
  {
    name: "Figure 10-5. Efficiency versus Output Current (PFM/PWM)",
    slug: "TPS63802-figure-10-5-efficiency-output-current-pfm",
    element: <Figure105 name="figure_10_5" />,
    expectedValueCount: 39,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 0.0001,
      x_axis_max: 2,
      y_axis_min: 60,
      y_axis_max: 100,
      y_axis_tick_values: [60, 70, 80, 90, 100],
    },
  },
  {
    name: "Figure 10-6. Efficiency versus Output Current (PWM Only)",
    slug: "TPS63802-figure-10-6-efficiency-output-current-pwm",
    element: <Figure106 name="figure_10_6" />,
    expectedValueCount: 33,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 0.001,
      x_axis_max: 2,
      y_axis_min: 0,
      y_axis_max: 100,
      y_axis_tick_values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
  },
  {
    name: "Figure 10-7. Efficiency versus Output Current (PFM/PWM)",
    slug: "TPS63802-figure-10-7-efficiency-output-current-pfm",
    element: <Figure107 name="figure_10_7" />,
    expectedValueCount: 39,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 0.0001,
      x_axis_max: 2,
      y_axis_min: 60,
      y_axis_max: 100,
      y_axis_tick_values: [60, 70, 80, 90, 100],
    },
  },
  {
    name: "Figure 10-8. Efficiency versus Output Current (PWM Only)",
    slug: "TPS63802-figure-10-8-efficiency-output-current-pwm",
    element: <Figure108 name="figure_10_8" />,
    expectedValueCount: 33,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 0.001,
      x_axis_max: 2,
      y_axis_min: 0,
      y_axis_max: 100,
      y_axis_tick_values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
  },
  {
    name: "Figure 10-9. Efficiency versus Input Voltage (PFM/PWM)",
    slug: "TPS63802-figure-10-9-efficiency-input-voltage-pfm",
    element: <Figure109 name="figure_10_9" />,
    expectedValueCount: 50,
    graphOptions: {
      series_colors: ["#111111", "#ff1f1f", "#b7b7b7", "#2171b5", "#238b45"],
      x_axis_min: 2.5,
      x_axis_max: 4.2,
      x_axis_tick_values: [2.5, 2.9, 3.3, 3.7, 4.1, 4.2],
      y_axis_min: 50,
      y_axis_max: 100,
      y_axis_tick_values: [50, 60, 70, 80, 90, 100],
    },
  },
  {
    name: "Figure 10-10. Efficiency versus Input Voltage (PWM Only)",
    slug: "TPS63802-figure-10-10-efficiency-input-voltage-pwm",
    element: <Figure1010 name="figure_10_10" />,
    expectedValueCount: 24,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 1.8,
      x_axis_max: 5.5,
      x_axis_tick_values: [1.8, 2.3, 2.8, 3.3, 3.8, 4.3, 4.8, 5.3],
      y_axis_min: 60,
      y_axis_max: 100,
      y_axis_tick_values: [60, 70, 80, 90, 100],
    },
  },
  {
    name: "Figure 10-11. Load Regulation (PWM Only)",
    slug: "TPS63802-figure-10-11-load-regulation-pwm",
    element: <Figure1011 name="figure_10_11" />,
    expectedValueCount: 39,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 0,
      x_axis_max: 2,
      x_axis_tick_values: [0, 0.5, 1, 1.5, 2],
      y_axis_min: -0.3,
      y_axis_max: 0.2,
      y_axis_tick_values: [-0.3, -0.2, -0.1, 0, 0.1, 0.2],
    },
  },
  {
    name: "Figure 10-12. Load Regulation (PFM/PWM)",
    slug: "TPS63802-figure-10-12-load-regulation-pfm",
    element: <Figure1012 name="figure_10_12" />,
    expectedValueCount: 39,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 0,
      x_axis_max: 2,
      x_axis_tick_values: [0, 0.5, 1, 1.5, 2],
      y_axis_min: -1.5,
      y_axis_max: 1.5,
      y_axis_tick_values: [-1.5, -1, -0.5, 0, 0.5, 1, 1.5],
    },
  },
  {
    name: "Figure 10-13. Line Regulation (PWM Only)",
    slug: "TPS63802-figure-10-13-line-regulation-pwm",
    element: <Figure1013 name="figure_10_13" />,
    expectedValueCount: 30,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 2.5,
      x_axis_max: 4.3,
      x_axis_tick_values: [2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3],
      y_axis_min: -0.3,
      y_axis_max: 0.3,
      y_axis_tick_values: [-0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3],
    },
  },
  {
    name: "Figure 10-14. Line Regulation (PFM/PWM)",
    slug: "TPS63802-figure-10-14-line-regulation-pfm",
    element: <Figure1014 name="figure_10_14" />,
    expectedValueCount: 30,
    graphOptions: {
      series_colors: blackRedGray,
      x_axis_min: 2.5,
      x_axis_max: 4.3,
      x_axis_tick_values: [2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3],
      y_axis_min: -0.2,
      y_axis_max: 0.2,
      y_axis_tick_values: [-0.2, -0.1, 0, 0.1, 0.2],
    },
  },
];

const verifyOrUpdateSnapshot = ({ snapshotPath, svg }) => {
  if (updateSnapshots) {
    writeFileSync(snapshotPath, svg);
    return;
  }
  expect(existsSync(snapshotPath)).toBe(true);
  expect(svg).toBe(readFileSync(snapshotPath, "utf8"));
};

const renderFigure = async (figure) => {
  const circuit = new Circuit({
    platform: {
      spiceEngineMap: {
        ngspice: createNativeNgspiceEngine({
          useCache: useSimulationCache,
        }),
      },
    },
  });
  circuit.add(figure.element);
  await circuit.renderUntilSettled();

  expect(circuit.db.simulation_unknown_experiment_error.list()).toEqual([]);
  const experiments = circuit.db.simulation_experiment.list();
  const measurements = circuit.db.simulation_measurement_result.list();
  expect(experiments).toHaveLength(1);
  expect(measurements).toHaveLength(1);
  const experiment = experiments[0];
  const measurement = measurements[0];
  if (experiment === undefined || measurement === undefined) {
    throw new Error(`${figure.name} did not produce a measurement experiment`);
  }
  expect(measurement.measurement_values).toHaveLength(
    figure.expectedValueCount,
  );
  expect(measurement.measurement_values.every(Number.isFinite)).toBe(true);

  const circuitJson = circuit.getCircuitJson();
  const rendererOptions = {
    circuitJson,
    simulation_experiment_id: experiment.simulation_experiment_id,
    simulation_result_ids: [measurement.simulation_measurement_result_id],
    ...figure.graphOptions,
  };
  const graphSvg = convertCircuitJsonToSimulationGraphSvg({
    ...rendererOptions,
    width: 900,
    height: 650,
  });
  const schematicGraphSvg = convertCircuitJsonToSchematicSimulationSvg({
    ...rendererOptions,
    width: 1200,
    height: 1200,
  });

  verifyOrUpdateSnapshot({
    snapshotPath: join(
      snapshotDirectory,
      `${figure.slug}.circuit-simulation.snap.svg`,
    ),
    svg: graphSvg,
  });
  verifyOrUpdateSnapshot({
    snapshotPath: join(
      snapshotDirectory,
      `${figure.slug}.circuit-schematic-simulation.snap.svg`,
    ),
    svg: schematicGraphSvg,
  });
};

for (const figure of figures) {
  datasheetSimulationTest(figure.name, () => renderFigure(figure), 3_600_000);
}
