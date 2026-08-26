import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { LM74202QPWPRQ1 } from "../chips/LM74202QPWPRQ1.circuit.tsx";
import { TPS7E8133QDBVRQ1 } from "../chips/TPS7E8133QDBVRQ1.circuit.tsx";

/**
 * Datasheet-derived power supply for the Rearview Mirror Module.
 *
 * The module block has no attached TI reference design. The battery-protection
 * stage follows LM74202-Q1 datasheet Figure 39, and the fixed 3.3 V regulator
 * follows TPS7E81-Q1 datasheet Figure 7-5. Figure 39's optional OVP-clamp
 * divider is omitted because the datasheet does not specify R3/R4 values.
 * References:
 * - https://www.ti.com/lit/ds/symlink/lm74202-q1.pdf
 * - https://www.ti.com/lit/ds/symlink/tps7e81-q1.pdf
 */
export const PowerSupply_LM74202_TPS7E81_Q1 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schMaxTraceDistance="5mm" {...props}>
    <net name="VBATT_12V" isPowerNet />
    <net name="PROTECTED_12V" isPowerNet />
    <net name="V3P3" isPowerNet />
    <net name="POWER_ENABLE" />
    <net name="POWER_FAULT" />
    <net name="LOAD_MONITOR" />
    <net name="GND" isGroundNet />

    <diode
      name="D1"
      manufacturerPartNumber="SMBJ28CA"
      footprint="do214aa"
      variant="tvs"
      schX={-9.5}
      schY={-1.6}
      schRotation={90}
      connections={{ anode: "net.GND", cathode: "net.VBATT_12V" }}
    />
    <capacitor
      name="C1"
      capacitance="1uF"
      maxVoltageRating="50V"
      footprint="1206"
      schX={-7.8}
      schY={-1.6}
      schOrientation="vertical"
      connections={{ pin1: "net.VBATT_12V", pin2: "net.GND" }}
    />
    <resistor
      name="R1"
      resistance="97.6kohm"
      tolerance="1%"
      footprint="0603"
      schX={-6.2}
      schY={1.4}
      schOrientation="vertical"
      connections={{ pin1: "net.VBATT_12V", pin2: "net.OVP_SET" }}
    />
    <resistor
      name="R2"
      resistance="5.11kohm"
      tolerance="1%"
      footprint="0603"
      schX={-6.2}
      schY={-1.4}
      schOrientation="vertical"
      connections={{ pin1: "net.OVP_SET", pin2: "net.GND" }}
    />

    <LM74202QPWPRQ1
      name="U1"
      schX={0}
      schY={0}
      connections={{
        IN1: "net.VBATT_12V",
        IN2: "net.VBATT_12V",
        UVLO: "net.VBATT_12V",
        OVP: "net.OVP_SET",
        MODE: "net.GND",
        SHDN: "net.POWER_ENABLE",
        RTN: "net.GND",
        GND: "net.GND",
        PAD: "net.GND",
        DVDT: "net.DVDT_SET",
        IMON: "net.LOAD_MONITOR",
        ILIM: "net.ILIM_SET",
        FLT: "net.POWER_FAULT",
        OUT1: "net.PROTECTED_12V",
        OUT2: "net.PROTECTED_12V",
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
      connections={{ pin1: "net.DVDT_SET", pin2: "net.GND" }}
    />
    <resistor
      name="R_FLT"
      resistance="100kohm"
      tolerance="1%"
      footprint="0603"
      schX={4.2}
      schY={2.6}
      schOrientation="vertical"
      connections={{ pin1: "net.PROTECTED_12V", pin2: "net.POWER_FAULT" }}
    />
    <resistor
      name="R_IMON"
      resistance="20kohm"
      tolerance="1%"
      footprint="0603"
      schX={3.2}
      schY={-3.8}
      schOrientation="vertical"
      connections={{ pin1: "net.LOAD_MONITOR", pin2: "net.GND" }}
    />
    <resistor
      name="R_ILIM"
      resistance="5.36kohm"
      tolerance="1%"
      footprint="0603"
      schX={4.8}
      schY={-3.8}
      schOrientation="vertical"
      connections={{ pin1: "net.ILIM_SET", pin2: "net.GND" }}
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
      connections={{ pin1: "net.PROTECTED_12V", pin2: "net.GND" }}
    />
    <diode
      name="D2"
      footprint="sod123"
      variant="zener"
      schX={7.8}
      schY={-1.6}
      schRotation={90}
      connections={{ anode: "net.GND", cathode: "net.PROTECTED_12V" }}
    />

    <capacitor
      name="C_LDO_IN"
      capacitance="1uF"
      maxVoltageRating="50V"
      footprint="1206"
      schX={10}
      schY={-1.6}
      schOrientation="vertical"
      connections={{ pin1: "net.PROTECTED_12V", pin2: "net.GND" }}
    />
    <TPS7E8133QDBVRQ1
      name="U2"
      schX={13.5}
      schY={0}
      connections={{
        IN: "net.PROTECTED_12V",
        EN: "net.POWER_ENABLE",
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
