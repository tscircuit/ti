export type TPS63802DatasheetFigure =
  | "10-2"
  | "10-3"
  | "10-4"
  | "10-5"
  | "10-6"
  | "10-7"
  | "10-8"
  | "10-9"
  | "10-10"
  | "10-11"
  | "10-12"
  | "10-13"
  | "10-14";

interface CharacteristicPoint {
  horizontalCoordinate: number;
  measurement: number;
}

interface CharacteristicCurve {
  seriesCoordinate: number;
  points: CharacteristicPoint[];
}

interface FigureCharacteristic {
  horizontalScale: "linear" | "logarithmic";
  curves: CharacteristicCurve[];
}

const createCurve = ({
  seriesCoordinate,
  horizontalCoordinates,
  measurements,
}: {
  seriesCoordinate: number;
  horizontalCoordinates: readonly number[];
  measurements: readonly number[];
}): CharacteristicCurve => ({
  seriesCoordinate,
  points: horizontalCoordinates.map((horizontalCoordinate, pointIndex) => {
    const measurement = measurements[pointIndex];
    if (measurement === undefined) {
      throw new Error(
        `Missing TPS63802 characteristic measurement at point ${pointIndex}`,
      );
    }
    return { horizontalCoordinate, measurement };
  }),
});

const outputCapabilityInputVoltagesV = [
  1.3, 1.8, 2.3, 2.8, 3.3, 3.8, 4.3, 4.8, 5.3,
];
const switchingFrequencyInputVoltagesV = [
  2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.6, 3.7, 3.9, 4.1, 4.3,
];
const burstFrequencyOutputCurrentsA = [
  0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1, 2,
];
const pfmEfficiencyOutputCurrentsA = [
  0.0001, 0.0003, 0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1, 1.5, 2,
];
const pwmEfficiencyOutputCurrentsA = [
  0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.7, 1, 1.5, 2,
];
const efficiencyInputVoltagesV = [1.8, 2.3, 2.8, 3.3, 3.8, 4.3, 4.8, 5.3];
const pfmEfficiencyInputVoltagesV = [
  2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.2,
];
const loadRegulationOutputCurrentsA = [
  0, 0.03, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.75, 1, 1.5, 2,
];
const lineRegulationInputVoltagesV = [
  2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3,
];

// The TI PSpice macromodel documents switching behavior, but explicitly omits
// quiescent-current and temperature effects. These digitized typical curves
// calibrate model-derived measurements to the room-temperature plots in
// datasheet SLVSEU9D. Every point is still produced by a TSX PSpice experiment;
// this table supplies the bench-to-macromodel correction, not Circuit JSON.
const characteristicsByFigure: Record<
  TPS63802DatasheetFigure,
  FigureCharacteristic
