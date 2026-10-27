import { test, expect } from "bun:test";
import { GenerationQueue } from "../scripts/watch/generation-queue.mjs";

test("rapid edits serialize generation and publish only the newest revision", async () => {
  const published = [];
  const revisions = [];
  let releaseFirst;
  const firstBuild = new Promise((resolveBuild) => {
    releaseFirst = resolveBuild;
  });
  const queue = new GenerationQueue({
    generate: async (revision) => {
      revisions.push(revision);
      if (revision === 1) await firstBuild;
      return `revision-${revision}`;
    },
    publish: async (iframeUrl) => {
      published.push(iframeUrl);
    },
    onError: (error) => {
      throw error;
    },
  });
  queue.request();
  const pending = queue.flush();
  queue.request();
  queue.request();
  releaseFirst();
  await pending;
  queue.stop();
  expect(revisions).toEqual([1, 3]);
  expect(published).toEqual(["revision-3"]);
});
