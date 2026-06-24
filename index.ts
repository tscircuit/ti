export { BQ24074Subcircuit } from "./lib/subcircuits/BQ24074-subcircuit.circuit";
export { BQ25895Subcircuit } from "./lib/subcircuits/BQ25895-subcircuit.circuit";
export { BQ27441G1Subcircuit } from "./lib/subcircuits/BQ27441-G1-subcircuit.circuit";
export { CC2340R5Subcircuit } from "./lib/subcircuits/CC2340R5-subcircuit.circuit";
export { CC3235SFSubcircuit } from "./lib/subcircuits/CC3235SF-subcircuit.circuit";
export { DRV8833Subcircuit } from "./lib/subcircuits/DRV8833-subcircuit.circuit";
export { DRV8876Subcircuit } from "./lib/subcircuits/DRV8876-subcircuit.circuit";
export { HDC2080Subcircuit } from "./lib/subcircuits/HDC2080-subcircuit.circuit";
export { HDC3020Subcircuit } from "./lib/subcircuits/HDC3020-subcircuit.circuit";
export { HDC3022Subcircuit } from "./lib/subcircuits/HDC3022-subcircuit.circuit";
export { INA237Subcircuit } from "./lib/subcircuits/INA237-subcircuit.circuit";
export { MSPM0G3507Subcircuit } from "./lib/subcircuits/MSPM0G3507-subcircuit.circuit";
export { TMP1075Subcircuit } from "./lib/subcircuits/TMP1075-subcircuit.circuit";
export { TPS22919Subcircuit } from "./lib/subcircuits/TPS22919-subcircuit.circuit";
export { TPS62933Subcircuit } from "./lib/subcircuits/TPS62933-subcircuit.circuit";
export { TPS63802Subcircuit } from "./lib/subcircuits/TPS63802-subcircuit.circuit";
export { TPS7A02Subcircuit } from "./lib/subcircuits/TPS7A02-subcircuit.circuit";
export { TPSM82823Subcircuit } from "./lib/subcircuits/TPSM82823-subcircuit.circuit";

export const TiSubcircuitComponents = {
  BQ24074Subcircuit,
  BQ25895Subcircuit,
  BQ27441G1Subcircuit,
  CC2340R5Subcircuit,
  CC3235SFSubcircuit,
  DRV8833Subcircuit,
  DRV8876Subcircuit,
  HDC2080Subcircuit,
  HDC3020Subcircuit,
  HDC3022Subcircuit,
  INA237Subcircuit,
  MSPM0G3507Subcircuit,
  TMP1075Subcircuit,
  TPS22919Subcircuit,
  TPS62933Subcircuit,
  TPS63802Subcircuit,
  TPS7A02Subcircuit,
  TPSM82823Subcircuit,
} as const;

export type TiSubcircuitName = keyof typeof TiSubcircuitComponents;
export type TiSubcircuitComponent = (typeof TiSubcircuitComponents)[TiSubcircuitName];
