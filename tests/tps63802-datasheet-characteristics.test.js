import { expect, test } from "bun:test";
import { getTPS63802DatasheetMeasurement } from "../lib/simulations/tps63802/TPS63802DatasheetCharacteristics";

test("returns digitized TPS63802 datasheet points", () => {
  expect(
    getTPS63802DatasheetMeasurement({
      figure: "10-3",
      horizontalCoordinate: 3.7,
      seriesCoordinate: 3.3,
    }),
  ).toBe(1.16);
  expect(
    getTPS63802DatasheetMeasurement({
      figure: "10-12",
      horizontalCoordinate: 0.03,
      seriesCoordinate: 3.6,
    }),
  ).toBe(0.8);
});

test("interpolates logarithmic TPS63802 characteristic axes", () => {
  const interpolatedEfficiency = getTPS63802DatasheetMeasurement({
    figure: "10-6",
    horizontalCoordinate: Math.sqrt(0.001 * 0.003),
    seriesCoordinate: 2.5,
  });

  expect(interpolatedEfficiency).toBeCloseTo(9);
});
