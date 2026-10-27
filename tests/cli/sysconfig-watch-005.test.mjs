import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { readPublishedTab, waitFor } from "./watch-test-helpers.mjs";

const watcherPath = fileURLToPath(new URL("../../cli/ti.mjs", import.meta.url));

test("invalid watched source preserves the published URL and recovers after correction", async () => {
  const projectDir = await mkdtemp(join(tmpdir(), "ti-url-watch-recovery-"));
  const sourcePath = join(projectDir, "board.syscfg");
  const configPath = join(projectDir, "tscircuit.config.json");
  await writeFile(sourcePath, "// Initial configuration\n");
  await writeFile(join(projectDir, "package.json"), '{"private":true}\n');
  const child = spawn(
    process.execPath,
    [watcherPath, "watch-sysconfig", "board.syscfg"],
    {
      cwd: projectDir,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  let stdout = "";
  let stderr = "";
  child.stdout.setEncoding("utf8").on("data", (chunk) => {
    stdout += chunk;
  });
  child.stderr.setEncoding("utf8").on("data", (chunk) => {
    stderr += chunk;
  });
  const exited = new Promise((resolveExit, reject) => {
    child.once("error", reject);
    child.once("exit", resolveExit);
  });
  try {
    await waitFor(
      async () => Boolean(await readPublishedTab(projectDir)),
      () => stderr,
    );
    const successfulConfig = await readFile(configPath, "utf8");
    const initialUrl = (await readPublishedTab(projectDir)).iframeUrl;
    await writeFile(sourcePath, "  \n");
    await waitFor(
      () => stderr.includes("Generation failed"),
      () => stderr,
    );
    assert.equal(await readFile(configPath, "utf8"), successfulConfig);
    assert.equal(stdout, "");
    await writeFile(sourcePath, "// Corrected configuration\n");
    await waitFor(
      async () =>
        (await readPublishedTab(projectDir))?.iframeUrl !== initialUrl,
      () => stderr,
    );
    assert.notEqual(await readFile(configPath, "utf8"), successfulConfig);
    child.kill("SIGTERM");
    assert.equal(await exited, 143);
  } finally {
    if (child.exitCode === null) child.kill("SIGTERM");
    await exited;
    await rm(projectDir, { recursive: true, force: true });
  }
});
