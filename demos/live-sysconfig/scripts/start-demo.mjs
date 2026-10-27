import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { CommandProcesses } from "./watch/command-processes.mjs";
import { prepareBoard } from "./prepare-board.mjs";

const watcherPath = fileURLToPath(
  new URL("./watch-sysconfig.mjs", import.meta.url),
);

class LiveSysconfigDemo {
  demoDir = fileURLToPath(new URL("../", import.meta.url));
  // Give the watcher time to finish its own build-process cleanup.
  commands = new CommandProcesses({ stopGraceMs: 2500 });
  closing;

  async start() {
    process.once("SIGINT", () => {
      process.exitCode = 130;
      void this.stop();
    });
    process.once("SIGTERM", () => {
      process.exitCode = 143;
      void this.stop();
    });
    try {
      const projectDir = await prepareBoard({
        demoDir: this.demoDir,
        commands: this.commands,
      });
      if (this.commands.stopped) return;
      // Start the demo-owned watcher alongside the unchanged published CLI.
      await Promise.race([
        this.commands.run([watcherPath], { cwd: projectDir }),
        this.commands.run(
          [
            join(projectDir, "node_modules/tscircuit/cli.mjs"),
            "dev",
            "index.circuit.tsx",
            ...process.argv.slice(2),
          ],
          { cwd: projectDir },
        ),
      ]);
    } catch (error) {
      if (!this.commands.stopped) {
        console.error(error);
        process.exitCode = 1;
      }
    }
    await this.stop();
  }

  stop() {
    if (this.closing) return this.closing;
    this.closing = this.commands.stop();
    return this.closing;
  }
}

export async function startDemo() {
  await new LiveSysconfigDemo().start();
}
