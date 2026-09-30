import { readFile, writeFile } from "node:fs/promises";
import { convertCircuitJsonToSysConfig } from "circuit-json-to-sysconfig";

const [circuitJsonPath, optionsPath, outputPath] = process.argv.slice(2);

if (!circuitJsonPath || !optionsPath || !outputPath) {
  throw new Error(
    "Usage: bun sysconfig-convert.ts <circuit.json> <options.json> <output.syscfg>",
  );
}

const circuitJson = JSON.parse(await readFile(circuitJsonPath, "utf8"));
const options = JSON.parse(await readFile(optionsPath, "utf8"));
const sysconfig = convertCircuitJsonToSysConfig(circuitJson, options);

await writeFile(outputPath, sysconfig.getString());
