import { parseArgs } from "node:util";
import { generateSysconfigUrl } from "./sysconfig/generate-url.mjs";
import { requireBun } from "./sysconfig/runtime.mjs";

const help = `Usage: ti generate-sysconfig-url [options] <file>

Print a gzip/base64 SysConfig viewer URL from .syscfg, TS/TSX or Circuit JSON.
Circuit inputs use the existing SysConfig converter. Existing .syscfg source is never executed.
Requires Bun. No private viewer package, TI tools or SDK is needed.
URL encoding makes no network requests; circuit inputs run the normal tscircuit build.

Options:
  --viewer-url <url>  Viewer address (default: https://sysconfig-viewer.vercel.app/)
  --component <name>  MCU selector for circuit inputs
  --config <file>     Optional legacy converter request for circuit inputs
  -h, --help          Show help

The URL contains the configuration source. Share it only with intended recipients.
Encoding is not TI validation. The hosted viewer must support the file's target.

Examples:
  ti generate-sysconfig-url ./index.syscfg
  ti generate-sysconfig-url ./index.circuit.tsx
  ti generate-sysconfig-url ./index.circuit.json --component U1`;

export async function runGenerateSysconfigUrl(args, context = {}) {
  const {
    stdout = console.log,
    stderr = console.error,
    ...generation
  } = context;
  try {
    const { values, positionals } = parseArgs({
      args,
      allowPositionals: true,
      options: {
        "viewer-url": { type: "string" },
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
        "One input file is required. Run ti generate-sysconfig-url --help.",
      );
    for (const [name, setting] of Object.entries(values)) {
      if (typeof setting === "string" && !setting.trim())
        throw new Error(`--${name} cannot be empty`);
    }
    requireBun(generation);
    stdout(
      await generateSysconfigUrl(positionals[0], {
        ...generation,
        viewerUrl: values["viewer-url"],
        componentSelector: values.component,
        configPath: values.config,
      }),
    );
    return 0;
  } catch (error) {
    stderr(
      `Failed to generate SysConfig URL: ${error instanceof Error ? error.message : String(error)}`,
    );
    return 1;
  }
}
