import { TPS63802DLAR } from "../chips/TPS63802DLAR";

export const TPS63802SwitchingWaveformsPfmBuckOperationCircuit = () => (
  <board routingDisabled>
    <TPS63802DLAR
      name="U1"
      schX={0}
      schY={0}
      schWidth={2.5}
      schHeight={6}
      showPinAliases={false}
      schPinArrangement={{
        topSide: { pins: ["L1", "L2"], direction: "left-to-right" },
        leftSide: {
          pins: ["VIN", "EN", "MODE", "GND"],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: ["VOUT", "PG", "FB", "AGND"],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{
        L2: { marginLeft: 1 },
        VIN: { marginBottom: 1 },
        EN: { marginBottom: 1 },
        MODE: { marginBottom: 1 },
        VOUT: { marginBottom: 1 },
        PG: { marginBottom: 1 },
        FB: { marginBottom: 1 },
      }}
    />

    <voltagesource
      name="V_IN"
      voltage="4.2V"
      schX={-7.2}
      schY={0.5}
      schRotation="270deg"
    />

    <inductor
      name="L1"
      inductance={4.7e-7}
      footprint="0603"
      schX={0}
      schY={4}
      schOrientation="horizontal"
    />
    <ammeter
      name="IL_PROBE"
      connections={{ pos: "U1.L1", neg: "L1.pin1" }}
      color="#d946ef"
      graphDisplayName="IL"
      graphCenter={0}
      graphOffsetDivs={0}
      graphUnitsPerDiv={0.8}
    />

    <resistor
      name="R_L1_DCR"
      resistance="0.0076"
      footprint="0603"
      schX={1.4}
      schY={4}
      schOrientation="horizontal"
    />

    <capacitor
      name="C1"
      capacitance="5uF"
      footprint="0603"
      schX={-4}
      schY={1.1}
      schOrientation="vertical"
    />
    <resistor
      name="R_CIN_ESR"
      resistance="0.01"
      footprint="0603"
      schX={-4.8}
      schY={1.1}
      schOrientation="vertical"
    />

    <capacitor
      name="C2"
      capacitance="8.2uF"
      footprint="0805"
      schX={6}
      schY={0.5}
      schOrientation="vertical"
    />
    <resistor
      name="R_COUT_ESR"
      resistance="0.01"
      footprint="0603"
      schX={5.2}
      schY={0.5}
      schOrientation="vertical"
    />

    <resistor
      name="R1"
      resistance="511k"
      footprint="0603"
      schX={3.8}
      schY={1}
      schOrientation="vertical"
    />

    <resistor
      name="R2"
      resistance="91k"
      footprint="0603"
      schX={3.8}
      schY={-1.2}
      schOrientation="vertical"
    />

    <resistor
      name="R3"
      resistance="100k"
      footprint="0603"
      schX={2.7}
      schY={1.4}
      schOrientation="vertical"
    />

    <resistor
      name="R_LOAD"
      resistance="82.5"
      footprint="0603"
      schX={7.7}
      schY={0.1}
      schOrientation="vertical"
    />

    <netlabel
      net="VIN"
      connection="U1.VIN"
      schX={-5.7}
      schY={1.8}
      anchorSide="right"
    />
    <schematictext
      text="VIN 1.3V-5.5V"
      schX={-6}
      schY={2.2}
      fontSize={0.18}
      anchor="center"
    />
    <netlabel
      net="VOUT"
      connection="U1.pin6"
      schX={1.7}
      schY={1.8}
      anchorSide="left"
    />
    <schematictext
      text="VOUT = 3.3V"
      schX={2}
      schY={2.2}
      fontSize={0.15}
      anchor="center"
    />

    <trace from="V_IN.pin1" to="U1.VIN" />
    <trace from="V_IN.pin2" to="net.GND" />

    <trace from="U1.L1" to="IL_PROBE.pos" />
    <trace from="IL_PROBE.neg" to="L1.pin1" />
    <trace from="L1.pin2" to="R_L1_DCR.pin1" />
    <trace from="R_L1_DCR.pin2" to="U1.L2" />

    <trace from="U1.VIN" to="R_CIN_ESR.pin1" />
    <trace from="R_CIN_ESR.pin2" to="C1.pin1" />
    <trace from="U1.VIN" to="U1.EN" />
    <trace from="U1.VIN" to="R3.pin1" />

    <trace from="U1.VOUT" to="R_COUT_ESR.pin1" />
    <trace from="R_COUT_ESR.pin2" to="C2.pin1" />
    <trace from="R1.pin1" to="U1.VOUT" />

    <trace from="U1.VOUT" to="R_LOAD.pin1" />
    <trace from="R_LOAD.pin2" to="net.GND" />

    <trace from="U1.PG" to="R3.pin2" />
    <trace from="U1.FB" to="R1.pin2" />
    <trace from="U1.FB" to="R2.pin1" />

    <trace from="U1.MODE" to="net.GND" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.AGND" to="net.GND" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="R2.pin2" to="net.GND" />

    <voltageprobe
      name="VOUT_PROBE"
      connectsTo="U1.VOUT"
      referenceTo="U1.GND"
      color="#315cff"
      graphDisplayName="VO"
      graphCenter={3.3}
      graphOffsetDivs={3}
      graphUnitsPerDiv={0.15}
    />
    <voltageprobe
      name="L1_PROBE"
      connectsTo="U1.L1"
      referenceTo="U1.GND"
      color="#00d98b"
      graphDisplayName="L1"
      graphCenter={0}
      graphOffsetDivs={2}
      graphUnitsPerDiv={6.5}
    />
    <voltageprobe
      name="L2_PROBE"
      connectsTo="U1.L2"
      referenceTo="U1.GND"
      color="#f1b400"
      graphDisplayName="L2"
      graphCenter={0}
      graphOffsetDivs={1}
      graphUnitsPerDiv={5.5}
    />

    <analogsimulation
      name="TPS63802 Switching Waveforms PFM Buck Operation"
      duration="704us"
      startTime="686us"
      timePerStep="5ns"
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

export default TPS63802SwitchingWaveformsPfmBuckOperationCircuit;
