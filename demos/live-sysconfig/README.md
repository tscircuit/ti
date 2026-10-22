# Live pedometer SysConfig demo

Run from a checkout of `tscircuit/ti` on macOS or Linux:

```sh
cd demos/live-sysconfig
bun install --frozen-lockfile
bun run dev
```

Requires Bun, Git and Node.js 22.14+ (the published TI package's Node requirement).
The first `dev` run clones the latest public
[imrishabh18/pedometer](https://tscircuit.com/imrishabh18/pedometer) registry package
into `.demo/imrishabh18.pedometer` and installs the demo's pinned, published TI
and tscircuit versions there. This requires network access. Later runs reuse
that local board and preserve your edits. The cloned name/version is recorded
in `.demo/ready.json`; the acceptance run used version 1.1.6.

Open the local address printed by `tsci dev`, then select **SysConfig**.
No separate watcher terminal or new CLI command is needed. To choose a port:

```sh
bun run dev --port 5330
```

## Demonstrate a pin change

1. Open `.demo/imrishabh18.pedometer/pin-specs.ts` in your editor.
2. In the viewer, select GPIO and `CONFIG_U1_PIN9`.
3. For the 1.1.6 board, change `U1.pin9` from `output` to `input` and save.
4. Wait for `[SysConfig] Updated RunFrame iframe URL.` in the terminal.
5. The selected tab/instance remains open. Mode changes to Input, and the
   displayed fields change to the input settings. Change it back to `output`
   to demonstrate the reverse direction.

The viewer remains read-only. Make the changes in the circuit source, not its
controls. Generation takes a fresh tscircuit build plus URL encoding; RunFrame
polls the updated tab configuration every second. This is not instantaneous.
Other registry versions may use different instance names or pin choices.

## What runs

The demo owns the orchestration; the public tscircuit CLI and RunFrame are
unchanged. The commands run in the cloned board directory:

```sh
ti generate-sysconfig index.circuit.tsx -o .sysconfig/index.syscfg
ti generate-sysconfig-url .sysconfig/index.syscfg --viewer-url https://sysconfig-viewer.vercel.app/
tsci dev index.circuit.tsx
```

After the initial successful generation, `tsci dev` starts. Saving a circuit
source, imported pin-attribute file, or request JSON debounces and serializes
regeneration. A superseded build cannot publish its URL. The runner updates
only the matching SysConfig tab in the clone's `tscircuit.config.json`, preserving
other tabs/settings. The merged CLI polls that config and updates the iframe.
Generated files and config writes are excluded from the generator's source
watch, preventing regeneration loops.

The generated `.syscfg` and gzip/base64 URL contain real circuit settings.
No mocked GPIO values, SDK installation, private viewer package, GitHub token,
or TI validation command is required. The hosted viewer uses its supported
TI target metadata; this does not add support for arbitrary MCUs or run TI's
pin solver/firmware generator. URL fragments contain the source: share them
only with intended recipients.

If a later edit fails, the terminal reports the failure and retains the last
successful iframe. Fix the source and save again. An initial generation failure
stops startup. Ctrl+C stops the source watcher, server, and in-flight build
process tree. Run only one demo process per clone.

The board is an upstream demo circuit. This workflow verifies source-to-viewer
updates, not PCB routing, DRC, fabrication readiness or hardware behavior.
The runner never publishes the board back to the registry.

For a local viewer deployment, override its base URL explicitly:

```sh
SYSCONFIG_VIEWER_URL=http://127.0.0.1:5331/ bun run dev
```

## Tests

```sh
bun test tests
```

These cover serialization, superseded results, failure recovery, preserving
unrelated config, ignored generated files and stopping subprocess trees.
They do not require network access or a local TI SDK.
