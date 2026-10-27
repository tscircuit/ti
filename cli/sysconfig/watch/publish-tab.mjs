import { readFile, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

async function readConfigSource(configPath) {
  try {
    return await readFile(configPath, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return null;
  }
}

export async function publishTab({
  projectDir,
  iframeUrl,
  mainComponentPath,
  shouldPublish = () => true,
}) {
  const viewerUrl = new URL(iframeUrl);
  if (
    !["http:", "https:"].includes(viewerUrl.protocol) ||
    viewerUrl.username ||
    viewerUrl.password ||
    !viewerUrl.hash
  )
    throw new Error("TI did not produce an encoded HTTP(S) viewer URL");
  const configPath = join(projectDir, "tscircuit.config.json");
  const configSource = await readConfigSource(configPath);
  const config = configSource === null ? {} : JSON.parse(configSource);
  if (!config || typeof config !== "object" || Array.isArray(config))
    throw new Error("tscircuit.config.json must contain an object");
  if (
    config.extraRunFrameTabs !== undefined &&
    !Array.isArray(config.extraRunFrameTabs)
  )
    throw new Error("extraRunFrameTabs must be an array");
  const tabs = (config.extraRunFrameTabs ?? []).filter((tab) => {
    if (
      !tab ||
      typeof tab !== "object" ||
      typeof tab.tabName !== "string" ||
      typeof tab.iframeUrl !== "string"
    )
      throw new Error("extraRunFrameTabs must contain tab descriptors");
    return (
      tab.tabName !== "SysConfig" || tab.mainComponentPath !== mainComponentPath
    );
  });
  tabs.push({
    tabName: "SysConfig",
    iframeUrl,
    ...(mainComponentPath ? { mainComponentPath } : {}),
  });
  if (!shouldPublish()) return false;
  const temporaryPath = `${configPath}.${process.pid}.tmp`;
  try {
    await writeFile(
      temporaryPath,
      `${JSON.stringify({ ...config, extraRunFrameTabs: tabs }, null, 2)}\n`,
    );
    if (!shouldPublish()) return false;
    if ((await readConfigSource(configPath)) !== configSource)
      throw new Error(
        "tscircuit.config.json changed during publication; save a source file to regenerate",
      );
    if (!shouldPublish()) return false;
    await rename(temporaryPath, configPath);
    return true;
  } finally {
    await rm(temporaryPath, { force: true });
  }
}
