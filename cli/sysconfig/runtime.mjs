import { spawnSync as nodeSpawnSync } from "node:child_process";

export function requireBun({
  bun = "bun",
  spawnSync = nodeSpawnSync,
  env = process.env,
} = {}) {
  const result = spawnSync(bun, ["--version"], {
    env,
    encoding: "utf8",
  });
  if (result.error || result.status !== 0) {
    throw new Error(
      "SysConfig commands require Bun on PATH. Install Bun and retry `ti generate-sysconfig` or `ti check-sysconfig`.",
    );
  }
}