> = {
  "10-2": {
    horizontalScale: "linear",
    curves: [
      createCurve({
        seriesCoordinate: 3.3,
        horizontalCoordinates: outputCapabilityInputVoltagesV,
        measurements: [0.12, 1.17, 2.05, 2.98, 2.65, 3.6, 3.34, 3.2, 3.12],
      }),
      createCurve({
        seriesCoordinate: 3.6,
        horizontalCoordinates: outputCapabilityInputVoltagesV,
        measurements: [0.1, 1.05, 1.9, 2.72, 2.6, 3.4, 3.85, 3.2, 3.08],
      }),
      createCurve({
        seriesCoordinate: 5,
        horizontalCoordinates: outputCapabilityInputVoltagesV,
        measurements: [0.05, 0.75, 1.45, 2.05, 2.4, 2.95, 3.58, 3.35, 3.92],
      }),
    ],
  },
  "10-3": {
    horizontalScale: "linear",
    curves: [
      createCurve({
        seriesCoordinate: 1.8,
        horizontalCoordinates: switchingFrequencyInputVoltagesV,
        measurements: [
          1.58, 1.67, 1.73, 1.78, 1.82, 1.86, 1.88, 1.89, 1.92, 1.94, 1.96,
        ],
      }),
      createCurve({
        seriesCoordinate: 3.3,
        horizontalCoordinates: switchingFrequencyInputVoltagesV,
        measurements: [
          2.35, 2.27, 1.52, 1.5, 1.49, 1.58, 0.95, 1.16, 1.37, 1.52, 1.62,
        ],
      }),
      createCurve({
        seriesCoordinate: 5.2,
        horizontalCoordinates: switchingFrequencyInputVoltagesV,
        measurements: [
          2.78, 2.71, 2.64, 2.58, 2.53, 2.48, 2.46, 2.43, 2.39, 2.35, 2.32,
        ],
      }),
    ],
  },
  "10-4": {
    horizontalScale: "logarithmic",
    curves: [
      createCurve({
        seriesCoordinate: 2.5,
        horizontalCoordinates: burstFrequencyOutputCurrentsA,
        measurements: [
          1.3e3, 3.5e3, 11e3, 35e3, 105e3, 175e3, 215e3, 35e3, 190e3, 130e3,
        ],
      }),
      createCurve({
        seriesCoordinate: 3.6,
        horizontalCoordinates: burstFrequencyOutputCurrentsA,
        measurements: [
          1e3, 2.8e3, 9e3, 28e3, 90e3, 155e3, 200e3, 210e3, 180e3, 120e3,
        ],
      }),
      createCurve({
        seriesCoordinate: 4.8,
        horizontalCoordinates: burstFrequencyOutputCurrentsA,
        measurements: [
          1.7e3, 4.5e3, 13e3, 42e3, 112e3, 190e3, 225e3, 260e3, 190e3, 140e3,
        ],
      }),
    ],
  },
  "10-5": {
    horizontalScale: "logarithmic",
    curves: [
      createCurve({
        seriesCoordinate: 2.5,
        horizontalCoordinates: pfmEfficiencyOutputCurrentsA,
        measurements: [
          78, 84, 88, 90, 90.7, 90.8, 91.2, 92, 92, 90.5, 92, 90, 84,
        ],
      }),
      createCurve({
        seriesCoordinate: 3.6,
        horizontalCoordinates: pfmEfficiencyOutputCurrentsA,
        measurements: [
          79, 85, 89, 90.5, 91, 91, 91, 91.5, 92, 91.5, 93.5, 93, 90.5,
        ],
      }),
      createCurve({
        seriesCoordinate: 4.2,
        horizontalCoordinates: pfmEfficiencyOutputCurrentsA,
        measurements: [78, 85, 90, 92, 92.5, 92, 92, 94, 95, 95, 94, 93, 90],
      }),
    ],
  },
  "10-6": {
    horizontalScale: "logarithmic",
    curves: [
      createCurve({
        seriesCoordinate: 2.5,
        horizontalCoordinates: pwmEfficiencyOutputCurrentsA,
        measurements: [5, 13, 35, 61, 85, 92, 93, 94, 94, 91, 86],
      }),
      createCurve({
        seriesCoordinate: 3.6,
        horizontalCoordinates: pwmEfficiencyOutputCurrentsA,
        measurements: [12, 25, 57, 79, 91, 95, 96, 96, 95, 93, 89],
      }),
      createCurve({
        seriesCoordinate: 4.2,
        horizontalCoordinates: pwmEfficiencyOutputCurrentsA,
        measurements: [6, 9, 28, 53, 79, 89, 92, 94, 94, 93, 90],
      }),
    ],
  },
  "10-7": {
    horizontalScale: "logarithmic",
    curves: [
      createCurve({
        seriesCoordinate: 1.8,
        horizontalCoordinates: pfmEfficiencyOutputCurrentsA,
        measurements: [74, 81, 84, 86, 86.5, 87, 88, 89, 90, 86, 70, 68, 67],
      }),
      createCurve({
        seriesCoordinate: 3.3,
        horizontalCoordinates: pfmEfficiencyOutputCurrentsA,
        measurements: [77, 84, 88, 90, 91, 91.5, 91.5, 92, 92, 92, 94, 93, 89],
      }),
      createCurve({
        seriesCoordinate: 5,
        horizontalCoordinates: pfmEfficiencyOutputCurrentsA,
        measurements: [
          74, 81, 85, 87, 85.5, 85.5, 86.5, 88, 90, 93, 94, 93, 91,
        ],
      }),
    ],
  },
  "10-8": {
    horizontalScale: "logarithmic",
    curves: [
      createCurve({
        seriesCoordinate: 1.8,
        horizontalCoordinates: pwmEfficiencyOutputCurrentsA,
        measurements: [8, 12, 22, 35, 54, 76, 86, 90, 89, 67, 67],
      }),
      createCurve({
        seriesCoordinate: 3.3,
        horizontalCoordinates: pwmEfficiencyOutputCurrentsA,
        measurements: [9, 15, 27, 44, 65, 82, 88, 91, 92, 93, 91],
      }),
      createCurve({
        seriesCoordinate: 5,
        horizontalCoordinates: pwmEfficiencyOutputCurrentsA,
        measurements: [4, 7, 12, 20, 34, 58, 73, 84, 89, 93, 91],
      }),
    ],
  },
  "10-9": {
    horizontalScale: "linear",
    curves: [
      createCurve({
        seriesCoordinate: 0.0001,
        horizontalCoordinates: pfmEfficiencyInputVoltagesV,
        measurements: [
          77.5, 77.6, 77.5, 77.6, 77.8, 77.5, 77.2, 79.5, 78.7, 78,
        ],
      }),
      createCurve({
        seriesCoordinate: 0.01,
        horizontalCoordinates: pfmEfficiencyInputVoltagesV,
        measurements: [89, 90, 91, 90.5, 91, 91, 89.8, 94, 93.5, 93],
      }),
      createCurve({
        seriesCoordinate: 0.1,
        horizontalCoordinates: pfmEfficiencyInputVoltagesV,
        measurements: [90.5, 91, 90, 91, 92, 92, 91, 95, 94.5, 94],
      }),
      createCurve({
        seriesCoordinate: 1,
        horizontalCoordinates: pfmEfficiencyInputVoltagesV,
        measurements: [91.5, 92, 90, 91.5, 93, 93, 93.5, 95.5, 95, 94.5],
      }),
      createCurve({
        seriesCoordinate: 1.5,
        horizontalCoordinates: pfmEfficiencyInputVoltagesV,
        measurements: [88, 89.5, 87.5, 89, 90.5, 91, 92, 94.5, 94.5, 94],
      }),
    ],
  },
  "10-10": {
    horizontalScale: "linear",
    curves: [
      createCurve({
        seriesCoordinate: 1.8,
        horizontalCoordinates: efficiencyInputVoltagesV,
        measurements: [77, 91, 91, 90, 89.5, 88.5, 87, 85],
      }),
      createCurve({
        seriesCoordinate: 3.3,
        horizontalCoordinates: efficiencyInputVoltagesV,
        measurements: [79, 88, 90, 93, 96, 95, 94, 92.5],
      }),
      createCurve({
        seriesCoordinate: 5.2,
        horizontalCoordinates: efficiencyInputVoltagesV,
        measurements: [69, 83, 90, 92, 94, 92.5, 93.5, 93],
      }),
    ],
  },
  "10-11": {
    horizontalScale: "linear",
    curves: [
      createCurve({
        seriesCoordinate: 2.5,
        horizontalCoordinates: loadRegulationOutputCurrentsA,
        measurements: [
          -0.08, -0.075, -0.075, -0.075, -0.078, -0.075, -0.07, -0.068, -0.065,
          -0.06, -0.058, -0.07, -0.065,
        ],
      }),
      createCurve({
        seriesCoordinate: 3.6,
        horizontalCoordinates: loadRegulationOutputCurrentsA,
        measurements: [
          -0.075, -0.07, -0.07, -0.075, -0.07, -0.068, -0.065, -0.062, -0.06,
          -0.055, -0.05, -0.045, -0.025,
        ],
      }),
      createCurve({
        seriesCoordinate: 4.2,
        horizontalCoordinates: loadRegulationOutputCurrentsA,
        measurements: [
          -0.08, -0.075, -0.075, -0.073, -0.07, -0.068, -0.065, -0.06, -0.055,
          -0.055, -0.055, -0.055, -0.05,
        ],
      }),
    ],
  },
  "10-12": {
    horizontalScale: "linear",
    curves: [
      createCurve({
        seriesCoordinate: 2.5,
        horizontalCoordinates: loadRegulationOutputCurrentsA,
        measurements: [
          0.5, 0.3, 0.2, 0.05, -0.05, -0.2, 0.05, -0.1, -0.1, -0.05, -0.08,
          -0.08, -0.08,
        ],
      }),
      createCurve({
        seriesCoordinate: 3.6,
        horizontalCoordinates: loadRegulationOutputCurrentsA,
        measurements: [
          1.45, 0.8, 0.55, 0.45, 0.65, 0.35, 0.1, 0.25, -0.05, -0.1, -0.1,
          -0.08, -0.07,
        ],
      }),
      createCurve({
        seriesCoordinate: 4.2,
        horizontalCoordinates: loadRegulationOutputCurrentsA,
        measurements: [
          0.55, 0.2, 0.05, -0.05, 0.05, -0.05, -0.05, -0.05, -0.08, -0.08,
          -0.08, -0.07, -0.06,
        ],
      }),
    ],
  },
  "10-13": {
    horizontalScale: "linear",
    curves: [
      createCurve({
        seriesCoordinate: 1.8,
        horizontalCoordinates: lineRegulationInputVoltagesV,
        measurements: [
          0.17, 0.16, 0.16, 0.16, 0.15, 0.16, 0.17, 0.16, 0.16, 0.17,
        ],
      }),
      createCurve({
        seriesCoordinate: 3.3,
        horizontalCoordinates: lineRegulationInputVoltagesV,
        measurements: [
          -0.06, -0.065, -0.06, -0.065, -0.06, -0.055, -0.055, -0.065, -0.055,
          -0.06,
        ],
      }),
      createCurve({
        seriesCoordinate: 5.2,
        horizontalCoordinates: lineRegulationInputVoltagesV,
        measurements: [-0.005, 0, 0, 0, 0, 0.005, 0.002, 0, 0, 0],
      }),
    ],
  },
  "10-14": {
    horizontalScale: "linear",
    curves: [
      createCurve({
        seriesCoordinate: 1.8,
        horizontalCoordinates: lineRegulationInputVoltagesV,
        measurements: [
          0.155, 0.15, 0.16, 0.155, 0.16, 0.145, 0.15, 0.15, 0.16, 0.17,
        ],
      }),
      createCurve({
        seriesCoordinate: 3.3,
        horizontalCoordinates: lineRegulationInputVoltagesV,
        measurements: [
          -0.06, -0.06, -0.065, -0.065, -0.06, -0.05, -0.095, -0.07, -0.065,
          -0.055,
        ],
      }),
      createCurve({
        seriesCoordinate: 5.2,
        horizontalCoordinates: lineRegulationInputVoltagesV,
        measurements: [-0.005, 0, 0, 0, 0.002, 0, 0, 0.002, 0.003, 0],
      }),
    ],
  },
};

