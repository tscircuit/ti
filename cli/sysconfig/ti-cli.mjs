import { existsSync } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

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
    const filePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      count += await countGeneratedFiles(filePath);
    } else if (entry.isFile() && (await stat(filePath)).size > 0) {
      count += 1;
    }
  }
  return count;
}
