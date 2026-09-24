import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { runCli } from "../../cli/main.mjs";

const entry = fileURLToPath(new URL("../../cli/ti.mjs", import.meta.url));
const part = {
  mfr: "TPS62160DSGR",
  ti_product_number: "TPS62160DSGR",
  package: "WSON",
  description: "Buck converter",
  stock: 1200,
  price: null,
  product_url: "https://www.ti.com/product/TPS62160/part-details/TPS62160DSGR",
  datasheet_url: "https://www.ti.com/lit/ds/symlink/tps62160.pdf",
};

async function run(args, respond) {
  const requests = [];
  const stdout = [];
  const stderr = [];
  const status = await runCli(args, {
    fetch: async (url) => {
      requests.push(url);
      return respond();
    },
    stdout: (line) => stdout.push(line),
    stderr: (line) => stderr.push(line),
  });
  return {
    status,
    requests,
    stdout: stdout.join("\n"),
    stderr: stderr.join("\n"),
  };
}

test("ti search prints matching parts for a quoted query", () => {
  const result = spawnSync(
    process.execPath,
    [
      "--import",
      new URL("./fixtures/mock-fetch.mjs", import.meta.url).href,
      entry,
      "search",
      "buck converter",
    ],
    { encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stderr, "");
  assert.equal(
    result.stdout.trim(),
    "Found 1 component(s) in TI search:\n1. TPS62160DSGR - Buck converter (stock: 1,200)",
  );
});

test("ti search fails when the query is missing", () => {
  const result = spawnSync(process.execPath, [entry, "search"], {
    encoding: "utf8",
  });
  assert.equal(result.status, 1);
  assert.equal(result.stdout, "");
  assert.match(result.stderr, /A search query is required/);
});

test("JSON search joins and encodes query words and preserves TI metadata", async () => {
  const result = await run(
    ["search", "--json", "LM358/NOPB", "&", "amplifier"],
    () => Response.json({ components: [part] }),
  );
  assert.equal(result.status, 0);
  assert.equal(result.stderr, "");
  assert.deepEqual(result.requests, [
    "https://tisearch.tscircuit.com/api/search?limit=10&q=LM358%2FNOPB%20%26%20amplifier",
  ]);
  assert.deepEqual(JSON.parse(result.stdout), {
    query: "LM358/NOPB & amplifier",
    results: [{ ...part, source: "ti" }],
  });
});

test("search reports no matches without failing", async () => {
  const result = await run(["search", "missing"], () =>
    Response.json({ components: [] }),
  );
  assert.equal(result.status, 0);
  assert.equal(result.stderr, "");
  assert.equal(
    result.stdout,
    'No results found for "missing" in Texas Instruments.',
  );
});

test("search reports HTTP failures on stderr instead of returning results", async () => {
  const result = await run(
    ["search", "--json", "buck converter"],
    () => new Response("unavailable", { status: 503 }),
  );
  assert.equal(result.status, 1);
  assert.equal(result.stdout, "");
  assert.equal(result.stderr, "Failed to search: TI search failed (HTTP 503)");
});
