import { expect, test } from "bun:test";

test("circuits use native traces instead of manual netlabel elements", async () => {
  const circuitFiles = [
    ...new Bun.Glob("{lib,examples}/**/*.tsx").scanSync({ cwd: "." }),
  ];

  for (const file of circuitFiles) {
    expect(await Bun.file(file).text(), file).not.toMatch(/<netlabel\b/);
  }
});
