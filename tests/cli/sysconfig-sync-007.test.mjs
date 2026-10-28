import { test } from "node:test";
import assert from "node:assert/strict";
import { GenerationQueue } from "../../cli/sysconfig/sync/generation-queue.mjs";

test("shutdown prevents an in-flight generation from publishing", async () => {
  let finishBuild;
  const pendingBuild = new Promise((resolveBuild) => {
    finishBuild = resolveBuild;
  });
  const published = [];
  const queue = new GenerationQueue({
    generate: () => pendingBuild,
    publish: async (iframeUrl) => {
      published.push(iframeUrl);
    },
    onError: (error) => {
      throw error;
    },
  });
  queue.request();
  const pending = queue.flush();
  queue.stop();
  finishBuild("stopped-revision");
  await pending;
  assert.deepEqual(published, []);
});
