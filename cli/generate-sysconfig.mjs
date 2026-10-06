import { parseArgs } from "node:util";
import { formatPath } from "./sysconfig/input.mjs";
import { generateSysconfig } from "./sysconfig/generate.mjs";
import { requireBun } from "./sysconfig/runtime.mjs";

const help = `Usage: ti generate-sysconfig [options] <file>

Generate a TI .syscfg file from a tscircuit TSX file or Circuit JSON.
GPIO/I2C choices come from existing circuit pinAttributes.
No separate request file is required for supported CC2340 circuits.
Requires Bun on PATH.

Options:
  --component <selector>  MCU component name or source_component_id
  --config <file>   Optional explicit SysConfig request JSON
  -o, --output <file>
                    Output .syscfg path
  -h, --help        Show help

Examples:
  ti generate-sysconfig ./pedometer.circuit.tsx
  ti generate-sysconfig ./pedometer.circuit.json --config ./pedometer.sysconfig.json
  ti generate-sysconfig ./board.tsx -o ./generated/board.syscfg`;

export async function runGenerateSysconfig(
  args,
  {
    stdout = console.log,
    stderr = console.error,
    cwd = process.cwd(),
    spawnSync,
    env = process.env,
    bun = "bun",
  } = {},
) {
  try {
    const { values, positionals } = parseArgs({
      args,
      allowPositionals: true,
      options: {
        config: { type: "string" },
        component: { type: "string" },
        output: { type: "string", short: "o" },
        help: { type: "boolean", short: "h" },
      },
    });

    if (values.help) {
      stdout(help);
      return 0;
    }
    if (positionals.length !== 1 || !positionals[0].trim()) {
      throw new Error(
        "One TSX or Circuit JSON file is required. Usage: ti generate-sysconfig [options] <file>",
      );
    }

    requireBun({ bun, spawnSync, env });

    const result = await generateSysconfig(positionals[0], {
      cwd,
      configPath: values.config,
      componentSelector: values.component,
      outputPath: values.output,
      ...(spawnSync ? { spawnSync } : {}),
      env,
      bun,
    });
    stdout(`Generated ${formatPath(result.outputPath, cwd)}.`);
    if (result.configPath)
      stdout(`Request: ${formatPath(result.configPath, cwd)}`);
    else
      stdout(
        "Pin configuration: Circuit JSON. Other settings use TI SDK defaults.",
      );
    return 0;
  } catch (error) {
    stderr(
      `Failed to generate SysConfig: ${error instanceof Error ? error.message : String(error)}`,
    );
    return 1;
  }
}

export { help as generateSysconfigHelp };
