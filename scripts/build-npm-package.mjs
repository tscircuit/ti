import { spawnSync } from "node:child_process";
import {
  chmod,
  copyFile,
  cp,
  mkdir,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = new URL("../dist/", import.meta.url);
const output = new URL("npm/", dist);
const files = ["index.js", "index.cjs", "index.d.ts"];

// Never package an old bundle if transpilation fails to produce every output.
await rm(output, { recursive: true, force: true });
for (const file of files) await rm(new URL(file, dist), { force: true });
const result = spawnSync(
  "bun",
  ["node_modules/tscircuit/cli.mjs", "transpile", "index.ts"],
  { cwd: root, stdio: "inherit" },
);
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

await mkdir(output, { recursive: true });
for (const file of files) {
  await copyFile(new URL(file, dist), new URL(file, output));
}
// pver versions the root package. Keep the generated npm distribution on that
// same version without maintaining a second version in the manifest template.
const { version } = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8"),
);
const manifest = JSON.parse(
  await readFile(new URL("../npm/package.json", import.meta.url), "utf8"),
);
await writeFile(
  new URL("package.json", output),
  `${JSON.stringify({ ...manifest, version }, null, 2)}\n`,
);
await copyFile(
  new URL("../npm/README.md", import.meta.url),
  new URL("README.md", output),
);
await cp(new URL("../cli/", import.meta.url), new URL("cli/", output), {
  recursive: true,
});
await chmod(new URL("cli/ti.mjs", output), 0o755);
console.log("Built @tscircuit/ti in dist/npm");
