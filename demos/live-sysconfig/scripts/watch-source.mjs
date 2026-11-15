import { watch } from "node:fs";
import { basename, extname } from "node:path";

export function isCircuitSource(filename) {
  const normalized = filename.replaceAll("\\", "/");
  if (
    normalized
      .split("/")
      .some((segment) =>
        [
          "node_modules",
          "dist",
          ".git",
          ".tscircuit",
          ".build",
          ".sysconfig",
        ].includes(segment),
      )
  )
    return false;
  if (basename(normalized).startsWith("tscircuit.config.")) return false;
  return [".ts", ".tsx", ".js", ".jsx", ".json", ".kicad_mod"].includes(
    extname(normalized),
  );
}

export function watchSource({ projectDir, queue }) {
  return watch(projectDir, { recursive: true }, (_event, filename) => {
    if (filename && isCircuitSource(filename)) queue.request();
  });
}
