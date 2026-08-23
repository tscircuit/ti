// Generated from examples/ti-reference-examples.json.
// Each export is a runnable, evidence-backed TI reference block.
import { ADS7042_DirectSensorInterface } from "./ADS7042_DirectSensorInterface.circuit.tsx";
import { BQ25185_TypicalBatteryCharger } from "./BQ25185_TypicalBatteryCharger.circuit.tsx";
import { CC2340R5MODA_TypicalApplication } from "./CC2340R5MODA_TypicalApplication.circuit.tsx";
import { DRV8833_ParallelMotorDriver } from "./DRV8833_ParallelMotorDriver.circuit.tsx";
import { INA138_BasicCurrentSense } from "./INA138_BasicCurrentSense.circuit.tsx";
import { LM358B_InvertingAmplifier } from "./LM358B_InvertingAmplifier.circuit.tsx";
import { LMC555_MonostableLedFlasher } from "./LMC555_MonostableLedFlasher.circuit.tsx";
import { LMK1C1104_ClockFanout } from "./LMK1C1104_ClockFanout.circuit.tsx";
import { LMT70_AnalogTemperatureToAdc } from "./LMT70_AnalogTemperatureToAdc.circuit.tsx";
import { OPA320_SecondOrderLowPassFilter } from "./OPA320_SecondOrderLowPassFilter.circuit.tsx";
import { OPA371D_LowSideCurrentSense } from "./OPA371D_LowSideCurrentSense.circuit.tsx";
import { SN74AHC1G14_SwitchDebouncer } from "./SN74AHC1G14_SwitchDebouncer.circuit.tsx";
import { SN74AUP1G17_TurnOnPulseGenerator } from "./SN74AUP1G17_TurnOnPulseGenerator.circuit.tsx";
import { TCAN1044A_5VCanInterface } from "./TCAN1044A_5VCanInterface.circuit.tsx";
import { TLV755P_TypicalApplication } from "./TLV755P_TypicalApplication.circuit.tsx";
import { TPS22919_LoadSwitchTypicalApplication } from "./TPS22919_LoadSwitchTypicalApplication.circuit.tsx";
import { TPS61165_WhiteLedDriver } from "./TPS61165_WhiteLedDriver.circuit.tsx";
import { TPS61299_5VBoostConverter } from "./TPS61299_5VBoostConverter.circuit.tsx";
import { TPS62A01_1V8BuckConverter } from "./TPS62A01_1V8BuckConverter.circuit.tsx";
import { TPS7A20_TypicalApplication } from "./TPS7A20_TypicalApplication.circuit.tsx";
import { TPS92612_LinearLedDriver } from "./TPS92612_LinearLedDriver.circuit.tsx";

export {
  ADS7042_DirectSensorInterface,
  BQ25185_TypicalBatteryCharger,
  CC2340R5MODA_TypicalApplication,
  DRV8833_ParallelMotorDriver,
  INA138_BasicCurrentSense,
  LM358B_InvertingAmplifier,
  LMC555_MonostableLedFlasher,
  LMK1C1104_ClockFanout,
  LMT70_AnalogTemperatureToAdc,
  OPA320_SecondOrderLowPassFilter,
  OPA371D_LowSideCurrentSense,
  SN74AHC1G14_SwitchDebouncer,
  SN74AUP1G17_TurnOnPulseGenerator,
  TCAN1044A_5VCanInterface,
  TLV755P_TypicalApplication,
  TPS22919_LoadSwitchTypicalApplication,
  TPS61165_WhiteLedDriver,
  TPS61299_5VBoostConverter,
  TPS62A01_1V8BuckConverter,
  TPS7A20_TypicalApplication,
  TPS92612_LinearLedDriver,
};

export const TiReferenceBlockComponents = {
  ADS7042_DirectSensorInterface,
  BQ25185_TypicalBatteryCharger,
  CC2340R5MODA_TypicalApplication,
  DRV8833_ParallelMotorDriver,
  INA138_BasicCurrentSense,
  LM358B_InvertingAmplifier,
  LMC555_MonostableLedFlasher,
  LMK1C1104_ClockFanout,
  LMT70_AnalogTemperatureToAdc,
  OPA320_SecondOrderLowPassFilter,
  OPA371D_LowSideCurrentSense,
  SN74AHC1G14_SwitchDebouncer,
  SN74AUP1G17_TurnOnPulseGenerator,
  TCAN1044A_5VCanInterface,
  TLV755P_TypicalApplication,
  TPS22919_LoadSwitchTypicalApplication,
  TPS61165_WhiteLedDriver,
  TPS61299_5VBoostConverter,
  TPS62A01_1V8BuckConverter,
  TPS7A20_TypicalApplication,
  TPS92612_LinearLedDriver,
} as const;

export type TiReferenceBlockName = keyof typeof TiReferenceBlockComponents;
export type TiReferenceBlockComponent =
  (typeof TiReferenceBlockComponents)[TiReferenceBlockName];
