import { TPS22919 } from "../chips/TPS22919.circuit.tsx";

const onFallingPulseSource = `
.SUBCKT TPS22919_FIG21_ON_FALL OUT GND
VON OUT GND PULSE(5 0 16u 100n 100n 120u 200u)
.ENDS TPS22919_FIG21_ON_FALL
`;

const OnFallingPulse = (props: {
  name: string;
  schX?: number;
  schY?: number;
}) => (
  <chip
    {...props}
    pinLabels={{
      pin1: ["OUT"],
      pin2: ["GND"],
    }}
    schWidth={1.4}
    schHeight={1.2}
    spiceModel={
      <spicemodel
        source={onFallingPulseSource}
        spicePinMapping={{
          OUT: "OUT",
          GND: "GND",
        }}
      />
    }
  />
);

export const TPS22919Figure21TurnOffSmallLoadCapacitanceCircuit = () => (
  <board bomDisabled routingDisabled schMaxTraceDistance={3}>
    <TPS22919
      name="U1"
      schX={0}
      schY={0}
      schWidth={2.4}
      schHeight={3.6}
      showPinAliases={false}
      schPinArrangement={{
        leftSide: {
          pins: ["IN", "ON", "GND"],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: ["OUT", "QOD"],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{
        IN: { marginBottom: 0.8 },
        ON: { marginBottom: 0.8 },
        OUT: { marginBottom: 1.2 },
      }}
    />

    <voltagesource
      name="V_IN"
      voltage="3.3V"
      schX={-5}
      schY={1.1}
      schRotation="270deg"
    />

    <OnFallingPulse name="V_ON" schX={-4.3} schY={-1} />

    <resistor
      name="R_L"
      resistance="100"
      footprint="0603"
      schX={3.8}
      schY={0.4}
      schOrientation="vertical"
    />

    <trace from="V_IN.pin1" to="U1.IN" />
    <trace from="V_IN.pin2" to="net.GND" />

    <trace from="V_ON.OUT" to="U1.ON" />
    <trace from="V_ON.GND" to="net.GND" />

    <trace from="U1.OUT" to="R_L.pin1" />
    <trace from="U1.QOD" to="U1.OUT" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="R_L.pin2" to="net.GND" />

    <voltageprobe
      name="VIN_PROBE"
      connectsTo="U1.IN"
      referenceTo="U1.GND"
      color="#1d4ed8"
      graphDisplayName="VIN"
      graphCenter={3.3}
      graphOffsetDivs={0.5}
      graphUnitsPerDiv={2}
    />
    <voltageprobe
      name="ON_PROBE"
      connectsTo="U1.ON"
      referenceTo="U1.GND"
      color="#06b6d4"
      graphDisplayName="ON"
      graphCenter={2.5}
      graphOffsetDivs={1.5}
      graphUnitsPerDiv={5}
    />
    <voltageprobe
      name="VOUT_PROBE"
      connectsTo="U1.OUT"
      referenceTo="U1.GND"
      color="#d946ef"
      graphDisplayName="VOUT"
      graphCenter={1.65}
      graphOffsetDivs={-0.4}
      graphUnitsPerDiv={2}
    />

    <analogsimulation
      name="TPS22919 Figure 21 Turn Off with Small Load Capacitance"
      duration="80us"
      timePerStep="20ns"
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

export default TPS22919Figure21TurnOffSmallLoadCapacitanceCircuit;
