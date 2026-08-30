import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TPS3850H33QDRCRQ1 } from "../chips/TPS3850H33QDRCRQ1.circuit.tsx";

const SOURCE_ORIGIN = { x: 22.606, y: 19.05 } as const;
const sx = (x: number) => Number((x - SOURCE_ORIGIN.x).toFixed(6));
const sy = (y: number) => Number((y - SOURCE_ORIGIN.y).toFixed(6));
const leftSectionX = (x: number) => sx(x + 2);
const senseCapX = (x: number) => sx(x + 1);
const indicatorSectionX = (x: number) => sx(x - 1);
const testpointSectionX = (x: number) => sx(x - 2);

/**
 * 3.3-V supply-supervisor and window-watchdog section from sheet 3 of TI
 * TIDA-050008 (native Altium archive TIDRXT8). U3 implements both logical
 * functions, so they remain one electrically honest child subcircuit.
 *
 * Coordinate transform: Altium mil coordinates are converted to millimeters
 * with 0.0254 mm/mil, then translated as
 * (x_tsx, y_tsx) = (x_mm - 22.606, y_mm - 19.050). No scale or reflection is
 * applied. To compensate for native-symbol size, the intact left timing/header
 * section is translated +2 mm, C13 is translated +1 mm, the intact indicator
 * section is translated -1 mm, and the test-point group is translated -2 mm
 * in X. D9/D8 use the translated R16/R15 X coordinates instead of their
 * Altium origins x=26.5303/28.8163 mm so the native LED pin anchors align
 * exactly with the resistors and preserve the source's straight vertical
 * traces. All Y coordinates and orientations remain source-derived.
 */
