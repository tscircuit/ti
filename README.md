# TI tscircuit Parts

This repo contains hand-curated tscircuit TSX schematics for TI
devices and common circuit primitives.

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
