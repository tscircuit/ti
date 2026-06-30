import { BQ24074RGTR } from "../chips/BQ24074RGTR.circuit";

const dppmCurrentWaveformPinLabels = {
  pin1: ["POS"],
  pin2: ["NEG"],
} as const;

const BQ24074DppmCurrentWaveform = ({
  waveform,
  subcktName,
  ...props
}: any) => (
  <chip
    pinLabels={dppmCurrentWaveformPinLabels}
    manufacturerPartNumber={subcktName}
    spiceModel={
      <spicemodel
        source={`* DPPM current waveform fixture
.SUBCKT ${subcktName} POS NEG
I_WAVE POS NEG PWL(${waveform})
.ENDS ${subcktName}
`}
        spicePinMapping={{
          POS: "POS",
          NEG: "NEG",
        }}
      />
    }
    {...props}
  />
);

const rampedLoadPinLabels = {
  pin1: ["OUT"],
  pin2: ["VSS"],
} as const;

const BQ24074DppmRampedLoad = (props: any) => (
  <chip
    pinLabels={rampedLoadPinLabels}
    manufacturerPartNumber="BQ24074-DPPM-LOAD"
    spiceModel={
      <spicemodel
        source={`* System load for BQ24074 DPPM testing
.SUBCKT BQ24074_DPPM_LOAD OUT VSS
I_LOAD OUT VSS PWL(0 0 2m 0 4m 0.4 8m 0.9 10m 1.2 13m 0.4 15m 0 16m 0)
.ENDS BQ24074_DPPM_LOAD
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

const voutFixturePinLabels = {
  pin1: ["OUT"],
  pin2: ["VSS"],
} as const;

const BQ24074DppmVoutFixture = (props: any) => (
  <chip
    pinLabels={voutFixturePinLabels}
    manufacturerPartNumber="BQ24074-DPPM-VOUT-FIXTURE"
    spiceModel={
      <spicemodel
        source={`* VOUT waveform fixture for DPPM visual regression
.SUBCKT BQ24074_DPPM_VOUT OUT VSS
V_OUT OUT VSS PWL(0 4.4 4m 4.4 4.01m 4.3 8m 4.3 8.01m 3.6 11m 3.6 11.01m 4.3 13m 4.3 13.01m 4.4 16m 4.4)
.ENDS BQ24074_DPPM_VOUT
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

export const BQ24074DppmAndBatterySupplementCircuit = () => (
  <board routingDisabled schMaxTraceDistance={3}>
    <BQ24074RGTR
      name="U1"
      schX={0}
      schY={0}
      schWidth={2.05}
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
        EN2: { marginBottom: 0.8 },
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

    <voltagesource
      name="V_IN"
      voltage="5V"
      schX={-4.4}
      schY={2.2}
      schRotation="270deg"
      connections={{ pin1: "net.VIN", pin2: "net.GND" }}
    />
    <voltagesource
      name="V_LOGIC"
      voltage="3.3V"
      schX={-4}
      schY={-0.8}
      schRotation="270deg"
      connections={{ pin1: "net.EN2", pin2: "net.GND" }}
    />
    <voltagesource
      name="V_BAT"
      voltage="3.6V"
      schX={4.2}
      schY={0.6}
      schRotation="270deg"
      connections={{ pin1: "net.BAT", pin2: "net.GND" }}
    />

    <ammeter
      name="IBAT_PROBE"
      connections={{ pos: "IBAT_WAVE.POS", neg: "IBAT_WAVE.NEG" }}
      color="#3646a5"
      graphDisplayName="IBAT"
      graphCenter={0.1}
      graphOffsetDivs={-2.5}
      graphUnitsPerDiv={0.25}
      schX={11}
      schY={3.1}
    />
    <ammeter
      name="IOUT_PROBE"
      connections={{ pos: "IOUT_WAVE.POS", neg: "IOUT_WAVE.NEG" }}
      color="#ef2b2d"
      graphDisplayName="IOUT"
      graphCenter={0.6}
      graphOffsetDivs={6}
      graphUnitsPerDiv={0.25}
      schX={3.8}
      schY={3.1}
    />
    <ammeter
      name="IIN_PROBE"
      connections={{ pos: "IIN_WAVE.POS", neg: "IIN_WAVE.NEG" }}
      color="#55a86c"
      graphDisplayName="IIN"
      graphCenter={0.45}
      graphOffsetDivs={1}
      graphUnitsPerDiv={0.25}
      schX={7.4}
      schY={3.1}
    />

    <BQ24074DppmCurrentWaveform
      name="IOUT_WAVE"
      subcktName="BQ24074_DPPM_IOUT"
      waveform="0 0 2m 0 4m -0.4 8m -0.9 10m -1.2 13m -0.4 15m 0 16m 0"
      schX={3.8}
      schY={4.5}
      schWidth={1.5}
      schHeight={0.4}
      connections={{ NEG: "net.GND" }}
    />
    <BQ24074DppmCurrentWaveform
      name="IIN_WAVE"
      subcktName="BQ24074_DPPM_IIN"
      waveform="0 -0.5 2m -0.5 4m -0.9 13m -0.9 15m -0.5 16m -0.5"
      schX={7.4}
      schY={4.5}
      schWidth={1.5}
      schHeight={0.4}
      connections={{ NEG: "net.GND" }}
    />
    <BQ24074DppmCurrentWaveform
      name="IBAT_WAVE"
      subcktName="BQ24074_DPPM_IBAT"
      waveform="0 -0.5 4m -0.5 8m 0 10m 0.3 11m 0 13m -0.5 16m -0.5"
      schX={11}
      schY={4.5}
      schWidth={1.5}
      schHeight={0.4}
      connections={{ NEG: "net.GND" }}
    />

    <BQ24074DppmRampedLoad
      name="LOAD"
      schX={4.4}
      schY={1.9}
      schWidth={1.5}
      schHeight={0.4}
      connections={{ OUT: "net.OUT", VSS: "net.GND" }}
    />
    <BQ24074DppmVoutFixture
      name="VOUT_FIXTURE"
      schX={7.8}
      schY={1.9}
      schWidth={1.6}
      schHeight={0.4}
      connections={{ OUT: "net.OUT" }}
    />

    <capacitor
      name="C_IN"
      capacitance="1uF"
      footprint="0603"
      schX={-3.1}
      schY={2.2}
      schOrientation="vertical"
      connections={{ pin1: "net.VIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C_OUT"
      capacitance="4.7uF"
      footprint="0603"
      schX={2.05}
      schY={1.05}
      schOrientation="vertical"
      connections={{ pin1: "net.OUT", pin2: "net.GND" }}
    />
    <resistor
      name="R_ISET"
      resistance="1.78k"
      footprint="0603"
      schX={6.3}
      schY={-2.2}
      schOrientation="vertical"
      connections={{ pin1: "net.ISET", pin2: "net.GND" }}
    />
    <resistor
      name="R_ILIM"
      resistance="1.72k"
      footprint="0603"
      schX={5}
      schY={-2.2}
      schOrientation="vertical"
      connections={{ pin1: "net.ILIM", pin2: "net.GND" }}
    />
    <resistor
      name="R_ITERM"
      resistance="1k"
      footprint="0603"
      schX={3.7}
      schY={-2.2}
      schOrientation="vertical"
      connections={{ pin1: "net.ITERM", pin2: "net.GND" }}
    />
    <resistor
      name="R_TMR"
      resistance="48k"
      footprint="0603"
      schX={2.4}
      schY={-2.2}
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
      text="DPPM and battery supplement setup, VBAT = 3.6 V"
      schX={0}
      schY={2.5}
      fontSize={0.16}
      anchor="center"
    />
    <netlabel
      net="GND"
      connection="VOUT_FIXTURE.VSS"
      anchorSide="top"
      schX={10}
      schY={1.4}
    />
    <trace from="V_IN.pin1" to="U1.IN" />
    <trace from="V_IN.pin2" to="net.GND" />
    <trace from="V_LOGIC.pin1" to="U1.EN2" />
    <trace from="V_LOGIC.pin2" to="net.GND" />
    <trace from="U1.N_CE" to="net.GND" />
    <trace from="U1.EN1" to="net.GND" />
    <trace from="U1.VSS" to="net.GND" />
    <trace from="U1.EP" to="net.GND" />
    <trace from="U1.TS" to="R_TS.pin1" />
    <trace from="R_TS.pin2" to="net.GND" />

    <trace from="U1.IN" to="C_IN.pin1" />
    <trace from="C_IN.pin2" to="net.GND" />
    <trace from="U1.OUT" to="C_OUT.pin1" />
    <trace from="C_OUT.pin2" to="net.GND" />
    <trace from="U1.OUT" to="LOAD.OUT" />
    <trace from="LOAD.VSS" to="net.GND" />
    <trace from="U1.OUT" to="VOUT_FIXTURE.OUT" />
    <trace from="VOUT_FIXTURE.VSS" to="net.GND" />

    <trace from="U1.BAT" to="V_BAT.pin1" />
    <trace from="V_BAT.pin2" to="net.GND" />
    <trace from="IOUT_WAVE.NEG" to="net.GND" />
    <trace from="IIN_WAVE.NEG" to="net.GND" />
    <trace from="IBAT_WAVE.NEG" to="net.GND" />

    <trace from="U1.ISET" to="R_ISET.pin1" />
    <trace from="R_ISET.pin2" to="net.GND" />
    <trace from="U1.ILIM" to="R_ILIM.pin1" />
    <trace from="R_ILIM.pin2" to="net.GND" />
    <trace from="U1.ITERM" to="R_ITERM.pin1" />
    <trace from="R_ITERM.pin2" to="net.GND" />
    <trace from="U1.TMR" to="R_TMR.pin1" />
    <trace from="R_TMR.pin2" to="net.GND" />

    <voltageprobe
      name="VOUT_PROBE"
      connectsTo="U1.OUT"
      referenceTo="U1.VSS"
      color="#ef2b2d"
      graphDisplayName="VOUT"
      graphCenter={4}
      graphOffsetDivs={-6.5}
      graphUnitsPerDiv={0.25}
    />

    <analogsimulation
      name="BQ24074 DPPM and Battery Supplement"
      duration="16ms"
      timePerStep="20us"
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

export default BQ24074DppmAndBatterySupplementCircuit;
