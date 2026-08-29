import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { LP87524BRNFRQ1 } from "../chips/LP87524BRNFRQ1.circuit.tsx";

export const PMIC_POWER_STAGE_SECTION_NAME = "pmic_power_stage";
export const PMIC_INPUT_DECOUPLING_SECTION_NAME = "pmic_input_decoupling";
export const PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME = "pmic_switch_node_snubber";

const PDF_POINT_TO_SCHEMATIC_UNIT = 25.4 / 72 / (10.16 / 1.1);
const refX = (pdfX: number) => (pdfX - 612) * PDF_POINT_TO_SCHEMATIC_UNIT;
const refY = (pdfY: number) => (403.2 - pdfY) * PDF_POINT_TO_SCHEMATIC_UNIT;
// Native `vertical` is 270 degrees, so its 180-degree flip is 90 degrees.
const VERTICAL_ROTATED_180_DEGREES = 90;

const renderDfe252012pFootprint = () => (
  <footprint>
    <smtpad
      portHints={["pin1"]}
      pcbX="-1mm"
      pcbY={0}
      width="0.8mm"
      height="2mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2"]}
      pcbX="1mm"
      pcbY={0}
      width="0.8mm"
      height="2mm"
      shape="rect"
    />
  </footprint>
);

/**
 * TIDEP-0092 Rev C PMIC source page 9, TIDRQR8.PDF.
 * The downloadable PROC011C_PMIC.SchDoc is an older 17-sheet layout, so the
 * official 19-sheet PDF supplies final placement. The one documented mapping is
 * schX = (pdfX - 612) * 0.038194444; schY = (403.2 - pdfY) * 0.038194444.
 */
