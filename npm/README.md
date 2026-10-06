# @tscircuit/ti

Texas Instruments chip components and reusable reference subcircuits for
[tscircuit](https://github.com/tscircuit/ti).

## Install in a circuit project

```sh
npm install @tscircuit/ti tscircuit react
```

```tsx
import { BQ24074, PowerMonitor_INA237 } from "@tscircuit/ti";

export default () => (
  <board width="30mm" height="20mm">
    <BQ24074 name="U1" />
    <PowerMonitor_INA237 name="Monitor" />
  </board>
);
```

The package includes ESM, CommonJS, and TypeScript declarations. Node.js 22.14
or newer is required. React, tscircuit, and `@tscircuit/props` are peer dependencies so the library
uses the same runtime as your circuit project.

## Global installation

```sh
npm install -g @tscircuit/ti
ti search "buck converter"
ti search --json "buck converter"
ti import TPS62160DSGR
```

The `ti search` command searches the same Texas Instruments catalog as
`tsci search --ti`, returning up to 10 components. Queries can be quoted or
passed as separate words. Use `--json` for `{ query, results }` output, including
TI metadata and `source: "ti"` on every result, or `ti --help` for usage.

`ti import TPS62160DSGR` finds the exact manufacturer part in LCSC/JLCPCB,
converts its EasyEDA symbol and footprint, and writes `imports/TPS62160DSGR.tsx`.
You can also use an LCSC ID directly: `ti import C324077`.
Use the result with `import { TPS62160DSGR } from "./imports/TPS62160DSGR"`.
Existing files are never overwritten. Imports require an internet connection
and an available EasyEDA part. They contain individual chips, not complete
reference subcircuits; available 3D models remain remote links.

SysConfig generation is available from the same executable:

Install [Bun](https://bun.sh/) first; both SysConfig commands require `bun` on
`PATH` in addition to Node.js.

```sh
ti generate-sysconfig ./board.circuit.tsx
ti check-sysconfig ./board.circuit.tsx
```

Use tscircuit 0.0.2745 or newer for TSX export. For supported CC2340 circuits, GPIO/I2C choices come from existing MCU
`pinAttributes` exported to Circuit JSON. No separate request JSON is required
or read implicitly. Missing connected-pin functions fail with physical pin and
source-port details and the required TSX attributes. Missing MCU port records
or connected source-port records also fail before a new `.syscfg` is written.
Use `--component U1` when selecting between multiple MCUs.
Connected 32768 Hz two-terminal crystals on MCU pins 14/15 select the external
LF clock. Undeclared startup, interrupt, bitrate and RTOS choices stay unset for
TI's SDK; these defaults do not establish application requirements.

The generate command builds TS/TSX to Circuit JSON and writes a `.syscfg`; the check command then
runs a matching locally installed TI SysConfig CLI. Generation needs Node.js and
Bun, without TI software. Checking requires standalone SysConfig and the SDK
for the chip; full CCS is optional. Run `ti check-sysconfig --help` for downloads,
supported versions and setup. Missing or invalid paths produce an error
explaining how to correct them. The check searches `~/ti` and standard system
TI folders (`/Applications/ti` on macOS, `/opt/ti` and `/ti` on Unix, `C:\ti` on
Windows), including standalone and CCS-bundled SysConfig. It selects matching
tool/SDK versions and prints their paths. No environment file is required.
Broken discovered installations are reported when another compatible installation
is selected. Source builds use the project's `tscircuit` dependency when present;
a broken dependency fails with a repair message instead of using another copy.
`TI_SYSCONFIG_NODE`, `TI_SYSCONFIG_CLI`, and `TI_SDK_ROOT` remain optional
overrides for custom locations or multiple compatible installations. Explicit
paths take precedence and are never replaced if invalid or incompatible. For CC2340, use
SysConfig 1.28.1+4785 and SimpleLink F3 SDK 9.21.00.36; the checker verifies
these versions and compares TI-generated GPIO, I²C, and declared clock settings with
the resolved circuit configuration. It never downloads TI software or accepts license terms
automatically. See the repository
README for the existing pin attributes and currently supported converter targets.
An explicit `--config board.sysconfig.json` remains available for older callers
and the AM2434 single-GPIO path; implicit sidecar requests are no longer loaded.

For AM2434, the checker requires SysConfig 1.14.0+2667 and MCU+ SDK
`MCU_PLUS_SDK@07.03.01`; it compares the supported single output GPIO's
name, A7/B7 pin, direction, and pinmux assignment with the request.

Global installation does not make imports resolve in local projects; install
the package in each project where you use its components.

See the [library documentation](https://github.com/tscircuit/ti#readme) for the
available chips, reference subcircuits, and connection examples. Examples using
`@tsci/tscircuit.ti` have the same exports; use `@tscircuit/ti` for npm imports.
