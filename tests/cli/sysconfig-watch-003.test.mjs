import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { publishTab } from "../../cli/sysconfig/watch/publish-tab.mjs";

test("watch scopes tabs to the input board and preserves config on invalid edits", async () => {
  const projectDir = await mkdtemp(join(tmpdir(), "ti-url-watch-tabs-"));
  const configPath = join(projectDir, "tscircuit.config.json");
  const otherTab = {
    tabName: "SysConfig",
    iframeUrl: "https://example.com/#other",
    mainComponentPath: "other.circuit.tsx",
  };
  await writeFile(
    configPath,
    JSON.stringify({
      extraRunFrameTabs: [otherTab],
      ignoredFiles: ["**/dist/**"],
    }),
  );
  try {
    await publishTab({
      projectDir,
      iframeUrl: "https://example.com/#current",
      mainComponentPath: "board.circuit.tsx",
    });
    const config = JSON.parse(await readFile(configPath, "utf8"));
    assert.deepEqual(config.extraRunFrameTabs, [
      otherTab,
      {
        tabName: "SysConfig",
        iframeUrl: "https://example.com/#current",
        mainComponentPath: "board.circuit.tsx",
      },
    ]);
    assert.deepEqual(config.ignoredFiles, ["**/dist/**"]);
    const originalConfig = await readFile(configPath, "utf8");
    assert.equal(
      await publishTab({
        projectDir,
        iframeUrl: "https://example.com/#stopped",
        shouldPublish: () => false,
      }),
      false,
    );
    assert.equal(await readFile(configPath, "utf8"), originalConfig);
    assert.deepEqual(await readdir(projectDir), ["tscircuit.config.json"]);
    await writeFile(configPath, '{"extraRunFrameTabs":false}');
    await assert.rejects(
      publishTab({ projectDir, iframeUrl: "https://example.com/#invalid" }),
      /array/,
    );
    assert.equal(
      await readFile(configPath, "utf8"),
      '{"extraRunFrameTabs":false}',
    );
  } finally {
    await rm(projectDir, { recursive: true, force: true });
  }
});
