import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { TPS3850H33QDRCRQ1 } from "../chips/TPS3850H33QDRCRQ1.circuit.tsx";

const SOURCE_ORIGIN = { x: 22.606, y: 19.05 } as const;
const sx = (x: number) => Number((x - SOURCE_ORIGIN.x).toFixed(6));
const sy = (y: number) => Number((y - SOURCE_ORIGIN.y).toFixed(6));

/**
 * 3.3-V supply-supervisor and window-watchdog section from sheet 3 of TI
 * TIDA-050008 (native Altium archive TIDRXT8). U3 implements both logical
 * functions, so they remain one electrically honest child subcircuit.
 *
 * Coordinate transform: Altium mil coordinates are converted to millimeters
 * with 0.0254 mm/mil, then translated as
 * (x_tsx, y_tsx) = (x_mm - 22.606, y_mm - 19.050). No scale, reflection,
 * rotation, or component re-layout is applied.
 */
export const SupervisorWatchdog_TPS3850 = (props: SubcircuitProps) => (
  <subcircuit schMaxTraceDistance="20mm" routingDisabled {...props}>
    <net name="GND" isPowerNet isGroundNet />
    <net name="V3_3" isPowerNet />

    <schematicbox
      name="TPS3850_SUPERVISOR_WATCHDOG_SECTION"
      schX={sx(23.368)}
      schY={sy(19.812)}
      width={19.812}
      height={7.62}
    />
    <schematictext
      text="3.3-V Voltage Supervision and Watchdog"
      schX={sx(23.368)}
      schY={sy(24.13)}
      fontSize={0.3}
    />

    <TPS3850H33QDRCRQ1
      name="U3"
      schX={sx(22.606)}
      schY={sy(19.05)}
      connections={{
        VDD: "net.V3_3",
        CWD: "net.CWD",
        SET0: "net.V3_3",
        CRST: "net.CRST",
        GND: "net.GND",
        SET1: "net.SET1",
        WDI: "net.WDI",
        nWDO: "net.WDO",
        nRESET: "net.RESET_3V3",
        SENSE: "net.V3_3",
        PAD: "net.GND",
      }}
    />
    <capacitor
      name="C11"
      capacitance="0.1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GRM188R71C104KA01D"
      schX={sx(17.78)}
      schY={sy(22.225)}
      schRotation={270}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C13"
      capacitance="0.01uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GRM188R71C103KA01D"
      schX={sx(19.558)}
      schY={sy(17.399)}
      schRotation={270}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <pinheader
      name="J1"
      pinCount={3}
      gender="male"
      pitch="2.54mm"
      manufacturerPartNumber="PEC03SAAN"
      footprint="pinrow3_p2.54"
      schX={sx(16.002)}
      schY={sy(19.05)}
      schFacingDirection="right"
      pinLabels={["V3_3", "SET1", "GND"]}
      connections={{ pin1: "net.V3_3", pin2: "net.SET1", pin3: "net.GND" }}
    />
    <capacitor
      name="C12"
      capacitance="0.1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GRM188R71C104KA01D"
      doNotPlace
      schX={sx(14.224)}
      schY={sy(19.685)}
      schRotation={270}
      connections={{ pin1: "net.CWD", pin2: "net.GND" }}
    />
    <resistor
      name="R21"
      resistance="100kohm"
      footprint="0603"
      doNotPlace
      schX={sx(14.986)}
      schY={sy(17.018)}
      schRotation={90}
      connections={{ pin1: "net.CRST", pin2: "net.V3_3" }}
    />

    <resistor
      name="R5"
      resistance="100kohm"
      tolerance="1%"
      footprint="0603"
      manufacturerPartNumber="CRCW0603100KFKEA"
      schX={sx(25.4)}
      schY={sy(22.098)}
      schRotation={90}
      connections={{ pin1: "net.WDO", pin2: "net.V3_3" }}
    />
    <resistor
      name="R16"
      resistance="1kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04021K00FKED"
      schX={sx(26.416)}
      schY={sy(22.86)}
      schRotation={270}
      connections={{ pin1: "net.V3_3", pin2: "net.WDO_LED_A" }}
    />
    <led
      name="D9"
      color="red"
      footprint="led0402"
      manufacturerPartNumber="SML-P12UTT86"
      pinLabels={{ pin1: "K", pin2: "A" }}
      schX={sx(26.5303)}
      schY={sy(21.336)}
      schRotation={90}
      connections={{ pin1: "net.WDO", pin2: "net.WDO_LED_A" }}
    />
    <resistor
      name="R6"
      resistance="100kohm"
      tolerance="1%"
      footprint="0603"
      manufacturerPartNumber="CRCW0603100KFKEA"
      schX={sx(27.686)}
      schY={sy(22.098)}
      schRotation={90}
      connections={{ pin1: "net.RESET_3V3", pin2: "net.V3_3" }}
    />
    <resistor
      name="R15"
      resistance="1kohm"
      tolerance="1%"
      footprint="0402"
      manufacturerPartNumber="CRCW04021K00FKED"
      schX={sx(28.702)}
      schY={sy(22.86)}
      schRotation={270}
      connections={{ pin1: "net.V3_3", pin2: "net.RESET_LED_A" }}
    />
    <led
      name="D8"
      color="red"
      footprint="led0402"
      manufacturerPartNumber="SML-P12UTT86"
      pinLabels={{ pin1: "K", pin2: "A" }}
      schX={sx(28.8163)}
      schY={sy(21.336)}
      schRotation={90}
      connections={{ pin1: "net.RESET_3V3", pin2: "net.RESET_LED_A" }}
    />

    <testpoint
      name="TP6"
      displayName="3.3RST"
      manufacturerPartNumber="5014"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={sx(30.988)}
      schY={sy(20.6756)}
    />
    <testpoint
      name="TP1"
      displayName="WDI"
      manufacturerPartNumber="5127"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={sx(31.75)}
      schY={sy(19.9136)}
      connections={{ pin1: "net.WDI" }}
    />
    <testpoint
      name="TP8"
      displayName="WDO"
      manufacturerPartNumber="5013"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={sx(32.512)}
      schY={sy(19.4056)}
      connections={{ pin1: "net.WDO" }}
    />

    <trace from=".U3 > .pin9" to=".TP6 > .pin1" />

    <port name="V3_3" direction="left" connectsTo="U3.VDD" />
    <port name="GND" direction="left" connectsTo="U3.GND" />
    <port name="WDI" direction="right" connectsTo="TP1.pin1" />
    <port name="WDO" direction="right" connectsTo="TP8.pin1" />
    <port name="RESET_3V3" direction="right" connectsTo="TP6.pin1" />
  </subcircuit>
);

export default SupervisorWatchdog_TPS3850;
