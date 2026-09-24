import assert from "node:assert/strict";
import {
  mkdtemp,
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { runCli } from "../../cli/main.mjs";
import { importFetch } from "./fixtures/import-fetch.mjs";

async function fixture(t, fetch = importFetch) {
  const cwd = await mkdtemp(join(tmpdir(), "ti-import-"));
  t.after(() => rm(cwd, { recursive: true, force: true }));
  const originalFetch = globalThis.fetch;
  globalThis.fetch = fetch;
  t.after(() => {
    globalThis.fetch = originalFetch;
  });
  const stdout = [];
  const stderr = [];
  return {
    cwd,
    stdout,
    stderr,
    run: (query) =>
      runCli(["import", query], {
        cwd,
        stdout: (line) => stdout.push(line),
        stderr: (line) => stderr.push(line),
      }),
  };
}

test("import resolves the exact manufacturer part and writes converted EasyEDA TSX", async (t) => {
  const f = await fixture(t);
  assert.equal(await f.run("TPS62160DSGR"), 0, f.stderr.join("\n"));
  const tsx = await readFile(join(f.cwd, "imports/TPS62160DSGR.tsx"), "utf8");
  assert.match(tsx, /export const TPS62160DSGR/);
  assert.match(tsx, /pin2: \["VIN"\]/);
  assert.equal((tsx.match(/<smtpad /g) ?? []).length, 9);
  assert.match(tsx, /C324077/);
  assert.match(tsx, /manufacturerPartNumber="TPS62160DSGR"/);
  assert.match(f.stdout.join("\n"), /Imported imports\/TPS62160DSGR.tsx/);
  assert.deepEqual(f.stderr, []);
});

test("import refuses a similar part when there is no exact manufacturer match", async (t) => {
  const f = await fixture(t, async () =>
    Response.json({
      components: [{ mfr: "TPS62160DGKR", lcsc: 999 }],
    }),
  );
  assert.equal(await f.run("TPS62160DSGR"), 1);
  assert.match(f.stderr.join("\n"), /No exact LCSC match/);
  assert.deepEqual(await readdir(f.cwd), []);
});

test("import rejects an EasyEDA identity that differs from the requested part", async (t) => {
  const f = await fixture(t, async (url, options) => {
    const response = await importFetch(url, options);
    if (
      url.startsWith("https://easyeda.com/api/components/") &&
      url.includes("?")
    ) {
      const data = await response.json();
      data.result.dataStr.head.c_para["Manufacturer Part"] = "TPS62160DGKR";
      return Response.json(data);
    }
    return response;
  });
  assert.equal(await f.run("TPS62160DSGR"), 1);
  assert.match(f.stderr.join("\n"), /different or missing part identity/);
  assert.deepEqual(await readdir(f.cwd), []);
});

test("direct LCSC import preserves an existing local component", async (t) => {
  const f = await fixture(t);
  await mkdir(join(f.cwd, "imports"));
  const file = join(f.cwd, "imports/TPS62160DSGR.tsx");
  await writeFile(file, "// local modifications\n");
  assert.equal(await f.run("C324077"), 1);
  assert.match(f.stderr.join("\n"), /already exists/);
  assert.equal(await readFile(file, "utf8"), "// local modifications\n");
});
