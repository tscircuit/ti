import { spawnSync as nodeSpawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

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
    spawnSync = nodeSpawnSync,
    env = process.env,
    bun = "bun",
  } = {},
) {
  const absoluteInput = resolve(cwd, inputPath);
  if (!absoluteInput.toLowerCase().endsWith(".syscfg"))
    throw new Error(
      "Input must be an existing .syscfg file. Use ti generate-sysconfig for circuit inputs.",
    );
  if (!existsSync(absoluteInput))
    throw new Error(`Input file does not exist: ${inputPath}`);
  const parsedUrl = new URL(viewerUrl);
  if (
    !["http:", "https:"].includes(parsedUrl.protocol) ||
    parsedUrl.username ||
    parsedUrl.password
  )
    throw new Error(
      "The SysConfig viewer requires an HTTP(S) URL without credentials",
    );
  const result = spawnSync(bun, [rendererPath, absoluteInput, parsedUrl.href], {
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
}
