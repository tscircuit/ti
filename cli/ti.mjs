#!/usr/bin/env node
import { runCli } from "./main.mjs";

process.exitCode = await runCli(process.argv.slice(2));
