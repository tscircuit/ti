import { test, expect } from "bun:test";
import { GenerationQueue } from "../scripts/watch/generation-queue.mjs";

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
  expect(published).toEqual([]);
});
