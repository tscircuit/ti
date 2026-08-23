import "tscircuit";
import { LMC555CMX_NOPB } from "../lib/chips/LMC555CMX_NOPB.tsx";

const TI_RED = "#840000";

/**
 * TI LMC555 datasheet (SNAS558N), Figure 8-1,
 * "LMC555 Schematic of Monostable Mode to Flash an LED".
 * Section: https://www.ti.com/document-viewer/LMC555/datasheet/GUID-70DF1B73-42F3-448D-B588-86B0175F1C4C#TITLE-SNAS558SNAS5589201
 * Figure: https://www.ti.com/ods/images/SNAS558N/GUID-9517F735-81AC-4C81-8971-FC3F01B7204F-low.gif
 *
 * The component positions deliberately follow the TI figure: trigger switch
 * and pull-up at upper left, LED branch at lower left, timing resistor and
 * capacitor at right, and the control-voltage capacitor below pin 5.
 */
export const LMC555_MonostableLedFlasher = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <LMC555CMX_NOPB
      name="U1"
      schX={0}
      schY={0}
      symbol={
        <symbol>
          <schematicrect
            schX={0}
            schY={0}
            width={2.4}
            height={2.8}
            strokeWidth={0.03}
            color={TI_RED}
            isFilled={false}
          />
          <schematictext
            text="LMC555"
            schX={-0.35}
            schY={0.12}
            fontSize={0.2}
            anchor="center"
            color={TI_RED}
          />
          <port
            name="TRIGGER"
            pinNumber={2}
            schX={-1.5}
            schY={0.7}
            direction="left"
            schStemLength={0.3}
          />
          <port
            name="OUTPUT"
            pinNumber={3}
            schX={-1.5}
            schY={-0.65}
            direction="left"
            schStemLength={0.3}
          />
          <port
            name="RESET"
            pinNumber={4}
            schX={-0.65}
            schY={1.7}
            direction="up"
            schStemLength={0.3}
          />
          <port
            name="VCC"
            pinNumber={8}
            schX={0.65}
            schY={1.7}
            direction="up"
            schStemLength={0.3}
          />
          <port
            name="DISCHARGE"
            pinNumber={7}
            schX={1.5}
            schY={0.7}
            direction="right"
            schStemLength={0.3}
          />
          <port
            name="THRESHOLD"
            pinNumber={6}
            schX={1.5}
            schY={0}
            direction="right"
            schStemLength={0.3}
          />
          <port
            name="CONTROL"
            pinNumber={5}
            schX={1.5}
            schY={-0.7}
            direction="right"
            schStemLength={0.3}
          />
          <port
            name="GND"
            pinNumber={1}
            schX={0}
            schY={-1.7}
            direction="down"
            schStemLength={0.3}
          />
        </symbol>
      }
    />

    <pushbutton name="SW1" displayName="" schX={-4.1} schY={0.7} />
    <resistor
      name="R_TRIGGER"
      resistance="10k"
      footprint="0402"
      schX={-2.8}
      schY={1.85}
      schOrientation="horizontal"
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      schX={-3}
      schY={-0.65}
      schRotation={270}
    />
    <resistor
      name="R_LED"
      resistance="470ohm"
      footprint="0402"
      schX={-3}
      schY={-1.75}
      schOrientation="vertical"
    />
    <resistor
      name="R_TIMING"
      resistance="10k"
      footprint="0402"
      schX={2.9}
      schY={1.1}
      schOrientation="vertical"
    />
    <capacitor
      name="C_TIMING"
      capacitance="470uF"
      footprint="1206"
      schX={2.9}
      schY={-0.4}
      schOrientation="vertical"
    />
    <capacitor
      name="C_CONTROL"
      capacitance="10nF"
      footprint="0402"
      schX={1.9}
      schY={-1.65}
      schOrientation="vertical"
    />

    <trace from="SW1.pin2" to="U1.TRIGGER" />
    <trace from="R_TRIGGER.pin1" to="SW1.pin2" />
    <trace from="R_TRIGGER.pin2" to="net.VCC" />
    <trace from="U1.RESET" to="net.VCC" />
    <trace from="U1.VCC" to="net.VCC" />
    <trace from="R_TIMING.pin1" to="net.VCC" />

    <trace from="R_TIMING.pin2" to="C_TIMING.pin1" />
    <trace from="U1.DISCHARGE" to="C_TIMING.pin1" />
    <trace from="U1.THRESHOLD" to="C_TIMING.pin1" />

    <trace from="U1.OUTPUT" to="D1.anode" />
    <trace from="D1.cathode" to="R_LED.pin1" />
    <trace from="U1.CONTROL" to="C_CONTROL.pin1" />

    <trace from="SW1.pin1" to="net.GND" />
    <trace from="R_LED.pin2" to="net.GND" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="C_TIMING.pin2" to="net.GND" />
    <trace from="C_CONTROL.pin2" to="net.GND" />

    <schematictext
      text="pushbutton switch"
      schX={-4.35}
      schY={1.25}
      fontSize={0.19}
      anchor="center"
    />
    <schematictext
      text="+5 V to +15 V"
      schX={0.3}
      schY={2.25}
      fontSize={0.2}
      anchor="center"
    />
  </board>
);

export default LMC555_MonostableLedFlasher;
