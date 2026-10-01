import { spawnSync as nodeSpawnSync } from "node:child_process";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  getCircuitJsonInput,
  getInputStem,
  loadRequestConfig,
} from "./input.mjs";
import { resolveConverterOptions } from "./request.mjs";

export const CONVERTER_REVISION = "9049b4cce0510088d9b48397759528cb532a0dbd";

const converterHelperPath = fileURLToPath(
  new URL("./convert.ts", import.meta.url),
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
    await writeFile(optionsPath, JSON.stringify(converterOptions, null, 2));
    await mkdir(dirname(outputPath), { recursive: true });

    const result = spawnSync(
      bun,
      [converterHelperPath, circuitJsonPath, optionsPath, outputPath],
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
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}

export async function generateSysconfig(
  inputPath,
  {
    cwd = process.cwd(),
    configPath,
    outputPath,
    spawnSync = nodeSpawnSync,
    env = process.env,
    bun = "bun",
  } = {},
) {
  const built = await getCircuitJsonInput(inputPath, {
    cwd,
    spawnSync,
    env,
    bun,
  });
  const { config, configPath: resolvedConfigPath } = await loadRequestConfig(
    inputPath,
    {
      projectDir: built.projectDir,
      explicitPath: configPath,
      cwd,
    },
  );
  const resolved = resolveConverterOptions(built.circuitJson, config);
  const resolvedOutputPath = outputPath
    ? resolve(cwd, outputPath)
    : defaultOutputPath(inputPath, cwd);

  await invokeConverter(
    {
      circuitJsonPath: built.circuitJsonPath,
      converterOptions: resolved.options,
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
    target: resolved.target,
    component: resolved.component,
  };
}
