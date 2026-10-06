import { spawnSync as nodeSpawnSync } from "node:child_process";
import { readdirSync, realpathSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, posix, resolve, win32 } from "node:path";
import {
  getTiCliVersion,
  getTiTargetProfile,
  readTiSdkMetadata,
  tiSetupError,
  validateConfiguredTiPaths,
  validateTiTarget,
} from "./ti-cli.mjs";

export function getTiInstallationRoots({
  env = process.env,
  platform = process.platform,
  homeDir = homedir(),
} = {}) {
  const paths = platform === "win32" ? win32 : posix;
  const roots = [paths.join(homeDir, "ti")];
  if (platform === "win32")
    roots.push(paths.join(env.SystemDrive || "C:", "\\ti"));
  else {
    if (platform === "darwin") roots.push("/Applications/ti");
    roots.push("/opt/ti", "/ti");
  }
  return [...new Set(roots)];
}

function isFile(filePath) {
  try {
    return statSync(filePath).isFile();
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR") return false;
    throw tiSetupError(
      `Could not inspect TI file ${filePath}: ${error.message}`,
    );
  }
}

function installationDirectories(root) {
  try {
    return readdirSync(root, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() || entry.isSymbolicLink())
      .map((entry) => join(root, entry.name))
      .sort();
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR") return [];
    throw tiSetupError(
      `Could not search TI installation folder ${root}: ${error.message}`,
    );
  }
}

function uniquePaths(paths) {
  const seen = new Set();
  return paths.filter((installedPath) => {
    const canonicalPath = realpathSync(installedPath);
    if (seen.has(canonicalPath)) return false;
    seen.add(canonicalPath);
    return true;
  });
}

export function discoverTiInstallations({
  env = process.env,
  roots = getTiInstallationRoots({ env }),
  platform = process.platform,
} = {}) {
  validateConfiguredTiPaths(env);
  const sysconfigDirectories = [];
  const sdkRoots = [];
  // Inspect only TI roots and the known CCS utils folders, never the whole disk.
  if (!env.TI_SYSCONFIG_CLI || !env.TI_SDK_ROOT) {
    for (const root of roots) {
      for (const directory of installationDirectories(root)) {
        if (isFile(join(directory, "dist", "cli.js")))
          sysconfigDirectories.push(directory);
        if (isFile(join(directory, ".metadata", "product.json")))
          sdkRoots.push(directory);
        for (const ccsRoot of [join(directory, "ccs"), directory]) {
          for (const utilityDirectory of installationDirectories(
            join(ccsRoot, "utils"),
          )) {
            if (isFile(join(utilityDirectory, "dist", "cli.js")))
              sysconfigDirectories.push(utilityDirectory);
          }
        }
      }
    }
  }
  const cliPaths = env.TI_SYSCONFIG_CLI
    ? [env.TI_SYSCONFIG_CLI]
    : sysconfigDirectories.map((directory) =>
        join(directory, "dist", "cli.js"),
      );
  const nodeFilename = platform === "win32" ? "node.exe" : "node";
  const missingBundledNodes = [];
  const sysconfigInstallations = uniquePaths(cliPaths).flatMap((tiCli) => {
    const directory = dirname(dirname(tiCli));
    const tiNode =
      env.TI_SYSCONFIG_NODE ||
      [
        join(directory, "nodejs", nodeFilename),
        resolve(directory, "../../tools/node", nodeFilename),
      ].find(isFile);
    if (!tiNode) {
      missingBundledNodes.push(tiCli);
      return [];
    }
    return [{ tiNode, tiCli }];
  });
  const sdkInstallations = uniquePaths(
    env.TI_SDK_ROOT ? [env.TI_SDK_ROOT] : sdkRoots,
  );
  if (!sysconfigInstallations.length || !sdkInstallations.length) {
    const missing = [];
    if (!sysconfigInstallations.length) {
      missing.push(
        "  SysConfig with its bundled Node: install SysConfig or set TI_SYSCONFIG_CLI and TI_SYSCONFIG_NODE.",
      );
      if (missingBundledNodes.length)
        missing.push(
          `  CLI found without a bundled Node: ${missingBundledNodes.join(", ")}. Set TI_SYSCONFIG_NODE.`,
        );
    }
    if (!sdkInstallations.length)
      missing.push(
        "  TI SDK: install the SDK for your chip or set TI_SDK_ROOT to its directory containing .metadata/product.json.",
      );
    throw tiSetupError(
      `Could not find installed TI tools:\n${missing.join("\n")}\nSearched: ${roots.join(", ")}.`,
    );
  }
  return {
    sysconfigInstallations,
    sdkInstallations,
    roots,
    missingBundledNodes,
  };
}

