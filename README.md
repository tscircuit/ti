# TI tscircuit library

This repo contains hand-curated tscircuit TSX schematics for Texas Instruments
devices and reusable TI reference subcircuits.

The published package is `@tsci/tscircuit.ti`. It provides ready-to-use
subcircuit components that can be imported into a local tscircuit project,
placed on a board, and connected to from the surrounding circuit.

## Installation

```bash
bun add @tsci/tscircuit.ti
```

## Basic Usage

Import the TI part you need from the package and place it inside a board.

```tsx
import { INA237Subcircuit } from "@tsci/tscircuit.ti"

export default () => (
  <board width="18mm" height="14mm">
    <INA237Subcircuit name="INA237" />
  </board>
)
```

## Connecting to Pins Inside a Subcircuit

Imported TI parts are subcircuits. To connect an external component to a pin
inside one of those subcircuits, use a selector string that starts with the
placed subcircuit name, then selects the internal component and pin.

```tsx
import { INA237Subcircuit } from "@tsci/tscircuit.ti"

export default () => (
  <board width="22mm" height="16mm">
    <INA237Subcircuit name="INA237" />
    <resistor
      name="R11"
      resistance="1k"
      footprint="0402"
      pcbX={7}
      pcbY={-3}
      connections={{
        pin1: ".INA237 .J1 .SCL",
      }}
    />
  </board>
)
```

The selector `".INA237 .J1 .SCL"` means:

- `.INA237` selects the placed `INA237` subcircuit.
- `.J1` selects the internal connector named `J1` inside that subcircuit.
- `.SCL` selects the `SCL` pin on that connector.

Use the same pattern for other exported TI subcircuits and their internal
components. For example, `".INA237 .U1 .VS"` selects the `VS` pin on the
internal `U1` chip inside the placed `INA237` subcircuit.

## Exported Subcircuits

The package currently exports these subcircuit components:

- `BQ24074Subcircuit`
- `BQ25895Subcircuit`
- `BQ27441G1Subcircuit`
- `CC2340R5Subcircuit`
- `CC3235SFSubcircuit`
- `DRV8833Subcircuit`
- `DRV8876Subcircuit`
- `HDC2080Subcircuit`
- `HDC3020Subcircuit`
- `HDC3022Subcircuit`
- `INA237Subcircuit`
- `MSPM0G3507Subcircuit`
- `TMP1075Subcircuit`
- `TPS22919Subcircuit`
- `TPS62933Subcircuit`
- `TPS63802Subcircuit`
- `TPS7A02Subcircuit`
- `TPSM82823Subcircuit`

The package also exports:

- `TiSubcircuitComponents`: an object map of all exported subcircuit components.
- `TiSubcircuitName`: a TypeScript union of keys in `TiSubcircuitComponents`.
- `TiSubcircuitComponent`: a TypeScript type for any exported subcircuit
  component.

## Key Directories

### `lib/chips`

The `lib/chips` directory contains the low-level TI chip components. Each file
represents an individual manufacturer part number and defines details such as
pin labels, aliases, supplier part numbers, and the physical footprint used by
tscircuit.

Use these files when you need the raw chip package itself. Most users should
import the higher-level subcircuits instead, but the chip definitions are the
building blocks those subcircuits use internally.

### `lib/subcircuits`

The `lib/subcircuits` directory contains reusable reference circuits built
around the chip definitions. A subcircuit usually includes the main TI part plus
supporting components such as capacitors, resistors, connectors, net labels, and
traces.

These are the components exported from the package entrypoint in `index.ts`.
For example, `INA237Subcircuit` comes from
`lib/subcircuits/INA237-subcircuit.circuit.tsx` and can be imported from
`@tsci/tscircuit.ti`.

The `lib/subcircuits/__snapshots__` directory contains generated schematic and
PCB SVG snapshots used to check visual output.

### `lib/simulations`

The `lib/simulations` directory contains example circuits for simulation-focused
TI use cases. These files exercise selected parts and reference designs, such as
driver PWM behavior or switching regulator waveforms.

Simulation examples may use model data from `lib/chips/spice-models`. The
`lib/simulations/__snapshots__` directory stores generated schematic and
simulation SVG snapshots.


## Development

Install dependencies:

```bash
bun install
```

Run the tscircuit dev server:

```bash
bun run dev
```

Build the package:

```bash
bun run build
```

Run TypeScript checks:

```bash
bun run typecheck
```

Update visual snapshots when intentional schematic, PCB, or simulation output
changes:

```bash
bun run snapshot:update
```
