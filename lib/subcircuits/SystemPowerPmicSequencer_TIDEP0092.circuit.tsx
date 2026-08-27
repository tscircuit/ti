import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

export const PMIC_CONTROL_DIVIDER_SECTION_NAME = "pmic_control_divider";
export const PMIC_ENABLE_PULLUPS_SECTION_NAME = "pmic_enable_pullups";
export const PMIC_PGOOD_SECTION_NAME = "pmic_pgood";

const PDF_POINT_TO_SCHEMATIC_UNIT = 25.4 / 72 / (10.16 / 1.1);
const refX = (pdfX: number) => (pdfX - 612) * PDF_POINT_TO_SCHEMATIC_UNIT;
const refY = (pdfY: number) => (403.2 - pdfY) * PDF_POINT_TO_SCHEMATIC_UNIT;
// Native `vertical` is 270 degrees, so its 180-degree flip is 90 degrees.
const VERTICAL_ROTATED_180_DEGREES = 90;

/**
 * TIDEP-0092 Rev C PMIC source page 9, TIDRQR8.PDF. This shares the same
 * physical ANSI-B page transform as the PMIC power-stage module.
 */
export const SystemPowerPmicSequencer_TIDEP0092 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schMaxTraceDistance="100mm" {...props}>
    <net name="GND" isGroundNet />
    <net name="V5_IN" isPowerNet />
    <net name="PMICVIO_3V3" isPowerNet />
    <net name="PMICOUT_3V3" isPowerNet />
    <net name="PMIC_NRST" />
    <net name="PMIC_EN1" />
    <net name="PMIC_EN2" />
    <net name="PMIC_EN3" />
    <net name="PGOOD" />

    <resistor
      name="R149"
      resistance="1kohm"
      tolerance="5%"
      footprint="0402"
      manufacturerPartNumber="ERJ-2GEJ102X"
      schX={refX(90.388104)}
      schY={refY(579.168815)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_CONTROL_DIVIDER_SECTION_NAME}
    />
    <resistor
      name="R139"
      resistance="1.96kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04021K96FKED"
      schX={refX(90.388104)}
      schY={refY(679.894126)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_CONTROL_DIVIDER_SECTION_NAME}
    />
    <resistor
      name="R150"
      resistance="4.99kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="ERJ-2RKF4991X"
      schX={refX(270.254275)}
      schY={refY(651.115539)}
      schOrientation="vertical"
      schSectionName={PMIC_ENABLE_PULLUPS_SECTION_NAME}
    />
    <resistor
      name="R142"
      resistance="4.99kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="ERJ-2RKF4991X"
      schX={refX(356.590037)}
      schY={refY(647.518216)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_ENABLE_PULLUPS_SECTION_NAME}
    />
    <resistor
      name="R148"
      resistance="10kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0FKED"
      schX={refX(439.328476)}
      schY={refY(647.518216)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_ENABLE_PULLUPS_SECTION_NAME}
    />
    <resistor
      name="R145"
      resistance="10kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW040210K0FKED"
      schX={refX(529.261561)}
      schY={refY(647.518216)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_ENABLE_PULLUPS_SECTION_NAME}
    />
    <resistor
      name="R141"
      resistance="0ohm"
      tolerance="5%"
      footprint="0402"
      manufacturerPartNumber="ERJ-2GE0R00X"
      schX={refX(705.530409)}
      schY={refY(593.558364)}
      schSectionName={PMIC_PGOOD_SECTION_NAME}
    />
    <resistor
      name="R138"
      resistance="100kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW0402100KFKED"
      schX={refX(759.49026)}
      schY={refY(629.531599)}
      schRotation={VERTICAL_ROTATED_180_DEGREES}
      schSectionName={PMIC_PGOOD_SECTION_NAME}
    />

    <netlabel
      net="V5_IN"
      connection="R149.pin2"
      schX={refX(90.388104)}
      schY={refY(525.209219)}
      anchorSide="bottom"
    />
    <trace from=".R149 > .pin1" to=".R139 > .pin2" />
    <netlabel
      net="PMICVIO_3V3"
      connection="R149.pin1"
      schX={refX(162.334573)}
      schY={refY(633.128922)}
      anchorSide="left"
    />
    <netlabel
      net="GND"
      connection="R139.pin1"
      schX={refX(90.388104)}
      schY={refY(733.134513)}
      anchorSide="top"
    />

    <trace from=".R150 > .pin1" to=".R142 > .pin2" />
    <trace from=".R142 > .pin2" to=".R148 > .pin2" />
    <trace from=".R148 > .pin2" to=".R145 > .pin2" />
    <netlabel
      net="PMICVIO_3V3"
      connection="R150.pin1"
      schX={refX(270.254275)}
      schY={refY(600.753011)}
      anchorSide="bottom"
    />
    <netlabel
      net="PMIC_NRST"
      connection="R150.pin2"
      schX={refX(216.294258)}
      schY={refY(708.672714)}
      anchorSide="left"
    />
    <netlabel
      net="PMIC_EN1"
      connection="R142.pin1"
      schX={refX(356.590037)}
      schY={refY(708.672714)}
      anchorSide="left"
    />
    <netlabel
      net="PMIC_EN2"
      connection="R148.pin1"
      schX={refX(439.328476)}
      schY={refY(708.672714)}
      anchorSide="left"
    />
    <netlabel
      net="PMIC_EN3"
      connection="R145.pin1"
      schX={refX(529.261561)}
      schY={refY(708.672714)}
      anchorSide="left"
    />

    <netlabel
      net="PMICOUT_3V3"
      connection="R141.pin1"
      schX={refX(633.583507)}
      schY={refY(593.558364)}
      anchorSide="right"
    />
    <trace from=".R141 > .pin2" to=".R138 > .pin2" />
    <netlabel
      net="PGOOD"
      connection="R141.pin2"
      schX={refX(827.890699)}
      schY={refY(593.558364)}
      anchorSide="left"
    />
    <netlabel
      net="GND"
      connection="R138.pin1"
      schX={refX(759.49026)}
      schY={refY(672.699479)}
      anchorSide="top"
    />
  </subcircuit>
);

export default SystemPowerPmicSequencer_TIDEP0092;
