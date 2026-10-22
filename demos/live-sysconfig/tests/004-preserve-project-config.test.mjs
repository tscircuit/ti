import { test, expect } from "bun:test";
import { mkdtemp, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { publishTab } from "../scripts/publish-tab.mjs";

test("publication preserves other settings and tabs without duplicating SysConfig", async () => {
  const projectDir = await mkdtemp(join(tmpdir(), "ti-demo-config-"));
  const otherTab = { tabName: "Docs", iframeUrl: "https://example.com/" };
  const otherCircuit = {
    tabName: "SysConfig",
    iframeUrl: "https://example.com/#other",
    mainComponentPath: "other.circuit.tsx",
  };
  const configPath = join(projectDir, "tscircuit.config.json");
  await writeFile(
    configPath,
    JSON.stringify({
      mainEntrypoint: "index.circuit.tsx",
      alwaysUseLatestTscircuitOnCloud: false,
      extraRunFrameTabs: [otherTab, otherCircuit],
    }),
  );
  await publishTab({
    projectDir,
    iframeUrl: "https://sysconfig-viewer.vercel.app/#first",
  });
  await publishTab({
    projectDir,
    iframeUrl: "https://sysconfig-viewer.vercel.app/#second",
  });
  const config = JSON.parse(await readFile(configPath, "utf8"));
  expect(config.alwaysUseLatestTscircuitOnCloud).toBe(false);
  expect(config.extraRunFrameTabs).toEqual([
    otherTab,
    otherCircuit,
    {
      tabName: "SysConfig",
      iframeUrl: "https://sysconfig-viewer.vercel.app/#second",
      mainComponentPath: "index.circuit.tsx",
    },
  ]);
  await rm(projectDir, { recursive: true, force: true });
});
