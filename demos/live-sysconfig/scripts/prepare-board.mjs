import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

export async function prepareBoard({ demoDir, commands }) {
  const workspaceDir = join(demoDir, ".demo");
  const projectDir = join(workspaceDir, "imrishabh18.pedometer");
  const readyPath = join(workspaceDir, "ready.json");
  const clonedPath = join(workspaceDir, "cloned.json");
  const demoManifest = JSON.parse(
    await readFile(join(demoDir, "package.json"), "utf8"),
  );
  await mkdir(workspaceDir, { recursive: true });
  const installedManifest = await readSetupManifest(readyPath);
  if (!installedManifest && !(await readSetupManifest(clonedPath))) {
    if (existsSync(projectDir))
      throw new Error(
        `An incomplete clone exists at ${projectDir}. Move it outside .demo before retrying; your files will not be overwritten.`,
      );
    await commands.run(
      [
        join(demoDir, "node_modules/tscircuit/cli.mjs"),
        "clone",
        "--include-author",
        "imrishabh18/pedometer",
      ],
      { cwd: workspaceDir },
    );
    await writeFile(clonedPath, "{}\n");
  }
  const manifestPath = join(projectDir, "package.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const tools = demoManifest.devDependencies;
  if (
    !installedManifest ||
    JSON.stringify(installedManifest.tools) !== JSON.stringify(tools) ||
    Object.entries(tools).some(
      ([packageName, version]) =>
        manifest.devDependencies?.[packageName] !== version,
    ) ||
    !existsSync(join(projectDir, "node_modules/.bin/tsci")) ||
    !existsSync(join(projectDir, "node_modules/@tscircuit/ti/cli/ti.mjs"))
  ) {
    manifest.devDependencies = { ...manifest.devDependencies, ...tools };
    await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
    await commands.run(["install"], { cwd: projectDir });
    await writeFile(
      readyPath,
      `${JSON.stringify({ package: manifest.name, version: manifest.version, tools }, null, 2)}\n`,
    );
  }
  await access(join(projectDir, "index.circuit.tsx"));
  for (const configName of ["tscircuit.config.ts", "tscircuit.config.js"]) {
    if (existsSync(join(projectDir, configName)))
      throw new Error(
        `This demo manages tscircuit.config.json; ${configName} would override its extraRunFrameTabs. Resolve that config explicitly before starting.`,
      );
  }
  return projectDir;
}

async function readSetupManifest(manifestPath) {
  try {
    return JSON.parse(await readFile(manifestPath, "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return null;
  }
}
