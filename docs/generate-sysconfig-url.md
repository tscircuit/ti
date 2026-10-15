# Generate a SysConfig viewer URL

```sh
ti generate-sysconfig-url ./index.circuit.tsx
ti generate-sysconfig-url ./index.syscfg
ti generate-sysconfig-url ./index.circuit.json --component U1
```

The command prints only the full URL, suitable for opening in a browser
or supplying as RunFrame's `iframeUrl`. An existing `.syscfg` is read without
executing or modifying it. Circuit inputs (`.tsx`, `.ts`, `.jsx`, `.js`,
`.circuit.json`, or `circuit.json`) use the existing SysConfig converter; TS/TSX
runs a PCB-enabled tscircuit build first, preserving board data in build outputs.
Build and conversion failures return an error without printing a URL.

Circuit conversion writes its `.syscfg` into a temporary directory and removes
it on success or failure. Existing sibling `.syscfg` files are preserved.
Use `--component U1` to select an MCU, or `--config ./request.json` for an explicit
legacy converter request. These options apply only to circuit inputs and cannot
be combined. Supported request-free circuits use their existing pin attributes.

It requires Bun, but no private viewer installation, TI tools, SDK or server.
URL encoding makes no network requests. Circuit source builds use the normal
tscircuit build and the project's installed dependencies.
The public URL codec is shared through `sysconfigts/url` and bundled into the
npm CLI distribution. Private viewer assets are not included.

The default viewer address is `https://sysconfig-viewer.vercel.app/`. Override it
for another deployment or a local preview:

```sh
ti generate-sysconfig-url ./index.syscfg --viewer-url https://viewer.example/
```

URLs must use HTTP(S) without embedded username/password credentials. Existing
or generated `.syscfg` source must be nonempty UTF-8 of at most 4 MiB. The
version 2 gzip/base64 fragment preserves the filename and exact source, including Unicode, a BOM and
line endings. Errors go to stderr with a nonzero exit status; no partial URL is
printed. There is no automatic file upload or URL shortening.

The full URL contains the configuration source. Share it only with intended
recipients. Its fragment is not sent in the HTTP request path/query, but the
receiving page and anyone with the full URL can decode it. Encoding an existing
`.syscfg` does not validate syntax, targets or pins. Circuit inputs run the
normal converter checks; neither path runs TI validation. The hosted viewer
needs matching device metadata to render the configuration.

`ti generate-sysconfig-site` remains the separate self-contained HTML command;
it still needs the private renderer installed in the circuit project. The URL
command does not add project tabs automatically. CLI/RunFrame integration can
pass the printed URL through their existing iframe-tab configuration.
