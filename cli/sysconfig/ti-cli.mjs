import { spawnSync as nodeSpawnSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { am2434Profile } from "./am2434-profile.mjs";
import { cc2340Profile } from "./cc2340-profile.mjs";

const tiPathSettings = [
  ["TI_SYSCONFIG_NODE", "path to TI's bundled Node executable"],
  ["TI_SYSCONFIG_CLI", "path to SysConfig's dist/cli.js file"],
  ["TI_SDK_ROOT", "SDK directory containing .metadata/product.json"],
];

export function tiSetupError(problem) {
  const error = new Error(
    [
      problem,
      "Checking with TI requires a local SysConfig installation and the TI SDK for your chip.",
      "You can install standalone SysConfig; full CCS is optional.",
      "Run `ti check-sysconfig --help` for downloads and supported versions.",
      "To generate a .syscfg file without TI tools, run: ti generate-sysconfig <file>",
    ].join("\n"),
  );
  error.problem = problem;
  return error;
}

function parseTiProductMetadata(source) {
  // TI's MCU+ SDK product.json contains trailing commas. Remove only commas
  // before a closing array/object token, never comma-like text inside strings.
  let inString = false;
  let escaped = false;
  let normalized = "";
  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      normalized += character;
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    if (character === ",") {
      let next = index + 1;
      while (next < source.length && /\s/.test(source[next])) next += 1;
      if (source[next] === "}" || source[next] === "]") continue;
    }
    normalized += character;
  }
  return JSON.parse(normalized);
}

export function validateConfiguredTiPaths(env) {
  const invalid = tiPathSettings.filter(([name]) => {
    if (!env[name]) return false;
    if (!existsSync(env[name])) return true;
    const details = statSync(env[name]);
    return name === "TI_SDK_ROOT" ? !details.isDirectory() : !details.isFile();
  });
  if (invalid.length)
    throw tiSetupError(
      `Configured TI paths do not exist or have the wrong file type:\n${invalid.map(([name, description]) => `  ${name}=${env[name]}\n    Expected ${description}. Update ${name} to that installed location.`).join("\n")}`,
    );

  if (!env.TI_SDK_ROOT) return;
  const sdkRoot = env.TI_SDK_ROOT;
  const product = join(sdkRoot, ".metadata", "product.json");
  if (!existsSync(product)) {
    throw tiSetupError(
      `TI_SDK_ROOT=${sdkRoot} is not a TI SDK root: .metadata/product.json is missing.\nSet TI_SDK_ROOT to the SDK directory containing that file. Installing SysConfig alone does not install the SDK.`,
    );
  }
}

export function validateTiEnvironment(env) {
  const missing = tiPathSettings.filter(([name]) => !env[name]);
  if (missing.length) {
    throw tiSetupError(
      `TI tool paths are not configured.\nSet these environment variables to their installed locations:\n${missing.map(([name, description]) => `  ${name}: ${description}`).join("\n")}`,
    );
  }
  validateConfiguredTiPaths(env);
  const tiNode = env.TI_SYSCONFIG_NODE;
  const tiCli = env.TI_SYSCONFIG_CLI;
  const sdkRoot = env.TI_SDK_ROOT;
  return {
    tiNode,
    tiCli,
    sdkRoot,
    product: join(sdkRoot, ".metadata", "product.json"),
  };
}

export function getTiTargetProfile(target) {
  const profile =
    target === "cc2340"
      ? cc2340Profile
      : target === "am2434"
        ? am2434Profile
        : null;
  if (!profile) throw new Error(`Unsupported TI validation target ${target}`);
  return profile;
}

export function readTiSdkMetadata(sdkRoot) {
  const product = join(sdkRoot, ".metadata", "product.json");
  try {
    const sdk = parseTiProductMetadata(readFileSync(product, "utf8"));
    if (
      !sdk ||
      typeof sdk !== "object" ||
      typeof sdk.name !== "string" ||
      typeof sdk.version !== "string"
    ) {
      throw new Error("Expected an SDK product name and version");
    }
    return sdk;
  } catch (error) {
    throw tiSetupError(
      `Unable to read TI SDK product metadata at ${product}: ${error.message}\nCheck the SDK installation and set TI_SDK_ROOT to its root directory.`,
    );
  }
}

export function getTiCliVersion({
  tiNode,
  tiCli,
  env,
  spawnSync = nodeSpawnSync,
}) {
  const version = spawnSync(tiNode, [tiCli, "--version"], {
    env,
    encoding: "utf8",
  });
  if (version.error || version.status !== 0) {
    const details =
      version.error?.message ||
      version.stderr?.trim() ||
      `exit code ${version.status}`;
    throw tiSetupError(
      `Could not run the configured TI SysConfig CLI: ${details}\nCheck TI_SYSCONFIG_NODE=${tiNode} and TI_SYSCONFIG_CLI=${tiCli}. They must point to TI's bundled Node executable and SysConfig's dist/cli.js file.`,
    );
  }
  return version.stdout.trim();
}

export function validateTiTarget({ target, env, spawnSync = nodeSpawnSync }) {
  const { tiNode, tiCli, sdkRoot, product } = validateTiEnvironment(env);
  const profile = getTiTargetProfile(target);
  const sdk = readTiSdkMetadata(sdkRoot);
  if (sdk.name !== profile.sdkName || sdk.version !== profile.sdkVersion) {
    throw tiSetupError(
      `${target.toUpperCase()} requires ${profile.sdkName}@${profile.sdkVersion}; found ${sdk.name ?? "unknown"}@${sdk.version ?? "unknown"} in ${product}.\nInstall the required SDK and update TI_SDK_ROOT to that installation.`,
    );
  }
  const version = getTiCliVersion({ tiNode, tiCli, env, spawnSync });
  if (version !== profile.sysconfigVersion) {
    throw tiSetupError(
      `${target.toUpperCase()} requires TI SysConfig ${profile.sysconfigVersion}; found ${version || "unknown"}.\nInstall the required version and update TI_SYSCONFIG_NODE and TI_SYSCONFIG_CLI to that installation.`,
    );
  }
}

export function getTiInvocation({ target, syscfgPath, outputDir, env, rtos }) {
  const { tiNode, tiCli, product } = validateTiEnvironment(env);
  const args = [tiCli, "--product", product];
  if (target === "cc2340") {
    args.push(
      "--device",
      cc2340Profile.device,
      "--part",
      cc2340Profile.part,
      "--package",
      cc2340Profile.package,
    );
    if (rtos) args.push("--rtos", rtos);
  } else if (target === "am2434") {
    args.push(
      "--context",
      am2434Profile.context,
      "--part",
      am2434Profile.part,
      "--package",
      am2434Profile.package,
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
    const filePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      count += await countGeneratedFiles(filePath);
    } else if (entry.isFile() && (await stat(filePath)).size > 0) {
      count += 1;
    }
  }
  return count;
}

export async function validateGeneratedFiles(directory, target) {
  const requiredFiles = [
    "ti_drivers_config.c",
    "ti_drivers_config.h",
    target === "cc2340" ? "ti_devices_config.c" : "ti_pinmux_config.c",
  ];
  for (const file of requiredFiles) {
    const filePath = join(directory, file);
    const details = await stat(filePath).catch((error) => {
      if (error.code === "ENOENT") return null;
      throw error;
    });
    if (!details?.isFile() || details.size === 0) {
      throw new Error(`TI SysConfig did not generate a non-empty ${file}`);
    }
  }
  return countGeneratedFiles(directory);
}
