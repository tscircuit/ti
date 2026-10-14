import { parseArgs } from "node:util";
import { formatPath } from "./sysconfig/input.mjs";
import { generateSysconfigSite } from "./sysconfig/generate-site.mjs";
import { requireBun } from "./sysconfig/runtime.mjs";

const help = `Usage: ti generate-sysconfig-site [options] <file>

Generate a standalone read-only SysConfig HTML page.
Accepts .syscfg, TS/TSX or Circuit JSON. No TI software or SDK installation is required.
Requires Bun and the separately installed authorised private sysconfig-viewer package.

Options:
  -o, --output <file>  New HTML output path (existing files are preserved)
  --catalog <file>     Matching versioned SDK catalog JSON; otherwise use bundled metadata
  --component <name>   MCU selector for circuit inputs
  --config <file>      Optional legacy converter request for circuit inputs
  -h, --help          Show help

Examples:
  ti generate-sysconfig-site ./index.syscfg
  ti generate-sysconfig-site ./dist/index/circuit.json -o ./site/sysconfig.html
  ti generate-sysconfig-site ./index.circuit.tsx`;

export async function runGenerateSysconfigSite(args, context = {}) {
  const {
    stdout = console.log,
    stderr = console.error,
    cwd = process.cwd(),
    spawnSync,
    env = process.env,
    bun = "bun",
  } = context;
  try {
    const { values, positionals } = parseArgs({
      args,
      allowPositionals: true,
      options: {
        output: { type: "string", short: "o" },
        catalog: { type: "string" },
        component: { type: "string" },
        config: { type: "string" },
        help: { type: "boolean", short: "h" },
      },
    });
    if (values.help) {
      stdout(help);
      return 0;
    }
    if (positionals.length !== 1 || !positionals[0].trim())
      throw new Error(
        "One input file is required. Run ti generate-sysconfig-site --help.",
      );
    for (const [name, setting] of Object.entries(values)) {
      if (typeof setting === "string" && !setting.trim())
        throw new Error(`--${name} cannot be empty`);
    }
    requireBun({ bun, spawnSync, env });
    const result = await generateSysconfigSite(positionals[0], {
      cwd,
      outputPath: values.output,
      catalogPath: values.catalog,
      componentSelector: values.component,
      configPath: values.config,
      spawnSync,
      env,
      bun,
    });
    stdout(`Generated ${formatPath(result.outputPath, cwd)}.`);
    stdout(
      "Read-only source viewer. TI validation and firmware generation were not run.",
    );
    return 0;
  } catch (error) {
    stderr(
      `Failed to generate SysConfig site: ${error instanceof Error ? error.message : String(error)}`,
    );
    return 1;
  }
}

export { help as generateSysconfigSiteHelp };
