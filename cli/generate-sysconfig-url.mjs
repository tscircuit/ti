import { parseArgs } from "node:util";
import { generateSysconfigUrl } from "./sysconfig/generate-url.mjs";
import { requireBun } from "./sysconfig/runtime.mjs";

const help = `Usage: ti generate-sysconfig-url [options] <file.syscfg>

Print a gzip/base64 URL for an existing .syscfg file. Source is never executed.
Requires Bun. No private viewer package, TI tools, SDK or network request is needed.

Options:
  --viewer-url <url>  Viewer address (default: https://sysconfig-viewer.vercel.app/)
  -h, --help          Show help

The URL contains the configuration source. Share it only with intended recipients.
Encoding is not TI validation. The hosted viewer must support the file's target.

Example:
  ti generate-sysconfig-url ./index.syscfg`;

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
        help: { type: "boolean", short: "h" },
      },
    });
    if (values.help) {
      stdout(help);
      return 0;
    }
    if (positionals.length !== 1 || !positionals[0].trim())
      throw new Error(
        "One .syscfg file is required. Run ti generate-sysconfig-url --help.",
      );
    if (values["viewer-url"] !== undefined && !values["viewer-url"].trim())
      throw new Error("--viewer-url cannot be empty");
    requireBun(generation);
    stdout(
      await generateSysconfigUrl(positionals[0], {
        ...generation,
        viewerUrl: values["viewer-url"],
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
