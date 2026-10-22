import { test, expect } from "bun:test";
import { mkdtemp, mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { prepareBoard } from "../scripts/prepare-board.mjs";

test("a prepared board restarts without cloning, installing or changing source", async () => {
  const demoDir = await mkdtemp(join(tmpdir(), "ti-demo-restart-"));
  const projectDir = join(demoDir, ".demo/imrishabh18.pedometer");
  const tools = { tscircuit: "0.0.3003", "@tscircuit/ti": "1.0.11" };
  await mkdir(join(projectDir, "node_modules/.bin"), { recursive: true });
  await mkdir(join(projectDir, "node_modules/@tscircuit/ti/cli"), {
    recursive: true,
  });
  await writeFile(join(projectDir, "node_modules/.bin/tsci"), "");
  await writeFile(
    join(projectDir, "node_modules/@tscircuit/ti/cli/ti.mjs"),
    "",
  );
  await writeFile(
    join(demoDir, "package.json"),
    JSON.stringify({ devDependencies: tools }),
  );
  await writeFile(
    join(projectDir, "package.json"),
    JSON.stringify({ devDependencies: tools }),
  );
  await writeFile(join(demoDir, ".demo/ready.json"), JSON.stringify({ tools }));
  const circuitSource = "// Existing user pin-attribute edits\n";
  await writeFile(join(projectDir, "index.circuit.tsx"), circuitSource);
  const commands = {
    run: () => {
      throw new Error("Unexpected clone/install");
    },
  };
  expect(await prepareBoard({ demoDir, commands })).toBe(projectDir);
  expect(await readFile(join(projectDir, "index.circuit.tsx"), "utf8")).toBe(
    circuitSource,
  );
  await rm(demoDir, { recursive: true, force: true });
});
