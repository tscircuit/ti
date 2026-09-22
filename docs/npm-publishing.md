# Publishing @tscircuit/ti to npm

The repository keeps two distributions of the same component entrypoint:

- `package.json` remains `@tsci/tscircuit.ti` for the tscircuit registry.
- `npm/package.json` defines the public npm package `@tscircuit/ti` and its
  independent release version. `npm/README.md` is its npm-facing documentation.

The existing tscircuit registry workflow and source imports do not need to change.

## Build and verify

Use Bun and Node.js 22.14 or newer:

```sh
bun install
bun run build:npm
bun run test:npm
```

The build runs `tsci transpile index.ts`, then stages the ESM bundle, CommonJS
bundle, declarations, npm manifest, and README in `dist/npm`. Imported SPICE
model JSON is embedded by the transpiler. No circuit snapshots, examples,
System Block Builder files, or development dependencies are published.

The smoke test packs this directory, installs the tarball into a temporary
project, and checks ESM/CommonJS exports, an embedded model, a rendered circuit,
and a TypeScript consumer using bundler module resolution and ES2023 library
types. It builds a TSX consumer with `tsci build` and checks its schematic SVG.
It also installs the tarball globally using a
separate temporary npm prefix and loads both global JavaScript entrypoints.
The test requires network access for dependencies
and removes its temporary installations afterward.

To inspect the package manually:

```sh
npm pack ./dist/npm --dry-run
```

Always publish `./dist/npm`; publishing the repository root targets the existing
`@tsci/tscircuit.ti` package instead.

## First publication and trusted publishing

A maintainer with publish access to the npm `@tscircuit` organization must make
the first publication, after the build and smoke test pass:

```sh
npm login --registry=https://registry.npmjs.org
npm publish ./dist/npm --access public
```

In the npm settings for `@tscircuit/ti`, configure a GitHub Actions trusted
publisher with:

- Organization: `tscircuit`
- Repository: `ti`
- Workflow filename: `npm-publish.yml`

Subsequent releases use GitHub OIDC and provenance without a stored npm token.
The first published version cannot be published again; start tagged releases
with the next version.

## Subsequent releases

1. Bump the version in `npm/package.json` in a PR.
2. Merge the PR once the npm package checks pass.
3. Tag the merged commit with `npm-v<version>` and push the tag, for example:

   ```sh
   git tag npm-v1.0.1
   git push origin npm-v1.0.1
   ```

The publish workflow verifies that the tag matches the npm manifest, rebuilds
and tests the package, then publishes it to the public npm registry. Ordinary
pushes and pull requests only validate the package; they do not publish it.

## Installation behavior

After publication, `npm install @tscircuit/ti` installs the library for project
imports. React and tscircuit are peer dependencies; the manifest also declares
the packages referenced by the generated declarations.

`npm install -g @tscircuit/ti` installs it globally, but does not provide a CLI or
make the library available to project imports. Use a local installation when
writing circuits.

`@tscircuit/props` is a peer alongside React and tscircuit. Keeping it as a
narrowly pinned dependency can make newer core code resolve an older props
package that lacks required runtime exports. CI tests the development runtime
and `tscircuit@latest`; run `TSCIRCUIT_TEST_VERSION=latest bun run test:npm` to
exercise the latest runtime locally.

The TypeScript smoke test uses `moduleResolution: "bundler"`. Strict NodeNext
resolution currently reports extensionless imports in tscircuit's transitive
`@tscircuit/fanout-solver` types; this packaging change does not modify those
upstream types.
