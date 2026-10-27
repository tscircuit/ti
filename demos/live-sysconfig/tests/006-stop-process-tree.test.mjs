import { test, expect } from "bun:test";
import { mkdtemp, readFile, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { CommandProcesses } from "../scripts/watch/command-processes.mjs";

test("shutdown terminates the command and its build subprocess", async () => {
  const projectDir = await mkdtemp(join(tmpdir(), "ti-demo-process-"));
  const scriptPath = join(projectDir, "parent.mjs");
  const pidPath = join(projectDir, "pids.json");
  await writeFile(
    scriptPath,
    `import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
const child = spawn(process.execPath, ['-e', 'setInterval(() => {}, 1000)'], { stdio: 'inherit' });
writeFileSync(${JSON.stringify(pidPath)}, JSON.stringify([process.pid, child.pid]));
setInterval(() => {}, 1000);`,
  );
  const commands = new CommandProcesses();
  const pending = commands
    .run([scriptPath], { cwd: projectDir, capture: true })
    .catch((error) => error);
  let pids;
  for (let attempt = 0; attempt < 100; attempt++) {
    try {
      pids = JSON.parse(await readFile(pidPath, "utf8"));
      break;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    await Bun.sleep(20);
  }
  await commands.stop();
  await pending;
  expect(pids).toHaveLength(2);
  for (const pid of pids) expect(() => process.kill(pid, 0)).toThrow();
  expect(() => commands.run([scriptPath])).toThrow("stopped");
  await rm(projectDir, { recursive: true, force: true });
});
