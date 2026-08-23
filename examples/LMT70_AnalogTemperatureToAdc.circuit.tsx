import "tscircuit";
import { LMT70YFQR } from "../lib/chips/LMT70YFQR.tsx";

/**
 * TI LMT70 datasheet (SNIS187A), "Typical Application Schematic":
 * https://www.ti.com/document-viewer/LMT70/datasheet/application_and_implementation#SNIS1884528
 * https://www.ti.com/ods/images/SNIS187A/Schem_03_SNIS187.gif
 *
 * The TI figure names a generic MSP430 rather than a specific orderable part,
 * so the MCU is represented as the two labeled reference endpoints shown in
 * the source instead of substituting an arbitrary device.
 */
export const LMT70_AnalogTemperatureToAdc = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <LMT70YFQR
      name="U1"
      displayName="LMT70"
      schX={-1.5}
      schY={0}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2"],
        },
        topSide: { direction: "left-to-right", pins: ["pin3"] },
        bottomSide: { direction: "left-to-right", pins: ["pin4"] },
      }}
      schWidth={1.8}
      schHeight={1.8}
    />

    <schematicsymbol
      name="SUPPLY"
      displayName="2.2 V to 3.6 V"
      symbolName="rail_up"
      schX={-1.5}
      schY={1.6}
    />
    <schematicsymbol
      name="MCU_VDD"
      displayName="MSP430 VDD"
      symbolName="testpoint_right"
      schX={2.4}
      schY={1.15}
    />
    <schematicsymbol
      name="MCU_ADC"
      displayName="MSP430 P2.3 · ADC"
      symbolName="testpoint_right"
      schX={2.4}
      schY={0}
    />
    <schematicsymbol
      name="MCU_VREF"
      displayName="MSP430 P2.5_VREF · 1.5 V"
      symbolName="testpoint_right"
      schX={2.4}
      schY={-0.85}
    />
    <schematicsymbol
      name="VREF15"
      displayName="1.5 V reference"
      symbolName="rail_up"
      schX={0.65}
      schY={-0.85}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={-1.5}
      schY={-1.35}
    />

    <net name="GND" isGroundNet connectsTo={["GND_DEVICE.1"]} />

    <trace from=".SUPPLY > .1" to=".U1 > .VDD" />
    <trace from=".SUPPLY > .1" to=".U1 > .T_ON" />
    <trace from=".SUPPLY > .1" to=".MCU_VDD > .1" />
    <trace from=".U1 > .TAO" to=".MCU_ADC > .1" />
    <trace from=".VREF15 > .1" to=".MCU_VREF > .1" />
    <trace from=".U1 > .GND" to=".GND_DEVICE > .1" />
  </board>
);

export default LMT70_AnalogTemperatureToAdc;
