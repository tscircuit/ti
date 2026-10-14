import { spawnSync as nodeSpawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { findProjectDir, getInputStem } from "./input.mjs";
import { generateSysconfig } from "./generate.mjs";

const rendererPath = fileURLToPath(
  new URL("./render-site.mjs", import.meta.url),
);

export function resolveViewerModule(projectDir) {
  const resolver = createRequire(join(projectDir, "package.json"));
  try {
    return resolver.resolve("@tscircuit/sysconfig-viewer/html");
  } catch (error) {
    throw new Error(
      "Install the authorised private @tscircuit/sysconfig-viewer package in this project before generating the site. TI software is not a substitute.",
      { cause: error },
    );
  }
}

/** The public TI package orchestrates the private renderer; it never bundles TI UI assets. */
export async function generateSysconfigSite(inputPath, options = {}) {
  const {
    cwd = process.cwd(),
    outputPath,
    catalogPath,
    componentSelector,
    configPath,
    spawnSync = nodeSpawnSync,
    env = process.env,
    bun = "bun",
  } = options;
  const absoluteInput = resolve(cwd, inputPath);
  if (!existsSync(absoluteInput))
    throw new Error(`Input file does not exist: ${inputPath}`);
  const isSyscfg = absoluteInput.toLowerCase().endsWith(".syscfg");
  if (isSyscfg && (componentSelector || configPath))
    throw new Error(
      "--component and --config apply only to circuit inputs, not an existing .syscfg file.",
    );
  if (configPath && componentSelector)
    throw new Error("Use either --component or --config, not both");
  const projectDir = findProjectDir(absoluteInput, cwd);
  const viewerModulePath = resolveViewerModule(projectDir);
  const stem = isSyscfg
    ? basename(absoluteInput).slice(0, -7)
    : getInputStem(absoluteInput);
  const resolvedOutputPath = outputPath
    ? resolve(cwd, outputPath)
    : join(dirname(absoluteInput), `${stem}.sysconfig.html`);
  if (existsSync(resolvedOutputPath))
    throw new Error(
      `Output file already exists: ${resolvedOutputPath}. Choose a new output path.`,
    );
  const resolvedCatalogPath = catalogPath
    ? resolve(cwd, catalogPath)
    : undefined;
  if (resolvedCatalogPath && !existsSync(resolvedCatalogPath))
    throw new Error(`SDK catalog does not exist: ${catalogPath}`);
  const temporary = await mkdtemp(join(tmpdir(), "ti-sysconfig-site-"));
  try {
    const sourcePath = isSyscfg
      ? absoluteInput
      : join(temporary, `${stem}.syscfg`);
    if (!isSyscfg)
      await generateSysconfig(absoluteInput, {
        cwd,
        configPath,
        componentSelector,
        outputPath: sourcePath,
        spawnSync,
        env,
        bun,
        includePcb: true,
      });
    const requestPath = join(temporary, "viewer-input.json");
    const htmlPath = join(temporary, "viewer.html");
    await writeFile(
      requestPath,
      JSON.stringify({
        sourcePath,
        filename: basename(sourcePath),
        catalogPath: resolvedCatalogPath,
      }),
    );
    const result = spawnSync(
      bun,
      [rendererPath, viewerModulePath, requestPath, htmlPath],
      { cwd: projectDir, env, encoding: "utf8", maxBuffer: 20 * 1024 * 1024 },
    );
    if (result.error) throw result.error;
    if (result.status !== 0)
      throw new Error(
        ["Read-only viewer generation failed:", result.stdout, result.stderr]
          .filter(Boolean)
          .join("\n")
          .trim(),
      );
    const html = await readFile(htmlPath, "utf8");
    if (!html.trim())
      throw new Error("The private viewer did not produce HTML");
    await mkdir(dirname(resolvedOutputPath), { recursive: true });
    await writeFile(resolvedOutputPath, html, { flag: "wx" });
    return { outputPath: resolvedOutputPath };
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}
