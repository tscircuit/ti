import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  findProjectDir,
  getInputStem,
} from "../../../../cli/sysconfig/input.mjs";
import { DEFAULT_SYSCONFIG_VIEWER_URL } from "../../../../cli/sysconfig/generate-url.mjs";
import { CommandProcesses } from "./command-processes.mjs";
import { GenerationQueue } from "./generation-queue.mjs";
import { publishTab } from "./publish-tab.mjs";
import { watchSource } from "./watch-source.mjs";

const tiCli = fileURLToPath(new URL("../../../../cli/ti.mjs", import.meta.url));
const circuitExtensions = new Set([".ts", ".tsx", ".js", ".jsx"]);

class SysconfigUrlWatcher {
  commands = new CommandProcesses();
  watcher;
  queue;
  closing;
  finished;
  finish;
  stopped = false;
  onInterrupt = () => void this.stop(130);
  onTerminate = () => void this.stop(143);

  constructor(inputPath, options) {
    const {
      cwd = process.cwd(),
      viewerUrl = DEFAULT_SYSCONFIG_VIEWER_URL,
      stdout = () => {},
      stderr = console.error,
      env = process.env,
    } = options;
    this.inputPath = resolve(cwd, inputPath);
    this.projectDir = findProjectDir(this.inputPath, cwd);
    this.isSysconfig = extname(this.inputPath).toLowerCase() === ".syscfg";
    this.isCircuitJson =
      this.inputPath.toLowerCase().endsWith(".circuit.json") ||
      basename(this.inputPath) === "circuit.json";
    this.mainComponentPath = this.isSysconfig
      ? undefined
      : relative(this.projectDir, this.inputPath).replaceAll("\\", "/");
    this.viewerUrl = viewerUrl;
    this.stdout = stdout;
    this.stderr = stderr;
    this.env = env;
    this.finished = new Promise((resolveStop) => {
      this.finish = resolveStop;
    });
  }

  async start() {
    if (!["darwin", "linux"].includes(process.platform))
      throw new Error("SysConfig watch currently supports macOS and Linux");
    if (!existsSync(this.inputPath))
      throw new Error(`Input file does not exist: ${this.inputPath}`);
    if (
      !this.isSysconfig &&
      !circuitExtensions.has(extname(this.inputPath).toLowerCase()) &&
      !this.inputPath.toLowerCase().endsWith(".circuit.json") &&
      basename(this.inputPath) !== "circuit.json"
    )
      throw new Error(
        "Watch accepts .syscfg, circuit TS/JS sources, or Circuit JSON",
      );
    const parsedUrl = new URL(this.viewerUrl);
    if (
      !["http:", "https:"].includes(parsedUrl.protocol) ||
      parsedUrl.username ||
      parsedUrl.password
    )
      throw new Error(
        "The SysConfig viewer requires an HTTP(S) URL without credentials",
      );
    for (const configName of ["tscircuit.config.ts", "tscircuit.config.js"]) {
      if (existsSync(join(this.projectDir, configName)))
        throw new Error(
          `Watch manages tscircuit.config.json; ${configName} could override its tabs. Use a project with JSON configuration for this preview.`,
        );
    }
    this.outputPath = this.isSysconfig
      ? this.inputPath
      : join(
          this.projectDir,
          ".tscircuit",
          "sysconfig",
          `${getInputStem(this.inputPath)}.syscfg`,
        );
    await mkdir(dirname(this.outputPath), { recursive: true });
    this.queue = new GenerationQueue({
      generate: () => this.generate(),
      publish: (iframeUrl, revision) => this.publish(iframeUrl, revision),
      onError: (error) =>
        this.stderr(
          `[watch] Generation failed; the last successful URL is unchanged. Correct the source/config and save a source file again.\n${error.message}`,
        ),
    });
    this.watcher = watchSource({
      projectDir:
        this.isSysconfig || this.isCircuitJson
          ? dirname(this.inputPath)
          : this.projectDir,
      queue: this.queue,
      inputFilename:
        this.isSysconfig || this.isCircuitJson
          ? basename(this.inputPath)
          : undefined,
    });
    this.watcher.on("error", (error) => {
      this.stderr(`[watch] Source watcher failed: ${error.message}`);
      void this.stop(1);
    });
    process.once("SIGINT", this.onInterrupt);
    process.once("SIGTERM", this.onTerminate);
    this.queue.request();
    void this.queue.flush();
    return this.finished;
  }

  async generate() {
    const options = { cwd: this.projectDir, capture: true, env: this.env };
    if (!this.isSysconfig)
      await this.commands.run(
        [tiCli, "generate-sysconfig", this.inputPath, "-o", this.outputPath],
        options,
      );
    return this.commands.run(
      [
        tiCli,
        "generate-sysconfig-url",
        this.outputPath,
        "--viewer-url",
        this.viewerUrl,
      ],
      options,
    );
  }

  async publish(iframeUrl, revision) {
    const published = await publishTab({
      projectDir: this.projectDir,
      iframeUrl,
      mainComponentPath: this.mainComponentPath,
      shouldPublish: () => !this.stopped && revision === this.queue.revision,
    });
    if (published) {
      this.stdout(iframeUrl);
    }
  }

  stop(exitCode) {
    if (this.closing) return this.closing;
    this.stopped = true;
    this.queue?.stop();
    this.watcher?.close();
    process.removeListener("SIGINT", this.onInterrupt);
    process.removeListener("SIGTERM", this.onTerminate);
    this.closing = this.commands.stop().then(() => this.finish(exitCode));
    return this.closing;
  }
}

export async function watchSysconfigUrl(inputPath, options = {}) {
  const watcher = new SysconfigUrlWatcher(inputPath, options);
  return watcher.start();
}
