import assert from "node:assert/strict";
import { test } from "node:test";
import { runCli } from "../../cli/main.mjs";

test("watch-sysconfig exposes help without starting processes", async () => {
  const messages = [];
  const errors = [];
  const exitCode = await runCli(["watch-sysconfig", "--help"], {
    stdout: (message) => messages.push(message),
    stderr: (message) => errors.push(message),
    spawnSync: () => {
      throw new Error("Help must not start Bun");
    },
  });
  assert.equal(exitCode, 0);
  assert.match(messages.join("\n"), /Usage: ti watch-sysconfig/);
  assert.match(messages.join("\n"), /tscircuit.config.json/);
  assert.deepEqual(errors, []);
});
