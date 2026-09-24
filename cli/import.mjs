import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { parseArgs } from "node:util";
import {
  convertRawEasyEdaToTs,
  EasyEdaJsonSchema,
  fetchEasyEDAComponent,
  normalizeManufacturerPartNumber,
} from "easyeda";

const help = `Usage: ti import <part-number>

Import an EasyEDA chip as editable TSX into ./imports/.
Use an exact manufacturer part number or an LCSC ID (C-number).
Existing files are not overwritten.

Examples:
  ti import TPS62160DSGR
  ti import C324077`;

export async function runImport(args, { fetch, stdout, stderr, cwd }) {
  try {
    const { values, positionals } = parseArgs({
      args,
      allowPositionals: true,
      options: { help: { type: "boolean", short: "h" } },
    });
    if (values.help) {
      stdout(help);
      return 0;
    }
    if (positionals.length !== 1 || !positionals[0].trim()) {
      throw new Error(
        "An exact part number is required. Usage: ti import <part-number>",
      );
    }

    const query = positionals[0].trim();
    const directLcsc = /^C[1-9]\d*$/i.test(query);
    let lcscPartNumber = query.toUpperCase();
    if (!directLcsc) {
      const response = await fetch(
        "https://jlcsearch.tscircuit.com/api/search?limit=10&q=" +
          encodeURIComponent(query),
      );
      if (!response.ok)
        throw new Error(`LCSC search failed (HTTP ${response.status})`);
      const data = await response.json();
      if (!Array.isArray(data?.components))
        throw new Error("LCSC search returned an invalid response");
      const match = data.components.find(
        (part) =>
          part?.mfr?.trim().toUpperCase() === query.toUpperCase() &&
          Number.isSafeInteger(part.lcsc) &&
          part.lcsc > 0,
      );
      if (!match) {
        throw new Error(
          `No exact LCSC match for "${query}". Use the full manufacturer part number or an LCSC ID (C-number).`,
        );
      }
      lcscPartNumber = `C${match.lcsc}`;
    }

    const rawEasy = await fetchEasyEDAComponent(lcscPartNumber, { fetch });
    const component = EasyEdaJsonSchema.parse(rawEasy);
    const manufacturerPart = component.dataStr.head.c_para["Manufacturer Part"];
    if (
      !manufacturerPart?.trim() ||
      component.lcsc.number.toUpperCase() !== lcscPartNumber ||
      (!directLcsc &&
        manufacturerPart.trim().toUpperCase() !== query.toUpperCase())
    ) {
      throw new Error(
        `EasyEDA returned a different or missing part identity for "${query}"`,
      );
    }

    const componentName = normalizeManufacturerPartNumber(manufacturerPart);
    const tsx = await convertRawEasyEdaToTs({ rawEasy });
    const directory = join(cwd, "imports");
    const filename = `${componentName}.tsx`;
    await mkdir(directory, { recursive: true });
    try {
      await writeFile(join(directory, filename), `${tsx}\n`, { flag: "wx" });
    } catch (error) {
      if (error?.code === "EEXIST")
        throw new Error(
          `imports/${filename} already exists; no files were overwritten.`,
        );
      throw error;
    }
    stdout(`Imported imports/${filename} from EasyEDA (${lcscPartNumber}).`);
    stdout(
      `Use: import { ${componentName} } from "./imports/${componentName}"`,
    );
    return 0;
  } catch (error) {
    stderr(
      `Failed to import: ${error instanceof Error ? error.message : String(error)}`,
    );
    return 1;
  }
}
