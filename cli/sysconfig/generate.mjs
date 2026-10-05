import { spawnSync as nodeSpawnSync } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  getCircuitJsonInput,
  getInputStem,
  loadRequestConfig,
} from "./input.mjs";
import { resolveConverterOptions, selectComponent } from "./request.mjs";

export const CONVERTER_REVISION = "c097e5841ea618d3b898ca6d66a103067826cefc";

const converterHelperPath = fileURLToPath(
  new URL("./convert.mjs", import.meta.url),
);

function commandFailure(label, result) {
  const details = [result.stdout, result.stderr]
    .filter(Boolean)
    .join("\n")
    .trim();
  return new Error(
    details ? `${label} failed:\n${details}` : `${label} failed`,
  );
}

function defaultOutputPath(inputPath, cwd) {
  const absoluteInput = resolve(cwd, inputPath);
  return join(dirname(absoluteInput), `${getInputStem(absoluteInput)}.syscfg`);
}

async function invokeConverter(
  { circuitJsonPath, converterOptions, outputPath },
  { cwd, spawnSync, env, bun },
) {
  const temporary = await mkdtemp(join(tmpdir(), "ti-sysconfig-convert-"));
  try {
    const optionsPath = join(temporary, "options.json");
    const configurationPath = join(temporary, "configuration.json");
    await writeFile(optionsPath, JSON.stringify(converterOptions, null, 2));
    await mkdir(dirname(outputPath), { recursive: true });

    const result = spawnSync(
      bun,
      [
        converterHelperPath,
        circuitJsonPath,
        optionsPath,
        outputPath,
        configurationPath,
      ],
      {
        cwd,
        env,
        encoding: "utf8",
        maxBuffer: 20 * 1024 * 1024,
      },
    );
    if (result.error) throw result.error;
    if (result.status !== 0)
      throw commandFailure("SysConfig conversion", result);
    return JSON.parse(await readFile(configurationPath, "utf8"));
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}

export async function generateSysconfig(
  inputPath,
  {
    cwd = process.cwd(),
    configPath,
    componentSelector,
    outputPath,
    spawnSync = nodeSpawnSync,
    env = process.env,
    bun = "bun",
  } = {},
) {
  if (configPath && componentSelector)
    throw new Error("Use either --component or --config, not both");
  const built = await getCircuitJsonInput(inputPath, {
    cwd,
    spawnSync,
    env,
    bun,
  });
  let resolvedConfigPath;
  let requestedOptions = {};
  if (configPath) {
    const loaded = await loadRequestConfig({
      explicitPath: configPath,
      cwd,
    });
    resolvedConfigPath = loaded.configPath;
    requestedOptions = resolveConverterOptions(
      built.circuitJson,
      loaded.config,
    ).options;
  } else if (componentSelector) {
    requestedOptions = {
      source_component_id: selectComponent(built.circuitJson, componentSelector)
        .source_component_id,
    };
  }
  const resolvedOutputPath = outputPath
    ? resolve(cwd, outputPath)
    : defaultOutputPath(inputPath, cwd);

  const configuration = await invokeConverter(
    {
      circuitJsonPath: built.circuitJsonPath,
      converterOptions: requestedOptions,
      outputPath: resolvedOutputPath,
    },
    {
      cwd: built.projectDir,
      spawnSync,
      env,
      bun,
    },
  );

  return {
    outputPath: resolvedOutputPath,
    circuitJsonPath: built.circuitJsonPath,
    configPath: resolvedConfigPath,
    target: configuration.target,
    component: configuration.component,
    circuitJson: built.circuitJson,
    converterOptions: configuration.converterOptions,
  };
}
