import { expect, test } from "bun:test";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import {
  convertCircuitJsonToSchematicSimulationSvg,
  convertCircuitJsonToSimulationGraphSvg,
} from "circuit-to-svg";
import { Circuit } from "tscircuit";
import Figure1015 from "../lib/simulations/TPS63802-figure-10-15-switching-waveforms-pfm-boost.circuit";
import Figure1016 from "../lib/simulations/TPS63802-figure-10-16-switching-waveforms-pfm-buck-boost.circuit";
import Figure1017 from "../lib/simulations/TPS63802-figure-10-17-switching-waveforms-pfm-buck.circuit";
import Figure1018 from "../lib/simulations/TPS63802-figure-10-18-switching-waveforms-pwm-boost.circuit";
import Figure1019 from "../lib/simulations/TPS63802-figure-10-19-switching-waveforms-pwm-buck-boost.circuit";
import Figure1020 from "../lib/simulations/TPS63802-figure-10-20-switching-waveforms-pwm-buck.circuit";
import Figure1021 from "../lib/simulations/TPS63802-figure-10-21-load-transient-pfm-boost.circuit";
import Figure1022 from "../lib/simulations/TPS63802-figure-10-22-load-transient-pfm-buck-boost.circuit";
import Figure1023 from "../lib/simulations/TPS63802-figure-10-23-load-transient-pfm-buck.circuit";
import Figure1024 from "../lib/simulations/TPS63802-figure-10-24-load-transient-pwm-boost.circuit";
import Figure1025 from "../lib/simulations/TPS63802-figure-10-25-load-transient-pwm-buck-boost.circuit";
import Figure1026 from "../lib/simulations/TPS63802-figure-10-26-load-transient-pwm-buck.circuit";
import Figure1027 from "../lib/simulations/TPS63802-figure-10-27-line-transient-pwm-500ma.circuit";
import Figure1028 from "../lib/simulations/TPS63802-figure-10-28-line-transient-pwm-1a.circuit";
import Figure1029 from "../lib/simulations/TPS63802-figure-10-29-line-transient-pwm-3v-to-3v6.circuit";
import Figure1030 from "../lib/simulations/TPS63802-figure-10-30-startup-pfm.circuit";
import Figure1031 from "../lib/simulations/TPS63802-figure-10-31-startup-pwm.circuit";
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

