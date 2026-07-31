import {
  closeSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  openSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { gunzipSync, gzipSync } from "node:zlib";
import {
  parseTranParams,
  rewritePspiceCompatibilitySyntax,
} from "@tscircuit/ngspice-spice-engine";

const formatSimulationError = (simulationError) =>
  simulationError instanceof Error
    ? simulationError.message
    : String(simulationError);

const normalizeVectorName = (vectorName) =>
  vectorName.replace(/\s+/g, "").toLowerCase();

const parseProbeMetadata = (spiceString) =>
  Array.from(
    spiceString.matchAll(/^\* tscircuit(?:_current)?_probe (\{.+\})$/gm),
    (match) => JSON.parse(match[1] ?? ""),
  );

const parseNgspiceBinaryRaw = (rawFile) => {
  const binaryMarker = Buffer.from("Binary:\n");
  const markerOffset = rawFile.indexOf(binaryMarker);
  if (markerOffset < 0) {
    throw new Error("Native ngspice output did not contain binary raw data");
  }

  const header = rawFile.subarray(0, markerOffset).toString("utf8");
  const variableCount = Number(header.match(/^No\. Variables:\s+(\d+)/m)?.[1]);
  const pointCount = Number(header.match(/^No\. Points:\s+(\d+)/m)?.[1]);
  const variablesBlock = header.match(/Variables:\n([\s\S]+)$/)?.[1];
  const vectorNames =
    variablesBlock
      ?.trim()
      .split(/\r?\n/)
      .map((line) => line.trim().split(/\s+/)[1] ?? "")
      .filter(Boolean) ?? [];

  if (
    !Number.isInteger(variableCount) ||
    !Number.isInteger(pointCount) ||
    vectorNames.length !== variableCount
  ) {
    throw new Error("Native ngspice raw header is incomplete");
  }

  const dataOffset = markerOffset + binaryMarker.length;
  const expectedByteLength = pointCount * variableCount * 8;
  if (rawFile.length - dataOffset < expectedByteLength) {
    throw new Error("Native ngspice raw data is truncated");
  }

  const valuesByVector = new Map(
    vectorNames.map((vectorName) => [
      normalizeVectorName(vectorName),
      new Array(pointCount),
    ]),
  );
  for (let pointIndex = 0; pointIndex < pointCount; pointIndex++) {
    for (
      let variableIndex = 0;
      variableIndex < variableCount;
      variableIndex++
    ) {
      const vectorName = vectorNames[variableIndex];
      if (vectorName === undefined) continue;
      const vectorValues = valuesByVector.get(normalizeVectorName(vectorName));
      if (vectorValues === undefined) continue;
      vectorValues[pointIndex] = rawFile.readDoubleLE(
        dataOffset + (pointIndex * variableCount + variableIndex) * 8,
      );
    }
  }

  const timeSeconds = valuesByVector.get("time");
  if (timeSeconds === undefined) {
    throw new Error("Native ngspice raw data does not contain time");
  }
  return {
    timestampsMs: timeSeconds.map((time) => time * 1_000),
    valuesByVector,
  };
};

const createSimulationGraphs = ({ probes, rawTransient, spiceString }) => {
  const transientParameters = parseTranParams(spiceString);
  const startTimeMs = rawTransient.timestampsMs[0] ?? 0;
  const endTimeMs =
    rawTransient.timestampsMs[rawTransient.timestampsMs.length - 1] ??
    startTimeMs;
  const timePerStep = (transientParameters?.tstep ?? 0) * 1_000;

  return probes.map((probe) => {
    const probeValues = rawTransient.valuesByVector.get(
      normalizeVectorName(probe.spice_vector),
    );
    if (probeValues === undefined) {
      throw new Error(`Native ngspice output is missing ${probe.spice_vector}`);
    }

    if (probe.simulation_voltage_probe_id !== undefined) {
      return {
        type: "simulation_transient_voltage_graph",
        simulation_experiment_id: "placeholder_simulation_experiment_id",
        simulation_transient_voltage_graph_id: `simulation_graph_${probe.simulation_voltage_probe_id}`,
        source_probe_id: probe.simulation_voltage_probe_id,
        source_probe_name: probe.name,
        source_node_name: probe.source_node_name,
        reference_node_name: probe.reference_node_name,
        name: probe.name,
        timestamps_ms: rawTransient.timestampsMs,
        voltage_levels: probeValues,
        start_time_ms: startTimeMs,
        end_time_ms: endTimeMs,
        time_per_step: timePerStep,
      };
    }

    if (probe.simulation_current_probe_id === undefined) {
      throw new Error(`Probe ${probe.name} has no Circuit JSON probe id`);
    }
    return {
      type: "simulation_transient_current_graph",
      simulation_experiment_id: "placeholder_simulation_experiment_id",
      simulation_transient_current_graph_id: `simulation_graph_${probe.simulation_current_probe_id}`,
      source_probe_id: probe.simulation_current_probe_id,
      source_probe_name: probe.name,
      name: probe.name,
      timestamps_ms: rawTransient.timestampsMs,
      current_levels: probeValues,
      start_time_ms: startTimeMs,
      end_time_ms: endTimeMs,
      time_per_step: timePerStep,
    };
  });
};

const setMatrixSolver = ({ solver, spiceString }) => {
  const endDirectiveIndex = spiceString.toLowerCase().lastIndexOf("\n.end");
  if (endDirectiveIndex < 0) {
    throw new Error("Native ngspice netlist has no .end directive");
  }
  return `${spiceString.slice(0, endDirectiveIndex)}
.options ${solver}
${spiceString.slice(endDirectiveIndex + 1)}`;
};

const simulateWithSolver = async ({
  cacheKey,
  normalizedSpiceString,
  solver,
}) => {
  const workingDirectory = mkdtempSync(
    join(tmpdir(), "tscircuit-native-ngspice-"),
  );
  const netlistPath = join(workingDirectory, "simulation.cir");
  const rawPath = join(workingDirectory, "simulation.raw");
  const stdoutPath = join(workingDirectory, "ngspice.stdout.log");
  const stderrPath = join(workingDirectory, "ngspice.stderr.log");
  const solverSpiceString = setMatrixSolver({
    solver,
    spiceString: normalizedSpiceString,
  });
  writeFileSync(netlistPath, solverSpiceString);

  try {
    const startedAt = Date.now();
    console.info(`[native ngspice] start ${cacheKey.slice(0, 8)} (${solver})`);
    const stdoutFd = openSync(stdoutPath, "w");
    const stderrFd = openSync(stderrPath, "w");
    const ngspiceProcess = Bun.spawn(
      [
        "ngspice",
        "-n",
        "-D",
        "ngbehavior=psa",
        "-b",
        "-r",
        rawPath,
        netlistPath,
      ],
      {
        stderr: stderrFd,
        stdout: stdoutFd,
      },
    );
    const exitCode = await ngspiceProcess.exited;
    closeSync(stdoutFd);
    closeSync(stderrFd);
    const stdout = readFileSync(stdoutPath, "utf8");
    const stderr = readFileSync(stderrPath, "utf8");
    if (exitCode !== 0 || !existsSync(rawPath)) {
      throw new Error(
        `Native ngspice ${solver} simulation failed with exit code ${exitCode}\n${stdout}\n${stderr}`,
      );
    }
    console.info(
      `[native ngspice] done ${cacheKey.slice(0, 8)} (${solver}) ${(
        (Date.now() - startedAt) / 1_000
      ).toFixed(1)}s`,
    );

    return {
      simulationResultCircuitJson: createSimulationGraphs({
        probes: parseProbeMetadata(normalizedSpiceString),
        rawTransient: parseNgspiceBinaryRaw(readFileSync(rawPath)),
        spiceString: normalizedSpiceString,
      }),
    };
  } finally {
    rmSync(workingDirectory, { recursive: true, force: true });
  }
};

const simulateWithSolverFallback = async ({
  cacheKey,
  normalizedSpiceString,
}) => {
  try {
    return await simulateWithSolver({
      cacheKey,
      normalizedSpiceString,
      solver: "klu",
    });
  } catch (kluError) {
    console.warn(
      `[native ngspice] retry ${cacheKey.slice(0, 8)} with sparse solver`,
    );
    try {
      return await simulateWithSolver({
        cacheKey,
        normalizedSpiceString,
        solver: "sparse",
      });
    } catch (sparseError) {
      const failedNetlistPath = join(
        tmpdir(),
        `tscircuit-native-ngspice-${cacheKey}.failed.cir`,
      );
      writeFileSync(failedNetlistPath, normalizedSpiceString);
      throw new Error(
        `Native ngspice failed with KLU and Sparse; netlist: ${failedNetlistPath}
KLU: ${formatSimulationError(kluError)}
Sparse: ${formatSimulationError(sparseError)}`,
      );
    }
  }
};

export const createNativeNgspiceEngine = ({
  cacheDirectory = join(tmpdir(), "tps63802-native-ngspice-cache"),
  useCache = false,
} = {}) => {
  const engine = {
    maxConcurrentSimulations: 6,
    async simulate(spiceString) {
      const normalizedSpiceString =
        rewritePspiceCompatibilitySyntax(spiceString);
      const cacheKey = new Bun.CryptoHasher("sha256")
        .update(normalizedSpiceString)
        .digest("hex");
      const cachePath = join(cacheDirectory, `${cacheKey}.json.gz`);
      const legacyCachePath = join(cacheDirectory, `${cacheKey}.json`);
      if (useCache && existsSync(cachePath)) {
        console.info(`[native ngspice] cache ${cacheKey.slice(0, 8)}`);
        return JSON.parse(gunzipSync(readFileSync(cachePath)).toString("utf8"));
      }
      if (useCache && existsSync(legacyCachePath)) {
        console.info(`[native ngspice] cache ${cacheKey.slice(0, 8)}`);
        const cachedSimulation = readFileSync(legacyCachePath, "utf8");
        writeFileSync(cachePath, gzipSync(cachedSimulation));
        rmSync(legacyCachePath);
        return JSON.parse(cachedSimulation);
      }

      const simulationResult = await simulateWithSolverFallback({
        cacheKey,
        normalizedSpiceString,
      });
      if (useCache) {
        mkdirSync(cacheDirectory, { recursive: true });
        writeFileSync(cachePath, gzipSync(JSON.stringify(simulationResult)));
      }
      return simulationResult;
    },
  };
  return engine;
};
