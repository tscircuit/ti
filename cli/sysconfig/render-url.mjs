import { readFile, stat } from "node:fs/promises";
import { basename } from "node:path";
import {
  createSysConfigViewerUrl,
  MAX_SYSCONFIG_SOURCE_BYTES,
} from "sysconfigts/url";

try {
  const [inputPath, viewerUrl] = process.argv.slice(2);
  if (!inputPath || !viewerUrl)
    throw new Error(
      "The URL encoder requires an input path and viewer address",
    );
  const file = await stat(inputPath);
  if (!file.isFile()) throw new Error("Input must be a .syscfg file");
  if (file.size > MAX_SYSCONFIG_SOURCE_BYTES)
    throw new Error("Configuration source exceeds 4 MiB");
  const source = new TextDecoder("utf-8", {
    fatal: true,
    ignoreBOM: true,
  }).decode(await readFile(inputPath));
  if (!source.trim()) throw new Error("Configuration file is empty");
  console.log(
    await createSysConfigViewerUrl(
      {
        schema_version: 2,
        filename: basename(inputPath),
        source,
      },
      viewerUrl,
    ),
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
