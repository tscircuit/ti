import { spawnSync as nodeSpawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { am2434Profile } from "./am2434-profile.mjs";
import { cc2340Profile } from "./cc2340-profile.mjs";

export function validateTiEnvironment(env) {
  const tiNode = env.TI_SYSCONFIG_NODE;
  const tiCli = env.TI_SYSCONFIG_CLI;
  const sdkRoot = env.TI_SDK_ROOT;
  const missing = [
    ["TI_SYSCONFIG_NODE", tiNode],
    ["TI_SYSCONFIG_CLI", tiCli],
    ["TI_SDK_ROOT", sdkRoot],
  ]
    .filter(([, configuredPath]) => !configuredPath)
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

  return { tiNode, tiCli, sdkRoot, product };
}

export function validateTiTarget({ target, env, spawnSync = nodeSpawnSync }) {
  const { tiNode, tiCli, product } = validateTiEnvironment(env);
  const profile =
    target === "cc2340"
      ? cc2340Profile
      : target === "am2434"
        ? am2434Profile
        : null;
  if (!profile) throw new Error(`Unsupported TI validation target ${target}`);
  let sdk;
  try {
    sdk = JSON.parse(readFileSync(product, "utf8"));
  } catch (error) {
    throw new Error(`Unable to read TI SDK product metadata: ${error.message}`);
  }
  if (sdk.name !== profile.sdkName || sdk.version !== profile.sdkVersion) {
    throw new Error(
      `${target.toUpperCase()} requires ${profile.sdkName}@${profile.sdkVersion}; found ${sdk.name ?? "unknown"}@${sdk.version ?? "unknown"} in ${product}`,
    );
  }
  const version = spawnSync(tiNode, [tiCli, "--version"], {
    env,
    encoding: "utf8",
  });
  if (version.error || version.status !== 0) {
    throw new Error("Unable to determine installed TI SysConfig CLI version");
  }
  if (version.stdout.trim() !== profile.sysconfigVersion) {
    throw new Error(
      `${target.toUpperCase()} requires TI SysConfig ${profile.sysconfigVersion}; found ${version.stdout.trim() || "unknown"}`,
    );
  }
}

export function getTiInvocation({ target, syscfgPath, outputDir, env }) {
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
      "--rtos",
      cc2340Profile.rtos,
    );
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
