import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TPS7A8101QDRBRQ1 } from "../chips/TPS7A8101QDRBRQ1.circuit.tsx";

export const LDO_01_PMIC_ENABLE_SECTION_NAME = "ldo_01_pmic_enable";

/**
 * TIDEP-0092 Rev C 1.8 V LDO sheet, PROC011C_LDO_01 (1.8V Output).SchDoc.
 * Evaluated source transform: schX = (sourceX - 690) * 0.0375;
 * schY = (sourceY - 520) * 0.0375. Source Y and tscircuit Y both increase up.
 */
export const SystemPowerLdo1_TPS7A8101_TIDEP0092 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schMaxTraceDistance="100mm" {...props}>
    <net name="GND" isGroundNet />
    <net name="PMIC_2V3" isPowerNet />
    <net name="AR_1V8" isPowerNet />
    <net name="LDO_01_EN" />

    <TPS7A8101QDRBRQ1 name="U4" schX={0} schY={6.375} />

    <capacitor
      name="C21"
      capacitance="0.1uF"
      maxVoltageRating="50V"
      footprint="0402"
      manufacturerPartNumber="CGA2B3X7R1H104K050BB"
      schX={-13.125}
      schY={5.625}
      schOrientation="vertical"
    />
    <capacitor
      name="C25"
      capacitance="22uF"
      maxVoltageRating="6.3V"
      footprint="1206"
      manufacturerPartNumber="CGA5L1X7R0J226M160AC"
      schX={-10.875}
      schY={5.625}
      schOrientation="vertical"
    />
    <capacitor
      name="C23"
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={-8.625}
      schY={4.875}
      schOrientation="vertical"
    />
    <capacitor
      name="C22"
      capacitance="0.47uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GCM188R71C474KA55D"
      schX={-5.25}
      schY={4.5}
      schOrientation="vertical"
    />
    <capacitor
      name="C18"
      capacitance="0.47uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GCM188R71C474KA55D"
      schX={7.125}
      schY={6.375}
      schOrientation="vertical"
    />
    <capacitor
      name="C19"
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={9}
      schY={6.375}
      schOrientation="vertical"
    />
    <resistor
      name="R82"
      resistance="12.7kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW040212K7FKED"
      schX={5.625}
      schY={6}
      schOrientation="vertical"
    />
    <resistor
      name="R81"
      resistance="10kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0FKED"
      schX={6.375}
      schY={3.375}
      schOrientation="vertical"
    />
    <resistor
      name="R84"
      schSectionName={LDO_01_PMIC_ENABLE_SECTION_NAME}
      resistance="10kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0FKED"
      schX={-3.75}
      schY={-3.375}
      schOrientation="vertical"
    />
    <resistor
      name="R83"
      schSectionName={LDO_01_PMIC_ENABLE_SECTION_NAME}
      resistance="10kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0FKED"
      doNotPlace
      schX={-3.75}
      schY={-6}
      schOrientation="vertical"
    />

    <trace from=".C21 > .pin2" to=".C25 > .pin2" />
    <trace from=".C25 > .pin2" to=".C23 > .pin2" />
    <trace from=".C23 > .pin2" to=".U4 > .IN1" />
    <trace from=".U4 > .IN1" to=".U4 > .IN2" />
    <netlabel
      net="PMIC_2V3"
      connection="C25.pin2"
      schX={-12}
      schY={9.75}
      anchorSide="bottom"
    />
    <trace from=".C21 > .pin1" to=".C25 > .pin1" />
    <trace from=".C25 > .pin1" to=".C23 > .pin1" />
    <trace from=".C23 > .pin1" to=".C22 > .pin1" />
    <trace from=".C22 > .pin1" to=".U4 > .GND" />
    <trace from=".U4 > .GND" to=".U4 > .EP" />
    <trace from=".U4 > .NR" to=".C22 > .pin2" />
    <netlabel
      net="GND"
      connection="C22.pin1"
      schX={-4.125}
      schY={1.875}
      anchorSide="top"
    />

    <trace from=".U4 > .OUT1" to=".U4 > .OUT2" />
    <trace from=".U4 > .OUT2" to=".R82 > .pin2" />
    <trace from=".R82 > .pin2" to=".C18 > .pin2" />
    <trace from=".C18 > .pin2" to=".C19 > .pin2" />
    <netlabel
      net="AR_1V8"
      connection="C19.pin2"
      schX={9}
      schY={7.875}
      anchorSide="bottom"
    />
    <trace from=".C18 > .pin1" to=".C19 > .pin1" />
    <netlabel
      net="GND"
      connection="C19.pin1"
      schX={9}
      schY={3.75}
      anchorSide="top"
    />
    <trace from=".U4 > .FB_SNS" to=".R82 > .pin1" />
    <trace from=".R82 > .pin1" to=".R81 > .pin2" />
    <netlabel
      net="GND"
      connection="R81.pin1"
      schX={6.375}
      schY={2.25}
      anchorSide="top"
    />

    <netlabel
      net="LDO_01_EN"
      connection="U4.EN"
      schX={-6}
      schY={6.375}
      anchorSide="right"
    />
    <netlabel
      net="PMIC_2V3"
      connection="R84.pin1"
      schX={-3.75}
      schY={-1.875}
      anchorSide="bottom"
    />
    <trace from=".R84 > .pin2" to=".R83 > .pin1" />
    <netlabel
      net="LDO_01_EN"
      connection="R84.pin2"
      schX={-0.375}
      schY={-4.5}
      anchorSide="left"
    />
    <netlabel
      net="GND"
      connection="R83.pin2"
      schX={-3.75}
      schY={-7.875}
      anchorSide="top"
    />
  </subcircuit>
);

export default SystemPowerLdo1_TPS7A8101_TIDEP0092;
