# Publishing @tscircuit/ti

The public npm package provides the `ti` executable and the TI component library.
Its release workflow follows the `pver` and version-bump PR process used by
[`tscircuit`](https://github.com/tscircuit/tscircuit/blob/main/.github/workflows/bun-pver-release.yml)
and [`@tscircuit/cli`](https://github.com/tscircuit/cli/blob/main/.github/workflows/bun-pver-release.yml).

## Package layout

- Root `package.json`: the `@tsci/tscircuit.ti` registry package and the authoritative version.
- `npm/package.json`: the `@tscircuit/ti` manifest template, without a separate version.
- `dist/npm`: the built npm distribution, including the root version and the `ti` executable.

Never run a plain `npm publish` or `pver release` in the repository root:
that would target the tscircuit registry package. The workflow uses
`pver release --git --package-json --no-push-main` to bump the root version and
push a `v*` tag without publishing the root or pushing directly to `main`.
It then builds, tests, and publishes `dist/npm` explicitly.

## One-time setup

1. Give this repository access to the `TSCIRCUIT_BOT_GITHUB_TOKEN` Actions secret,
   as in the CLI repository. The bot needs permission to push tags and branches,
   create pull requests, and enable auto-merge. Enable repository auto-merge and
   configure the appropriate required checks for version PRs.
2. If `@tscircuit/ti` does not exist on npm yet, a maintainer with publish access
   to the `@tscircuit` organization must publish the first version. From a clean
   checkout of `main`, using Node 22.14 or newer and Bun:

   ```bash
   bun install --no-save
   bun run test:cli
   bun run build:npm
   bun run test:npm
   npm login
   npm publish ./dist/npm --access public
   ```

3. In the npm package's Settings → Trusted publishing, configure GitHub Actions:
   - Organization: `tscircuit`
   - Repository: `ti`
   - Workflow filename: `npm-publish.yml`
   - Environment: leave empty
   - Allow direct publication with `npm publish`

The workflow uses Node 24, npm 11, and `id-token: write` for OIDC authentication.
It does not need an npm token. The GitHub bot token is only for GitHub operations.
See [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/).

## Automatic releases

`.github/workflows/npm-publish.yml` runs on pushes to `main` and can be started
manually on `main` from GitHub Actions. Release jobs run serially.

1. `pver` analyzes Git history, updates the root version, commits it locally, and
   pushes a `v*` tag. No change in version means the remaining release steps skip.
2. CLI tests, the npm build, and package tests run. Package tests exercise local
   and global installation, CLI search/import, ESM/CJS, declarations, and `tsci build`.
3. `npm publish ./dist/npm --access public --provenance` publishes `@tscircuit/ti`.
4. The bot opens a `version-bumps/v*` PR and enables squash auto-merge. Version-bump
   commits do not trigger another release when merged.

The old `npm-v*` tag trigger is no longer used. Do not edit a second version in
`npm/package.json`; the build takes it from the root manifest.

Like the upstream pver process, the version tag is pushed before npm publication.
If validation or publication fails, inspect the failed run and fix the cause, then
rerun the workflow on `main`. pver skips existing version tags, so a retry can use
a later version. Check npm if a run failed after publication but before opening
the version PR.

## Verify a published release

```bash
npm install -g @tscircuit/ti
ti search "buck converter"
ti import TPS62160DSGR
```

The `tsci` executable is provided separately by `npm install -g tscircuit`.
Use a current release to run `tsci search --ti "buck converter"`.
