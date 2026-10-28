import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function waitFor(predicate, describeFailure) {
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    if (await predicate()) return;
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 25));
  }
  throw new Error(`Watch condition timed out: ${describeFailure()}`);
}

export async function readPublishedTab(projectDir) {
  let configSource;
  try {
    configSource = await readFile(
      join(projectDir, "tscircuit.config.json"),
      "utf8",
    );
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return null;
  }
  return JSON.parse(configSource).extraRunFrameTabs?.find(
    (tab) => tab.tabName === "SysConfig",
  );
}