export const SupervisorWatchdog_TPS3850 = (props: SubcircuitProps) => (
  <subcircuit schMaxTraceDistance="20mm" routingDisabled {...props}>
    <net name="GND" isPowerNet isGroundNet />
    <net name="V3_3" isPowerNet />

    <schematictext
      text="3.3-V Voltage Supervision and Watchdog"
      schX={sx(23.368)}
      schY={sy(24.13)}
      fontSize={0.3}
    />

    <TPS3850H33QDRCRQ1 name="U3" schX={sx(22.606)} schY={sy(19.05)} />
    <capacitor
      name="C11"
      capacitance="0.1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GRM188R71C104KA01D"
      schX={leftSectionX(17.78)}
      schY={sy(22.225)}
      schRotation={270}
    />
    <capacitor
      name="C13"
      capacitance="0.01uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GRM188R71C103KA01D"
      schX={senseCapX(19.558)}
      schY={sy(17.399)}
      schRotation={270}
    />
    <pinheader
      name="J1"
      pinCount={3}
      gender="male"
      pitch="2.54mm"
      manufacturerPartNumber="PEC03SAAN"
      footprint="pinrow3_p2.54"
      schX={leftSectionX(16.002)}
      schY={sy(19.05)}
      schFacingDirection="right"
      pinLabels={["V3_3", "SET1", "GND"]}
    />
    <capacitor
      name="C12"
      capacitance="0.1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GRM188R71C104KA01D"
      doNotPlace
      schX={leftSectionX(14.224)}
      schY={sy(19.685)}
      schRotation={270}
    />
    <resistor
      name="R21"
      resistance="100kohm"
      footprint="0603"
      doNotPlace
      schX={leftSectionX(14.986)}
      schY={sy(17.018)}
      schRotation={90}
    />

    <resistor
      name="R5"
      resistance="100kohm"
      tolerance="1%"
      footprint="0603"
      manufacturerPartNumber="CRCW0603100KFKEA"
      schX={indicatorSectionX(25.4)}
      schY={sy(22.098)}
      schRotation={90}
    />
    <resistor
      name="R16"
      resistance="1kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04021K00FKED"
      schX={indicatorSectionX(26.416)}
      schY={sy(22.86)}
      schRotation={270}
    />
    <led
      name="D9"
      color="red"
      footprint="led0402"
      manufacturerPartNumber="SML-P12UTT86"
      pinLabels={{ pin1: "K", pin2: "A" }}
      schX={indicatorSectionX(26.416)}
      schY={sy(21.336)}
      schRotation={90}
    />
    <resistor
      name="R6"
      resistance="100kohm"
      tolerance="1%"
      footprint="0603"
      manufacturerPartNumber="CRCW0603100KFKEA"
      schX={indicatorSectionX(27.686)}
      schY={sy(22.098)}
      schRotation={90}
    />
    <resistor
      name="R15"
      resistance="1kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04021K00FKED"
      schX={indicatorSectionX(28.702)}
      schY={sy(22.86)}
      schRotation={270}
    />
    <led
      name="D8"
      color="red"
      footprint="led0402"
      manufacturerPartNumber="SML-P12UTT86"
      pinLabels={{ pin1: "K", pin2: "A" }}
      schX={indicatorSectionX(28.702)}
      schY={sy(21.336)}
      schRotation={90}
    />

    <testpoint
      name="TP6"
      displayName="3.3RST"
      manufacturerPartNumber="5014"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={testpointSectionX(30.988)}
      schY={sy(20.6756)}
      schRotation={90}
    />
    <testpoint
      name="TP1"
      displayName="WDI"
      manufacturerPartNumber="5127"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={testpointSectionX(31.75)}
      schY={sy(19.9136)}
      schRotation={90}
    />
    <testpoint
      name="TP8"
      displayName="WDO"
      manufacturerPartNumber="5013"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={testpointSectionX(32.512)}
      schY={sy(19.4056)}
      schRotation={90}
    />

    <netlabel net="V3_3" connectsTo=".C11 > .pin1" />
    <netlabel net="V3_3" connectsTo=".C13 > .pin1" />
    <netlabel net="V3_3" connectsTo=".R21 > .pin2" />
    <netlabel net="V3_3" connectsTo=".R5 > .pin2" />
    <netlabel net="V3_3" connectsTo=".R6 > .pin2" />

    <trace
      path={[".U3 > .pin1", ".U3 > .pin3", ".C11 > .pin1", ".J1 > .pin1"]}
    />
    <trace path={[".U3 > .pin10", ".C13 > .pin1"]} />
    <trace path={[".R5 > .pin2", ".R16 > .pin1"]} />
    <trace path={[".R6 > .pin2", ".R15 > .pin1"]} />
    <trace
      name="CWD"
      schDisplayLabel="CWD"
      path={[".U3 > .pin2", ".C12 > .pin1"]}
    />
    <trace
      name="SET1"
      schDisplayLabel="SET1"
      path={[".U3 > .pin6", ".J1 > .pin2"]}
    />
    <trace
      name="CRST"
      schDisplayLabel="CRST"
      path={[".U3 > .pin4", ".R21 > .pin1"]}
    />
    <trace
      name="WDI"
      schDisplayLabel="WDI"
      path={[".U3 > .pin7", ".TP1 > .pin1"]}
    />
    <trace
      name="WDO"
      schDisplayLabel="WDO"
      from=".U3 > .pin8"
      to=".TP8 > .pin1"
    />
    <trace path={[".U3 > .pin8", ".R5 > .pin1", ".D9 > .pin1"]} />
    <trace path={[".R16 > .pin2", ".D9 > .pin2"]} />
    <trace
      name="RESET_3V3"
      schDisplayLabel="3.3RESET"
      from=".U3 > .pin9"
      to=".TP6 > .pin1"
    />
    <trace path={[".U3 > .pin9", ".R6 > .pin1", ".D8 > .pin1"]} />
    <trace path={[".R15 > .pin2", ".D8 > .pin2"]} />
    <trace path={[".U3 > .pin5", ".U3 > .pin11"]} />
    <netlabel net="GND" connectsTo=".U3 > .pin5" />
    <netlabel net="GND" connectsTo=".C11 > .pin2" />
    <netlabel net="GND" connectsTo=".C13 > .pin2" />
    <netlabel net="GND" connectsTo=".J1 > .pin3" />
    <netlabel net="GND" connectsTo=".C12 > .pin2" />

    <port name="V3_3" direction="left" connectsTo="C11.pin1" />
    <port name="GND" direction="left" connectsTo="U3.GND" />
    <port name="WDI" direction="right" connectsTo="TP1.pin1" />
    <port name="WDO" direction="right" connectsTo="TP8.pin1" />
    <port name="RESET_3V3" direction="right" connectsTo="TP6.pin1" />
  </subcircuit>
);

export default SupervisorWatchdog_TPS3850;
