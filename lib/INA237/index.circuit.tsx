import { sel } from "tscircuit";

import { INA237AQDGSRQ1 } from "./imports/INA237AQDGSRQ1";

export default () => (
  <subcircuit width={140} height={80}>
    <INA237AQDGSRQ1
      name="U1"
      schX={0}
      schY={0}
      schWidth={2.5}
      schHeight={2.8}
      showPinAliases={false}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VS", "VBUS", "IN_POS", "IN_NEG", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["A0", "A1", "SCL", "SDA", "N_ALERT"],
        },
      }}
      schPinStyle={{
        VBUS: { marginTop: 0.15 },
        IN_POS: { marginTop: 0.15 },
        IN_NEG: { marginTop: 0.15 },
        GND: { marginTop: 0.15 },
        A1: { marginTop: 0.15 },
        SCL: { marginTop: 0.3 },
        SDA: { marginTop: 0.15 },
        N_ALERT: { marginTop: 0.15 },
      }}
      connections={{
        VS: sel.net.VS,
        VBUS: sel.net.BUS_HIGH,
        IN_POS: sel.net.BUS_HIGH,
        IN_NEG: sel.net.LOAD_CHARGER,
        GND: sel.net.GND,
        A0: sel.net.GND,
        A1: sel.net.GND,
        SCL: sel.net.SCL,
        SDA: sel.net.SDA,
        N_ALERT: sel.net.N_ALERT,
      }}
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      schX={-3.75}
      schY={2.05}
      schRotation="180deg"
      connections={{
        pin1: sel.net.VS,
        pin2: sel.net.GND,
      }}
    />

    <battery
      name="B1"
      voltage="48V"
      footprint="pinrow2"
      schX={-8.75}
      schY={-1.35}
      schRotation="270deg"
    />

    <resistor
      name="R_SHUNT"
      resistance="0.001"
      footprint="2512"
      schX={-5.95}
      schY={-0.25}
      schRotation="270deg"
      connections={{
        pin1: sel.net.BUS_HIGH,
        pin2: sel.net.LOAD_CHARGER,
      }}
    />

    <resistor
      name="R_LOAD"
      resistance="10"
      footprint="1206"
      schX={-7}
      schY={-3.3}
      schRotation="270deg"
      connections={{
        pin1: sel.net.LOAD_CHARGER,
        pin2: sel.net.GND,
      }}
    />

    <voltagesource
      name="CHARGER"
      voltage="12V"
      footprint="pinrow2"
      schX={-4.1}
      schY={-3.3}
      schRotation="270deg"
    />

    <trace from=".B1 > .pin2" to={sel.net.BUS_HIGH} />
    <trace from=".B1 > .pin1" to={sel.net.GND} />
    <trace from=".CHARGER > .pin2" to={sel.net.LOAD_CHARGER} />
    <trace from=".CHARGER > .pin1" to={sel.net.GND} />

    <resistor
      name="R1"
      resistance="10k"
      footprint="0402"
      schX={4.1}
      schY={2.2}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VS,
        pin2: sel.net.SCL,
      }}
    />
    <resistor
      name="R2"
      resistance="10k"
      footprint="0402"
      schX={5.0}
      schY={2.2}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VS,
        pin2: sel.net.SDA,
      }}
    />
    <resistor
      name="R3"
      resistance="10k"
      footprint="0402"
      schX={5.9}
      schY={2.2}
      schRotation="270deg"
      connections={{
        pin1: sel.net.VS,
        pin2: sel.net.N_ALERT,
      }}
    />

    <chip
      name="J1"
      manufacturerPartNumber="MCU I2C Interface"
      footprint="pinrow4"
      schX={8.25}
      schY={-0.55}
      schWidth={2.3}
      schHeight={2.9}
      pinLabels={{
        pin1: "SCL",
        pin2: "SDA",
        pin3: "N_ALERT",
        pin4: "GND",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      schPinStyle={{
        pin3: { marginTop: 0.25 },
      }}
      connections={{
        pin1: sel.net.SCL,
        pin2: sel.net.SDA,
        pin3: sel.net.N_ALERT,
        pin4: sel.net.GND,
      }}
    />

    <netlabel net="VS" connection="U1.VS" schX={-3.15} schY={2.95} />
    <netlabel net="GND" connection="U1.GND" schX={-2.55} schY={-2.15} />
    {/* <netlabel net="GND" connection="U1.A0" schX={2.65} schY={1.45} />
    <netlabel net="GND" connection="U1.A1" schX={2.65} schY={0.75} /> */}
    <netlabel net="GND" connection="B1.pin1" schX={-8.75} schY={-4.05} />
    <netlabel net="VS" connection="R2.pin1" schX={5.0} schY={3.55} />

    <schematictext
      text="VS = 2.7V - 5.5V"
      schX={-3.1}
      schY={3.55}
      fontSize={0.2}
      anchor="center"
    />
    <schematictext
      text="48V BATT"
      schX={-9.65}
      schY={0.0}
      fontSize={0.22}
      anchor="center"
    />
    <schematictext
      text="I2C ADDR: 0x40"
      schX={1.55}
      schY={-2.2}
      fontSize={0.2}
      anchor="center"
    />
    <schematictext
      text="To MCU"
      schX={9.95}
      schY={-0.55}
      fontSize={0.24}
      anchor="center"
    />
  </subcircuit>
);
