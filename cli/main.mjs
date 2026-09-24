import { parseArgs } from "node:util";

const help = `Usage: ti search [options] <query...>
       ti import <part-number>

Search Texas Instruments components or import a chip from EasyEDA.

Options:
  --json      Output search results as JSON
  -h, --help  Show help

Examples:
  ti search "buck converter"
  ti search --json TPS62160
  ti import TPS62160DSGR
  ti import C324077`;

export async function runCli(
  argv,
  {
    fetch = globalThis.fetch,
    stdout = console.log,
    stderr = console.error,
    cwd = process.cwd(),
  } = {},
) {
  const [command, ...args] = argv;
  if (!command || command === "--help" || command === "-h") {
    stdout(help);
    return 0;
  }
  if (command === "import") {
    const { runImport } = await import("./import.mjs");
    return runImport(args, { fetch, stdout, stderr, cwd });
  }
  if (command !== "search") {
    stderr(`Unknown command "${command}". Run ti --help for usage.`);
    return 1;
  }

  let parsed;
  try {
    parsed = parseArgs({
      args,
      allowPositionals: true,
      options: {
        json: { type: "boolean" },
        help: { type: "boolean", short: "h" },
      },
    });
  } catch (error) {
    stderr(error instanceof Error ? error.message : String(error));
    return 1;
  }
  if (parsed.values.help) {
    stdout(help);
    return 0;
  }

  const query = parsed.positionals.join(" ").trim();
  if (!query) {
    stderr("A search query is required. Usage: ti search [options] <query...>");
    return 1;
  }

  try {
    const response = await fetch(
      "https://tisearch.tscircuit.com/api/search?limit=10&q=" +
        encodeURIComponent(query),
    );
    if (!response.ok)
      throw new Error(`TI search failed (HTTP ${response.status})`);
    const data = await response.json();
    if (!Array.isArray(data?.components))
      throw new Error("TI search returned an invalid response");

    if (parsed.values.json) {
      stdout(
        JSON.stringify(
          {
            query,
            results: data.components.map((component) => ({
              ...component,
              source: "ti",
            })),
          },
          null,
          2,
        ),
      );
    } else if (!data.components.length) {
      stdout(`No results found for "${query}" in Texas Instruments.`);
    } else {
      stdout(
        [
          `Found ${data.components.length} component(s) in TI search:`,
          ...data.components.map(
            (component, index) =>
              `${index + 1}. ${component.mfr} - ${component.description} (stock: ${component.stock.toLocaleString("en-US")})`,
          ),
        ].join("\n"),
      );
    }
    return 0;
  } catch (error) {
    stderr(
      `Failed to search: ${error instanceof Error ? error.message : String(error)}`,
    );
    return 1;
  }
}
