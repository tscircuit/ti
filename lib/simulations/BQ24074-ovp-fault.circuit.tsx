import { BQ24074RGTR } from "../chips/BQ24074RGTR.circuit";

const ovpInputPinLabels = {
  pin1: ["OUT"],
  pin2: ["VSS"],
} as const;

const BQ24074OvpInputStep = (props: any) => (
  <chip
    pinLabels={ovpInputPinLabels}
    manufacturerPartNumber="BQ24074-OVP-INPUT-STEP"
    spiceModel={
      <spicemodel
        source={`* VIN stimulus for OVP fault transient test
.SUBCKT BQ24074_OVP_INPUT_STEP OUT VSS
V_IN OUT VSS PWL(0 6 64u 6 70u 15 78u 15.8 90u 15 240u 15)
.ENDS BQ24074_OVP_INPUT_STEP
`}
        spicePinMapping={{
          OUT: "OUT",
          VSS: "VSS",
        }}
      />
    }
    {...props}
  />
);

export const BQ24074OvpFaultCircuit = () => (
  <board routingDisabled schMaxTraceDistance={3}>
    <BQ24074RGTR
      name="U1"
      schX={0}
      schY={0}
      schWidth={2.1}
      schHeight={3}
      showPinAliases={false}
      schPinArrangement={{
        leftSide: {
          pins: ["IN", "N_CE", "EN1", "EN2", "TS", "VSS"],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: ["OUT", "BAT", "ISET", "ILIM", "ITERM", "TMR"],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{
        IN: { marginBottom: 0.8 },
        OUT: { marginBottom: 0.8 },
        BAT: { marginBottom: 0.8 },
      }}
      connections={{
        IN: "net.VIN",
        N_CE: "net.GND",
        EN1: "net.GND",
        EN2: "net.EN2",
        TS: "net.TS",
        VSS: "net.GND",
        OUT: "net.OUT",
        BAT: "net.BAT",
        ISET: "net.ISET",
        ILIM: "net.ILIM",
        ITERM: "net.ITERM",
        TMR: "net.TMR",
        EP: "net.GND",
      }}
    />

    <BQ24074OvpInputStep
      name="V_IN"
      schX={-4.3}
      schY={1.4}
      schWidth={1.8}
      schHeight={0.45}
      connections={{ OUT: "net.VIN", VSS: "net.GND" }}
    />
    <voltagesource
      name="V_LOGIC"
      voltage="3.3V"
      schX={-4.2}
      schY={-0.8}
      schRotation="270deg"
      connections={{ pin1: "net.EN2", pin2: "net.GND" }}
    />
    <voltagesource
      name="V_BAT"
      voltage="4.2V"
      schX={4.2}
      schY={-0.5}
      schRotation="270deg"
      connections={{ pin1: "net.BAT_SRC", pin2: "net.GND" }}
    />
    <resistor
      name="R_BAT_SRC"
      resistance="0.1"
      footprint="0603"
      schX={5.2}
      schY={-0.5}
      connections={{ pin1: "net.BAT_SRC", pin2: "net.BAT_PROBE_SRC" }}
    />

    <ammeter
      name="IBAT_PROBE"
      connections={{ pos: "U1.BAT", neg: "R_BAT_SRC.pin2" }}
      color="#00aec7"
      graphDisplayName="IBAT"
      graphCenter={0}
      graphOffsetDivs={0}
      graphUnitsPerDiv={0.5}
      schX={6.8}
      schY={-1.9}
    />
    <resistor
      name="R_LOAD"
      resistance="10"
      footprint="0603"
      schX={5.9}
      schY={0.7}
      schOrientation="vertical"
      connections={{ pin1: "net.OUT", pin2: "net.GND" }}
    />
    <capacitor
      name="C_OUT"
      capacitance="4.7uF"
      footprint="0603"
      schX={2.2}
      schY={0.7}
      schOrientation="vertical"
      connections={{ pin1: "net.OUT", pin2: "net.GND" }}
    />
    <capacitor
      name="C_BAT"
      capacitance="4.7uF"
      footprint="0603"
      schX={2.2}
      schY={-0.55}
      schOrientation="vertical"
      connections={{ pin1: "net.BAT", pin2: "net.GND" }}
    />
    <resistor
      name="R_ISET"
      resistance="1.13k"
      footprint="0603"
      schX={6.3}
      schY={-2.7}
      schOrientation="vertical"
      connections={{ pin1: "net.ISET", pin2: "net.GND" }}
    />
    <resistor
      name="R_ILIM"
      resistance="1.18k"
      footprint="0603"
      schX={5}
      schY={-2.7}
      schOrientation="vertical"
      connections={{ pin1: "net.ILIM", pin2: "net.GND" }}
    />
    <resistor
      name="R_ITERM"
      resistance="4.12k"
      footprint="0603"
      schX={3.7}
      schY={-2.7}
      schOrientation="vertical"
      connections={{ pin1: "net.ITERM", pin2: "net.GND" }}
    />
    <resistor
      name="R_TMR"
      resistance="46.4k"
      footprint="0603"
      schX={2.4}
      schY={-2.7}
      schOrientation="vertical"
      connections={{ pin1: "net.TMR", pin2: "net.GND" }}
    />
    <resistor
      name="R_TS"
      resistance="10k"
      footprint="0603"
      schX={-3.2}
      schY={-1.7}
      schOrientation="vertical"
      connections={{ pin1: "net.TS", pin2: "net.GND" }}
    />

    <schematictext
      text="VIN = 6 V to 15 V, RLOAD = 10 ohm"
      schX={0}
      schY={2.5}
      fontSize={0.16}
      anchor="center"
    />

    <trace from="V_IN.OUT" to="U1.IN" />
    <trace from="V_IN.VSS" to="net.GND" />
    <trace from="V_LOGIC.pin1" to="U1.EN2" />
    <trace from="V_LOGIC.pin2" to="net.GND" />
    <trace from="U1.N_CE" to="net.GND" />
    <trace from="U1.EN1" to="net.GND" />
    <trace from="U1.VSS" to="net.GND" />
    <trace from="U1.EP" to="net.GND" />
    <trace from="U1.TS" to="R_TS.pin1" />
    <trace from="R_TS.pin2" to="net.GND" />
    <trace from="U1.OUT" to="R_LOAD.pin1" />
    <trace from="R_LOAD.pin2" to="net.GND" />
    <trace from="U1.OUT" to="C_OUT.pin1" />
    <trace from="C_OUT.pin2" to="net.GND" />
    <trace from="U1.BAT" to="C_BAT.pin1" />
    <trace from="C_BAT.pin2" to="net.GND" />
    <trace from="U1.BAT" to="IBAT_PROBE.pos" />
    <trace from="IBAT_PROBE.neg" to="R_BAT_SRC.pin2" />
    <trace from="R_BAT_SRC.pin1" to="V_BAT.pin1" />
    <trace from="V_BAT.pin2" to="net.GND" />
    <trace from="U1.ISET" to="R_ISET.pin1" />
    <trace from="R_ISET.pin2" to="net.GND" />
    <trace from="U1.ILIM" to="R_ILIM.pin1" />
    <trace from="R_ILIM.pin2" to="net.GND" />
    <trace from="U1.ITERM" to="R_ITERM.pin1" />
    <trace from="R_ITERM.pin2" to="net.GND" />
    <trace from="U1.TMR" to="R_TMR.pin1" />
    <trace from="R_TMR.pin2" to="net.GND" />

    <voltageprobe
      name="VIN_PROBE"
      connectsTo="U1.IN"
      referenceTo="U1.VSS"
      color="#394fbd"
      graphDisplayName="VIN"
      graphCenter={6}
      graphOffsetDivs={6}
      graphUnitsPerDiv={10}
    />
    <voltageprobe
      name="VOUT_PROBE"
      connectsTo="U1.OUT"
      referenceTo="U1.VSS"
      color="#a64acb"
      graphDisplayName="VOUT"
      graphCenter={4.4}
      graphOffsetDivs={3}
      graphUnitsPerDiv={0.3}
    />
    <voltageprobe
      name="VBAT_PROBE"
      connectsTo="U1.BAT"
      referenceTo="U1.VSS"
      color="#55a86c"
      graphDisplayName="VBAT"
      graphCenter={4.2}
      graphOffsetDivs={2.4}
      graphUnitsPerDiv={0.1}
    />

    <analogsimulation
      name="BQ24074 OVP Fault"
      duration="240us"
      startTime="40us"
      timePerStep="200ns"
      spiceEngine="ngspice"
      spiceOptions={{
        method: "gear",
        reltol: 0.01,
        abstol: "1n",
        vntol: "1u",
      }}
    />
  </board>
);

export default BQ24074OvpFaultCircuit;
