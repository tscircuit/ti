import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { runCli } from "../../cli/main.mjs";

test("Node entrypoint prints results and sets a nonzero exit code for errors", () => {
  const entry = fileURLToPath(new URL("../../cli/ti.mjs", import.meta.url));
  const success = spawnSync(
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
  assert.equal(success.status, 0, success.stderr);
  assert.match(success.stdout, /TPS62160DSGR - Buck converter/);
  const failure = spawnSync(process.execPath, [entry, "search"], {
    encoding: "utf8",
  });
  assert.equal(failure.status, 1);
  assert.equal(failure.stdout, "");
  assert.match(failure.stderr, /A search query is required/);
});

const part = {
  mfr: "TPS62160DSGR",
  ti_product_number: "TPS62160DSGR",
  lcsc: null,
  package: "WSON",
  description: "Buck converter",
  stock: 1200,
  price: null,
  product_url: "https://www.ti.com/product/TPS62160/part-details/TPS62160DSGR",
  datasheet_url: "https://www.ti.com/lit/ds/symlink/tps62160.pdf",
};

async function run(
  args,
  respond = () => Response.json({ components: [part] }),
) {
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

for (const query of [["buck converter"], ["buck", "converter"]]) {
  test(`search supports ${query.length === 1 ? "quoted" : "unquoted"} queries`, async () => {
    const result = await run(["search", ...query]);
    assert.equal(result.status, 0);
    assert.equal(result.stderr, "");
    assert.deepEqual(result.requests, [
      "https://tisearch.tscircuit.com/api/search?limit=10&q=buck%20converter",
    ]);
    assert.equal(
      result.stdout,
      "Found 1 component(s) in TI search:\n1. TPS62160DSGR - Buck converter (stock: 1,200)",
    );
  });
}

test("JSON output matches tsci search --ti and preserves TI metadata", async () => {
  const result = await run([
    "search",
    "--json",
    " LM358/NOPB",
    "&",
    "amplifier ",
  ]);
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

test("JSON flag can follow the query", async () => {
  const result = await run(["search", "buck converter", "--json"]);
  assert.equal(result.status, 0);
  assert.equal(JSON.parse(result.stdout).query, "buck converter");
});

test("empty results succeed in text and JSON modes", async () => {
  const respond = () => Response.json({ components: [] });
  const text = await run(["search", "missing"], respond);
  assert.equal(text.status, 0);
  assert.equal(
    text.stdout,
    'No results found for "missing" in Texas Instruments.',
  );
  const json = await run(["search", "--json", "missing"], respond);
  assert.equal(json.status, 0);
  assert.deepEqual(JSON.parse(json.stdout), { query: "missing", results: [] });
});

for (const args of [[], ["--help"], ["-h"], ["search", "--help"]]) {
  test(`help works without a network request: ${args.join(" ")}`, async () => {
    const result = await run(args);
    assert.equal(result.status, 0);
    assert.match(result.stdout, /Usage: ti search/);
    assert.equal(result.stderr, "");
    assert.deepEqual(result.requests, []);
  });
}

for (const args of [
  ["search"],
  ["search", "--json"],
  ["search", "   "],
  ["search", "buck converter", "--unknown"],
  ["unknown"],
]) {
  test(`invalid arguments fail without searching: ${args.join(" ")}`, async () => {
    const result = await run(args);
    assert.equal(result.status, 1);
    assert.equal(result.stdout, "");
    assert.ok(result.stderr);
    assert.deepEqual(result.requests, []);
  });
}

for (const [label, respond, message] of [
  [
    "HTTP errors",
    () => new Response("unavailable", { status: 503 }),
    "TI search failed (HTTP 503)",
  ],
  [
    "invalid response shapes",
    () => Response.json({ error: "bad response" }),
    "TI search returned an invalid response",
  ],
  [
    "network errors",
    () => {
      throw new Error("network unavailable");
    },
    "network unavailable",
  ],
  ["invalid JSON", () => new Response("not json"), "Failed to search:"],
]) {
  test(`${label} exit unsuccessfully without writing results`, async () => {
    const result = await run(["search", "--json", "buck converter"], respond);
    assert.equal(result.status, 1);
    assert.equal(result.stdout, "");
    assert.ok(result.stderr.includes(message));
  });
}
