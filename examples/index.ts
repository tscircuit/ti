// Generated from examples/ti-reference-examples.json.
// Each export is a runnable, evidence-backed TI reference block.
import { ADS1015L_DualSupplyMonitor } from "./ADS1015L_DualSupplyMonitor.circuit.tsx";
import { ADS7042_DirectSensorInterface } from "./ADS7042_DirectSensorInterface.circuit.tsx";
import { BQ25185_TypicalBatteryCharger } from "./BQ25185_TypicalBatteryCharger.circuit.tsx";
import { CC2340R5MODA_TypicalApplication } from "./CC2340R5MODA_TypicalApplication.circuit.tsx";
import { DRV8833_ParallelMotorDriver } from "./DRV8833_ParallelMotorDriver.circuit.tsx";
import { INA138_BasicCurrentSense } from "./INA138_BasicCurrentSense.circuit.tsx";
import { INA181_BidirectionalCurrentSense } from "./INA181_BidirectionalCurrentSense.circuit.tsx";
import { LM358B_InvertingAmplifier } from "./LM358B_InvertingAmplifier.circuit.tsx";
import { LMC555_MonostableLedFlasher } from "./LMC555_MonostableLedFlasher.circuit.tsx";
import { LMK1C1104_ClockFanout } from "./LMK1C1104_ClockFanout.circuit.tsx";
import { LMT70_AnalogTemperatureToAdc } from "./LMT70_AnalogTemperatureToAdc.circuit.tsx";
import { MSPM0C1103_AdcInputNetwork } from "./MSPM0C1103_AdcInputNetwork.circuit.tsx";
import { OPA320_SecondOrderLowPassFilter } from "./OPA320_SecondOrderLowPassFilter.circuit.tsx";
import { OPA333_ThermistorBridge } from "./OPA333_ThermistorBridge.circuit.tsx";
import { OPA371D_LowSideCurrentSense } from "./OPA371D_LowSideCurrentSense.circuit.tsx";
import { SN65HVD3082E_MultipointRS485Network } from "./SN65HVD3082E_MultipointRS485Network.circuit.tsx";
import { SN74AHC1G14_SwitchDebouncer } from "./SN74AHC1G14_SwitchDebouncer.circuit.tsx";
import { SN74AUP1G17_TurnOnPulseGenerator } from "./SN74AUP1G17_TurnOnPulseGenerator.circuit.tsx";
import { TCAN1044A_5VCanInterface } from "./TCAN1044A_5VCanInterface.circuit.tsx";
import { TLV755P_TypicalApplication } from "./TLV755P_TypicalApplication.circuit.tsx";
import { TMP102_TwoWireTemperatureSensor } from "./TMP102_TwoWireTemperatureSensor.circuit.tsx";
import { TPS22919_LoadSwitchTypicalApplication } from "./TPS22919_LoadSwitchTypicalApplication.circuit.tsx";
import { TPS61165_WhiteLedDriver } from "./TPS61165_WhiteLedDriver.circuit.tsx";
import { TPS61299_5VBoostConverter } from "./TPS61299_5VBoostConverter.circuit.tsx";
import { TPS62A01_1V8BuckConverter } from "./TPS62A01_1V8BuckConverter.circuit.tsx";
import { TPS7A20_TypicalApplication } from "./TPS7A20_TypicalApplication.circuit.tsx";
import { TPS92612_LinearLedDriver } from "./TPS92612_LinearLedDriver.circuit.tsx";
import { TRS3232E_TypicalOperatingCircuit } from "./TRS3232E_TypicalOperatingCircuit.circuit.tsx";

export {
  ADS1015L_DualSupplyMonitor,
  ADS7042_DirectSensorInterface,
  BQ25185_TypicalBatteryCharger,
  CC2340R5MODA_TypicalApplication,
  DRV8833_ParallelMotorDriver,
  INA138_BasicCurrentSense,
  INA181_BidirectionalCurrentSense,
  LM358B_InvertingAmplifier,
  LMC555_MonostableLedFlasher,
  LMK1C1104_ClockFanout,
  LMT70_AnalogTemperatureToAdc,
  MSPM0C1103_AdcInputNetwork,
  OPA320_SecondOrderLowPassFilter,
  OPA333_ThermistorBridge,
  OPA371D_LowSideCurrentSense,
  SN65HVD3082E_MultipointRS485Network,
  SN74AHC1G14_SwitchDebouncer,
  SN74AUP1G17_TurnOnPulseGenerator,
  TCAN1044A_5VCanInterface,
  TLV755P_TypicalApplication,
  TMP102_TwoWireTemperatureSensor,
  TPS22919_LoadSwitchTypicalApplication,
  TPS61165_WhiteLedDriver,
  TPS61299_5VBoostConverter,
  TPS62A01_1V8BuckConverter,
  TPS7A20_TypicalApplication,
  TPS92612_LinearLedDriver,
  TRS3232E_TypicalOperatingCircuit,
};

export const TiReferenceBlockComponents = {
  ADS1015L_DualSupplyMonitor,
  ADS7042_DirectSensorInterface,
  BQ25185_TypicalBatteryCharger,
  CC2340R5MODA_TypicalApplication,
  DRV8833_ParallelMotorDriver,
  INA138_BasicCurrentSense,
  INA181_BidirectionalCurrentSense,
  LM358B_InvertingAmplifier,
  LMC555_MonostableLedFlasher,
  LMK1C1104_ClockFanout,
  LMT70_AnalogTemperatureToAdc,
  MSPM0C1103_AdcInputNetwork,
  OPA320_SecondOrderLowPassFilter,
  OPA333_ThermistorBridge,
  OPA371D_LowSideCurrentSense,
  SN65HVD3082E_MultipointRS485Network,
  SN74AHC1G14_SwitchDebouncer,
  SN74AUP1G17_TurnOnPulseGenerator,
  TCAN1044A_5VCanInterface,
  TLV755P_TypicalApplication,
  TMP102_TwoWireTemperatureSensor,
  TPS22919_LoadSwitchTypicalApplication,
  TPS61165_WhiteLedDriver,
  TPS61299_5VBoostConverter,
  TPS62A01_1V8BuckConverter,
  TPS7A20_TypicalApplication,
  TPS92612_LinearLedDriver,
  TRS3232E_TypicalOperatingCircuit,
} as const;

export type TiReferenceBlockName = keyof typeof TiReferenceBlockComponents;
export type TiReferenceBlockComponent =
  (typeof TiReferenceBlockComponents)[TiReferenceBlockName];
