import { spawnSync as nodeSpawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import {
  basename,
  dirname,
  extname,
  join,
  relative,
  resolve,
} from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const CC2340_MPN = "CC2340R52E0RGER";
const AM2434_MPN = "AM2434BSDFHIALVR";
const CONVERTER_REVISION = "007eb0475681b0088efa19e845b3807ab1b1ec27";
const converterHelperPath = fileURLToPath(
  new URL("./sysconfig-convert.ts", import.meta.url),
);

const inputExtensions = new Set([".tsx", ".ts", ".jsx", ".js"]);

function assertObject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} must be a JSON object`);
  }
}

function assertOnlyKeys(value, allowed, label) {
  const unknown = Object.keys(value).filter((key) => !allowed.has(key));
  if (unknown.length) {
    throw new Error(
      `${label} contains unsupported field(s): ${unknown.join(", ")}`,
    );
  }
}

function getInputStem(inputPath) {
  const file = basename(inputPath);
  if (file.toLowerCase().endsWith(".circuit.json")) {
    return file.slice(0, -".circuit.json".length);
  }
  return file.replace(/(\.board|\.circuit)?\.(tsx|ts|jsx|js)$/i, "");
}

function findProjectDir(inputPath, fallbackCwd) {
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
        const manifest = JSON.parse(
          require("node:fs").readFileSync(manifestPath, "utf8"),
        );
        if (manifest.name === packageName) return current;
      } catch {
        // Keep walking; a parent package can still be the requested package.
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
    try {
      const req = createRequire(base);
      const entry = req.resolve("tscircuit");
      const packageRoot = findPackageRoot(entry, "tscircuit");
      if (!packageRoot) continue;
      const cliPath = join(packageRoot, "cli.mjs");
      if (existsSync(cliPath)) return cliPath;
    } catch {
      // Try the package-local resolver next.
    }
  }
  throw new Error(
    "Could not resolve the tscircuit package. Install tscircuit in the project before generating SysConfig.",
  );
}

function getBuildOutputPath(inputPath, projectDir) {
  const relativeInput = relative(projectDir, inputPath);
  const outputDirName = relativeInput.replace(
    /(\.board|\.circuit)?\.(tsx|ts|jsx|js)$/i,
    "",
  );
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
  return new Error(details ? `${label} failed:\n${details}` : `${label} failed`);
}

async function getCircuitJsonInput(
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

async function loadRequestConfig(inputPath, projectDir, explicitPath, cwd) {
  const absoluteInput = resolve(cwd, inputPath);
  const candidates = explicitPath
    ? [resolve(cwd, explicitPath)]
    : [
        join(dirname(absoluteInput), `${getInputStem(absoluteInput)}.sysconfig.json`),
        join(projectDir, "ti.sysconfig.json"),
      ];
  const configPath = candidates.find((candidate) => existsSync(candidate));
  if (!configPath) {
    throw new Error(
      `No SysConfig request file found. Create ${getInputStem(absoluteInput)}.sysconfig.json next to the input, create ti.sysconfig.json at the project root, or pass --config <file>.`,
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
  assertObject(config, "SysConfig request");
  assertOnlyKeys(
    config,
    new Set(["component", "gpios", "i2c", "reserved_ports", "firmware"]),
    "SysConfig request",
  );
  if (typeof config.component !== "string" || !config.component.trim()) {
    throw new Error("SysConfig request component must be a non-empty string");
  }
  return { config, configPath };
}

function selectComponent(circuitJson, selector) {
  const matches = circuitJson.filter(
    (item) =>
      item?.type === "source_component" &&
      item.ftype === "simple_chip" &&
      (item.source_component_id === selector ||
        item.name === selector ||
        item.manufacturer_part_number === selector),
  );
  if (matches.length !== 1) {
    throw new Error(
      `Expected exactly one simple-chip component matching ${JSON.stringify(selector)}; found ${matches.length}`,
    );
  }
  return matches[0];
}

function portLabels(port) {
  return [port.name, ...(Array.isArray(port.port_hints) ? port.port_hints : [])];
}

function resolvePort(circuitJson, component, selector) {
  if (typeof selector !== "string" || !selector.trim()) {
    throw new Error("Every SysConfig source selector must be a non-empty string");
  }
  const componentPorts = circuitJson.filter(
    (item) =>
      item?.type === "source_port" &&
      item.source_component_id === component.source_component_id,
  );
  const candidateIds = new Set();

  for (const port of componentPorts) {
    if (
      port.source_port_id === selector ||
      portLabels(port).includes(selector) ||
      (port.pin_number !== undefined && String(port.pin_number) === selector)
    ) {
      candidateIds.add(port.source_port_id);
    }
  }

  const netIds = new Set(
    circuitJson
      .filter((item) => item?.type === "source_net" && item.name === selector)
      .map((item) => item.source_net_id),
  );
  if (netIds.size) {
    for (const trace of circuitJson) {
      if (
        trace?.type !== "source_trace" ||
        !Array.isArray(trace.connected_source_net_ids) ||
        !trace.connected_source_net_ids.some((id) => netIds.has(id))
      ) {
        continue;
      }
      for (const portId of trace.connected_source_port_ids ?? []) {
        if (
          componentPorts.some((port) => port.source_port_id === portId)
        ) {
          candidateIds.add(portId);
        }
      }
    }
  }

  const matches = componentPorts.filter((port) =>
    candidateIds.has(port.source_port_id),
  );
  if (matches.length !== 1) {
    throw new Error(
      `Expected ${JSON.stringify(selector)} to resolve to one port on ${component.name}; found ${matches.length}`,
    );
  }
  return matches[0];
}

function parseRawGpio(gpio, index) {
  assertObject(gpio, `gpios[${index}]`);
  assertOnlyKeys(
    gpio,
    new Set([
      "source",
      "gpio_name",
      "direction",
      "initial_state",
      "pull",
      "interrupt",
    ]),
    `gpios[${index}]`,
  );
  if (typeof gpio.source !== "string" || !gpio.source.trim()) {
    throw new Error(`gpios[${index}].source must be a non-empty string`);
  }
  if (typeof gpio.gpio_name !== "string" || !gpio.gpio_name.trim()) {
    throw new Error(`gpios[${index}].gpio_name must be a non-empty string`);
  }
  if (gpio.direction !== "input" && gpio.direction !== "output") {
    throw new Error(`gpios[${index}].direction must be input or output`);
  }
  return gpio;
}

function parseI2c(i2c) {
  if (i2c === undefined) return undefined;
  assertObject(i2c, "i2c");
  assertOnlyKeys(
    i2c,
    new Set([
      "i2c_name",
      "sda",
      "scl",
      "max_bit_rate",
      "peripheral_assignment",
    ]),
    "i2c",
  );
  for (const field of ["i2c_name", "sda", "scl", "peripheral_assignment"]) {
    if (typeof i2c[field] !== "string" || !i2c[field].trim()) {
      throw new Error(`i2c.${field} must be a non-empty string`);
    }
  }
  if (!Number.isFinite(i2c.max_bit_rate) || i2c.max_bit_rate <= 0) {
    throw new Error("i2c.max_bit_rate must be a positive number in bits/s");
  }
  return i2c;
}

function resolveCc2340Options(circuitJson, component, config) {
  const rawGpios = (config.gpios ?? []).map(parseRawGpio);
  const gpios = rawGpios.map((gpio) => {
    const port = resolvePort(circuitJson, component, gpio.source);
    if (gpio.direction === "output") {
      if (gpio.initial_state !== "low" && gpio.initial_state !== "high") {
        throw new Error(
          `Output ${gpio.gpio_name} requires initial_state low or high`,
        );
      }
      if (gpio.pull !== undefined || gpio.interrupt !== undefined) {
        throw new Error(
          `Output ${gpio.gpio_name} does not accept pull or interrupt options`,
        );
      }
      return {
        source_port_id: port.source_port_id,
        gpio_name: gpio.gpio_name,
        direction: "output",
        initial_state: gpio.initial_state,
      };
    }
    if (!["none", "up", "down"].includes(gpio.pull)) {
      throw new Error(
        `Input ${gpio.gpio_name} requires pull none, up, or down`,
      );
    }
    if (!["none", "falling", "rising", "both"].includes(gpio.interrupt)) {
      throw new Error(
        `Input ${gpio.gpio_name} requires interrupt none, falling, rising, or both`,
      );
    }
    if (gpio.initial_state !== undefined) {
      throw new Error(
        `Input ${gpio.gpio_name} does not accept initial_state`,
      );
    }
    return {
      source_port_id: port.source_port_id,
      gpio_name: gpio.gpio_name,
      direction: "input",
      pull: gpio.pull,
      interrupt: gpio.interrupt,
    };
  });

  const rawI2c = parseI2c(config.i2c);
  const i2c = rawI2c
    ? {
        i2c_name: rawI2c.i2c_name,
        sda_source_port_id: resolvePort(
          circuitJson,
          component,
          rawI2c.sda,
        ).source_port_id,
        scl_source_port_id: resolvePort(
          circuitJson,
          component,
          rawI2c.scl,
        ).source_port_id,
        max_bit_rate: rawI2c.max_bit_rate,
        peripheral_assignment: rawI2c.peripheral_assignment,
      }
    : undefined;

  const rawReserved = config.reserved_ports ?? [];
  if (!Array.isArray(rawReserved)) {
    throw new Error("reserved_ports must be an array");
  }
  const reserved_ports = rawReserved.map((entry, index) => {
    assertObject(entry, `reserved_ports[${index}]`);
    assertOnlyKeys(
      entry,
      new Set(["source", "reason"]),
      `reserved_ports[${index}]`,
    );
    if (typeof entry.source !== "string" || !entry.source.trim()) {
      throw new Error(
        `reserved_ports[${index}].source must be a non-empty string`,
      );
    }
    if (typeof entry.reason !== "string" || !entry.reason.trim()) {
      throw new Error(
        `reserved_ports[${index}].reason must be a non-empty string`,
      );
    }
    return {
      source_port_id: resolvePort(circuitJson, component, entry.source)
        .source_port_id,
      reason: entry.reason,
    };
  });

  assertObject(config.firmware, "firmware");
  assertOnlyKeys(config.firmware, new Set(["rtos"]), "firmware");
  if (config.firmware.rtos !== "nortos") {
    throw new Error(
      "The current CC2340 converter scope requires firmware.rtos to be nortos",
    );
  }

  return {
    target: "cc2340",
    options: {
      source_component_id: component.source_component_id,
      gpios,
      ...(i2c ? { i2c } : {}),
      reserved_ports,
      firmware: { rtos: "nortos" },
    },
  };
}

function resolveAm2434Options(circuitJson, component, config) {
  if (config.i2c !== undefined) {
    throw new Error("AM2434 CLI conversion does not support I2C yet");
  }
  if ((config.reserved_ports ?? []).length) {
    throw new Error("AM2434 CLI conversion does not support reserved_ports yet");
  }
  if (config.firmware !== undefined) {
    throw new Error("AM2434 CLI conversion does not accept firmware settings");
  }
  if (!Array.isArray(config.gpios) || config.gpios.length !== 1) {
    throw new Error("AM2434 CLI conversion requires exactly one GPIO request");
  }
  const gpio = parseRawGpio(config.gpios[0], 0);
  if (gpio.direction !== "output") {
    throw new Error("AM2434 CLI conversion supports only an output GPIO");
  }
  if (
    gpio.initial_state !== undefined ||
    gpio.pull !== undefined ||
    gpio.interrupt !== undefined
  ) {
    throw new Error(
      "AM2434 output startup/pull/interrupt settings are not supported by the converter",
    );
  }
  const port = resolvePort(circuitJson, component, gpio.source);
  return {
    target: "am2434",
    options: {
      source_component_id: component.source_component_id,
      source_port_id: port.source_port_id,
      gpio_name: gpio.gpio_name,
      direction: "output",
    },
  };
}

function resolveConverterOptions(circuitJson, request) {
  const component = selectComponent(circuitJson, request.component);
  if (component.manufacturer_part_number === CC2340_MPN) {
    return {
      component,
      ...resolveCc2340Options(circuitJson, component, request),
    };
  }
  if (component.manufacturer_part_number === AM2434_MPN) {
    return {
      component,
      ...resolveAm2434Options(circuitJson, component, request),
    };
  }
  throw new Error(
    `Unsupported TI target ${JSON.stringify(component.manufacturer_part_number)}. Current converter targets are ${CC2340_MPN} and ${AM2434_MPN}.`,
  );
}

function defaultOutputPath(inputPath, cwd) {
  const absoluteInput = resolve(cwd, inputPath);
  return join(dirname(absoluteInput), `${getInputStem(absoluteInput)}.syscfg`);
}

async function invokeConverter(
  circuitJsonPath,
  options,
  outputPath,
  { cwd, spawnSync = nodeSpawnSync, env = process.env, bun = "bun" },
) {
  const temporary = await mkdtemp(join(tmpdir(), "ti-sysconfig-convert-"));
  try {
    const optionsPath = join(temporary, "options.json");
    await writeFile(optionsPath, JSON.stringify(options, null, 2));
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
    if (result.status !== 0) throw commandFailure("SysConfig conversion", result);
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
    built.projectDir,
    configPath,
    cwd,
  );
  const resolved = resolveConverterOptions(built.circuitJson, config);
  const resolvedOutputPath = outputPath
    ? resolve(cwd, outputPath)
    : defaultOutputPath(inputPath, cwd);
  await invokeConverter(
    built.circuitJsonPath,
    resolved.options,
    resolvedOutputPath,
    { cwd: built.projectDir, spawnSync, env, bun },
  );
  return {
    outputPath: resolvedOutputPath,
    circuitJsonPath: built.circuitJsonPath,
    configPath: resolvedConfigPath,
    target: resolved.target,
    component: resolved.component,
  };
}

export function getTiInvocation(target, syscfgPath, outputDir, env) {
  const tiNode = env.TI_SYSCONFIG_NODE;
  const tiCli = env.TI_SYSCONFIG_CLI;
  const sdkRoot = env.TI_SDK_ROOT;
  const missing = [
    ["TI_SYSCONFIG_NODE", tiNode],
    ["TI_SYSCONFIG_CLI", tiCli],
    ["TI_SDK_ROOT", sdkRoot],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);
  if (missing.length) {
    throw new Error(
      `Missing TI environment variable(s): ${missing.join(", ")}. check-sysconfig never installs TI software or accepts licenses automatically.`,
    );
  }
  for (const [name, filePath] of [
    ["TI_SYSCONFIG_NODE", tiNode],
    ["TI_SYSCONFIG_CLI", tiCli],
    ["TI_SDK_ROOT", sdkRoot],
  ]) {
    if (!existsSync(filePath)) {
      throw new Error(`${name} does not exist: ${filePath}`);
    }
  }
  const product = join(sdkRoot, ".metadata", "product.json");
  if (!existsSync(product)) {
    throw new Error(`TI SDK product metadata does not exist: ${product}`);
  }

  const args = [tiCli, "--product", product];
  if (target === "cc2340") {
    args.push(
      "--device",
      "CC2340R5RGE",
      "--part",
      "Default",
      "--package",
      "RGE",
      "--rtos",
      "nortos",
    );
  } else if (target === "am2434") {
    args.push(
      "--context",
      "r5fss0-0",
      "--part",
      "ALV",
      "--package",
      "ALV",
    );
  } else {
    throw new Error(`Unsupported TI validation target ${target}`);
  }
  args.push("--output", outputDir, syscfgPath);
  return { command: tiNode, args };
}

export async function countGeneratedFiles(directory) {
  let count = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      count += await countGeneratedFiles(path);
    } else if (entry.isFile() && (await stat(path)).size > 0) {
      count += 1;
    }
  }
  return count;
}

export function formatPath(filePath, cwd) {
  const formatted = relative(cwd, filePath);
  return formatted && !formatted.startsWith("..") ? formatted : filePath;
}

export { CONVERTER_REVISION };
