# Live SysConfig pedometer demo

From the TI checkout:

```sh
bun install
cd demos/live-sysconfig
bun install --frozen-lockfile
bun run dev
```

`bun run dev` automatically starts the published `tsci dev` and the demo's
source watcher. Saving pin attributes regenerates `.syscfg`, encodes its viewer
URL, and updates the existing RunFrame iframe tab. There is no extra command,
watch flag, configuration hook, or private viewer import.

Requires macOS/Linux, Bun, Git and Node.js 22.14+. Root dependencies provide the
existing local TI generation commands. The first run clones the latest public
`imrishabh18/pedometer` registry board into `.demo/imrishabh18.pedometer` and
installs the demo's pinned published dependencies there. Later runs reuse that
board and preserve your edits. The tested clone is version 1.1.6;
`.demo/ready.json` records the actual board name/version and tool versions.

## Try a pin change

1. Open the local address printed by `tsci dev` and select **SysConfig**
   (it may be under **More views**).
2. Select GPIO / `CONFIG_U1_PIN9` in the viewer.
3. Edit `.demo/imrishabh18.pedometer/pin-specs.ts`.
4. For board 1.1.6, change `U1.pin9` from `output` to `input` and save.
5. Wait for the preview to update automatically. Mode becomes Input and the
   input fields replace output fields. The selected tab/instance stays open.
   Restore `output` to demonstrate the reverse change.

For a chosen port:

```sh
bun run dev --port 5335
```

The viewer is read-only. Edit circuit sources rather than viewer controls.
Generation takes a fresh TI/tscircuit conversion plus URL encoding; the existing
RunFrame configuration polling then picks up the URL. No browser reload or
second manual generation command is needed.

## Implementation

The demo launcher starts `scripts/watch-sysconfig.mjs` internally. It monitors
project TS/JS sources, imported pin attributes, JSON and footprint files, then
runs the existing TI commands from this checkout:

```sh
ti generate-sysconfig ./index.circuit.tsx -o .tscircuit/sysconfig/index.syscfg
ti generate-sysconfig-url .tscircuit/sysconfig/index.syscfg
```

The generated source is saved in the cloned board at
`.demo/imrishabh18.pedometer/.tscircuit/sysconfig/index.syscfg`. The encoded URL
is published only to the matching `SysConfig` tab in the clone's existing
`tscircuit.config.json`, preserving other settings/tabs. No URL or routine
progress logs are printed by the watcher; errors remain visible on stderr.

Rapid changes are debounced, builds are serialized, and superseded results are
discarded. Generated files, dependencies, build outputs and config writes do
not trigger regeneration. The internal watcher can also monitor direct
`.syscfg` / Circuit JSON inputs, including atomic replacements under `dist`.
Source inputs scope the tab to that path; direct `.syscfg` inputs are unscoped.
The current demo supports JSON configuration and explicitly rejects module
configuration files that could override generated tabs.

A failed edit reports the error and retains the last successful URL. Correct
the source/config and save a source file again. Watching continues even if the
first conversion fails. Ctrl+C stops the server, watcher and in-flight builds.
Run only one demo process per clone.

No installed TI SDK, TI validation tool or private viewer package is required.
The hosted viewer uses its supported target metadata. This does not run TI's
pin solver or generate/validate firmware. The upstream board has existing PCB
errors; this demo verifies source-to-preview updates, not manufacturing readiness.

To use a different viewer deployment:

```sh
SYSCONFIG_VIEWER_URL=http://127.0.0.1:5331/ bun run dev
```

## Tests

After installing root dependencies:

```sh
bun run --cwd demos/live-sysconfig test
```

This runs the Node integration tests separately from Bun's unit tests. Coverage
includes actual URL encoding and file watching, atomic Circuit JSON updates,
failure recovery, discarded stale builds, preserving other tabs, quiet output,
restart without overwriting source edits, and subprocess shutdown.
