import {
  CommunicationInterface_LIN_TLIN1028,
  Microcontroller_MSP430FR6007,
  MotorDriver_DRV8703,
  MotorThermalProtection_TMP390,
  PinchDetection_INA240_TLV2316_LMV7275,
  PositionFeedback_DRV5013_TIDA01389,
  PowerSupply_WindowModule,
} from "@tsci/tscircuit.ti";
import "tscircuit";

/**
 * Automotive Window Module assembled from the seven reusable subsystem
 * implementations shown in TI's Window Module block diagram.
 *
 * TI's block diagram specifies the functional links but does not assign MCU
 * pins. The MSP430 assignments below use matching UART, SPI, timer, ADC, and
 * GPIO-capable pins and remain local to this system-level example.
 *
 * Reference:
 * https://www.ti.com/solution/automotive-window-module?variantid=34360&subsystemid=24690
 */
export default () => (
  <board
    routingDisabled
    schTraceAutoLabelEnabled={false}
    schMaxTraceDistance="1000mm"
  >
    <schematicsheet
      name="communication_interface"
      displayName="Communication Interface"
      sheetIndex={2}
    />
    <schematicsheet
      name="motor_driver"
      displayName="Motor Driver"
      sheetIndex={3}
    />
    <schematicsheet
      name="pinch_detection"
      displayName="Pinch Detection"
      sheetIndex={4}
      sheetWidth="430mm"
      sheetHeight="280mm"
    />
    <schematicsheet
      name="motor_thermal_protection"
      displayName="Motor Thermal Protection"
      sheetIndex={5}
    />
    <schematicsheet
      name="position_feedback"
      displayName="Position Feedback"
      sheetIndex={6}
    />

    <net name="VBATT" isPowerNet />
    <net name="MOTOR_SUPPLY" isPowerNet />
    <net name="V3_3" isPowerNet />
    <net name="GND" isGroundNet />
    <net name="LIN" />
    <net name="LIN_TXD" />
    <net name="LIN_RXD" />
    <net name="LIN_ENABLE" />
    <net name="RESET_3V3" />
    <net name="V_CTRL1" />
    <net name="WATCHDOG_INPUT" />
    <net name="WATCHDOG_OUTPUT" />
    <net name="MOTOR_IN1_PH" />
    <net name="MOTOR_IN2_EN" />
    <net name="MOTOR_SLEEP" />
    <net name="MOTOR_SCLK" />
    <net name="MOTOR_SDI" />
    <net name="MOTOR_SDO" />
    <net name="MOTOR_SCS" />
    <net name="MOTOR_SO" />
    <net name="MOTOR_FAULT" />
    <net name="PINCH_ADC" />
    <net name="PINCH_TIMER" />
    <net name="THERMAL_HOT" />
    <net name="THERMAL_COLD" />
    <net name="HALL_1" />
    <net name="HALL_2" />
    <net name="MOTOR_OUT_1" />
    <net name="MOTOR_OUT_2" />

    {/* PowerSupply_WindowModule owns its two source-authentic schematic sheets. */}
    <PowerSupply_WindowModule name="powerSupply" />
    <CommunicationInterface_LIN_TLIN1028
      name="communicationInterface"
      schSheetName="communication_interface"
    />
    {/* The MSP430 target-board implementation owns its reference_full sheet. */}
    <Microcontroller_MSP430FR6007
      name="microcontroller"
      connections={{
        AVCC: "net.V3_3",
        DVCC: "net.V3_3",
        PVCC: "net.V3_3",
        GND: "net.GND",
        DVSS: "net.GND",
        RESET: "net.RESET_3V3",
        P1_0: "net.V_CTRL1",
        P1_1: "net.WATCHDOG_OUTPUT",
        P1_3: "net.WATCHDOG_INPUT",
      }}
    />
    <MotorDriver_DRV8703 name="motorDriver" schSheetName="motor_driver" />
    <PinchDetection_INA240_TLV2316_LMV7275
      name="pinchDetection"
      schSheetName="pinch_detection"
    />
    <MotorThermalProtection_TMP390
      name="motorThermalProtection"
      schSheetName="motor_thermal_protection"
      connections={{
        VDD: "net.V3_3",
        VDDIO: "net.V3_3",
        GND: "net.GND",
        OUTA: "net.THERMAL_HOT",
        OUTB: "net.THERMAL_COLD",
      }}
    />
    <PositionFeedback_DRV5013_TIDA01389
      name="positionFeedback"
      schSheetName="position_feedback"
    />

    {/* Vehicle battery feeds the system supply and the anti-pinch current shunt. */}
    <trace
      name="VBATT_POWER_SUPPLY_INPUT"
      from=".powerSupply .reverseBattery .P1 > .pin1"
      to="net.VBATT"
      schDisplayLabel="VBATT"
    />
    <trace
      name="VBATT_PINCH_POWER"
      from=".pinchDetection .power .U4 > .VIN"
      to="net.VBATT"
      schDisplayLabel="VBATT"
    />
    <trace
      name="VBATT_PINCH_INPUT"
      from=".pinchDetection .signalChain .J1 > .V_PLUS"
      to="net.VBATT"
      schDisplayLabel="VBATT"
    />
    <trace
      name="MOTOR_SUPPLY_PINCH_OUTPUT"
      from=".pinchDetection .signalChain .J1 > .V_MINUS"
      to="net.MOTOR_SUPPLY"
      schDisplayLabel="MOTOR_SUPPLY"
    />
    <trace
      name="VBATT_LIN_SUPPLY"
      from=".communicationInterface .U4 > .VSUP"
      to="net.VBATT"
      schDisplayLabel="VBATT"
    />

    {/* The window-module regulator supplies all 3.3 V logic domains. */}
    <trace
      name="V3_3_POWER_SUPPLY_OUTPUT"
      from=".powerSupply .regulator .P3 > .pin1"
      to="net.V3_3"
      schDisplayLabel="+3.3V"
    />
    <trace
      name="V3_3_LIN"
      from=".communicationInterface .U4 > .VCC"
      to="net.V3_3"
      schDisplayLabel="+3.3V"
    />
    <trace
      name="V3_3_POSITION"
      from=".positionFeedback .U6 > .VCC"
      to="net.V3_3"
      schDisplayLabel="+3.3V"
    />

    {/* Common ground across the seven functional subsystems. */}
    <trace
      name="GND_POWER_SUPPLY"
      from=".powerSupply .reverseBattery .P2 > .pin1"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="GND_PINCH"
      from=".pinchDetection .signalChain .U2 > .GND"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="GND_LIN"
      from=".communicationInterface .U4 > .GND"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="GND_POSITION"
      from=".positionFeedback .U6 > .GND"
      to="net.GND"
      schDisplayLabel="GND"
    />

    {/* LIN connection to the body-control module and UART link to the MCU. */}
    <trace
      name="LIN_BUS"
      from=".communicationInterface .U4 > .LIN"
      to="net.LIN"
      schDisplayLabel="LIN"
    />
    <trace
      name="LIN_TXD_TRANSCEIVER"
      from=".communicationInterface .U4 > .TXD"
      to="net.LIN_TXD"
      schDisplayLabel="LIN_TXD"
    />
    <trace
      name="LIN_TXD_MCU"
      from=".microcontroller .IC1 > .UCA0TXD"
      to="net.LIN_TXD"
      schDisplayLabel="LIN_TXD"
    />
    <trace
      name="LIN_RXD_TRANSCEIVER"
      from=".communicationInterface .U4 > .RXD"
      to="net.LIN_RXD"
      schDisplayLabel="LIN_RXD"
    />
    <trace
      name="LIN_RXD_MCU"
      from=".microcontroller .IC1 > .UCA0RXD"
      to="net.LIN_RXD"
      schDisplayLabel="LIN_RXD"
    />
    <trace
      name="LIN_ENABLE_TRANSCEIVER"
      from=".communicationInterface .U4 > .EN"
      to="net.LIN_ENABLE"
      schDisplayLabel="LIN_ENABLE"
    />
    <trace
      name="LIN_ENABLE_MCU"
      from=".microcontroller .IC1 > .P2_2"
      to="net.LIN_ENABLE"
      schDisplayLabel="LIN_ENABLE"
    />

    {/* Power-control, watchdog, and reset supervision. */}
    <trace
      name="RESET_LIN"
      from=".communicationInterface .U4 > .nRST"
      to="net.RESET_3V3"
      schDisplayLabel="3.3RESET"
    />
    <trace
      name="V_CTRL1_POWER_SUPPLY"
      from=".powerSupply .regulator .TP5 > .pin1"
      to="net.V_CTRL1"
      schDisplayLabel="V_CTRL1"
    />
    <trace
      name="WATCHDOG_INPUT_POWER_SUPPLY"
      from=".powerSupply .supervisorWatchdog .TP1 > .pin1"
      to="net.WATCHDOG_INPUT"
      schDisplayLabel="WDI"
    />
    <trace
      name="WATCHDOG_OUTPUT_POWER_SUPPLY"
      from=".powerSupply .supervisorWatchdog .TP8 > .pin1"
      to="net.WATCHDOG_OUTPUT"
      schDisplayLabel="WDO"
    />
    <trace
      name="RESET_POWER_SUPPLY"
      from=".powerSupply .supervisorWatchdog .TP6 > .pin1"
      to="net.RESET_3V3"
      schDisplayLabel="3.3RESET"
    />

    {/* The DRV8703 supply and logic interface connect to the system nets. */}
    <trace
      name="MOTOR_SUPPLY_DRIVER"
      from=".motorDriver .gateDriver .U1 > .PVDD"
      to="net.MOTOR_SUPPLY"
      schDisplayLabel="PVDD"
    />
    <trace
      name="V3_3_MOTOR_DRIVER"
      from=".motorDriver .gateDriver .U1 > .VREF"
      to="net.V3_3"
      schDisplayLabel="VCC"
    />
    <trace
      name="GND_MOTOR_DRIVER"
      from=".motorDriver .gateDriver .U1 > .pin33"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="MOTOR_IN1_PH_DRIVER"
      from=".motorDriver .gateDriver .U1 > .IN1_PH"
      to="net.MOTOR_IN1_PH"
      schDisplayLabel="IN1_PH"
    />
    <trace
      name="MOTOR_IN2_EN_DRIVER"
      from=".motorDriver .gateDriver .U1 > .IN2_EN"
      to="net.MOTOR_IN2_EN"
      schDisplayLabel="IN2_EN"
    />
    <trace
      name="MOTOR_SLEEP_DRIVER"
      from=".motorDriver .gateDriver .U1 > .nSLEEP"
      to="net.MOTOR_SLEEP"
      schDisplayLabel="nSLEEP"
    />
    <trace
      name="MOTOR_SCLK_DRIVER"
      from=".motorDriver .gateDriver .U1 > .SCLK"
      to="net.MOTOR_SCLK"
      schDisplayLabel="SCLK"
    />
    <trace
      name="MOTOR_SDI_DRIVER"
      from=".motorDriver .gateDriver .U1 > .SDI"
      to="net.MOTOR_SDI"
      schDisplayLabel="SDI"
    />
    <trace
      name="MOTOR_SDO_DRIVER"
      from=".motorDriver .gateDriver .U1 > .SDO"
      to="net.MOTOR_SDO"
      schDisplayLabel="SDO"
    />
    <trace
      name="MOTOR_SCS_DRIVER"
      from=".motorDriver .gateDriver .U1 > .nSCS"
      to="net.MOTOR_SCS"
      schDisplayLabel="nSCS"
    />
    <trace
      name="MOTOR_SO_DRIVER"
      from=".motorDriver .gateDriver .U1 > .SO"
      to="net.MOTOR_SO"
      schDisplayLabel="SO"
    />
    <trace
      name="MOTOR_FAULT_DRIVER"
      from=".motorDriver .gateDriver .U1 > .nFAULT"
      to="net.MOTOR_FAULT"
      schDisplayLabel="nFAULT"
    />

    {/* DRV8703 mode, SPI, status, and analog current-sense interfaces. */}
    <trace
      name="MOTOR_IN1_PH_MCU"
      from=".microcontroller .IC1 > .P2_6"
      to="net.MOTOR_IN1_PH"
      schDisplayLabel="IN1_PH"
    />
    <trace
      name="MOTOR_IN2_EN_MCU"
      from=".microcontroller .IC1 > .P2_5"
      to="net.MOTOR_IN2_EN"
      schDisplayLabel="IN2_EN"
    />
    <trace
      name="MOTOR_SLEEP_MCU"
      from=".microcontroller .IC1 > .P2_4"
      to="net.MOTOR_SLEEP"
      schDisplayLabel="nSLEEP"
    />
    <trace
      name="MOTOR_SCLK_MCU"
      from=".microcontroller .IC1 > .UCA2CLK"
      to="net.MOTOR_SCLK"
      schDisplayLabel="SCLK"
    />
    <trace
      name="MOTOR_SDI_MCU"
      from=".microcontroller .IC1 > .UCA2SIMO"
      to="net.MOTOR_SDI"
      schDisplayLabel="SDI"
    />
    <trace
      name="MOTOR_SDO_MCU"
      from=".microcontroller .IC1 > .UCA2SOMI"
      to="net.MOTOR_SDO"
      schDisplayLabel="SDO"
    />
    <trace
      name="MOTOR_SCS_MCU"
      from=".microcontroller .IC1 > .P5_3"
      to="net.MOTOR_SCS"
      schDisplayLabel="nSCS"
    />
    <trace
      name="MOTOR_SO_MCU"
      from=".microcontroller .IC1 > .A10"
      to="net.MOTOR_SO"
      schDisplayLabel="SO"
    />
    <trace
      name="MOTOR_FAULT_MCU"
      from=".microcontroller .IC1 > .P3_5"
      to="net.MOTOR_FAULT"
      schDisplayLabel="nFAULT"
    />

    {/* H-bridge outputs continue to the off-board window motor. */}
    <trace
      name="MOTOR_OUT_1_BRIDGE"
      from=".motorDriver .hBridge .Q1B > .source"
      to="net.MOTOR_OUT_1"
      schDisplayLabel="MOTOR_OUT_1"
    />
    <trace
      name="MOTOR_OUT_2_BRIDGE"
      from=".motorDriver .hBridge .Q2A > .source"
      to="net.MOTOR_OUT_2"
      schDisplayLabel="MOTOR_OUT_2"
    />

    {/* Anti-pinch analog and timer outputs return to the MCU. */}
    <trace
      name="PINCH_ADC_MCU"
      from=".microcontroller .IC1 > .A11"
      to="net.PINCH_ADC"
      schDisplayLabel="ADCMOTOR"
    />
    <trace
      name="PINCH_TIMER_MCU"
      from=".microcontroller .IC1 > .P8_0"
      to="net.PINCH_TIMER"
      schDisplayLabel="TIMER"
    />

    {/* Motor temperature trips and the two Hall channels return to the MCU. */}
    <trace
      name="THERMAL_HOT_MCU"
      from=".microcontroller .IC1 > .P3_6"
      to="net.THERMAL_HOT"
      schDisplayLabel="THERMAL_HOT"
    />
    <trace
      name="THERMAL_COLD_MCU"
      from=".microcontroller .IC1 > .P3_7"
      to="net.THERMAL_COLD"
      schDisplayLabel="THERMAL_COLD"
    />
    <trace
      name="HALL_1_SENSOR"
      from=".positionFeedback .U6 > .OUT"
      to="net.HALL_1"
      schDisplayLabel="HALL_1"
    />
    <trace
      name="HALL_1_MCU"
      from=".microcontroller .IC1 > .P3_0"
      to="net.HALL_1"
      schDisplayLabel="HALL_1"
    />
    <trace
      name="HALL_2_SENSOR"
      from=".positionFeedback .U5 > .OUT"
      to="net.HALL_2"
      schDisplayLabel="HALL_2"
    />
    <trace
      name="HALL_2_MCU"
      from=".microcontroller .IC1 > .P3_1"
      to="net.HALL_2"
      schDisplayLabel="HALL_2"
    />

    {/* Anti-pinch analog and timer outputs are exposed by the signal chain. */}
    <trace
      name="PINCH_ADC_SIGNAL_CHAIN"
      from=".pinchDetection .signalChain .R20 > .pin2"
      to="net.PINCH_ADC"
      schDisplayLabel="ADCMOTOR"
    />
    <trace
      name="PINCH_TIMER_SIGNAL_CHAIN"
      from=".pinchDetection .signalChain .R4 > .pin1"
      to="net.PINCH_TIMER"
      schDisplayLabel="TIMER"
    />
  </board>
);
