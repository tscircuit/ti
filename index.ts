import BQ24074 from "./lib/BQ24074/index.circuit";
import BQ25895 from "./lib/BQ25895/index.circuit";
import BQ27441G1 from "./lib/BQ27441-G1/index.circuit";
import CC2340R5 from "./lib/CC2340R5/index.circuit";
import CC3235SF from "./lib/CC3235SF/index.circuit";
import DRV8833 from "./lib/DRV8833/index.circuit";
import DRV8876 from "./lib/DRV8876/index.circuit";
import HDC2080 from "./lib/HDC2080/index.circuit";
import HDC3020 from "./lib/HDC3020/index.circuit";
import HDC3022 from "./lib/HDC3022/index.circuit";
import INA237 from "./lib/INA237/index.circuit";
import MSPM0G3507 from "./lib/MSPM0G3507/index.circuit";
import TMP1075 from "./lib/TMP1075/index.circuit";
import TPS22919 from "./lib/TPS22919/index.circuit";
import TPS62933 from "./lib/TPS62933/index.circuit";
import TPS63802 from "./lib/TPS63802/index.circuit";
import TPS7A02 from "./lib/TPS7A02/index.circuit";
import TPSM82823 from "./lib/TPSM82823/index.circuit";

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
