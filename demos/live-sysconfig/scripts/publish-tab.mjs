import { readFile, rename, writeFile } from "node:fs/promises";
import { join } from "node:path";

export async function publishTab({ projectDir, iframeUrl }) {
  const viewerUrl = new URL(iframeUrl);
  if (!["http:", "https:"].includes(viewerUrl.protocol) || !viewerUrl.hash)
    throw new Error("TI did not produce an encoded HTTP(S) viewer URL");
  const configPath = join(projectDir, "tscircuit.config.json");
  const configSource = await readFile(configPath, "utf8");
  const config = JSON.parse(configSource);
  if (!config || typeof config !== "object" || Array.isArray(config))
    throw new Error("tscircuit.config.json must contain an object");
  if (
    config.extraRunFrameTabs !== undefined &&
    !Array.isArray(config.extraRunFrameTabs)
  )
    throw new Error("extraRunFrameTabs must be an array");
  const tabs = (config.extraRunFrameTabs ?? []).filter(
    (tab) =>
      tab.tabName !== "SysConfig" ||
      tab.mainComponentPath !== "index.circuit.tsx",
  );
  tabs.push({
    tabName: "SysConfig",
    iframeUrl,
    mainComponentPath: "index.circuit.tsx",
  });
  const temporaryPath = `${configPath}.${process.pid}.tmp`;
  await writeFile(
    temporaryPath,
    `${JSON.stringify({ ...config, extraRunFrameTabs: tabs }, null, 2)}\n`,
  );
  // Do not overwrite a concurrent manual config edit.
  if ((await readFile(configPath, "utf8")) !== configSource)
    throw new Error(
      "tscircuit.config.json changed during publication; save a source file to regenerate",
    );
  await rename(temporaryPath, configPath);
}
