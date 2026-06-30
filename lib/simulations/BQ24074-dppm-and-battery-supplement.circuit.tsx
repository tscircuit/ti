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
      schWidth={3.2}
      schHeight={6.5}
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
    />

    <voltagesource
      name="V_IN"
      voltage="5V"
      schX={-6}
      schY={2.4}
      schRotation="270deg"
    />
    <voltagesource
      name="V_LOGIC"
      voltage="3.3V"
      schX={-6}
      schY={-0.8}
      schRotation="270deg"
    />
    <voltagesource
      name="V_BAT"
      voltage="3.6V"
      schX={5.8}
      schY={1}
      schRotation="270deg"
    />

    <ammeter
      name="IBAT_PROBE"
      connections={{ pos: "IBAT_WAVE.POS", neg: "IBAT_WAVE.NEG" }}
      color="#3646a5"
      graphDisplayName="IBAT"
      graphCenter={0.1}
      graphOffsetDivs={-2.5}
      graphUnitsPerDiv={0.25}
      schX={3.6}
      schY={1}
    />
    <ammeter
      name="IOUT_PROBE"
      connections={{ pos: "IOUT_WAVE.POS", neg: "IOUT_WAVE.NEG" }}
      color="#ef2b2d"
      graphDisplayName="IOUT"
      graphCenter={0.6}
      graphOffsetDivs={6}
      graphUnitsPerDiv={0.25}
      schX={3.1}
      schY={2.5}
    />
    <ammeter
      name="IIN_PROBE"
      connections={{ pos: "IIN_WAVE.POS", neg: "IIN_WAVE.NEG" }}
      color="#55a86c"
      graphDisplayName="IIN"
      graphCenter={0.45}
      graphOffsetDivs={1}
      graphUnitsPerDiv={0.25}
      schX={3.1}
      schY={3.5}
    />

    <BQ24074DppmCurrentWaveform
      name="IOUT_WAVE"
      subcktName="BQ24074_DPPM_IOUT"
      waveform="0 0 2m 0 4m -0.4 8m -0.9 10m -1.2 13m -0.4 15m 0 16m 0"
      schX={5.2}
      schY={3.6}
      schWidth={1.5}
      schHeight={1}
    />
    <BQ24074DppmCurrentWaveform
      name="IIN_WAVE"
      subcktName="BQ24074_DPPM_IIN"
      waveform="0 -0.5 2m -0.5 4m -0.9 13m -0.9 15m -0.5 16m -0.5"
      schX={7}
      schY={3.6}
      schWidth={1.5}
      schHeight={1}
    />
    <BQ24074DppmCurrentWaveform
      name="IBAT_WAVE"
      subcktName="BQ24074_DPPM_IBAT"
      waveform="0 -0.5 4m -0.5 8m 0 10m 0.3 11m 0 13m -0.5 16m -0.5"
      schX={8.8}
      schY={3.6}
      schWidth={1.5}
      schHeight={1}
    />

    <BQ24074DppmRampedLoad
      name="LOAD"
      schX={5.2}
      schY={2.5}
      schWidth={1.5}
      schHeight={1.2}
    />
    <BQ24074DppmVoutFixture
      name="VOUT_FIXTURE"
      schX={6.9}
      schY={2.5}
      schWidth={1.6}
      schHeight={1.2}
    />

    <capacitor
      name="C_IN"
      capacitance="1uF"
      footprint="0603"
      schX={-4.4}
      schY={2.4}
      schOrientation="vertical"
    />
    <capacitor
      name="C_OUT"
      capacitance="4.7uF"
      footprint="0603"
      schX={3.5}
      schY={2.5}
      schOrientation="vertical"
    />
    <resistor
      name="R_ISET"
      resistance="1.78k"
      footprint="0603"
      schX={3.2}
      schY={-1.7}
      schOrientation="vertical"
    />
    <resistor
      name="R_ILIM"
      resistance="1.72k"
      footprint="0603"
      schX={4.5}
      schY={-1.7}
      schOrientation="vertical"
    />
    <resistor
      name="R_ITERM"
      resistance="1k"
      footprint="0603"
      schX={5.8}
      schY={-1.7}
      schOrientation="vertical"
    />
    <resistor
      name="R_TMR"
      resistance="48k"
      footprint="0603"
      schX={7.1}
      schY={-1.7}
      schOrientation="vertical"
    />
    <resistor
      name="R_TS"
      resistance="10k"
      footprint="0603"
      schX={-3.5}
      schY={-2.3}
      schOrientation="vertical"
    />

    <schematictext
      text="DPPM and battery supplement setup, VBAT = 3.6 V"
      schX={-1.5}
      schY={4}
      fontSize={0.16}
      anchor="center"
    />
    <netlabel net="VIN" connection="U1.IN" schX={-2.2} schY={2.4} />
    <netlabel net="BAT" connection="U1.BAT" schX={2.1} schY={1} />
    <netlabel net="OUT" connection="U1.OUT" schX={2.1} schY={2.4} />

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
