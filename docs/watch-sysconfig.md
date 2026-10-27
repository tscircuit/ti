# Watch SysConfig during development

Install `@tscircuit/ti` and a current `tscircuit` in the board project, with Bun
on PATH. Run these two processes together:

```sh
tsci dev ./index.circuit.tsx
ti watch-sysconfig ./index.circuit.tsx
```

The TI command builds the circuit, generates `.syscfg`, encodes its viewer URL,
and writes the `SysConfig` entry in `tscircuit.config.json` using the existing
`extraRunFrameTabs` support. Saving a source file repeats that process. The dev
server picks up the changed URL and RunFrame updates its iframe automatically.
Open the SysConfig tab, change a pin attribute in the board source, save it, and
inspect the new value in the viewer. The viewer stays read-only.

To start both through `bun run dev`, add this manually to the **board project's**
`package.json` after installing `concurrently` as a development dependency:

```json
{
  "scripts": {
    "dev": "concurrently --kill-others \"tsci dev ./index.circuit.tsx\" \"ti watch-sysconfig ./index.circuit.tsx\""
  }
}
```

This command ships in TI; no board scaffold or extra tscircuit CLI hook is needed.
Both processes stop when the combined script is interrupted.

## Behavior and limits

- An initial generation runs at startup. Imported TS/JS, JSON pin configuration,
  and local footprint changes trigger regeneration. Generated output, dependencies,
  Git files, and `tscircuit.config.*` writes do not trigger builds.
- Builds run one at a time. Superseded builds do not publish stale URLs. Errors
  are visible on stderr and preserve the last successful preview; correct the
  source/config and save a source file again to retry. Successful updates are quiet.
- Generated source is stored under `.tscircuit/sysconfig/`. Existing project
  settings and other tabs are preserved. Tabs are scoped to the input circuit.
- `.circuit.json` / `circuit.json` inputs watch the built file directly, including
  atomic replacement under `dist`. An existing `.syscfg` input watches only that
  file, encodes it without executing it, and creates an unscoped SysConfig tab.
- Currently supports macOS/Linux and `tscircuit.config.json`. Projects with
  `tscircuit.config.ts` or `.js` are rejected explicitly to avoid conflicting tab
  definitions. The watcher does not edit module-based configuration.
- `--viewer-url https://viewer.example/` selects another viewer deployment.
  Encoded URLs contain the configuration source. Generation does not perform TI
  validation; rendering still depends on the hosted viewer's target support.
- No local SDK, TI software, or private viewer package is needed for watching and
  URL generation. `check-sysconfig` and standalone HTML generation retain their
  separate requirements.

`generate-sysconfig`, `generate-sysconfig-url`, and `generate-sysconfig-site`
remain one-shot commands. Stop watching with Ctrl+C.
