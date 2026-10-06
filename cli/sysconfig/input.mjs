import { spawnSync as nodeSpawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const inputExtensions = new Set([".tsx", ".ts", ".jsx", ".js"]);

export function getInputStem(inputPath) {
  const file = basename(inputPath);
  if (file.toLowerCase().endsWith(".circuit.json")) {
    return file.slice(0, -".circuit.json".length);
  }
  return file.replace(/(\.board|\.circuit)?\.(tsx|ts|jsx|js)$/i, "");
}

export function findProjectDir(inputPath, fallbackCwd) {
  let current = dirname(resolve(inputPath));
  while (true) {
    if (existsSync(join(current, "package.json"))) return current;
    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return resolve(fallbackCwd);
}

function findPackageRoot(entryPath, packageName) {
  let current = dirname(entryPath);
  while (true) {
    const manifestPath = join(current, "package.json");
    if (existsSync(manifestPath)) {
      try {
        const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
        if (manifest.name === packageName) return current;
      } catch (error) {
        throw new Error(
          `Unable to read package manifest ${manifestPath}: ${error.message}`,
          { cause: error },
        );
      }
    }
    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return null;
}

function resolveTscircuitCli(projectDir) {
  const resolverBases = [
    join(projectDir, "package.json"),
    fileURLToPath(import.meta.url),
  ];
  for (const base of resolverBases) {
    const req = createRequire(base);
    let entry;
    try {
      entry = req.resolve("tscircuit");
    } catch (error) {
      const packageDirectories = req.resolve.paths("tscircuit");
      const installed = packageDirectories?.some((directory) =>
        existsSync(join(directory, "tscircuit")),
      );
      // The CLI's installed peer is available only when the project has no copy.
      // An installed but broken project dependency must never be replaced.
      if (error.code === "MODULE_NOT_FOUND" && !installed) continue;
      throw new Error(
        `Unable to resolve tscircuit from ${base}: ${error.message}\nRepair or reinstall that tscircuit dependency before generating SysConfig.`,
        { cause: error },
      );
    }
    const packageRoot = findPackageRoot(entry, "tscircuit");
    const cliPath = packageRoot ? join(packageRoot, "cli.mjs") : null;
    if (!cliPath || !existsSync(cliPath))
      throw new Error(
        `Resolved tscircuit from ${base}, but its cli.mjs is missing. Repair or reinstall that tscircuit dependency before generating SysConfig.`,
      );
    return cliPath;
  }
  throw new Error(
    "Could not resolve the tscircuit package. Install tscircuit in the project before generating SysConfig.",
  );
}

function getBuildOutputPath(inputPath, projectDir) {
  const relativeInput = relative(projectDir, inputPath);
  // Match tscircuit build's getCircuitJsonOutputDirName: .ts, .jsx, and .js
  // remain in the output directory name, while .tsx is stripped.
  const outputDirName = relativeInput.replace(/(\.board|\.circuit)?\.tsx$/, "");
  return join(projectDir, "dist", outputDirName, "circuit.json");
}

async function parseCircuitJson(filePath) {
  let parsed;
  try {
    parsed = JSON.parse(await readFile(filePath, "utf8"));
  } catch (error) {
    throw new Error(
      `Unable to read Circuit JSON from ${filePath}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
  if (!Array.isArray(parsed)) {
    throw new Error(`Circuit JSON at ${filePath} must contain an array`);
  }
  return parsed;
}

function commandFailure(label, result) {
  const details = [result.stdout, result.stderr]
    .filter(Boolean)
    .join("\n")
    .trim();
  return new Error(
    details ? `${label} failed:\n${details}` : `${label} failed`,
  );
}

export async function getCircuitJsonInput(
  inputPath,
  { cwd, spawnSync = nodeSpawnSync, env = process.env, bun = "bun" },
) {
  const absoluteInput = resolve(cwd, inputPath);
  if (!existsSync(absoluteInput)) {
    throw new Error(`Input file does not exist: ${inputPath}`);
  }

  const lower = absoluteInput.toLowerCase();
  if (lower.endsWith(".circuit.json") || basename(lower) === "circuit.json") {
    return {
      circuitJson: await parseCircuitJson(absoluteInput),
      circuitJsonPath: absoluteInput,
      projectDir: findProjectDir(absoluteInput, cwd),
    };
  }

  if (!inputExtensions.has(extname(absoluteInput).toLowerCase())) {
    throw new Error(
      "SysConfig generation supports .tsx, .ts, .jsx, .js, .circuit.json, and circuit.json inputs",
    );
  }

  const projectDir = findProjectDir(absoluteInput, cwd);
  const tscircuitCli = resolveTscircuitCli(projectDir);
  const result = spawnSync(
    bun,
    [
      tscircuitCli,
      "build",
      absoluteInput,
      "--disable-pcb",
      "--disable-parts-engine",
    ],
    {
      cwd: projectDir,
      env,
      encoding: "utf8",
      maxBuffer: 20 * 1024 * 1024,
    },
  );
  if (result.error) throw result.error;
  if (result.status !== 0) throw commandFailure("tscircuit build", result);

  const circuitJsonPath = getBuildOutputPath(absoluteInput, projectDir);
  if (!existsSync(circuitJsonPath)) {
    throw new Error(
      `tscircuit build succeeded but did not create ${circuitJsonPath}`,
    );
  }
  return {
    circuitJson: await parseCircuitJson(circuitJsonPath),
    circuitJsonPath,
    projectDir,
  };
}

function assertRequestObject(request) {
  if (!request || typeof request !== "object" || Array.isArray(request)) {
    throw new Error("SysConfig request must be a JSON object");
  }
}

export async function loadRequestConfig({ explicitPath, cwd }) {
  const configPath = resolve(cwd, explicitPath);
  if (!existsSync(configPath)) {
    throw new Error(
      `SysConfig request file does not exist: ${formatPath(configPath, cwd)} (from --config). This must be a firmware request JSON file, not the generated circuit.json.`,
    );
  }

  let config;
  try {
    config = JSON.parse(await readFile(configPath, "utf8"));
  } catch (error) {
    throw new Error(
      `Unable to read SysConfig request file ${configPath}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
  assertRequestObject(config);
  return { config, configPath };
}

export function formatPath(filePath, cwd) {
  const formatted = relative(cwd, filePath);
  return formatted && !formatted.startsWith("..") ? formatted : filePath;
}
