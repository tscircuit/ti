import { test, expect } from "bun:test";
import { GenerationQueue } from "../scripts/watch/generation-queue.mjs";

test("failed edits keep the last successful page and recover on the next save", async () => {
  const published = [];
  const errors = [];
  const queue = new GenerationQueue({
    generate: async (revision) => {
      if (revision === 2) throw new Error("Invalid pin attributes");
      return `revision-${revision}`;
    },
    publish: async (iframeUrl) => {
      published.push(iframeUrl);
    },
    onError: (error) => {
      errors.push(error.message);
    },
  });
  queue.request();
  await queue.flush();
  queue.request();
  await queue.flush();
  expect(published).toEqual(["revision-1"]);
  queue.request();
  await queue.flush();
  queue.stop();
  expect(published).toEqual(["revision-1", "revision-3"]);
  expect(errors).toEqual(["Invalid pin attributes"]);
});
