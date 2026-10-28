import { test } from "node:test";
import assert from "node:assert/strict";
import { isCircuitSource } from "../../cli/sysconfig/sync/watch-source.mjs";

test("source watching includes imported pin attributes but excludes generated files", () => {
  for (const filename of [
    "pin-specs.ts",
    "imports/CC2340.tsx",
    "index.sysconfig.json",
    "footprints/chip.kicad_mod",
  ])
    assert.equal(isCircuitSource(filename), true, filename);
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
    assert.equal(isCircuitSource(filename), false, filename);
});
