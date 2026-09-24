import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

// Recorded EasyEDA response for TPS62160DSGR (C324077); use the real converter.
const component = JSON.parse(
  await readFile(new URL("./C324077.json", import.meta.url), "utf8"),
);

export async function importFetch(url, options) {
  if (
    url === "https://jlcsearch.tscircuit.com/api/search?limit=10&q=TPS62160DSGR"
  ) {
    return Response.json({
      components: [
        { mfr: "TPS62160DGKR", lcsc: 999 },
        { mfr: "TPS62160DSGR", lcsc: 324077 },
      ],
    });
  }
  if (url === "https://easyeda.com/api/components/search") {
    assert.equal(new URLSearchParams(options.body).get("wd"), "C324077");
    return Response.json({
      success: true,
      result: {
        lists: { lcsc: [{ uuid: component.uuid, lcsc: component.lcsc }] },
      },
    });
  }
  if (
    url ===
    `https://easyeda.com/api/components/${component.uuid}?version=6.4.7&uuid=${component.uuid}&datastrid=`
  ) {
    return Response.json({ success: true, result: component });
  }
  if (new URL(url).hostname === "modelcdn.tscircuit.com") {
    return new Response(
      options?.method === "HEAD" ? null : "v 0 0 0\nv 2 2 0.8\n",
    );
  }
  throw new Error(`Unexpected request: ${url}`);
}
