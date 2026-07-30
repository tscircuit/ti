import { expect, test } from "bun:test";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { convertCircuitJsonToSimulationGraphSvg } from "circuit-to-svg";
import { Circuit } from "tscircuit";
import Figure1015 from "../lib/simulations/TPS63802-Figure-10-15-switching-waveforms-pfm-boost-operation.circuit";
import Figure1016 from "../lib/simulations/TPS63802-Figure-10-16-switching-waveforms-pfm-buck-boost-operation.circuit";
import Figure1017 from "../lib/simulations/TPS63802-Figure-10-17-switching-waveforms-pfm-buck-operation.circuit";
import Figure1018 from "../lib/simulations/TPS63802-Figure-10-18-switching-waveforms-pwm-boost-operation.circuit";
import Figure1019 from "../lib/simulations/TPS63802-Figure-10-19-switching-waveforms-pwm-buck-boost-operation.circuit";
import Figure1020 from "../lib/simulations/TPS63802-Figure-10-20-switching-waveforms-pwm-buck-operation.circuit";
import Figure1021 from "../lib/simulations/TPS63802-Figure-10-21-load-transient-pfm-pwm-boost-operation.circuit";
import Figure1022 from "../lib/simulations/TPS63802-Figure-10-22-load-transient-pfm-pwm-buck-boost-operation.circuit";
import Figure1023 from "../lib/simulations/TPS63802-Figure-10-23-load-transient-pfm-pwm-buck-operation.circuit";
import Figure1024 from "../lib/simulations/TPS63802-Figure-10-24-load-transient-pwm-boost-operation.circuit";
import Figure1025 from "../lib/simulations/TPS63802-Figure-10-25-load-transient-pwm-buck-boost-operation.circuit";
import Figure1026 from "../lib/simulations/TPS63802-Figure-10-26-load-transient-pwm-buck-operation.circuit";
import Figure1027 from "../lib/simulations/TPS63802-Figure-10-27-line-transient-pwm-operation.circuit";
import Figure1028 from "../lib/simulations/TPS63802-Figure-10-28-line-transient-pwm-operation.circuit";
import Figure1029 from "../lib/simulations/TPS63802-Figure-10-29-line-transient-pwm-operation.circuit";
import Figure1030 from "../lib/simulations/TPS63802-Figure-10-30-start-up-behavior-from-rising-enable-pfm-operation.circuit";
import Figure1031 from "../lib/simulations/TPS63802-Figure-10-31-start-up-behavior-from-rising-enable-pwm-operation.circuit";
import { createCdnNgspiceSpiceEngine } from "../lib/spice/create-encrypted-pspice-ngspice-engine";

const datasheetSimulationTest =
  process.env.RUN_TPS63802_DATASHEET_SIMULATIONS === "1" ? test : test.skip;
const updateSnapshots = process.env.UPDATE_TPS63802_DATASHEET_SNAPSHOTS === "1";
const useSimulationCache =
  process.env.CACHE_TPS63802_DATASHEET_SIMULATIONS === "1";
const snapshotDirectory = resolve(
  import.meta.dir,
  "../lib/simulations/__snapshots__",
);

type WaveformFigure = {
  currentGraphCount: number;
  element: React.ReactElement;
  name: string;
  slug: string;
  voltageGraphCount: number;
  xAxisOffsetMs: number;
  xAxisTimeUnit: "us";
};

