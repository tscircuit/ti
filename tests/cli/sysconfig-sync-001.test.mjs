import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { gunzipSync } from "node:zlib";
import { test } from "node:test";
import { readPublishedTab, waitFor } from "./watch-test-helpers.mjs";

const watcherPath = fileURLToPath(new URL("../../cli/ti.mjs", import.meta.url));

test("watch regenerates URL/config on syscfg edits and ignores its own writes", async () => {
  const projectDir = await mkdtemp(join(tmpdir(), "ti-url-watch-"));
  const sourcePath = join(projectDir, "board.syscfg");
  const configPath = join(projectDir, "tscircuit.config.json");
  const firstSource = "// First configuration\n";
  const secondSource = "// Updated configuration ⚡\n";
  await writeFile(sourcePath, firstSource);
  await writeFile(join(projectDir, "package.json"), '{"private":true}\n');
  const otherTab = { tabName: "Docs", iframeUrl: "https://example.com/" };
  await writeFile(
    configPath,
    JSON.stringify({
      mainEntrypoint: "board.circuit.tsx",
      extraRunFrameTabs: [otherTab],
    }),
  );
  const child = spawn(
    process.execPath,
    [watcherPath, "sync-sysconfig", "board.syscfg"],
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
    const initialUrl = (await readPublishedTab(projectDir)).iframeUrl;
    await writeFile(sourcePath, secondSource);
    await waitFor(
      async () =>
        (await readPublishedTab(projectDir))?.iframeUrl !== initialUrl,
      () => stderr,
    );
    const updatedTime = (await stat(configPath)).mtimeMs;
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 700));
    assert.equal((await stat(configPath)).mtimeMs, updatedTime);
    assert.equal(stdout, "");
    const config = JSON.parse(await readFile(configPath, "utf8"));
    assert.equal(config.mainEntrypoint, "board.circuit.tsx");
    assert.deepEqual(config.extraRunFrameTabs[0], otherTab);
    const tab = config.extraRunFrameTabs.find(
      (candidate) => candidate.tabName === "SysConfig",
    );
    assert.notEqual(tab.iframeUrl, initialUrl);
    const envelope = JSON.parse(
      gunzipSync(
        Buffer.from(new URL(tab.iframeUrl).hash.split(",")[1], "base64"),
      ).toString(),
    );
    assert.equal(envelope.source, secondSource);
    assert.equal(stderr, "");
  } finally {
    child.kill("SIGTERM");
    await exited;
    await rm(projectDir, { recursive: true, force: true });
  }
});