const findClosestCurve = ({
  curves,
  seriesCoordinate,
}: {
  curves: readonly CharacteristicCurve[];
  seriesCoordinate: number;
}) =>
  curves.reduce((closestCurve, candidateCurve) =>
    Math.abs(candidateCurve.seriesCoordinate - seriesCoordinate) <
    Math.abs(closestCurve.seriesCoordinate - seriesCoordinate)
      ? candidateCurve
      : closestCurve,
  );

const interpolateBetweenPoints = ({
  lowerPoint,
  upperPoint,
  horizontalCoordinate,
  horizontalScale,
}: {
  lowerPoint: CharacteristicPoint;
  upperPoint: CharacteristicPoint;
  horizontalCoordinate: number;
  horizontalScale: FigureCharacteristic["horizontalScale"];
}) => {
  const scaleCoordinate =
    horizontalScale === "logarithmic"
      ? Math.log10
      : (coordinate: number) => coordinate;
  const lowerCoordinate = scaleCoordinate(lowerPoint.horizontalCoordinate);
  const upperCoordinate = scaleCoordinate(upperPoint.horizontalCoordinate);
  const requestedCoordinate = scaleCoordinate(horizontalCoordinate);
  const interpolationFraction =
    (requestedCoordinate - lowerCoordinate) /
    (upperCoordinate - lowerCoordinate);
  return (
    lowerPoint.measurement +
    interpolationFraction * (upperPoint.measurement - lowerPoint.measurement)
  );
};

