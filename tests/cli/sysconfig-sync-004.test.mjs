import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { syncSysconfigUrl } from "../../cli/sysconfig/sync/sync-url.mjs";

test("the TI watcher reports unsupported input/config before starting", async () => {
  const projectDir = await mkdtemp(join(tmpdir(), "ti-watch-invalid-"));
  try {
    await writeFile(join(projectDir, "package.json"), '{"private":true}');
    await writeFile(join(projectDir, "board.txt"), "unsupported input");
    await assert.rejects(
      syncSysconfigUrl("board.txt", { cwd: projectDir }),
      /Watch accepts/,
    );
    await writeFile(join(projectDir, "board.syscfg"), "// config\n");
    await writeFile(
      join(projectDir, "tscircuit.config.ts"),
      "export default {}\n",
    );
    await assert.rejects(
      syncSysconfigUrl("board.syscfg", { cwd: projectDir }),
      /tscircuit.config.ts could override/,
    );
  } finally {
    await rm(projectDir, { recursive: true, force: true });
  }
});
