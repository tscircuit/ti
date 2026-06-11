import { TPS7A0230PDBVR } from "./TPS7A0230PDBVR"
import { TPS7A02_SPICE_MODEL } from "./spice/tps7a02-behavioral-spice-model"

/**
 * SPICE simulation demo for the TPS7A02 LDO.
 *
 * A noisy battery rail (3.8 V DC with a 1 kHz, +/-1 V ripple, so VIN swings
 * 2.8 V to 4.8 V) feeds the LDO. The transient simulation shows VOUT held flat
 * at 3.0 V while VIN moves, and tracking VIN minus dropout when VIN sags below
 * ~3.1 V.
 *
 * Open the "Simulation" view after running `bun run dev` to see the waveforms.
 */
export default () => (
  <board routingDisabled schMaxTraceDistance={10}>
    {/* Battery rail: DC source stacked with a sine ripple source */}
    <voltagesource
      name="VBAT"
      voltage="3.8V"
      schX={-6}
      schY={-1.5}
      schRotation="270deg"
    />
    <voltagesource
      name="VRIPPLE"
      voltage="1V"
      frequency="1kHz"
      waveShape="sinewave"
      schX={-6}
      schY={0.5}
      schRotation="270deg"
    />

    <TPS7A0230PDBVR
      name="U1"
      schX={0}
      schY={0}
      schWidth={1.5}
      schHeight={1.5}
      schPinArrangement={{
        leftSide: {
          direction: "right-to-left",
          pins: ["EN", "IN"],
        },
        rightSide: {
          direction: "left-to-right",
          pins: ["OUT", "GND"],
        },
      }}
      schPinStyle={{
        IN: { marginBottom: 0.45 },
        OUT: { marginBottom: 0.45 },
      }}
      spiceModel={
        <spicemodel
          source={TPS7A02_SPICE_MODEL}
          spicePinMapping={{
            IN: "IN",
            OUT: "OUT",
            GND: "GND",
            EN: "EN",
          }}
        />
      }
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      schX={-1.5}
      schY={-1.8}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="1uF"
      schX={2}
      schY={-1.5}
      schOrientation="vertical"
    />
    <resistor
      name="RLOAD"
      resistance="30ohm"
      schX={3.2}
      schY={-1.5}
      schOrientation="vertical"
    />

    {/* Ripple rides on top of the battery rail */}
    <trace from="VRIPPLE.neg" to="VBAT.pos" />
    <trace from="VBAT.neg" to="net.GND" />
    <trace from="VRIPPLE.pos" to="U1.IN" />
    <trace from="U1.EN" to="U1.IN" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="C1.pin1" to="U1.IN" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="U1.OUT" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="RLOAD.pin1" to="U1.OUT" />
    <trace from="RLOAD.pin2" to="net.GND" />

    <voltageprobe name="VP_VIN" connectsTo="U1.IN" />
    <voltageprobe name="VP_VOUT" connectsTo="U1.OUT" />

    <analogsimulation
      duration="4ms"
      timePerStep="2us"
      spiceEngine="ngspice"
    />
  </board>
)