export const PmicPowerStage_LP87524B = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schMaxTraceDistance="100mm" {...props}>
    <net name="GND" isGroundNet />
    <net name="V5_UNREG" isPowerNet />
    <net name="PMICOUT_3V3" isPowerNet />
    <net name="PMIC_1V2" isPowerNet />
    <net name="PMIC_1V8" isPowerNet />
    <net name="PMIC_2V3" isPowerNet />
    <net name="PMICVIO_3V3" isPowerNet />
    <net name="PMIC_CLK" />
    <net name="AR_SCL" />
    <net name="AR_SDA" />
    <net name="PMIC_NRST" />
    <net name="PMIC_EN1" />
    <net name="PMIC_EN2" />
    <net name="PMIC_EN3" />
    <net name="PGOOD" />
    <net name="NINT" />
    <net name="SW0" />
    <net name="SW1" />
    <net name="SW2" />
    <net name="SW3" />

    <LP87524BRNFRQ1
      name="U8"
      schX={refX(777.476878)}
      schY={refY(312.967138)}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />

    <capacitor
      name="C59"
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={refX(183.918952)}
      schY={refY(169.073907)}
      schOrientation="vertical"
      schSectionName={PMIC_INPUT_DECOUPLING_SECTION_NAME}
    />
    <capacitor
      name="C60"
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={refX(227.086159)}
      schY={refY(169.073907)}
      schOrientation="vertical"
      schSectionName={PMIC_INPUT_DECOUPLING_SECTION_NAME}
    />
    <capacitor
      name="C73"
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={refX(263.059933)}
      schY={refY(169.073907)}
      schOrientation="vertical"
      schSectionName={PMIC_INPUT_DECOUPLING_SECTION_NAME}
    />
    <capacitor
      name="C72"
      capacitance="10uF"
      maxVoltageRating="10V"
      footprint="0805"
      manufacturerPartNumber="GCM21BR71A106KE22L"
      schX={refX(299.033211)}
      schY={refY(169.073907)}
      schOrientation="vertical"
      schSectionName={PMIC_INPUT_DECOUPLING_SECTION_NAME}
    />

    <resistor
      name="R146"
      resistance="0ohm"
      tolerance="5%"
      footprint="0201"
      manufacturerPartNumber="CRCW02010000Z0ED"
      schX={refX(640.778369)}
      schY={refY(219.436729)}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <resistor
      name="R144"
      resistance="0ohm"
      tolerance="5%"
      footprint="0201"
      manufacturerPartNumber="CRCW02010000Z0ED"
      schX={refX(914.174664)}
      schY={refY(233.826022)}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <capacitor
      name="C68"
      capacitance="0.22uF"
      maxVoltageRating="16V"
      footprint="0402"
      manufacturerPartNumber="GCM155R71C224KE02D"
      schX={refX(939.355862)}
      schY={refY(169.073907)}
      schOrientation="horizontal"
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <resistor
      name="R143"
      resistance="4.99kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04024K99FKED"
      schX={refX(1029.289647)}
      schY={refY(190.657904)}
      schOrientation="vertical"
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <resistor
      name="R147"
      resistance="4.99kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04024K99FKED"
      schX={refX(1076.054852)}
      schY={refY(187.060581)}
      schOrientation="vertical"
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />

    <inductor
      name="L2"
      inductance="0.47uH"
      manufacturerPartNumber="DFE252012P-R47M=P2"
      footprint={renderDfe252012pFootprint()}
      schRotation={180}
      schX={refX(558.042289)}
      schY={refY(334.551078)}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <inductor
      name="L1"
      inductance="0.47uH"
      manufacturerPartNumber="DFE252012P-R47M=P2"
      footprint={renderDfe252012pFootprint()}
      schRotation={180}
      schX={refX(558.042289)}
      schY={refY(348.940372)}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <inductor
      name="L4"
      inductance="0.47uH"
      manufacturerPartNumber="DFE252012P-R47M=P2"
      footprint={renderDfe252012pFootprint()}
      schRotation={180}
      schX={refX(558.042289)}
      schY={refY(363.329665)}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <inductor
      name="L3"
      inductance="0.47uH"
      manufacturerPartNumber="DFE252012P-R47M=P2"
      footprint={renderDfe252012pFootprint()}
      schRotation={180}
      schX={refX(558.042289)}
      schY={refY(377.718959)}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <capacitor
      name="C55"
      capacitance="22uF"
      maxVoltageRating="10V"
      footprint="1206"
      manufacturerPartNumber="GCM31CR71A226KE02"
      schX={refX(165.931896)}
      schY={refY(438.873232)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <capacitor
      name="C54"
      capacitance="22uF"
      maxVoltageRating="10V"
      footprint="1206"
      manufacturerPartNumber="GCM31CR71A226KE02"
      schX={refX(270.254275)}
      schY={refY(442.47078)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <capacitor
      name="C81"
      capacitance="22uF"
      maxVoltageRating="10V"
      footprint="1206"
      manufacturerPartNumber="GCM31CR71A226KE02"
      schX={refX(370.979331)}
      schY={refY(442.47078)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />
    <capacitor
      name="C82"
      capacitance="22uF"
      maxVoltageRating="10V"
      footprint="1206"
      manufacturerPartNumber="GCM31CR71A226KE02"
      schX={refX(478.899033)}
      schY={refY(442.47078)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_POWER_STAGE_SECTION_NAME}
    />

    <resistor
      name="R202"
      resistance="3.83ohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04023R83FKED"
      schX={refX(993.316283)}
      schY={refY(492.83368)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME}
    />
    <resistor
      name="R203"
      resistance="3.83ohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04023R83FKED"
      schX={refX(1036.484164)}
      schY={refY(491.03499)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME}
    />
    <resistor
      name="R204"
      resistance="3.83ohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04023R83FKED"
      schX={refX(1083.249368)}
      schY={refY(491.03499)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME}
    />
    <resistor
      name="R205"
      resistance="3.83ohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04023R83FKED"
      schX={refX(1137.209219)}
      schY={refY(492.83368)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME}
    />
    <capacitor
      name="C93"
      capacitance="390pF"
      maxVoltageRating="50V"
      footprint="0402"
      manufacturerPartNumber="CGA2B2NP01H391J050BA"
      schX={refX(993.316283)}
      schY={refY(557.58567)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME}
    />
    <capacitor
      name="C94"
      capacitance="390pF"
      maxVoltageRating="50V"
      footprint="0402"
      manufacturerPartNumber="CGA2B2NP01H391J050BA"
      schX={refX(1036.484164)}
      schY={refY(557.58567)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME}
    />
    <capacitor
      name="C95"
      capacitance="390pF"
      maxVoltageRating="50V"
      footprint="0402"
      manufacturerPartNumber="CGA2B2NP01H391J050BA"
      schX={refX(1083.249368)}
      schY={refY(557.58567)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME}
    />
    <capacitor
      name="C96"
      capacitance="390pF"
      maxVoltageRating="50V"
      footprint="0402"
      manufacturerPartNumber="CGA2B2NP01H391J050BA"
      schX={refX(1137.209219)}
      schY={refY(557.58567)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_SWITCH_NODE_SNUBBER_SECTION_NAME}
    />

    <trace from=".C59 > .pin2" to=".C60 > .pin2" />
    <trace from=".C60 > .pin2" to=".C73 > .pin2" />
    <trace from=".C73 > .pin2" to=".C72 > .pin2" />
    <netlabel
      net="V5_UNREG"
      connection="C60.pin2"
      schX={refX(201.905338)}
      schY={refY(104.310666)}
      anchorSide="bottom"
    />
    <trace from=".C59 > .pin1" to=".C60 > .pin1" />
    <trace from=".C60 > .pin1" to=".C73 > .pin1" />
    <trace from=".C73 > .pin1" to=".C72 > .pin1" />
    <netlabel
      net="GND"
      connection="C60.pin1"
      schX={refX(183.918952)}
      schY={refY(226.631364)}
      anchorSide="top"
    />

    <trace from=".U8 > .VIN_B0" to=".U8 > .VIN_B1" />
    <trace from=".U8 > .VIN_B1" to=".U8 > .VIN_B2" />
    <trace from=".U8 > .VIN_B2" to=".U8 > .VIN_B3" />
    <netlabel
      net="V5_UNREG"
      connection="U8.VIN_B0"
      schX={refX(622.791793)}
      schY={refY(248.215316)}
      anchorSide="bottom"
    />
    <trace from=".U8 > .VANA" to=".C68 > .pin2" />
    <netlabel
      net="V5_UNREG"
      connection="C68.pin2"
      schX={refX(885.39658)}
      schY={refY(140.295613)}
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      connection="C68.pin1"
      schX={refX(978.926787)}
      schY={refY(204.328336)}
      anchorSide="top"
    />
    <trace from=".U8 > .PGND_B01" to=".U8 > .PGND_B23" />
    <netlabel
      net="GND"
      connection="U8.PGND_B01"
      schX={refX(878.201933)}
      schY={refY(464.054721)}
      anchorSide="top"
    />
    <trace from=".U8 > .AGND1" to=".U8 > .AGND2" />
    <trace from=".U8 > .AGND2" to=".U8 > .EP" />
    <netlabel
      net="GND"
      connection="U8.EP"
      schX={refX(878.201933)}
      schY={refY(464.054721)}
      anchorSide="top"
    />

    <trace from=".U8 > .CLKIN" to="net.PMIC_CLK" schDisplayLabel="PMIC_CLK" />
    <trace from=".U8 > .SCL" to=".R146 > .pin2" />
    <trace from=".R146 > .pin1" to="net.AR_SCL" schDisplayLabel="AR_SCL" />
    <trace from=".U8 > .SDA" to=".R144 > .pin1" />
    <trace from=".R144 > .pin2" to="net.AR_SDA" schDisplayLabel="AR_SDA" />
    <trace from=".U8 > .NRST" to="net.PMIC_NRST" schDisplayLabel="PMIC_NRST" />
    <trace from=".U8 > .EN1" to="net.PMIC_EN1" schDisplayLabel="PMIC_EN1" />
    <trace from=".U8 > .EN2" to="net.PMIC_EN2" schDisplayLabel="PMIC_EN2" />
    <trace from=".U8 > .EN3" to="net.PMIC_EN3" schDisplayLabel="PMIC_EN3" />

    <trace from=".U8 > .PGOOD" to=".R143 > .pin1" />
    <trace from=".U8 > .NINT" to=".R147 > .pin1" />
    <trace from=".R143 > .pin2" to=".R147 > .pin2" />
    <netlabel
      net="PMICVIO_3V3"
      connection="R143.pin2"
      schX={refX(1050.873084)}
      schY={refY(133.100966)}
      anchorSide="bottom"
    />

    <trace from=".U8 > .SW_B0" to=".L2 > .pin1" />
    <netlabel
      net="SW0"
      connection="L2.pin1"
      schX={refX(655.167881)}
      schY={refY(334.551078)}
      anchorSide="right"
    />
    <trace from=".U8 > .SW_B1" to=".L1 > .pin1" />
    <netlabel
      net="SW1"
      connection="L1.pin1"
      schX={refX(655.167881)}
      schY={refY(348.940372)}
      anchorSide="right"
    />
    <trace from=".U8 > .SW_B2" to=".L4 > .pin1" />
    <netlabel
      net="SW2"
      connection="L4.pin1"
      schX={refX(655.167881)}
      schY={refY(363.329665)}
      anchorSide="right"
    />
    <trace from=".U8 > .SW_B3" to=".L3 > .pin1" />
    <netlabel
      net="SW3"
      connection="L3.pin1"
      schX={refX(655.167881)}
      schY={refY(377.718959)}
      anchorSide="right"
    />

    <trace from=".L2 > .pin2" to=".C55 > .pin2" />
    <trace from=".C55 > .pin2" to=".U8 > .FB_B0" />
    <netlabel
      net="PMICOUT_3V3"
      connection="C55.pin2"
      schX={refX(151.542602)}
      schY={refY(334.551078)}
      anchorSide="right"
    />
    <trace from=".L1 > .pin2" to=".C54 > .pin2" />
    <trace from=".C54 > .pin2" to=".U8 > .FB_B1" />
    <netlabel
      net="PMIC_1V2"
      connection="C54.pin2"
      schX={refX(216.294258)}
      schY={refY(348.940372)}
      anchorSide="right"
    />
    <trace from=".L4 > .pin2" to=".C81 > .pin2" />
    <trace from=".C81 > .pin2" to=".U8 > .FB_B2" />
    <netlabel
      net="PMIC_1V8"
      connection="C81.pin2"
      schX={refX(320.616749)}
      schY={refY(363.329665)}
      anchorSide="right"
    />
    <trace from=".L3 > .pin2" to=".C82 > .pin2" />
    <trace from=".C82 > .pin2" to=".U8 > .FB_B3" />
    <netlabel
      net="PMIC_2V3"
      connection="C82.pin2"
      schX={refX(428.536519)}
      schY={refY(377.718959)}
      anchorSide="right"
    />
    <trace from=".C55 > .pin1" to=".C54 > .pin1" />
    <trace from=".C54 > .pin1" to=".C81 > .pin1" />
    <trace from=".C81 > .pin1" to=".C82 > .pin1" />
    <netlabel
      net="GND"
      connection="C82.pin1"
      schX={refX(320.616749)}
      schY={refY(478.444231)}
      anchorSide="top"
    />

    <netlabel
      net="SW0"
      connection="R202.pin2"
      schX={refX(993.316283)}
      schY={refY(424.484163)}
      anchorSide="bottom"
    />
    <netlabel
      net="SW1"
      connection="R203.pin2"
      schX={refX(1036.484164)}
      schY={refY(424.484163)}
      anchorSide="bottom"
    />
    <netlabel
      net="SW2"
      connection="R204.pin2"
      schX={refX(1083.249368)}
      schY={refY(424.484163)}
      anchorSide="bottom"
    />
    <netlabel
      net="SW3"
      connection="R205.pin2"
      schX={refX(1137.209219)}
      schY={refY(424.484163)}
      anchorSide="bottom"
    />
    <trace from=".R202 > .pin1" to=".C93 > .pin2" />
    <trace from=".R203 > .pin1" to=".C94 > .pin2" />
    <trace from=".R204 > .pin1" to=".C95 > .pin2" />
    <trace from=".R205 > .pin1" to=".C96 > .pin2" />
    <trace from=".C93 > .pin1" to=".C94 > .pin1" />
    <trace from=".C94 > .pin1" to=".C95 > .pin1" />
    <trace from=".C95 > .pin1" to=".C96 > .pin1" />
    <netlabel
      net="GND"
      connection="C94.pin1"
      schX={refX(1036.484164)}
      schY={refY(615.142071)}
      anchorSide="top"
    />
  </subcircuit>
);

export default PmicPowerStage_LP87524B;