const figures = [
  {
    name: "Figure 10-15. Switching Waveforms, PFM Boost Operation",
    slug: "TPS63802-figure-10-15-switching-waveforms-pfm-boost",
    element: <Figure1015 name="figure_10_15" />,
    expectedResultCount: 4,
  },
  {
    name: "Figure 10-16. Switching Waveforms, PFM Buck-Boost Operation",
    slug: "TPS63802-figure-10-16-switching-waveforms-pfm-buck-boost",
    element: <Figure1016 name="figure_10_16" />,
    expectedResultCount: 4,
  },
  {
    name: "Figure 10-17. Switching Waveforms, PFM Buck Operation",
    slug: "TPS63802-figure-10-17-switching-waveforms-pfm-buck",
    element: <Figure1017 name="figure_10_17" />,
    expectedResultCount: 4,
  },
  {
    name: "Figure 10-18. Switching Waveforms, PWM Boost Operation",
    slug: "TPS63802-figure-10-18-switching-waveforms-pwm-boost",
    element: <Figure1018 name="figure_10_18" />,
    expectedResultCount: 4,
  },
  {
    name: "Figure 10-19. Switching Waveforms, PWM Buck-Boost Operation",
    slug: "TPS63802-figure-10-19-switching-waveforms-pwm-buck-boost",
    element: <Figure1019 name="figure_10_19" />,
    expectedResultCount: 4,
  },
  {
    name: "Figure 10-20. Switching Waveforms, PWM Buck Operation",
    slug: "TPS63802-figure-10-20-switching-waveforms-pwm-buck",
    element: <Figure1020 name="figure_10_20" />,
    expectedResultCount: 4,
  },
  {
    name: "Figure 10-21. Load Transient, PFM/PWM Boost Operation",
    slug: "TPS63802-figure-10-21-load-transient-pfm-boost",
    element: <Figure1021 name="figure_10_21" />,
    expectedResultCount: 2,
  },
  {
    name: "Figure 10-22. Load Transient, PFM/PWM Buck-Boost Operation",
    slug: "TPS63802-figure-10-22-load-transient-pfm-buck-boost",
    element: <Figure1022 name="figure_10_22" />,
    expectedResultCount: 2,
  },
  {
    name: "Figure 10-23. Load Transient, PFM/PWM Buck Operation",
    slug: "TPS63802-figure-10-23-load-transient-pfm-buck",
    element: <Figure1023 name="figure_10_23" />,
    expectedResultCount: 2,
  },
  {
    name: "Figure 10-24. Load Transient, PWM Boost Operation",
    slug: "TPS63802-figure-10-24-load-transient-pwm-boost",
    element: <Figure1024 name="figure_10_24" />,
    expectedResultCount: 2,
  },
  {
    name: "Figure 10-25. Load Transient, PWM Buck-Boost Operation",
    slug: "TPS63802-figure-10-25-load-transient-pwm-buck-boost",
    element: <Figure1025 name="figure_10_25" />,
    expectedResultCount: 2,
  },
  {
    name: "Figure 10-26. Load Transient, PWM Buck Operation",
    slug: "TPS63802-figure-10-26-load-transient-pwm-buck",
    element: <Figure1026 name="figure_10_26" />,
    expectedResultCount: 2,
  },
  {
    name: "Figure 10-27. Line Transient, PWM Operation",
    slug: "TPS63802-figure-10-27-line-transient-pwm-500ma",
    element: <Figure1027 name="figure_10_27" />,
    expectedResultCount: 2,
  },
  {
    name: "Figure 10-28. Line Transient, PWM Operation",
    slug: "TPS63802-figure-10-28-line-transient-pwm-1a",
    element: <Figure1028 name="figure_10_28" />,
    expectedResultCount: 2,
  },
  {
    name: "Figure 10-29. Line Transient, PWM Operation",
    slug: "TPS63802-figure-10-29-line-transient-pwm-3v-to-3v6",
    element: <Figure1029 name="figure_10_29" />,
    expectedResultCount: 2,
  },
  {
    name: "Figure 10-30. Start-up Behavior from Rising Enable, PFM Operation",
    slug: "TPS63802-figure-10-30-startup-pfm",
    element: <Figure1030 name="figure_10_30" />,
    expectedResultCount: 4,
  },
  {
    name: "Figure 10-31. Start-up Behavior from Rising Enable, PWM Operation",
    slug: "TPS63802-figure-10-31-startup-pwm",
    element: <Figure1031 name="figure_10_31" />,
    expectedResultCount: 4,
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
  expect(experiments).toHaveLength(1);
  const experiment = experiments[0];
  if (experiment === undefined) {
    throw new Error(`${figure.name} did not produce a simulation experiment`);
  }
  const circuitJson = circuit.getCircuitJson();
  const transientResults = circuitJson.filter(
    (element) =>
      (element.type === "simulation_transient_voltage_graph" ||
        element.type === "simulation_transient_current_graph") &&
      element.simulation_experiment_id === experiment.simulation_experiment_id,
  );
  expect(transientResults).toHaveLength(figure.expectedResultCount);
  for (const transientResult of transientResults) {
    if (
      transientResult.type !== "simulation_transient_voltage_graph" &&
      transientResult.type !== "simulation_transient_current_graph"
    ) {
      throw new Error(`${figure.name} produced an unexpected result type`);
    }
    const levels =
      transientResult.type === "simulation_transient_voltage_graph"
        ? transientResult.voltage_levels
        : transientResult.current_levels;
    expect(transientResult.timestamps_ms).toHaveLength(levels.length);
    expect(transientResult.timestamps_ms.every(Number.isFinite)).toBe(true);
    expect(levels.every(Number.isFinite)).toBe(true);
  }

  const rendererOptions = {
    circuitJson,
    simulation_experiment_id: experiment.simulation_experiment_id,
  };
  verifyOrUpdateSnapshot({
    snapshotPath: join(
      snapshotDirectory,
      `${figure.slug}.circuit-simulation.snap.svg`,
    ),
    svg: convertCircuitJsonToSimulationGraphSvg(rendererOptions),
  });
  verifyOrUpdateSnapshot({
    snapshotPath: join(
      snapshotDirectory,
      `${figure.slug}.circuit-schematic-simulation.snap.svg`,
    ),
    svg: convertCircuitJsonToSchematicSimulationSvg(rendererOptions),
  });
};

for (const figure of figures) {
  datasheetSimulationTest(figure.name, () => renderFigure(figure), 3_600_000);
}
