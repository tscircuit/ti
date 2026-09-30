import { parseArgs } from "node:util";
import { formatPath } from "./sysconfig/input.mjs";
import { generateSysconfig } from "./sysconfig/generate.mjs";

const help = `Usage: ti generate-sysconfig [options] <file>

Generate a TI .syscfg file from a tscircuit TSX file or Circuit JSON.
Firmware behavior stays explicit in a sibling *.sysconfig.json file or
project-level ti.sysconfig.json.

Options:
  --config <file>   Explicit SysConfig request JSON
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

    const result = await generateSysconfig(positionals[0], {
      cwd,
      configPath: values.config,
      outputPath: values.output,
      ...(spawnSync ? { spawnSync } : {}),
      env,
      bun,
    });
    stdout(`Generated ${formatPath(result.outputPath, cwd)}.`);
    stdout(`Request: ${formatPath(result.configPath, cwd)}`);
    return 0;
  } catch (error) {
    stderr(
      `Failed to generate SysConfig: ${error instanceof Error ? error.message : String(error)}`,
    );
    return 1;
  }
}

export { help as generateSysconfigHelp };
