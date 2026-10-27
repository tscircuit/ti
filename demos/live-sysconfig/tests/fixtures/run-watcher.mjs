import { watchSysconfigUrl } from "../../scripts/watch/watch-url.mjs";

process.exitCode = await watchSysconfigUrl(process.argv[2], {
  stdout: console.log,
});
