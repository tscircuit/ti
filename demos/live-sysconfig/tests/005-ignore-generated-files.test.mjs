import { test, expect } from "bun:test";
import { isCircuitSource } from "../scripts/watch/watch-source.mjs";

test("source watching includes imported pin attributes but excludes generated files", () => {
  for (const filename of [
    "pin-specs.ts",
    "imports/CC2340.tsx",
    "index.sysconfig.json",
    "footprints/chip.kicad_mod",
  ])
    expect(isCircuitSource(filename)).toBe(true);
  for (const filename of [
    "node_modules/package/index.ts",
    "dist/index/circuit.json",
    ".build/result.json",
    ".sysconfig/index.syscfg",
    "tscircuit.config.json",
    "tscircuit.config.json.123.tmp",
    ".git/config",
    "README.md",
  ])
    expect(isCircuitSource(filename)).toBe(false);
});
