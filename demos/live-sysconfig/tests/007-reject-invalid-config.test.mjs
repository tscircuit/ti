import { test, expect } from "bun:test";
import { mkdtemp, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { publishTab } from "../scripts/publish-tab.mjs";

test("invalid config is reported without overwriting it", async () => {
  const projectDir = await mkdtemp(join(tmpdir(), "ti-demo-invalid-config-"));
  const configPath = join(projectDir, "tscircuit.config.json");
  const configSource = '{"extraRunFrameTabs":false}';
  await writeFile(configPath, configSource);
  await expect(
    publishTab({
      projectDir,
      iframeUrl: "https://sysconfig-viewer.vercel.app/#encoded",
    }),
  ).rejects.toThrow("array");
  expect(await readFile(configPath, "utf8")).toBe(configSource);
  await rm(projectDir, { recursive: true, force: true });
});
