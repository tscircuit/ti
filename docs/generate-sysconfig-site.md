# Generate a standalone read-only SysConfig site

```sh
ti generate-sysconfig-site ./index.syscfg
ti generate-sysconfig-site ./dist/index/circuit.json -o ./site/sysconfig.html
ti generate-sysconfig-site ./index.circuit.tsx
```

This command needs Bun and the matching authorised private
`@tscircuit/sysconfig-viewer` package installed in the input's project. It does
not need TI SysConfig, CCS, an SDK installation, TI environment variables or a
firmware request file for supported request-free conversion. The public TI
package does not contain the private copied UI or bundle the private renderer.
An absent or incompatible renderer gives an installation/version error; no
alternative viewer is substituted.

For development, build/test the private viewer PR and use the handbook's local
yalc workflow in the circuit project. Install an approved private GitHub revision
for a reproducible handoff; the required viewer API is `generateReadOnlyHtml`,
`getBundledSdkCatalog`, and `readReadOnlyViewerInput` from its `/html` export.

An existing `.syscfg` is read unchanged. Circuit JSON uses the existing converter.
TS/TSX input runs a PCB-enabled tscircuit build before conversion, so it does not
replace board geometry with schematic-only data. Board build or conversion
errors fail the command; checks are not suppressed. A configured board's
existing `.syscfg` is sufficient when only the viewer is needed.

Output defaults to `<input-stem>.sysconfig.html`. `--output` selects a new file,
and existing outputs are preserved. `--catalog` supplies matching versioned SDK
JSON metadata. Otherwise the private viewer selects bundled metadata by exact
recorded device/package/product version. An unsupported target needs an explicit
matching catalog, rather than another chip's defaults. `--component` and the
legacy `--config` apply only to circuit inputs.

The output is ordinary self-contained static HTML. Serve it over HTTP for
RunFrame iframe integration; pass its URL through the independent RunFrame/CLI
tab APIs. This command does not edit project tab configuration, start a vendor
host, publish a website or depend on a hardcoded host/port.

Values are displayed read-only from source, with SDK declarations/defaults kept
separate. The source is never executed. Fixed requests are not asserted as solved
pins. Dynamic callbacks and undeclared effective values remain unevaluated.
Successful site generation is not TI validation or firmware generation.

Validation includes subprocess protocol tests with an explicitly named renderer
fixture, and separate local end-to-end generation against the real private viewer
and configured imrishabh18/pedometer source. Protocol fixtures do not establish
TI UI parity.
