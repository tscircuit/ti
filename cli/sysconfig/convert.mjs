import { readFile, writeFile } from "node:fs/promises";
import { CircuitJsonToSysConfigConverter } from "circuit-json-to-sysconfig";
import { getValidationOptions } from "./get-validation-options.mjs";

const [circuitJsonPath, optionsPath, outputPath, configurationPath] =
  process.argv.slice(2);

if (!circuitJsonPath || !optionsPath || !outputPath || !configurationPath) {
  throw new Error(
    "Usage: bun convert.mjs <circuit.json> <options.json> <output.syscfg> <configuration.json>",
  );
}

const circuitJson = JSON.parse(await readFile(circuitJsonPath, "utf8"));
const options = JSON.parse(await readFile(optionsPath, "utf8"));
const converter = new CircuitJsonToSysConfigConverter(circuitJson, options);
converter.runUntilFinished();
const configuration = converter.getResolvedConfiguration();
const cc2340 = configuration.cc2340;
const converterOptions = getValidationOptions({ configuration, circuitJson });

await writeFile(outputPath, converter.getOutput().getString());
await writeFile(
  configurationPath,
  JSON.stringify({
    target: cc2340 ? "cc2340" : "am2434",
    component: configuration.component,
    converterOptions,
  }),
);
