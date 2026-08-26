import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { LM74202QPWPRQ1 } from "../chips/LM74202QPWPRQ1.circuit.tsx";
import { TPS7E8133QDBVRQ1 } from "../chips/TPS7E8133QDBVRQ1.circuit.tsx";

/**
 * Datasheet-derived power supply for the Rearview Mirror Module.
 *
 * The module block has no attached TI reference design. The battery-protection
 * stage follows the LM74202-Q1 datasheet Simplified Schematic on page 1, using
 * the component values from Figure 39. The fixed 3.3 V regulator follows the
 * TPS7E81-Q1 datasheet Figure 7-5.
 * References:
 * - https://www.ti.com/lit/ds/symlink/lm74202-q1.pdf
 * - https://www.ti.com/lit/ds/symlink/tps7e81-q1.pdf
 */
export const PowerSupply_LM74202_TPS7E81_Q1 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schMaxTraceDistance="5mm" {...props}>
    <net name="VIN" isPowerNet />
    <net name="VOUT" isPowerNet />
    <net name="V3P3" isPowerNet />
    <net name="ON_OFF_CONTROL" />
    <net name="HEALTH_MONITOR" />
    <net name="LOAD_MONITOR" />
    <net name="GND" isGroundNet />

    <diode
      name="TVS1"
      manufacturerPartNumber="SMBJ28CA"
      footprint="do214aa"
      variant="tvs"
      schX={-9.5}
      schY={-1.6}
      schRotation={90}
      connections={{ anode: "net.GND", cathode: "net.VIN" }}
    />
    <capacitor
      name="C_IN"
      capacitance="1uF"
      maxVoltageRating="50V"
      footprint="1206"
      schX={-7.8}
      schY={-1.6}
      schOrientation="vertical"
      connections={{ pin1: "net.VIN", pin2: "net.GND" }}
    />
    <resistor
      name="R1"
      resistance="97.6kohm"
      tolerance="1%"
      footprint="0603"
      schX={-6.2}
      schY={1.4}
      schOrientation="vertical"
      connections={{ pin1: "net.VIN", pin2: "U1.OVP" }}
    />
    <resistor
      name="R2"
      resistance="5.11kohm"
      tolerance="1%"
      footprint="0603"
      schX={-6.2}
      schY={-1.4}
      schOrientation="vertical"
      connections={{ pin1: "U1.OVP", pin2: "net.GND" }}
    />

    <LM74202QPWPRQ1
      name="U1"
      schX={0}
      schY={0}
      connections={{
        IN1: "net.VIN",
        IN2: "net.VIN",
        UVLO: "net.VIN",
        MODE: "net.GND",
        SHDN: "net.ON_OFF_CONTROL",
        RTN: "net.GND",
        GND: "net.GND",
        PAD: "net.GND",
        IMON: "net.LOAD_MONITOR",
        FLT: "net.HEALTH_MONITOR",
        OUT1: "net.VOUT",
        OUT2: "net.VOUT",
      }}
    />

    <capacitor
      name="C_DVDT"
      capacitance="12nF"
      maxVoltageRating="16V"
      footprint="0603"
      schX={-3.8}
      schY={-3.8}
      schOrientation="vertical"
      connections={{ pin1: "U1.DVDT", pin2: "net.GND" }}
    />
    <resistor
      name="R_FLT"
      resistance="100kohm"
      tolerance="1%"
      footprint="0603"
      schX={4.2}
      schY={2.6}
      schOrientation="vertical"
      connections={{ pin1: "net.VOUT", pin2: "net.HEALTH_MONITOR" }}
    />
    <resistor
      name="R_IMON"
      resistance="20kohm"
      tolerance="1%"
      footprint="0603"
      schX={5.2}
      schY={-3.8}
      schOrientation="vertical"
      connections={{ pin1: "net.LOAD_MONITOR", pin2: "net.GND" }}
    />
    <resistor
      name="R_ILIM"
      resistance="5.36kohm"
      tolerance="1%"
      footprint="0603"
      schX={3.8}
      schY={-3.8}
      schOrientation="vertical"
      connections={{ pin1: "U1.ILIM", pin2: "net.GND" }}
    />
    <capacitor
      name="C_OUT"
      capacitance="47uF"
      polarized
      maxVoltageRating="35V"
      footprint="electrolytic_d6.3mm_p2.5mm"
      schX={6.4}
      schY={-1.6}
      schOrientation="vertical"
      connections={{ pin1: "net.VOUT", pin2: "net.GND" }}
    />

    <capacitor
      name="C_LDO_IN"
      capacitance="1uF"
      maxVoltageRating="50V"
      footprint="1206"
      schX={10}
      schY={-1.6}
      schOrientation="vertical"
      connections={{ pin1: "net.VOUT", pin2: "net.GND" }}
    />
    <TPS7E8133QDBVRQ1
      name="U2"
      schX={13.5}
      schY={0}
      connections={{
        IN: "net.VOUT",
        EN: "net.ON_OFF_CONTROL",
        GND: "net.GND",
        OUT: "net.V3P3",
      }}
    />
    <capacitor
      name="C_LDO_OUT"
      capacitance="2.2uF"
      maxVoltageRating="16V"
      footprint="0603"
      schX={17}
      schY={-1.6}
      schOrientation="vertical"
      connections={{ pin1: "net.V3P3", pin2: "net.GND" }}
    />
  </subcircuit>
);

export default PowerSupply_LM74202_TPS7E81_Q1;
