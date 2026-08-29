/**
 * TIDA-01421 Altium binary SchDoc coordinates are stored on a 10 mil grid.
 *
 * Every schematic coordinate in this extraction uses one transform:
 *   schX = (altiumX - originX) * 0.028
 *   schY = (altiumY - originY) * 0.028
 *
 * The positive Y direction is unchanged. Altium stores this schematic on a
 * 10-mil grid. The 0.028 scale preserves every relative Altium component
 * center while matching the source sheet's visual density with native
 * tscircuit symbols.
 * Native symbols are not all the same size as their Altium counterparts, so
 * the previous 0.029 scale made the extracted blocks unnecessarily sparse.
 */
export const TIDA01421_ALTIUM_SCALE = 0.028;

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
