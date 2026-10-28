import assert from "node:assert/strict";
import { test } from "node:test";
import { runCli } from "../../cli/main.mjs";

test("sync-sysconfig rejects invalid arguments before starting processes", async () => {
  for (const args of [
    [],
    ["a.syscfg", "b.syscfg"],
    ["--watch", "a.syscfg"],
    ["--viewer-url", "", "a.syscfg"],
  ]) {
    const errors = [];
    assert.equal(
      await runCli(["sync-sysconfig", ...args], {
        stdout: () => assert.fail("Invalid command printed output"),
        stderr: (message) => errors.push(message),
        spawnSync: () => {
          throw new Error("Invalid arguments must not start Bun");
        },
      }),
      1,
    );
    assert.match(
      errors.join("\n"),
      /One input file|Unknown option|cannot be empty/,
    );
  }
});
