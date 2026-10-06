import { spawnSync as nodeSpawnSync } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { generateSysconfig } from "./sysconfig/generate.mjs";
import {
  discoverTiInstallations,
  resolveTiEnvironment,
} from "./sysconfig/discover-ti-tools.mjs";
import { requireBun } from "./sysconfig/runtime.mjs";
import { am2434Profile } from "./sysconfig/am2434-profile.mjs";
import { cc2340Profile } from "./sysconfig/cc2340-profile.mjs";
import { validateAm2434Output } from "./sysconfig/validate-am2434-output.mjs";
import { validateCc2340Output } from "./sysconfig/validate-cc2340-output.mjs";
import {
  getTiInvocation,
  getTiTargetProfile,
  validateGeneratedFiles,
} from "./sysconfig/ti-cli.mjs";

const help = `Usage: ti check-sysconfig [options] <file>

Generate SysConfig from a tscircuit TSX/Circuit JSON input, then run the
locally installed TI SysConfig CLI in a temporary directory.
Requires Bun on PATH.

Optional environment overrides (standard TI installation folders are searched automatically):
  TI_SYSCONFIG_NODE   TI SysConfig bundled Node executable
  TI_SYSCONFIG_CLI    TI SysConfig dist/cli.js
  TI_SDK_ROOT         Matching TI SDK root containing .metadata/product.json

Options:
  --component <selector>  MCU component name or source_component_id
  --config <file>     Optional explicit SysConfig request JSON
  -h, --help          Show help

This command never installs TI software or accepts license terms.

Setup:
  Standalone SysConfig is sufficient; full CCS is optional.
  Searches ~/ti and standard system TI folders, including CCS installations.
  Only matching versions are used. Multiple matching installs require an override.
  CC2340 (pedometer): SysConfig ${cc2340Profile.sysconfigVersion}, SimpleLink Low Power F3 SDK ${cc2340Profile.sdkVersion}
  AM2434: SysConfig ${am2434Profile.sysconfigVersion}, SDK product ${am2434Profile.sdkName}@${am2434Profile.sdkVersion}
  SysConfig download: https://www.ti.com/tool/SYSCONFIG
  CC2340 SDK download: https://www.ti.com/tool/SIMPLELINK-LOWPOWER-SDK
  AM2434 SDK setup: https://github.com/tscircuit/ti#ti-sysconfig-commands

To generate a .syscfg file without TI tools:
  ti generate-sysconfig <file>

Example:
  ti check-sysconfig ./pedometer.circuit.tsx

SDK in a custom location:
  TI_SDK_ROOT=/path/to/simplelink-sdk ti check-sysconfig ./pedometer.circuit.tsx`;

export async function runCheckSysconfig(
  args,
  {
    stdout = console.log,
    stderr = console.error,
    cwd = process.cwd(),
    spawnSync = nodeSpawnSync,
    env = process.env,
    bun = "bun",
    tiInstallationRoots,
  } = {},
) {
  let temporary;
  try {
    const { values, positionals } = parseArgs({
      args,
      allowPositionals: true,
      options: {
        config: { type: "string" },
        component: { type: "string" },
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

    requireBun({ bun, spawnSync, env });
    const installations = discoverTiInstallations({
      env,
      roots: tiInstallationRoots,
    });
    temporary = await mkdtemp(join(tmpdir(), "ti-check-sysconfig-"));
    const syscfgPath = join(temporary, "generated.syscfg");
    const tiOutput = join(temporary, "ti-output");
    const generated = await generateSysconfig(positionals[0], {
      cwd,
      configPath: values.config,
      componentSelector: values.component,
      outputPath: syscfgPath,
      spawnSync,
      env,
      bun,
    });
    const tiEnv = resolveTiEnvironment({
      target: generated.target,
      installations,
      env,
      spawnSync,
      stderr,
    });
    const profile = getTiTargetProfile(generated.target);
    stdout(
      `Using TI SysConfig ${profile.sysconfigVersion}: ${tiEnv.TI_SYSCONFIG_CLI}`,
    );
    stdout(`Using TI bundled Node: ${tiEnv.TI_SYSCONFIG_NODE}`);
    stdout(
      `Using TI SDK ${profile.sdkName}@${profile.sdkVersion}: ${tiEnv.TI_SDK_ROOT}`,
    );

    const invocation = getTiInvocation({
      target: generated.target,
      syscfgPath,
      outputDir: tiOutput,
      env: tiEnv,
      rtos: generated.converterOptions.firmware?.rtos,
    });
    const result = spawnSync(invocation.command, invocation.args, {
      cwd,
      env: tiEnv,
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

    const generatedFiles = await validateGeneratedFiles(
      tiOutput,
      generated.target,
    );
    if (generated.target === "cc2340") {
      await validateCc2340Output({
        directory: tiOutput,
        circuitJson: generated.circuitJson,
        options: generated.converterOptions,
        syscfgPath,
      });
    } else if (generated.target === "am2434") {
      await validateAm2434Output({
        directory: tiOutput,
        circuitJson: generated.circuitJson,
        options: generated.converterOptions,
        syscfgPath,
      });
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
