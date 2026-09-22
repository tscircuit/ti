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
```

This installs the component library in npm's global package directory. It does
not provide a terminal command or make imports resolve in local projects;
install it in each project where you use its components.

See the [library documentation](https://github.com/tscircuit/ti#readme) for the
available chips, reference subcircuits, and connection examples. Examples using
`@tsci/tscircuit.ti` have the same exports; use `@tscircuit/ti` for npm imports.
