import { spawnSync as nodeSpawnSync } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { generateSysconfig } from "./sysconfig/generate.mjs";
import {
  countGeneratedFiles,
  getTiInvocation,
} from "./sysconfig/ti-cli.mjs";

const help = `Usage: ti check-sysconfig [options] <file>

Generate SysConfig from a tscircuit TSX/Circuit JSON input, then run the
locally installed TI SysConfig CLI in a temporary directory.

Required environment:
  TI_SYSCONFIG_NODE   TI SysConfig bundled Node executable
  TI_SYSCONFIG_CLI    TI SysConfig dist/cli.js
  TI_SDK_ROOT         Matching TI SDK root containing .metadata/product.json

Options:
  --config <file>     Explicit SysConfig request JSON
  -h, --help          Show help

This command never installs TI software or accepts license terms.

Example:
  TI_SYSCONFIG_NODE=/path/to/sysconfig/nodejs/node \\
  TI_SYSCONFIG_CLI=/path/to/sysconfig/dist/cli.js \\
  TI_SDK_ROOT=/path/to/simplelink-sdk \\
    ti check-sysconfig ./pedometer.circuit.tsx`;

export async function runCheckSysconfig(
  args,
  {
    stdout = console.log,
    stderr = console.error,
    cwd = process.cwd(),
    spawnSync = nodeSpawnSync,
    env = process.env,
    bun = "bun",
  } = {},
) {
  let temporary;
  try {
    const { values, positionals } = parseArgs({
      args,
      allowPositionals: true,
      options: {
        config: { type: "string" },
        help: { type: "boolean", short: "h" },
      },
    });

    if (values.help) {
      stdout(help);
      return 0;
    }
    if (positionals.length !== 1 || !positionals[0].trim()) {
      throw new Error(
        "One TSX or Circuit JSON file is required. Usage: ti check-sysconfig [options] <file>",
      );
    }

    temporary = await mkdtemp(join(tmpdir(), "ti-check-sysconfig-"));
    const syscfgPath = join(temporary, "generated.syscfg");
    const tiOutput = join(temporary, "ti-output");
    const generated = await generateSysconfig(positionals[0], {
      cwd,
      configPath: values.config,
      outputPath: syscfgPath,
      spawnSync,
      env,
      bun,
    });

    const invocation = getTiInvocation(
      generated.target,
      syscfgPath,
      tiOutput,
      env,
    );
    const result = spawnSync(invocation.command, invocation.args, {
      cwd,
      env,
      encoding: "utf8",
      maxBuffer: 20 * 1024 * 1024,
    });
    if (result.error) throw result.error;
    if (result.status !== 0) {
      const details = [result.stdout, result.stderr]
        .filter(Boolean)
        .join("\n")
        .trim();
      throw new Error(
        details
          ? `TI SysConfig rejected the generated file:\n${details}`
          : "TI SysConfig rejected the generated file",
      );
    }

    const generatedFiles = await countGeneratedFiles(tiOutput);
    if (generatedFiles === 0) {
      throw new Error(
        "TI SysConfig exited successfully but produced no non-empty generated files",
      );
    }

    stdout(
      `SysConfig check passed for ${positionals[0]} (${generatedFiles} generated file${generatedFiles === 1 ? "" : "s"}).`,
    );
    return 0;
  } catch (error) {
    stderr(
      `Failed to check SysConfig: ${error instanceof Error ? error.message : String(error)}`,
    );
    return 1;
  } finally {
    if (temporary) {
      await rm(temporary, { recursive: true, force: true });
    }
  }
}

export { help as checkSysconfigHelp };
