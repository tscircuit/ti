import { watchSysconfigUrl } from "./watch/watch-url.mjs";

process.exitCode = await watchSysconfigUrl("index.circuit.tsx", {
  viewerUrl: process.env.SYSCONFIG_VIEWER_URL,
});
