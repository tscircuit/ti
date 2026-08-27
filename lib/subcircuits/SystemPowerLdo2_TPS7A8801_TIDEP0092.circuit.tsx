import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TPS7A8801RTJR } from "../chips/TPS7A8801RTJR.circuit.tsx";

export const LDO_02_DUAL_1P3V_SECTION_NAME = "ldo_02_dual_1p3v";

/**
 * TIDEP-0092 Rev C dual 1.3 V LDO sheet, PROC011C_LDO_02 (1.3V Output).SchDoc.
 * Evaluated source transform: schX = (sourceX - 670) * 0.0275;
 * schY = (sourceY - 550) * 0.0275. Source Y and tscircuit Y both increase up.
 */
export const SystemPowerLdo2_TPS7A8801_TIDEP0092 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schMaxTraceDistance="100mm" {...props}>
    <net name="GND" isGroundNet />
    <net name="PMIC_1V8" isPowerNet />
    <net name="AR_1P3_RF1" isPowerNet />
    <net name="AR_1P3_RF2" isPowerNet />
    <net name="LDO_02_EN" />
    <net name="SS_CTRL" />

    <TPS7A8801RTJR
      name="U5"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      schX={0}
      schY={2.2}
      noConnect={["PG1", "PG2"]}
    />

    <capacitor
      name="C31"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="22uF"
      maxVoltageRating="6.3V"
      footprint="1206"
      manufacturerPartNumber="CGA5L1X7R0J226M160AC"
      schX={-10.725}
      schY={5.225}
      schOrientation="vertical"
    />
    <capacitor
      name="C32"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={-9.625}
      schY={5.225}
      schOrientation="vertical"
    />
    <capacitor
      name="C30"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="22uF"
      maxVoltageRating="6.3V"
      footprint="1206"
      manufacturerPartNumber="CGA5L1X7R0J226M160AC"
      schX={-8.525}
      schY={5.225}
      schOrientation="vertical"
    />
    <capacitor
      name="C40"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={-7.425}
      schY={5.225}
      schOrientation="vertical"
    />

    <capacitor
      name="C44"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="0.01uF"
      maxVoltageRating="50V"
      footprint="0402"
      manufacturerPartNumber="CGA2B3X8R1H103K050BB"
      schX={-4.125}
      schY={3.3}
    />
    <capacitor
      name="C29"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="0.01uF"
      maxVoltageRating="50V"
      footprint="0402"
      manufacturerPartNumber="CGA2B3X8R1H103K050BB"
      schX={-4.95}
      schY={-0.55}
    />

    <capacitor
      name="C46"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="0.01uF"
      maxVoltageRating="50V"
      footprint="0402"
      manufacturerPartNumber="CGA2B3X8R1H103K050BB"
      schX={4.95}
      schY={6.6}
      schOrientation="vertical"
    />
    <resistor
      name="R131"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      resistance="1.96kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04021K96FKED"
      schX={4.125}
      schY={5.775}
      schOrientation="vertical"
    />
    <resistor
      name="R132"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      resistance="3kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04023K00FKED"
      schX={5.225}
      schY={3.3}
    />
    <capacitor
      name="C36"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GCM188R71C105KA64D"
      schX={6.05}
      schY={6.6}
      schOrientation="vertical"
    />
    <capacitor
      name="C37"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={7.15}
      schY={6.6}
      schOrientation="vertical"
    />
    <capacitor
      name="C38"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={8.25}
      schY={6.6}
      schOrientation="vertical"
    />

    <capacitor
      name="C28"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="0.01uF"
      maxVoltageRating="50V"
      footprint="0402"
      manufacturerPartNumber="CGA2B3X8R1H103K050BB"
      schX={5.5}
      schY={1.375}
      schOrientation="vertical"
    />
    <resistor
      name="R122"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      resistance="1.96kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04021K96FKED"
      schX={4.4}
      schY={1.1}
      schOrientation="vertical"
    />
    <resistor
      name="R121"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      resistance="3kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04023K00FKED"
      schX={4.95}
      schY={-1.1}
      schOrientation="vertical"
    />
    <capacitor
      name="C35"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={6.6}
      schY={0.825}
      schOrientation="vertical"
    />
    <capacitor
      name="C33"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GCM188R71C105KA64D"
      schX={7.7}
      schY={0.825}
      schOrientation="vertical"
    />
    <capacitor
      name="C34"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={8.8}
      schY={0.825}
      schOrientation="vertical"
    />

    <resistor
      name="R46"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      resistance="10kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0FKED"
      schX={-1.65}
      schY={-4.675}
      schOrientation="vertical"
    />
    <resistor
      name="R47"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      resistance="10kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0FKED"
      doNotPlace
      schX={-1.65}
      schY={-6.325}
      schOrientation="vertical"
    />
    <resistor
      name="R120"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      resistance="0ohm"
      tolerance="5%"
      footprint="0402"
      manufacturerPartNumber="ERJ-2GE0R00X"
      doNotPlace
      schX={11}
      schY={-2.75}
      schOrientation="vertical"
    />
    <resistor
      name="R119"
      schSectionName={LDO_02_DUAL_1P3V_SECTION_NAME}
      resistance="0ohm"
      tolerance="5%"
      footprint="0402"
      manufacturerPartNumber="ERJ-2GE0R00X"
      schX={11}
      schY={-4.4}
      schOrientation="vertical"
    />

    <trace from=".C31 > .pin2" to=".C32 > .pin2" />
    <trace from=".C32 > .pin2" to=".C30 > .pin2" />
    <trace from=".C30 > .pin2" to=".C40 > .pin2" />
    <trace from=".C40 > .pin2" to=".U5 > .IN1_1" />
    <trace from=".U5 > .IN1_1" to=".U5 > .IN1_2" />
    <trace from=".U5 > .IN1_2" to=".U5 > .IN2_1" />
    <trace from=".U5 > .IN2_1" to=".U5 > .IN2_2" />
    <netlabel
      net="PMIC_1V8"
      connection="C32.pin2"
      schX={-9.075}
      schY={7.15}
      anchorSide="bottom"
    />
    <trace from=".C31 > .pin1" to=".C32 > .pin1" />
    <trace from=".C32 > .pin1" to=".C30 > .pin1" />
    <trace from=".C30 > .pin1" to=".C40 > .pin1" />
    <netlabel
      net="GND"
      connection="C32.pin1"
      schX={-9.075}
      schY={3.025}
      anchorSide="top"
    />

    <netlabel
      net="LDO_02_EN"
      connection="U5.EN1"
      schX={-5.225}
      schY={4.4}
      anchorSide="right"
    />
    <netlabel
      net="LDO_02_EN"
      connection="U5.EN2"
      schX={-5.225}
      schY={1.375}
      anchorSide="right"
    />
    <netlabel
      net="PMIC_1V8"
      connection="R46.pin1"
      schX={-1.65}
      schY={-4.125}
      anchorSide="bottom"
    />
    <trace from=".R46 > .pin2" to=".R47 > .pin1" />
    <trace from=".R46 > .pin2" to="net.LDO_02_EN" schDisplayLabel="LDO_02_EN" />
    <netlabel
      net="GND"
      connection="R47.pin2"
      schX={-1.65}
      schY={-7.15}
      anchorSide="top"
    />

    <trace from=".U5 > .NR_SS1" to=".C44 > .pin2" />
    <netlabel
      net="GND"
      connection="C44.pin1"
      schX={-5.5}
      schY={3.3}
      anchorSide="right"
    />
    <trace from=".U5 > .NR_SS2" to=".C29 > .pin2" />
    <netlabel
      net="GND"
      connection="C29.pin1"
      schX={-7.425}
      schY={-1.375}
      anchorSide="top"
    />

    <netlabel
      net="SS_CTRL"
      connection="U5.SS_CTRL1"
      schX={-4.95}
      schY={3.85}
      anchorSide="right"
    />
    <netlabel
      net="SS_CTRL"
      connection="U5.SS_CTRL2"
      schX={-5.225}
      schY={0.825}
      anchorSide="right"
    />
    <netlabel
      net="PMIC_1V8"
      connection="R120.pin2"
      schX={11}
      schY={-1.925}
      anchorSide="bottom"
    />
    <netlabel
      net="SS_CTRL"
      connection="R120.pin1"
      schX={8.8}
      schY={-3.575}
      anchorSide="left"
    />
    {/* TI places one SS_CTRL label on the physical R120-to-R119 wire. */}
    <trace from=".R120 > .pin1" to=".R119 > .pin2" />
    <netlabel
      net="GND"
      connection="R119.pin1"
      schX={11}
      schY={-5.225}
      anchorSide="top"
    />

    <trace from=".U5 > .OUT1_1" to=".U5 > .OUT1_2" />
    <trace from=".U5 > .OUT1_2" to=".R131 > .pin2" />
    <trace from=".R131 > .pin2" to=".C46 > .pin2" />
    <trace from=".C46 > .pin2" to=".C36 > .pin2" />
    <trace from=".C36 > .pin2" to=".C37 > .pin2" />
    <trace from=".C37 > .pin2" to=".C38 > .pin2" />
    <netlabel
      net="AR_1P3_RF1"
      connection="C38.pin2"
      schX={8.25}
      schY={8.525}
      anchorSide="bottom"
    />
    <trace from=".U5 > .FB1" to=".R131 > .pin1" />
    <trace from=".R131 > .pin1" to=".C46 > .pin1" />
    <trace from=".C46 > .pin1" to=".R132 > .pin2" />
    <netlabel
      net="GND"
      connection="R132.pin1"
      schX={6.05}
      schY={3.025}
      anchorSide="top"
    />
    <trace from=".C36 > .pin1" to=".C37 > .pin1" />
    <trace from=".C37 > .pin1" to=".C38 > .pin1" />
    <netlabel
      net="GND"
      connection="C37.pin1"
      schX={6.875}
      schY={4.95}
      anchorSide="top"
    />

    <trace from=".U5 > .OUT2_1" to=".U5 > .OUT2_2" />
    <trace from=".U5 > .OUT2_2" to=".R122 > .pin2" />
    <trace from=".R122 > .pin2" to=".C28 > .pin2" />
    <trace from=".C28 > .pin2" to=".C35 > .pin2" />
    <trace from=".C35 > .pin2" to=".C33 > .pin2" />
    <trace from=".C33 > .pin2" to=".C34 > .pin2" />
    <netlabel
      net="AR_1P3_RF2"
      connection="C34.pin2"
      schX={7.425}
      schY={2.475}
      anchorSide="bottom"
    />
    <trace from=".U5 > .FB2" to=".R122 > .pin1" />
    <trace from=".R122 > .pin1" to=".C28 > .pin1" />
    <trace from=".C28 > .pin1" to=".R121 > .pin2" />
    <netlabel
      net="GND"
      connection="R121.pin1"
      schX={4.95}
      schY={-2.75}
      anchorSide="top"
    />
    <trace from=".C35 > .pin1" to=".C33 > .pin1" />
    <trace from=".C33 > .pin1" to=".C34 > .pin1" />
    <netlabel
      net="GND"
      connection="C33.pin1"
      schX={7.15}
      schY={-0.825}
      anchorSide="top"
    />
    <trace from=".U5 > .GND1" to=".U5 > .GND2" />
    <trace from=".U5 > .GND2" to=".U5 > .EP" />
    <netlabel
      net="GND"
      connection="U5.EP"
      schX={3.3}
      schY={-1.375}
      anchorSide="top"
    />
  </subcircuit>
);

export default SystemPowerLdo2_TPS7A8801_TIDEP0092;
