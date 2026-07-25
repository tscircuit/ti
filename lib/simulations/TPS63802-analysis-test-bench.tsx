import type { SubcircuitProps } from "@tscircuit/props";
import { TPS63802DLAR } from "../chips/TPS63802DLAR.circuit.tsx";

const tps63802AveragedAnalysisModel = `
* Averaged TPS63802 model for DC operating-point, DC sweep, and AC analyses.
* TI's TPS63802_TRANS model is intentionally retained for transient examples.
* DC coefficients approximate datasheet Figures 10-11 and 10-13.
* The control pole is illustrative because the datasheet publishes no Bode plot.
.SUBCKT TPS63802_AVERAGED AGND EN FB GND L1 L2 MODE PG VIN VOUT
B_ERROR ERROR_RAW GND V=3.3077+80*(0.5-V(FB,GND))+0.00055*(V(VIN,GND)-3.6)
R_CONTROL_POLE ERROR_RAW ERROR_FILTERED 1k
C_CONTROL_POLE ERROR_FILTERED GND 15.9n
B_DRIVER DRIVE GND V=V(ERROR_FILTERED,GND)
R_OUTPUT DRIVE VOUT 0.5m
R_L1_BIAS L1 GND 1G
R_L2_BIAS L2 GND 1G
R_MODE_BIAS MODE GND 1G
R_PG_BIAS PG GND 1G
R_AGND_BIAS AGND GND 1m
.ENDS TPS63802_AVERAGED
`;

type TPS63802AnalysisTestBenchProps = SubcircuitProps & {
  inputVoltage: string;
  feedbackAcMagnitude?: string;
  loadResistance?: string;
  loadCurrent?: string;
  mode: "pfm" | "pwm";
};

export const TPS63802AnalysisTestBench = ({
  children,
  inputVoltage,
  feedbackAcMagnitude,
  loadResistance,
  loadCurrent,
  mode,
  ...props
}: TPS63802AnalysisTestBenchProps) => (
  <subcircuit {...props}>
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
      spiceModel={
        <spicemodel
          source={tps63802AveragedAnalysisModel}
          spicePinMapping={{
            AGND: "AGND",
            EN: "EN",
            FB: "FB",
            GND: "GND",
            L1: "L1",
            L2: "L2",
            MODE: "MODE",
            PG: "PG",
            VIN: "VIN",
            VOUT: "VOUT",
          }}
        />
      }
    />

    <voltagesource
      name="V_IN"
      voltage={inputVoltage}
      schX={-7}
      schY={0}
      schRotation="270deg"
    />

    <inductor
      name="L1"
      inductance="0.47uH"
      footprint="0603"
      schX={0}
      schY={5}
      schOrientation="horizontal"
    />
    <resistor
      name="R_L1_DCR"
      resistance="7.6m"
      footprint="0603"
      schX={1.5}
      schY={5}
      schOrientation="horizontal"
    />

    <capacitor
      name="C_IN"
      capacitance="10uF"
      footprint="0603"
      schX={-4.8}
      schY={-1}
      schOrientation="vertical"
    />
    <capacitor
      name="C_OUT"
      capacitance="22uF"
      footprint="0603"
      schX={5.5}
      schY={-1}
      schOrientation="vertical"
    />

    <resistor
      name="R_FB_TOP"
      resistance="511k"
      footprint="0603"
      schX={4}
      schY={1}
      schOrientation="vertical"
    />
    <resistor
      name="R_FB_BOTTOM"
      resistance="91k"
      footprint="0603"
      schX={4}
      schY={-1}
      schOrientation="vertical"
    />
    <resistor
      name="R_PG"
      resistance="100k"
      footprint="0603"
      schX={2.7}
      schY={1.8}
      schOrientation="vertical"
    />
    {feedbackAcMagnitude && (
      <voltagesource
        name="V_FB_INJECT"
        voltage="0V"
        acMagnitude={feedbackAcMagnitude}
        schX={2.7}
        schY={-0.2}
        schRotation="180deg"
      />
    )}

    {loadResistance && (
      <resistor
        name="R_LOAD"
        resistance={loadResistance}
        footprint="0603"
        schX={7}
        schY={-1}
        schOrientation="vertical"
      />
    )}
    {loadCurrent && (
      <currentsource
        name="I_LOAD"
        current={loadCurrent}
        schX={7}
        schY={-1}
        schRotation="180deg"
      />
    )}

    <trace from="V_IN.pin1" to="U1.VIN" />
    <trace from="V_IN.pin2" to="net.GND" />
    <trace from="U1.VIN" to="U1.EN" />
    <trace from="U1.MODE" to={mode === "pwm" ? "U1.VIN" : "net.GND"} />

    <trace from="U1.L1" to="L1.pin1" />
    <trace from="L1.pin2" to="R_L1_DCR.pin1" />
    <trace from="R_L1_DCR.pin2" to="U1.L2" />

    <trace from="U1.VIN" to="C_IN.pin1" />
    <trace from="C_IN.pin2" to="net.GND" />
    <trace from="U1.VOUT" to="C_OUT.pin1" />
    <trace from="C_OUT.pin2" to="net.GND" />

    <trace from="U1.VOUT" to="R_FB_TOP.pin1" />
    <trace from="R_FB_TOP.pin2" to="net.FB_DIVIDER" />
    <trace from="R_FB_BOTTOM.pin1" to="net.FB_DIVIDER" />
    <trace from="R_FB_BOTTOM.pin2" to="net.GND" />
    {feedbackAcMagnitude ? (
      <>
        <trace from="V_FB_INJECT.pin1" to="U1.FB" />
        <trace from="V_FB_INJECT.pin2" to="net.FB_DIVIDER" />
      </>
    ) : (
      <trace from="U1.FB" to="net.FB_DIVIDER" />
    )}
    <trace from="U1.VIN" to="R_PG.pin1" />
    <trace from="R_PG.pin2" to="U1.PG" />

    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.AGND" to="net.GND" />

    {loadResistance && (
      <>
        <trace from="U1.VOUT" to="R_LOAD.pin1" />
        <trace from="R_LOAD.pin2" to="net.GND" />
      </>
    )}
    {loadCurrent && (
      <>
        <trace from="U1.VOUT" to="I_LOAD.pos" />
        <trace from="I_LOAD.neg" to="net.GND" />
      </>
    )}

    <voltageprobe
      name="VOUT_PROBE"
      connectsTo="U1.VOUT"
      referenceTo="U1.GND"
      color="#315cff"
      graphDisplayName="VOUT"
      graphCenter={3.3}
      graphVoltagePerDiv={0.1}
    />

    <schematictext
      text={`TPS63802 ${mode.toUpperCase()} analysis test bench`}
      schX={0}
      schY={6.4}
      fontSize={0.18}
      anchor="center"
    />

    {children}
  </subcircuit>
);
