import assert from "node:assert/strict";
import { test } from "node:test";
import { GenerationQueue } from "../../scripts/watch/generation-queue.mjs";

test("watch discards superseded builds, reports failures, and recovers", async () => {
  const published = [];
  const errors = [];
  const revisions = [];
  let finishFirst;
  const firstBuild = new Promise((resolveBuild) => {
    finishFirst = resolveBuild;
  });
  const queue = new GenerationQueue({
    generate: async (revision) => {
      revisions.push(revision);
      if (revision === 1) await firstBuild;
      if (revision === 4) throw new Error("Invalid circuit source");
      return `url-${revision}`;
    },
    publish: async (iframeUrl) => {
      published.push(iframeUrl);
    },
    onError: (error) => {
      errors.push(error.message);
    },
  });
  try {
    queue.request();
    const pending = queue.flush();
    queue.request();
    queue.request();
    finishFirst();
    await pending;
    assert.deepEqual(revisions, [1, 3]);
    assert.deepEqual(published, ["url-3"]);
    queue.request();
    await queue.flush();
    assert.deepEqual(published, ["url-3"]);
    assert.deepEqual(errors, ["Invalid circuit source"]);
    queue.request();
    await queue.flush();
    assert.deepEqual(published, ["url-3", "url-5"]);
  } finally {
    queue.stop();
  }
});
