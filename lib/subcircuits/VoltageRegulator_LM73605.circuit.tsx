import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { LM73605QRNPRQ1 } from "../chips/LM73605QRNPRQ1.circuit.tsx";

const SOURCE_ORIGIN = { x: 22.225, y: 7.62 } as const;
const sx = (x: number) => Number((x - SOURCE_ORIGIN.x).toFixed(6));
const sy = (y: number) => Number((y - SOURCE_ORIGIN.y).toFixed(6));

const NetTie = () => (
  <>
    <chip
      name="NTGND1"
      manufacturerPartNumber="Net-Tie"
      footprint="kicad:NetTie/NetTie-2_SMD_Pad0.5mm"
      pinLabels={{ pin1: "GND", pin2: "AGND" }}
      internallyConnectedPins={[[1, 2]]}
      schX={sx(22.86)}
      schY={sy(3.048)}
      connections={{ pin1: "net.GND", pin2: "net.AGND" }}
    />
    <schematictext
      text="Net-Tie"
      schX={sx(22.86)}
      schY={sy(2.54)}
      fontSize={0.12}
    />
  </>
);

/**
 * 3.3-V off-battery regulator section from sheet 2 of TI TIDA-050008 (native
 * Altium archive TIDRXT8).
 *
 * Coordinate transform: Altium mil coordinates are converted to millimeters
 * with 0.0254 mm/mil, then translated as
 * (x_tsx, y_tsx) = (x_mm - 22.225, y_mm - 7.620). No scale, reflection,
 * rotation, or component re-layout is applied.
 */
