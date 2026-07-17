import {
  BQ24074,
  BQ25895,
  BQ27441G1,
  BQ32002,
  CC2340R5,
  CC2745R10,
  CC3235SF,
  DRV8833,
  DRV8876,
  HDC2080,
  HDC3020,
  HDC3022,
  INA237,
  MSPM33C3x,
  MSPM0G3507,
  TLC59116,
  TMP1075,
  TPS22919,
  TPS6293,
  TPS61299X,
  TPS6521835,
  TPS63802,
  TPS7A02,
  TPSM82823,
  TXB0104,
  TXS0102,
} from "./lib/chips/index";
import { BatteryManagement_BQ24074 } from "./lib/subcircuits/BatteryManagement_BQ24074.circuit";
import { BatteryManagement_BQ25895 } from "./lib/subcircuits/BatteryManagement_BQ25895.circuit";
import { BatteryManagement_BQ27441G1 } from "./lib/subcircuits/BatteryManagement_BQ27441G1.circuit";
import { BQ32002RtcSchematic } from "./lib/subcircuits/BQ32002RtcSchematic.circuit";
import { WirelessMCU_CC2340R5 } from "./lib/subcircuits/WirelessMCU_CC2340R5.circuit";
import { WirelessMCU_CC2745R10 } from "./lib/subcircuits/WirelessMCU_CC2745R10.circuit";
import { WirelessMCU_CC3235SF } from "./lib/subcircuits/WirelessMCU_CC3235SF.circuit";
import { MotorDriver_DRV8833 } from "./lib/subcircuits/MotorDriver_DRV8833.circuit";
import { MotorDriver_DRV8876 } from "./lib/subcircuits/MotorDriver_DRV8876.circuit";
import { EnvironmentalSensor_HDC2080 } from "./lib/subcircuits/EnvironmentalSensor_HDC2080.circuit";
import { EnvironmentalSensor_HDC3020 } from "./lib/subcircuits/EnvironmentalSensor_HDC3020.circuit";
import { EnvironmentalSensor_HDC3022 } from "./lib/subcircuits/EnvironmentalSensor_HDC3022.circuit";
import { PowerMonitor_INA237 } from "./lib/subcircuits/PowerMonitor_INA237.circuit";
import { Microcontroller_MSPM0G3507 } from "./lib/subcircuits/Microcontroller_MSPM0G3507.circuit";
import { MSPM33C3xBasicApplicationSchematic } from "./lib/subcircuits/MSPM33C3xBasicApplicationSchematic.circuit";
import { TLC59116LedDriverSchematic } from "./lib/subcircuits/TLC59116LedDriverSchematic.circuit";
import { TemperatureSensor_TMP1075 } from "./lib/subcircuits/TemperatureSensor_TMP1075.circuit";
import { LoadSwitch_TPS22919 } from "./lib/subcircuits/LoadSwitch_TPS22919.circuit";
import { BuckConverter_TPS62933 } from "./lib/subcircuits/BuckConverter_TPS62933.circuit";
import {
  BoostConverter_TPS61299X,
  TPS61299XBoostConverter,
} from "./lib/subcircuits/BoostConverter_TPS61299X.circuit";
import { TPS6521835SimplifiedSchematic } from "./lib/subcircuits/PowerManagement_TPS6521835.circuit";
import { BuckBoostConverter_TPS63802 } from "./lib/subcircuits/BuckBoostConverter_TPS63802.circuit";
import { PowerManagement_TPS7A02 } from "./lib/subcircuits/PowerManagement_TPS7A02.circuit";
import { PowerModule_TPSM82823 } from "./lib/subcircuits/PowerModule_TPSM82823.circuit";
import { LevelShifter_TXB0104 } from "./lib/subcircuits/LevelShifter_TXB0104.circuit";
import { LevelShifter_TXS0102 } from "./lib/subcircuits/LevelShifter_TXS0102.circuit";

export * from "./lib/chips/index.tsx";

export {
  BatteryManagement_BQ24074,
  BatteryManagement_BQ25895,
  BatteryManagement_BQ27441G1,
  BQ32002RtcSchematic,
  WirelessMCU_CC2340R5,
  WirelessMCU_CC2745R10,
  WirelessMCU_CC3235SF,
  MotorDriver_DRV8833,
  MotorDriver_DRV8876,
  EnvironmentalSensor_HDC2080,
  EnvironmentalSensor_HDC3020,
  EnvironmentalSensor_HDC3022,
  PowerMonitor_INA237,
  Microcontroller_MSPM0G3507,
  MSPM33C3xBasicApplicationSchematic,
  TLC59116LedDriverSchematic,
  TemperatureSensor_TMP1075,
  LoadSwitch_TPS22919,
  BuckConverter_TPS62933,
  BoostConverter_TPS61299X,
  TPS61299XBoostConverter,
  TPS6521835SimplifiedSchematic,
  BuckBoostConverter_TPS63802,
  PowerManagement_TPS7A02,
  PowerModule_TPSM82823,
  LevelShifter_TXB0104,
  LevelShifter_TXS0102,
};

export const TiChipComponents = {
  BQ24074,
  BQ25895,
  BQ27441G1,
  BQ32002,
  CC2340R5,
  CC2745R10,
  CC3235SF,
  DRV8833,
  DRV8876,
  HDC2080,
  HDC3020,
  HDC3022,
  INA237,
  MSPM33C3x,
  MSPM0G3507,
  TLC59116,
  TMP1075,
  TPS22919,
  TPS6293,
  TPS61299X,
  TPS6521835,
  TPS63802,
  TPS7A02,
  TPSM82823,
  TXB0104,
  TXS0102,
} as const;

export const TiSubcircuitComponents = {
  BatteryManagement_BQ24074,
  BatteryManagement_BQ25895,
  BatteryManagement_BQ27441G1,
  BQ32002RtcSchematic,
  WirelessMCU_CC2340R5,
  WirelessMCU_CC2745R10,
  WirelessMCU_CC3235SF,
  MotorDriver_DRV8833,
  MotorDriver_DRV8876,
  EnvironmentalSensor_HDC2080,
  EnvironmentalSensor_HDC3020,
  EnvironmentalSensor_HDC3022,
  PowerMonitor_INA237,
  Microcontroller_MSPM0G3507,
  MSPM33C3xBasicApplicationSchematic,
  TLC59116LedDriverSchematic,
  TemperatureSensor_TMP1075,
  LoadSwitch_TPS22919,
  BuckConverter_TPS62933,
  BoostConverter_TPS61299X,
  TPS6521835SimplifiedSchematic,
  BuckBoostConverter_TPS63802,
  PowerManagement_TPS7A02,
  PowerModule_TPSM82823,
  LevelShifter_TXB0104,
  LevelShifter_TXS0102,
} as const;

export type TiChipName = keyof typeof TiChipComponents;
export type TiChipComponent = (typeof TiChipComponents)[TiChipName];
export type TiSubcircuitName = keyof typeof TiSubcircuitComponents;
export type TiSubcircuitComponent =
  (typeof TiSubcircuitComponents)[TiSubcircuitName];
