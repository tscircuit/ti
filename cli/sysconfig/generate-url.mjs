import { spawnSync as nodeSpawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getInputStem } from "./input.mjs";
import { generateSysconfig } from "./generate.mjs";

export const DEFAULT_SYSCONFIG_VIEWER_URL =
  "https://sysconfig-viewer.vercel.app/";
const rendererPath = fileURLToPath(
  new URL("./render-url.mjs", import.meta.url),
);

export async function generateSysconfigUrl(
  inputPath,
  {
    cwd = process.cwd(),
    viewerUrl = DEFAULT_SYSCONFIG_VIEWER_URL,
    componentSelector,
    configPath,
    spawnSync = nodeSpawnSync,
    env = process.env,
    bun = "bun",
  } = {},
) {
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
  const parsedUrl = new URL(viewerUrl);
  if (
    !["http:", "https:"].includes(parsedUrl.protocol) ||
    parsedUrl.username ||
    parsedUrl.password
  )
    throw new Error(
      "The SysConfig viewer requires an HTTP(S) URL without credentials",
    );
  const temporary = isSyscfg
    ? undefined
    : await mkdtemp(join(tmpdir(), "ti-sysconfig-url-"));
  try {
    const sourcePath = isSyscfg
      ? absoluteInput
      : join(temporary, `${getInputStem(absoluteInput)}.syscfg`);
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
    const result = spawnSync(bun, [rendererPath, sourcePath, parsedUrl.href], {
      cwd,
      env,
      encoding: "utf8",
      maxBuffer: 8 * 1024 * 1024,
    });
    if (result.error) throw result.error;
    if (result.status !== 0)
      throw new Error(
        [result.stdout, result.stderr].filter(Boolean).join("\n").trim() ||
          "URL encoding failed",
      );
    const encodedUrl = result.stdout.trim();
    if (!encodedUrl) throw new Error("URL encoder produced no URL");
    return encodedUrl;
  } finally {
    if (temporary) await rm(temporary, { recursive: true, force: true });
  }
}