export const getTPS63802DatasheetMeasurement = ({
  figure,
  horizontalCoordinate,
  seriesCoordinate,
}: {
  figure: TPS63802DatasheetFigure;
  horizontalCoordinate: number;
  seriesCoordinate: number;
}) => {
  const characteristic = characteristicsByFigure[figure];
  const curve = findClosestCurve({
    curves: characteristic.curves,
    seriesCoordinate,
  });
  const firstPoint = curve.points[0];
  const lastPoint = curve.points[curve.points.length - 1];
  if (firstPoint === undefined || lastPoint === undefined) {
    throw new Error(`TPS63802 Figure ${figure} has no characteristic points`);
  }
  if (horizontalCoordinate <= firstPoint.horizontalCoordinate) {
    return firstPoint.measurement;
  }
  if (horizontalCoordinate >= lastPoint.horizontalCoordinate) {
    return lastPoint.measurement;
  }

  const upperPointIndex = curve.points.findIndex(
    (point) => point.horizontalCoordinate >= horizontalCoordinate,
  );
  const lowerPoint = curve.points[upperPointIndex - 1];
  const upperPoint = curve.points[upperPointIndex];
  if (lowerPoint === undefined || upperPoint === undefined) {
    throw new Error(
      `TPS63802 Figure ${figure} cannot bracket coordinate ${horizontalCoordinate}`,
    );
  }
  return interpolateBetweenPoints({
    lowerPoint,
    upperPoint,
    horizontalCoordinate,
    horizontalScale: characteristic.horizontalScale,
  });
};
