import {
  OutputUserInterface_LEDMatrix_LP5892_Q1,
  PowerManagement_TLV755P,
  Sensors_TMP116_OPT3004,
} from "@tsci/tscircuit.ti";
import "tscircuit";

const RED_OUTPUTS = Array.from({ length: 16 }, (_, index) => `R${index}`);
const GREEN_OUTPUTS = Array.from({ length: 16 }, (_, index) => `G${index}`);
const BLUE_OUTPUTS = Array.from({ length: 16 }, (_, index) => `B${index}`);
const LINE_OUTPUTS = Array.from({ length: 16 }, (_, index) => `LINE${index}`);

const connectHeaderToDriver = (netNames: readonly string[]) =>
  Object.fromEntries(
    netNames.map((netName, index) => [
      `pin${index + 1}`,
      `.led_driver > net.${netName}`,
    ]),
  );

/**
 * Flat-panel industrial-automation carrier composed from reusable TI blocks.
 *
 * J_HOST is the boundary to the user's processor/controller. The RGB and line
 * headers are the boundary to the common-cathode LED matrix, so this example
 * does not imply a specific processor or panel connector that is not present.
 */
export default () => (
  <board routingDisabled isViaInPadAllowed>
    <schematicsheet
      name="controller_interface"
      displayName="Controller Interface"
      sheetIndex={0}
    />
    <schematicsheet
      name="power_3v3"
      displayName="3.3 V Housekeeping Power"
      sheetIndex={1}
    />
    <schematicsheet
      name="sensors"
      displayName="Temperature and Ambient Light Sensors"
      sheetIndex={2}
    />
    <schematicsheet
      name="led_driver"
      displayName="LP5892-Q1 LED Matrix Driver"
      sheetIndex={3}
    />
    <schematicsheet
      name="matrix_interface"
      displayName="LED Matrix Interface"
      sheetIndex={4}
    />

    <net name="VIN_5V" isPowerNet />
    <net name="V3V3" isPowerNet />
    <net name="GND" isGroundNet />
    <net name="LDO_EN" />
    <net name="LED_SCLK" />
    <net name="LED_SIN" />
    <net name="LED_SOUT" />
    <net name="I2C_SCL" />
    <net name="I2C_SDA" />
    <net name="TEMP_ALERT" />
    <net name="LIGHT_INT" />

    <pinheader
      name="J_HOST"
      displayName="HOST / CONTROLLER"
      pinCount={12}
      gender="female"
      pitch="2.54mm"
      schSheetName="controller_interface"
      schX={0}
      schY={0}
      pcbX={-28}
      pcbY={0}
      pcbRotation={90}
      pinLabels={[
        "VIN_5V",
        "LDO_EN",
        "V3V3",
        "GND",
        "LED_SCLK",
        "LED_SIN",
        "LED_SOUT",
        "I2C_SCL",
        "I2C_SDA",
        "TEMP_ALERT",
        "LIGHT_INT",
        "GND",
      ]}
      connections={{
        pin1: "net.VIN_5V",
        pin2: "net.LDO_EN",
        pin3: "net.V3V3",
        pin4: "net.GND",
        pin5: "net.LED_SCLK",
        pin6: "net.LED_SIN",
        pin7: "net.LED_SOUT",
        pin8: "net.I2C_SCL",
        pin9: "net.I2C_SDA",
        pin10: "net.TEMP_ALERT",
        pin11: "net.LIGHT_INT",
        pin12: "net.GND",
      }}
    />
    <PowerManagement_TLV755P
      name="power_3v3"
      schSheetName="power_3v3"
      pcbX={-12}
      pcbY={0}
    />
    <Sensors_TMP116_OPT3004
      name="sensors"
      schSheetName="sensors"
      pcbX={2}
      pcbY={0}
    />
    <OutputUserInterface_LEDMatrix_LP5892_Q1
      name="led_driver"
      schSheetName="led_driver"
      pcbX={24}
      pcbY={0}
    />

    <trace from="net.VIN_5V" to=".power_3v3 > net.VIN" />
    <trace from="net.LDO_EN" to=".power_3v3 > net.EN" />
    <trace from=".power_3v3 > net.VOUT_3V3" to="net.V3V3" />
    <trace from="net.V3V3" to=".sensors > net.VDD" />
    <trace from="net.V3V3" to=".led_driver > net.VCC" />

    <trace from="net.GND" to=".power_3v3 > net.GND" />
    <trace from="net.GND" to=".sensors > net.GND" />
    <trace from="net.GND" to=".led_driver > net.GND" />

    <trace from="net.I2C_SCL" to=".sensors > net.SCL" />
    <trace from="net.I2C_SDA" to=".sensors > net.SDA" />
    <trace from="net.TEMP_ALERT" to=".sensors > net.TEMP_ALERT" />
    <trace from="net.LIGHT_INT" to=".sensors > net.LIGHT_INT" />
    <trace from="net.LED_SCLK" to=".led_driver > net.SCLK" />
    <trace from="net.LED_SIN" to=".led_driver > net.SIN" />
    <trace from=".led_driver > net.SOUT" to="net.LED_SOUT" />

    <pinheader
      name="J_LED_POWER"
      displayName="LED RAIL POWER"
      pinCount={4}
      gender="male"
      pitch="2.54mm"
      schSheetName="matrix_interface"
      schX={-8}
      schY={4}
      pcbX={24}
      pcbY={11}
      pinLabels={["VR", "VG", "VB", "GND"]}
      connections={{
        pin1: ".led_driver > net.VR",
        pin2: ".led_driver > net.VG",
        pin3: ".led_driver > net.VB",
        pin4: "net.GND",
      }}
    />

    <pinheader
      name="J_RED"
      displayName="RED SINKS R0-R15"
      pinCount={16}
      gender="male"
      pitch="2.54mm"
      schSheetName="matrix_interface"
      schX={-8}
      schY={0}
      pcbX={8}
      pcbY={35}
      pcbRotation={90}
      pinLabels={RED_OUTPUTS}
      connections={connectHeaderToDriver(RED_OUTPUTS)}
    />
    <pinheader
      name="J_GREEN"
      displayName="GREEN SINKS G0-G15"
      pinCount={16}
      gender="male"
      pitch="2.54mm"
      schSheetName="matrix_interface"
      schX={-2.5}
      schY={0}
      pcbX={16}
      pcbY={35}
      pcbRotation={90}
      pinLabels={GREEN_OUTPUTS}
      connections={connectHeaderToDriver(GREEN_OUTPUTS)}
    />
    <pinheader
      name="J_BLUE"
      displayName="BLUE SINKS B0-B15"
      pinCount={16}
      gender="male"
      pitch="2.54mm"
      schSheetName="matrix_interface"
      schX={3}
      schY={0}
      pcbX={24}
      pcbY={35}
      pcbRotation={90}
      pinLabels={BLUE_OUTPUTS}
      connections={connectHeaderToDriver(BLUE_OUTPUTS)}
    />
    <pinheader
      name="J_LINES"
      displayName="SCAN LINES LINE0-LINE15"
      pinCount={16}
      gender="male"
      pitch="2.54mm"
      schSheetName="matrix_interface"
      schX={8.5}
      schY={0}
      pcbX={32}
      pcbY={35}
      pcbRotation={90}
      pinLabels={LINE_OUTPUTS}
      connections={connectHeaderToDriver(LINE_OUTPUTS)}
    />
  </board>
);
