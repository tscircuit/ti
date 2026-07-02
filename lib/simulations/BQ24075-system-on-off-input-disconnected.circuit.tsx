const bq24075PinLabels = {
  pin1: ["IN"],
  pin2: ["SYSOFF"],
  pin3: ["BAT"],
  pin4: ["OUT"],
  pin5: ["VSS"],
} as const;

const BQ24075SystemDisconnectModel = (props: any) => (
  <chip
    pinLabels={bq24075PinLabels}
    manufacturerPartNumber="BQ24075-SYSOFF-BEHAVIORAL"
    spiceModel={
      <spicemodel
        source={`* Behavioral BQ24075/BQ24079 SYSOFF battery disconnect model
.SUBCKT BQ24075_SYSOFF_MODEL IN SYSOFF BAT OUT VSS
R_IN IN VSS 1G
R_SYSOFF SYSOFF VSS 10MEG
R_BAT_LEAK BAT VSS 100MEG
R_OUT_BLEED OUT VSS 10MEG
E_SYS_ON SYS_ON VSS VALUE { LIMIT((0.8-V(SYSOFF,VSS))/0.05,0,1) }
E_OUTDRV OUT_DRV VSS VALUE { V(BAT,VSS)*V(SYS_ON,VSS) }
R_OUT_REG OUT_DRV OUT 0.25
G_BAT_LOAD BAT VSS VALUE { V(SYS_ON,VSS)*LIMIT(V(OUT,VSS)/10,0,0.8) }
.ENDS BQ24075_SYSOFF_MODEL
`}
        spicePinMapping={{
          IN: "IN",
          SYSOFF: "SYSOFF",
          BAT: "BAT",
          OUT: "OUT",
          VSS: "VSS",
        }}
      />
    }
    {...props}
  />
);

const sysoffStepPinLabels = {
  pin1: ["OUT"],
  pin2: ["VSS"],
} as const;

const SysoffStepSource = (props: any) => (
  <chip
    pinLabels={sysoffStepPinLabels}
    manufacturerPartNumber="BQ24075-SYSOFF-STEP"
    spiceModel={
      <spicemodel
        source={`* SYSOFF control stimulus
.SUBCKT BQ24075_SYSOFF_STEP OUT VSS
V_SYSOFF OUT VSS PULSE(0 5 3.6m 20u 20u 12.3m 24m)
.ENDS BQ24075_SYSOFF_STEP
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

export const BQ24075SystemOnOffInputDisconnectedCircuit = () => (
  <board routingDisabled schMaxTraceDistance={3}>
    <BQ24075SystemDisconnectModel
      name="U1"
      schX={0}
      schY={0}
      schWidth={2.2}
      schHeight={2.8}
      showPinAliases={false}
      schPinArrangement={{
        leftSide: {
          pins: ["IN", "SYSOFF", "VSS"],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: ["OUT", "BAT"],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{
        IN: { marginBottom: 0.7 },
        OUT: { marginBottom: 0.8 },
      }}
      connections={{
        IN: "net.GND",
        SYSOFF: "net.SYSOFF",
        BAT: "net.BAT",
        OUT: "net.OUT",
        VSS: "net.GND",
      }}
    />

    <SysoffStepSource
      name="V_SYSOFF"
      schX={-4.4}
      schY={1.3}
      schWidth={1.8}
      schHeight={0.45}
      connections={{ OUT: "net.SYSOFF", VSS: "net.GND" }}
    />
    <voltagesource
      name="V_BAT"
      voltage="4.05V"
      schX={4.1}
      schY={0.5}
      schRotation="270deg"
      connections={{ pin1: "net.BAT_SRC", pin2: "net.GND" }}
    />
    <ammeter
      name="IBAT_PROBE"
      connections={{ pos: "U1.BAT", neg: "V_BAT.pin1" }}
      color="#00aec7"
      graphDisplayName="IBAT"
      graphCenter={0}
      graphOffsetDivs={-6}
      graphUnitsPerDiv={0.5}
      schX={6.8}
      schY={-2.45}
    />

    <resistor
      name="R_LOAD"
      resistance="10"
      footprint="0603"
      schX={5.9}
      schY={-1}
      schOrientation="vertical"
      connections={{ pin1: "net.OUT", pin2: "net.GND" }}
    />

    <schematictext
      text="VIN = 0 V, SYSOFF disconnects BAT from OUT"
      schX={0}
      schY={2.15}
      fontSize={0.16}
      anchor="center"
    />

    <trace from="U1.IN" to="net.GND" />
    <trace from="U1.VSS" to="net.GND" />
    <trace from="U1.SYSOFF" to="V_SYSOFF.OUT" />
    <trace from="V_SYSOFF.VSS" to="net.GND" />
    <trace from="U1.BAT" to="IBAT_PROBE.pos" />
    <trace from="IBAT_PROBE.neg" to="V_BAT.pin1" />
    <trace from="V_BAT.pin2" to="net.GND" />
    <trace from="U1.OUT" to="R_LOAD.pin1" />
    <trace from="R_LOAD.pin2" to="net.GND" />

    <voltageprobe
      name="VSYSOFF_PROBE"
      connectsTo="U1.SYSOFF"
      referenceTo="U1.VSS"
      color="#394fbd"
      graphDisplayName="VSYSOFF"
      graphCenter={0}
      graphOffsetDivs={6}
      graphUnitsPerDiv={5}
    />
    <voltageprobe
      name="VBAT_PROBE"
      connectsTo="U1.BAT"
      referenceTo="U1.VSS"
      color="#55a86c"
      graphDisplayName="VBAT"
      graphCenter={4}
      graphOffsetDivs={0}
      graphUnitsPerDiv={2}
    />
    <voltageprobe
      name="VOUT_PROBE"
      connectsTo="U1.OUT"
      referenceTo="U1.VSS"
      color="#a64acb"
      graphDisplayName="VOUT"
      graphCenter={4}
      graphOffsetDivs={-2.4}
      graphUnitsPerDiv={2}
    />

    <analogsimulation
      name="BQ24075 System ON/OFF Input Disconnected"
      duration="24ms"
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

export default BQ24075SystemOnOffInputDisconnectedCircuit;
