import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { CommandProcesses } from "./command-processes.mjs";
import { GenerationQueue } from "./generation-queue.mjs";
import { prepareBoard } from "./prepare-board.mjs";
import { publishTab } from "./publish-tab.mjs";
import { watchSource } from "./watch-source.mjs";

export class LiveSysconfigDemo {
  demoDir = fileURLToPath(new URL("../", import.meta.url));
  commands = new CommandProcesses();
  queue;
  watcher;
  failed = false;
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
      const outputDir = join(projectDir, ".sysconfig");
      await mkdir(outputDir, { recursive: true });
      const tiCli = join(projectDir, "node_modules/@tscircuit/ti/cli/ti.mjs");
      const tscircuitCli = join(projectDir, "node_modules/tscircuit/cli.mjs");
      const viewerUrl =
        process.env.SYSCONFIG_VIEWER_URL ??
        "https://sysconfig-viewer.vercel.app/";
      this.queue = new GenerationQueue({
        generate: async (revision) => {
          const outputPath = join(outputDir, "index.syscfg");
          console.log(
            `[SysConfig ${revision}] Building from current pin attributes…`,
          );
          await this.commands.run(
            [
              tiCli,
              "generate-sysconfig",
              "index.circuit.tsx",
              "-o",
              outputPath,
            ],
            { cwd: projectDir, capture: true },
          );
          return this.commands.run(
            [
              tiCli,
              "generate-sysconfig-url",
              outputPath,
              "--viewer-url",
              viewerUrl,
            ],
            { cwd: projectDir, capture: true },
          );
        },
        publish: async (iframeUrl) => {
          await publishTab({ projectDir, iframeUrl });
          this.failed = false;
          console.log("[SysConfig] Updated RunFrame iframe URL.");
        },
        onError: (error) => {
          this.failed = true;
          console.error(
            "[SysConfig] Generation failed. The last successful page is unchanged; correct the source and save again.\n",
            error,
          );
        },
      });
      this.watcher = watchSource({ projectDir, queue: this.queue });
      this.watcher.on("error", (error) => {
        console.error("[SysConfig] Source watcher failed:", error);
        process.exitCode = 1;
        void this.stop();
      });
      this.queue.request();
      await this.queue.flush();
      if (this.commands.stopped) return;
      if (this.failed)
        throw new Error(
          "Initial SysConfig generation failed; dev server was not started.",
        );
      console.log(
        `Edit ${join(projectDir, "pin-specs.ts")} and save. Select SysConfig in RunFrame.`,
      );
      await this.commands.run(
        [tscircuitCli, "dev", "index.circuit.tsx", ...process.argv.slice(2)],
        { cwd: projectDir },
      );
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
    this.queue?.stop();
    this.watcher?.close();
    this.closing = this.commands.stop();
    return this.closing;
  }
}

export async function startDemo() {
  await new LiveSysconfigDemo().start();
}
