import { parseArgs } from "node:util";
import { requireBun } from "./sysconfig/runtime.mjs";
import { watchSysconfigUrl } from "./sysconfig/watch/watch-url.mjs";

const help = `Usage: ti watch-sysconfig [options] <file>

Watch circuit TS/JS sources, Circuit JSON, or an existing .syscfg file.
Generate an initial SysConfig viewer URL and update it after source saves.
Writes the SysConfig tab to tscircuit.config.json, preserving other settings.
Run tsci dev separately to preview the tab and receive automatic URL updates.

Options:
  --viewer-url <url>  Viewer address (default: https://sysconfig-viewer.vercel.app/)
  -h, --help          Show help

Requires Bun and macOS/Linux. Supports JSON project configuration only.
Circuit sources watch imported files too. Circuit JSON/.syscfg watch that file.
Circuit inputs scope the tab to that board; .syscfg inputs create a shared tab.
Normal updates are quiet. Errors preserve the last URL; save again to retry.
No private viewer installation or TI SDK is required. URLs contain the source.

Example:
  ti watch-sysconfig ./index.circuit.tsx`;

export async function runWatchSysconfig(args, context = {}) {
  const {
    stdout = console.log,
    stderr = console.error,
    ...watchOptions
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
        "One input file is required. Run ti watch-sysconfig --help.",
      );
    if (values["viewer-url"] !== undefined && !values["viewer-url"].trim())
      throw new Error("--viewer-url cannot be empty");
    requireBun(watchOptions);
    return await watchSysconfigUrl(positionals[0], {
      ...watchOptions,
      stderr,
      viewerUrl: values["viewer-url"],
    });
  } catch (error) {
    stderr(
      `Failed to watch SysConfig: ${error instanceof Error ? error.message : String(error)}`,
    );
    return 1;
  }
}
