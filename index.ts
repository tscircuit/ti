import { BatteryManagement_BQ24074 } from "./lib/subcircuits/BQ24074-subcircuit.circuit";
import { BatteryManagement_BQ25895 } from "./lib/subcircuits/BQ25895-subcircuit.circuit";
import { BatteryManagement_BQ27441G1 } from "./lib/subcircuits/BQ27441-G1-subcircuit.circuit";
import { WirelessMCU_CC2340R5 } from "./lib/subcircuits/CC2340R5-subcircuit.circuit";
import { WirelessMCU_CC3235SF } from "./lib/subcircuits/CC3235SF-subcircuit.circuit";
import { MotorDriver_DRV8833 } from "./lib/subcircuits/DRV8833-subcircuit.circuit";
import { MotorDriver_DRV8876 } from "./lib/subcircuits/DRV8876-subcircuit.circuit";
import { EnvironmentalSensor_HDC2080 } from "./lib/subcircuits/HDC2080-subcircuit.circuit";
import { EnvironmentalSensor_HDC3020 } from "./lib/subcircuits/HDC3020-subcircuit.circuit";
import { EnvironmentalSensor_HDC3022 } from "./lib/subcircuits/HDC3022-subcircuit.circuit";
import { PowerMonitor_INA237 } from "./lib/subcircuits/INA237-subcircuit.circuit";
import { Microcontroller_MSPM0G3507 } from "./lib/subcircuits/MSPM0G3507-subcircuit.circuit";
import { TemperatureSensor_TMP1075 } from "./lib/subcircuits/TMP1075-subcircuit.circuit";
import { LoadSwitch_TPS22919 } from "./lib/subcircuits/TPS22919-subcircuit.circuit";
import { BuckConverter_TPS62933 } from "./lib/subcircuits/TPS62933-subcircuit.circuit";
import { BuckBoostConverter_TPS63802 } from "./lib/subcircuits/TPS63802-subcircuit.circuit";
import { LDO_TPS7A02 } from "./lib/subcircuits/TPS7A02-subcircuit.circuit";
import { PowerModule_TPSM82823 } from "./lib/subcircuits/TPSM82823-subcircuit.circuit";

export {
  BatteryManagement_BQ24074,
  BatteryManagement_BQ25895,
  BatteryManagement_BQ27441G1,
  WirelessMCU_CC2340R5,
  WirelessMCU_CC3235SF,
  MotorDriver_DRV8833,
  MotorDriver_DRV8876,
  EnvironmentalSensor_HDC2080,
  EnvironmentalSensor_HDC3020,
  EnvironmentalSensor_HDC3022,
  PowerMonitor_INA237,
  Microcontroller_MSPM0G3507,
  TemperatureSensor_TMP1075,
  LoadSwitch_TPS22919,
  BuckConverter_TPS62933,
  BuckBoostConverter_TPS63802,
  LDO_TPS7A02,
  PowerModule_TPSM82823,
};

export const TiSubcircuitComponents = {
  BatteryManagement_BQ24074,
  BatteryManagement_BQ25895,
  BatteryManagement_BQ27441G1,
  WirelessMCU_CC2340R5,
  WirelessMCU_CC3235SF,
  MotorDriver_DRV8833,
  MotorDriver_DRV8876,
  EnvironmentalSensor_HDC2080,
  EnvironmentalSensor_HDC3020,
  EnvironmentalSensor_HDC3022,
  PowerMonitor_INA237,
  Microcontroller_MSPM0G3507,
  TemperatureSensor_TMP1075,
  LoadSwitch_TPS22919,
  BuckConverter_TPS62933,
  BuckBoostConverter_TPS63802,
  LDO_TPS7A02,
  PowerModule_TPSM82823,
} as const;

export type TiSubcircuitName = keyof typeof TiSubcircuitComponents;
export type TiSubcircuitComponent =
  (typeof TiSubcircuitComponents)[TiSubcircuitName];