function selectCompatibleInstallation({
  candidates,
  setting,
  requirement,
  rejected,
}) {
  if (!candidates.length) {
    throw tiSetupError(
      `${requirement}; no compatible installation found.\n${rejected.join("\n")}\nInstall the required version or set ${setting} to a compatible installation.`,
    );
  }
  if (candidates.length > 1) {
    throw tiSetupError(
      `Found multiple compatible installations for ${requirement}:\n${candidates.map((candidate) => `  ${candidate.path}`).join("\n")}\nSet ${setting} to choose the installation to use.`,
    );
  }
  return candidates[0].installation;
}

export function resolveTiEnvironment({
  target,
  installations,
  env = process.env,
  spawnSync = nodeSpawnSync,
  stderr = console.error,
}) {
  const profile = getTiTargetProfile(target);
  if (env.TI_SYSCONFIG_NODE && env.TI_SYSCONFIG_CLI && env.TI_SDK_ROOT) {
    validateTiTarget({ target, env, spawnSync });
    return env;
  }
  const compatibleSdks = [];
  const rejectedSdks = [];
  const unusableInstallations = installations.missingBundledNodes.map(
    (tiCli) => `  ${tiCli}: bundled Node is missing`,
  );
  for (const sdkRoot of installations.sdkInstallations) {
    let sdk;
    try {
      sdk = readTiSdkMetadata(sdkRoot);
    } catch (error) {
      const diagnostic = error.problem ?? error.message;
      rejectedSdks.push(diagnostic);
      unusableInstallations.push(diagnostic);
      continue;
    }
    if (sdk.name === profile.sdkName && sdk.version === profile.sdkVersion) {
      compatibleSdks.push({ path: sdkRoot, installation: sdkRoot });
    } else
      rejectedSdks.push(
        `  ${sdkRoot}: ${sdk.name ?? "unknown"}@${sdk.version ?? "unknown"}`,
      );
  }
  const sdkRoot = selectCompatibleInstallation({
    candidates: compatibleSdks,
    rejected: rejectedSdks,
    setting: "TI_SDK_ROOT",
    requirement: `${target.toUpperCase()} requires ${profile.sdkName}@${profile.sdkVersion}`,
  });
  const compatibleTools = [];
  const rejectedTools = [];
  for (const installation of installations.sysconfigInstallations) {
    let version;
    try {
      version = getTiCliVersion({ ...installation, env, spawnSync });
    } catch (error) {
      const diagnostic = error.problem ?? error.message;
      rejectedTools.push(diagnostic);
      unusableInstallations.push(diagnostic);
      continue;
    }
    if (version === profile.sysconfigVersion) {
      compatibleTools.push({ path: installation.tiCli, installation });
    } else
      rejectedTools.push(
        `  ${installation.tiCli}: SysConfig ${version || "unknown"}`,
      );
  }
  const { tiNode, tiCli } = selectCompatibleInstallation({
    candidates: compatibleTools,
    rejected: rejectedTools,
    setting: "TI_SYSCONFIG_CLI",
    requirement: `${target.toUpperCase()} requires TI SysConfig ${profile.sysconfigVersion}`,
  });
  if (unusableInstallations.length)
    stderr(
      `Warning: these discovered TI installations could not be used:\n${unusableInstallations.join("\n")}`,
    );
  return {
    ...env,
    TI_SYSCONFIG_NODE: tiNode,
    TI_SYSCONFIG_CLI: tiCli,
    TI_SDK_ROOT: sdkRoot,
  };
}