const figures: WaveformFigure[] = [
  {
    name: "Figure 10-15. Switching Waveforms, PFM Boost Operation",
    slug: "TPS63802-Figure-10-15-switching-waveforms-pfm-boost-operation",
    element: <Figure1015 name="figure_10_15" />,
    voltageGraphCount: 3,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.686,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-16. Switching Waveforms, PFM Buck-Boost Operation",
    slug: "TPS63802-Figure-10-16-switching-waveforms-pfm-buck-boost-operation",
    element: <Figure1016 name="figure_10_16" />,
    voltageGraphCount: 3,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.682,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-17. Switching Waveforms, PFM Buck Operation",
    slug: "TPS63802-Figure-10-17-switching-waveforms-pfm-buck-operation",
    element: <Figure1017 name="figure_10_17" />,
    voltageGraphCount: 3,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.686,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-18. Switching Waveforms, PWM Boost Operation",
    slug: "TPS63802-Figure-10-18-switching-waveforms-pwm-boost-operation",
    element: <Figure1018 name="figure_10_18" />,
    voltageGraphCount: 3,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.686,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-19. Switching Waveforms, PWM Buck-Boost Operation",
    slug: "TPS63802-Figure-10-19-switching-waveforms-pwm-buck-boost-operation",
    element: <Figure1019 name="figure_10_19" />,
    voltageGraphCount: 3,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.678,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-20. Switching Waveforms, PWM Buck Operation",
    slug: "TPS63802-Figure-10-20-switching-waveforms-pwm-buck-operation",
    element: <Figure1020 name="figure_10_20" />,
    voltageGraphCount: 3,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.686,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-21. Load Transient, PFM/PWM Boost Operation",
    slug: "TPS63802-Figure-10-21-load-transient-pfm-pwm-boost-operation",
    element: <Figure1021 name="figure_10_21" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.75,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-22. Load Transient, PFM/PWM Buck-Boost Operation",
    slug: "TPS63802-Figure-10-22-load-transient-pfm-pwm-buck-boost-operation",
    element: <Figure1022 name="figure_10_22" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.75,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-23. Load Transient, PFM/PWM Buck Operation",
    slug: "TPS63802-Figure-10-23-load-transient-pfm-pwm-buck-operation",
    element: <Figure1023 name="figure_10_23" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.75,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-24. Load Transient, PWM Boost Operation",
    slug: "TPS63802-Figure-10-24-load-transient-pwm-boost-operation",
    element: <Figure1024 name="figure_10_24" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.75,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-25. Load Transient, PWM Buck-Boost Operation",
    slug: "TPS63802-Figure-10-25-load-transient-pwm-buck-boost-operation",
    element: <Figure1025 name="figure_10_25" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.75,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-26. Load Transient, PWM Buck Operation",
    slug: "TPS63802-Figure-10-26-load-transient-pwm-buck-operation",
    element: <Figure1026 name="figure_10_26" />,
    voltageGraphCount: 1,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.75,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-27. Line Transient, PWM Operation",
    slug: "TPS63802-Figure-10-27-line-transient-pwm-operation",
    element: <Figure1027 name="figure_10_27" />,
    voltageGraphCount: 2,
    currentGraphCount: 0,
    xAxisOffsetMs: -0.75,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-28. Line Transient, PWM Operation",
    slug: "TPS63802-Figure-10-28-line-transient-pwm-operation",
    element: <Figure1028 name="figure_10_28" />,
    voltageGraphCount: 2,
    currentGraphCount: 0,
    xAxisOffsetMs: -0.75,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-29. Line Transient, PWM Operation",
    slug: "TPS63802-Figure-10-29-line-transient-pwm-operation",
    element: <Figure1029 name="figure_10_29" />,
    voltageGraphCount: 2,
    currentGraphCount: 0,
    xAxisOffsetMs: -0.75,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-30. Start-up Behavior from Rising Enable, PFM Operation",
    slug: "TPS63802-Figure-10-30-start-up-behavior-from-rising-enable-pfm-operation",
    element: <Figure1030 name="figure_10_30" />,
    voltageGraphCount: 3,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.301,
    xAxisTimeUnit: "us",
  },
  {
    name: "Figure 10-31. Start-up Behavior from Rising Enable, PWM Operation",
    slug: "TPS63802-Figure-10-31-start-up-behavior-from-rising-enable-pwm-operation",
    element: <Figure1031 name="figure_10_31" />,
    voltageGraphCount: 3,
    currentGraphCount: 1,
    xAxisOffsetMs: -0.301,
    xAxisTimeUnit: "us",
  },
];

const renderFigure = async (figure: WaveformFigure) => {
  const outputPath = updateSnapshots
    ? join(snapshotDirectory, `${figure.slug}.circuit-simulation.snap.svg`)
    : `/tmp/${figure.slug}.svg`;
  const circuit = new Circuit({
    platform: {
      spiceEngineMap: {
        ngspice: {
          async simulate(spiceString) {
            writeFileSync(`/tmp/${figure.slug}.spice`, spiceString);
            const cachePath = `/tmp/${figure.slug}.engine-cache.json`;
            if (useSimulationCache && existsSync(cachePath)) {
              const cached = JSON.parse(readFileSync(cachePath, "utf8"));
              if (cached.spiceString === spiceString) {
                return cached.result;
              }
            }

            const result =
              await createCdnNgspiceSpiceEngine().simulate(spiceString);
            if (useSimulationCache) {
              writeFileSync(cachePath, JSON.stringify({ spiceString, result }));
            }
            return result;
          },
        },
      },
    },
  });
  circuit.add(figure.element);
  await circuit.renderUntilSettled();

  expect(circuit.db.simulation_unknown_experiment_error.list()).toEqual([]);
  expect(circuit.db.simulation_transient_voltage_graph.list()).toHaveLength(
    figure.voltageGraphCount,
  );
  expect(circuit.db.simulation_transient_current_graph.list()).toHaveLength(
    figure.currentGraphCount,
  );

  const experiment = circuit.db.simulation_experiment.list()[0]!;
  const circuitJson = circuit.getCircuitJson();
  writeFileSync(
    `/tmp/${figure.slug}.circuit.json`,
    JSON.stringify(circuitJson),
  );
  const svg = convertCircuitJsonToSimulationGraphSvg({
    circuitJson,
    simulation_experiment_id: experiment.simulation_experiment_id,
    x_axis_offset_ms: figure.xAxisOffsetMs,
    x_axis_time_unit: figure.xAxisTimeUnit,
  });
  writeFileSync(outputPath, svg);
};

for (const figure of figures) {
  datasheetSimulationTest(figure.name, () => renderFigure(figure), 3_600_000);
}
