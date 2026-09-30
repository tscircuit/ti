# SysConfig UI parity gate

Status on 2026-09-30: **BLOCKED before CLI implementation**. No UI-generated
baseline or output-equivalence result exists yet. This document is a validation
plan and an access record, not a claim that the two commands are implemented.

## Correct repository and command conventions

The implementation belongs in `tscircuit/ti`. The wrong-repository draft
[tscircuit/cli#5047](https://github.com/tscircuit/cli/pull/5047) was closed unmerged.
This branch starts from `tscircuit/ti/main` revision
`8b37d053dae636858c4f767403a2db50d317d1aa`; no implementation was copied from that PR.

Reviewed `cli/main.mjs`, `cli/import.mjs`, `tests/cli/search.test.mjs`,
`npm/package.json`, and `scripts/build-npm-package.mjs`. Existing commands use
small ESM `.mjs` modules, `node:util.parseArgs`, injectable stdout/stderr/cwd,
returned exit codes, and Node subprocess tests. The npm build copies `cli/`;
new command helpers must be included in the actual npm distribution and tested
from an installed package, not just a source checkout.

Requested interface, to implement only after the gate below passes:

```sh
ti generate-sysconfig ./somefile.tsx
ti check-sysconfig ./somefile.tsx
```

`generate-sysconfig` should compile TSX through the existing tscircuit compiler,
then call `circuit-json-to-sysconfig` to write a `.syscfg`. Circuit JSON input
should use the same conversion path without compiling. Required firmware choices
must be explicit; do not guess direction, startup levels, interrupts, SDK, RTOS,
or peripheral ownership from a signal name. Resolve stable component/port
selectors against each fresh build rather than persisting generated record IDs.
The exact project-options convention remains to be finalized from the validated
example; the two bare commands are the intended entry points, not evidence that
all firmware settings can be inferred from an arbitrary TSX file.

`check-sysconfig` should use the same conversion in a fresh temporary directory,
invoke the real matching TI SysConfig validator/code generator, and verify the
resolved assignments against the circuit-derived requests. It must not overwrite
project files. Unsupported input, missing tools/SDK, TI errors, or mismatches must
return nonzero. Parser/unit-test success is not TI validation. Neither command
should automatically install TI software or accept a license.

## Actual cloud-UI access attempt

[Actions run 36744926107](https://github.com/tscircuit/ti/actions/runs/36744926107)
opened `https://dev.ti.com/sysconfig/` in Playwright Chromium on Ubuntu 22.04.
At 2026-09-30 16:32:59 UTC it redirected to `login.ti.com`; the page title was
`Log in | myTI | Texas Instruments`. The visible form requested a myTI account ID.
No credentials were supplied, no agreement was accepted, and no circuit was
uploaded. The real SysConfig editor was not reached.

The successful diagnostic job only captured the login page. It is **not** a
successful UI-parity test. The `sysconfig-ui-preflight` artifact contains
`access.json` and `ui-access.png` (7-day retention). Its log explicitly says
`UI PARITY NOT RUN`.

The next prerequisite is an authorized TI desktop installation on a test host,
or an accessible authenticated UI session. Do not bypass the login or silently
accept installation terms. The temporary preflight workflow is diagnostic only
and must not be carried into the final CLI feature PR.

## Required independent UI comparison

Start with the actual pedometer v0.4.4 GPIO/I2C scope documented in the converter's
[provenance record](https://github.com/tscircuit/circuit-json-to-sysconfig/blob/007eb0475681b0088efa19e845b3807ab1b1ec27/tests/fixtures/pedometer/README.md).
Its documented environment is SysConfig **1.26.3+4558**, SimpleLink Low Power F3
SDK **9.21.00.36**, SDK revision
`c55fa9bae0ec71b103508afac4861d446204669b`, CC2340R5 / RGE, and NoRTOS.
Record the actual tool version, SDK revision, device, package, and RTOS used in
both comparison paths; do not compare outputs across different environments.

1. Independently configure a new project in the real SysConfig UI using the
   source wiring and explicit firmware choices. Save its `.syscfg`, screenshots,
   diagnostics, and all generated source files as the native UI baseline.
2. Export the same circuit using the converter. Open that unmodified export in
   the same UI/environment and capture the same evidence. Do not manually repair
   it in the UI to make the comparison pass; fix the converter separately and
   regenerate if needed.
3. Compare effective configuration and generated C/H, not merely `.syscfg` text
   or a screenshot. Account only for documented nonsemantic differences such as
   timestamps, paths, formatting, and generated JavaScript variable names. Do not
   discard real pin, electrical-mode, peripheral, or generated-code differences.
4. Retain reviewed baseline fixtures and repeat the comparison through the real
   TI CLI before building `ti check-sysconfig` around that validation path. Include
   a changed-TSX-pin regression and negative/conflict cases.

Required pedometer settings:

| Request | Exact physical assignment | Explicit setting |
| --- | --- | --- |
| CONFIG_DISPLAY_ISOLATE | pin 9 / DIO20_A11 | Output, initially High, standard push-pull |
| CONFIG_PMIC_LP | pin 14 / DIO3_X32P | Output, initially Low, standard push-pull |
| CONFIG_ACCEL_INT | pin 5 / DIO12 | Input, no pull, no interrupt |
| CONFIG_I2C_0 SDA | pin 3 / DIO8 | Same I2C bus as SCL |
| CONFIG_I2C_0 SCL | pin 19 / DIO6_A1_AR+ | 100 kbit/s |

Both output GPIOs use no pull and no interrupt. Check the generated I2C speed:
`maxBitRate = 100` in `.syscfg`, `CONFIG_I2C_0_MAXSPEED` resolving to `100U`, and
`CONFIG_I2C_0_MAXBITRATE` resolving to `I2C_100kHz`, not `I2C_400kHz`. Check exact
allocated pin sets and no unexpected display/debug peripheral allocations.
The historical `unmatched-reference.syscfg` has different wiring and an I2C-unit
error; it must not be used as the golden baseline. The separately authored
`v0.4.4-reference.syscfg` is still a candidate, not native-UI evidence.

The previous AM2434 real-TI CLI results do not establish CC2340 UI acceptance.
Any AM2434 support in the new CLI also needs its own matching environment and
reviewed UI baseline; do not silently generalize the pedometer result to it.
Firmware compilation and physical hardware operation remain separate checks.
