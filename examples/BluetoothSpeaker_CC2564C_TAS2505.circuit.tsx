import {
  AudioAmplifier_TAS2505,
  BatteryManagement_BQ24074,
  BluetoothAudioHost_MSP430F5229,
  BluetoothController_CC2564C,
  LM3880MF1AA,
  PowerManagement_TPS7A2018,
  PowerManagement_TPS7A2028,
  TPS22919,
} from "@tsci/tscircuit.ti";
import "tscircuit";

/**
 * Bluetooth speaker hardware prototype built from reusable TI subcircuits.
 *
 * The signal topology follows TI's BT-MSP-AUDSINK reference design. The
 * MSP430 core supply uses 2.8 V through its source-select switch while
 * its DVIO rail and the remaining logic supplies use 1.8 V.
 *
 * CC2564C + MSP430F5229 firmware is an explicit pre-fabrication gate. TI
 * publishes the CC2564C A2DP stack for MSP432, not for this MSP430 host; see
 * docs/bluetooth-speaker-architecture-gate.md before ordering a PCB.
 */
export default () => (
  <board
    width="100mm"
    height="70mm"
    pcbX={0}
    pcbY={0}
    pcbRelative
    layers={4}
    thickness="1.6mm"
    solderMaskColor="blue"
    minTraceWidth="0.15mm"
    defaultTraceWidth="0.2mm"
    minTraceToPadEdgeClearance="0.15mm"
    minViaEdgeToPadEdgeClearance="0.15mm"
    minViaHoleDiameter="0.3mm"
    minViaPadDiameter="0.6mm"
    minBoardEdgeClearance="0.25mm"
    isViaInPadAllowed
    autorouter={{
      local: true,
      groupMode: "subcircuit",
      allowViaInPad: true,
    }}
    autorouterVersion="v4"
  >
    <schematicsheet
      name="battery_and_charger"
      displayName="Li-ion Battery and Charger"
      sheetIndex={0}
    />
    <schematicsheet
      name="system_power_control"
      displayName="System Power Control and Sequencing"
      sheetIndex={1}
    />
    <schematicsheet name="power_1v8" displayName="1.8 V Power" sheetIndex={2} />
    <schematicsheet name="power_2v8" displayName="2.8 V Power" sheetIndex={3} />
    <schematicsheet
      name="bluetooth_controller"
      displayName="CC2564C Bluetooth Controller"
      sheetIndex={4}
    />
    <schematicsheet
      name="bluetooth_host"
      displayName="MSP430 Bluetooth Audio Host"
      sheetIndex={5}
    />
    <schematicsheet
      name="audio_amplifier"
      displayName="TAS2505 Audio Amplifier and Speaker"
      sheetIndex={6}
    />

    <BatteryManagement_BQ24074
      name="charger"
      autorouterVersion="v6"
      schSheetName="battery_and_charger"
      pcbPack
      pcbPackGap="0.5mm"
      width="34mm"
      height="30mm"
      pcbX={-38}
      pcbY={22}
      pcbAnchorAlignment="center"
    />

    {/* The sequencer remains powered from charger OUT. Its Sequence-1 flags
        rise 1-2-3 and fall 3-2-1 at 10 ms intervals. This guarantees that
        MSP430 DVIO is established before VCC and removed after VCC. The
        switch drives EN through R_SEQ_EN/C_SEQ_EN so EN is not hard-wired to
        a slowly rising input supply when a battery is inserted switch-ON. */}
    <LM3880MF1AA
      name="U_SEQ"
      schSheetName="system_power_control"
      schX={-1.5}
      schY={0}
      pcbX={-36}
      pcbY={-18}
      connections={{
        VCC: "net.CHARGER_OUT",
        GND: "net.GND",
        EN: "net.SYSTEM_ENABLE",
        FLAG1: "net.EN_1V8",
        FLAG2: "net.EN_2V8",
        FLAG3: "net.EN_SYSTEM_VBAT",
      }}
    />
    <capacitor
      name="C_SEQ"
      schSheetName="system_power_control"
      capacitance="0.1uF"
      footprint="0402"
      schX={-4}
      schY={-2}
      schOrientation="vertical"
      pcbX={-36}
      pcbY={-21.5}
      connections={{ pin1: "net.CHARGER_OUT", pin2: "net.GND" }}
    />
    <resistor
      name="R_SEQ_EN"
      schSheetName="system_power_control"
      resistance="47k"
      footprint="0402"
      schX={-4.6}
      schY={0}
      pcbX={-39.2}
      pcbY={-17}
      connections={{ pin1: "net.SYSTEM_SWITCH", pin2: "net.SYSTEM_ENABLE" }}
    />
    <capacitor
      name="C_SEQ_EN"
      schSheetName="system_power_control"
      capacitance="0.1uF"
      footprint="0402"
      schX={-3.2}
      schY={-1.5}
      schOrientation="vertical"
      pcbX={-39.2}
      pcbY={-19}
      connections={{ pin1: "net.SYSTEM_ENABLE", pin2: "net.GND" }}
    />
    <resistor
      name="R_SEQ1"
      schSheetName="system_power_control"
      resistance="100k"
      footprint="0402"
      schX={1.5}
      schY={2.6}
      schOrientation="vertical"
      pcbX={-32.5}
      pcbY={-16}
      connections={{ pin1: "net.CHARGER_OUT", pin2: "net.EN_1V8" }}
    />
    <resistor
      name="R_SEQ2"
      schSheetName="system_power_control"
      resistance="100k"
      footprint="0402"
      schX={3}
      schY={2.6}
      schOrientation="vertical"
      pcbX={-32.5}
      pcbY={-18}
      connections={{ pin1: "net.CHARGER_OUT", pin2: "net.EN_2V8" }}
    />
    <resistor
      name="R_SEQ3"
      schSheetName="system_power_control"
      resistance="100k"
      footprint="0402"
      schX={4.5}
      schY={2.6}
      schOrientation="vertical"
      pcbX={-32.5}
      pcbY={-20}
      connections={{
        pin1: "net.CHARGER_OUT",
        pin2: "net.EN_SYSTEM_VBAT",
      }}
    />

    {/* A real two-position switch drives the sequencer high or low. Pin 2 is
        the common contact; the unused second pole is intentionally isolated. */}
    <chip
      name="S_PWR"
      displayName="MASTER POWER"
      manufacturerPartNumber="JS202011CQN"
      supplierPartNumbers={{ jlcpcb: ["C221663"] }}
      shouldBeOnEdgeOfBoard
      schSheetName="system_power_control"
      schX={-7}
      schY={0}
      schWidth="1.8mm"
      schHeight="1.8mm"
      pcbX={-45.2}
      pcbY={-18}
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1"]}
            pcbX="-2.5mm"
            pcbY="-1.65mm"
            shape="circular_hole_with_rect_pad"
            holeDiameter="0.9mm"
            rectPadWidth="1.4mm"
            rectPadHeight="1.4mm"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX={0}
            pcbY="-1.65mm"
            shape="circle"
            holeDiameter="0.9mm"
            outerDiameter="1.4mm"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="2.5mm"
            pcbY="-1.65mm"
            shape="circle"
            holeDiameter="0.9mm"
            outerDiameter="1.4mm"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="2.5mm"
            pcbY="1.65mm"
            shape="circle"
            holeDiameter="0.9mm"
            outerDiameter="1.4mm"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX={0}
            pcbY="1.65mm"
            shape="circle"
            holeDiameter="0.9mm"
            outerDiameter="1.4mm"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="-2.5mm"
            pcbY="1.65mm"
            shape="circle"
            holeDiameter="0.9mm"
            outerDiameter="1.4mm"
          />
          <silkscreenrect
            pcbX={0}
            pcbY={0}
            width="9mm"
            height="3.3mm"
            filled={false}
            strokeWidth="0.15mm"
          />
          <silkscreentext
            text="OFF"
            pcbX="-3.2mm"
            pcbY="2.3mm"
            fontSize="0.55mm"
          />
          <silkscreentext
            text="ON"
            pcbX="3.2mm"
            pcbY="2.3mm"
            fontSize="0.55mm"
          />
          <courtyardrect
            pcbX={0}
            pcbY={0}
            width="9.5mm"
            height="4mm"
            isFilled={false}
            hasStroke
            strokeWidth="0.05mm"
          />
        </footprint>
      }
      pinLabels={{
        pin1: "ON",
        pin2: "COMMON",
        pin3: "OFF",
        pin4: "NC4",
        pin5: "NC5",
        pin6: "NC6",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: [1, 2, 3] },
        rightSide: { direction: "top-to-bottom", pins: [4, 5, 6] },
      }}
      connections={{
        pin1: "net.CHARGER_OUT",
        pin2: "net.SYSTEM_SWITCH",
        pin3: "net.GND",
      }}
      noConnect={["pin4", "pin5", "pin6"]}
    />

    {/* FLAG3 enables the battery/system rail only after both logic rails are
        stable. QOD is tied to OUT for a deterministic fast discharge. */}
    <TPS22919
      name="U_SYS"
      schSheetName="system_power_control"
      schX={7}
      schY={0}
      pcbX={-29}
      pcbY={-18}
      connections={{
        IN: "net.CHARGER_OUT",
        GND: "net.GND",
        ON: "net.EN_SYSTEM_VBAT",
        QOD: "net.SYSTEM_VBAT",
        OUT: "net.SYSTEM_VBAT",
      }}
      noConnect={["pin4"]}
    />
    <capacitor
      name="C_SYS"
      schSheetName="system_power_control"
      capacitance="4.7uF"
      footprint="0603"
      schX={10}
      schY={-1.5}
      schOrientation="vertical"
      pcbX={-25.5}
      pcbY={-18}
      connections={{ pin1: "net.SYSTEM_VBAT", pin2: "net.GND" }}
    />

    <PowerManagement_TPS7A2018
      name="power_1v8"
      autorouterVersion="v6"
      schSheetName="power_1v8"
      pcbPack
      pcbPackGap="0.5mm"
      width="8mm"
      height="8mm"
      pcbX={-23}
      pcbY={-8}
      pcbAnchorAlignment="center"
    />
    <PowerManagement_TPS7A2028
      name="power_2v8"
      autorouterVersion="v6"
      schSheetName="power_2v8"
      pcbPack
      pcbPackGap="0.5mm"
      width="8mm"
      height="8mm"
      pcbX={-25}
      pcbY={-29}
      pcbAnchorAlignment="center"
    />
    <BluetoothController_CC2564C
      name="bluetooth_controller"
      autorouterVersion="v6"
      schSheetName="bluetooth_controller"
      pcbPack
      pcbPackGap="0.5mm"
      width="32mm"
      height="30mm"
      pcbX={0}
      pcbY={-18}
      pcbAnchorAlignment="center"
    />
    <BluetoothAudioHost_MSP430F5229
      name="bluetooth_host"
      autorouterVersion="v6"
      schSheetName="bluetooth_host"
      pcbPack
      pcbPackGap="0.5mm"
      width="40mm"
      height="32mm"
      pcbX={10}
      pcbY={18}
      pcbAnchorAlignment="center"
    />
    <AudioAmplifier_TAS2505
      name="audio_amplifier"
      autorouterVersion="v6"
      schSheetName="audio_amplifier"
      pcbPack
      pcbPackGap="1.2mm"
      width="38mm"
      height="34mm"
      pcbX={30}
      pcbY={-17.5}
      pcbAnchorAlignment="center"
    />

    {/* A continuous inner-layer reference plane keeps return paths short. */}
    <net name="GND" isGroundNet nominalTraceWidth="0.4mm" />
    <copperpour layer="inner1" connectsTo="net.GND" clearance="0.2mm" />

    {/* Explicit traces merge every reusable subcircuit's internal GND net
        into the board GND source net used by the inner-layer copper pour. */}
    <trace from=".charger > .U1 > .VSS" to="net.GND" />
    <trace from=".power_1v8 > .U1 > .GND" to="net.GND" />
    <trace from=".power_2v8 > .U1 > .GND" to="net.GND" />
    <trace from=".bluetooth_controller > .U1A > .GND" to="net.GND" />
    <trace from=".bluetooth_host > .U10 > .DVSS" to="net.GND" />
    <trace from=".audio_amplifier > .U1 > .AVSS" to="net.GND" />

    {/* Route the board-level links in bounded phases. Keeping power, host
        control and audio buses separate avoids one very large topology graph
        after the six reusable subcircuits have routed locally. */}
    <autoroutingphase phaseIndex={0} connections={[".charger > .U1 > .OUT"]} />
    <autoroutingphase
      phaseIndex={1}
      connections={[".power_1v8 > .U1 > .VOUT", ".power_2v8 > .U1 > .VOUT"]}
    />
    <autoroutingphase
      phaseIndex={2}
      connections={[
        ".bluetooth_controller > .U1A > .HCI_TX",
        ".bluetooth_controller > .U1A > .HCI_RX",
        ".bluetooth_controller > .U1A > .HCI_RTS",
        ".bluetooth_controller > .U1A > .HCI_CTS",
        ".bluetooth_controller > .U1A > .N_SHUTD",
      ]}
    />
    <autoroutingphase
      phaseIndex={3}
      connections={[
        ".bluetooth_host > .U10 > .I2C_SCL",
        ".bluetooth_host > .U10 > .I2C_SDA",
        ".bluetooth_host > .U10 > .P2_0",
        ".bluetooth_controller > .U1A > .AUD_CLK",
        ".bluetooth_controller > .U1A > .AUD_FSYNC",
        ".bluetooth_controller > .U1A > .AUD_OUT",
      ]}
    />

    {/* Charger OUT powers the sequencer and LDO inputs. Their enable pins are
        controlled by FLAG1 and FLAG2 rather than tied permanently high. */}
    <trace
      from=".charger > .U1 > .OUT"
      to="net.CHARGER_OUT"
      thickness="0.5mm"
    />
    <trace
      from="net.CHARGER_OUT"
      to=".power_1v8 > .U1 > .VIN"
      thickness="0.3mm"
    />
    <trace from="net.EN_1V8" to=".power_1v8 > .U1 > .VEN" />
    <trace
      from="net.CHARGER_OUT"
      to=".power_2v8 > .U1 > .VIN"
      thickness="0.3mm"
    />
    <trace from="net.EN_2V8" to=".power_2v8 > .U1 > .VEN" />

    {/* Switched battery/system rail for the radio and speaker power stage. */}
    <trace
      from="net.SYSTEM_VBAT"
      to=".bluetooth_controller > .U1A > .MLDO_IN"
      thickness="0.4mm"
    />
    <trace
      from="net.SYSTEM_VBAT"
      to=".audio_amplifier > .U1 > .SPKVDD"
      thickness="0.4mm"
    />

    {/* 1.8 V logic, MCU DVIO, oscillator, codec and I2C pull-up supplies. */}
    <trace
      from=".power_1v8 > .U1 > .VOUT"
      to=".bluetooth_controller > .U1A > .VDD_IO"
      thickness="0.3mm"
    />
    <trace
      from=".power_1v8 > .U1 > .VOUT"
      to=".bluetooth_controller > .Y1 > .VCC"
      thickness="0.3mm"
    />
    <trace
      from=".power_1v8 > .U1 > .VOUT"
      to=".bluetooth_host > .U10 > .DVIO"
      thickness="0.3mm"
    />
    <trace
      from=".power_1v8 > .U1 > .VOUT"
      to=".audio_amplifier > .U1 > .AVDD"
      thickness="0.3mm"
    />
    <trace
      from=".power_1v8 > .U1 > .VOUT"
      to=".audio_amplifier > .U1 > .DVDD"
      thickness="0.3mm"
    />
    <trace
      from=".power_1v8 > .U1 > .VOUT"
      to=".audio_amplifier > .U1 > .IOVDD"
      thickness="0.3mm"
    />
    <trace
      from=".power_1v8 > .U1 > .VOUT"
      to=".audio_amplifier > .R1 > .pin1"
      thickness="0.3mm"
    />

    {/* 2.8 V feeds the MSP430 VCC rail through its LDO/JTAG selector. */}
    <trace
      from=".power_2v8 > .U1 > .VOUT"
      to=".bluetooth_host > .S3 > .pin1"
      thickness="0.3mm"
    />

    {/* CC2564C HCI UART and control interface to the MSP430 host. */}
    <trace
      from=".bluetooth_controller > .U1A > .HCI_TX"
      to=".bluetooth_host > .U10 > .UART_RXD"
    />
    <trace
      from=".bluetooth_controller > .U1A > .HCI_RX"
      to=".bluetooth_host > .U10 > .UART_TXD"
    />
    <trace
      from=".bluetooth_controller > .U1A > .HCI_RTS"
      to=".bluetooth_host > .U10 > .P1_4"
    />
    <trace
      from=".bluetooth_controller > .U1A > .HCI_CTS"
      to=".bluetooth_host > .U10 > .P1_5"
    />
    <trace
      from=".bluetooth_controller > .U1A > .N_SHUTD"
      to=".bluetooth_host > .U10 > .P1_7"
    />
    {/* SLOW_CLK is supplied by the controller's local 32.768 kHz oscillator.
        Do not also drive it from the optional MSP430 clock divider. */}

    {/* MSP430 control interface to the TAS2505. */}
    <trace
      from=".bluetooth_host > .U10 > .I2C_SCL"
      to=".audio_amplifier > .U1 > .SCL"
    />
    <trace
      from=".bluetooth_host > .U10 > .I2C_SDA"
      to=".audio_amplifier > .U1 > .SDA"
    />
    <trace
      from=".bluetooth_host > .U10 > .P2_0"
      to=".audio_amplifier > .U1 > .N_RST"
    />

    {/* CC2564C PCM/I2S output to the TAS2505 digital audio input. MCLK is
        intentionally omitted: firmware must select BCLK as PLL/codec input. */}
    <trace
      from=".bluetooth_controller > .U1A > .AUD_CLK"
      to=".audio_amplifier > .U1 > .BCLK"
    />
    <trace
      from=".bluetooth_controller > .U1A > .AUD_FSYNC"
      to=".audio_amplifier > .U1 > .WCLK"
    />
    <trace
      from=".bluetooth_controller > .U1A > .AUD_OUT"
      to=".audio_amplifier > .U1 > .DIN"
    />
  </board>
);
