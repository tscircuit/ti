import {
  CommunicationInterface_TCAN1042_TIDA01428,
  LightDriver_TIDA01330,
  Microcontroller_MSPM0L1306Q1_TIDA020065,
  MotorDriver_DRV8305_TIDA01330,
  PositionFeedback_DRV5013_TIDA01389,
  PowerSupply_LM5050_TIDA00992,
} from "@tsci/tscircuit.ti";
import type { TraceProps } from "@tscircuit/props";
import "tscircuit";

const Interconnect = (props: TraceProps) => (
  <trace {...props} maxLength="180mm" />
);

/** Seat Position Module assembled from reusable TI reference subcircuits. */
export default () => (
  <board width="200mm" height="130mm" autorouter="beta_pipeline9">
    <schematicsheet name="power" displayName="Power Supply" sheetIndex={0} />
    <schematicsheet name="can" displayName="CAN Interface" sheetIndex={1} />
    <schematicsheet name="mcu" displayName="Microcontroller" sheetIndex={2} />
    <schematicsheet
      name="position"
      displayName="Position Feedback"
      sheetIndex={3}
    />
    <schematicsheet name="light" displayName="Light Driver" sheetIndex={4} />
    <schematicsheet name="motor" displayName="Motor Driver" sheetIndex={5} />

    <net name="VBATT" isPowerNet />
    <net name="VPROTECTED" isPowerNet />
    <net name="V5P0" isPowerNet />
    <net name="V3P3" isPowerNet />
    <net name="GND" isGroundNet />
    <net name="CANH" />
    <net name="CANL" />

    <PowerSupply_LM5050_TIDA00992
      name="power"
      schSheetName="power"
      pcbX={-70}
      pcbY={35}
      pcbPositionMode="relative_to_board_anchor"
    />
    <CommunicationInterface_TCAN1042_TIDA01428
      name="can"
      schSheetName="can"
      pcbX={-65}
      pcbY={-5}
      pcbPositionMode="relative_to_board_anchor"
    />
    <Microcontroller_MSPM0L1306Q1_TIDA020065
      name="mcu"
      schSheetName="mcu"
      pcbX={50}
      pcbY={35}
      pcbPositionMode="relative_to_board_anchor"
    />
    <PositionFeedback_DRV5013_TIDA01389
      name="position"
      schSheetName="position"
      pcbX={65}
      pcbPositionMode="relative_to_board_anchor"
    />
    <LightDriver_TIDA01330
      name="light"
      schSheetName="light"
      pcbX={-65}
      pcbY={-35}
      pcbPositionMode="relative_to_board_anchor"
    />
    <MotorDriver_DRV8305_TIDA01330
      name="motor"
      schSheetName="motor"
      pcbX={15}
      pcbY={-30}
      pcbPositionMode="relative_to_board_anchor"
    />

    {/* Vehicle input and protected battery rail. */}
    <Interconnect from=".power > .U1 > .IN" to="net.VBATT" />
    <Interconnect from=".power > .U1 > .OUT" to="net.VPROTECTED" />
    <Interconnect from=".motor > .U1 > .PVDD" to="net.VPROTECTED" />
    <Interconnect from=".light > .R3 > .pin1" to="net.VPROTECTED" />

    {/* Regulated rails supplied by the surrounding seat module. */}
    <Interconnect from=".can > .R21 > .pin1" to="net.V5P0" />
    <Interconnect from=".can > .R22 > .pin1" to="net.V3P3" />
    <Interconnect from=".mcu > .C14 > .pin2" to="net.V3P3" />
    <Interconnect from=".position > .U6 > .VCC" to="net.V3P3" />
    <Interconnect from=".motor > .C18 > .pin1" to="net.V3P3" />

    {/* Common ground. */}
    <Interconnect from=".power > .U1 > .GND" to="net.GND" />
    <Interconnect from=".can > .U6 > .GND" to="net.GND" />
    <Interconnect from=".mcu > .U6 > .VSS" to="net.GND" />
    <Interconnect from=".position > .U6 > .GND" to="net.GND" />
    <Interconnect from=".motor > .U1 > .GND1" to="net.GND" />

    {/* Vehicle CAN bus and MCU interface. */}
    <Interconnect from=".can > .R23 > .pin1" to="net.CANH" />
    <Interconnect from=".can > .R24 > .pin2" to="net.CANL" />
    <Interconnect from=".mcu > .U6 > .PA8" to=".can > .U6 > .TXD" />
    <Interconnect from=".mcu > .U6 > .PA9" to=".can > .U6 > .RXD" />
    <Interconnect from=".mcu > .U6 > .PA10" to=".can > .U6 > .STB" />

    {/* Position feedback, lighting and protected-power control. */}
    <Interconnect from=".position > .U6 > .OUT" to=".mcu > .U6 > .PA11" />
    <Interconnect from=".position > .U5 > .OUT" to=".mcu > .U6 > .PA12" />
    <Interconnect from=".mcu > .U6 > .PA13" to=".light > .R4 > .pin1" />
    <Interconnect from=".mcu > .U6 > .PA0" to=".power > .R3 > .pin1" />

    {/* DRV8305 status, serial interface and three half-bridge inputs. */}
    <Interconnect from=".motor > .U1 > .nFAULT" to=".mcu > .U6 > .PA1" />
    <Interconnect from=".mcu > .U6 > .PA3" to=".motor > .U1 > .WAKE" />
    <Interconnect from=".mcu > .U6 > .PA4" to=".motor > .U1 > .nSCS" />
    <Interconnect from=".mcu > .U6 > .PA5" to=".motor > .U1 > .SCLK" />
    <Interconnect from=".mcu > .U6 > .PA6" to=".motor > .U1 > .SDI" />
    <Interconnect from=".motor > .U1 > .SDO" to=".mcu > .U6 > .PA7" />
    <Interconnect from=".mcu > .U6 > .PA21" to=".motor > .U1 > .INHA" />
    <Interconnect from=".mcu > .U6 > .PA22" to=".motor > .U1 > .INLA" />
    <Interconnect from=".mcu > .U6 > .PA23" to=".motor > .U1 > .INHB" />
    <Interconnect from=".mcu > .U6 > .PA24" to=".motor > .U1 > .INLB" />
    <Interconnect from=".mcu > .U6 > .PA25" to=".motor > .U1 > .INHC" />
    <Interconnect from=".mcu > .U6 > .PA26" to=".motor > .U1 > .INLC" />
    <Interconnect from=".mcu > .U6 > .PA27" to=".motor > .U1 > .EN_GATE" />
  </board>
);
