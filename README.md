# TI tscircuit library

- lib/chips
- lib/subcircuits
- lib/demos

This repo contains hand-curated tscircuit TSX schematics for TI
devices and common circuit primitives.

List of chips present:
- [x] MSPM0G3507
- [x] CC2340R5
- [x] CC3235SF
- [x] TMP1075
- [x] HDC2080
- [x] HDC3020
- [x] HDC3022
- [x] TPS63802
- [x] TPS7A02
- [x] TPSM82823
- [x] TPS62933
- [x] DRV8876
- [x] DRV8833
- [x] TPS22919
- [x] BQ25180
- [x] BQ24074
- [x] BQ25895
- [x] BQ27441-G1
- [x] INA237

The goal is to make it easier to assemble reusable reference circuits around TI
MCUs, wireless devices, sensors, power-management parts, battery chargers,
motor drivers, and current monitors.

Common primitives such as batteries, USB-C inputs, motors, switches, LEDs,
pullups, and debug connectors may also be included where they help build useful
end-to-end examples.

## Development

```bash
bun install
bun run dev
```

Use `bun run build` to build the package and `bun run typecheck` to check the
TypeScript sources.
