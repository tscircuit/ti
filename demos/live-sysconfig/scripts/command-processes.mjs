import { spawn } from "node:child_process";

export class CommandProcesses {
  children = new Set();
  stopped = false;

  run(args, { cwd, capture = false } = {}) {
    if (this.stopped) throw new Error("The demo has stopped");
    const child = spawn(process.execPath, args, {
      cwd,
      detached: true,
      stdio: capture ? ["ignore", "pipe", "pipe"] : "inherit",
    });
    this.children.add(child);
    let stdout = "";
    let stderr = "";
    child.stdout?.setEncoding("utf8").on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr?.setEncoding("utf8").on("data", (chunk) => {
      stderr += chunk;
    });
    return new Promise((resolveCommand, reject) => {
      child.once("error", reject);
      child.once("close", (code, signal) => {
        this.children.delete(child);
        if (code === 0) resolveCommand(stdout.trim());
        else
          reject(
            new Error(
              `${args[0]} exited ${code ?? signal}\n${stderr || stdout}`,
            ),
          );
      });
    });
  }

  async stop() {
    this.stopped = true;
    const children = [...this.children];
    for (const child of children) signalCommand(child, "SIGTERM");
    if (children.length === 0) return;
    await new Promise((resolveStop) => setTimeout(resolveStop, 1000));
    for (const child of children) signalCommand(child, "SIGKILL");
  }
}

function signalCommand(child, signal) {
  if (!child.pid) return;
  try {
    // Stop the whole Bun -> TI -> tscircuit build tree on macOS/Linux.
    process.kill(-child.pid, signal);
  } catch (error) {
    if (error.code !== "ESRCH") throw error;
  }
}
