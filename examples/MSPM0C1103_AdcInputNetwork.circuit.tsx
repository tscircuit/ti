import "tscircuit";
import { MSPM0C1103SDSGR } from "../lib/chips/MSPM0C1103SDSGR.tsx";

const TI_RED = "#840000";

/**
 * TI SLASF90D, Figure 7-2, "MSPM0C1104/MSPM0C1103 ADC Input Network".
 * Section: https://www.ti.com/document-viewer/MSPM0C1103/datasheet/GUID-C6FF21A8-FE93-4A88-B508-50BE3DEF8658#GUID-00AF94FF-7D7E-47C5-922F-56E845B3A5FD
 * Figure: https://www.ti.com/ods/images/SLASF90D/GUID-51401E88-ED97-42E3-BA03-EBE514B1C1ED-low.svg
 *
 * External Rpar/Cpar and Rin stay left of the device boundary. The symbol
 * preserves TI's internal input capacitance, sample switch, and SAR labels as
 * an equivalent-model drawing rather than extra placed components.
 */
export const MSPM0C1103_AdcInputNetwork = () => (
  <board routingDisabled>
    <MSPM0C1103SDSGR
      name="U1"
      schX={2}
      schY={0}
      symbol={
        <symbol>
          <schematicrect
            schX={0}
            schY={0}
            width={4.4}
            height={2.5}
            strokeWidth={0.03}
            color={TI_RED}
            isFilled={false}
          />
          <schematictext
            text="ADC Model"
            schX={-1.15}
            schY={0.95}
            fontSize={0.2}
            anchor="center"
          />
          <schematictext
            text="CI"
            schX={-1.3}
            schY={0.1}
            fontSize={0.2}
            anchor="center"
          />
          <schematicline
            x1={-1.45}
            y1={0.45}
            x2={-1.15}
            y2={0.45}
            strokeWidth={0.03}
            color={TI_RED}
          />
          <schematicline
            x1={-1.45}
            y1={0.28}
            x2={-1.15}
            y2={0.28}
            strokeWidth={0.03}
            color={TI_RED}
          />
          <schematicline
            x1={-1.3}
            y1={0.28}
            x2={-1.3}
            y2={-0.75}
            strokeWidth={0.03}
            color={TI_RED}
          />
          <schematictext
            text="S1"
            schX={-0.2}
            schY={0.62}
            fontSize={0.18}
            anchor="center"
          />
          <schematicline
            x1={-0.75}
            y1={0.4}
            x2={-0.25}
            y2={0.4}
            strokeWidth={0.03}
            color={TI_RED}
          />
          <schematicline
            x1={-0.2}
            y1={0.4}
            x2={0.3}
            y2={0.65}
            strokeWidth={0.03}
            color={TI_RED}
          />
          <schematictext
            text="CS/H"
            schX={0.45}
            schY={0.05}
            fontSize={0.18}
            anchor="center"
          />
          <schematicline
            x1={0.3}
            y1={0.45}
            x2={0.6}
            y2={0.45}
            strokeWidth={0.03}
            color={TI_RED}
          />
          <schematicline
            x1={0.3}
            y1={0.28}
            x2={0.6}
            y2={0.28}
            strokeWidth={0.03}
            color={TI_RED}
          />
          <schematicline
            x1={0.45}
            y1={0.28}
            x2={0.45}
            y2={-0.75}
            strokeWidth={0.03}
            color={TI_RED}
          />
          <schematicrect
            schX={1.45}
            schY={0.35}
            width={1.15}
            height={0.95}
            strokeWidth={0.03}
            color={TI_RED}
            isFilled={false}
          />
          <schematictext
            text="12-bit SAR"
            schX={1.45}
            schY={0.35}
            fontSize={0.18}
            anchor="center"
          />
          <port
            name="PA0"
            pinNumber={5}
            schX={-2.55}
            schY={0.4}
            direction="left"
            schStemLength={0.35}
          />
        </symbol>
      }
    />

    <resistor
      name="R1"
      displayName="Rpar"
      resistance="100"
      footprint="0402"
      schX={-4.2}
      schY={0.4}
    />
    <capacitor
      name="C1"
      displayName="Cpar"
      capacitance="20pF"
      footprint="0402"
      schX={-2.9}
      schY={-0.9}
      schOrientation="vertical"
    />
    <resistor
      name="R2"
      displayName="Rin"
      resistance="1k"
      footprint="0402"
      schX={-1.4}
      schY={0.4}
    />

    <trace from="net.Vin" to="R1.pin1" />
    <trace from="R1.pin2" to="R2.pin1" />
    <trace from="R1.pin2" to="C1.pin1" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="R2.pin2" to="U1.PA0" />

    <schematictext
      text="DEVICE BOUNDARY"
      schX={-0.6}
      schY={-1.55}
      fontSize={0.16}
      anchor="center"
    />
  </board>
);

export default MSPM0C1103_AdcInputNetwork;
