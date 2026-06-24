import BQ24074 from "./lib/subcircuits/BQ24074-subcircuit.circuit";
import BQ25895 from "./lib/subcircuits/BQ25895-subcircuit.circuit";
import BQ27441G1 from "./lib/subcircuits/BQ27441-G1-subcircuit.circuit";
import CC2340R5 from "./lib/subcircuits/CC2340R5-subcircuit.circuit";
import CC3235SF from "./lib/subcircuits/CC3235SF-subcircuit.circuit";
import DRV8833 from "./lib/subcircuits/DRV8833-subcircuit.circuit";
import DRV8876 from "./lib/subcircuits/DRV8876-subcircuit.circuit";
import HDC2080 from "./lib/subcircuits/HDC2080-subcircuit.circuit";
import HDC3020 from "./lib/subcircuits/HDC3020-subcircuit.circuit";
import HDC3022 from "./lib/subcircuits/HDC3022-subcircuit.circuit";
import INA237 from "./lib/subcircuits/INA237-subcircuit.circuit";
import MSPM0G3507 from "./lib/subcircuits/MSPM0G3507-subcircuit.circuit";
import TMP1075 from "./lib/subcircuits/TMP1075-subcircuit.circuit";
import TPS22919 from "./lib/subcircuits/TPS22919-subcircuit.circuit";
import TPS62933 from "./lib/subcircuits/TPS62933-subcircuit.circuit";
import TPS63802 from "./lib/subcircuits/TPS63802-subcircuit.circuit";
import TPS7A02 from "./lib/subcircuits/TPS7A02-subcircuit.circuit";
import TPSM82823 from "./lib/subcircuits/TPSM82823-subcircuit.circuit";

export {
  BQ24074,
  BQ25895,
  BQ27441G1,
  CC2340R5,
  CC3235SF,
  DRV8833,
  DRV8876,
  HDC2080,
  HDC3020,
  HDC3022,
  INA237,
  MSPM0G3507,
  TMP1075,
  TPS22919,
  TPS62933,
  TPS63802,
  TPS7A02,
  TPSM82823,
};

export const tiSubcircuits = {
  BQ24074,
  BQ25895,
  BQ27441G1,
  CC2340R5,
  CC3235SF,
  DRV8833,
  DRV8876,
  HDC2080,
  HDC3020,
  HDC3022,
  INA237,
  MSPM0G3507,
  TMP1075,
  TPS22919,
  TPS62933,
  TPS63802,
  TPS7A02,
  TPSM82823,
} as const;

export type TiChipName = keyof typeof tiSubcircuits;
export type TiSubcircuitComponent = (typeof tiSubcircuits)[TiChipName];
