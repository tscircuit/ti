/**
 * TIDA-01421 Altium binary SchDoc coordinates are stored on a 10 mil grid.
 *
 * Every schematic coordinate in this extraction uses one transform:
 *   schX = (altiumX - originX) * 0.01827814
 *   schY = (altiumY - originY) * 0.01827814
 *
 * The positive Y direction is unchanged. The scale matches the normalized
 * Altium-to-tscircuit transform used by the TIDA reference-design subcircuits.
 */
export const TIDA01421_ALTIUM_SCALE = 0.01827814;

export type Tida01421AltiumOrigin = {
  x: number;
  y: number;
};

const roundCoordinate = (value: number) => Number(value.toFixed(6));

export const tida01421Delta = (value: number) =>
  roundCoordinate(value * TIDA01421_ALTIUM_SCALE);

export const tida01421Position = (
  x: number,
  y: number,
  origin: Tida01421AltiumOrigin,
) => ({
  schX: tida01421Delta(x - origin.x),
  schY: tida01421Delta(y - origin.y),
});