export const VoltageRegulator_LM73605 = (props: SubcircuitProps) => (
  <subcircuit schMaxTraceDistance="25mm" routingDisabled {...props}>
    <net name="GND" isPowerNet isGroundNet />
    <net name="AGND" isPowerNet isGroundNet />
    <net name="V3_3" isPowerNet />

    <schematictext
      text="3.3-V System Supply"
      schX={sx(23.495)}
      schY={sy(12.446)}
      fontSize={0.3}
    />

    <capacitor
      name="Cbulk1"
      capacitance="100uF"
      maxVoltageRating="50V"
      footprint="kicad:Capacitor_SMD/CP_Elec_10x10"
      manufacturerPartNumber="HHXB500ARA101MJA0G"
      schX={sx(9.398)}
      schY={sy(9.3599)}
      schRotation={270}
      connections={{ pin1: "net.VIN1", pin2: "net.GND" }}
    />
    <capacitor
      name="CI1"
      capacitance="0.47uF"
      maxVoltageRating="50V"
      footprint="0805"
      manufacturerPartNumber="GRM21BR71H474KA88L"
      schX={sx(10.922)}
      schY={sy(9.271)}
      schRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.VIN1" }}
    />
    <capacitor
      name="CI2"
      capacitance="10uF"
      maxVoltageRating="50V"
      footprint="1210"
      manufacturerPartNumber="GRM32ER71H106KA12L"
      schX={sx(11.938)}
      schY={sy(9.271)}
      schRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.VIN1" }}
    />
    <capacitor
      name="CI3"
      capacitance="2.2uF"
      maxVoltageRating="50V"
      footprint="0805"
      manufacturerPartNumber="C2012X5R1H225K125AB"
      schX={sx(12.954)}
      schY={sy(9.271)}
      schRotation={270}
      connections={{ pin1: "net.VIN1", pin2: "net.GND" }}
    />
    <capacitor
      name="CI4"
      capacitance="2.2uF"
      maxVoltageRating="50V"
      footprint="0805"
      manufacturerPartNumber="C2012X5R1H225K125AB"
      schX={sx(13.97)}
      schY={sy(9.271)}
      schRotation={270}
      connections={{ pin1: "net.VIN1", pin2: "net.GND" }}
    />

    <LM73605QRNPRQ1
      name="U2"
      schX={sx(19.812)}
      schY={sy(7.62)}
      connections={{
        VIN_20: "net.VIN1",
        VIN_21: "net.VIN1",
        VIN_22: "net.VIN1",
        EN: "net.VIN1",
        VCC: "net.VCC",
        RT: "net.RT",
        SYNC_MODE: "net.GND",
        NC_12: "net.GND",
        NC_13: "net.GND",
        NC_14: "net.GND",
        NC_15: "net.GND",
        NC_27: "net.GND",
        NC_28: "net.GND",
        NC_29: "net.GND",
        NC_30: "net.GND",
        CBOOT: "net.CBOOT_NET",
        SW_1: "net.SW",
        SW_2: "net.SW",
        SW_3: "net.SW",
        SW_4: "net.SW",
        SW_5: "net.SW",
        PGOOD: "net.PGOOD_NET",
        BIAS: "net.BIAS",
        FB: "net.FB1",
        SS_TRK: "net.SS_TRK",
        AGND: "net.AGND",
        PGND_23: "net.GND",
        PGND_24: "net.GND",
        PGND_25: "net.GND",
        PGND_26: "net.GND",
        DAP: "net.GND",
      }}
    />

    <capacitor
      name="CB"
      capacitance="0.47uF"
      maxVoltageRating="25V"
      footprint="0603"
      manufacturerPartNumber="GRM188R61E474KA12D"
      schX={sx(22.606)}
      schY={sy(10.16)}
      schOrientation="horizontal"
      connections={{ pin1: "net.CBOOT_NET", pin2: "net.SW" }}
    />
    <inductor
      name="L1"
      inductance="2.2uH"
      footprint="kicad:Inductor_SMD/L_Coilcraft_XAL5030-XXX"
      manufacturerPartNumber="XAL5030-222MEB"
      schX={sx(24.892)}
      schY={sy(10.4775)}
      schOrientation="horizontal"
      connections={{ pin1: "net.SW", pin2: "net.V3_3" }}
    />
    <capacitor
      name="CO"
      capacitance="0.47uF"
      maxVoltageRating="50V"
      footprint="0805"
      manufacturerPartNumber="GRM21BR71H474KA88L"
      schX={sx(26.289)}
      schY={sy(9.525)}
      schRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
    />
    {[
      ["CO1", 27.813],
      ["CO2", 28.829],
      ["CO3", 29.972],
      ["CO4", 31.115],
      ["CO5", 32.131],
    ].map(([name, x]) => (
      <capacitor
        key={String(name)}
        name={String(name)}
        capacitance="22uF"
        maxVoltageRating="16V"
        footprint="1210"
        manufacturerPartNumber="GRM32ER71C226KE18L"
        schX={sx(Number(x))}
        schY={sy(9.525)}
        schRotation={270}
        connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
      />
    ))}

    <capacitor
      name="CVCC"
      capacitance="2.2uF"
      maxVoltageRating="10V"
      footprint="0603"
      manufacturerPartNumber="GRM188C81A225KE34D"
      schX={sx(14.224)}
      schY={sy(6.731)}
      schRotation={270}
      connections={{ pin1: "net.VCC", pin2: "net.GND" }}
    />
    <resistor
      name="RT"
      resistance="17.4kohm"
      tolerance="1%"
      footprint="0603"
      manufacturerPartNumber="CRCW060317K4FKEA"
      schX={sx(15.748)}
      schY={sy(7.112)}
      schRotation={270}
      connections={{ pin1: "net.RT", pin2: "net.GND" }}
    />
    <capacitor
      name="CSS"
      capacitance="0.01uF"
      maxVoltageRating="100V"
      footprint="0603"
      manufacturerPartNumber="06031C103MAT2A"
      schX={sx(23.622)}
      schY={sy(6.096)}
      schRotation={270}
      connections={{ pin2: "net.AGND" }}
    />
    <resistor
      name="RPG"
      resistance="100kohm"
      tolerance="1%"
      footprint="0603"
      manufacturerPartNumber="CRCW0603100KFKEA"
      schX={sx(24.13)}
      schY={sy(8.128)}
      schOrientation="horizontal"
      connections={{ pin1: "net.PGOOD_NET", pin2: "net.V3_3" }}
    />
    <capacitor
      name="CFF"
      capacitance="4.7pF"
      maxVoltageRating="50V"
      footprint="0603"
      manufacturerPartNumber="06035A4R7CAT2A"
      schX={sx(25.908)}
      schY={sy(6.223)}
      schRotation={270}
      connections={{ pin1: "net.V3_3", pin2: "net.FB1" }}
    />
    <resistor
      name="RFBT"
      resistance="100kohm"
      tolerance="1%"
      footprint="0603"
      manufacturerPartNumber="CRCW0603100KFKEA"
      schX={sx(27.178)}
      schY={sy(6.096)}
      schRotation={90}
      connections={{ pin1: "net.FB1", pin2: "net.V3_3" }}
    />
    <resistor
      name="RFBB"
      resistance="43.2kohm"
      tolerance="1%"
      footprint="0603"
      manufacturerPartNumber="CRCW060343K2FKEA"
      schX={sx(27.178)}
      schY={sy(4.318)}
      schRotation={90}
      connections={{ pin1: "net.AGND", pin2: "net.FB1" }}
    />
    <resistor
      name="R20"
      resistance="562kohm"
      tolerance="1%"
      footprint="0603"
      manufacturerPartNumber="CRCW0603562KFKEA"
      schX={sx(28.956)}
      schY={sy(4.572)}
      schRotation={90}
      connections={{ pin1: "net.V_CTRL1", pin2: "net.FB1" }}
    />
    <capacitor
      name="Cbias1"
      capacitance="0.1uF"
      maxVoltageRating="16V"
      footprint="0603"
      manufacturerPartNumber="GCM188R71C104KA37J"
      schX={sx(32.512)}
      schY={sy(4.953)}
      schRotation={270}
      connections={{ pin1: "net.BIAS", pin2: "net.GND" }}
    />
    <resistor
      name="Rbias1"
      resistance="3ohm"
      tolerance="5%"
      footprint="0402"
      manufacturerPartNumber="CRCW04023R00JNED"
      schX={sx(33.401)}
      schY={sy(6.096)}
      schOrientation="horizontal"
      connections={{ pin1: "net.BIAS", pin2: "net.V3_3" }}
    />

    <NetTie />
    <testpoint
      name="TP5"
      displayName="V_CTRL1"
      manufacturerPartNumber="5012"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={sx(30.48)}
      schY={sy(3.4036)}
      connections={{ pin1: "net.V_CTRL1" }}
    />
    <testpoint
      name="TP18"
      displayName="3.3V"
      manufacturerPartNumber="5010"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={sx(36.83)}
      schY={sy(10.5156)}
      connections={{ pin1: "net.V3_3" }}
    />
    <testpoint
      name="TP19"
      displayName="GND"
      manufacturerPartNumber="5011"
      footprint="kicad:TestPoint/TestPoint_Keystone_5010-5014_Multipurpose"
      schX={sx(36.83)}
      schY={sy(8.9916)}
      connections={{ pin1: "net.GND" }}
    />
    <testpoint
      name="P3"
      displayName="3.3Vout"
      manufacturerPartNumber="6091"
      footprint="kicad:TestPoint/TestPoint_Plated_Hole_D3.0mm"
      schX={sx(37.592)}
      schY={sy(10.16)}
    />
    <testpoint
      name="P4"
      displayName="GND"
      manufacturerPartNumber="6092"
      footprint="kicad:TestPoint/TestPoint_Plated_Hole_D3.0mm"
      schX={sx(37.592)}
      schY={sy(8.636)}
      connections={{ pin1: "net.GND" }}
    />

    <trace from=".P3 > .pin1" to=".TP18 > .pin1" />
    <trace from=".U2 > .pin10" to=".CSS > .pin1" />

    <port name="VIN1" direction="left" connectsTo="Cbulk1.pin1" />
    <port name="V3_3" direction="right" connectsTo="P3.pin1" />
    <port name="GND" direction="right" connectsTo="P4.pin1" />
    <port name="V_CTRL1" direction="right" connectsTo="TP5.pin1" />
  </subcircuit>
);

export default VoltageRegulator_LM73605;
