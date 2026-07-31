import { expect, test } from "bun:test";
import { measureTPS63802MaximumOutputCurrent } from "../lib/simulations/tps63802/TPS63802DatasheetMeasurements";

const timestampsMs = [0.66, 0.69, 0.71, 0.721, 0.732];

const createSeries = (values) => ({
  timestampsMs,
  values,
});

test("measures maximum output current from the TSX load ramp", () => {
  const context = {
    getVoltage: () => createSeries([3.3, 3.3, 3.3, 3.25, 2.8]),
    getCurrent: () => createSeries([0, 0, 0.25, 0.5, 0.75]),
  };

  expect(measureTPS63802MaximumOutputCurrent(context)).toBe(0.5);
});
