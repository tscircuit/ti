# CC2340 pedometer validation

Validated on 2026-09-30 with the original `seveibar/pedometer` v0.4.4 source,
tscircuit 0.0.2463, Bun 1.3.9, CCS 21.0.1, SysConfig 1.28.1+4785, and SimpleLink
F3 SDK 9.21.00.36 (official source commit
`c55fa9bae0ec71b103508afac4861d446204669b`). The CLI pins converter
`9049b4cce0510088d9b48397759528cb532a0dbd`, merged in
[converter PR #5](https://github.com/tscircuit/circuit-json-to-sysconfig/pull/5).

Both exact commands pass from the installed npm tarball, with the source
entrypoint copied byte-for-byte to `pedometer.tsx` and an adjacent request file:

```sh
ti generate-sysconfig ./pedometer.tsx
ti check-sysconfig ./pedometer.tsx
```

Set `TI_SYSCONFIG_NODE`, `TI_SYSCONFIG_CLI`, and `TI_SDK_ROOT` to the installed
tools before the check command. The source archive and provenance are retained in
the converter repository's `tests/fixtures/pedometer` directory.

| Request | TI result |
| --- | --- |
| Display isolation | DIO20, push-pull output, initially high |
| PMIC low-power | DIO3, push-pull output, initially low |
| Accelerometer interrupt | DIO12, input, no pull or interrupt |
| I2C SDA/SCL | DIO8 / DIO6, I2C0 |
| I2C maximum rate | 100 kbit/s; `I2C_100kHz` |
| LF clock | Internal LF RCOSC, explicitly requested |
| Display/SWD reservations | Display pins unconfigured; SWD pins preserved |

CCS opens the generated file as CC2340R5 / VQFN (RGE), reports no problems, and
shows the requested settings. Real TI emits seven files. The three relevant
driver/device C and header files match a separately saved CCS reference
byte-for-byte. Both generated C files also compile individually for Cortex-M0+
with TI ARM Clang 5.1.1.LTS. The converter's `bun run validate:cc2340` reproduces
the electrical/pin/rate/startup/parity checks and real TI DIO12-to-DIO13 fixture
regression. This is separate from the CLI's acceptance/output-presence check.

The real board exposed connected-trace net resolution missing from the CLI.
It also exposed SDK LaunchPad flash initialization and external-crystal defaults;
the companion converter correction handles those at their source.

Local checks pass: 16 CLI tests, the existing import snapshot, root typecheck,
format check, npm build, and isolated local/global installed-package tests.
The TI subprocess is mocked only in unit tests; the validation above used the
installed TI tools. No temporary local dependency links remain in the package.

Converter PR #5 is merged; its tree is byte-identical to the locally validated
revision. PR #250 remains draft while the separate registry build is pending.
The previous registry build timeout is not claimed fixed.
SysConfig 1.26.3, a complete firmware link, and hardware operation were not tested.
