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

The setup pins private viewer `main` at merged commit
`ef3543c8f8098677afd821b2d335646d5f716285` (viewer PR #9), which includes the
standalone renderer, compressed-source URL loading, inline read-only settings,
pin inspection and recorded I2C-owned GPIO dependencies. Ownership presentation
hides Alternative Mux for those GPIOs, including the parent dependency sections.
Install that exact revision in the circuit project for a reproducible handoff. With authorised
GitHub access, prepare the private package in a separate directory:

```sh
gh repo clone tscircuit/sysconfig-viewer
cd sysconfig-viewer
git checkout ef3543c8f8098677afd821b2d335646d5f716285
bun install --frozen-lockfile
bun pm pack
```

Then, from the circuit project's directory, install the resulting archive:

```sh
bun add --dev /path/to/sysconfig-viewer/tscircuit-sysconfig-viewer-0.0.1.tgz
ti generate-sysconfig-site ./index.syscfg
```

Keep this package and generated HTML private. The command resolves the viewer
from the input project, so installing it beside a global TI executable is not
sufficient. No private Git dependency or copied viewer assets are added to the
public TI distribution. For ongoing development, use the handbook's local yalc
workflow. The required viewer API is `generateReadOnlyHtml`,
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

Source assignments, SDK defaults and recorded dependency arguments appear in one
read-only form with provenance labels. The source is never executed. Fixed
requests are not asserted as solved pins. The browser uses finite exported
presentation cases without running SDK callbacks; unrecorded cases are identified
as unavailable.
Successful site generation is not TI validation or firmware generation.

Validation includes subprocess protocol tests with an explicitly named renderer
fixture, and separate local end-to-end generation against the real private viewer
and configured imrishabh18/pedometer source. Protocol fixtures do not establish
TI UI parity.

The real package checks also reject missing QFP dimensions, out-of-range package
pins, and an explicit RTOS/catalog mismatch before writing HTML. URL loading is
independent of this standalone HTML command; the same private package supplies
both APIs. The command resolves the package installed in the input project, so
updating TI alone does not replace an older viewer installation. Install the
pinned viewer revision and regenerate existing HTML to include its updates.
