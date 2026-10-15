# Generate a SysConfig viewer URL

```sh
ti generate-sysconfig-url ./index.circuit.tsx
ti generate-sysconfig-url ./index.syscfg
```

The command prints only the full URL, suitable for opening in a browser
or supplying as RunFrame's `iframeUrl`. Circuit inputs use the existing converter
with a temporary `.syscfg`; existing `.syscfg` files are read unchanged.
It requires Bun, but no private viewer installation, TI tools, SDK or server.
The public URL codec is shared through `sysconfigts/url` and bundled into the
npm CLI distribution. Private viewer assets are not included.

The default viewer address is `https://sysconfig-viewer.vercel.app/`. Override it
for another deployment or a local preview:

```sh
ti generate-sysconfig-url ./index.syscfg --viewer-url https://viewer.example/
```

URLs must use HTTP(S) without embedded username/password credentials. Encoded source must
be a nonempty UTF-8 `.syscfg` file of at most 4 MiB. The version 2 gzip/base64
fragment preserves the filename and exact source, including Unicode, a BOM and
line endings. Errors go to stderr with a nonzero exit status; no partial URL is
printed. There is no automatic file upload or URL shortening.

The full URL contains the configuration source. Share it only with intended
recipients. Its fragment is not sent in the HTTP request path/query, but the
receiving page and anyone with the full URL can decode it. URL encoding is not
syntax, target, pin, or TI validation. The hosted viewer needs matching device
metadata to render the configuration.

`ti generate-sysconfig-site` remains the separate self-contained HTML command;
it still needs the private renderer installed in the circuit project. The URL
command does not add project tabs automatically. CLI/RunFrame integration can
pass the printed URL through their existing iframe-tab configuration.
